import Image from "next/image";
import Link from "next/link";
import type { blogPage } from "@/lib/data/pages/blog";
import type { Post } from "@/lib/data/posts";
import { firstWords, postDate } from "@/components/sections/postDate";

/** Blog (/blog/): red banner, then the Elementor posts grid (one card per post, 3 columns). */
export function BlogView({ data, posts }: { data: typeof blogPage; posts: Post[] }) {
  return (
    <div className="bg-white">
      <section className="banner-red h-[455px] bg-cover bg-left-top pt-[244px] text-center md:h-[636px]">
        <h2 className="font-sans text-[32px] leading-[32px] font-medium text-sand">{data.banner.korean}</h2>
        <h2 className="mt-[20px] font-recoleta text-[75px] leading-[75px] font-medium text-white md:text-[96px] md:leading-[96px]">{data.banner.title}</h2>
      </section>
      <div className="px-[20px] pt-[31px] md:px-[115px] md:pt-[115px] md:pb-[170px]">
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[57px]">
          {posts.map((p, i) => {
            const href = `/${p.category}/${p.slug}/`;
            const { date, time } = postDate(p.date);
            return (
              <article key={p.slug} className="relative flex flex-col overflow-hidden rounded-[11px] border border-[#c0c0c0] bg-white">
                {/* As on the old site: the box is 50% (phones) / 80% of its width tall; the photo fills its height, centered, scaled 1.01. */}
                <Link href={href} className="relative block h-0 overflow-hidden pb-[50%] md:pb-[80%]" tabIndex={-1} aria-hidden="true">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    width={p.image.width}
                    height={p.image.height}
                    sizes="(max-width: 767px) 524px, 872px"
                    className="absolute top-1/2 left-1/2 h-full w-auto max-w-none"
                    style={{ transform: "translate(-50%, -50%) scale(1.01)" }}
                    {...(i === 0 ? { priority: true, fetchPriority: "high" as const } : {})}
                  />
                </Link>
                <div className="relative px-[14px] pb-[20px] md:px-[14px]">
                  <Image src={data.card.avatar.src} alt={data.card.avatar.alt} width={60} height={60} sizes="60px" className="absolute top-[-30px] left-[14px] h-[60px] w-[60px] rounded-full" />
                  <h3 className="pt-[45px] font-[Arial,Helvetica,sans-serif] text-[18px] leading-[21.6px] font-semibold text-maroon capitalize md:text-[26px] md:leading-[31.2px]">
                    <Link href={href}>{p.title}</Link>
                  </h3>
                  <p className="mt-[10px] font-mulish text-[14px] leading-[21px] font-light text-[#777777] md:mt-[18px]">{firstWords(p.excerpt, data.card.excerptWords)}</p>
                  <Link href={href} className="mt-[22px] block w-fit font-recoleta text-[14px] leading-[14px] text-maroon capitalize italic underline md:mt-[20px] md:text-[16px] md:leading-[16px]">
                    {data.card.readMore}
                  </Link>
                </div>
                {/* Inline spans in a block line, with the spaces WordPress left around each value (they show as gaps). */}
                <div className="mt-auto border-t border-[#1c244b] px-[14px] py-[10px] font-mulish text-[20px] leading-[22px] font-semibold text-[#adadad] capitalize md:text-[11px] md:leading-[12.1px]">
                  <span>{`${p.authorName} `}</span>
                  <span className="before:mx-[5px] before:content-['•']">{` ${date} `}</span>
                  <span className="before:mx-[5px] before:content-['•']">{` ${time} `}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
