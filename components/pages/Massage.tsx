import type { massagePage } from "@/lib/data/pages/massage";

/** massagetherapy (/massagetherapy/). */
export function MassageView({ data }: { data: typeof massagePage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
