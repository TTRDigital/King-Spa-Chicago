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
      {/* On this page the footer credit link turns white on hover, as on live (app/globals.css). */}
      <span hidden data-credit-hover="" />
      <JsonLd data={faqPageSchema(faq.items)} />

      {/* Banner */}
      <section className="banner-red bg-cover bg-left-top px-0 pt-[100px] pb-[184px] text-center md:py-[244px]">
        <h2 className="font-sans text-[32px] leading-[32px] font-medium text-sand">{banner.korean}</h2>
        <h2 className="mt-[20px] font-recoleta text-[50px] leading-[50px] font-medium text-white md:text-[96px] md:leading-[96px]">{banner.title}</h2>
        <h2 className="mt-[20px] font-recoleta text-[20px] leading-[20px] font-medium text-white md:text-[32px] md:leading-[32px]">{banner.subtitle}</h2>
      </section>
      {/* Everything under the banner sits on the cream background, as on live. */}
      <div className="bg-cream">

        {/* Welcome: two equal columns in a 1400px box from 768px; the photo at the top of its column, the text centered beside it. */}
        <section className="mx-auto max-w-[1400px] px-[10px] pt-[36px] pb-[10px] md:flex md:px-0">
          <div className="md:w-1/2 md:pr-[25px] md:pl-[10px]">
            <Image src={welcome.image.src} alt={welcome.image.alt} width={welcome.image.width} height={welcome.image.height} sizes="(max-width: 767px) 394px, 665px" className="h-auto w-full" />
          </div>
          <div className="mt-[20px] md:mt-0 md:flex md:w-1/2 md:flex-col md:justify-center md:pr-[10px] md:pl-[25px]">
            <h2 className={`${tang} text-[24px] leading-[36px] md:text-[47px] md:leading-[63px]`}>{welcome.heading}</h2>
            <p className="mt-[20px] whitespace-pre-line font-sans text-[16px] leading-[24px] text-body">{welcome.text}</p>
            <div className="mt-[34px] text-center md:text-left">
              <Link href={welcome.button.href} className="inline-block rounded-[4px] bg-rust p-[20px] font-recoleta text-[15px] leading-[15px] text-white uppercase transition-all duration-300 hover:text-[#333]">
                {welcome.button.label}
              </Link>
            </div>
          </div>
        </section>

        {/* Facts */}
        <section className="mx-auto max-w-[1420px] px-[10px] pt-[37px] pb-[10px]">
          <div className="grid grid-cols-2 items-center gap-x-[20px] gap-y-[28px] rounded-[29px_29px_105px_29px] border-b-[10px] border-rust bg-maroon px-[20px] pt-[60px] pb-[57px] md:grid-cols-4 md:gap-[20px] md:p-[48px] md:pb-[45px]">
            {facts.map((f, i) => (
              <div key={f.label} className="flex flex-col text-center text-white">
                {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG icon */}
                <img src={FACT_ICONS[i % 4].src} alt="" width={FACT_ICONS[i % 4].w} height={FACT_ICONS[i % 4].h} loading="lazy" className="mx-auto h-[50px] w-auto object-contain" />
                <span className="mt-[16px] font-recoleta text-[16px] leading-[19.2px] font-medium md:mt-[20px] md:text-[19px] md:leading-[22.8px]">{f.label}</span>
                <p className="font-urbanist text-[14px] leading-[21px] md:text-[16px] md:leading-[24px]">{f.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Enjoy King Spa */}
        <section className="mx-auto max-w-[1420px] px-[10px] pt-[54px] pb-[24px] text-center">
          <h2 className={`${tang} text-[25px] leading-[25px] md:text-[48px] md:leading-[48px]`}>{steps.heading}</h2>
          <p className="mt-[24px] font-sans text-[16px] leading-[24px] text-body">{steps.text}</p>
        </section>
        {/* Steps: a number column (9.14%) and a text column (66.67%), centered in a 1400px box; full-width stacked on phones. */}
        <section className="mx-auto max-w-[1420px] px-[10px]">
          {steps.items.map((s, i) => (
            <div key={s.title}>
              {i > 0 ? (
                <div className="py-[10px]" aria-hidden="true">
                  <div className="py-[7px]">
                    <div className="mx-auto h-px w-full bg-black md:w-3/4" />
                  </div>
                </div>
              ) : null}
              <div className="flex flex-wrap justify-center py-[10px] md:flex-nowrap">
                <div className="w-full p-[10px] md:flex md:w-[9.14%] md:shrink-0 md:flex-col md:justify-center">
                  <Image src={s.number.src} alt={s.number.alt} width={s.number.width} height={s.number.height} sizes="108px" className="h-auto w-1/5 md:w-full" />
                </div>
                <div className="w-full p-[10px] md:w-[66.667%]">
                  <h2 className={`${tang} text-[20px] leading-[20px] md:text-[22px] md:leading-[22px]`}>{s.title}</h2>
                  <p className={`mt-[20px] font-mulish text-[16px] leading-[24px] text-body ${i === steps.items.length - 1 ? "" : "mb-[14px]"}`}>{s.text}</p>
                  {s.note ? (
                    <div className="mt-[35px] border-t border-body bg-[rgba(174,84,80,0.1)] pt-[17px] pb-[14px] pl-[24px]">
                      <p className="font-recoleta text-[16px] leading-[24px] text-body">{s.note}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="px-[10px] py-[10px] text-center">
          <Link href={steps.button.href} className={`${btn} transition-all duration-300 hover:border-white hover:bg-maroon hover:text-[#333] w-full max-w-[327px] px-[17px] py-[18px] md:w-auto md:max-w-none md:px-[50px] md:py-[20px]`}>
            {steps.button.label}
          </Link>
        </section>

        {/* Nourish */}
        <section className="mx-auto max-w-[1400px] px-[10px] pt-[50px] md:px-0 md:pt-[54px]">
          <div className="rounded-[29px_29px_105px_29px] border-b-[10px] border-rust bg-maroon px-[15px] pt-[40px] pb-[58px] text-white md:p-[54px] md:pb-[72px]">
            <h2 className="text-center font-tang text-[22px] leading-[30.8px] font-medium md:text-[32px] md:leading-[32px]">{nourish.heading}</h2>
            <p className="mt-[20px] whitespace-pre-line text-center font-mulish text-[16px] leading-[24px] md:text-left">{nourish.text}</p>
            <p className="mt-[15px] text-center font-mulish text-[16px] leading-[24px] md:text-left">{nourish.intro}</p>
            <div className="mt-[34px] grid grid-cols-1 gap-[21px] md:grid-cols-3 md:gap-[20px]">
              {nourish.dishes.map((d, i) => (
                <div key={d.title} className="relative rounded-[20px] bg-white p-[17px]">
                  {/* eslint-disable-next-line @next/next/no-img-element -- decorative dish icon */}
                  <img src={DISH_ICONS[i % 3]} alt="" width={52} height={52} loading="lazy" className="absolute left-[17px] top-[17px] h-[52px] w-[52px] object-contain md:left-auto md:right-[17px]" />
                  <h2 className={`mt-[76px] font-recoleta font-medium ${i === 0 ? "text-maroon" : "text-body"} ${d.title.length > 20 ? "text-[22px] leading-[22px]" : "text-[32px] leading-[32px]"}`}>{d.title}</h2>
                  <p className="mt-[20px] mb-[14px] font-mulish text-[12px] leading-[18px] text-body">{d.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-[20px] text-left font-mulish text-[16px] leading-[24px]">{nourish.tip}</p>
          </div>
        </section>

        {/* Nine healing rooms */}
        <section className="mx-auto max-w-[1420px] px-[10px] pt-[54px] pb-[24px] text-center">
          <h2 className={`${tang} text-[30px] leading-[42px] md:text-[48px] md:leading-[48px]`}>{rooms.heading}</h2>
          <p className="mt-[24px] font-sans text-[16px] leading-[24px] text-body">{rooms.text}</p>
        </section>
        <section className="mx-auto grid max-w-[1420px] grid-cols-1 gap-y-[20px] p-[10px] md:grid-cols-3 md:gap-x-[20px]">
          {rooms.items.map((r) => (
            <div key={r.title} className={`overflow-hidden rounded-[28px] bg-maroon ${"shortCard" in r && r.shortCard ? "pb-[15px] md:pb-[29px]" : "pb-[29px]"}`}>
              <div className="relative aspect-[453/401] w-full overflow-hidden rounded-[22px]">
                <Image src={r.image.src} alt={r.image.alt} fill sizes="(max-width: 767px) 370px, 453px" className="object-cover" />
              </div>
              <div className="px-[15px]">
                <h2 className="mt-[35px] font-recoleta text-[24px] leading-[24px] font-medium text-white">{r.title}</h2>
                <p className="mt-[17px] font-sans text-[16px] leading-[24px] text-white">{r.text}</p>
              </div>
            </div>
          ))}
        </section>

        {/* What to Bring */}
        <section className="mx-auto max-w-[1420px] px-[10px] pt-[54px] pb-[24px] text-center">
          <h2 className={`${tang} text-[30px] leading-[30px] md:text-[48px] md:leading-[48px]`}>{bring.heading}</h2>
          <p className="mt-[24px] font-sans text-[16px] leading-[24px] text-body">{bring.text}</p>
        </section>
        <section className="mx-auto grid max-w-[1420px] grid-cols-1 gap-[40px] p-[20px] md:grid-cols-3">
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
        <section className="mx-auto max-w-[1400px] px-[10px] pt-[50px] pb-[50px] md:px-0 md:pt-[54px] md:pb-0">
          <div className="rounded-[29px_105px_29px_29px] border-b-[10px] border-rust bg-maroon px-[20px] pt-[60px] pb-[75px] text-center text-white md:p-[54px] md:pb-[68px]">
            <h2 className="font-tang text-[22px] leading-[30.8px] font-medium md:text-[32px] md:leading-[32px]">{nudity.heading}</h2>
            <p className="mt-[22px] whitespace-pre-line font-mulish text-[16px] leading-[24px]">{nudity.text}</p>
          </div>
        </section>

        {/* Reviews */}
        <section className="mx-auto max-w-[1400px] pt-[83px] text-center">
          <h2 className={`${tang} text-[24px] leading-[33.6px] md:text-[37px] md:leading-[37px]`}>{reviews.heading}</h2>
        </section>
        <section className="mx-auto max-w-[1380px] px-[10px] pt-[55px] pb-[10px] md:px-0 md:pt-[54px]">
          <Reviews widgetId={settings.reviews.pagesWidgetId} />
        </section>

        <CardFaq heading={faq.heading} items={faq.items} />

        <div className="pt-[20px]">
          <LocationHours data={location} mapSrc={settings.maps.place} headingFont="tang" />
        </div>

        {/* Call to action */}
        <section className="mx-auto max-w-[1380px] px-[20px] pt-[26px] pb-[50px] md:px-[50px] md:pt-[10px] md:pb-[90px] lg:px-[40px]">
          <div className="rounded-[20px] bg-maroon px-[30px] py-[40px] text-center text-white md:p-[30px] lg:p-[60px]">
            <h2 className="font-recoleta text-[26px] leading-[28px] font-normal md:text-[30px] md:leading-[33px] lg:text-[34px] lg:leading-[44px]">{cta.heading}</h2>
            <p className="mt-[20px] font-mulish text-[16px] leading-[24px] font-medium">{cta.text}</p>
            <div className="mt-[34px]">
              <Link href={cta.button.href} className={`${btn} transition-all duration-300 hover:border-[#00aaff] hover:bg-white hover:text-[#333] px-[18px] py-[18px] md:px-[50px] md:py-[20px] lg:px-[80px]`}>
                {cta.button.label}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
