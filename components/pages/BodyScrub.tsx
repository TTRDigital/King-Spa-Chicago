import Image from "next/image";
import type { bodyScrubPage } from "@/lib/data/pages/bodyScrub";
import { getSettings } from "@/lib/content";
import { faqPageSchema } from "@/lib/schema";
import { Inline } from "@/components/ui/RichText";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reviews } from "@/components/ui/Reviews";
import { ScrubTreatmentTabs } from "@/components/sections/ScrubTreatmentTabs";
import { ScrubFaq } from "@/components/sections/ScrubFaq";
import { ScrubStepNumber } from "@/components/sections/ScrubStepNumber";

const card = "rounded-[10px] bg-white px-[20px] pt-[30px] pb-[20px] shadow-[0_3.31px_6.29px_rgba(0,0,0,0.05)]";
const tangTitle = "font-tang text-[18px] leading-[23.04px] font-bold text-maroon md:text-[22px] md:leading-[28.16px]";

/** Body Scrub (/body-scrub/), section by section as on the old site. */
export async function BodyScrubView({ data }: { data: typeof bodyScrubPage }) {
  const settings = await getSettings();
  return (
    <>
      {/* On this page the footer credit link turns white on hover, as on live (app/globals.css). */}
      <span hidden data-credit-hover="" />
      <JsonLd data={faqPageSchema(data.faq.items)} />

      {/* Banner (three h2s on the old site; its two h1s were hidden) */}
      <section className="banner-red bg-cover bg-left-top px-[10px] py-[150px] text-center md:px-0 md:py-[244px]">
        <h2 className="font-sans text-[32px] leading-[32px] font-medium text-sand">{data.banner.korean}</h2>
        <h2 className="mt-[20px] font-recoleta text-[38px] leading-[38px] font-medium text-white md:text-[68px] md:leading-[68px]">
          <Inline text={data.banner.title} />
        </h2>
        <h2 className="mt-[20px] font-recoleta text-[20px] leading-[20px] font-medium text-white md:text-[32px] md:leading-[32px]">{data.banner.subtitle}</h2>
      </section>

      {/* Skincare rooted in tradition */}
      <section className="bg-cream py-[30px] lg:pt-[60px]">
        <div className="mx-auto max-w-[1440px] px-[15px] lg:max-w-[1400px] lg:px-[30px]">
          <h2 className="font-recoleta text-[32px] leading-[32px] font-normal text-maroon md:mr-[33px] md:text-center md:text-[35px] md:leading-[35px] lg:mr-[30px] lg:text-[40px] lg:leading-[40px] max-md:text-center">{data.tradition.heading}</h2>
          <p className="rich mt-[21px] pb-[13px] text-center font-mulish text-[14px] leading-[21px] text-[#002c39] lg:px-[max(0px,calc((100%-1300px)/2))] lg:pb-[45px] lg:text-[15px] lg:leading-[22.5px]">
            <Inline text={data.tradition.text} />
          </p>
        </div>
      </section>

      {/* What is a Korean body scrub */}
      <section className="bg-cream pt-[30px] pb-[45px] md:pt-[40px] md:pb-[46px] lg:pt-[30px]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-[24px] md:flex-row md:items-center md:gap-0 lg:max-w-[1400px]">
          <div className="px-[15px] md:w-[45%] md:pb-[8px] lg:w-1/2 lg:px-[30px] lg:pb-0">
            <h2 className="text-center font-recoleta text-[32px] leading-[32px] font-normal text-maroon md:mr-[37px] md:text-[35px] md:leading-[35px] lg:mr-0 lg:max-w-[83.5%] lg:text-[40px] lg:leading-[40px]">{data.whatIs.heading}</h2>
            <p className="rich mt-[21px] font-mulish text-[14px] leading-[21px] text-[#002c39] lg:w-[88%] lg:text-[15px] lg:leading-[22.5px]">
              <Inline text={data.whatIs.text} />
            </p>
          </div>
          <div className="px-[10px] md:w-[55%] md:px-[10px] lg:w-1/2 lg:pt-[10px] lg:pr-[66px] lg:pl-0">
            <Image
              src={data.whatIs.image.src}
              alt={data.whatIs.image.alt}
              width={data.whatIs.image.width}
              height={data.whatIs.image.height}
              sizes="(max-width: 767px) 370px, 541px"
              className="aspect-[370/425] h-auto w-full rounded-[120px_10px_10px_10px] object-cover md:mx-auto md:aspect-[541/621] md:max-w-[541px] lg:aspect-auto lg:h-[621px] lg:w-[541px]"
            />
          </div>
        </div>
      </section>

      {/* Explore our treatments: women's / men's tabs */}
      <section className="bg-cream py-[30px]">
        <div className="mx-auto max-w-[1400px] rounded-[29px_29px_105px_29px] bg-maroon px-[10px] py-[50px] md:p-[41px]">
          <h2 className="text-center font-recoleta text-[32px] leading-[32px] font-normal text-white md:text-left md:text-[35px] md:leading-[35px] lg:text-[48px] lg:leading-[48px]">{data.explore.heading}</h2>
          <ScrubTreatmentTabs tabs={data.explore.tabs} />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream px-[10px] pt-[50px] pb-[32px] md:px-0 md:pt-[50px] md:pb-0">
        <h2 className="mx-[30px] text-center font-recoleta text-[32px] leading-[32px] font-normal text-maroon md:mr-[64px] md:ml-[30px] md:text-[35px] md:leading-[35px] lg:mr-[max(60px,calc(50%-640px))] lg:ml-[max(30px,calc(50%-670px))] lg:text-[40px] lg:leading-[40px]">{data.benefits.heading}</h2>
        <p className="mx-[30px] mt-[21px] text-center font-mulish text-[14px] leading-[21px] text-[#002c39] md:mx-auto md:max-w-[calc(55.5vw-20px)] lg:max-w-[min(750px,56%)] lg:text-[15px] lg:leading-[22.5px]">{data.benefits.text}</p>
      </section>
      <section className="bg-cream p-[10px] pb-[10px] md:pt-[104px] lg:pt-[53px]">
        <div className="mx-auto grid max-w-[1400px] gap-[20px] pt-[30px] md:grid-cols-3 md:px-[10px] md:pt-[0px]">
          {data.benefits.cards.map((c, i) => (
            <div key={c.title} className={`${card} lg:min-h-[355px]`}>
              <Image src={c.icon.src} alt={c.icon.alt} width={c.icon.width} height={c.icon.height} sizes="99px" className="aspect-square h-auto w-[24.4%] object-contain" />
              <h3 className={`mt-[20px] max-md:max-w-[80%] ${tangTitle}`}>{c.title}</h3>
              <ul className={`mt-[20px] list-disc pl-[40px] font-mulish text-[14px] leading-[21.98px] text-[#022a3e] ${i < 2 ? "font-medium" : "font-normal"}`}>
                {c.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream pt-[51px] pb-[40px] md:pt-[41px] md:pb-[59px]">
        <h2 className="mx-[10px] text-center font-tang font-normal md:mx-auto md:mt-[29px] text-[23px] leading-[36.8px] text-maroon md:max-w-[calc(59.77vw-34px)] md:text-[35px] md:leading-[53px] lg:max-w-[min(804px,57.2vw)]">
          <span className="text-rust">{data.howItWorks.eyebrow}</span>
          <br />
          {data.howItWorks.heading}
        </h2>
        <div className="mx-auto mt-[70px] grid max-w-[1400px] gap-[20px] px-[10px] md:mt-[50px] md:grid-cols-3 md:pr-[41px] md:pl-[39px]">
          {data.howItWorks.steps.map((s, i) => (
            <div key={s.title} className={`${card} lg:min-h-[366px]`}>
              {/* The old site shows the middle icon slightly smaller. */}
              <Image src={s.icon.src} alt={s.icon.alt} width={s.icon.width} height={s.icon.height} sizes="102px" className={`aspect-square h-auto object-contain ${i === 1 ? "w-[25.7%]" : "w-[26.4%]"}`} />
              <h3 className={`mt-[20px] ${tangTitle}`}>{s.title}</h3>
              <p className="mt-[20px] font-mulish text-[14px] leading-[21.98px] text-[#022a3e] mb-[14px]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to book */}
      <section className="bg-cream px-[10px] pt-[30px] pb-[50px] md:px-0 md:pt-[50px] lg:pb-[30px]">
        <div className="mx-auto max-w-[1400px] rounded-[10px_105px_10px_10px] border-t-[6px] border-rust bg-maroon p-[30px] lg:px-[60px] lg:pt-[60px]">
          <h2 className="text-center font-recoleta text-[32px] leading-[32px] font-normal text-white md:text-[35px] md:leading-[35px] lg:text-[48px] lg:leading-[48px]">{data.booking.heading}</h2>
          <p className="mx-auto mt-[40px] max-w-[973px] md:max-w-none lg:max-w-[76%] text-center font-recoleta text-[14px] leading-[21px] text-white md:mt-[5px] lg:text-[15px] lg:leading-[22.5px]">{data.booking.text}</p>
          <h2 className="mt-[34px] text-center font-recoleta text-[32px] leading-[32px] font-normal text-white md:mt-[35px] md:text-[35px] md:leading-[35px] lg:text-[48px] lg:leading-[48px]">{data.booking.stepsHeading}</h2>
          <ol className="mt-[51px] mb-[71px] grid gap-y-[52px] px-[10px] md:mt-[16px] md:mb-[40px] md:grid-cols-5 md:gap-x-[20px] md:px-[10px] lg:gap-x-[24px]">
            {data.booking.steps.map((s, i) => (
              <li key={s.title}>
                <ScrubStepNumber n={i} />
                <h3 className="mt-[20px] font-recoleta text-[16px] leading-[19.2px] font-normal text-white lg:text-[18px] lg:leading-[21.6px]">{s.title}</h3>
                <p className="mt-[16px] font-mulish text-[14px] leading-[21px] font-extralight text-white lg:mt-[13px] lg:text-[16px] lg:leading-[24px]">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Guest reviews (Elfsight Google Reviews) */}
      <section className="bg-cream px-[10px] pt-[47px] pb-[30px]">
        <h2 className="mx-auto max-w-[1215px] text-center font-recoleta text-[36px] leading-[44px] font-normal text-maroon md:text-[40px] lg:text-[48px]">{data.reviewsHeading}</h2>
        <Reviews widgetId={settings.reviews.pagesWidgetId} className="mx-auto max-w-[1235px]" />
      </section>

      {/* FAQ */}
      <section className="bg-cream px-[10px] pb-[80px] md:px-0 md:pt-[80px]">
        <div className="mx-auto max-w-[1235px] rounded-[20px] bg-white pt-[40px] pb-[25px] shadow-[0_22px_37.7px_rgba(79,79,79,0.2)] md:rounded-[35px] md:px-[60px] md:pt-[60px] md:pb-[40px] lg:px-[130px] lg:pt-[100px] lg:pb-[107px]">
          <h2 className="text-center font-recoleta text-[36px] leading-[44px] font-normal text-maroon md:text-[40px] lg:text-[48px]">{data.faq.heading}</h2>
          <ScrubFaq items={data.faq.items} variant="body-scrub" />
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-cream pt-[60px] pb-[100px] lg:px-[20px]">
        <div className="mx-auto max-w-[1235px] rounded-[22px_22px_0_0] bg-maroon px-[24px] py-[40px] text-center md:rounded-[22px] md:p-[30px] lg:px-[50px] lg:py-[60px]">
          <h2 className="font-recoleta text-[30px] leading-[32px] font-normal text-white lg:text-[34px] lg:leading-[34px]">{data.cta.heading}</h2>
          <p className="mx-auto mt-[21px] max-w-[calc(100%-3px)] font-mulish text-[14px] leading-[21px] text-white md:max-w-[78.2%] lg:max-w-[620px] lg:text-[15px] lg:leading-[22.5px]">{data.cta.text}</p>
          <a
            href={data.cta.button.href}
            className="mt-[44px] inline-block rounded-[4px] border border-rust bg-rust p-[18px] font-mulish text-[14px] leading-[14px] font-bold text-white uppercase transition-all duration-300 hover:border-[#00aaff] hover:bg-white hover:text-[#333] md:px-[20px] md:py-[15px] lg:mt-[36px] lg:ml-[20px]"
          >
            <span className="block">{data.cta.button.label}</span>
          </a>
        </div>
      </section>
    </>
  );
}
