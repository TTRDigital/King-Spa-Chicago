import type { fallSalePage } from "@/lib/data/pages/fallSale";

/** Fall Sale (/fall-sale/). */
export function FallSaleView({ data }: { data: typeof fallSalePage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
