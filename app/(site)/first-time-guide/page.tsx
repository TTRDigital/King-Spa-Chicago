import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { FirstTimeGuideView } from "@/components/pages/FirstTimeGuide";

const PATH = "/first-time-guide/";
const crumbs = [{ name: "First-Time Guide", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("firstTimeGuidePage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("firstTimeGuidePage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <FirstTimeGuideView data={page} />
    </>
  );
}
