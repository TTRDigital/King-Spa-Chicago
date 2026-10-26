import Image from "next/image";
import type { pricingPage } from "@/lib/data/pages/pricing";
import type { Img } from "@/lib/types";
import { InnerBanner } from "@/components/sections/InnerBanner";

type Data = typeof pricingPage;
type Table = Data["admission"]["tables"][number];

/**
 * Price tables as on the old page (Essential Addons data table): an automatic-layout table, so the
 * columns size themselves from their text exactly as before. The hairline is the top border of the
 * header cells (one empty header cell when a table has no heading, so it spans only the first column);
 * odd rows are tinted; cells have 10px top padding and weight 500. On phones the old table widget
 * stood 5px taller than its table (max-md:pb-[5px] on each wrapper).
 */
function PriceTable({ table, font, headSize, align = "" }: { table: Table; font: string; headSize: string; align?: string }) {
  const th = "border-t border-[rgba(128,128,128,0.5)] p-0 text-left align-top font-montserrat text-[16px] leading-[16px] font-semibold";
  const cell = `p-0 pt-[10px] align-top text-[14px] leading-[23.38px] font-medium md:text-[16px] md:leading-[26.72px] ${font}`;
  return (
    <table className="w-full border-separate border-spacing-0 text-left text-white">
      <thead>
        <tr>
          {table.heading ? (
            <>
              <th className={th}>
                <span className={`font-dmserif font-normal ${headSize}`}>{table.heading}</span>
              </th>
              <th className={th}>
                <span className={`font-dmserif font-normal ${headSize}`}>{table.priceHeading}</span>
              </th>
            </>
          ) : (
            <th className={th} aria-hidden="true" />
          )}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((r, i) => (
          <tr key={i}>
            <td className={`${cell} ${i % 2 === 0 ? "bg-[rgba(128,128,128,0.07)]" : ""}`}>
              <div className={align}>{r.label}</div>
            </td>
            {r.price ? (
              <td className={`${cell} ${i % 2 === 0 ? "bg-[rgba(128,128,128,0.07)]" : ""}`}>
                <div className={align}>{r.price}</div>
              </td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Bg({ image, sizes, position = "object-left-top", className = "" }: { image: Img; sizes: string; position?: string; className?: string }) {
  return <Image src={image.src} alt={image.alt} fill sizes={sizes} className={`-z-10 object-cover ${position} ${className}`} />;
}

const tableBox = "relative z-10 rounded-[20px] bg-[#54040c]";

/** Centered photo card with the price table overlapping its bottom edge (admission, foot, facial, V-steam). */
function CenteredBlock({
  block,
  headingAlign,
  textClass,
  subClass,
  first = false,
  overlap = "-mt-[91px]",
}: {
  block: { image: Img; heading: string; text: string; subheading?: string; tables: Table[] };
  headingAlign: string;
  textClass: string;
  subClass?: string;
  first?: boolean;
  overlap?: string;
}) {
  return (
    <section className={`${first ? "pt-[100px]" : ""} pb-[110px]`}>
      <div className={`relative isolate mx-auto overflow-hidden rounded-[20px] px-[20px] pt-[40px] md:w-[686px] md:rounded-[31px] md:p-[70px] ${first ? "pb-[120px]" : "pb-[100px]"}`}>
        <Bg image={block.image} sizes="(max-width: 767px) 100vw, 686px" />
        <h4 className={`font-tang text-[26px] leading-[39px] font-normal text-white md:text-[40px] md:leading-[60px] ${headingAlign}`}>{block.heading}</h4>
        {block.subheading ? <p className={`mt-[15px] text-center font-recoleta text-[14px] leading-[14px] text-white md:mt-[20px] md:text-[21px] md:leading-[30.87px] ${subClass ?? ""}`}>{block.subheading}</p> : null}
        <p className={`mt-[15px] mb-[14.4px] text-center font-mulish text-white md:mt-[20px] ${textClass}`}>{block.text}</p>
      </div>
      <div className={`${tableBox} mx-[10px] p-[20px] md:mx-auto md:w-[548px] md:pt-[30px] md:pr-[60px] md:pb-[30px] md:pl-[40px] ${first ? "-mt-[112px]" : overlap} md:-mt-[49px]`}>
        {block.tables.map((t, i) => (
          <div key={i} className={`max-md:pb-[5px] ${i ? "mt-[20px]" : ""}`}>
            {/* The lower cards' rows inherited centered text on phones; the admission table did not. */}
            <PriceTable table={t} font="font-recoleta" headSize="text-[26px] leading-[29.12px]" align={first ? "" : "max-md:text-center"} />
          </div>
        ))}
      </div>
    </section>
  );
}

/** Pricing (/pricing/). */
export function PricingView({ data }: { data: Data }) {
  const { admission, bodyScrub, massage, footChair, facial, vSteam } = data;
  return (
    <>
      <InnerBanner korean={data.banner.korean} title={data.banner.title} />

      <CenteredBlock block={admission} first headingAlign="text-center" textClass="text-[14px] leading-[21px] md:text-[15px] md:leading-[22.5px]" />

      {/* Korean Body Scrub: photo card left, both scrub tables right (overlapping by 22px). */}
      <section className="pb-[100px]">
        <div className="mx-auto flex max-w-[1440px] flex-col md:flex-row md:items-start md:px-[20px]">
          <div className="relative isolate overflow-hidden rounded-[20px] px-[20px] pt-[40px] pb-[100px] md:mt-[25px] md:h-[450px] md:w-[686px] md:shrink-0 md:rounded-[20px_0_0_20px] md:pt-[70px] md:pr-[72px] md:pb-[70px] md:pl-[73px]">
            <Bg image={bodyScrub.image} sizes="686px" position="object-center" className="max-md:hidden" />
            <Bg image={bodyScrub.imageMobile} sizes="100vw" position="object-center" className="md:hidden" />
            <h4 className="font-tang text-[26px] leading-[39px] font-normal text-white md:text-[40px] md:leading-[60px]">{bodyScrub.heading}</h4>
            <p className="mt-[15px] text-center font-recoleta text-[14px] leading-[14px] font-medium text-white md:mt-[20px] md:text-start md:text-[21px] md:leading-[30.87px]">{bodyScrub.subheading}</p>
            <p className="mt-[15px] mb-[14.4px] text-center font-mulish text-[14px] leading-[21px] text-white md:mt-[20px] md:text-start">{bodyScrub.text}</p>
          </div>
          <div className={`${tableBox} mx-[10px] -mt-[90px] flex min-h-[500px] flex-col justify-center pt-[20px] pr-[20px] pb-[21px] pl-[20px] md:mx-0 md:mt-0 md:-ml-[22px] md:w-[714px] md:pt-[30px] md:pr-[62px] md:pb-[30px] md:pl-[40px]`}>
            {bodyScrub.tables.map((t, i) => (
              <div key={i} className="max-md:pb-[5px]">
                {i ? <hr className="my-[35px] border-0 border-t border-dotted border-white/60" /> : null}
                <PriceTable table={t} font="font-mulish" headSize="text-[20px] leading-[22.4px] md:text-[26px] md:leading-[29.12px]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Massage: table left, photo card right; on phones the photo comes first. */}
      <section className="pb-[100px]">
        <div className="mx-auto flex max-w-[1440px] flex-col md:flex-row md:items-start md:px-[20px]">
          <div className={`${tableBox} order-2 mx-[10px] -mt-[89px] p-[20px] md:order-1 md:mx-0 md:mt-0 md:w-[602px] md:shrink-0 md:pt-[30px] md:pr-[60px] md:pb-[30px] md:pl-[40px]`}>
            {massage.tables.map((t, i) => (
              <div key={i} className={`max-md:pb-[5px] ${i ? "mt-[20px]" : ""}`}>
                <PriceTable table={t} font="font-recoleta" headSize="text-[26px] leading-[29.12px]" />
              </div>
            ))}
          </div>
          <div className="relative isolate order-1 mt-[20px] overflow-hidden rounded-[20px] px-[20px] pt-[40px] pb-[100px] md:order-2 md:mt-[21px] md:min-h-[369px] md:flex-1 md:rounded-[0_20px_20px_0] md:p-[70px]">
            <Bg image={massage.image} sizes="(max-width: 767px) 100vw, 800px" position="object-center" />
            <h4 className="font-tang text-[26px] leading-[39px] font-normal text-white md:text-[40px] md:leading-[60px]">{massage.heading}</h4>
            <p className="mt-[15px] text-center font-recoleta text-[14px] leading-[14px] text-white md:mt-[20px] md:text-start md:text-[21px] md:leading-[30.87px]">{massage.subheading}</p>
            <p className="mt-[15px] mb-[14.4px] text-center font-mulish text-[14px] leading-[21px] text-white md:mt-[20px] md:text-start">{massage.text}</p>
          </div>
        </div>
      </section>

      <CenteredBlock block={footChair} headingAlign="text-center md:text-start" textClass="text-[14px] leading-[21px]" />
      <CenteredBlock block={facial} headingAlign="text-center" textClass="text-[14px] leading-[21px] md:text-[15px] md:leading-[22.5px]" />
      <CenteredBlock block={vSteam} overlap="-mt-[57px]" headingAlign="text-center" textClass="text-[14px] leading-[21px] md:text-[15px] md:leading-[22.5px]" />
    </>
  );
}
