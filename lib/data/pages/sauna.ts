/* Sauna & Healing Rooms (/sauna-healing-rooms/): built-in content, copied from chi.kingspa.com/sauna-healing-rooms/. Edited in /cms > Pages > Sauna rooms. */
import { images } from "../images.ts";

/** Step and tip icons are drawn by the page, in order. */
export const saunaPage = {
  seo: { title: "sauna rooms – King Spa Chicago", description: "" },
  banner: {
    korean: "찜질방",
    title: "The Nine Sauna & Healing Rooms",
    subtitle: "Discover the Meanings & Rituals of Korean Wellness",
  },
  intro: {
    title: "A Journey Through Nine Healing Rooms",
    paragraphs: [
      "At King Spa, our nine sauna and healing rooms invite you into a centuries-old Korean wellness tradition known as *jjimjilbang*. Each room is thoughtfully designed with natural elements—minerals, crystals, salts, and soils—that have been treasured in Korean culture for their restorative properties.",
      "This isn't just about heat. It's about honoring the body's natural rhythms, connecting with earth's elements, and finding moments of stillness in our busy lives.",
    ],
    noteTitle: "The Korean Wellness Tradition",
    note: [
      "In Korea, the jjimjilbang is more than a spa—it's a community gathering place where families and friends spend entire days together, moving between heated rooms, sharing meals, and resting. This tradition stretches back centuries, with the *hanjeungmak* first documented in the 15th century during the Joseon Dynasty.",
      "King Spa honors this heritage while making it accessible to all. Our rooms use authentic materials—Siraka stone from Japan, Himalayan salt, Korean yellow ocher mud, and genuine gold leaves.",
    ],
  },
  healingIntro: {
    symbol: "찜질방",
    quote: '"True radiance begins beneath the surface."',
    text: "Our nine healing rooms use natural elements—crystals, salts, and earth—to restore balance to your body and mind. Each space offers a unique therapeutic benefit.",
  },
  rooms: {
    label: "The Experience",
    title: "Healing Rooms",
    experienceLabel: "Experience",
    benefitsLabel: "Benefits",
    items: [
      {
        number: "01",
        name: "Base Rock Sauna",
        meta: "127°F • Healing",
        image: images.baseRock,
        experience:
          "Designed to heal the body naturally. The floor is made of Siraka stone, a rare mineral that emits powerful far-infrared rays and negative ions to stimulate blood circulation and ease muscle tension.",
        tags: ["Siraka Stone", "Amethyst"],
        benefits: [
          "Relieves muscle pain and stiffness",
          "Improves lymphatic flow",
          "Deeply relaxing for the nervous system",
        ],
      },
      {
        number: "02",
        name: "Gold Pyramid",
        meta: "120°F • Vitality",
        image: images.pyramidRoom,
        experience:
          "A stunning pyramid structure lined with genuine 23-karat gold leaf. Gold has long been treasured for its ability to comfort the mind and revitalize the skin.",
        tags: ["23K Gold Leaf", "Pyramid Power"],
        benefits: [
          "Promotes skin radiance",
          "Balances vital energy (Qi)",
          "Warm, enveloping comfort",
        ],
      },
      {
        number: "03",
        name: "Salt Sauna",
        meta: "110°F • Purification",
        image: images.saltRoom,
        experience:
          "Constructed with ancient Himalayan salt rocks, over 350 million years old. These mineral-rich stones help purify the air and the body, supporting respiratory health.",
        tags: ["Himalayan Salt", "Minerals"],
        benefits: [
          "Supports respiratory function",
          "Natural skin exfoliation",
          "Gentle, manageable heat",
        ],
      },
      {
        number: "04",
        name: "Ocher Room",
        meta: "115°F • Grounding",
        image: images.ocherRoom,
        experience:
          'Plastered with Hwangto (yellow mud), known as "solar energy storage." This living earth radiates a unique infrared heat that feels deeply grounding and comforting.',
        tags: ["Yellow Mud", "Living Earth"],
        benefits: [
          "Detoxifies heavy metals",
          "Reduces inflammation",
          "Calms the mind",
        ],
      },
      {
        number: "05",
        name: "Charcoal Room",
        meta: "115°F • Detox",
        image: images.charcoalRoom,
        experience:
          "Lined with activated oak charcoal, a powerful natural filter. This room offers a sterile, pure environment perfect for those with skin sensitivities or allergies.",
        tags: ["Oak Charcoal", "Negative Ions"],
        benefits: [
          "Absorbs toxins",
          "Releases negative ions",
          "Helps alleviate skin issues",
        ],
      },
      {
        number: "06",
        name: "Bulgama",
        meta: "155°F • Intense",
        image: images.bulgama,
        experience:
          'A traditional Korean "fire kiln." Specially treated Elvan stones are heated to extreme temperatures, releasing intense infrared waves that penetrate deep into the body.',
        tags: ["Elvan Stone", "Infrared Heat"],
        benefits: [
          "Major metabolism boost",
          "Rapid perspiration",
          "Maximum detoxification",
        ],
      },
      {
        number: "07",
        name: "Amethyst Room",
        meta: "115°F • Serenity",
        image: images.amethystRoom,
        experience:
          'Surrounded by genuine amethyst crystals. Known as a "healing stone," amethyst creates a serene, light-filled environment that helps to balance physical and mental energy.',
        tags: ["Amethyst Crystals", "Light Therapy"],
        benefits: [
          "Calms the nervous system",
          "Improves sleep quality",
          "Mental clarity",
        ],
      },
      {
        number: "08",
        name: "Ice Room",
        meta: "35°F • Refresh",
        image: images.iceRoom,
        experience:
          "The essential cooling step. After the intense heat of the saunas, the Ice Room brings your body temperature down, closing pores and locking in the benefits of the heat.",
        tags: ["Cold Therapy", "Fresh Oxygen"],
        benefits: [
          "Tightens and firms skin",
          "Boosts immune system",
          "Invigorating effect",
        ],
      },
      {
        number: "09",
        name: "Fire Sudatorium",
        meta: "390°F • Extreme",
        image: images.fireSudatorium,
        experience:
          "**Must be 15+ years old.** The hottest room in the facility. A traditional dome heated by burning oak wood. Guests enter wrapped in a thick blanket for a brief, intense session.",
        tags: ["Oak Wood Fire", "Traditional Kiln"],
        benefits: [
          "Deepest level of detoxification",
          "Relieves deep-seated pain",
          "Strengthens immunity",
        ],
      },
    ],
  },
  sequencing: {
    label: "Your Ritual",
    title: "How to Sequence Your Journey",
    text: "The traditional Korean approach follows a rhythm that supports the body's natural responses.",
    flow: [
      { label: "Light Heat", sub: "100–115°F" },
      { label: "Intense Heat", sub: "120–390°F" },
      { label: "Cool Down", sub: "30–35°F" },
      { label: "Rest & Hydrate", sub: "Take your time" },
    ],
    steps: [
      {
        number: "01",
        title: "Begin Gently",
        text: "Start in rooms like the Salt Room, Ocher Room, or Amethyst Room (100–115°F). These moderate temperatures warm your body gradually.",
      },
      {
        number: "02",
        title: "Build Intensity",
        text: "Move to the Base Rock Room, Bulgama, or Pyramid Room (120–155°F). For the ultimate experience, try the Fire Sudatorium.",
      },
      {
        number: "03",
        title: "Cool Down",
        text: "Visit the Ice Room (30–35°F) for 3–5 minutes. This contrast stimulates circulation and leaves you deeply refreshed.",
      },
      {
        number: "04",
        title: "Rest & Hydrate",
        text: "Take time to rest in our relaxation areas between rooms. Hydrate frequently to absorb the full benefits.",
      },
    ],
    tipsTitle: "Tips for Your Visit",
    tips: [
      "Hydrate before, during, and after your visit",
      "Limit hot rooms to 15–20 min; Fire Sudatorium to 5–10 min",
      "Listen to your body—if dizzy or uncomfortable, exit and rest",
      "Ice Room works best in brief visits between heat sessions",
      "Allow 4–6 hours to fully experience all rooms at a relaxed pace",
      "Fire Sudatorium requires protective cloth; guests 15+ only",
    ],
  },
  cta: {
    title: "Ready to Relax?",
    text: "Experience the ancient tradition of Korean wellness.",
    button: { label: "Get Your $45 E-Coupon", href: "/e-coupon-page/" },
  },
};
