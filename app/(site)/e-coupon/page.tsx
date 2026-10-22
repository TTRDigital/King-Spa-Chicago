import { getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { ECouponView } from "@/components/pages/ECoupon";

const PATH = "/e-coupon/";
const crumbs = [{ name: "E-Coupon", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("eCouponPage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const page = await getPage("eCouponPage");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <ECouponView data={page} />
    </>
  );
}
