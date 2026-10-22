import type { womensBodyScrubPage } from "@/lib/data/pages/womensBodyScrub";

/** Women’s Body Scrubs (/body-scrub/womens-body-scrubs/). */
export function WomensBodyScrubView({ data }: { data: typeof womensBodyScrubPage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
