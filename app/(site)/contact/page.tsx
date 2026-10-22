import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { ContactView } from "@/components/pages/Contact";

const PATH = "/contact/";
const crumbs = [{ name: "Contact", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("contactPage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("contactPage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <ContactView data={page} />
    </>
  );
}
