/* Fall Sale (/fall-sale/): built-in content, copied from chi.kingspa.com/fall-sale/. Edited in /cms > Pages > Fall Sale. */
import { images } from "../images.ts";

export const fallSalePage = {
  seo: { title: "Fall Sale – King Spa Chicago", description: "" },
  topBar: "FINAL DAYS: The Fall Sale ends Thursday, October 29",
  hero: images.fallSaleBanner,
  cards: [
    { value: "$35", label: "Admission" },
    { value: "Oct 1 - 29", label: "Sale dates" },
    { value: "Mon - Thu only", label: "Valid days" },
  ],
  experience: {
    heading: "The King Spa experience",
    subheading: "A full day of rest, for $35",
    text: "Settle into the Korean jjim-jil-bang spa experience with sauna rooms, heated therapy rooms, a restaurant, and massage.",
    gallery: [
      { image: images.heatedTherapyRoom, caption: "Heated therapy room" },
      { image: images.restaurant, caption: "Restaurant" },
      { image: images.baseRock, caption: "Baserock sauna" },
      { image: images.goldSaunaInside, caption: "Gold sauna" },
    ],
  },
  visit: {
    lines: ["Make October feel a little lighter.", "Visit Monday through Thursday during the Fall Sale, October 1 through 29."],
    address: "Visit King Spa and Sauna, (847) 972-2540",
    primary: { label: "Plan your visit", href: "/" },
    secondary: { label: "Call King Spa", href: "tel:+18479722540" },
  },
  terms: {
    heading: "Offer terms",
    text: "Valid for admission Monday through Thursday only, October 1 - 29, 2026. Friday, Saturday, and Sunday are excluded. This offer cannot be combined with any other coupon, discount, promotion, or special offer.",
  },
  bottomImage: images.fallSaleBanner,
};
