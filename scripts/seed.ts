/**
 * Loads the built-in content (lib/data) and its images into Sanity, so the
 * CMS starts full instead of empty.
 *
 *   npm run seed                 # create documents that don't exist yet
 *   npm run seed -- --force      # overwrite with the built-in content
 *   npm run seed -- --dry-run    # build every document without uploading or writing
 *   npm run seed -- --force --only=pricingPage,siteSettings  # only documents whose ID starts with these
 *
 * Writes to NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET
 * (environment or .env.local). Needs SANITY_WRITE_TOKEN (Editor token from
 * sanity.io/manage > API > Tokens). Without --force, anything an editor
 * already changed is kept.
 *
 * Documents are built from the same description as the studio schema
 * (lib/cms/spec.ts), so every field lands where /cms expects it.
 */
import { createReadStream, existsSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import { createClient } from "@sanity/client";
import { infer, isImg, type Spec } from "../lib/cms/spec.ts";
import { pageRegistry, posts, settingsDoc } from "../lib/data/registry.ts";

const root = new URL("..", import.meta.url).pathname;

// Minimal .env.local reader so the script works without extra packages.
if (existsSync(join(root, ".env.local"))) {
  for (const line of readFileSync(join(root, ".env.local"), "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

// Imported after .env.local is loaded so its values apply.
const { dataset, projectId } = await import("../sanity/env.ts");
const token = process.env.SANITY_WRITE_TOKEN;
const force = process.argv.includes("--force");
const dryRun = process.argv.includes("--dry-run");
const only = (process.argv.find((a) => a.startsWith("--only="))?.slice(7) ?? "").split(",").map((x) => x.trim()).filter(Boolean);

if (!dryRun && (!projectId || !token)) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_WRITE_TOKEN (Editor token from sanity.io/manage > API > Tokens).");
  process.exit(1);
}

const client = createClient({ projectId: projectId || "dry-run", dataset, token, apiVersion: "2025-02-19", useCdn: false });

let keyN = 0;
const key = () => `k${(keyN++).toString(36)}`;
const uploaded = new Map<string, Promise<string>>();

function asset(src: string): Promise<string> {
  if (!uploaded.has(src)) {
    const file = join(root, "public", src);
    if (!existsSync(file)) throw new Error(`Missing image file: ${file}`);
    uploaded.set(
      src,
      dryRun
        ? Promise.resolve(`image-dry-${uploaded.size}`)
        : client.assets.upload("image", createReadStream(file), { filename: basename(file) }).then((doc) => {
            process.stdout.write(".");
            return doc._id;
          }),
    );
  }
  return uploaded.get(src)!;
}

/** Built-in value -> Sanity value, following the schema description. */
async function toSanity(value: unknown, spec: Spec, inArray = false): Promise<unknown> {
  if (value === undefined || value === null) return undefined;
  switch (spec.kind) {
    case "image": {
      if (!isImg(value)) return undefined;
      return { ...(inArray ? { _key: key() } : {}), _type: "altImage", alt: value.alt, asset: { _type: "reference", _ref: await asset(value.src) } };
    }
    case "object": {
      const out: Record<string, unknown> = inArray ? { _key: key(), _type: "item" } : {};
      for (const [k, s] of Object.entries(spec.fields)) {
        const v = await toSanity((value as Record<string, unknown>)[k], s);
        if (v !== undefined) out[k] = v;
      }
      return out;
    }
    case "array":
      return Promise.all((value as unknown[]).map((v) => toSanity(v, spec.of, true)));
    default:
      return value;
  }
}

/** Every document: ID, type, built-in content and the schema description it follows. */
function sources() {
  const postSpec = infer(posts[0]); // posts share one schema, built from the first post
  return [
    { id: settingsDoc.id, type: settingsDoc.id, data: settingsDoc.data as unknown, spec: infer(settingsDoc.data) },
    ...Object.entries(pageRegistry).map(([id, p]) => ({ id, type: id, data: p.data as unknown, spec: infer(p.data) })),
    ...posts.map((p) => ({ id: `post-${p.slug}`, type: "post", data: p as unknown, spec: postSpec })),
  ];
}

const wanted = (id: string) => !only.length || only.some((p) => id.startsWith(p));
console.log(`Seeding ${projectId || "(no project)"}/${dataset}${force ? " (overwriting)" : " (keeping existing documents)"}${dryRun ? " [dry run]" : ""}${only.length ? ` only: ${only.join(", ")}` : ""}. Uploading images`);
// Only the selected documents are built, so only their images are uploaded.
const docs: { _id: string; _type: string }[] = [];
for (const s of sources().filter((s) => wanted(s.id))) docs.push({ _id: s.id, _type: s.type, ...((await toSanity(s.data, s.spec)) as Record<string, unknown>) });
console.log(`\n${uploaded.size} images ${dryRun ? "checked" : "uploaded"}. Writing ${docs.length} documents…`);
if (dryRun) {
  console.log("Dry run, nothing written:", docs.map((d) => d._id).join(", "), `(${Math.round(JSON.stringify(docs).length / 1024)} KB of content)`);
  process.exit(0);
}

// Small transactions keep each request well under Sanity's size limit.
for (let i = 0; i < docs.length; i += 10) {
  const tx = client.transaction();
  for (const d of docs.slice(i, i + 10)) {
    if (force) tx.createOrReplace(d);
    else tx.createIfNotExists(d);
  }
  await tx.commit({ visibility: "async" });
  process.stdout.write(`${Math.min(i + 10, docs.length)}/${docs.length} `);
}
console.log("\nDone. Open /cms to see the content.");
