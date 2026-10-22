import type { rewardPage } from "@/lib/data/pages/reward";

/** reward (/reward/). */
export function RewardView({ data }: { data: typeof rewardPage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
