import type { facialsPage } from "@/lib/data/pages/facials";

/** facials (/facials/). */
export function FacialsView({ data }: { data: typeof facialsPage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
