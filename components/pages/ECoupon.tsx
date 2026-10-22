import type { eCouponPage } from "@/lib/data/pages/eCoupon";

/** E-Coupon (/e-coupon/). */
export function ECouponView({ data }: { data: typeof eCouponPage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
