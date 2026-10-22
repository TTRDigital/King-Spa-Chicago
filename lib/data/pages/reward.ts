/*
 * Rewards (/reward/): built-in content, copied from chi.kingspa.com/reward/ as it is
 * (including its First-Time Guide banner and the unfinished last sentence of the terms).
 * Edited in /cms > Pages > Rewards.
 */
import { images } from "../images.ts";

/* White cloud icon of step 01 (inline on the old page; not in images.ts yet). */

export const rewardPage = {
  seo: { title: "reward – King Spa Chicago", description: "" },
  banner: { korean: "어서 오세요", title: "King Spa & Sauna First-Time Guide", subtitle: "Everything You Need to Know" },
  intro: {
    image: images.rewardsApp,
    heading: "Your Healing,\nRewarded.",
    text: "Join the KingSpa Rewards community. Free to download, free to join — and every visit brings you closer to more healing.",
    card: images.rewardsBadge,
  },
  how: {
    eyebrow: "How the:",
    heading: "Rewards Program Works",
    steps: [
      { number: "01", icon: images.downloadAppIcon, title: "Download the App", text: "Available free on the App Store and Google Play. Create your account and your membership activates immediately." },
      { number: "02", icon: images.iconWelcome, title: "Earn 50 Welcome Points", text: "Your 50-point signup bonus is credited on your very first visit after downloading the app. A warm welcome from King Spa." },
      { number: "03", icon: images.iconEarnPoints, title: "Earn $1 ＝ 1 Point", text: "Every dollar spent on admission, food, and spa services earns one point. Points exclude taxes, tips, and Groupon passes." },
      { number: "04", icon: images.iconRedeem, title: "Redeem for Free Entry", text: "Accumulate 500 points and redeem them for complimentary admission. Your wellness ritual, on the house." },
    ],
  },
  benefits: {
    heading: "More Than Points. A Richer Experience.",
    text: "Your membership unlocks exclusive access to deals, seasonal promotions, birthday surprises, and a lower entry price — available only through the app.",
    scrub: {
      title: "Korean Body Scrub",
      duration: "40 Minutes",
      text: "Our signature seshin experience. Using traditional exfoliating mitts and expert technique, this treatment removes dead skin cells across the entire body, unveiling remarkably smooth, refreshed skin.",
      price: "$110",
    },
    cards: [
      { icon: images.iconMembers, title: "Members-Only Deals", text: "Receive exclusive promotions, flash coupons, and seasonal specials that are only available to Rewards App members.", tag: "Exclusive Access" },
      { icon: images.iconAppPrice, title: "$45 App Entry Price", text: "App members enjoy a special discounted admission of just $45 — a significant saving versus the regular $75 walk-in rate.", tag: "Save $30 Per Visit" },
      { icon: images.iconTracking, title: "Real-Time Point Tracking", text: "The app keeps a live tally of your current points balance, visit history, and available rewards all in one serene dashboard.", tag: "Save $30 Per Visit" },
      { icon: images.iconRedeem, title: "500 Points ＝ Free Entry", text: "Every 500 points you accumulate can be redeemed for a complimentary admission day — your loyalty becomes a free day of healing.", tag: "Save $30 Per Visit" },
    ],
  },
  dollar: {
    eyebrow: "Every Dollar",
    heading: "Works Harder for You.",
    text: "Whether you come for the saunas, a Korean Body Scrub, or a relaxing massage — every service earns you points toward your next free visit.",
    list: [
      "$1 spent on admission, food, or services = 1 point earned",
      "Points are earned at check-out; taxes and tips excluded",
      "Groupon passes are not eligible for point accrual",
      "50 bonus points credited on your first visit after sign-up",
      "500 points = complimentary admission (subject to change)",
    ],
    stats: [
      { value: "500", label: "Points for Free Admission" },
      { value: "$45", label: "App Exclusive Entry Price" },
      { value: "50", label: "Bonus Points on First Visit" },
    ],
  },
  terms: {
    heading: "Program Terms",
    items: [
      { title: "Your Points, Your Wellness", text: "Points are a reflection of your visits with us and hold value only within the KingSpa Rewards program. They cannot be exchanged for cash, transferred to another member, or redeemed outside of complimentary admission." },
      { title: "Keep Your Account Active", text: "To maintain your point balance, simply visit us or engage with the app at least once every 12 months. Points expire after 12 consecutive months of inactivity — we want to reward our active wellness community." },
      { title: "Program Updates", text: "King Spa Chicago reserves the right to adjust earning rates, reward values, or program terms as needed to continue offering the best experience. We’ll notify members of significant changes through the app." },
      { title: "Lost or Stolen Accounts", text: "Please safeguard your account login. Points and rewards cannot be restored if your" },
    ],
  },
};
