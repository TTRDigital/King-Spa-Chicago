import Image from "next/image";
import Link from "next/link";
import type { firstTimeGuidePage } from "@/lib/data/pages/firstTimeGuide";
import { getSettings } from "@/lib/content";
import { faqPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reviews } from "@/components/ui/Reviews";
import { CardFaq } from "@/components/sections/CardFaq";
import { LocationHours } from "@/components/sections/LocationHours";

/* The four icons of the facts box and the dish icons, extracted from the old page's inline SVGs. */
const FACT_ICONS = [
  { src: "/images/icons/guide-info-1.svg", w: 45, h: 41 },
  { src: "/images/icons/guide-info-2.svg", w: 45, h: 45 },
  { src: "/images/icons/guide-info-3.svg", w: 51, h: 51 },
  { src: "/images/icons/guide-info-4.svg", w: 42, h: 42 },
];
const DISH_ICONS = ["/images/icons/guide-food-egg.svg", "/images/icons/guide-food-bibimbap.png", "/images/icons/guide-food-stew.png"];

const tang = "font-tang font-medium text-body";
const btn = "inline-block rounded-[8px] border border-rust bg-rust font-mulish text-[14px] leading-[14px] font-bold text-white uppercase";

/** First-Time Guide (/first-time-guide/), section by section as on chi.kingspa.com. */
export async function FirstTimeGuideView({ data }: { data: typeof firstTimeGuidePage }) {
  const settings = await getSettings();
  const { banner, welcome, facts, steps, nourish, rooms, bring, nudity, reviews, faq, location, cta } = data;
  return (
    <>
      <JsonLd data={faqPageSchema(faq.items)} />

      {/* Banner */}
      <section className="banner-red min-h-[526px] bg-cover bg-left-top px-0 py-[100px] text-center md:h-[784px] md:pt-[244px] md:pb-0">
        <h2 className="font-sans text-[32px] leading-[32px] font-medium text-sand">{banner.korean}</h2>
        <h2 className="mt-[20px] font-recoleta text-[50px] leading-[50px] font-medium text-white md:text-[96px] md:leading-[96px]">{banner.title}</h2>
        <h2 className="mt-[20px] font-recoleta text-[20px] leading-[20px] font-medium text-white md:text-[32px] md:leading-[32px]">{banner.subtitle}</h2>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-[1440px] px-[10px] pt-[36px] pb-[10px] md:px-[30px]">
        <div className="flex flex-col gap-[20px] md:flex-row md:items-center md:gap-[50px]">
          <Image src={welcome.image.src} alt={welcome.image.alt} width={welcome.image.width} height={welcome.image.height} sizes="(max-width: 767px) 370px, 665px" className="h-auto w-full md:w-[665px] md:shrink-0" />
          <div className="md:w-[665px]">
            <h2 className={`${tang} text-[24px] leading-[36px] md:text-[47px] md:leading-[63px]`}>{welcome.heading}</h2>
            <p className="mt-[20px] whitespace-pre-line font-sans text-[16px] leading-[24px] text-body">{welcome.text}</p>
            <div className="mt-[34px] text-center md:text-left">
              <Link href={welcome.button.href} className="inline-block rounded-[4px] bg-rust p-[20px] font-recoleta text-[15px] leading-[15px] text-white uppercase">
                {welcome.button.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="mx-auto max-w-[1440px] px-[10px] pt-[37px] pb-[10px] md:px-[20px]">
        <div className="grid grid-cols-2 gap-y-[28px] rounded-[29px_29px_105px_29px] border-b-[10px] border-rust bg-maroon px-[20px] py-[60px] md:grid-cols-4 md:gap-[20px] md:p-[48px]">
          {facts.map((f, i) => (
            <div key={f.label} className="flex flex-col items-center text-center text-white">
              {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG icon */}
              <img src={FACT_ICONS[i % 4].src} alt="" width={FACT_ICONS[i % 4].w} height={FACT_ICONS[i % 4].h} loading="lazy" className="h-[50px] w-auto object-contain" />
              <span className="mt-[16px] font-recoleta text-[16px] leading-[19.2px] font-medium md:text-[19px] md:leading-[22.8px]">{f.label}</span>
              <p className="font-urbanist text-[14px] leading-[21px] md:text-[16px] md:leading-[24px]">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Enjoy King Spa */}
      <section className="px-[10px] pt-[54px] pb-[24px] text-center md:px-[20px]">
        <h2 className={`${tang} text-[25px] leading-[25px] md:text-[48px] md:leading-[48px]`}>{steps.heading}</h2>
        <p className="mt-[24px] font-sans text-[16px] leading-[24px] text-body">{steps.text}</p>
      </section>
      <section className="mx-auto max-w-[1061px] px-[10px] md:max-w-[1041px] md:px-0">
        {steps.items.map((s, i) => (
          <div key={s.title}>
            {i > 0 ? (
              <div className="flex h-[35px] items-center" aria-hidden="true">
                <div className="h-px w-full bg-body md:-ml-[3px] md:w-[1048px]" />
              </div>
            ) : null}
            <div className="flex flex-col gap-[21px] px-[10px] pt-[20px] pb-[34px] md:flex-row md:items-center md:gap-[20px] md:px-0">
              <div className="md:flex md:w-[108px] md:shrink-0 md:justify-center">
                <Image src={s.number.src} alt={s.number.alt} width={s.number.width} height={s.number.height} sizes="108px" className="h-auto w-[70px] md:w-auto md:max-w-[108px]" style={{ maxHeight: 92 }} />
              </div>
              <div className="md:w-[913px]">
                <h2 className={`${tang} text-[20px] leading-[20px] md:text-[22px] md:leading-[22px]`}>{s.title}</h2>
                <p className="mt-[20px] font-mulish text-[16px] leading-[24px] text-body">{s.text}</p>
                {s.note ? (
                  <div className="mt-[35px] border-t border-body bg-[rgba(174,84,80,0.1)] pt-[17px] pb-[15px] pl-[24px]">
                    <p className="font-recoleta text-[16px] leading-[24px] text-body">{s.note}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="px-[10px] py-[10px] text-center">
        <Link href={steps.button.href} className={`${btn} w-full max-w-[327px] px-[18px] py-[18px] md:w-auto md:max-w-none md:px-[50px] md:py-[20px]`}>
          {steps.button.label}
        </Link>
      </section>

      {/* Nourish */}
      <section className="mx-auto max-w-[1440px] px-[10px] pt-[50px] md:px-[20px] md:pt-[54px]">
        <div className="rounded-[29px_29px_105px_29px] border-b-[10px] border-rust bg-maroon px-[15px] py-[40px] text-white md:p-[54px] md:pb-[68px]">
          <h2 className="text-center font-tang text-[22px] leading-[30.8px] font-medium md:text-[32px] md:leading-[32px]">{nourish.heading}</h2>
          <p className="mt-[20px] whitespace-pre-line text-center font-mulish text-[16px] leading-[24px] md:text-left">{nourish.text}</p>
          <p className="mt-[15px] text-center font-mulish text-[16px] leading-[24px] md:text-left">{nourish.intro}</p>
          <div className="mt-[34px] grid grid-cols-1 gap-[20px] md:grid-cols-3">
            {nourish.dishes.map((d, i) => (
              <div key={d.title} className="relative min-h-[266px] rounded-[20px] bg-white p-[17px]">
                {/* eslint-disable-next-line @next/next/no-img-element -- decorative dish icon */}
                <img src={DISH_ICONS[i % 3]} alt="" width={52} height={52} loading="lazy" className="absolute left-[17px] top-[17px] h-[52px] w-[52px] object-contain md:left-auto md:right-[17px]" />
                <h2 className={`mt-[76px] font-recoleta font-medium ${i === 0 ? "text-maroon" : "text-body"} ${d.title.length > 20 ? "text-[22px] leading-[22px]" : "text-[32px] leading-[32px]"}`}>{d.title}</h2>
                <p className="mt-[20px] font-mulish text-[12px] leading-[18px] text-body">{d.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-[20px] font-mulish text-[16px] leading-[24px]">{nourish.tip}</p>
        </div>
      </section>

      {/* Nine healing rooms */}
      <section className="px-[10px] pt-[54px] pb-[24px] text-center md:px-[20px]">
        <h2 className={`${tang} text-[30px] leading-[42px] md:text-[48px] md:leading-[48px]`}>{rooms.heading}</h2>
        <p className="mt-[24px] font-sans text-[16px] leading-[24px] text-body">{rooms.text}</p>
      </section>
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-[21px] px-[10px] pt-[10px] md:grid-cols-3 md:gap-x-[20px] md:px-[20px]">
        {rooms.items.map((r, i) => (
          <div key={r.title} className="overflow-hidden rounded-[28px] bg-maroon pb-[30px]">
            <div className={`relative w-full overflow-hidden rounded-[22px] ${i < 6 ? "aspect-[453/401]" : "aspect-square"}`}>
              <Image src={r.image.src} alt={r.image.alt} fill sizes="(max-width: 767px) 370px, 453px" className="object-cover" />
            </div>
            <h2 className="mt-[35px] px-[15px] font-recoleta text-[24px] leading-[24px] font-medium text-white">{r.title}</h2>
            <p className="mt-[17px] px-[15px] font-sans text-[16px] leading-[24px] text-white">{r.text}</p>
          </div>
        ))}
      </section>

      {/* What to Bring */}
      <section className="px-[10px] pt-[54px] pb-[24px] text-center md:px-[20px]">
        <h2 className={`${tang} text-[30px] leading-[30px] md:text-[48px] md:leading-[48px]`}>{bring.heading}</h2>
        <p className="mt-[24px] font-sans text-[16px] leading-[24px] text-body">{bring.text}</p>
      </section>
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-[30px] px-[20px] pt-[20px] pb-[20px] md:grid-cols-3 md:gap-[40px] md:px-[30px]">
        {bring.columns.map((c) => (
          <div key={c.heading} className="font-sans text-[16px] leading-[24px] text-body">
            <h2 className="font-recoleta text-[22px] leading-[22px] font-medium text-body md:text-[32px] md:leading-[32px]">{c.heading}</h2>
            {c.lead ? <p className="mt-[20px]">{c.lead}</p> : null}
            <ul className={`list-disc pl-[40px] ${c.lead ? "mt-[15px]" : "mt-[20px]"}`}>
              {c.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* About Nudity */}
      <section className="mx-auto max-w-[1440px] px-[10px] pt-[54px] md:px-[20px]">
        <div className="rounded-[29px_105px_29px_29px] border-b-[10px] border-rust bg-maroon px-[15px] py-[40px] text-center text-white md:p-[54px] md:pb-[68px]">
          <h2 className="font-tang text-[22px] leading-[30.8px] font-medium md:text-[32px] md:leading-[32px]">{nudity.heading}</h2>
          <p className="mt-[22px] whitespace-pre-line font-mulish text-[16px] leading-[24px]">{nudity.text}</p>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-[10px] pt-[83px] text-center md:px-[20px]">
        <h2 className={`${tang} text-[24px] leading-[33.6px] md:text-[37px] md:leading-[37px]`}>{reviews.heading}</h2>
      </section>
      <section className="mx-auto max-w-[1380px] px-[10px] pt-[40px] pb-[10px] md:px-0">
        <Reviews widgetId={settings.reviews.pagesWidgetId} />
      </section>

      <CardFaq heading={faq.heading} items={faq.items} />

      <div className="pt-[20px]">
        <LocationHours data={location} mapSrc={settings.maps.place} headingFont="tang" />
      </div>

      {/* Call to action */}
      <section className="mx-auto max-w-[1380px] px-[20px] pb-[50px] md:px-[40px] md:pb-[80px]">
        <div className="rounded-[20px] bg-maroon px-[30px] py-[40px] text-center text-white md:p-[60px]">
          <h2 className="font-recoleta text-[26px] leading-[28px] md:text-[34px] md:leading-[44px]">{cta.heading}</h2>
          <p className="mt-[20px] font-mulish text-[16px] leading-[24px] font-medium">{cta.text}</p>
          <div className="mt-[34px]">
            <Link href={cta.button.href} className={`${btn} px-[18px] py-[18px] md:px-[80px] md:py-[20px]`}>
              {cta.button.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
