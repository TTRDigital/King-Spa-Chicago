import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { PricingView } from "@/components/pages/Pricing";

const PATH = "/pricing/";
const crumbs = [{ name: "Pricing", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("pricingPage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("pricingPage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <PricingView data={page} />
    </>
  );
}
