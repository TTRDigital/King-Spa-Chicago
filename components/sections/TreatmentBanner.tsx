import Image from "next/image";
import type { Img } from "@/lib/types";

/**
 * Red lion banner of the Facials, Massage, V-Steam and Sauna pages: a small
 * Korean word, a large Recoleta title and a subtitle (all h2 on the old site).
 * Sizes and paddings differ per page, so they come in as classes. The photo is
 * a real <img> with high priority: it is the largest thing above the fold.
 */
export function TreatmentBanner({
  korean,
  title,
  subtitle,
  image,
  className,
  koreanClassName,
  titleClassName,
  subtitleClassName,
}: {
  korean: string;
  title: string;
  subtitle: string;
  image: Img;
  className: string;
  koreanClassName: string;
  titleClassName: string;
  subtitleClassName: string;
}) {
  return (
    <section
      className={`relative isolate flex flex-col items-center gap-[20px] overflow-hidden text-center ${className}`}
    >
      <Image
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        priority
        fetchPriority="high"
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-left-top"
      />
      <h2 className={`m-0 text-sand ${koreanClassName}`}>{korean}</h2>
      <h2 className={`m-0 font-recoleta text-white ${titleClassName}`}>
        {title}
      </h2>
      <h2 className={`m-0 font-recoleta text-white ${subtitleClassName}`}>
        {subtitle}
      </h2>
    </section>
  );
}
