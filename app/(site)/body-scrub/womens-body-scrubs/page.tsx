import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { WomensBodyScrubView } from "@/components/pages/WomensBodyScrub";

const PATH = "/body-scrub/womens-body-scrubs/";
const crumbs = [{ name: "Body Scrub", path: "/body-scrub/" }, { name: "Women’s Body Scrubs", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("womensBodyScrubPage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("womensBodyScrubPage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <WomensBodyScrubView data={page} />
    </>
  );
}
