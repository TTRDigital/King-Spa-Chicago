/* Blog (/blog/), the post template and the archive pages: built-in content, copied from chi.kingspa.com. Edited in /cms > Pages > Blog. */
export const blogPage = {
  seo: { title: "Blog – King Spa Chicago", description: "" },
  /** WordPress authors (each had an archive page at /author/<slug>/). */
  authors: [
    { slug: "ahsan", name: "Ahsan Raees" },
    { slug: "ryan", name: "Ryan Spark" },
    { slug: "subhan", name: "Subhan M" },
    { slug: "ttr", name: "TTR" },
  ],
  /** /blog/: red banner and the post cards. */
  banner: { korean: "피부 미용", title: "Blog" },
  card: {
    readMore: "Read More",
    /** Words of the post excerpt shown on a card (the old blog grid cut it at 34). */
    excerptWords: 34,
    /** The author picture on the cards (the old site showed the default Gravatar). */
    avatar: { src: "/images/blog/author-avatar.jpg", alt: "TTR", width: 128, height: 128 },
  },
  /** Blog post template (/uncategorized/<post>/). */
  post: {
    bannerKorean: "블로그",
    heading: "King Spa & Sauna Blog",
    tocTitle: "Table of Contents:",
    bylineName: "King Spa & Sauna",
    /** The small lion beside the byline (the old site's icon, uncropped). */
    bylineIcon: { src: "/images/blog/lion-byline-icon.svg", alt: "", width: 199, height: 216 },
    cta: {
      heading: "Visit King Spa – It’s Good For Your Health",
      text: "Experience the rejuvenation of Korean wellness at King Spa. Plan your visit today and discover why we’re the ultimate day spa in Virginia for relaxation and healing.",
      button: { label: "Book Your Spa Experience", href: "https://virginia.kingspa.com/day-pass/" },
    },
    relatedHeading: "Explore Related Articles",
    viewAll: { label: "View All", href: "/blog/" },
    shareLabel: "Share:",
    authorIntro: "Article written by",
    authorName: "King Spa & Sauna",
  },
  /** Category and author archive pages (the old theme's plain archive). */
  archive: {
    categoryPrefix: "Category:",
    authorPrefix: "Author:",
  },
};
