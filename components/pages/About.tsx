import Image from "next/image";
import Link from "next/link";
import type { aboutPage } from "@/lib/data/pages/about";
import { Inline } from "@/components/ui/RichText";
import { InnerBanner } from "@/components/sections/InnerBanner";

const hBase = "font-recoleta font-normal tracking-[1.2px] text-maroon";
const h2 = `${hBase} text-[40px] leading-[40px]`;
// Tablets (768-1024) use the phone text size, as on live.
const copy = "font-mulish text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px] [&>p]:mb-[14.4px]";

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

      {/* Story: a centered 1400px box; the photo always sits 860px from its left edge, so on
          tablets it runs past the screen edge and is clipped, exactly as on live. */}
      <section className="overflow-hidden bg-[#f4fbff] pt-[40px] pb-[50px] md:h-[700px] md:pb-0 lg:h-[770px] lg:pt-[82px]">
        <div className="mx-auto max-w-[1400px]">
          <h2 className={`${h2} text-center`}>{data.heading}</h2>
          <div className="mt-[121px] grid md:relative md:mt-[60px] md:block">
            <div className="px-[15px] md:w-[663px] md:pt-[46px] md:pr-0 lg:w-[627px]">
              <h2 className={`${hBase} text-[32px] leading-[32px] md:text-[30px] md:leading-[30px] lg:text-[40px] lg:leading-[40px]`}>{story.heading}</h2>
              <Paragraphs items={story.paragraphs} className="mt-[20px] text-[#0f0f0f] md:mt-[21px] lg:mt-[22px]" />
            </div>
            <div className="mt-[37px] flex justify-center px-[10px] md:absolute md:top-0 md:left-[860px] md:mt-0 md:px-0">
              <Image src={story.image.src} alt={story.image.alt} width={story.image.width} height={story.image.height} sizes="(max-width: 767px) 370px, 382px" className="aspect-[382/510] h-auto w-full max-w-[382px] rounded-[25px] object-cover md:h-[510px] md:w-[382px] md:max-w-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-[70px]">
        <div className="px-[20px]">
          <div className="mx-auto max-w-[1380px]">
            <h2 className={`${h2} text-center`}>{tradition.heading}</h2>
            <Paragraphs items={tradition.paragraphs} className="mt-[20px] text-[#002c39]" />
          </div>
        </div>
        <div className="mx-auto mt-[42px] flex max-w-[1420px] flex-col gap-[28.4px] px-[30px] md:mt-[44px] md:flex-row md:gap-[30px] min-[1441px]:max-w-[1360px] min-[1441px]:px-0">
          {columns.map((col, c) => (
            <div key={c} className="flex flex-1 flex-col gap-[19.6px]">
              {col.map((g) => (
                <figure key={g.caption}>
                  <Image src={g.image.src} alt={g.image.alt} width={g.image.width} height={g.image.height} sizes="(max-width: 767px) 330px, 433px" className="aspect-[1024/613] w-full rounded-[16px] object-cover" />
                  <figcaption className="mt-[1px] text-center font-roboto text-[16px] leading-[22.4px] font-medium text-[#002c39] italic">{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-[20px] pt-[93.5px] md:pt-[99.5px]">
        <div className="mx-auto max-w-[1380px]">
          <h2 className={`${h2} text-center`}>{reconnect.heading}</h2>
          <Paragraphs items={reconnect.paragraphs} className="mt-[20px] text-black" />
        </div>
      </section>

      <section className="bg-white px-[10px] pt-[81px] pb-[51px] md:pt-[79px]">
        <div className="mx-auto max-w-[1380px]">
          <h2 className={`${h2} text-center`}>{commitment.heading}</h2>
          <Paragraphs items={commitment.paragraphs} className="mt-[20px] text-black" />
        </div>
        <div className="mt-[34px] text-center">
          <Link href={commitment.button.href} className="inline-block rounded-[4px] border border-maroon bg-maroon p-[18px] font-mulish text-[14px] leading-[14px] font-bold text-white uppercase md:px-[95px] md:py-[19px] transition-all duration-300 hover:bg-[rgba(2,1,1,0)] hover:text-maroon">
            <span className="block">{commitment.button.label}</span>
          </Link>
        </div>
      </section>
    </>
  );
}
