import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { MassageView } from "@/components/pages/Massage";

const PATH = "/massagetherapy/";
const crumbs = [{ name: "massagetherapy", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("massagePage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("massagePage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <MassageView data={page} />
    </>
  );
}
