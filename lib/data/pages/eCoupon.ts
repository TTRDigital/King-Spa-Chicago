/* E-Coupon (/e-coupon/): built-in content, copied from chi.kingspa.com. Edited in /cms > Pages > E-Coupon. */
import { images } from "../images.ts";

export const eCouponPage = {
  seo: { title: "E-Coupon – King Spa Chicago", description: "" },
  banner: {
    heading: "A Full Day of Wellness for $45",
    subheading: "Sign up below for all-day access to Chicago's authentic Korean spa experience (a $75 value)",
  },
  intro: {
    heading: "Step Into 500 Years Of Korean Healing Tradition",
    text: "Begin your journey to rejuvenation at King Spa & Sauna Chicago. Complete the form below to receive an exclusive $45 admission offer—your invitation to discover 11 specialty saunas, hot and cold plunge pools, and all-day access to the region’s only authentic jjimjilbang experience.",
  },
  coupon: { title: "King Spa & Sauna e-Coupon", expires: "Expires", price: "$45", perPerson: "Per Person", value: "($75 Value)" },
  form: {
    heading: "Get Your $45 Admission E-Coupon",
    nameLabel: "Name",
    namePlaceholder: "Enter Your Name",
    emailLabel: "Email",
    emailPlaceholder: "Email Address",
    visitorsLabel: "Number Of Visitors",
    visitorsPlaceholder: "Please Enter Number of Visitors",
    dateLabel: "Visiting Date",
    datePlaceholder: "Please Enter Visiting Date",
    button: "Get My $45 Offer",
    /** Shown in place of the form once it is sent (the page's own "How It Works" sentence). */
    success: "Once you submit your information, your $45 e-coupon will be delivered to your inbox – be sure to check your spam if you don’t see it.",
  },
  howItWorks: {
    heading: "How It Works",
    text: "Once you submit your information, your $45 e-coupon will be delivered to your inbox – be sure to check your spam if you don’t see it. Simply print it or show it on your mobile device when you arrive and pay the $45 for entry to King Spa (a $75 value).",
  },
  terms: {
    heading: "Terms & Conditions",
    contactLabel: "Questions? Contact",
    email: "ecoupon@kingspa.com",
    text: "Welcome offer is valid for 30 days from the date of receipt and applies to admission only at our Chicago location. One e-coupon covers your entire group—no need for multiple sign-ups.\nThis offer cannot be combined with other promotions or third-party vouchers (including Groupon, LivingSocial, Amazon, or Gilt City). Food, beverages, and spa services are not included. Guests must be 8 years or older to enter the facility. Outside food, alcohol, glass containers, blankets, and pillows are not permitted.",
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
