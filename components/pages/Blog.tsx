import type { blogPage } from "@/lib/data/pages/blog";

/** Blog (/blog/). */
export function BlogView({ data }: { data: typeof blogPage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
