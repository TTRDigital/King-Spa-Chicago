"use client";

import { useState } from "react";
import { Inline } from "@/components/ui/RichText";

/** paragraph: the old site showed this answer as a paragraph, with paragraph spacing around it. */
type Item = { question: string; answer: string; paragraph?: boolean };

const Chevron = ({ up }: { up: boolean }) => (
  <svg viewBox="0 0 448 512" width="16" height="16" aria-hidden="true" className="shrink-0 fill-current">
    {up ? (
      <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
    ) : (
      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
    )}
  </svg>
);

/**
 * FAQ accordions of the body scrub pages (first question open, as on the old site).
 * "body-scrub": bold question (the old site's Recoleta bold fell back to sans), Recoleta answer, blue open icon.
 * "ritual": Recoleta question, Mulish answer, maroon icons (men's and women's pages).
 */
export function ScrubFaq({ items, variant }: { items: Item[]; variant: "body-scrub" | "ritual" }) {
  const [open, setOpen] = useState<number | null>(0);
  const ritual = variant === "ritual";
  return (
    <div className={ritual ? "mt-[73px] px-[15px] md:mt-[90px] lg:px-0" : "mt-[85px] px-[15px] md:mt-[89px] lg:mt-[92px] lg:px-0"}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.question} className={ritual ? "pb-[25px] md:pb-[40px]" : "pb-[30px] md:pb-[40px] lg:pb-[45px]"}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${variant}-faq-${i}`}
              id={`${variant}-faq-q-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-[20px] text-left md:pr-[33px]"
            >
              <span
                className={
                  ritual
                    ? "block py-[2.5px] font-recoleta text-[16px] leading-[17px] tracking-[0.1px] text-maroon max-md:max-w-[85.5%] md:py-0 md:text-[18px] md:leading-[18px] lg:text-[22px] lg:leading-[30px]"
                    : "font-[Arial,Helvetica,sans-serif] text-[16px] leading-[17px] font-bold tracking-[0.1px] text-maroon md:text-[18px] md:leading-[18px] lg:text-[22px] lg:leading-[25px]"
                }
              >
                {f.question}
              </span>
              <span className={ritual ? "text-maroon" : isOpen ? "text-[#00aaff]" : "text-[#022a3e]"}>
                <Chevron up={isOpen} />
              </span>
            </button>
            <div id={`${variant}-faq-${i}`} role="region" aria-labelledby={`${variant}-faq-q-${i}`} hidden={!isOpen} className={f.paragraph ? "mb-[15px] md:mt-[10px] md:mb-[5px]" : undefined}>
              <p
                className={
                  ritual
                    ? "rich pt-[22px] pr-[15px] pb-[12px] font-mulish text-[14px] leading-[21px] text-[#0e0e0e] md:pt-[30px] md:pr-[30px] md:pb-[4px] md:text-[16px] md:leading-[24px] lg:pr-[80px]"
                    : "rich pt-[26px] pr-[17px] pb-[22px] font-recoleta text-[14px] leading-[21px] text-maroon md:pt-[32px] md:pr-[45px] md:pb-[17px] md:text-[16px] md:leading-[24px] lg:pt-[34px] lg:pr-[80px] lg:pb-[15px]"
                }
              >
                <Inline text={f.answer} />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
