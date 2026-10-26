import Image from "next/image";
import type { ScrubRitualPageData } from "@/lib/data/pages/womensBodyScrub";
import { faqPageSchema } from "@/lib/schema";
import { Inline } from "@/components/ui/RichText";
import { JsonLd } from "@/components/ui/JsonLd";
import { ScrubFaq } from "@/components/sections/ScrubFaq";

/*
 * Shared template of the Men's and Women's Body Scrubs pages
 * (/body-scrub/mens-body-scrubs/, /body-scrub/womens-body-scrubs/), measured
 * from the old site at 1440px and 390px. Each page passes its own content.
 */

const eyebrowLight = "font-recoleta text-[16px] leading-[16px] font-medium text-sand";
const eyebrowDark = "font-recoleta text-[16px] leading-[16px] font-medium text-maroon";
const boxHeading = "mt-[20px] font-recoleta text-[27px] leading-[29.7px] font-medium text-white md:text-[45px] md:leading-[49.5px]";
const maroonBox = "mx-auto max-w-[1400px] rounded-[29px_29px_105px_29px] border-b-[13px] border-rust bg-maroon text-center min-[1441px]:mx-auto";
const glassCard = "rounded-[20px] bg-white/[0.14] text-left";
const roundedPhoto = "rounded-[30px_100px_30px_30px] object-cover";

const Check = () => (
  <svg viewBox="0 0 512 512" width="20" height="20" aria-hidden="true" className="mt-[2px] shrink-0 fill-maroon">
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm114.9 182.9L237.4 324.4c-6.2 6.2-16.4 6.2-22.6 0l-73.7-73.7c-6.2-6.2-6.2-16.4 0-22.6l22.6-22.6c6.2-6.2 16.4-6.2 22.6 0l39.8 39.8 99.6-99.6c6.2-6.2 16.4-6.2 22.6 0l22.6 22.6c6.2 6.3 6.2 16.4 0 22.6z" />
  </svg>
);
const Cross = () => (
  <svg viewBox="0 0 512 512" width="20" height="20" aria-hidden="true" className="mt-[2px] shrink-0 fill-maroon">
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
  </svg>
);

