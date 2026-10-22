import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { FacialsView } from "@/components/pages/Facials";

const PATH = "/facials/";
const crumbs = [{ name: "facials", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("facialsPage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("facialsPage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <FacialsView data={page} />
    </>
  );
}
