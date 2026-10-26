import Image, { getImageProps } from "next/image";
import Link from "next/link";
import type { homePage } from "@/lib/data/pages/home";
import { getSettings } from "@/lib/content";
import { faqPageSchema } from "@/lib/schema";
import { Inline } from "@/components/ui/RichText";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reviews } from "@/components/ui/Reviews";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { HomeTabs } from "@/components/sections/HomeTabs";
import { TreatmentCarousel } from "@/components/sections/TreatmentCarousel";
import { VideoFacade } from "@/components/sections/VideoFacade";
import { GalleryLightbox } from "@/components/sections/GalleryLightbox";
import { PlainFaq } from "@/components/sections/PlainFaq";
import { ClockIcon, PinIcon } from "@/components/sections/IconBoxes";

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
      <section className="px-[10px] pt-[60px] pb-[56px] md:py-[82px]">
        <div className="mx-auto flex max-w-[983px] flex-col md:flex-row">
          <div className="relative h-[400px] overflow-hidden rounded-[30px_30px_0_0] md:h-[474px] md:w-[361px] md:shrink-0 md:rounded-[31.3px_0_0_31.3px]">
            <Image src={intro.image.src} alt={intro.image.alt} fill sizes="(max-width: 767px) 370px, 361px" className="object-cover object-left-top" />
          </div>
          <div className="flex flex-col gap-[20px] rounded-[0_0_114px_0] border-b-[10px] border-rust bg-maroon px-[22px] pt-[22px] pb-[32px] md:min-h-[474px] md:grow md:rounded-[0_31.3px_113.52px_0] md:px-[57px] md:pt-[50px] md:pb-0">
            <h2 className="font-recoleta text-[27px] leading-[27px] font-medium text-white md:text-[48px] md:leading-[48px]">{intro.heading}</h2>
            <p className="rich mb-[14px] font-tienne text-[14px] leading-[21px] text-white md:mb-0">
              <Inline text={intro.text} />
            </p>
            <div className="mt-[15px] hidden md:block">
              <Link href={intro.button.href} className="inline-block rounded-[9px] bg-rust py-[15px] pr-[30px] pl-[35px] font-tienne text-[16px] leading-[16px] text-white capitalize">
                {intro.button.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Sanctuary of Healing */}
      <section className="mx-auto max-w-[1440px] px-[10px] pt-[10px] pb-[60px] md:px-[20px] md:pt-[80px] md:pb-[80px]">
        <h2 className="font-recoleta text-[26px] leading-[26px] font-normal text-maroon md:text-[48px] md:leading-[50px]">{sanctuary.heading}</h2>
        <HomeTabs tabs={sanctuary.tabs} />
      </section>

      {/* Our Signature Spa Treatments */}
      <section className="mx-auto max-w-[1440px] px-[10px] pt-[60px] pb-[120px] md:px-[20px] md:pt-[20px] md:pb-[89px]">
        <h2 className="mb-[40px] text-center font-recoleta text-[26px] leading-[26px] font-normal text-maroon md:mb-[36px] md:text-[46px] md:leading-[50px]">{treatments.heading}</h2>
        <TreatmentCarousel cards={treatments.cards} />
      </section>

      {/* How to Enjoy King Spa */}
      <section className="mx-auto max-w-[1440px] px-[10px] md:px-[20px]">
        <div className="rounded-[29px_105px_29px_29px] border-t-[8px] border-rust bg-maroon px-[10px] pt-[30px] pb-[40px] md:px-[50px] md:pt-[50px] md:pb-[60px]">
          <h2 className="text-center font-recoleta text-[26px] leading-[26px] font-normal text-white md:mt-[20px] md:text-[48px] md:leading-[50px]">{videos.heading}</h2>
          <div className="mt-[30px] grid grid-cols-1 gap-[19px] px-[10px] md:mt-[70px] md:grid-cols-2 md:gap-[20px] md:px-[10px]">
            {videos.items.map((v) => (
              <VideoFacade key={v.youtubeId} id={v.youtubeId} title={v.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-[1440px] px-[10px] pt-[120px] pb-[59px] md:px-[20px] md:pt-[61px] md:pb-[50px]">
        <h2 className="mb-[40px] text-center font-recoleta text-[36px] leading-[44px] font-normal text-maroon md:text-[48px] md:leading-[44px]">{gallery.heading}</h2>
        <GalleryLightbox images={gallery.images} />
      </section>

      {/* Guest Reviews (Elfsight) */}
      <section className="mx-auto max-w-[1440px] px-[10px] py-[37px] md:px-[20px] md:py-[82px]">
        <div className="rounded-[20px_20px_115px_20px] border-b-[10px] border-rust bg-maroon px-[22px] pt-[22px] pb-[32px] md:rounded-[30px_30px_100px_30px] md:px-[60px] md:py-[50px]">
          <h2 className="mb-[20px] text-center font-recoleta text-[26px] leading-[26px] font-normal text-white md:text-[48px] md:leading-[50px]">{reviews.heading}</h2>
          <Reviews widgetId={settings.reviews.homeWidgetId} />
        </div>
      </section>

      {/* Location & Hours (Elementor defaults: system font) */}
      <section className="mx-auto max-w-[1440px] px-[20px] pt-[20px] md:px-[40px]">
        <h2 className="font-sans text-[32px] leading-[32px] font-medium text-body">{location.heading}</h2>
        <div className="mt-[30px] grid grid-cols-1 gap-[20px] text-center md:mt-[30px] md:grid-cols-2 md:gap-0 md:text-left">
          <div className="flex flex-col items-center gap-[8px] md:flex-row md:items-start md:gap-0 md:px-[10px]">
            <PinIcon />
            <div>
              <span className="block font-sans text-[28px] leading-[33.6px] font-medium text-body md:mt-[7px]">{location.addressHeading}</span>
              <p className="mt-[17px] font-sans text-[16px] leading-[24px] text-body">{location.address}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[8px] md:flex-row md:items-start md:gap-0 md:px-[10px]">
            <ClockIcon />
            <div>
              <span className="block font-sans text-[28px] leading-[33.6px] font-medium text-body md:mt-[7px]">{location.hoursHeading}</span>
              <p className="mt-[17px] whitespace-pre-line font-sans text-[16px] leading-[24px] text-body">{location.hours}</p>
            </div>
          </div>
        </div>
        <div className="mt-[10px] w-[304px] max-w-full">
          <MapEmbed src={settings.maps.pin} title="King Spa & Sauna on Google Maps" className="h-[300px] border-2 border-[#ddd]" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-[44px]">
        <h2 className="font-sans text-[32px] leading-[32px] font-medium text-body">{faq.heading}</h2>
        <PlainFaq items={faq.items} />
      </section>

      {/* Book Your Spa Day */}
      <section className="pt-[24px] pb-[24px]">
        <h2 className="font-sans text-[32px] leading-[32px] font-medium text-body">{booking.heading}</h2>
        <p className="font-sans text-[16px] leading-[24px] text-body">{booking.text}</p>
        <div className="mt-[38px] text-center md:text-right">
          <Link href={booking.button.href} className="inline-block rounded-[5px] bg-grey-btn px-[40px] py-[20px] font-sans text-[18px] leading-[18px] text-white underline">
            {booking.button.label}
          </Link>
        </div>
      </section>
    </div>
  );
}
