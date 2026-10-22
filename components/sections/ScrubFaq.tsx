"use client";

import { useState } from "react";
import { Inline } from "@/components/ui/RichText";

type Item = { question: string; answer: string };

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
    <div className={ritual ? "mt-[56px] px-[15px] md:mt-[90px] md:px-0" : "mt-[50px] px-[15px] md:mt-[92px] md:px-0"}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.question} className={ritual ? "pb-[25px] md:pb-[40px]" : "pb-[30px] md:pb-[45px]"}>
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
                    ? "font-recoleta text-[16px] leading-[16px] tracking-[0.1px] text-maroon md:text-[22px] md:leading-[30px]"
                    : "font-[Arial,Helvetica,sans-serif] text-[16px] leading-[17px] font-bold tracking-[0.1px] text-maroon md:text-[22px] md:leading-[25px]"
                }
              >
                {f.question}
              </span>
              <span className={ritual ? "text-maroon" : isOpen ? "text-[#00aaff]" : "text-[#022a3e]"}>
                <Chevron up={isOpen} />
              </span>
            </button>
            <div id={`${variant}-faq-${i}`} role="region" aria-labelledby={`${variant}-faq-q-${i}`} hidden={!isOpen}>
              <p
                className={
                  ritual
                    ? "rich pt-[10px] pr-0 pb-[0px] font-mulish text-[14px] leading-[21px] text-[#0e0e0e] md:pt-[20px] md:pr-[80px] md:text-[16px] md:leading-[24px]"
                    : "rich pt-[26px] font-recoleta text-[14px] leading-[21px] text-maroon md:pt-[34px] md:pr-[80px] md:text-[16px] md:leading-[24px]"
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
