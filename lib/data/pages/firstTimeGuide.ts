/* First-Time Guide (/first-time-guide/): built-in content, copied from chi.kingspa.com. Edited in /cms > Pages > First-Time Guide. */
import { images } from "../images.ts";

export const firstTimeGuidePage = {
  seo: { title: "First-Time Guide – King Spa Chicago", description: "" },
  banner: { korean: "어서 오세요", title: "King Spa & Sauna First-Time Guide", subtitle: "Everything You Need to Know" },
  welcome: {
    image: images.sudatoriumArch,
    heading: "Welcome to the Jjimjilbang Experience",
    text: "If you’ve never been to a Korean spa, you’re in for something special. The jjimjilbang (찜질방) is more than a spa—it’s a cultural ritual of warmth, togetherness, and healing that has brought families and friends together for centuries.\nOur guests often tell us they arrived curious and left wondering why they waited so long. The experience is peaceful, easy to navigate, and designed to help you feel lighter, softer, and calmer than when you arrived.",
    button: { label: "Learn About Our Saunas", href: "/sauna-healing-rooms/" },
  },
  facts: [
    { label: "HOURS", value: "Open 24/7" },
    { label: "RESERVATIONS", value: "Not required—walk-ins welcome" },
    { label: "ADMISSION", value: "$75 all-day access" },
    { label: "RECOMMENDED TIME", value: "4–6 hours" },
  ],
  steps: {
    heading: "How to Enjoy King Spa",
    text: "Your step-by-step guide to the perfect spa day",
    items: [
      {
        number: images.num01,
        title: "Check In",
        text: "Receive your locker key at the front desk. This key unlocks your locker, tracks services and meals, and settles your bill when you leave. Shoes come off at the entrance—relaxation starts here.",
        note: "",
      },
      {
        number: images.num02,
        title: "The Bath Ritual",
        text: "Head to the gender-separated wet areas—the heart of traditional jjimjilbang culture. Shower thoroughly, then alternate between warm and cold baths to awaken circulation. Many guests describe this as “pressing a reset button.”",
        note: "This is also where you can book a Korean Body Scrub—our signature treatment.",
      },
      {
        number: images.num03,
        title: "Explore the Saunas",
        text: "Change into provided loungewear and step into the co-ed common areas. Explore nine specialty sauna rooms, each designed with different minerals, temperatures, and therapeutic benefits.",
        note: "",
      },
      {
        number: images.num04,
        title: "Rest & Recharge",
        text: "Wellness isn’t rushed. Between sauna sessions, rest in the lounges, nap on heated stone beds, or watch a movie in our cinema room. Stay as long as you’d like—there’s no pressure to move quickly here.",
        note: "",
      },
      {
        number: images.num05,
        title: "Check Out Renewed",
        text: "Return your locker key, settle any additional services, collect your points, and walk out feeling lighter, softer, and calmer than when you arrived. Most guests are already planning their next visit.",
        note: "",
      },
    ],
    button: { label: "Learn About Our Rewards Program", href: "/reward/" },
  },
  nourish: {
    heading: "Nourish: Complete the Ritual",
    text: "In Korean wellness tradition, food isn’t separate from healing—it completes the cycle. After heat opens your pores and releases toxins, your body is ready to receive nourishment. This is why Koreans have always eaten after the sauna.\nOur on-site restaurant serves authentic Korean comfort food designed to restore what the sauna releases—replenishing electrolytes, stabilizing energy, and grounding you back into balance.",
    intro: "Here are a few of our top menu items:",
    dishes: [
      {
        title: "Baked Sauna Eggs",
        text: "A jjimjilbang tradition you won’t find anywhere else. These eggs are slow-cooked for hours using the radiant heat of the sauna, turning the whites golden-brown and the texture slightly chewy. They’re gentle on digestion and perfect as a light snack between sauna sessions.",
      },
      {
        title: "Bibimbap",
        text: "Korea’s most famous rice bowl—colorful vegetables, a perfectly cooked egg, and gochujang (Korean chili paste) all mixed together in one satisfying dish. The balance of sweet, spicy, and umami fills you up without weighing you down.",
      },
      {
        title: "Soon Tofu Stew (Sundubu Jjigae)",
        text: "Silken tofu simmered in a bubbling, savory broth with vegetables and your choice of protein. It arrives still bubbling at your table—pure warmth that soothes from the inside out. A favorite for post-sauna restoration.",
      },
    ],
    tip: "Pro tip: Eat after your sauna session, when your body temperature has normalized. Light, broth-based dishes restore without weighing you down. Sit, breathe, eat slowly—Korean wellness is as much about how you eat as what you eat.",
  },
  rooms: {
    heading: "Explore Our Nine Healing Rooms",
    text: "Each sauna offers unique therapeutic benefits",
    items: [
      { title: "Amethyst Crystal + Salt Room", text: "Calm the mind and reduce anxiety through negative ion therapy", image: images.cardAmethystSalt },
      { title: "Charcoal Room", text: "Charcoal provides the negative ions to purify the air.", image: images.cardCharcoal },
      { title: "Ocher Room", text: "This room uses infrared rays and yellow soil to detoxify the body.", image: images.cardOcher },
      { title: "Ice Room", text: "Chilled to just above freezing, a brisk cold treatment stimulates blood flow and tightens pores.", image: images.cardIce },
      { title: "Salt Dome", text: "Himalayan salt microclimate rich in negative ions", image: images.cardSaltDome },
      { title: "Gold Pyramid Sauna", text: "The pyramid shape channels energy to purify mind, body and soul.", image: images.cardPyramid },
      { title: "Bul Ga Ma Sauna", text: "Contains amethysts crystals, and a unique living stone called elvan. This room is very hot to maximize the healing benefits of infrared rays.", image: images.cardBulgama },
      { title: "Fire Sudatorium", text: "The unique architectural shape intensifies the heat within the room. The sudatorium is made from rocks as described as living.", image: images.cardFire },
      { title: "Base Rock Room", text: "Exclusive Japanese Base Rock Room with mineral stones and amethyst crystals melts tension and boosts circulation in just 20 minutes.", image: images.cardBaseRock },
    ],
  },
  bring: {
    heading: "What to Bring",
    text: "One of the best things about visiting King Spa? You don’t need to pack much. We provide towels, loungewear, toiletries, and everything else you need for a full day of relaxation. Just bring yourself—and maybe a few small extras.",
    columns: [
      { heading: "WE PROVIDE", lead: "Towels", items: ["Loungewear (uniform)", "Toiletries (shampoo, soap, conditioner)", "Locker storage"] },
      { heading: "Must Bring", lead: "", items: ["A valid I.D.", "Form of Payment"] },
      { heading: "CONSIDER BRINGING", lead: "", items: ["Hair tie (if you have long hair)", "Contact lens case (steam can be intense)", "Your own skincare (optional)", "A book (for quiet moments)", "An open mind — essential!"] },
    ],
  },
  nudity: {
    heading: "About Nudity in the Wet Areas",
    text: "In the gender-separated bath areas, guests bathe without clothing—a tradition rooted in Korean culture that emphasizes purity, cleanliness, and equality. If this feels unfamiliar, you’re not alone. First-timers often say they forgot to feel self-conscious once they settled in.\nIn the co-ed sauna areas, everyone wears the provided loungewear. The atmosphere is quiet, respectful, and welcoming to all.",
  },
  reviews: { heading: "What People Are Saying About King Spa & Sauna" },
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      { question: "How much is an admission pass and how do I buy one?", answer: "Admission passes are $75 at the door. We have a special offer for a $45 e-coupon day pass [here.](/e-coupon/)" },
      {
        question: "What's included with admission?",
        answer: "Your admission includes all-day access to our 9 specialty saunas, hot and cold pools, relaxation lounges, and common areas. Spa treatments like the Korean Body Scrub are available for an additional fee and can be booked once you arrive.",
      },
      {
        question: "What are King Spa's hours?",
        answer: "We’re open 24 hours a day, 7 days a week, 365 days a year. However, entry is not permitted between 2:00am and 6:00am—guests already inside are welcome to stay, but new arrivals must wait until 6:00am.",
      },
      {
        question: "How long can I stay?",
        answer: "There’s no time limit during regular operating hours. Stay as long as you need to fully unwind. Guests who stay overnight are charged a $20 fee, and stays longer than 24 hours require an additional admission pass.",
      },
      { question: "What should I bring?", answer: "Bring a valid ID and a form of payment. We provide towels and spa attire, and essentials like toiletries are available on-site." },
      {
        question: "Is King Spa co-ed?",
        answer: "The sauna rooms, relaxation lounges, and common areas are co-ed—guests wear the provided spa attire in these spaces. The bathhouse and pool areas are gender-separated, and nudity is required in these areas.",
      },
    ],
  },
  location: {
    heading: "Location & Hours",
    addressHeading: "ADDRESS",
    address: "809 Civic Center Dr. Niles, IL 60714",
    hoursHeading: "OPENING HOURS",
    hours: "Open 24/7\n(Entry prohibited 2am-6am)",
  },
  cta: {
    heading: "Ready to Experience It Yourself?",
    text: "No reservation needed. Walk in anytime—we’re open 24/7",
    button: { label: "Get Your $45 E-Coupon", href: "/e-coupon/" },
  },
};
