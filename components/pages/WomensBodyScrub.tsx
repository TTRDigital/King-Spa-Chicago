import type { womensBodyScrubPage } from "@/lib/data/pages/womensBodyScrub";
import { ScrubRitualPage } from "@/components/sections/ScrubRitualPage";

/** Women's Body Scrubs (/body-scrub/womens-body-scrubs/). */
export function WomensBodyScrubView({ data }: { data: typeof womensBodyScrubPage }) {
  return <ScrubRitualPage data={data} />;
}
