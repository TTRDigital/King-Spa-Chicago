"use client";

import { useState } from "react";
import { Inline } from "@/components/ui/RichText";

const MINUS = "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z";
const PLUS = "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z";

/**
 * The home page's FAQ: Elementor's default accordion look (system font, grey
 * borders, +/− icons), first answer open. The two small border stubs at the
 * answer's left edge are the old site's (its answer box is an inline element
 * split around the text). As there, each answer opens and closes on its own.
 */
export function PlainFaq({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number[]>([0]);
  return (
    <div>
      {items.map((f, i) => (
        <div key={f.question}>
          <h3>
            <button
              type="button"
              aria-expanded={open.includes(i)}
              aria-controls={`plain-faq-${i}`}
              onClick={() => setOpen(open.includes(i) ? open.filter((x) => x !== i) : [...open, i])}
              className="flex w-full items-center gap-[10px] border border-[#d5d8dc] p-[10px] text-left font-sans text-[20px] leading-[30px] font-normal text-[#1f2124]"
            >
              <svg aria-hidden="true" viewBox="0 0 448 512" width="13" height="15" className="shrink-0 fill-current">
                <path d={open.includes(i) ? MINUS : PLUS} />
              </svg>
              {f.question}
            </button>
          </h3>
          <div id={`plain-faq-${i}`} hidden={!open.includes(i)} className="relative py-[24px]">
            <span aria-hidden="true" className="absolute top-[-9px] left-0 h-[42px] w-[11px] border border-r-0 border-[#d5d8dc]" />
            <span aria-hidden="true" className="absolute bottom-[-9px] left-0 h-[42px] w-[11px] border border-l-0 border-[#d5d8dc]" />
            <p className="rich font-sans text-[16px] leading-[16px] text-body">
              <Inline text={f.answer} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
