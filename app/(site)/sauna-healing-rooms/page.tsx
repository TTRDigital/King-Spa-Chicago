import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { SaunaView } from "@/components/pages/Sauna";

const PATH = "/sauna-healing-rooms/";
const crumbs = [{ name: "sauna rooms", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("saunaPage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("saunaPage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <SaunaView data={page} />
    </>
  );
}
