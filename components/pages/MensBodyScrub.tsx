import type { mensBodyScrubPage } from "@/lib/data/pages/mensBodyScrub";
import { ScrubRitualPage } from "@/components/sections/ScrubRitualPage";

/** Men's Body Scrubs (/body-scrub/mens-body-scrubs/): same template as the women's page, as on the old site. */
export function MensBodyScrubView({ data }: { data: typeof mensBodyScrubPage }) {
  return <ScrubRitualPage data={data} />;
}
