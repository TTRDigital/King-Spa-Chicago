import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { VSteamView } from "@/components/pages/VSteam";

const PATH = "/v-steam/";
const crumbs = [{ name: "v-steam", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("vSteamPage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("vSteamPage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <VSteamView data={page} />
    </>
  );
}
