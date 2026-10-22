import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { BodyScrubView } from "@/components/pages/BodyScrub";

const PATH = "/body-scrub/";
const crumbs = [{ name: "Body Scrub", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("bodyScrubPage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("bodyScrubPage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <BodyScrubView data={page} />
    </>
  );
}
