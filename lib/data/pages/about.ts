/* About (/about/): built-in content, copied from chi.kingspa.com/about/. Edited in /cms > Pages > About. */
import { images } from "../images.ts";

export const aboutPage = {
  seo: { title: "About – King Spa Chicago", description: "" },
  banner: { korean: "회사 소개", title: "About Us" },
  heading: "About King Spa & Sauna Chicago",
  story: {
    heading: "Our Story",
    paragraphs: [
      "For over 20 years, King Spa & Sauna has been Chicago’s home for authentic Korean wellness—a cultural sanctuary where you slow down, reconnect, and experience the warmth of shared rest.",
      "In Korean, there’s a word for this feeling: *jeong* (정). It’s the deep sense of connection and care that grows when people rest together, unhurried and present. Jeong is what we’ve built our doors around, and what guests tell us they feel the moment they step inside.",
      "What began as a vision to bring the centuries-old traditions of the Korean jjimjilbang to the Midwest has become a gathering place where families, couples, and friends come together to restore body, mind, and spirit.",
    ],
    image: images.galleryExterior,
  },
  tradition: {
    heading: "Rooted in Tradition",
    paragraphs: [
      "A jjimjilbang is more than a spa—it’s woven into Korean culture, where generations share in the rituals of heat, rest, and renewal. At King Spa, we’ve preserved these traditions with care, creating a space where the ancient art of Korean wellness meets modern comfort.",
      "At the heart of the experience is the bathhouse. In Korea, communal bathing has been practiced for centuries—a place where people cleanse, soak, and let go of the outside world. Our gender-separate bathhouses follow this tradition, offering hot and cold pools, steam rooms, and showers in a nude environment. For many, this is where the real relaxation begins: shedding not just clothing but the tension carried in from daily life. It’s a practice rooted in trust, respect, and the simple act of being present in your own body.",
      "We understand this isn’t for everyone, and that’s okay. Guests are welcome to skip the bathhouse entirely and enjoy our co-ed saunas, relaxation areas, and treatments in comfortable spa attire.",
      "For those who do visit the bathhouse, it’s also where you’ll find our signature Korean Body Scrub (세신)—performed by trained practitioners using time-honored techniques passed down through generations. This traditional exfoliation treatment is central to the jjimjilbang ritual, removing layers of dead skin and leaving you feeling completely renewed. It’s the only Korean Body Scrub available in the region, and it’s not something you’ll find anywhere else in Chicago.",
      "Our 9 specialty saunas each serve a distinct purpose, built with authentic materials like Himalayan salt, natural oak charcoal, Korean yellow mud, and genuine 23K gold leaf. The Bul Han Jing Mak, our Fire Sudatorium, preserves a tradition dating back five centuries—heated to 390°F using oak wood, loess, and salt, it’s considered the hottest sauna in the world. We also hold a patent on the Bul Ga Ma Sauna, a Korean elvan-stone sauna that reaches approximately 800°F. This technology is exclusive to King Spa and cannot be found elsewhere.",
      "Beyond the saunas and body scrubs, our treatment menu includes therapeutic massages, rejuvenating facials, and V-steam herbal therapy—each designed to complement your time in the jjimjilbang and deepen your sense of restoration.",
    ],
    /** Three columns of three on desktop (read top to bottom), one column on phones. */
    gallery: [
      { image: images.aboutBulgama, caption: "Bul Ga Ma Room" },
      { image: images.saltRoom, caption: "Salt Room" },
      { image: images.baseRock, caption: "Base Rock Sauna" },
      { image: images.aboutFire, caption: "Fire Sudatorium" },
      { image: images.aboutCharcoal, caption: "Charcoal Room" },
      { image: images.aboutAmethyst, caption: "Amethyst + Hinoki" },
      { image: images.aboutPyramid, caption: "Gold Pyramid Sauna" },
      { image: images.aboutIce, caption: "Ice Room" },
      { image: images.aboutOcher, caption: "Ocher Sauna" },
    ],
  },
  reconnect: {
    heading: "A Place to Reconnect",
    paragraphs: [
      "Unlike many spas that cater only to adults, we welcome families. Grandparents, parents, and children (ages 8 and up) can share in the experience together—unplugging from screens, reconnecting with each other, and discovering wellness as something you do with the people who matter most.",
      "Whether you’re seeking a couples retreat, a solo day of restoration, or quality time across generations, King Spa offers space for all of it. Our doors are open 24 hours a day, seven days a week, with no appointment needed for admission.",
    ],
  },
  commitment: {
    heading: "Our Commitment",
    paragraphs: [
      "We believe authentic Korean wellness should be accessible to everyone. That means world-class treatments, genuine traditions, and a welcoming atmosphere—without the exclusivity. When you visit King Spa, you’re not just a guest. You’re part of a community that has trusted us for two decades to deliver something real.",
      "This is a place to slow down. To feel the warmth of jeong. To heal and feel, together.",
    ],
    button: { label: "Get Your $45 E-CouPon", href: "/e-coupon/" },
  },
};
