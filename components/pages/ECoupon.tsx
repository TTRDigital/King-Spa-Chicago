import Image from "next/image";
import type { eCouponPage } from "@/lib/data/pages/eCoupon";
import { getSettings } from "@/lib/content";
import { Reviews } from "@/components/ui/Reviews";
import { LocationHours } from "@/components/sections/LocationHours";

/* Font Awesome icons, as the old page drew them. */
const ICONS = {
  apple: { box: "0 0 384 512", d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" },
  googlePlay: { box: "0 0 512 512", d: "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" },
  phone: { box: "0 0 320 512", d: "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" },
  userPlus: { box: "0 0 640 512", d: "M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" },
  ticket: { box: "0 0 576 512", d: "M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z" },
};

type Store = { label: string; href: string };

/** An app store button: cream pill, rust on hover (0.3s), the label in Recoleta with the store's icon. */
function StoreButton({ store, icon, color }: { store: Store; icon: keyof typeof ICONS; color: string }) {
  return (
    <a href={store.href} target="_blank" rel="noopener" className={`inline-block rounded-[50px] border-2 border-cream bg-cream px-[30px] py-[16px] font-recoleta text-[18px] leading-[18px] font-medium transition-all duration-300 hover:bg-rust hover:text-white ${color}`}>
      <span className="flex justify-center gap-[10px]">
        <span className="flex items-center">
          <svg viewBox={ICONS[icon].box} width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d={ICONS[icon].d} />
          </svg>
        </span>
        <span className="text-center">{store.label}</span>
      </span>
    </a>
  );
}

/** Both store buttons: side by side and centred from 768px; stacked full width on phones. */
function StoreButtons({ apps, color, className = "" }: { apps: { appStore: Store; googlePlay: Store }; color: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-[16px] px-[20px] pt-[20px] md:flex-row md:flex-wrap md:items-center md:justify-center md:px-0 ${className}`}>
      <StoreButton store={apps.appStore} icon="apple" color={color} />
      <StoreButton store={apps.googlePlay} icon="googlePlay" color={color} />
    </div>
  );
}

const STEP_ICONS = ["phone", "userPlus", "ticket"] as const;

const h2 = "font-recoleta font-normal text-[22px] leading-[30.8px] text-maroon md:text-[35px] md:leading-[39.2px] lg:text-[50px] lg:leading-[56px]";
const body = "font-mulish text-[14px] leading-[21px] text-[#002c39] lg:text-[15px] lg:leading-[22.5px]";

/** E-Coupon (/e-coupon/), section by section as on chi.kingspa.com (the app version first shown at /e-coupon-staging/): the e-coupon comes from the Kingspa Rewards app. */
export async function ECouponView({ data }: { data: typeof eCouponPage }) {
  const settings = await getSettings();
  const { banner, apps, intro, howTo, terms, expect, dayPass, reviews, location } = data;
  return (
    <>
      {/* Banner: heading, line and the two store buttons, 244px above and below from 768px (150px on phones). */}
      <section className="banner-red flex flex-col gap-[20px] bg-cover bg-left-top py-[150px] text-center text-white md:py-[244px]">
        <h2 className="font-recoleta text-[32px] leading-[36.8px] font-medium md:text-[48px] md:leading-[55.2px] lg:text-[60px] lg:leading-[69px]">{banner.heading}</h2>
        <h2 className="font-recoleta text-[18px] leading-[18px] font-medium md:text-[24px] md:leading-[24px]">{banner.subheading}</h2>
        <StoreButtons apps={apps} color="text-rust" />
      </section>

      <div className="bg-cream">
      {/* Intro */}
      <section className="px-[15px] pt-[30px] pb-[44.4px] text-center lg:px-[50px] lg:pt-[60px] lg:pb-[74.4px]">
        {/* The old heading box: 100.741% wide with 40px right padding, so the heading sits a little left of center. */}
        <div className="w-[100.741%] pr-[40px]">
          <h2 className="font-tang text-[20px] leading-[30px] font-normal text-maroon md:text-[35px] md:leading-[35px] lg:text-[40px] lg:leading-[40px]">{intro.heading}</h2>
        </div>
        <p className={`mx-auto mt-[20px] max-w-[1340px] ${body}`}>{intro.text}</p>
      </section>

      {/* How to get the e-coupon: maroon card in the 1400px box, overlapping the sections round it by 30px from 768px. */}
      <section className="px-[10px] pt-[50px] pb-[40px] md:-my-[30px] md:px-0 md:pb-[50px] lg:py-[59px]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-[20px] rounded-[29px_19px_107px_29px] border-b-[16px] border-rust bg-maroon px-[30px] py-[80px] md:p-[40px]">
          <h2 className="text-center font-tang text-[20px] leading-[32px] font-normal text-white md:px-[20%] md:text-[35px] md:leading-[39.2px] lg:px-[15%] lg:text-[37px] lg:leading-[41.44px]">{howTo.heading}</h2>
          <ul className="mt-[10px] font-mulish text-[16px] leading-[24px] text-white md:text-[18px] md:leading-[27px]">
            {howTo.steps.map((step, i) => (
              <li key={step} className="flex items-center pb-[9px] not-first:mt-[9px] last:pb-0">
                <span className="w-[44px] shrink-0 pr-[14px] text-cream">
                  <svg viewBox={ICONS[STEP_ICONS[i % 3]].box} width="24" height="24" fill="currentColor" aria-hidden="true">
                    <path d={ICONS[STEP_ICONS[i % 3]].d} />
                  </svg>
                </span>
                <span className="pl-[5px]">{step}</span>
              </li>
            ))}
          </ul>
          <StoreButtons apps={apps} color="text-maroon" className="w-full" />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-[10px] pt-[50px] text-center md:px-0 lg:pt-[44px]">
        <h2 className={`md:px-[20%] lg:px-[15%] ${h2}`}>{terms.heading}</h2>
        <p className={`mt-[20px] md:px-[20%] ${body}`}>
          {terms.contactLabel}{" "}
          <strong className="font-bold">{terms.email}</strong>
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