export function ScrubRitualPage({ data }: { data: ScrubRitualPageData }) {
  const { banner, intro, rituals, process, benefits, fit, prepare, rewards, faq } = data;
  return (
    <>
      <JsonLd data={faqPageSchema(faq.items)} />

      {/* Banner: three h2s, as on the old site (its h1 was hidden) */}
      <section className="banner-red bg-cover bg-left-top px-[10px] py-[150px] text-center md:px-0 md:py-[244px]">
        <h2 className="font-sans text-[32px] leading-[32px] font-medium text-sand">{banner.korean}</h2>
        <h2 className="mt-[20px] font-recoleta text-[38px] leading-[38px] font-medium text-white md:text-[68px] md:leading-[68px]">{banner.title}</h2>
        <h2 className="mt-[20px] font-recoleta text-[20px] leading-[20px] font-medium text-white md:text-[32px] md:leading-[32px]">{banner.subtitle}</h2>
      </section>

      {/* Intro: the art of seshin */}
      <section className="bg-cream pt-[80px] pb-[90px] md:py-[80px]">
        {/* The old site centres the text beside the photo on the Men's page and tops it on the Women's (the one with a closing line). */}
        <div className={`mx-auto flex max-w-[1400px] flex-col gap-[40px] md:flex-row md:gap-0 ${intro.closing ? "md:items-start" : "md:items-center"}`}>
          <div className={`px-[15px] md:w-1/2 md:shrink-0 md:pr-[44.5px] md:pl-[15px] lg:pr-[40px] lg:pl-[10px] ${intro.closing ? "lg:pt-[10px]" : ""}`}>
            <h2 className="font-recoleta text-[32px] leading-[32px] font-normal text-maroon md:mr-[40px] md:text-[35px] md:leading-[35px] lg:text-[40px] lg:leading-[40px]">{intro.heading}</h2>
            {intro.paragraphs.map((p) => (
              <p key={p} className="rich mt-[14px] font-mulish text-[14px] leading-[21px] text-[#002c39] first-of-type:mt-[20px] lg:text-[18px] lg:leading-[27px]">
                <Inline text={p} />
              </p>
            ))}
            {/* Without a closing line the old site left 10px more under the quote on phones. */}
            <blockquote className={`mt-[45px] border-l-[6px] border-maroon pl-[21px] font-recoleta text-[20px] leading-[24px] text-maroon ${intro.closing ? "" : "mb-[10px]"}`}>
              <p>{intro.quote}</p>
            </blockquote>
            {intro.closing ? <div className="mt-[30px] font-mulish text-[14px] leading-[21px] text-[#002c39] lg:text-[18px] lg:leading-[27px]">{intro.closing}</div> : null}
          </div>
          <div className="px-[10px] md:w-1/2 md:shrink-0 md:pr-0 md:pl-[31px] lg:pl-[30px]">
            <Image
              src={intro.image.src}
              alt={intro.image.alt}
              width={intro.image.width}
              height={intro.image.height}
              sizes="(max-width: 767px) 370px, 670px"
              className={`h-[250px] w-full md:h-[500px] ${roundedPhoto}`}
            />
          </div>
        </div>
      </section>

      {/* Choose your ritual: treatments and prices */}
      <section className="overflow-x-clip bg-cream px-[10px] py-[10px] md:px-0 md:py-[60px]">
        <div className={`${maroonBox} px-[20px] py-[40px] md:p-[75px]`}>
          <h2 className={eyebrowLight}>{rituals.eyebrow}</h2>
          <h2 className={boxHeading}>{rituals.heading}</h2>
          <div className="mt-[49px] grid gap-[25px] md:mt-[50px] md:grid-cols-[minmax(380px,1fr)_1fr]">
            {rituals.items.map((r, i) => (
              <div
                key={r.name}
                className={`${glassCard} flex flex-col px-[25px] pt-[25px] pb-[35px] ${i === rituals.items.length - 1 && rituals.items.length % 2 ? "md:col-span-2 md:ml-[330px] md:w-[max(380px,calc(50%-12.5px))]" : ""}`}
              >
                {r.badge ? (
                  <span className="mb-[10px] -translate-y-[30px] self-start rounded-[6px] bg-sand px-[8px] py-[5px] font-recoleta text-[14px] leading-[14px] font-medium text-maroon">{r.badge}</span>
                ) : null}
                <h2 className="font-recoleta text-[28px] leading-[28px] font-medium text-white">{r.name}</h2>
                <h2 className="mt-[10px] font-recoleta text-[14px] leading-[14px] font-medium text-sand">{r.duration}</h2>
                {/* spaceBelow: the old site's paragraph spacing under some descriptions (14px), none under others. */}
                <p className={`mt-[20px] mb-[30px] font-mulish text-white md:text-[18px] md:leading-[27px] ${i === 0 ? "text-[18px] leading-[27px]" : "text-[16px] leading-[24px]"}`} style={{ marginBottom: 30 + (r.spaceBelow ?? 0) }}>{r.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-y-[20px] border-t border-white/[0.29] pt-[20px] md:flex-nowrap md:gap-x-[20px]">
                  <h2 className="font-recoleta text-[28px] leading-[28px] font-medium text-white md:min-w-0">{r.price}</h2>
                  <p className="font-recoleta text-[16px] leading-[16px] text-sand md:min-w-0">{r.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The process */}
      <section className="bg-cream pt-[80px] pb-[90px] md:py-[80px]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-[40px] md:flex-row md:items-center md:gap-0">
          {/* On computers the Men's page (no closing line) has 10px more above this text than the Women's, as on the old site. */}
          <div className={`px-[15px] md:w-1/2 md:shrink-0 md:pr-[44.5px] md:pl-[15px] lg:pr-[40px] lg:pl-[10px] ${intro.closing ? "" : "lg:pt-[10px]"}`}>
            <h2 className={eyebrowDark}>{process.eyebrow}</h2>
            <h2 className="mt-[20px] font-recoleta text-[32px] leading-[32px] font-normal text-maroon md:text-[35px] md:leading-[35px] lg:text-[45px] lg:leading-[45px]">{process.heading}</h2>
            <ol className="mt-[40px]">
              {process.steps.map((s) => (
                <li key={s.number} className="flex flex-col gap-[40px] border-b border-[#d2d1cb] py-[20px] first:pt-0 md:flex-row md:items-start md:gap-[40px]">
                  <h2 className="font-recoleta text-[50px] leading-[50px] font-medium text-maroon md:min-w-0">{s.number}</h2>
                  {/* Number and text share the row the way the old site's did: the number narrows a little on smaller screens. */}
                  <div className="md:w-full">
                    <h2 className="font-recoleta text-[18px] leading-[18px] font-medium text-[#ae5450]">{s.title}</h2>
                    <p
                      className="mt-[10px] mb-(--sb) font-mulish text-[14px] leading-[21px] text-[#1a1a1a] lg:mb-(--sb-md)"
                      style={{ "--sb": `${"spaceBelow" in s ? s.spaceBelow : 0}px`, "--sb-md": `${"spaceBelowDesktop" in s ? s.spaceBelowDesktop : "spaceBelow" in s ? s.spaceBelow : 0}px` } as React.CSSProperties}
                    >
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="px-[10px] md:w-1/2 md:shrink-0 md:pr-0 md:pl-[31px] lg:pl-[30px]">
            <Image
              src={process.image.src}
              alt={process.image.alt}
              width={process.image.width}
              height={process.image.height}
              sizes="(max-width: 767px) 370px, 670px"
              className={`h-[250px] w-full md:h-[600px] ${roundedPhoto}`}
            />
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="bg-cream px-[10px] py-[10px] md:px-0 md:py-[60px]">
        <div className={`${maroonBox} px-[20px] py-[40px] md:p-[75px]`}>
          <h2 className={eyebrowLight}>{benefits.eyebrow}</h2>
          <h2 className={boxHeading}>{benefits.heading}</h2>
          <div className="mt-[50px] grid gap-[25px] md:grid-cols-3">
            {benefits.items.map((b) => (
              <div key={b.title} className={`${glassCard} px-[25px] pt-[25px] pb-[35px]`}>
                <span aria-hidden="true" className="block h-[2px] w-[53px] bg-sand" />
                <h2 className="mt-[24px] font-recoleta text-[20px] leading-[20px] font-medium text-sand">{b.title}</h2>
                <div className="mt-[20px] font-mulish text-[17px] leading-[25.5px] text-white" style={{ marginBottom: "spaceBelow" in b ? b.spaceBelow : 0 }}>{b.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is this right for you? */}
      <section className="bg-cream pt-[80px] pb-[100px]">
        <div className="mx-auto max-w-[1400px]">
          <h2 className={`text-center ${eyebrowDark}`}>{fit.eyebrow}</h2>
          <h2 className="mt-[20px] text-center font-recoleta text-[32px] leading-[32px] font-normal text-maroon md:text-[35px] md:leading-[35px] lg:text-[45px] lg:leading-[45px]">{fit.heading}</h2>
          <div className="mt-[60px] grid gap-[70px] px-[20px] md:grid-cols-2 md:gap-[70px]">
            {[
              { heading: fit.forYouHeading, items: fit.forYou, Icon: Check },
              { heading: fit.waitHeading, items: fit.wait, Icon: Cross },
            ].map((col, c) => (
              <div key={col.heading}>
                <h3 className="font-recoleta text-[32px] leading-[32px] font-normal text-maroon md:text-[35px] md:leading-[35px] lg:text-[25px] lg:leading-[25px]">{col.heading}</h3>
                <ul className="mt-[20px] space-y-[16px]">
                  {col.items.map((it) => (
                    <li key={it} className="flex gap-[15px] font-mulish text-[16px] leading-[24px] font-medium text-[#333]">
                      <col.Icon />
                      <span className="pl-[5px]">{it}</span>
                    </li>
                  ))}
                </ul>
                {c === 1 ? (
                  <blockquote className="mt-[20px] border-l-[3px] border-[#c9a96e] bg-[#f7f0e8] py-[12px] pl-[20px] font-recoleta text-[20px] leading-[24px] text-[#91784a]">
                    <p>{fit.quote}</p>
                  </blockquote>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to prepare */}
      <section className="bg-cream px-[10px] py-[10px] md:px-0 md:py-[60px]">
        <div className={`${maroonBox} px-[20px] py-[40px] md:px-[50px] md:py-[75px]`}>
          <h2 className={eyebrowLight}>{prepare.eyebrow}</h2>
          <h2 className={boxHeading}>{prepare.heading}</h2>
          <ol className="mt-[49px] grid gap-[25px] md:mt-[50px] md:grid-cols-5">
            {prepare.steps.map((s) => (
              <li key={s.number} className={`${glassCard} p-[20px]`}>
                <h2 className="font-recoleta text-[35px] leading-[35px] font-medium text-sand">{s.number}</h2>
                <span aria-hidden="true" className="mt-[22px] block h-[2px] w-[32px] bg-sand" />
                <h2 className="mt-[22px] font-recoleta text-[18px] leading-[18px] font-medium text-sand">{s.title}</h2>
                <div className="mt-[20px] font-mulish text-[16px] leading-[20.8px] text-white" style={{ marginBottom: "spaceBelow" in s ? s.spaceBelow : 0 }}>{s.text}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Membership & rewards */}
      <section className="bg-cream pt-[90px] pb-[110px]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-[80px] md:flex-row md:items-center md:gap-[70px] md:px-[10px]">
          <div className="px-[10px] md:min-w-0 md:flex-1 md:basis-0 md:px-0 md:pb-[11px]">
            <h2 className={eyebrowDark}>{rewards.eyebrow}</h2>
            <h2 className="mt-[10px] font-recoleta text-[32px] leading-[32px] font-normal text-maroon md:text-[35px] md:leading-[35px] lg:text-[55px] lg:leading-[55px]">{rewards.heading}</h2>
            <div className="mt-[30px] font-mulish text-[18px] leading-[27px] text-[#1a1a1a]">{rewards.text}</div>
            <ul className="mt-[20px] grid grid-cols-2 gap-[5px] px-[10px] md:flex">
              {rewards.pills.map((p) => (
                <li key={p} className="rounded-[6px_20px_6px_6px] border-[3px] border-rust bg-maroon pt-[10px] pr-[10px] pb-[7px] pl-[7px] md:min-w-0 md:flex-1 md:basis-0">
                  <h2 className="font-recoleta text-[13px] leading-[13px] font-normal text-white md:text-[35px] md:leading-[35px] lg:text-[14px] lg:leading-[14px]">{p}</h2>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-[20px] px-[10px] md:min-w-0 md:flex-1 md:basis-0 md:space-y-[19.5px] md:px-0">
            {rewards.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-[20px] rounded-[29px_29px_105px_29px] border-b-[13px] border-rust bg-maroon px-[40px] pt-[40px] pb-[30px] md:flex-row md:items-center md:gap-(--gap)"
                style={{ "--gap": `${s.gap}px` } as React.CSSProperties}
              >
                <h2 className="font-tang text-[50px] leading-[55px] font-bold whitespace-nowrap text-[#ae5450] md:w-[30%] md:min-w-0 md:text-[55px] md:leading-[60.5px]">
                  {s.value}
                </h2>
                <h2 className="font-tang text-[20px] leading-[30px] font-semibold text-white md:w-full md:min-w-0 md:text-[24px] md:leading-[36px]">{s.label}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-cream px-[10px] pt-[50px] pb-[100px] md:px-0 md:pt-[75px] md:pb-[125px]">
        <div className="mx-auto max-w-[1400px] rounded-[20px] bg-white pt-[40px] pb-[26px] shadow-[0_22px_37.7px_rgba(79,79,79,0.2)] md:rounded-[35px] md:px-[60px] md:pt-[60px] md:pb-[40px] lg:px-[130px] lg:pt-[100px] lg:pb-[109px]">
          <h2 className={`text-center ${eyebrowDark}`}>{faq.eyebrow}</h2>
          <h2 className="mt-[10px] text-center font-recoleta text-[25px] leading-[44px] font-normal text-maroon md:mt-[20px] md:text-[40px] lg:text-[48px]">{faq.heading}</h2>
          <ScrubFaq items={faq.items} variant="ritual" />
        </div>
      </section>
    </>
  );
}
