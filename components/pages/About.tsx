import type { aboutPage } from "@/lib/data/pages/about";

/** About (/about/). */
export function AboutView({ data }: { data: typeof aboutPage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
