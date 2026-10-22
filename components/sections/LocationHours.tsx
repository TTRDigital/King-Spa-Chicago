import { MapEmbed } from "@/components/ui/MapEmbed";

type Location = { heading: string; addressHeading: string; address: string; hoursHeading: string; hours: string };

/**
 * "Location & Hours" as on the First-Time Guide and E-Coupon pages: two icon
 * boxes (address | hours, with a divider) and the Google map below. The
 * headings render in the bold sans the old site fell back to.
 */
export function LocationHours({ data, mapSrc, headingFont, phoneAddressAlign = "center" }: { data: Location; mapSrc: string; headingFont: "tang" | "recoleta"; phoneAddressAlign?: "left" | "center" }) {
  const box = "flex flex-col items-center gap-[15px] text-center md:flex-row md:items-start md:gap-[15px] md:text-left";
  const first = phoneAddressAlign === "left" ? "!items-start !text-left" : "";
  const head = "block font-[Arial,Helvetica,sans-serif] text-[20px] leading-[26px] font-bold text-[#022a3e]";
  const text = "mt-[14px] whitespace-pre-line font-mulish text-[15px] leading-[23px] font-medium text-[#022a3e]";
  return (
    <section className="mx-auto max-w-[1380px] px-[10px] pt-[20px] pb-[40px] md:px-0 md:pb-[80px]">
      <h2 className={`text-center text-maroon ${headingFont === "tang" ? "font-tang text-[36px] leading-[44px] md:text-[48px] md:leading-[44px]" : "font-recoleta text-[36px] leading-[44px] md:text-[48px] md:leading-[44px]"}`}>{data.heading}</h2>
      <div className="mt-[60px] grid grid-cols-2 gap-[20px] md:mt-[70px] md:gap-0">
        <div className={`${box} ${first} border-r border-[#cbcbcb] pr-[10px] md:pl-[10px]`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG icon */}
          <img src="/images/icons/location-address.svg" alt="" width={97} height={97} loading="lazy" className="h-[97px] w-[97px]" />
          <div className="md:pt-[8px]">
            <span className={head}>{data.addressHeading}</span>
            <p className={text}>{data.address}</p>
          </div>
        </div>
        <div className={`${box} md:pl-[20px]`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG icon */}
          <img src="/images/icons/location-hours.svg" alt="" width={97} height={97} loading="lazy" className="h-[97px] w-[97px]" />
          <div className="md:pt-[8px]">
            <span className={head}>{data.hoursHeading}</span>
            <p className={text}>{data.hours}</p>
          </div>
        </div>
      </div>
      <MapEmbed src={mapSrc} title="King Spa & Sauna, 809 Civic Center Dr, Niles, IL on Google Maps" className="mt-[40px] h-[450px]" />
    </section>
  );
}
