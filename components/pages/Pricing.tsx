import type { pricingPage } from "@/lib/data/pages/pricing";

/** Pricing (/pricing/). */
export function PricingView({ data }: { data: typeof pricingPage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
