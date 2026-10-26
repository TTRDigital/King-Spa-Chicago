/* Home (/): built-in content, copied from chi.kingspa.com. Edited in /cms > Pages > Home. */
import { images } from "../images.ts";

const faq = [
  { question: "How much is an admission pass and how do I buy one?", answer: "Admission passes are $75 at the door. We have a special offer for a $45 e-coupon day pass here." },
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
];

export const homePage = {
  seo: { title: "King Spa Chicago", description: "" },
  hero: {
    heading: "The Authentic Korean Spa Experience",
    lines: ["A full-day wellness destination featuring specialty", "saunas, hot and cold pools, and traditional Korean body treatments."],
    image: images.heroRedRoom,
  },
  intro: {
    image: images.guestsResting,
    heading: "Experience Korean Spa Culture & Wellness",
    text: "For over 20 years, King Spa & Sauna has brought authentic Korean wellness traditions to Chicago. Our facility features 11 specialty saunas built with traditional materials—oak, charcoal, clay, amethyst, Himalayan salt, and 23K gold—alongside therapeutic pools, relaxation spaces, and a full menu of spa treatments. At the center of it all is the experience you can’t find anywhere else: the region’s only authentic Korean Body Scrub and the Bul Han Jing Mak, the hottest sauna in the world at 390°F. We invite you to come *heal and feel* at King Spa & Sauna today.",
    button: { label: "Discover First-Time Guide", href: "/first-time-guide/" },
  },
  sanctuary: {
    heading: "Explore Our Sanctuary of Healing",
    tabs: [
      {
        label: "Saunas",
        heading: "Saunas",
        subheading: "EMBRACE THE HEAT FOR TOTAL DETOX",
        text: "We offer a range of traditional Korean saunas, each designed to detoxify and heal the body through different heat therapies.",
        items: [
          { title: "Charcoal Sauna", text: "Natural charcoal absorbs toxins and impurities while gentle heat soothes tension and supports digestion.", image: images.aboutCharcoal },
          { title: "Amethyst + Hinoki", text: "Calming amethyst crystals and aromatic hinoki wood combine to relieve stress and purify the respiratory system.", image: images.aboutAmethyst },
          { title: "Pink Salt Dome", text: "Himalayan salt creates healing negative ions that detoxify deeply and enhance respiratory health.", image: images.saltRoom },
          { title: "Fire Sudatorium", text: "The world's hottest sauna at 390°F—a 500-year-old tradition that delivers profound detoxification and pain relief.", image: images.aboutFire },
          { title: "Bul Ga Ma Sauna", text: "Our patented elvan-stone sauna reaches 800°F to purify blood and stimulate powerful cellular renewal.", image: images.aboutBulgama },
          { title: "Base Rock Sauna", text: "Mineral-rich Siraka block emits far-infrared rays that boost metabolism and restore full-body energy.", image: images.baseRock },
          { title: "Gold Pyramid Sauna", text: "23K gold leaf amplifies heat evenly to enhance circulation, radiance, and deep mental clarity.", image: images.aboutPyramid },
          { title: "Ice Room", text: "Cold air therapy tightens pores, reduces inflammation, and re-energizes body and mind after heat treatments.", image: images.aboutIce },
          { title: "Ocher Sauna", text: "Natural Korean ocher minerals radiate gentle warmth that balances energy and relaxes muscles and joints.", image: images.aboutOcher },
        ],
      },
      {
        label: "Bathhouse",
        heading: "Bathhouse",
        subheading: "TRADITIONAL KOREAN BATHING",
        text: "Experience authentic Korean bathing rituals for deep cleansing.",
        items: [
          { title: "Hot Tubs", text: "Soothe your muscles in our traditional hot tubs.", image: images.bathhousePool },
          { title: "Steam Rooms", text: "Detoxify and relax in our healing steam rooms.", image: images.steamRoom },
          { title: "Cold Plunge Pools", text: "Invigorate your body with refreshing cold immersion.", image: images.bathInside },
        ],
      },
      {
        label: "Relaxation Areas",
        heading: "Relaxation Areas",
        subheading: "REST AND REJUVENATE",
        text: "After your treatments, unwind in our beautifully designed relaxation areas. Find your perfect spot to meditate, read, or simply recharge your body and mind in quiet luxury. Conveniently located near Chicago, King Spa is your go-to destination for relaxation and wellness in Chicago.",
        items: [{ title: "Relaxation Area", text: "Find your perfect spot to meditate, read, or simply recharge.", image: images.loungeRedChairs }],
      },
      {
        label: "Dining Area",
        heading: "Dining Area",
        subheading: "NOURISH YOUR BODY",
        text: "Complete your wellness experience with a visit to our dining area, offering freshly made, nutritious Korean and American dishes, house-made juices and smoothies, and so much more.",
        items: [{ title: "Restaurant", text: "Fresh and healthy meals.", image: images.restaurantCounter }],
      },
    ],
  },
  treatments: {
    heading: "Our Signature Spa Treatments",
    cards: [
      { title: "Body Scrubs", lines: ["Experience Ancient", "Korean Skincare"], image: images.cardBodyScrub, button: { label: "Learn More", href: "/body-scrub/" } },
      { title: "V-Steam", lines: ["Restore Balance and", "Wellness"], image: images.cardVSteam, button: { label: "Learn More", href: "/v-steam/" } },
      { title: "Facials", lines: ["Revitalize your", "skin"], image: images.cardFacial, button: { label: "Learn More", href: "/facials/" } },
      { title: "Massage", lines: ["Release Tension and", "Restore Balance"], image: images.cardMassage, button: { label: "Learn More", href: "/massagetherapy/" } },
    ],
  },
  videos: {
    heading: "How to Enjoy King Spa",
    /** YouTube videos, embedded as on the old site (the title is the player's accessible name). */
    items: [
      { youtubeId: "Yblee2j8Gdc", title: "My Video.mp4" },
      { youtubeId: "nStjDL7qFBw", title: "King Spa & Sauna" },
    ],
  },
  gallery: {
    heading: "Gallery",
    images: [
      images.galleryDiningHall,
      images.galleryMeals,
      images.galleryUtensils,
      images.galleryMuralDoor,
      images.galleryFaceMasks,
      images.galleryExterior,
      images.galleryAmethyst,
      images.galleryFriedRice,
      images.galleryRedRoom,
      images.galleryCinema,
      images.galleryLounge,
      images.gallerySaltDome,
      images.galleryLionStatue,
      images.galleryEntranceNight,
      images.galleryBuddha,
      images.galleryHallway,
    ],
  },
  reviews: { heading: "Guest Reviews" },
  location: {
    heading: "Location & Hours",
    addressHeading: "ADDRESS",
    address: "809 Civic Center Dr. Niles, IL 60714",
    hoursHeading: "OPENING HOURS",
    hours: "Open 24/7\n(Entry prohibited 2am-6am)",
  },
  faq: { heading: "Frequently Asked Questions", items: faq },
  booking: {
    heading: "Book Your Spa Day",
    text: "\u00a0Book your visit today at King Spa Chicago for an unforgettable wellness journey. Enjoy our renowned saunas, body scrubs, and facials tailored to rejuvenate your mind and body.",
    button: { label: "Visit King Spa", href: "/e-coupon/" },
  },
};
