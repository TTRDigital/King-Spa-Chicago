import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { MensBodyScrubView } from "@/components/pages/MensBodyScrub";

const PATH = "/body-scrub/mens-body-scrubs/";
const crumbs = [{ name: "Body Scrub", path: "/body-scrub/" }, { name: "Men’s Body Scrubs", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("mensBodyScrubPage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("mensBodyScrubPage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <MensBodyScrubView data={page} />
    </>
  );
}
