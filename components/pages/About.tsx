import Image from "next/image";
import Link from "next/link";
import type { aboutPage } from "@/lib/data/pages/about";
import { Inline } from "@/components/ui/RichText";
import { InnerBanner } from "@/components/sections/InnerBanner";

const h2 = "font-recoleta text-[40px] leading-[40px] font-normal tracking-[1.2px] text-maroon";
const copy = "font-mulish text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] [&>p]:mb-[14.4px]";

function Paragraphs({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={`${copy} ${className ?? ""}`}>
      {items.map((p, i) => (
        <p key={i}>
          <Inline text={p} />
        </p>
      ))}
    </div>
  );
}

/** About (/about/). */
export function AboutView({ data }: { data: typeof aboutPage }) {
  const { story, tradition, reconnect, commitment } = data;
  const columns = [0, 1, 2].map((c) => tradition.gallery.slice(c * 3, c * 3 + 3));
  return (
    <>
      <InnerBanner korean={data.banner.korean} title={data.banner.title} koreanClass="text-[25px] leading-[25px]" className="pt-[100px] pb-[184px] md:h-[636px]" />

      <section className="bg-[#f4fbff] pt-[40px] pb-[50px] md:pt-[82px] md:pb-[78px]">
        <h2 className={`${h2} px-0 text-center md:px-[20px]`}>{data.heading}</h2>
        <div className="mt-[121px] grid grid-cols-1 md:mt-[60px] md:grid-cols-2 md:items-start">
          <div className="px-[15px] md:mt-[46px] md:pr-[73px] md:pl-[35px]">
            <h2 className={`${h2} text-[32px] leading-[32px] md:text-[40px] md:leading-[40px]`}>{story.heading}</h2>
            <Paragraphs items={story.paragraphs} className="mt-[20px] text-[#0f0f0f]" />
          </div>
          <div className="mt-[37px] flex justify-center px-[10px] md:mt-0 md:pr-[18px] md:pl-0">
            <Image src={story.image.src} alt={story.image.alt} width={story.image.width} height={story.image.height} sizes="(max-width: 767px) 370px, 382px" className="h-[494px] w-[370px] rounded-[25px] object-cover md:h-[510px] md:w-[382px]" />
          </div>
        </div>
      </section>

      <section className="bg-white pt-[70px]">
        <div className="px-[20px] md:px-[30px]">
          <h2 className={`${h2} text-center`}>{tradition.heading}</h2>
          <Paragraphs items={tradition.paragraphs} className="mt-[20px] text-[#002c39]" />
        </div>
        <div className="mt-[30px] flex flex-col gap-[21px] px-[30px] md:mt-[44px] md:flex-row md:gap-[30px] md:px-[40px]">
          {columns.map((col, c) => (
            <div key={c} className="flex flex-1 flex-col gap-[21px]">
              {col.map((g) => (
                <figure key={g.caption}>
                  <Image src={g.image.src} alt={g.image.alt} width={g.image.width} height={g.image.height} sizes="(max-width: 767px) 330px, 433px" className="aspect-[1024/613] w-full rounded-[16px] object-cover" />
                  <figcaption className="text-center font-roboto text-[16px] leading-[22.4px] font-medium text-[#002c39] italic">{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-[20px] pt-[97px] md:px-[30px] md:pt-[110px]">
        <h2 className={`${h2} text-center`}>{reconnect.heading}</h2>
        <Paragraphs items={reconnect.paragraphs} className="mt-[20px] text-black" />
      </section>

      <section className="bg-white px-[10px] pt-[82px] pb-[51px] md:px-[30px] md:pt-[82px]">
        <h2 className={`${h2} text-center`}>{commitment.heading}</h2>
        <Paragraphs items={commitment.paragraphs} className="mt-[20px] text-black" />
        <div className="mt-[22px] text-center">
          <Link href={commitment.button.href} className="inline-block rounded-[4px] border border-maroon bg-maroon p-[18px] font-mulish text-[14px] leading-[14px] font-bold text-white uppercase md:px-[95px] md:py-[19px]">
            {commitment.button.label}
          </Link>
        </div>
      </section>
    </>
  );
}
