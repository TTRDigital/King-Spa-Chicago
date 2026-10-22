import type { contactPage } from "@/lib/data/pages/contact";

/** Contact (/contact/). */
export function ContactView({ data }: { data: typeof contactPage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
