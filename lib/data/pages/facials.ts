/* Facials (/facials/): built-in content, copied from chi.kingspa.com/facials/. Edited in /cms > Pages > Facials. */
import { images } from "../images.ts";

export const facialsPage = {
  seo: { title: "facials – King Spa Chicago", description: "" },
  banner: {
    korean: "피부 미용",
    title: "Facials & Skin Care",
    subtitle: "Reveal Your Natural Radiance. Restore Your Glow.",
  },
  intro: {
    symbol: "빛",
    symbolLabel: "radiance",
    image: images.facial,
    quote:
      "True beauty begins with healthy skin—nourished from within and cared for with intention.",
    columns: [
      "At King Spa Chicago, our facials draw from Korean skincare traditions that prioritize *long-term skin health* over quick fixes. Each treatment combines deep cleansing, targeted therapies, and nourishing ingredients to restore your skin's natural balance.",
      "Whether you're addressing specific concerns or simply giving your skin the care it deserves, our estheticians customize every session to your unique needs. The result: skin that feels renewed, looks luminous, and glows from within.",
    ],
  },
  philosophy: {
    label: "The Korean Skincare Philosophy",
    title: "Skin as a Reflection of Wellness",
    paragraphs: [
      "In Korean beauty culture, skincare isn't about masking imperfections—it's about cultivating healthy skin that needs little coverage. This philosophy values *consistency, gentleness, and deep hydration* over harsh treatments.",
      "The jjimjilbang tradition takes this further. Time in the saunas opens pores and prepares the skin to absorb nutrients more effectively. Steam softens, heat detoxifies, and by the time you reach our treatment room, your skin is primed for transformation.",
      "Our facials honor this approach—working with your skin's natural processes rather than against them. The goal isn't a temporary fix, but lasting radiance built on genuine skin health.",
    ],
    korean: "피부",
    translation: "pibu (skin)",
  },
  booking: {
    label: "How to Book:",
    text: "Schedule your facial on-site at the treatment desk after checking in. Walk-ins welcome based on availability.",
  },
  menu: {
    label: "Our Services",
    title: "Facial Treatments",
    bestForLabel: "Best For",
    cards: [
      {
        title: "Express Facial",
        description:
          "A streamlined treatment that delivers essential care when time is limited. Deep cleansing, gentle exfoliation, and hydrating finish leave your skin refreshed and renewed in under an hour.",
        bestFor:
          "Quick refresh, maintenance between deeper treatments, busy schedules",
        benefits: [
          "Deep pore cleansing",
          "Gentle exfoliation",
          "Hydrating mask application",
          "Refreshed, balanced complexion",
        ],
        prices: [{ price: "$130", duration: "40 Min", vip: false }],
      },
      {
        title: "Collagen Facial",
        description:
          "Target the signs of aging with this restorative treatment. Collagen-boosting serums and specialized massage techniques work together to firm, plump, and rejuvenate tired skin.",
        bestFor: "Fine lines, loss of firmness, mature skin seeking renewal",
        benefits: [
          "Stimulates natural collagen production",
          "Improves skin elasticity and firmness",
          "Reduces appearance of fine lines",
          "Deeply hydrates and plumps skin",
        ],
        prices: [{ price: "$170", duration: "60 Min", vip: true }],
      },
      {
        title: "Deluxe Facial",
        description:
          "Our most comprehensive facial experience. Extended treatment time allows for thorough extractions, multiple mask applications, and luxurious massage techniques that address every layer of your skin.",
        bestFor:
          "Complete skin transformation, special occasions, deep relaxation",
        benefits: [
          "Comprehensive cleansing and extractions",
          "Multiple targeted treatments",
          "Extended facial massage",
          "Customized to your skin concerns",
        ],
        prices: [{ price: "$220", duration: "90 Min", vip: true }],
      },
      {
        title: "King Diamond Peel",
        description:
          "Our most advanced facial combines diamond-tip microdermabrasion with intensive hydration and specialized serums. This powerful resurfacing technique removes dull surface cells to reveal fresh, luminous skin beneath.",
        bestFor:
          "Texture concerns, hyperpigmentation, acne scars, dull or uneven skin tone",
        benefits: [
          "Diamond-tip microdermabrasion",
          "Dramatically improves skin texture",
          "Reduces hyperpigmentation",
          "Minimizes appearance of pores",
        ],
        prices: [{ price: "$260", duration: "90 Min", vip: true }],
      },
    ],
  },
  why: {
    label: "The King Spa Difference",
    title: "Why Book a Facial at King Spa?",
    items: [
      {
        title: "Sauna-Prep Advantage",
        text: "Unlike typical day spas, your facial begins in the saunas. Heat opens pores, softens skin, and allows treatments to penetrate deeper—delivering better results than a facial alone.",
      },
      {
        title: "Korean Skincare Expertise",
        text: "Our approach is rooted in Korean beauty traditions that prioritize long-term skin health. We focus on hydration, gentle care, and working with your skin's natural processes.",
      },
      {
        title: "A Complete Wellness Experience",
        text: "Your facial is just one part of the journey. Spend the day enjoying 11 specialty saunas, hot and cold baths, relaxation lounges, and authentic Korean dining—all included with admission.",
      },
      {
        title: "20+ Years of Excellence",
        text: "King Spa has been Chicago's trusted destination for authentic Korean wellness for over two decades. Our experienced estheticians deliver consistent, professional results every visit.",
      },
    ],
  },
  prep: {
    label: "Before You Book",
    title: "Make the Most of Your Visit",
    subtitle: "Preparing for Your Facial",
    cards: [
      {
        title: "Before",
        items: [
          "Arrive with clean, makeup-free skin",
          "Avoid retinol 3–5 days prior",
          "Skip exfoliating products beforehand",
          "Use the saunas to open pores",
        ],
      },
      {
        title: "During",
        items: [
          "Share your skin concerns and goals",
          "Mention any allergies or sensitivities",
          "Relax and enjoy the treatment",
        ],
      },
      {
        title: "After",
        items: [
          "Avoid direct sun exposure for 24 hours",
          "Skip makeup for the rest of the day",
          "Hydrate and use gentle products",
        ],
      },
    ],
    enhanceTitle: "Enhance Your Experience",
    enhanceText:
      "Many guests pair their facial with other treatments for complete head-to-toe renewal:",
    pairings: [
      {
        name: "Korean Body Scrub + Facial",
        description:
          "Full-body exfoliation paired with facial renewal for total skin transformation",
      },
      {
        name: "Sauna Circuit + Collagen Facial",
        description:
          "Open pores with heat, then deliver anti-aging nutrients deep into skin",
      },
      {
        name: "King Diamond Peel + Massage",
        description:
          "Resurface your complexion, then unwind with full-body relaxation",
      },
    ],
  },
  faq: {
    label: "Common Questions",
    title: "Facial FAQs",
    items: [
      {
        question: "How can I book a facial at King Spa?",
        answer:
          "Facial appointments are scheduled on-site at King Spa Chicago. After checking in and receiving your locker key, visit the treatment desk to book your session. Walk-ins are welcome based on availability, but we recommend booking early in your visit to secure your preferred time—especially on weekends.",
      },
      {
        question: "Which facial is right for me?",
        answer:
          "For a quick refresh or first-time visit, start with the Express Facial. If you're concerned about aging or firmness, the Collagen Facial targets those needs. For a full pampering experience, choose the Deluxe Facial. The King Diamond Peel is ideal for texture concerns, scarring, or hyperpigmentation.",
      },
      {
        question: "Should I use the saunas before my facial?",
        answer:
          "Yes! Spending 15–20 minutes in the saunas before your facial helps open pores and soften the skin, allowing treatments to penetrate more effectively. This is part of the traditional Korean approach to skincare.",
      },
      {
        question: "How often should I get a facial?",
        answer:
          "For most skin types, once every 4–6 weeks is ideal to align with your skin's natural renewal cycle. If you're addressing specific concerns like acne or hyperpigmentation, your esthetician may recommend a different schedule.",
      },
      {
        question: "Can I wear makeup after my facial?",
        answer:
          "We recommend skipping makeup for the rest of the day to let your skin breathe and fully absorb the treatment benefits. If you must apply makeup, wait at least a few hours and use clean brushes.",
      },
      {
        question: "Is the King Diamond Peel safe for sensitive skin?",
        answer:
          "The King Diamond Peel uses professional-grade microdermabrasion, which can be adjusted for different skin types. However, if you have very sensitive skin, rosacea, or active breakouts, consult with our esthetician first—they may recommend starting with a gentler treatment.",
      },
      {
        question: "What does the * mean on pricing?",
        answer:
          "Services marked with an asterisk (*) include a complimentary VIP pass for your next visit to King Spa—our way of thanking you for choosing our premium treatments.",
      },
    ],
  },
  reviews: { label: "Guest Experiences", title: "What Our Guests Say" },
  cta: {
    title: "Ready to Reveal Your Best Skin?",
    text: "Book your facial treatment when you visit King Spa & Sauna today.",
    button: { label: "Get Your $45 Day Pass", href: "/day-pass" },
  },
};
