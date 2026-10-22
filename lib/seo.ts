import type { Metadata } from "next";
import type { Img, Seo } from "@/lib/types";
import { images } from "@/lib/data/images";

/**
 * Title, description, canonical, Open Graph and Twitter tags. Titles are used
 * as written (the old site's titles); an empty description is left out, as on
 * the old site, until one is entered in /cms.
 */
export function pageMetadata(seo: Seo, path: string, image: Img = images.heroRedRoom, noIndex = false): Metadata {
  const description = seo.description?.trim() || undefined;
  return {
    title: { absolute: seo.title },
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: { type: "website", siteName: "King Spa Chicago", locale: "en_US", url: path, title: seo.title, description, images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }] },
    twitter: { card: "summary_large_image", title: seo.title, description, images: [image.src] },
  };
}
