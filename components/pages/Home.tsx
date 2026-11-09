import Image, { getImageProps } from "next/image";
import Link from "next/link";
import type { homePage } from "@/lib/data/pages/home";
import { getSettings } from "@/lib/content";
import { faqPageSchema } from "@/lib/schema";
import { Inline } from "@/components/ui/RichText";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reviews } from "@/components/ui/Reviews";
import { HomeTabs } from "@/components/sections/HomeTabs";
import { TreatmentCarousel } from "@/components/sections/TreatmentCarousel";
import { GalleryLightbox } from "@/components/sections/GalleryLightbox";
import { CardFaq } from "@/components/sections/CardFaq";
import { LocationHours } from "@/components/sections/LocationHours";

/** Home (/), section by section as on chi.kingspa.com. */
/**
 * The phone crop of the hero: bottom-center 768x760 at natural size. Sanity photos are cut by
 * Sanity's CDN (rect=); the built-in photo by scripts/optimize-images.mjs (HERO_CROPS).
 */
function heroPhoneSrc(img: { src: string; width: number; height: number }) {
  const w = Math.min(768, img.width);
  const h = Math.min(760, img.height);
  if (img.src.startsWith("https://cdn.sanity.io/")) return `${img.src}?rect=${Math.round((img.width - w) / 2)},${img.height - h},${w},${h}&fm=webp&q=75`;
  return `/_img${img.src.replace(/\.(jpe?g|png|webp)$/i, "")}-phone.webp`;
}

