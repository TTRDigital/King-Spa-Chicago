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
        className="pt-[150px] pb-[184px] md:h-[784px]"
        titleClass="text-[40px] leading-[40px] md:text-[96px] md:leading-[96px]"
        subtitleClass="text-[22px] leading-[22px] md:text-[32px] md:leading-[32px]"
      />

      {/* App intro */}
      <section className="px-[10px] py-[100px] md:px-[20px]">
        <div className={`${maroonPanel} mx-auto flex max-w-[1400px] flex-col overflow-hidden shadow-[0_7px_0_0_#8e3b37] md:flex-row md:items-start`}>
          <div className="order-2 mt-[50px] pb-[7px] md:order-1 md:mt-0 md:w-[620px] md:shrink-0 md:pb-0">
            <Image src={intro.image.src} alt={intro.image.alt} width={intro.image.width} height={intro.image.height} sizes="(max-width: 767px) 370px, 620px" className="h-[432px] w-full object-contain md:h-[724px]" />
          </div>
          <div className="order-1 px-[30px] pt-[30px] md:order-2 md:w-[660px] md:px-0 md:pt-[82px] md:ml-[50px]">
            <h2 className="font-tang text-[30px] leading-[39px] font-medium whitespace-pre-line text-white md:text-[50px] md:leading-[65px]">{intro.heading}</h2>
            <div className={`mt-[20px] text-white ${body18}`}>{intro.text}</div>
            <Image src={intro.card.src} alt={intro.card.alt} width={intro.card.width} height={intro.card.height} sizes="(max-width: 767px) 310px, 660px" className="mt-[20px] h-auto w-full" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="pt-[60px] pb-[60px] md:pb-[70px]">
        <div className="mx-auto max-w-[1440px] px-[10px] md:px-[30px]">
          <h2 className="font-tang text-[24px] leading-[24px] font-semibold text-rust md:text-[42px] md:leading-[42px]">{how.eyebrow}</h2>
          <h2 className="mt-[15px] font-tang text-[22px] leading-[22px] font-semibold text-rust md:text-[42px] md:leading-[42px]">{how.heading}</h2>
        </div>
        <div className="mx-auto mt-[49px] grid max-w-[1440px] grid-cols-1 gap-[20px] px-[10px] md:mt-[59px] md:grid-cols-4 md:px-[40px]">
          {how.steps.map((s, i) => {
            const dark = i === 0;
            return (
              <div key={s.number} className={`rounded-[20px] px-[30px] pt-[30px] pb-[50px] md:min-h-[360px] ${dark ? "min-h-[360px] bg-maroon" : "bg-white"}`}>
                <div className="flex items-start justify-between">
                  <h2 className={`font-recoleta text-[64px] leading-[64px] font-medium ${dark ? "text-white" : "text-[#ae5450]"}`}>{s.number}</h2>
                  <Image src={s.icon.src} alt={s.icon.alt} width={s.icon.width} height={s.icon.height} sizes="52px" className={i === 3 ? "h-[44px] w-[44px]" : "h-[52px] w-[52px]"} />
                </div>
                <h2 className={`mt-[20px] font-recoleta text-[24px] leading-[24px] font-medium ${dark ? "text-white" : "text-[#ae5450]"}`}>{s.title}</h2>
                <div className={`mt-[20px] ${body18} ${dark ? "text-white" : "text-[#1a1a1a]"}`}>{s.text}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Member benefits */}
      <section className="pt-[60px] pb-[60px] md:px-[20px]">
        <div className={`${maroonPanel} mx-auto max-w-[1400px] px-[20px] py-[40px] md:p-[54px]`}>
          <h2 className="mx-auto max-w-[504px] text-center font-tang text-[27px] leading-[40.5px] font-medium text-white md:text-[45px] md:leading-[67.5px]">{benefits.heading}</h2>
          <div className={`mx-auto mt-[20px] max-w-[969px] pb-[34px] text-center text-white ${body18}`}>{benefits.text}</div>
          <div className="mt-[20px] grid grid-cols-1 gap-[25px] md:grid-cols-3">
            <div className="rounded-[20px] bg-white px-[25px] pt-[25px] pb-[35px]">
              <h2 className="font-recoleta text-[28px] leading-[28px] font-medium text-maroon">{benefits.scrub.title}</h2>
              <h2 className="mt-[10px] font-recoleta text-[14px] leading-[14px] font-medium text-maroon">{benefits.scrub.duration}</h2>
              <div className={`mt-[20px] text-[#1a1a1a] ${body18}`}>{benefits.scrub.text}</div>
              <h2 className="mt-[30px] pb-[10px] pl-[10px] font-sans text-[32px] leading-[32px] font-medium text-[#333]">{benefits.scrub.price}</h2>
            </div>
            {benefits.cards.map((c, i) => (
              <div key={i} className="rounded-[20px] bg-white px-[25px] pt-[25px] pb-[35px]">
                <Image src={c.icon.src} alt={c.icon.alt} width={c.icon.width} height={c.icon.height} sizes="44px" className="h-[44px] w-[44px]" />
                <h2 className="mt-[20px] font-recoleta text-[28px] leading-[28px] font-medium text-maroon">{c.title}</h2>
                <div className={`mt-[20px] text-[#1a1a1a] ${body18}`}>{c.text}</div>
                <h2 className="mt-[20px] inline-block rounded-[100px] bg-[#efdddc] px-[12px] py-[6px] font-recoleta text-[16px] leading-[16px] font-medium text-maroon">{c.tag}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Every dollar */}
      <section className="pt-[90px] pb-[110px]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-[40px] px-[10px] md:flex-row md:items-center md:gap-[40px] md:px-[30px]">
          <div className="md:w-[670px]">
            <h2 className="font-tang text-[30px] leading-[42px] font-medium text-rust md:text-[42px] md:leading-[58.8px]">{dollar.eyebrow}</h2>
            <h2 className="mt-[10px] font-tang text-[30px] leading-[45px] font-medium text-maroon md:text-[42px] md:leading-[63px]">{dollar.heading}</h2>
            <p className={`mt-[10px] text-[#1a1a1a] ${body18}`}>{dollar.text}</p>
            <ul className="mt-[24px] space-y-[10px]">
              {dollar.list.map((li) => (
                <li key={li} className={`flex items-center text-[#1a1a1a] ${body18}`}>
                  <svg viewBox="0 0 576 512" className="h-[9px] w-[10px] shrink-0 fill-rust" aria-hidden="true">
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                  </svg>
                  <span className="pl-[5px]">{li}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-[20px] md:w-[670px]">
            {dollar.stats.map((s) => (
              <div key={s.value} className={`${maroonPanel} flex flex-col gap-[20px] px-[40px] pt-[40px] pb-[30px] md:min-h-[161px] md:flex-row md:items-start`}>
                <h2 className="font-tang text-[50px] leading-[55px] font-bold text-[#ae5450] md:w-[177px] md:shrink-0 md:text-[64px] md:leading-[70.4px]">{s.value}</h2>
                <h2 className="font-tang text-[20px] leading-[30px] font-semibold text-white md:w-[236px] md:text-[26px] md:leading-[39px]">{s.label}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program terms */}
      <section className="bg-[#fffdf3] pt-[90px] pb-[124px]">
        <div className="mx-auto max-w-[1408px] px-[10px] md:px-0">
          <h2 className="font-tang text-[30px] leading-[42px] font-medium text-rust md:text-[42px] md:leading-[58.8px]">{terms.heading}</h2>
          {terms.items.map((t, i) => (
            <div key={t.title} className={i ? "mt-[26px]" : "mt-[12px]"}>
              <p className="font-mulish text-[20px] leading-[30px] font-bold text-maroon">
                <strong>{t.title}</strong>
              </p>
              <p className="mt-[13px] font-mulish text-[20px] leading-[30px] text-maroon">{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
