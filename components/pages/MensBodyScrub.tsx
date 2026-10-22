import type { mensBodyScrubPage } from "@/lib/data/pages/mensBodyScrub";

/** Men’s Body Scrubs (/body-scrub/mens-body-scrubs/). */
export function MensBodyScrubView({ data }: { data: typeof mensBodyScrubPage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
