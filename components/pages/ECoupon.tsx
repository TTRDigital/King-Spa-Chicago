import Image from "next/image";
import type { eCouponPage } from "@/lib/data/pages/eCoupon";
import { getSettings } from "@/lib/content";
import { Reviews } from "@/components/ui/Reviews";
import { ECouponForm } from "@/components/sections/ECouponForm";
import { LocationHours } from "@/components/sections/LocationHours";

const h2 = "font-recoleta text-[22px] leading-[30.8px] text-maroon md:text-[50px] md:leading-[56px]";
const body = "font-mulish text-[14px] leading-[21px] text-[#002c39] md:text-[15px] md:leading-[22.5px]";

/** E-Coupon (/e-coupon/), section by section as on chi.kingspa.com, with the sign-up form posting to /api/lead.php. */
export async function ECouponView({ data }: { data: typeof eCouponPage }) {
  const settings = await getSettings();
  const { banner, intro, coupon, form, howItWorks, terms, expect, dayPass, reviews, location } = data;
  return (
    <>
      {/* Banner */}
      <section className="banner-red bg-cover bg-left-top px-0 py-[150px] text-center text-white md:h-[612px] md:pt-[244px] md:pb-0">
        <h2 className="mx-auto max-w-[390px] font-recoleta text-[45px] leading-[45px] font-medium md:max-w-none md:text-[80px] md:leading-[80px]">{banner.heading}</h2>
        <h2 className="mt-[20px] font-recoleta text-[18px] leading-[18px] font-medium md:text-[24px] md:leading-[24px]">{banner.subheading}</h2>
      </section>

      {/* Intro */}
      <section className="px-[15px] pt-[30px] pb-[44px] text-center md:px-[50px] md:pb-[74px]">
        <h2 className="mx-auto max-w-[323px] font-tang text-[20px] leading-[30px] text-maroon md:max-w-none md:pt-[30px] md:text-[40px] md:leading-[40px]">{intro.heading}</h2>
        <p className={`mx-auto mt-[20px] max-w-[1340px] ${body}`}>{intro.text}</p>
      </section>

      {/* Coupon card */}
      <section className="px-[10px] pt-[30px] pb-[10px]">
        <div className="mx-auto w-[315px] rounded-[30px] border-[5px] border-rust bg-[#480e13] px-[12.58px] pt-[9.44px] pb-[14px] shadow-[0_10px_25px_rgba(0,0,0,0.2)] md:w-[1067px] md:border-[10px] md:px-[40px] md:pt-[25px] md:pb-[77px]">
          <div className="flex items-center justify-between rounded-[3px] bg-white px-[15px] py-[1px] font-poppins font-medium text-[#480e13] md:h-[60px] md:rounded-[8px] md:px-[35px] md:py-0">
            <p className="text-[9.36px] tracking-[-0.5px] md:text-[26px]">{coupon.title}</p>
            <p className="text-[9.36px] md:text-[24px]">{coupon.expires}</p>
          </div>
          <div className="mt-[20px] flex items-center justify-center gap-[24px] text-white md:mt-[57px] md:gap-[40px]">
            <h1 className="font-poppins text-[74.1px] leading-[74.1px] font-bold tracking-[-6px] md:text-[210px] md:leading-[168px]">{coupon.price}</h1>
            <div className="w-[111px] font-poppins md:w-[390px]">
              <p className="text-[15.6px] font-medium md:text-[45px]">{coupon.perPerson}</p>
              <p className="text-[22.62px] leading-[1.5] font-bold md:whitespace-nowrap md:text-[65px]">{coupon.value}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-[1440px] px-[10px] pt-[50px] md:px-[20px] md:pt-[59px]">
        <div className="rounded-[29px_19px_107px_29px] border-b-[10px] border-rust bg-maroon px-[30px] pt-[80px] pb-[80px] md:px-[40px] md:pt-[40px] md:pb-[56px]">
          <h2 className="mb-[22px] text-center font-tang text-[20px] leading-[32px] text-white md:text-[37px] md:leading-[41.44px]">{form.heading}</h2>
          <ECouponForm copy={form} />
        </div>
      </section>

      {/* How It Works / Terms / What to Expect */}
      <section className="px-[40px] pt-[80px] text-center md:pt-[80px]">
        <h2 className={h2}>{howItWorks.heading}</h2>
        <p className={`mx-auto mt-[20px] max-w-[804px] ${body}`}>{howItWorks.text}</p>
      </section>
      <section className="px-[10px] pt-[52px] text-center md:pt-[60px]">
        <h2 className={h2}>{terms.heading}</h2>
        <p className={`mx-auto mt-[20px] max-w-[840px] ${body}`}>
          {terms.contactLabel}{" "}
          <strong className="font-bold">
            <a href={`mailto:${terms.email}`}>{terms.email}</a>
          </strong>
        </p>
        <p className={`mx-auto mt-[14px] max-w-[840px] whitespace-pre-line ${body}`}>{terms.text}</p>
      </section>
      <section className="px-[10px] pt-[50px] text-center md:pt-[69px]">
        <h2 className={h2}>{expect.heading}</h2>
        <p className={`mx-auto mt-[20px] max-w-[804px] whitespace-pre-line ${body}`}>{expect.text}</p>
      </section>

      {/* Day pass */}
      <section className="mx-auto max-w-[1232px] px-[10px] pt-[69px] pb-[69px] md:px-[5px]">
        <div className="flex flex-col gap-[51px] md:flex-row md:items-center md:gap-[45px]">
          <Image src={dayPass.image.src} alt={dayPass.image.alt} width={dayPass.image.width} height={dayPass.image.height} sizes="(max-width: 767px) 370px, 512px" className="h-auto w-full md:h-[512px] md:w-[512px] md:object-cover" />
          <div className="-mx-[10px] md:mx-0 md:w-[665px]">
            <h2 className="font-recoleta text-[22px] leading-[24.64px] text-maroon md:text-[35px] md:leading-[39.2px]">{dayPass.includesHeading}</h2>
            <ul className={`mt-[20px] list-disc pl-[40px] ${body}`}>
              {dayPass.includes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <h2 className="mt-[41px] font-recoleta text-[22px] leading-[24.64px] text-maroon md:mt-[53px] md:text-[35px] md:leading-[39.2px]">{dayPass.extrasHeading}</h2>
            <ul className={`mt-[20px] list-disc pl-[40px] ${body}`}>
              {dayPass.extras.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-[40px] py-[30px] text-center md:px-[113px]">
        <h2 className="pt-[40px] font-recoleta text-[28px] leading-[30.8px] text-maroon md:text-[48px] md:leading-[44px]">{reviews.heading}</h2>
        <div className="mx-auto mt-[30px] max-w-[1380px]">
          <Reviews widgetId={settings.reviews.pagesWidgetId} />
        </div>
      </section>

      <LocationHours data={location} mapSrc={settings.maps.place} headingFont="recoleta" phoneAddressAlign="left" />
    </>
  );
}
