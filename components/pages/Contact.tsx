import Image from "next/image";
import type { contactPage } from "@/lib/data/pages/contact";
import { getSettings } from "@/lib/content";
import { InnerBanner } from "@/components/sections/InnerBanner";
import { MapEmbed } from "@/components/ui/MapEmbed";

const ICONS = {
  phone: <path d="M497.4 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6.6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0-14-27.6z" />,
  email: <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />,
  pin: <path d="M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7a24 24 0 0 1-39.5 0zM192 272a80 80 0 1 0 0-160 80 80 0 0 0 0 160z" />,
  clock: <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7a12.1 12.1 0 0 1-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6a12 12 0 0 1 2.6 16.8L334.6 349a12.1 12.1 0 0 1-16.8 2.6z" />,
};

function Icon({ name, box }: { name: keyof typeof ICONS; box: string }) {
  return (
    <svg viewBox={box} className="h-[16px] w-[18px] shrink-0 fill-white" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

const item = "flex items-center font-mulish text-[14px] leading-[21px] font-semibold text-white md:text-[16px] md:leading-[24px]";

/** Contact (/contact/): details card next to the storefront photo, then the map. */
export async function ContactView({ data }: { data: typeof contactPage }) {
  const settings = await getSettings();
  return (
    <>
      <InnerBanner korean={data.banner.korean} title={data.banner.title} titleClass="text-[50px] leading-[50px] md:text-[96px] md:leading-[96px]" />

      <section className="px-[10px] pt-[10px] pb-[10px] md:px-[20px] md:pt-[30px] md:pb-[60px]">
        <div className="mx-auto flex max-w-[1400px] flex-col md:flex-row">
          <div className="rounded-[22px_22px_0_0] bg-maroon px-[24px] py-[40px] md:w-1/2 md:rounded-[22px_0_0_22px] md:px-[72px] md:py-[32px]">
            <h2 className="font-dmserif text-[30px] leading-[30px] text-white md:text-[40px] md:leading-[40px]">{data.name}</h2>
            <div className="mt-[20px] font-mulish text-[18px] leading-[27px] text-white md:text-[24px] md:leading-[36px]">{data.label}</div>
            <hr className="mt-[25px] border-0 border-t border-white md:mt-[20px]" />
            <ul className="mt-[22px] space-y-[5px]">
              <li>
                <a href={data.phone.href} className={item}>
                  <Icon name="phone" box="0 0 512 512" />
                  <span className="pl-[5px]">{data.phone.label}</span>
                </a>
              </li>
              <li>
                <a href={data.email.href} className={item}>
                  <Icon name="email" box="0 0 512 512" />
                  <span className="pl-[5px]">{data.email.label}</span>
                </a>
              </li>
              <li className={item}>
                <Icon name="pin" box="0 0 384 512" />
                <span className="pl-[10px]">{data.address}</span>
              </li>
              <li className={item}>{data.hoursLabel}</li>
              <li className={item}>
                <Icon name="clock" box="0 0 512 512" />
                <span className="pl-[5px]">{data.hours}</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[225px] overflow-hidden rounded-[0_0_22px_22px] md:h-auto md:w-1/2 md:rounded-[0_22px_22px_0]">
            <Image src={data.image.src} alt={data.image.alt} fill sizes="(max-width: 767px) 370px, 700px" className="object-cover object-center" />
          </div>
        </div>
      </section>

      <section className="px-[10px] pt-[10px] pb-[16px] md:px-[20px]">
        <MapEmbed src={settings.maps.place} title={data.mapTitle} className="mx-auto h-[450px] max-w-[1400px]" />
      </section>
    </>
  );
}
