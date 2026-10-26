"use client";

import { useState } from "react";
import { Inline } from "@/components/ui/RichText";

/**
 * FAQ in a rounded card with a soft shadow, as on the First-Time Guide: questions
 * in the bold sans the old site fell back to, chevrons on the right, first open.
 */
export function CardFaq({ heading, items }: { heading: string; items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-[1380px] px-[20px] pt-[10px] pb-[80px] md:px-0 md:pb-[81px]">
      <div className="mx-auto max-w-[1235px] rounded-[20px] bg-cream px-[15px] py-[40px] md:rounded-[35px] shadow-[0_22px_37.7px_rgba(121,121,121,0.2)] md:px-[130px] md:pt-[100px] md:pb-[131px]">
        <h2 className="text-center font-tang font-normal text-[26px] leading-[26px] text-maroon md:text-[48px] md:leading-[50px]">{heading}</h2>
        <div className="mt-[70px] md:mt-[68px]">
          {items.map((f, i) => (
            <div key={f.question}>
              <h3>
                <button
                  type="button"
                  aria-expanded={open === i}
                  aria-controls={`card-faq-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`relative flex w-full items-center py-[15px] pr-[30px] text-left font-[Arial,Helvetica,sans-serif] text-[16px] leading-[17px] font-bold tracking-[0.1px] md:py-[24px] md:text-[22px] md:leading-[22px] ${open === i ? "text-maroon" : "text-black"}`}
                >
                  {f.question}
                  <svg viewBox="0 0 12 8" width="12" height="8" aria-hidden="true" className={`absolute right-0 top-1/2 -translate-y-1/2 ${open === i ? "rotate-180 text-[#3a8dde]" : "text-[#022a3e]"}`}>
                    <path d="M1 1.5l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </button>
              </h3>
              <div id={`card-faq-${i}`} hidden={open !== i} className="pt-[10px] pr-[15px] pb-[38px] md:pt-[12px] md:pr-0 md:pb-[37px]">
                <p className="rich font-mulish text-[14px] leading-[21px] text-[#022a3e] md:text-[16px] md:leading-[24px] [&_a]:text-[#cc3366] [&_a]:no-underline">
                  <Inline text={f.answer} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
