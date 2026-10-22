/* V-Steam (/v-steam/): built-in content, copied from chi.kingspa.com/v-steam/. Edited in /cms > Pages > V-Steam. */
import { images } from "../images.ts";

/** Herb icons are drawn by the page (keys: wormwood, mugwort, rutin, dandelion). */
export const vSteamPage = {
  seo: { title: "v-steam – King Spa Chicago", description: "" },
  banner: {
    korean: "좌욕",
    title: "V-Steam Herb Treatment",
    subtitle: "Ancient Korean Healing for Feminine Wellness",
  },
  intro: {
    image: images.vSteam,
    label: "The Ritual",
    title: "A Centuries-Old Practice of Restoration",
    paragraphs: [
      "Experience *Chai-yok (좌욕)* — a centuries-old Korean herbal steam ritual designed to restore balance, ease discomfort, and promote deep relaxation.",
      "The V-Steam Herb Treatment at King Spa Chicago combines warmth with traditional botanicals to support circulation, feminine wellness, and inner calm.",
      'You\'ll settle onto a comfortable wooden seat as gentle herbal steam rises, enveloping the pelvic area in soothing warmth. Many guests describe the experience as "meditation for the body" — a quiet half-hour that feels both grounding and renewing.',
    ],
    historyTitle: "The History Behind the Ritual",
    history: [
      "Long before modern wellness trends, Korean women practiced *Chai-yok (좌욕)* as part of their post-birth recovery and seasonal self-care routines.",
      "In traditional Korean medicine, the lower abdomen is considered the body's energy center — *danjeon (단전)*. Warming this area with herbal steam was believed to harmonize *gi (기)*, vital energy, and restore balance to the entire body.",
      "At King Spa Chicago, we honor this tradition by using authentic Korean herbal blends and time-tested techniques in a safe, hygienic, modern setting.",
    ],
  },
  herbs: {
    label: "Botanicals",
    title: "The Power of Korean Herbal Medicine",
    text: "Our V-Steam formula draws on plants long revered in East Asian healing traditions.",
    items: [
      {
        icon: "wormwood",
        name: "Wormwood (Artemisia)",
        sub: "쑥 — Ssuk",
        text: "Known for its antimicrobial properties, wormwood promotes healthy circulation. In Korean culture, it's considered a \"woman's herb\" — gentle yet powerful.",
      },
      {
        icon: "mugwort",
        name: "Mugwort",
        sub: "애엽 — Aeyeop",
        text: "Prized for its ability to balance hormones, warm the womb, and ease tension in the pelvic region. Commonly used for menstrual support.",
      },
      {
        icon: "rutin",
        name: "Rutin",
        sub: "Antioxidant Compound",
        text: "This antioxidant compound supports capillary health and helps strengthen blood vessel walls. Aids circulation and reduces inflammation.",
      },
      {
        icon: "dandelion",
        name: "Dandelion Root",
        sub: "Natural Detoxifier",
        text: "A natural detoxifier that helps eliminate excess fluids and calm internal inflammation. Gentle on the system while supporting liver function.",
      },
    ],
  },
  benefits: {
    label: "Benefits",
    title: "What You May Experience",
    text: "While every body responds differently, guests commonly report these benefits.",
    boxes: [
      {
        title: "Physical Relief",
        items: [
          "Eases menstrual cramps and reduces bloating",
          "Relieves pelvic tension and lower-back discomfort",
          "Promotes healthy circulation in the pelvic region",
          "Supports the body's natural detoxification processes",
          "Encourages warmth and blood flow to the lower abdomen",
        ],
      },
      {
        title: "Emotional & Energetic",
        items: [
          "Calms the nervous system and quiets mental chatter",
          "Creates a sense of grounding and emotional balance",
          "Offers a rare moment of stillness in a busy world",
          "Supports self-connection and body awareness",
          "Leaves you feeling lighter, clearer, and more centered",
        ],
      },
    ],
  },
  experience: {
    label: "Your Session",
    title: "What to Expect",
    text: "A journey through warmth, stillness, and renewal.",
    steps: [
      {
        step: "Step 01",
        title: "Arrival & Preparation",
        text: "After enjoying the sauna rooms or wet spa areas, make your way to the V-Steam treatment area. You'll change into a light wrap provided by our staff.",
      },
      {
        step: "Step 02",
        title: "The Treatment",
        text: "Sit comfortably on a custom wooden seat with a basin of freshly prepared herbal steam beneath. Feel gentle heat and the subtle aroma of herbs.",
      },
      {
        step: "Step 03",
        title: "Duration",
        text: "The session lasts approximately 30 minutes — long enough for warmth to penetrate deeply, gentle enough to remain comfortable.",
      },
      {
        step: "Step 04",
        title: "Aftercare",
        text: "Take your time standing up. Hydrate with water or barley tea, and rest for 10-15 minutes before returning to activity.",
      },
    ],
  },
  journey: {
    label: "Full Experience",
    title: "How V-Steam Fits Into Your Visit",
    text: "V-Steam is most effective when integrated into the full jjimjilbang cycle.",
    flow: ["Heat", "Cleanse", "V-Steam", "Rest"],
    steps: [
      {
        step: "Step 1",
        title: "Begin with Heat",
        text: "Spend time in the Base Rock Room, Charcoal Room, or Yellow Mud Room to open pores and stimulate circulation.",
      },
      {
        step: "Step 2",
        title: "Cleanse in the Wet Spa",
        text: "Shower and soak in the hot and cold baths to prepare your body for deeper relaxation.",
      },
      {
        step: "Step 3",
        title: "V-Steam Treatment",
        text: "Allow the herbal steam to work its magic — warming, soothing, and restoring balance.",
      },
      {
        step: "Step 4",
        title: "Rest & Nourish",
        text: "Finish with quiet time in the lounge and a warm meal. Food completes the healing cycle.",
      },
    ],
  },
  who: {
    label: "Is This For You?",
    title: "Who Should Experience V-Steam",
    idealTitle: "Ideal For",
    ideal: [
      "Women seeking natural support for menstrual discomfort",
      "Anyone experiencing pelvic tension or lower-back stress",
      "Guests looking to deepen their connection with their body",
      "Those interested in traditional Korean wellness practices",
      "Women in their post-menstrual years seeking hormonal balance",
      "Anyone who values quiet, restorative self-care",
    ],
    avoidTitle: "When to Avoid",
    avoid: [
      "During active menstruation",
      "If you are pregnant or trying to conceive",
      "With open wounds or active infections in the pelvic area",
      "Immediately after gynecological procedures",
      "For guests under 18 years old",
    ],
    note: "If you have specific health concerns, please consult with your healthcare provider before booking.",
  },
  tips: {
    title: "Maximize Your Experience",
    cards: [
      {
        title: "Before",
        items: [
          "Hydrate well throughout the day",
          "Spend time in the sauna rooms to warm your body",
          "Eat lightly — avoid heavy meals before treatment",
          "Use the restroom beforehand for comfort",
        ],
      },
      {
        title: "During",
        items: [
          "Breathe deeply and slowly",
          "Let your mind settle — this is your time",
          "Communicate if you feel too warm",
          "Focus on the sensation of warmth and release",
        ],
      },
      {
        title: "After",
        items: [
          "Drink plenty of water or herbal tea",
          "Rest for 10-15 minutes before activity",
          "Avoid cold drinks immediately after",
          "Notice how your body feels over 24-48 hours",
        ],
      },
    ],
  },
  pricing: {
    label: "Investment",
    title: "Pricing",
    name: "V-Steam Herb Treatment",
    symbol: "$",
    amount: "40",
    duration: "30-minute session",
    note: "Available in the women's locker room · First-come, first-served",
  },
  faq: {
    label: "Questions",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Is V-Steam safe for first-timers?",
        answer:
          "Yes. The steam intensity is gentle and comfortable. Your attendant ensures proper temperature throughout the session.",
      },
      {
        question: "How often should I do it?",
        answer:
          "Many guests enjoy V-Steam monthly or seasonally, especially around their menstrual cycle. Listen to your body — wellness should feel nourishing, not forced.",
      },
      {
        question: "What should I wear?",
        answer:
          "We provide a light wrap for your treatment. The V-Steam area is private and respectful.",
      },
      {
        question: "Will I feel immediate results?",
        answer:
          "Many guests report feeling calmer and warmer immediately after. Physical benefits like reduced cramping may develop over several sessions.",
      },
      {
        question: "Can I do V-Steam if I have an IUD or other contraceptive?",
        answer:
          "Yes. The treatment does not interfere with contraceptives. However, if you have specific concerns, consult your healthcare provider.",
      },
      {
        question: "Does it hurt?",
        answer:
          "Not at all. You should feel gentle, soothing warmth — never discomfort. If you feel too warm, let your attendant know immediately.",
      },
      {
        question: "Can I do this while on my period?",
        answer:
          "We recommend avoiding V-Steam during active menstruation. The best time is in the week following your period or mid-cycle.",
      },
      {
        question: "Is this treatment evidence-based?",
        answer:
          "V-Steam is a traditional practice with centuries of anecdotal support. While modern research is still emerging, many women report meaningful benefits for comfort and wellness.",
      },
    ],
  },
  cta: {
    title: "Ready to Experience V-Steam?",
    text: "Book your session when you visit King Spa & Sauna Chicago.",
    button: { label: "Get Your $45 Day Pass", href: "/day-pass" },
    links: [
      { label: "Massage Menu", href: "/massage" },
      { label: "Facial Treatments", href: "/facials" },
      { label: "Korean Body Scrub", href: "/body-scrub" },
    ],
  },
};
