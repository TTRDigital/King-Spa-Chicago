"use client";

import { useState } from "react";
import { Inline } from "@/components/ui/RichText";

/** The home page's FAQ: Elementor's default accordion look (system font, grey borders, +/− icons), first answer open. */
export function PlainFaq({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {items.map((f, i) => (
        <div key={f.question}>
          <h3>
            <button
              type="button"
              aria-expanded={open === i}
              aria-controls={`plain-faq-${i}`}
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-start gap-[10px] border border-[#d5d8dc] p-[10px] text-left font-sans text-[20px] leading-[30px] font-normal text-[#1f2124]"
            >
              <span aria-hidden="true" className="w-[14px] shrink-0 text-center font-bold">{open === i ? "−" : "+"}</span>
              {f.question}
            </button>
          </h3>
          <div id={`plain-faq-${i}`} hidden={open !== i} className="border border-[#d5d8dc] px-0 py-[22px]">
            <p className="rich font-sans text-[16px] leading-[16px] text-body">
              <Inline text={f.answer} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
