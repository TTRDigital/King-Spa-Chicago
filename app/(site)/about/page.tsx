import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { AboutView } from "@/components/pages/About";

const PATH = "/about/";
const crumbs = [{ name: "About", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("aboutPage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("aboutPage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <AboutView data={page} />
    </>
  );
}
