import type { saunaPage } from "@/lib/data/pages/sauna";

/** sauna rooms (/sauna-healing-rooms/). */
export function SaunaView({ data }: { data: typeof saunaPage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
