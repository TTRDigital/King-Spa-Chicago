import type { homePage } from "@/lib/data/pages/home";

/** Home (/). */
export function HomeView({ data }: { data: typeof homePage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
