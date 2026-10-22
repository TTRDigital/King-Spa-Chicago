import type { bodyScrubPage } from "@/lib/data/pages/bodyScrub";

/** Body Scrub (/body-scrub/). */
export function BodyScrubView({ data }: { data: typeof bodyScrubPage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
