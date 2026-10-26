import Image from "next/image";
import type { eCouponPage } from "@/lib/data/pages/eCoupon";
import { getSettings } from "@/lib/content";
import { Reviews } from "@/components/ui/Reviews";
import { ECouponForm } from "@/components/sections/ECouponForm";
import { LocationHours } from "@/components/sections/LocationHours";

const h2 = "font-recoleta font-normal text-[22px] leading-[30.8px] text-maroon md:text-[35px] md:leading-[39.2px] lg:text-[50px] lg:leading-[56px]";
const body = "font-mulish text-[14px] leading-[21px] text-[#002c39] lg:text-[15px] lg:leading-[22.5px]";

/** E-Coupon (/e-coupon/), section by section as on chi.kingspa.com, with the sign-up form posting to /api/lead.php. */
export async function ECouponView({ data }: { data: typeof eCouponPage }) {
  const settings = await getSettings();
  const { banner, intro, coupon, form, howItWorks, terms, expect, dayPass, reviews, location } = data;
  return (
    <>
      {/* Banner */}
      <section className="banner-red bg-cover bg-left-top px-0 py-[150px] text-center text-white md:py-[244px]">
        <h2 className="mx-auto max-w-[390px] font-recoleta text-[45px] leading-[45px] font-medium md:max-w-none md:text-[80px] md:leading-[80px]">{banner.heading}</h2>
        <h2 className="mt-[20px] font-recoleta text-[18px] leading-[18px] font-medium md:text-[24px] md:leading-[24px]">{banner.subheading}</h2>
      </section>

      <div className="bg-cream">
      {/* Intro */}
      <section className="px-[15px] pt-[30px] pb-[44px] text-center lg:px-[50px] lg:pt-[60px] lg:pb-[74px]">
        {/* The old heading box: 100.741% wide with 40px right padding, so the heading sits a little left of center. */}
        <div className="w-[100.741%] pr-[40px]">
          <h2 className="font-tang text-[20px] leading-[30px] font-normal text-maroon md:text-[35px] md:leading-[35px] lg:text-[40px] lg:leading-[40px]">{intro.heading}</h2>
        </div>
        <p className={`mx-auto mt-[20px] max-w-[1340px] ${body}`}>{intro.text}</p>
      </section>

      {/* Coupon card: the old page's own coupon widget. 1067x407 from 1101px; below that it scales with the
          viewport (vw fonts, 1067:407 card) inside a shrink-to-fit box, exactly as the old CSS did. */}
      <section className="flex justify-center p-[10px]">
        <div>
          <div className="flex w-full justify-center py-[20px] font-poppins leading-normal">
            <div className="flex h-[407px] w-[1067px] flex-col rounded-[30px] border-[10px] border-rust bg-[#480e13] px-[40px] py-[25px] shadow-[0_10px_25px_rgba(0,0,0,0.2)] max-[1100px]:aspect-[1067/407] max-[1100px]:h-auto max-[1100px]:w-full max-[1100px]:border-[length:1.5vw] max-[1100px]:px-[4%] max-[1100px]:py-[3%]">
              <div className="mb-[20px] flex h-[60px] items-center justify-between rounded-[8px] bg-white px-[35px] font-medium text-[#480e13] max-[1100px]:mb-[3%] max-[1100px]:h-[16%] max-[1100px]:px-[4%]">
                <p className="text-[26px] tracking-[-0.5px] max-[1100px]:text-[2.4vw]">{coupon.title}</p>
                <p className="text-[24px] max-[1100px]:text-[2.4vw]">{coupon.expires}</p>
              </div>
              <div className="flex grow items-center justify-center gap-[40px] text-white">
                <h1 className="mb-[15px] text-[210px] leading-[0.8] font-bold tracking-[-6px] max-[1100px]:mb-0 max-[1100px]:text-[19vw] max-[1100px]:leading-none">{coupon.price}</h1>
                <div className="flex flex-col justify-center">
                  <p className="mb-[5px] text-[45px] font-medium max-[1100px]:text-[4vw]">{coupon.perPerson}</p>
                  <p className="text-[65px] font-bold max-[1100px]:text-[5.8vw]">{coupon.value}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-[1400px] px-[10px] pt-[50px] pb-[10px] md:px-0 md:pt-[20px] md:pb-[20px] lg:pt-[29px] lg:pb-[29px]">
        <div className="rounded-[29px_19px_107px_29px] border-b-[10px] border-rust bg-maroon px-[30px] pt-[80px] pb-[106px] md:px-[40px] md:pt-[40px] md:pb-[66px]">
          <h2 className="mb-[22px] text-center font-tang font-normal text-[20px] leading-[32px] text-white md:px-[20%] md:text-[35px] md:leading-[39.2px] lg:px-[15%] lg:text-[37px] lg:leading-[41.44px]">{form.heading}</h2>
          <ECouponForm copy={form} />
        </div>
      </section>

      {/* How It Works / Terms / What to Expect */}
      <section className="mx-auto max-w-[1400px] px-[40px] pt-[80px] text-center md:px-[30px]">
        <h2 className={`md:px-[20%] lg:px-[15%] ${h2}`}>{howItWorks.heading}</h2>
        <p className={`mt-[20px] md:px-[20%] ${body}`}>{howItWorks.text}</p>
      </section>
      <section className="mx-auto max-w-[1400px] px-[10px] pt-[66px] text-center md:px-0 md:pt-[116px] lg:pt-[60px]">
        <h2 className={`md:px-[20%] lg:px-[15%] ${h2}`}>{terms.heading}</h2>
        <p className={`mt-[20px] md:px-[20%] ${body}`}>
          {terms.contactLabel}{" "}
          <strong className="font-bold">
            <a href={`mailto:${terms.email}`}>{terms.email}</a>
          </strong>
        </p>
        <p className={`mt-[14px] whitespace-pre-line md:px-[20%] ${body}`}>{terms.text}</p>
      </section>
      <section className="mx-auto max-w-[1400px] px-[10px] pt-[55px] text-center md:px-[30px] md:pt-[135px] lg:pt-[78px]">
        <h2 className={`md:px-[20%] lg:px-[15%] ${h2}`}>{expect.heading}</h2>
        <p className={`mt-[20px] whitespace-pre-line md:px-[20%] ${body}`}>{expect.text}</p>
      </section>

      {/* Day pass: photo column 38%, text column 50%, centered (as the old page's two containers). */}
      <section className="mx-auto max-w-[1400px] px-[10px] pt-[74px] pb-[59px] md:px-0 md:pt-[144px] lg:pt-[94px]">
        <div className="flex flex-col gap-[51px] md:flex-row md:justify-center md:gap-0">
          <div className="md:w-[38%] md:shrink-0 md:p-[10px]">
            <Image src={dayPass.image.src} alt={dayPass.image.alt} width={dayPass.image.width} height={dayPass.image.height} sizes="(max-width: 767px) 370px, 512px" className="h-auto w-full" />
          </div>
          <div className="-mx-[10px] md:mx-0 md:flex md:w-1/2 md:shrink-0 md:flex-col md:gap-[20px] md:pt-[35px] md:pl-[35px]">
            <h2 className="font-recoleta font-normal text-[22px] leading-[24.64px] text-maroon md:px-[20%] md:text-[35px] md:leading-[39.2px] lg:px-0">{dayPass.includesHeading}</h2>
            <div className="md:pb-[5%]">
              <ul className={`mt-[19px] list-disc pl-[40px] md:mt-0 ${body}`}>
                {dayPass.includes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <h2 className="mt-[20px] font-recoleta font-normal text-[22px] leading-[24.64px] text-maroon md:mt-0 md:px-[20%] md:text-[35px] md:leading-[39.2px] lg:px-0">{dayPass.extrasHeading}</h2>
            <ul className={`mt-[19px] list-disc pl-[40px] md:mt-0 ${body}`}>
              {dayPass.extras.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-[40px] pt-[70px] pb-[49px] text-center md:pb-[50px] lg:px-[113px]">
        <h2 className="font-recoleta font-normal text-[28px] leading-[30.8px] text-maroon md:text-[40px] md:leading-[44px] lg:text-[48px]">{reviews.heading}</h2>
        <div className="mx-auto mt-[30px] max-w-[1380px]">
          <Reviews widgetId={settings.reviews.pagesWidgetId} />
        </div>
      </section>

      <LocationHours data={location} mapSrc={settings.maps.place} headingFont="recoleta" phoneAddressAlign="left" />
      {/* On phones the old page's location section ends 23px lower here than on the First-Time Guide. */}
      <div aria-hidden="true" className="h-[23px] md:hidden" />
      </div>
    </>
  );
}
