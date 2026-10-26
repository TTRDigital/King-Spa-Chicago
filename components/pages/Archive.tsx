import { headerFallbackFont } from "@/components/sections/archiveHeaderFont";
import Image from "next/image";
import Link from "next/link";
import type { blogPage } from "@/lib/data/pages/blog";
import type { Post } from "@/lib/data/posts";

/**
 * Category and author archives in the old theme's plain style (Hello theme:
 * system font, pink post titles, its stepped column: full width with 10px
 * padding, the title padded another 10px, then 500 / 600 / 800 / 1140px from 576 / 768 / 992 / 1200px). "Category: Uncategorized" —
 * the part after the colon is a span, as on the old site.
 */
/** Hello Elementor's .site-main widths. */
export const HELLO_COLUMN = "mx-auto px-[10px] min-[576px]:max-w-[500px] min-[576px]:px-0 min-[768px]:max-w-[600px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]";

export function ArchiveView({ title, posts }: { title: string; posts: Post[]; blog: typeof blogPage }) {
  const [prefix, ...rest] = title.split(": ");
  return (
    <div className="bg-white">
      <style>{headerFallbackFont}</style>
      <div className={HELLO_COLUMN}>
        <h1 className="mt-[8px] mb-[16px] px-[10px] font-sans text-[40px] leading-[48px] font-medium text-body min-[576px]:px-0">
          {`${prefix}: `}
          <span>{rest.join(": ")}</span>
        </h1>
        {posts.map((p, i) => {
          const href = `/${p.category}/${p.slug}/`;
          return (
            <article key={p.slug} className="pb-[14px]">
              <h2 className="font-sans text-[32px] leading-[38.4px] font-medium">
                <Link href={href} className="text-[#cc3366]">
                  {p.title}
                </Link>
              </h2>
              <Link href={href} className="mt-[16px] block" tabIndex={-1} aria-hidden="true">
                <Image src={p.image.src} alt={p.image.alt} width={p.image.width} height={p.image.height} sizes="(max-width: 1140px) 100vw, 1140px" {...(i === 0 ? { priority: true, fetchPriority: "high" as const } : {})} className="h-auto w-full" />
              </Link>
              <p className="mt-[6px] font-sans text-[16px] leading-[24px] text-body">{p.excerpt}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