export async function HomeView({ data }: { data: typeof homePage }) {
  const settings = await getSettings();
  const { hero, intro, sanctuary, treatments, videos, gallery, reviews, location, faq, booking } = data;
  return (
    <div className="bg-cream">
      <JsonLd data={faqPageSchema(faq.items)} />

      {/* Hero: the photo at its natural size, anchored bottom-center, under a 37% black overlay. */}
      <section className="relative flex min-h-[680px] flex-col items-center justify-center overflow-hidden p-[10px] text-center md:min-h-[836px]">
        {/* Phones get a pre-cut 768x760 piece of the same photo (the part a phone shows at natural size), not the 1920px file. */}
        <picture>
          <source media="(max-width: 767px)" srcSet={heroPhoneSrc(hero.image)} width={768} height={760} />
          <img
            {...getImageProps({ src: hero.image.src, alt: hero.image.alt, width: hero.image.width, height: hero.image.height, sizes: "1920px", priority: true }).props}
            alt={hero.image.alt}
            fetchPriority="high"
            className="absolute bottom-0 left-1/2 h-[1280px] w-[1920px] max-w-none -translate-x-1/2 max-md:h-[760px] max-md:w-[768px]"
          />
        </picture>
        <div aria-hidden="true" className="absolute inset-0 bg-black/[0.37]" />
        <div className="relative flex flex-col gap-[20px] text-white">
          <h2 className="font-recoleta text-[50px] leading-[50px] font-normal md:text-[64px] md:leading-[64px]">{hero.heading}</h2>
          <div className="font-recoleta text-[22px] leading-[33px] md:text-[24px] md:leading-[36px]">
            {hero.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Intro card */}
      <section className="px-[10px] pt-[60px] pb-[56px] md:px-0 md:py-[82px]">
        {/* Tablet: 80.6% wide (photo 36.7%), capped at 983px on desktop, as on live. */}
        <div className="mx-auto flex max-w-[983px] flex-col md:w-[80.6%] md:flex-row">
          <div className="relative h-[400px] overflow-hidden rounded-[30px_30px_0_0] md:h-auto md:min-h-[474px] md:w-[36.7%] md:shrink-0 md:rounded-[31.3px_0_0_31.3px]">
            <Image src={intro.image.src} alt={intro.image.alt} fill sizes="(max-width: 767px) 370px, 361px" className="object-cover object-left-top" />
          </div>
          <div className="flex flex-col gap-[20px] rounded-[0_0_114px_0] border-b-[10px] border-rust bg-maroon px-[22px] pt-[22px] pb-[32px] md:min-h-[474px] md:grow md:rounded-[0_31.3px_113.52px_0] md:px-[57px] md:pt-[50px] md:pb-[29px] lg:pb-0">
            <h2 className="font-recoleta text-[27px] leading-[27px] font-medium text-white md:text-[48px] md:leading-[48px]">{intro.heading}</h2>
            <p className="rich mb-[14px] font-tienne text-[14px] leading-[21px] text-white md:mb-0">
              <Inline text={intro.text} />
            </p>
            <div className="mt-[15px] hidden md:flex">
              <Link href={intro.button.href} className="inline-block rounded-[9px] bg-rust py-[15px] pr-[30px] pl-[35px] font-tienne text-[16px] leading-[16px] text-white capitalize transition-all duration-300 hover:bg-white">
                {intro.button.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Sanctuary of Healing */}
      <section className="mx-auto max-w-[1400px] px-[10px] pt-[10px] pb-[60px] md:px-0 md:pt-[80px] md:pb-[80px]">
        <h2 className="font-recoleta text-[26px] leading-[26px] font-normal text-maroon md:text-[38px] md:leading-[38px] lg:text-[48px] lg:leading-[50px]">{sanctuary.heading}</h2>
        <HomeTabs tabs={sanctuary.tabs} />
      </section>

      {/* Our Signature Spa Treatments */}
      <section className="mx-auto max-w-[1400px] px-[10px] pt-[60px] pb-[120px] md:px-0 md:pt-[20px] md:pb-[89px]">
        <h2 className="mb-[40px] text-center font-recoleta text-[26px] leading-[26px] font-normal text-maroon md:mb-[36px] md:text-[38px] md:leading-[38px] lg:text-[46px] lg:leading-[50px]">{treatments.heading}</h2>
        <TreatmentCarousel cards={treatments.cards} />
      </section>

      {/* How to Enjoy King Spa */}
      {/* Boxed at 1400px; 10px from the edges below that. The videos are YouTube's own player, as on live. */}
      <section className="mx-[10px] max-w-[1400px] min-[1420px]:mx-auto">
        <div className="rounded-[29px_105px_29px_29px] border-t-[8px] border-rust bg-maroon px-[10px] pt-[30px] pb-[40px] md:px-[50px] md:pt-[50px] md:pb-[60px]">
          <h2 className="text-center font-recoleta text-[26px] leading-[26px] font-normal text-white md:text-[38px] md:leading-[38px] lg:mt-[20px] lg:text-[48px] lg:leading-[50px]">{videos.heading}</h2>
          <div className="mt-[30px] grid grid-cols-1 gap-[19px] px-[10px] md:mt-[60px] md:grid-cols-2 md:gap-[20px] md:px-[10px] lg:mt-[70px]">
            {videos.items.map((v) => (
              <iframe
                key={v.youtubeId}
                src={`https://www.youtube.com/embed/${v.youtubeId}?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0`}
                title={v.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="block aspect-video w-full border-0 bg-black"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-[1400px] px-[10px] pt-[120px] pb-[59px] md:px-0 md:pt-[61px] md:pb-[50px]">
        <h2 className="mb-[40px] text-center font-recoleta text-[36px] leading-[44px] font-normal text-maroon md:text-[40px] lg:text-[48px]">{gallery.heading}</h2>
        <GalleryLightbox photos={gallery.photos} />
      </section>

      {/* Guest Reviews (Elfsight) */}
      <section className="mx-auto max-w-[1400px] px-[10px] py-[37px] md:px-0 md:py-[82px]">
        <div className="flex flex-wrap items-center justify-evenly gap-[20px] rounded-[20px_20px_115px_20px] border-b-[10px] border-rust bg-maroon px-[22px] pt-[22px] pb-[32px] md:block md:rounded-[30px_30px_100px_30px] md:px-[60px] md:py-[50px]">
          <h2 className="text-center font-recoleta text-[26px] leading-[26px] font-normal text-white md:mb-[20px] md:text-[38px] md:leading-[38px] lg:text-[48px] lg:leading-[50px]">{reviews.heading}</h2>
          <Reviews widgetId={settings.reviews.homeWidgetId} />
        </div>
      </section>

      {/* Location & Hours, FAQ and booking: designed as on the inner pages (the old home page showed Elementor's
          unstyled defaults here, with a small map). Icon boxes with a full-width map, the FAQ card, a booking card. */}
      <LocationHours data={location} mapSrc={settings.maps.place} headingFont="recoleta" />

      <CardFaq heading={faq.heading} items={faq.items} />

      <section className="mx-auto max-w-[1400px] px-[10px] pb-[60px] md:pb-[90px] lg:px-0">
        <div className="mx-auto max-w-[1235px] rounded-[20px_20px_100px_20px] border-b-[10px] border-rust bg-maroon px-[24px] pt-[40px] pb-[50px] text-center md:rounded-[30px_30px_100px_30px] md:px-[60px] md:py-[60px]">
          <h2 className="font-recoleta text-[30px] leading-[34px] font-normal text-white md:text-[40px] md:leading-[44px] lg:text-[48px] lg:leading-[52px]">{booking.heading}</h2>
          <p className="mx-auto mt-[20px] max-w-[760px] font-mulish text-[15px] leading-[23px] text-white">{booking.text}</p>
          <Link
            href={booking.button.href}
            className="mt-[30px] inline-block rounded-[4px] border border-rust bg-rust px-[36px] py-[18px] font-mulish text-[14px] leading-[14px] font-bold text-white uppercase transition-all duration-300 hover:border-white hover:bg-white hover:text-maroon"
          >
            {booking.button.label}
          </Link>
        </div>
      </section>
    </div>
  );
}
