/**
 * The CMS shape of every page is read from its built-in content (lib/data):
 * strings become text fields, {src, alt, width, height} objects become images
 * with alt text, lists become lists. The same description builds the Sanity
 * schema (sanity/schemaTypes), the seed documents (scripts/seed.ts) and turns
 * Sanity documents back into page content (lib/content.ts), so the three can
 * never drift apart.
 */
export type Spec =
  | { kind: "string"; long: boolean }
  | { kind: "number" }
  | { kind: "boolean" }
  | { kind: "image" }
  | { kind: "object"; fields: Record<string, Spec> }
  | { kind: "array"; of: Spec };

type Obj = Record<string, unknown>;
const isObj = (v: unknown): v is Obj => typeof v === "object" && v !== null && !Array.isArray(v);

export const isImg = (v: unknown): v is { src: string; alt: string; width: number; height: number } =>
  isObj(v) && typeof v.src === "string" && "alt" in v && "width" in v;

/** Longer strings get a multi-line box in the studio. */
const LONG = 90;

function combine(a: Spec, b: Spec): Spec {
  if (a.kind === "string" && b.kind === "string") return { kind: "string", long: a.long || b.long };
  if (a.kind === "object" && b.kind === "object") {
    const fields: Record<string, Spec> = { ...a.fields };
    for (const [k, s] of Object.entries(b.fields)) fields[k] = k in fields ? combine(fields[k], s) : s;
    return { kind: "object", fields };
  }
  if (a.kind === "array" && b.kind === "array") return { kind: "array", of: combine(a.of, b.of) };
  return a;
}

export function infer(v: unknown): Spec {
  if (typeof v === "string") return { kind: "string", long: v.length > LONG || v.includes("\n") };
  if (typeof v === "number") return { kind: "number" };
  if (typeof v === "boolean") return { kind: "boolean" };
  if (isImg(v)) return { kind: "image" };
  if (Array.isArray(v)) {
    if (!v.length) return { kind: "array", of: { kind: "string", long: true } };
    return { kind: "array", of: v.map(infer).reduce(combine) };
  }
  if (isObj(v)) {
    const fields: Record<string, Spec> = {};
    for (const [k, x] of Object.entries(v)) if (x !== undefined && x !== null) fields[k] = infer(x);
    return { kind: "object", fields };
  }
  return { kind: "string", long: false };
}

/** "whyBook" -> "Why book", "faqItems" -> "FAQ items". */
export function titleFor(key: string): string {
  const words = key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((w) => ({ faq: "FAQ", faqs: "FAQs", cta: "CTA", seo: "SEO", url: "URL", id: "ID", vip: "VIP", h1: "H1" })[w] ?? w);
  const s = words.join(" ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ---------- Sanity document -> page content ---------- */

/** image-<hash>-<w>x<h>-<ext> -> CDN URL and size, without a GROQ join. */
export function assetUrl(ref: string, projectId: string, dataset: string) {
  const m = ref.match(/^(?:image|file)-([a-f0-9]+)-(\d+)x(\d+)-(\w+)$/);
  if (m) return { src: `https://cdn.sanity.io/images/${projectId}/${dataset}/${m[1]}-${m[2]}x${m[3]}.${m[4]}`, width: +m[2], height: +m[3] };
  const f = ref.match(/^file-([a-f0-9]+)-(\w+)$/);
  if (f) return { src: `https://cdn.sanity.io/files/${projectId}/${dataset}/${f[1]}.${f[2]}`, width: 0, height: 0 };
  return null;
}

export function fromSanity(v: unknown, projectId: string, dataset: string): unknown {
  if (Array.isArray(v)) return v.map((x) => fromSanity(x, projectId, dataset));
  if (!isObj(v)) return v;
  const asset = isObj(v.asset) && typeof v.asset._ref === "string" ? assetUrl(v.asset._ref, projectId, dataset) : null;
  if (asset) return { ...asset, alt: typeof v.alt === "string" ? v.alt : "" };
  if (v._type === "altImage") return null; // image field with no file chosen
  const out: Obj = {};
  for (const [k, x] of Object.entries(v)) if (!k.startsWith("_")) out[k] = fromSanity(x, projectId, dataset);
  return out;
}
