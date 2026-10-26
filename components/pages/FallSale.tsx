import { headerFallbackFont } from "@/components/sections/archiveHeaderFont";
import Image from "next/image";
import Link from "next/link";
import type { fallSalePage } from "@/lib/data/pages/fallSale";

/** Fall Sale (/fall-sale/): the old page's custom landing page, in the system font on a white page. */
export function FallSaleView({ data }: { data: typeof fallSalePage }) {
  const { experience: exp, visit, terms } = data;
  return (
    <div className="bg-white font-sans">
      <style>{headerFallbackFont}</style>
      <div className="mx-auto max-w-[1420px] p-[10px]">
        <div className="bg-[#3d0a10] px-[20px] py-[12px] text-center">
          <span className="text-[18px] leading-[27px] font-bold tracking-[0.4px] text-[#d9a441]">{data.topBar}</span>
        </div>
      </div>

      <div className="p-[10px]">
        <div className="relative min-h-[560px] overflow-hidden">
          <Image src={data.hero.src} alt={data.hero.alt} fill loading="eager" fetchPriority="high" sizes="(max-width: 767px) 370px, 100vw" className="object-cover object-center" />
        </div>
      </div>

      <div className="mt-[40px] bg-[#faf5ea] px-[20px] pt-[90px] pb-[89px]">
        <div className="mx-auto max-w-[1400px] space-y-[20px] md:px-0">
          <div className="bg-[#faf5ea] px-[20px] py-[80px]">
            <div className="mx-auto flex max-w-[1140px] flex-col justify-center gap-[24px] md:flex-row">
              {data.cards.map((c) => (
                <div key={c.label} className="flex-1 rounded-[8px] border-t-[5px] border-[#c9a227] bg-white px-[24px] py-[44px] text-center">
                  <span className="block text-[46px] leading-[46px] font-extrabold text-[#5e0f1e]">{c.value}</span>
                  <span className="mt-[10px] block text-[14px] leading-[14px] tracking-[3px] text-[#96742a] uppercase">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white px-[20px] py-[80px] text-center">
            <span className="mb-[16px] block text-[42px] leading-[42px] font-bold text-[#5e0f1e]">{exp.heading}</span>
            <span className="mb-[24px] block text-[22px] leading-[22px] text-[#96742a]">{exp.subheading}</span>
            <span className="mx-auto mb-[48px] block max-w-[800px] text-[18px] leading-[1.6] text-[#444]">{exp.text}</span>
            <div className="mx-auto grid max-w-[1140px] grid-cols-2 gap-[20px] md:grid-cols-4">
              {exp.gallery.map((g) => (
                <figure key={g.caption}>
                  <Image src={g.image.src} alt={g.image.alt} width={g.image.width} height={g.image.height} sizes="(max-width: 767px) 145px, 270px" className="block h-[220px] w-full rounded-[8px] object-cover" />
                  <figcaption className="mt-[12px] text-[15px] leading-[21px] font-semibold text-[#5e0f1e] italic">{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="bg-[#4a0c1a] px-[20px] py-[80px] text-center">
            {visit.lines.map((l) => (
              <span key={l} className="mb-[12px] block text-[20px] leading-[20px] text-[#f6ecd6]">{l}</span>
            ))}
            <span className="mt-[24px] mb-[36px] block text-[17px] leading-[17px] text-[#f6ecd6]">{visit.address}</span>
            <Link href={visit.primary.href} className="mx-[8px] mt-[8px] inline-block rounded-[6px] bg-[#c9a227] px-[36px] py-[16px] text-[16px] leading-[16px] font-bold text-[#333]">
              {visit.primary.label}
            </Link>
            <a href={visit.secondary.href} className="mx-[8px] mt-[8px] inline-block rounded-[6px] border-2 border-white px-[36px] py-[16px] text-[16px] leading-[16px] font-bold text-white">
              {visit.secondary.label}
            </a>
          </div>

          <div className="bg-[#faf5ea] px-[20px] py-[48px] text-center">
            <span className="mb-[16px] block text-[24px] leading-[24px] font-bold text-[#5e0f1e]">{terms.heading}</span>
            <span className="mx-auto block max-w-[800px] text-[14px] leading-[1.6] text-[#777]">{terms.text}</span>
          </div>
        </div>
      </div>

      <div className="mt-[20px] p-[10px]">
        <Image src={data.bottomImage.src} alt={data.bottomImage.alt} width={data.bottomImage.width} height={data.bottomImage.height} sizes="(max-width: 767px) 370px, 800px" className="mx-auto block h-auto w-full max-w-[800px]" />
      </div>
    </div>
  );
}
