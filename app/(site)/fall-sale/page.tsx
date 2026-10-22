import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { FallSaleView } from "@/components/pages/FallSale";

const PATH = "/fall-sale/";
const crumbs = [{ name: "Fall Sale", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("fallSalePage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("fallSalePage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <FallSaleView data={page} />
    </>
  );
}
