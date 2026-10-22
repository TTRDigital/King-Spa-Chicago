import type { vSteamPage } from "@/lib/data/pages/vSteam";

/** v-steam (/v-steam/). */
export function VSteamView({ data }: { data: typeof vSteamPage }) {
  return <h1 className="p-10">{data.seo.title}</h1>;
}
