/* Massage Therapy (/massagetherapy/): built-in content, copied from chi.kingspa.com/massagetherapy/. Edited in /cms > Pages > Massage Therapy. */
import { images } from "../images.ts";

/** Card icons are drawn by the page (keys: swedish, acupressure, cbd, royal, foot, chair). */
export const massagePage = {
  seo: { title: "massagetherapy – King Spa Chicago", description: "" },
  banner: {
    korean: "안마",
    title: "Massage & Bodywork",
    subtitle: "Restore Balance. Release Tension. Return to Yourself.",
  },
  intro: {
    symbol: "기",
    symbolLabel: "ENERGY FLOW",
    image: images.massage,
    quote:
      '"Massage is more than relaxation—it\'s a practice rooted in centuries of Asian healing traditions to restore balance and vitality."',
    columns: [
      "Our therapists blend acupressure, heat, and therapeutic oils to ease muscle tension, calm the nervous system, and restore the natural flow of energy known as *gi*. Each session is a step towards total wellness.",
      "Whether you're seeking relief from a long week with gentle strokes or require deep Korean-style pressure work, our therapies are tailored to meet you exactly where you are today.",
    ],
  },
  booking:
    "Appointments are scheduled on-site at the **Treatment Desk** upon arrival.",
  menu: {
    label: "Therapies",
    title: "Massage Menu",
    cards: [
      {
        icon: "swedish",
        title: "Swedish Gold Massage",
        description:
          "Our most popular choice. Long, flowing strokes and aromatic oils release stress. Pressure adjusts to your comfort level.",
        benefits: [
          "Loosens muscle tightness",
          "Boosts circulation",
          "Encourages deep sleep",
        ],
        prices: [
          { price: "$140*", duration: "60 Min" },
          { price: "$190*", duration: "90 Min" },
        ],
      },
      {
        icon: "acupressure",
        title: "Acupressure Massage",
        description:
          "Firm pressure is applied to points along energy meridians to release blockages, relieve tension, and restore balance.",
        benefits: [
          "Targets deep knots",
          "Reduces fatigue",
          "Relieves headaches",
        ],
        prices: [
          { price: "$140*", duration: "60 Min" },
          { price: "$190*", duration: "90 Min" },
        ],
      },
      {
        icon: "cbd",
        title: "CBD Oil Massage",
        description:
          "CBD oil penetrates deeply to reduce inflammation and ease joint discomfort without psychoactive effects.",
        benefits: [
          "Relieves joint pain",
          "Reduces anxiety",
          "Anti-inflammatory",
        ],
        prices: [
          { price: "$190*", duration: "60 Min" },
          { price: "$230*", duration: "90 Min" },
        ],
      },
      {
        icon: "royal",
        title: "Royal Special Massage",
        description:
          "Concentrated treatment addressing your areas of greatest tension. Efficient and effective when time is limited.",
        benefits: [
          "Focused relief",
          "Customized pressure",
          "Perfect for busy schedules",
        ],
        prices: [{ price: "$120", duration: "40 Min" }],
      },
    ],
  },
  featured: {
    badge: "Guest Favorite",
    title: "Hot Stone Massage",
    description:
      "Feel your body unwind as warm, smooth stones glide over your skin. The deep warmth loosens tight muscles and soothes stiff joints, drawing out tension and stimulating circulation.",
    features: [
      "Relieves chronic tension",
      "Improves blood flow",
      "Supports detox",
      "Deep relaxation",
    ],
    prices: [
      { price: "$190*", duration: "60 Min" },
      { price: "$230*", duration: "90 Min" },
    ],
  },
  foot: {
    label: "Reflexology",
    title: "Foot & Chair",
    cards: [
      {
        icon: "foot",
        title: "Foot Massage",
        description:
          "In Korean wellness, feet map the entire body. We apply reflexology principles to release tension from your heels to your head.",
        prices: [
          { price: "$100", duration: "40 Min" },
          { price: "$130*", duration: "60 Min" },
        ],
      },
      {
        icon: "chair",
        title: "Foot & Chair Massage",
        description:
          "Focused foot massage paired with upper body work in our massage chairs. Relieves shoulders while treating your feet.",
        prices: [
          { price: "$100", duration: "40 Min" },
          { price: "$130*", duration: "60 Min" },
        ],
      },
    ],
  },
  guide: {
    label: "Guide",
    title: "Prepare for your Massage",
    steps: [
      {
        title: "Before",
        items: [
          "Warm up in saunas (20 min)",
          "Hydrate well",
          "Avoid heavy meals",
        ],
      },
      {
        title: "During",
        items: ["Communicate pressure", "Mention injuries", "Breathe deeply"],
      },
      {
        title: "After",
        items: ["Rest in relaxation lounge", "Drink warm tea", "Take it slow"],
      },
    ],
    enhanceTitle: "Enhance Your Experience",
    enhanceText: "Pair your massage with these complementary treatments:",
    pairings: [
      {
        title: "Korean Body Scrub",
        text: "Exfoliate dead skin first, allowing massage oils to penetrate deeply.",
      },
      {
        title: "Sauna Circuit",
        text: "Pre-warmed muscles are more pliable and respond better to therapy.",
      },
      {
        title: "Korean Dining",
        text: "Complete your restoration with a nourishing, authentic meal.",
      },
    ],
  },
  reviewsTitle: "Guest Reviews",
  cta: {
    title: "Ready to Restore With a Massage?",
    text: "Book your massage treatment when you visit King Spa & Sauna today.",
    button: { label: "Get Your $45 Day Pass", href: "/e-coupon-page/" },
  },
};
