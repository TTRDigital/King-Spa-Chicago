import { MapEmbed } from "@/components/ui/MapEmbed";

type Location = { heading: string; addressHeading: string; address: string; hoursHeading: string; hours: string };

/**
 * "Location & Hours" as on the First-Time Guide and E-Coupon pages: two icon
 * boxes (address | hours, with a divider) and the Google map below. The
 * headings render in the bold sans the old site fell back to.
 */
export function LocationHours({ data, mapSrc, headingFont, phoneAddressAlign = "center" }: { data: Location; mapSrc: string; headingFont: "tang" | "recoleta"; phoneAddressAlign?: "left" | "center" }) {
  const box = "flex flex-col items-center px-[10px] py-[10px] text-center md:flex-row md:items-start md:py-0 md:text-left";
  const first = phoneAddressAlign === "left" ? "!items-start !text-left" : "";
  const head = "block font-[Arial,Helvetica,sans-serif] text-[20px] leading-[26px] font-bold text-[#022a3e]";
  const text = "mt-[16px] whitespace-pre-line font-mulish text-[15px] leading-[23px] font-medium text-[#022a3e]";
  return (
    <section className="mx-auto max-w-[1380px] px-[10px] pt-[20px] pb-[40px] md:pb-[96px] lg:px-0">
      <h2 className={`text-center font-normal text-maroon ${headingFont === "tang" ? "font-tang text-[36px] leading-[44px] md:text-[40px] lg:text-[48px]" : "font-recoleta text-[36px] leading-[44px] md:text-[40px] lg:text-[48px]"}`}>{data.heading}</h2>
      <div className="mt-[50px] grid grid-cols-2 md:mt-[60px]">
        <div className={`${box} ${first} gap-[15px] md:gap-[7px] md:border-r md:border-[#cbcbcb]`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG icon */}
          <img src="/images/icons/location-address.svg" alt="" width={97} height={97} loading="lazy" className="h-[97px] w-[97px]" />
          <div className="md:pt-[8px]">
            <span className={head}>{data.addressHeading}</span>
            <p className={text}>{data.address}</p>
          </div>
        </div>
        <div className={`${box} gap-[18px] md:gap-[10px]`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG icon */}
          <img src="/images/icons/location-hours.svg" alt="" width={97} height={97} loading="lazy" className="h-[97px] w-[97px]" />
          <div className="md:pt-[8px]">
            <span className={head}>{data.hoursHeading}</span>
            <p className={text}>{data.hours}</p>
          </div>
        </div>
      </div>
      <MapEmbed src={mapSrc} title="King Spa & Sauna, 809 Civic Center Dr, Niles, IL on Google Maps" className="mt-[30px] h-[450px] md:mt-[40px]" />
    </section>
  );
}
