import type { firstTimeGuidePage } from "@/lib/data/pages/firstTimeGuide";

/** First-Time Guide (/first-time-guide/). */
export function FirstTimeGuideView({ data }: { data: typeof firstTimeGuidePage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
