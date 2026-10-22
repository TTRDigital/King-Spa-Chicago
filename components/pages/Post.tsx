import Image from "next/image";
import Link from "next/link";
import type { blogPage } from "@/lib/data/pages/blog";
import type { Post } from "@/lib/data/posts";
import { absoluteUrl } from "@/lib/site";
import { images } from "@/lib/data/images";
import { postDate } from "@/components/sections/postDate";
import { PostToc } from "@/components/sections/PostToc";

const SHARE = [
  { name: "facebook", url: (u: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(u)}`, icon: <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />, box: "0 0 512 512" },
  { name: "x-twitter", url: (u: string, t: string) => `https://x.com/intent/post?text=${encodeURIComponent(t)}&url=${encodeURIComponent(u)}`, icon: <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />, box: "0 0 512 512" },
  { name: "linkedin", url: (u: string) => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(u)}`, icon: <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />, box: "0 0 448 512" },
];

/**
 * Blog post template, as on the old site: red banner with the blog H1, a
 * Table of Contents column, byline, featured image, the post text (shown as
 * written, Markdown symbols included), CTA box, related-articles row, share
 * buttons and the author box.
 */
export function PostView({ post, blog }: { post: Post; blog: typeof blogPage; posts: Post[] }) {
  const t = blog.post;
  const url = absoluteUrl(`/${post.category}/${post.slug}/`);
  const lion = images.subtract;
  return (
    <>
      <section className="banner-red h-[526px] bg-cover bg-left-top pt-[244px] text-center md:h-[613px]">
        <h2 id="blog-heading" className="font-sans text-[32px] leading-[32px] font-medium text-sand">{t.bannerKorean}</h2>
        <h1 className="mt-[20px] font-recoleta text-[73px] leading-[73px] font-medium text-white">{t.heading}</h1>
      </section>

      <section className="bg-cream px-[15px] py-[50px] lg:px-0">
        <div className="lg:ml-[7.7%] lg:mr-[1.74%] lg:grid lg:grid-cols-[24.85%_75.15%]">
          <div className="px-[10px]">
            <PostToc title={t.tocTitle} items={[{ label: t.bannerKorean, href: "#blog-heading" }]} />
          </div>

          <div className="px-[10px]">
            <div className="mt-[17px] flex items-start">
              <div className="relative h-[35px] w-[35px] shrink-0">
                <Image src={t.bylineIcon.src} alt={t.bylineIcon.alt} width={t.bylineIcon.width} height={t.bylineIcon.height} unoptimized className="absolute top-0 left-[-6px] h-[35px] w-[32px] max-w-none" />
              </div>
              <div className="ml-[10px]">
                <h5 className="font-mulish text-[12px] leading-[14.4px] font-normal text-[#022a3e]">{t.bylineName}</h5>
                <p className="font-mulish text-[10px] leading-[15px] text-[#929292]">{postDate(post.date).date}</p>
              </div>
            </div>

            <Image src={post.image.src} alt={post.image.alt} width={post.image.width} height={post.image.height} sizes="(max-width: 1024px) 100vw, 960px" priority fetchPriority="high" className="mt-[15px] h-[500px] w-full object-cover" />

            <div className="mt-[20px] font-sans text-[16px] leading-[24px] text-body">
              {post.body.map((para, i) => (
                <p key={i} className="mb-[14.4px] whitespace-pre-line">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-[34px] rounded-[22px] bg-rust px-[24px] pt-[40px] pb-[60px] text-center text-white md:px-[50px] md:py-[60px]">
              <h2 className="font-recoleta text-[30px] leading-[32px] font-normal md:text-[34px] md:leading-[34px]">{t.cta.heading}</h2>
              <div className="mt-[20px] font-mulish text-[14px] leading-[21px] md:px-[60px] md:text-[15px] md:leading-[22.5px]">{t.cta.text}</div>
              <a href={t.cta.button.href} className="mt-[30px] inline-block rounded-[4px] border border-maroon bg-maroon p-[18px] font-mulish text-[14px] leading-[14px] font-bold text-white uppercase md:mt-[20px] md:px-[20px] md:py-[15px]">
                {t.cta.button.label}
              </a>
            </div>

            <div className="mt-[40px] px-[10px] md:flex md:items-start md:justify-between">
              <h2 className="font-recoleta text-[24px] leading-[24px] font-normal text-maroon md:text-[32px] md:leading-[32px]">{t.relatedHeading}</h2>
              <Link href={t.viewAll.href} className="mt-[20px] flex items-center font-mulish text-[14px] leading-[21px] font-semibold text-maroon md:mt-0">
                <svg viewBox="0 0 448 512" width="13" height="13" fill="currentColor" aria-hidden="true">
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                </svg>
                <span className="pl-[5px]">{t.viewAll.label}</span>
              </Link>
            </div>

            <div className="mt-[40px] flex items-center justify-end px-[10px] md:mt-[20px]">
              <h2 className="mr-[10px] font-dmserif text-[20px] leading-[20px] font-normal text-[#022a3e]">{t.shareLabel}</h2>
              <ul className="flex">
                {SHARE.map((s) => (
                  <li key={s.name}>
                    <a href={s.url(url, post.title)} target="_blank" rel="noopener" aria-label={`Share on ${s.name}`} className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-maroon bg-[linear-gradient(90deg,rgba(0,0,0,0.12),rgba(0,0,0,0))] text-white">
                      <svg viewBox={s.box} width="18" height="18" fill="currentColor" aria-hidden="true">{s.icon}</svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[40px] px-[10px] pb-[19px] md:flex md:items-start md:pb-[10px]">
              <Image src={lion.src} alt={lion.alt} width={lion.width} height={lion.height} unoptimized className="ml-[78px] h-[216px] w-[107px] md:ml-[13px] md:w-[107px] md:shrink-0" />
              <div className="mt-[10px] md:mt-[10px] md:ml-[91px]">
                <p className="font-mulish text-[14px] leading-[25.2px] text-[#022a3e] md:text-[16px] md:leading-[28.8px]">{t.authorIntro}</p>
                <h4 className="font-mulish text-[20px] leading-[25.6px] font-bold text-[#022a3e] md:text-[24px] md:leading-[30.72px]">{t.authorName}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
