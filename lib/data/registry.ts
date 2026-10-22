/**
 * Every page document: its Sanity ID, studio title, URL and built-in content.
 * The Sanity schema, the seed script and the GROQ merge are all built from this list.
 */
import { homePage } from "./pages/home.ts";
import { aboutPage } from "./pages/about.ts";
import { saunaPage } from "./pages/sauna.ts";
import { bodyScrubPage } from "./pages/bodyScrub.ts";
import { mensBodyScrubPage } from "./pages/mensBodyScrub.ts";
import { womensBodyScrubPage } from "./pages/womensBodyScrub.ts";
import { massagePage } from "./pages/massage.ts";
import { facialsPage } from "./pages/facials.ts";
import { vSteamPage } from "./pages/vSteam.ts";
import { pricingPage } from "./pages/pricing.ts";
import { firstTimeGuidePage } from "./pages/firstTimeGuide.ts";
import { rewardPage } from "./pages/reward.ts";
import { eCouponPage } from "./pages/eCoupon.ts";
import { fallSalePage } from "./pages/fallSale.ts";
import { contactPage } from "./pages/contact.ts";
import { blogPage } from "./pages/blog.ts";
import { siteSettings } from "./site.ts";
import { posts } from "./posts.ts";

export const pageRegistry = {
  homePage: { title: "Home", path: "/", data: homePage },
  aboutPage: { title: "About", path: "/about/", data: aboutPage },
  saunaPage: { title: "Sauna rooms", path: "/sauna-healing-rooms/", data: saunaPage },
  bodyScrubPage: { title: "Body Scrub", path: "/body-scrub/", data: bodyScrubPage },
  mensBodyScrubPage: { title: "Men's Body Scrubs", path: "/body-scrub/mens-body-scrubs/", data: mensBodyScrubPage },
  womensBodyScrubPage: { title: "Women's Body Scrubs", path: "/body-scrub/womens-body-scrubs/", data: womensBodyScrubPage },
  massagePage: { title: "Massage Therapy", path: "/massagetherapy/", data: massagePage },
  facialsPage: { title: "Facials", path: "/facials/", data: facialsPage },
  vSteamPage: { title: "V-Steam", path: "/v-steam/", data: vSteamPage },
  pricingPage: { title: "Pricing", path: "/pricing/", data: pricingPage },
  firstTimeGuidePage: { title: "First-Time Guide", path: "/first-time-guide/", data: firstTimeGuidePage },
  rewardPage: { title: "Rewards", path: "/reward/", data: rewardPage },
  eCouponPage: { title: "E-Coupon", path: "/e-coupon/", data: eCouponPage },
  fallSalePage: { title: "Fall Sale", path: "/fall-sale/", data: fallSalePage },
  contactPage: { title: "Contact", path: "/contact/", data: contactPage },
  blogPage: { title: "Blog", path: "/blog/", data: blogPage },
} as const;

export type PageId = keyof typeof pageRegistry;
export type PageData<K extends PageId> = (typeof pageRegistry)[K]["data"];

/** Site settings (header, footer, popups) and blog posts are documents too. */
export const settingsDoc = { id: "siteSettings", title: "Site settings", data: siteSettings } as const;
export const postSample = posts[0];
export { posts };
