import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { RewardView } from "@/components/pages/Reward";

const PATH = "/reward/";
const crumbs = [{ name: "reward", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("rewardPage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("rewardPage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <RewardView data={page} />
    </>
  );
}
