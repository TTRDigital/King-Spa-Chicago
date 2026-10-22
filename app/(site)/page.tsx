import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { HomeView } from "@/components/pages/Home";

const PATH = "/";

export async function generateMetadata() {
  const page = await getPage("homePage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("homePage");
  return (
    <>
      <HomeView data={page} />
    </>
  );
}
