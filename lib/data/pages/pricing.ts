/* Pricing (/pricing/): built-in content, copied from chi.kingspa.com/pricing/. Edited in /cms > Pages > Pricing. */
import { images } from "../images.ts";

/* Two backgrounds the old page loads lazily (not in images.ts yet). */

export const pricingPage = {
  seo: { title: "Pricing – King Spa Chicago", description: "" },
  banner: { korean: "가격", title: "King Spa Pricing" },
  admission: {
    image: images.scrubOilRed,
    heading: "King Spa's Price of Admission",
    text: "Purchasing a day pass gives you access to our facilities for the full day and allows you to enjoy 9 unique saunas & healing rooms, relaxation areas, and our Korean bathhouse. Treatments, food, and beverage are not included in the admission price.",
    tables: [
      {
        heading: "Price Menu:",
        priceHeading: "Price",
        rows: [
          { label: "Admission Fee", price: "$75" },
          { label: "Overnight Stay: Additional $20 Charge (after 2:00am)", price: "" },
          { label: "More than 24 hours: Additional $75 charge", price: "" },
        ],
      },
    ],
  },
  bodyScrub: {
    image: images.scrubBackRedWide,
    imageMobile: images.scrubBackRed,
    heading: "Korean Body Scrub Treatments:",
    subheading: "Deep Exfoliation for Radiant Skin",
    text: "Our signature Korean Body Scrub is a traditional exfoliation ritual passed down through generations. Using time-honored techniques, our therapists gently remove layers of dead skin to reveal softer, smoother skin beneath. The treatment also helps unclog pores, improve circulation, and support your skin’s natural renewal process—leaving you feeling refreshed from head to toe.",
    tables: [
      {
        heading: "Women’s Body Scrubs",
        priceHeading: "Price",
        rows: [
          { label: "Classic Body Scrub (40 min)", price: "$110" },
          { label: "Aroma Gold Body Scrub (80 min – Scrub + Oil Treatment)", price: "$180" },
          { label: "CBD Oil Body Scrub (90 min)", price: "$220" },
          { label: "Bubble Body Scrub (90 min – Scrub + Oil & Bubble Treatment)", price: "$240" },
        ],
      },
      {
        heading: "Men’s Body Scrubs",
        priceHeading: "Price",
        rows: [
          { label: "Classic Body Scrub (30 min)", price: "$100" },
          { label: "King Body Scrub (70 min)", price: "$150" },
          { label: "CBD Oil Body Scrub (90 min)", price: "$200" },
        ],
      },
    ],
  },
  massage: {
    image: images.massageRed,
    heading: "Massage Treatments:",
    subheading: "Relieve Tension & Restore Balance",
    text: "Melt away stress and tension with our therapeutic massage treatments. From Swedish and acupressure techniques to hot stone and CBD oil therapy, our skilled therapists customize each session to target sore muscles, improve circulation, and restore your body’s natural balance. Walk out feeling lighter, looser, and completely renewed.",
    tables: [
      {
        heading: "",
        priceHeading: "",
        rows: [
          { label: "Royal Special Massage (40 min)", price: "$120" },
          { label: "Swedish Gold Massage (60 min)", price: "$140" },
          { label: "Swedish Gold Massage (90 min)", price: "$190" },
          { label: "Acupressure Massage (60 min)", price: "$140" },
          { label: "Acupressure Massage (90 min)", price: "$190" },
          { label: "Stone Massage (60 min)", price: "$190" },
          { label: "Stone Massage (90 min)", price: "$230" },
        ],
      },
      {
        heading: "",
        priceHeading: "",
        rows: [
          { label: "CBD Oil Massage (60 min)", price: "$190" },
          { label: "CBD Oil Massage (90 min)", price: "$230" },
        ],
      },
    ],
  },
  footChair: {
    image: images.pricingFootChairBg,
    heading: "Foot & Chair Services",
    subheading: "Relax, Restore & Revitalize",
    text: "Treat your feet to the ultimate pampering experience. Our foot and chair services combine soothing soaks, exfoliation, and targeted massage to relieve tension, improve circulation, and leave your skin feeling silky smooth. Perfect for unwinding after a long day — sit back, relax, and let us take care of the rest.",
    tables: [
      {
        heading: "",
        priceHeading: "",
        rows: [
          { label: "Foot Massage (40 min)", price: "$100" },
          { label: "Foot Massage (60 min)", price: "$130" },
          { label: "Foot/Chair Combo (40 min)", price: "$100" },
          { label: "Foot/Chair Combo (60 min)", price: "$130" },
        ],
      },
    ],
  },
  facial: {
    image: images.scrubOilRed,
    heading: "Facial Treatments:",
    subheading: "Herbal Therapy for Women’s Wellness​",
    text: "Achieve radiant, youthful skin with facials tailored for hydration, anti-aging, and deep cleansing. Our treatments target wrinkle reduction, acne control, and skin detoxification, ensuring a refreshed and glowing complexion. Don’t forget to ask about our facial add-ons!",
    tables: [
      {
        heading: "",
        priceHeading: "",
        rows: [
          { label: "Express Facial (40 min)", price: "$130" },
          { label: "Collagen Facial (60 min)", price: "$170" },
          { label: "Deluxe Facial (90 min)", price: "$220" },
          { label: "King Diamond Peel (90 min)", price: "$260" },
        ],
      },
    ],
  },
  vSteam: {
    image: images.pricingVSteamBg,
    heading: "V-Steam Treatments:",
    subheading: "Herbal Therapy for Women’s Wellness",
    text: "Support women’s wellness with vaginal steam therapy, an herbal treatment that promotes circulation, vaginal tone, and menstrual cycle balance. This holistic healing experience enhances relaxation and overall feminine health.",
    tables: [
      {
        heading: "",
        priceHeading: "",
        rows: [{ label: "V-Steam Herb (30 min)", price: "$40" }],
      },
    ],
  },
};
