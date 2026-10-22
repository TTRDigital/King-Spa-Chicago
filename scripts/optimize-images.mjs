/*
 * Makes WebP copies of every photo in public/images at the widths next/image
 * asks for (see lib/image-loader.ts), into public/_img. Runs before
 * `next build`; files that already exist and are newer than the source are
 * skipped, so repeat builds are fast.
 */
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// deviceSizes + imageSizes from next.config.ts.
const WIDTHS = [96, 256, 384, 640, 828, 1200, 1920];
const SRC = path.resolve("public/images");
const OUT = path.resolve("public/_img/images");

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) yield full;
  }
}

let made = 0;
let files = 0;
for await (const file of walk(SRC)) {
  files++;
  const rel = path.relative(SRC, file).replace(/\.(jpe?g|png|webp)$/i, "");
  const srcTime = (await stat(file)).mtimeMs;
  const meta = await sharp(file).metadata();
  await mkdir(path.dirname(path.join(OUT, rel)), { recursive: true });
  for (const w of WIDTHS) {
    const target = path.join(OUT, `${rel}-${w}.webp`);
    const existing = await stat(target).catch(() => null);
    if (existing && existing.mtimeMs >= srcTime) continue;
    // Never upscale: widths above the original get the original size.
    await sharp(file)
      .rotate()
      .resize({ width: Math.min(w, meta.width ?? w), withoutEnlargement: true })
      .webp({ quality: 74, effort: 5 })
      .toFile(target);
    made++;
  }
}
// Phone crop of the home hero (components/pages/Home.tsx, heroPhoneSrc): the bottom-center
// 768x760 the old site showed on phones at natural size, as its own small file.
const HERO_CROPS = ["facility/red-healing-room-wide.webp"];
for (const rel of HERO_CROPS) {
  const file = path.join(SRC, rel);
  const target = path.join(OUT, rel.replace(/\.(jpe?g|png|webp)$/i, "") + "-phone.webp");
  const existing = await stat(target).catch(() => null);
  if (existing && existing.mtimeMs >= (await stat(file)).mtimeMs) continue;
  const { width = 768, height = 760 } = await sharp(file).metadata();
  const w = Math.min(768, width);
  const h = Math.min(760, height);
  await sharp(file).extract({ left: Math.round((width - w) / 2), top: height - h, width: w, height: h }).webp({ quality: 74, effort: 5 }).toFile(target);
  made++;
}

console.log(`[images] ${files} photos, ${made} WebP files written to public/_img`);
