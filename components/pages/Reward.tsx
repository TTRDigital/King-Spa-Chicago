import Image from "next/image";
import type { rewardPage } from "@/lib/data/pages/reward";
import { InnerBanner } from "@/components/sections/InnerBanner";

const maroonPanel = "bg-maroon rounded-[29px_29px_105px] shadow-[0_13px_0_0_#8e3b37]";
const body18 = "font-mulish text-[18px] leading-[27px]";

/** Rewards (/reward/). */
export function RewardView({ data }: { data: typeof rewardPage }) {
  const { intro, how, benefits, dollar, terms } = data;
  return (
    <>
      <InnerBanner
        korean={data.banner.korean}
        title={data.banner.title}
        subtitle={data.banner.subtitle}
        className="pt-[150px] pb-[184px] md:pb-[244px]!"
        titleClass="text-[40px] leading-[40px] md:text-[96px] md:leading-[96px]"
        subtitleClass="text-[22px] leading-[22px] md:text-[32px] md:leading-[32px]"
      />

      {/* App intro: full width up to 1400px; the photo column is 45% less 10px, both columns sit on the panel's bottom edge. */}
      <section className="bg-cream px-[10px] py-[100px] md:px-0">
        <div className={`${maroonPanel} mx-auto flex max-w-[1400px] flex-col overflow-hidden shadow-[0_7px_0_0_#8e3b37] md:flex-row md:items-end`}>
          <div className="order-2 mt-[50px] pb-[7px] md:order-1 md:mt-0 md:w-[calc(45%-10px)] md:shrink-0">
            <Image src={intro.image.src} alt={intro.image.alt} width={intro.image.width} height={intro.image.height} sizes="(max-width: 767px) 394px, 620px" className="h-auto w-full" />
          </div>
          <div className="order-1 px-[30px] pt-[30px] md:order-2 md:mr-[70px] md:ml-[50px] md:min-w-0 md:flex-1 md:px-0 md:pt-[70px] md:pb-[77px]">
            <h2 className="font-tang text-[30px] leading-[39px] font-medium whitespace-pre-line text-white md:text-[50px] md:leading-[65px]">{intro.heading}</h2>
            <div className={`mt-[20px] text-white ${body18}`}>{intro.text}</div>
            <Image src={intro.card.src} alt={intro.card.alt} width={intro.card.width} height={intro.card.height} sizes="(max-width: 767px) 310px, 660px" className="mt-[20px] h-auto w-full" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream pt-[60px] pb-[60px] md:pb-[70px]">
        <div className="mx-auto max-w-[1400px] px-[10px]">
          <h2 className="font-tang text-[24px] leading-[24px] font-semibold text-rust md:text-[42px] md:leading-[42px]">{how.eyebrow}</h2>
          <h2 className="mt-[15px] font-tang text-[22px] leading-[22px] font-semibold text-rust md:text-[42px] md:leading-[42px]">{how.heading}</h2>
        </div>
        <div className="mx-auto mt-[49px] grid max-w-[1400px] grid-cols-1 gap-[20px] px-[10px] md:mt-[59px] md:grid-cols-4 md:px-[20px]">
          {how.steps.map((s, i) => {
            const dark = i === 0;
            return (
              <div key={s.number} className={`rounded-[20px] px-[30px] pt-[30px] pb-[50px] md:min-h-[360px] ${dark ? "min-h-[360px] bg-maroon" : "bg-white"}`}>
                {/* On narrow cards the number and icon shrink to fit, as on live. */}
                <div className="flex items-start justify-between gap-[20px]">
                  <h2 className={`min-w-0 font-recoleta text-[64px] leading-[64px] font-medium ${dark ? "text-white" : "text-[#ae5450]"}`}>{s.number}</h2>
                  <Image src={s.icon.src} alt={s.icon.alt} width={s.icon.width} height={s.icon.height} sizes="52px" className={`h-auto min-w-0 ${i === 3 ? "w-[44px]" : "w-[52px]"}`} />
                </div>
                <h2 className={`mt-[20px] font-recoleta text-[24px] leading-[24px] font-medium ${dark ? "text-white" : "text-[#ae5450]"}`}>{s.title}</h2>
                <div className={`mt-[20px] ${body18} ${dark ? "text-white" : "text-[#1a1a1a]"}`}>{s.text}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Member benefits */}
      <section className="bg-cream pt-[60px] pb-[60px]">
        <div className={`${maroonPanel} mx-auto max-w-[1400px] px-[20px] pt-[40px] pb-[53px] md:p-[54px] md:pb-[67px]`}>
          <h2 className="mx-auto max-w-[504px] text-center md:w-[39%] md:max-w-none font-tang text-[27px] leading-[40.5px] font-medium text-white md:text-[45px] md:leading-[67.5px]">{benefits.heading}</h2>
          <div className={`mx-auto mt-[20px] max-w-[969px] pb-[34px] md:w-[75%] md:max-w-none text-center text-white ${body18}`}>{benefits.text}</div>
          <div className="mt-[20px] grid grid-cols-1 gap-[25px] md:grid-cols-3">
            <div className="flex flex-col items-start rounded-[20px] bg-white px-[25px] pt-[25px] pb-[35px]">
              <h2 className="font-recoleta text-[28px] leading-[28px] font-medium text-maroon">{benefits.scrub.title}</h2>
              <h2 className="mt-[10px] font-recoleta text-[14px] leading-[14px] font-medium text-maroon">{benefits.scrub.duration}</h2>
              <div className={`mt-[20px] text-[#1a1a1a] ${body18}`}>{benefits.scrub.text}</div>
              <div className="mt-[20px] self-stretch p-[10px]">
                <h2 className="font-sans text-[32px] leading-[32px] font-medium text-[#333]">{benefits.scrub.price}</h2>
              </div>
            </div>
            {benefits.cards.map((c, i) => (
              <div key={i} className="flex flex-col items-start rounded-[20px] bg-white px-[25px] pt-[25px] pb-[35px]">
                <Image src={c.icon.src} alt={c.icon.alt} width={c.icon.width} height={c.icon.height} sizes="44px" className="h-[44px] w-[44px]" />
                <h2 className="mt-[20px] font-recoleta text-[28px] leading-[28px] font-medium text-maroon">{c.title}</h2>
                <div className={`mt-[20px] text-[#1a1a1a] ${body18}`}>{c.text}</div>
                <div className="mt-[20px] inline-block rounded-[100px] bg-[#efdddc] px-[12px] py-[6px]">
                  <h2 className="font-recoleta text-[16px] leading-[16px] font-medium text-maroon">{c.tag}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Every dollar */}
      <section className="bg-cream pt-[80px] pb-[100px]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-[20px] md:flex-row md:items-center">
          <div className="p-[10px] md:min-w-0 md:flex-1">
            <h2 className="font-tang text-[30px] leading-[42px] font-medium text-rust md:text-[42px] md:leading-[58.8px]">{dollar.eyebrow}</h2>
            <h2 className="mt-[10px] font-tang text-[30px] leading-[45px] font-medium text-maroon md:text-[42px] md:leading-[63px]">{dollar.heading}</h2>
            <p className={`mt-[10px] text-[#1a1a1a] ${body18}`}>{dollar.text}</p>
            <ul className="mt-[24px] space-y-[10px]">
              {dollar.list.map((li) => (
                <li key={li} className={`flex items-center text-[#1a1a1a] ${body18}`}>
                  <svg viewBox="0 0 576 512" className="mr-[5px] h-[9px] w-[10px] shrink-0 fill-rust" aria-hidden="true">
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                  </svg>
                  <span className="pl-[5px]">{li}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-[20px] p-[10px] md:min-w-0 md:flex-1">
            {dollar.stats.map((s) => (
              <div key={s.value} className={`${maroonPanel} flex flex-col gap-[20px] min-h-[188px] px-[40px] pt-[40px] pb-[30px] md:min-h-0 md:flex-row md:items-center md:pb-[43px]`}>
                <h2 className="font-tang text-[50px] leading-[55px] font-bold text-[#ae5450] md:w-[30%] md:shrink-0 md:text-[64px] md:leading-[70.4px]">{s.value}</h2>
                <h2 className="font-tang text-[20px] leading-[30px] font-semibold text-white md:w-[40%] md:text-[26px] md:leading-[39px]">{s.label}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program terms */}
      <section className="bg-[#fffdf3] pt-[90px] pb-[124px]">
        <div className="mx-auto max-w-[1428px] px-[10px]">
          <h2 className="font-tang text-[30px] leading-[42px] font-medium text-rust md:text-[42px] md:leading-[58.8px]">{terms.heading}</h2>
          {terms.items.map((t, i) => (
            <div key={t.title} className={i ? "mt-[26px]" : "mt-[12px]"}>
              <p className="font-mulish text-[20px] leading-[30px] text-maroon">
                <strong className="font-bold">{t.title}</strong>
              </p>
              <p className="mt-[13px] font-mulish text-[20px] leading-[30px] text-maroon">{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
