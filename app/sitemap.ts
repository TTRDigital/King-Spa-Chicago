import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/content";
import { pageRegistry } from "@/lib/data/registry";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** The old site's sitemap: every page and post (archive pages are left out, as WordPress listed them separately). */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  return [
    ...Object.values(pageRegistry).map((p) => ({ url: absoluteUrl(p.path), changeFrequency: "monthly" as const, priority: p.path === "/" ? 1 : 0.8 })),
    ...posts.map((p) => ({ url: absoluteUrl(`/${p.category}/${p.slug}/`), lastModified: p.date, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
