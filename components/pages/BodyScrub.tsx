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
      <JsonLd data={faqPageSchema(data.faq.items)} />

      {/* Banner (three h2s on the old site; its two h1s were hidden) */}
      <section className="banner-red bg-cover bg-left-top px-[10px] py-[150px] text-center md:h-[728px] md:px-0 md:pt-[244px] md:pb-0">
        <h2 className="font-sans text-[32px] leading-[32px] font-medium text-sand">{data.banner.korean}</h2>
        <h2 className="mt-[20px] font-recoleta text-[38px] leading-[38px] font-medium text-white md:text-[68px] md:leading-[68px]">
          <Inline text={data.banner.title} />
        </h2>
        <h2 className="mt-[20px] font-recoleta text-[20px] leading-[20px] font-medium text-white md:text-[32px] md:leading-[32px]">{data.banner.subtitle}</h2>
      </section>

      {/* Skincare rooted in tradition */}
      <section className="bg-cream py-[30px] md:pt-[60px]">
        <div className="mx-auto max-w-[1440px] px-[15px] md:px-[50px]">
          <h2 className="font-recoleta text-[32px] leading-[32px] font-normal text-maroon md:text-center md:text-[40px] md:leading-[40px] max-md:text-center">{data.tradition.heading}</h2>
          <p className="rich mt-[21px] pb-[13px] text-center font-mulish text-[14px] leading-[21px] text-[#002c39] md:px-[20px] md:pb-[45px] md:text-[15px] md:leading-[22.5px]">
            <Inline text={data.tradition.text} />
          </p>
        </div>
      </section>

      {/* What is a Korean body scrub */}
      <section className="bg-cream pt-[30px] pb-[45px] md:pb-[46px]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-[24px] md:flex-row md:items-center md:gap-0 md:px-[20px]">
          <div className="px-[15px] md:w-[700px] md:px-[30px]">
            <h2 className="font-recoleta text-[32px] leading-[32px] font-normal text-maroon md:w-[534px] md:text-center md:text-[40px] md:leading-[40px]">{data.whatIs.heading}</h2>
            <p className="rich mt-[21px] font-mulish text-[14px] leading-[21px] text-[#002c39] md:w-[563px] md:text-[15px] md:leading-[22.5px]">
              <Inline text={data.whatIs.text} />
            </p>
          </div>
          <div className="px-[10px] md:w-[700px] md:pt-[10px] md:pl-[45px] md:pr-[114px]">
            <Image
              src={data.whatIs.image.src}
              alt={data.whatIs.image.alt}
              width={data.whatIs.image.width}
              height={data.whatIs.image.height}
              sizes="(max-width: 767px) 370px, 541px"
              className="h-[425px] w-full rounded-[120px_10px_10px_10px] object-cover md:h-[621px] md:w-[541px]"
            />
          </div>
        </div>
      </section>

      {/* Explore our treatments: women's / men's tabs */}
      <section className="bg-cream py-[30px]">
        <div className="mx-auto max-w-[1400px] rounded-[29px_29px_105px_29px] bg-maroon px-[10px] py-[50px] md:mx-[20px] md:p-[41px] min-[1441px]:mx-auto">
          <h2 className="text-center font-recoleta text-[32px] leading-[32px] font-normal text-white md:text-left md:text-[48px] md:leading-[48px]">{data.explore.heading}</h2>
          <ScrubTreatmentTabs tabs={data.explore.tabs} />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream px-[10px] pt-[50px] pb-[32px] md:px-0 md:pb-0">
        <h2 className="mx-auto max-w-[310px] text-center font-recoleta text-[32px] leading-[32px] font-normal text-maroon md:ml-[50px] md:max-w-[1310px] md:text-[40px] md:leading-[40px]">{data.benefits.heading}</h2>
        <p className="mx-auto mt-[21px] max-w-[307px] text-center font-mulish text-[14px] leading-[21px] text-[#002c39] md:max-w-[750px] md:text-[15px] md:leading-[22.5px]">{data.benefits.text}</p>
      </section>
      <section className="bg-cream p-[10px] pb-[10px] md:pt-[53px]">
        <div className="mx-auto grid max-w-[1420px] gap-[20px] pt-[30px] md:grid-cols-3 md:px-[20px] md:pt-[0px]">
          {data.benefits.cards.map((c, i) => (
            <div key={c.title} className={`${card} min-h-[348px] md:min-h-[355px]`}>
              <Image src={c.icon.src} alt={c.icon.alt} width={c.icon.width} height={c.icon.height} sizes="99px" className="h-[80px] w-[80px] object-contain md:h-[99px] md:w-[99px]" />
              <h3 className={`mt-[20px] max-md:max-w-[270px] ${tangTitle}`}>{c.title}</h3>
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
        <h2 className="mx-auto max-w-[370px] text-center font-tang font-normal md:mt-[29px] text-[23px] leading-[36.8px] text-maroon md:max-w-[804px] md:text-[35px] md:leading-[53px]">
          <span className="text-rust">{data.howItWorks.eyebrow}</span>
          <br />
          {data.howItWorks.heading}
        </h2>
        <div className="mx-auto mt-[70px] grid max-w-[1340px] gap-[20px] px-[10px] md:mt-[50px] md:grid-cols-3 md:px-[10px]">
          {data.howItWorks.steps.map((s, i) => (
            // Card heights as on the old site (its first card is taller on phones).
            <div key={s.title} className={`${card} ${i === 0 ? "min-h-[368px]" : i === 2 ? "min-h-[324px]" : "min-h-[322px]"} md:min-h-[366px]`}>
              {/* The old site shows the middle icon slightly smaller. */}
              <Image src={s.icon.src} alt={s.icon.alt} width={s.icon.width} height={s.icon.height} sizes="102px" className={`object-contain ${i === 1 ? "h-[85px] w-[85px] md:h-[99px] md:w-[99px]" : "h-[87px] w-[87px] md:h-[102px] md:w-[102px]"}`} />
              <h3 className={`mt-[20px] ${tangTitle}`}>{s.title}</h3>
              <p className="mt-[20px] font-mulish text-[14px] leading-[21.98px] text-[#022a3e]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to book */}
      <section className="bg-cream px-[10px] pt-[30px] pb-[50px] md:px-0 md:pt-[50px] md:pb-[30px]">
        <div className="mx-auto max-w-[1400px] rounded-[10px_105px_10px_10px] border-t-[6px] border-rust bg-maroon p-[30px] md:mx-[20px] md:px-[60px] md:pt-[60px] md:pb-[30px] min-[1441px]:mx-auto">
          <h2 className="text-center font-recoleta text-[32px] leading-[32px] font-normal text-white md:text-[48px] md:leading-[48px]">{data.booking.heading}</h2>
          <p className="mx-auto mt-[40px] max-w-[973px] text-center font-recoleta text-[14px] leading-[21px] text-white md:mt-[5px] md:text-[15px] md:leading-[22.5px]">{data.booking.text}</p>
          <h2 className="mt-[34px] text-center font-recoleta text-[32px] leading-[32px] font-normal text-white md:mt-[35px] md:text-[48px] md:leading-[48px]">{data.booking.stepsHeading}</h2>
          <ol className="mt-[51px] mb-[71px] grid gap-y-[52px] px-[10px] md:mt-[16px] md:mb-[40px] md:grid-cols-5 md:gap-x-[24px] md:px-[10px]">
            {data.booking.steps.map((s, i) => (
              <li key={s.title}>
                <ScrubStepNumber n={i} />
                <h3 className="mt-[13px] font-recoleta text-[16px] leading-[19.2px] font-normal text-white md:text-[18px] md:leading-[21.6px]">{s.title}</h3>
                <p className="mt-[16px] font-mulish text-[14px] leading-[21px] font-extralight text-white md:mt-[13px] md:text-[16px] md:leading-[24px]">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Guest reviews (Elfsight Google Reviews) */}
      <section className="bg-cream px-[10px] pt-[47px] pb-[30px]">
        <h2 className="mx-auto max-w-[1215px] text-center font-recoleta text-[36px] leading-[44px] font-normal text-maroon md:text-[48px]">{data.reviewsHeading}</h2>
        <Reviews widgetId={settings.reviews.pagesWidgetId} className="mx-auto max-w-[1235px]" />
      </section>

      {/* FAQ */}
      <section className="bg-cream px-[10px] pb-[80px] md:px-0 md:pt-[80px]">
        <div className="mx-auto max-w-[1235px] rounded-[20px] bg-white pt-[40px] pb-[25px] shadow-[0_22px_37.7px_rgba(79,79,79,0.2)] md:rounded-[35px] md:px-[130px] md:pt-[100px] md:pb-[107px]">
          <h2 className="text-center font-recoleta text-[36px] leading-[44px] font-normal text-maroon md:text-[48px]">{data.faq.heading}</h2>
          <ScrubFaq items={data.faq.items} variant="body-scrub" />
        </div>
      </section>

      {/* Closing call to action */}
      <section className="bg-cream pt-[60px] pb-[100px] md:px-[20px]">
        <div className="mx-auto max-w-[1235px] rounded-[22px_22px_0_0] bg-maroon px-[24px] py-[40px] text-center md:rounded-[22px] md:px-[50px] md:py-[60px]">
          <h2 className="font-recoleta text-[30px] leading-[32px] font-normal text-white md:text-[34px] md:leading-[34px]">{data.cta.heading}</h2>
          <p className="mx-auto mt-[21px] max-w-[339px] font-mulish text-[14px] leading-[21px] text-white md:max-w-[620px] md:text-[15px] md:leading-[22.5px]">{data.cta.text}</p>
          <a
            href={data.cta.button.href}
            className="mt-[44px] inline-block rounded-[4px] border border-rust bg-rust p-[18px] font-mulish md:ml-[20px] text-[14px] leading-[14px] font-bold text-white uppercase md:mt-[36px] md:px-[20px] md:py-[15px]"
          >
            <span className="block">{data.cta.button.label}</span>
          </a>
        </div>
      </section>
    </>
  );
}
