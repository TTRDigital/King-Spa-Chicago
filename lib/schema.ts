import type { SiteSettings } from "@/lib/data/site";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { plain } from "@/components/ui/RichText";

const abs = (src: string) => (src.startsWith("http") ? src : absoluteUrl(src));

/** One DaySpa entity for the whole site, from the address, phone and hours on the old site (open 24/7). */
export function businessSchema(s: SiteSettings) {
  const digits = s.phoneHref.replace(/\D/g, "").replace(/^1/, "");
  return {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "@id": `${siteUrl}/#dayspa`,
    name: s.legalName,
    alternateName: s.name,
    url: absoluteUrl("/"),
    telephone: `+1-${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`,
    email: s.email,
    image: abs(s.logo.src),
    logo: abs(s.logo.src),
    address: { "@type": "PostalAddress", streetAddress: s.street, addressLocality: s.city, addressRegion: s.region, postalCode: s.postalCode, addressCountry: "US" },
    geo: { "@type": "GeoCoordinates", latitude: s.latitude, longitude: s.longitude },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
    ],
    sameAs: s.footer.social.map((x) => x.href),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}

/** FAQPage from the questions shown on a page, word for word. */
export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: plain(f.answer) } })),
  };
}
