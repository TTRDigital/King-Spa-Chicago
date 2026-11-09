/* E-Coupon (/e-coupon/): built-in content, copied from chi.kingspa.com. Edited in /cms > Pages > E-Coupon. */
import { images } from "../images.ts";

export const eCouponPage = {
  seo: { title: "E-Coupon – King Spa Chicago", description: "" },
  banner: {
    heading: "Get Your King Spa E-Coupon in the Kingspa Rewards App",
    subheading: "Download the free Kingspa Rewards app to claim your e-coupon for Chicago's authentic Korean spa experience.",
  },
  /** The two store buttons, shown under the banner heading and again in the "How to" card. */
  apps: {
    appStore: { label: "Download on the App Store", href: "https://apps.apple.com/us/app/kingspa-rewards/id6756033799" },
    googlePlay: { label: "Get it on Google Play", href: "https://play.google.com/store/apps/details?id=com.kingspa.mobileapp" },
  },
  intro: {
    heading: "Step Into 500 Years Of Korean Healing Tradition",
    text: "Enjoy 11 specialty saunas, hot and cold plunge pools and all-day access to our jjimjilbang. Download the Kingspa Rewards app to get your e-coupon, earn rewards on every visit and be the first to hear about exclusive offers.",
  },
  howTo: {
    heading: "How to Get Your E-Coupon",
    /** Shown with a phone, a person-plus and a ticket icon, in that order. */
    steps: [
      "1. Download the free Kingspa Rewards app on your iPhone or Android phone.",
      "2. Create your free account.",
      "3. Show your e-coupon in the app at the front desk when you visit.",
    ],
  },
  terms: {
    heading: "Terms & Conditions",
    contactLabel: "Questions? Contact",
    email: "ecoupon@kingspa.com",
    text: "E-coupon offers, terms and expiration dates are shown in the Kingspa Rewards app. Offer applies to admission only at our Chicago location.\nThis offer cannot be combined with other promotions or third-party vouchers (including Groupon, LivingSocial, Amazon, or Gilt City). Food, beverages, and spa services are not included. Guests must be 8 years or older to enter the facility. Outside food, alcohol, glass containers, blankets, and pillows are not permitted.",
  },
  expect: {
    heading: "New to King Spa? Here's What to Expect",
    text: "King Spa is a traditional Korean spa and jjimjilbang—a place where you can spend the entire day relaxing, sweating, and restoring. Unlike a typical spa appointment, there’s no schedule to follow. Arrive when you’d like, stay as long as you want, and move through the facility at your own pace.\nWhen you check in, you’ll receive a locker, spa attire, and towels. The wet areas (baths, showers, and hydrotherapy pools) are gender-separated. The dry areas—including all 11 saunas and the relaxation lounges—are co-ed, and guests wear the provided spa clothing throughout.",
  },
  dayPass: {
    image: images.sudatoriumArch,
    includesHeading: "Your Day Pass Includes:",
    includes: [
      "All-day admission – no appointment required",
      "Access to all 11 specialty saunas, including the Bul Han Jing Mak (Fire Sudatorium) heated to 390°F, the Gold Pyramid Sauna lined with 23K gold leaf, the Salt Dome, Ice Room, and more",
      "Gender-separated bathhouse with soaking tubs, cold plunge, and steam rooms",
      "Relaxation lounges and heated floors",
      "Locker, towels, and spa attire provided",
      "Indoor rest areas and common spaces",
    ],
    extrasHeading: "Available for an Additional Fee:",
    extras: ["Korean Body Scrub (세신)—not found anywhere else", "Massage and body treatments", "Facials and skin care services", "Food and beverages at the on-site café"],
  },
  reviews: { heading: "See What Our Guests Have to Say" },
  location: {
    heading: "Location & Hours",
    addressHeading: "ADDRESS",
    address: "809 Civic Center Dr. Niles, IL 60714",
    hoursHeading: "OPENING HOURS",
    hours: "Open 24/7\n(Entry prohibited 2am-6am)",
  },
};
