"use client";

import Image from "next/image";
import { useState } from "react";
import type { homePage } from "@/lib/data/pages/home";

type Tab = (typeof homePage)["sanctuary"]["tabs"][number];

/**
 * "Explore Our Sanctuary of Healing": tab buttons, then on desktop a list of
 * rooms beside a large photo card (click a room to show it), and on phones an
 * accordion with the photo under the open room, as on the old site. The old
 * widget's own breakpoints: accordion up to 640px, a 280px list column and
 * 440px card up to 900px, the full layout above.
 */
export function HomeTabs({ tabs }: { tabs: Tab[] }) {
  const [tab, setTab] = useState(0);
  const [item, setItem] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const t = tabs[tab] ?? tabs[0];
  const current = t.items[item] ?? t.items[0];

  const choose = (i: number) => {
    setTab(i);
    setItem(0);
    setOpen(0);
  };

  return (
    <div>
      <div role="tablist" aria-label="Areas" className="mt-[40px] flex flex-wrap gap-[8px] md:mt-[36px] min-[641px]:gap-[10px]">
        {tabs.map((x, i) => (
          <button
            key={x.label}
            type="button"
            role="tab"
            id={`htw-tab-${i}`}
            aria-selected={tab === i}
            aria-controls="htw-panel"
            onClick={() => choose(i)}
            className={`grow px-[16px] py-[10px] text-center font-mulish text-[13px] leading-[19.5px] font-semibold whitespace-nowrap text-white transition-colors min-[641px]:grow-0 min-[641px]:px-[22px] min-[641px]:py-[12px] min-[641px]:text-[14px] min-[641px]:leading-[21px] ${
              tab === i ? "rounded-[5px_30px_5px_5px] bg-wine" : "rounded-[5px] bg-rose hover:bg-wine"
            }`}
          >
            {x.label}
          </button>
        ))}
      </div>

      <div id="htw-panel" role="tabpanel" aria-labelledby={`htw-tab-${tab}`} className="mt-[27px] min-[641px]:mt-[40px] min-[641px]:flex min-[641px]:items-start min-[641px]:gap-[28px] min-[901px]:gap-[40px]">
        <div className="min-[641px]:w-[280px] min-[641px]:shrink-0 min-[901px]:w-[340px]">
          <h2 className="font-mulish text-[28px] leading-[33.6px] font-bold text-cocoa min-[641px]:text-[30px] min-[641px]:leading-[36px] min-[901px]:text-[38px] min-[901px]:leading-[45.6px]">{t.heading}</h2>
          <h3 className="mt-[10px] font-mulish text-[12px] leading-[14.4px] font-bold tracking-[0.5px] text-wine min-[641px]:mt-[16px] min-[641px]:text-[13px] min-[641px]:leading-[15.6px]">{t.subheading}</h3>
          <p className="mt-[14px] font-mulish text-[14px] leading-[22.4px] text-umber min-[641px]:text-[15px] min-[641px]:leading-[24px]">{t.text}</p>

          {/* Desktop: list of rooms */}
          <ul className="mt-[24px] hidden min-[641px]:block">
            {t.items.map((x, i) => (
              <li key={x.title} className="border-b border-[rgba(74,28,26,0.08)] py-[10px] last:border-b-0">
                <button
                  type="button"
                  aria-pressed={item === i}
                  onClick={() => setItem(i)}
                  onMouseEnter={() => setItem(i)}
                  className={`text-left font-mulish text-[16px] leading-[24px] min-[901px]:text-[18px] min-[901px]:leading-[27px] ${item === i ? "font-extrabold text-wine underline underline-offset-[4px]" : "font-semibold text-cocoa hover:text-wine"}`}
                >
                  {x.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Phones: accordion */}
          <div className="mt-[21px] min-[641px]:hidden">
            {t.items.map((x, i) => (
              <div key={x.title} className="border-b border-[rgba(74,28,26,0.12)]">
                <button
                  type="button"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`flex w-full items-center justify-between px-[4px] py-[16px] text-left font-mulish text-[17px] leading-[25.5px] ${open === i ? "font-extrabold text-wine" : "font-semibold text-cocoa"}`}
                >
                  {x.title}
                  <span aria-hidden="true" className={`flex shrink-0 items-center justify-center rounded-full bg-wine font-mulish text-[16px] leading-[16px] font-light text-white transition-transform ${open === i ? "h-[24px] w-[24px] rotate-45" : "h-[24px] w-[24px]"}`}>
                    +
                  </span>
                </button>
                {open === i ? (
                  <div className="relative mt-[4px] mb-[16px] h-[260px] overflow-hidden rounded-[16px_80px_16px_16px]">
                    <Image src={x.image.src} alt={x.image.alt} fill sizes="370px" className="object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_40%,rgba(0,0,0,0.65)_100%)]" />
                    <p className="absolute inset-x-[20px] bottom-[20px] font-mulish text-[14px] leading-[21px] text-white/[0.92]">{x.text}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: photo card of the chosen room */}
        <div className="relative hidden h-[440px] grow overflow-hidden rounded-[20px_120px_20px_20px] min-[641px]:block min-[901px]:h-[520px] min-[901px]:rounded-[24px_180px_24px_24px]">
          <Image key={current.image.src} src={current.image.src} alt={current.image.alt} fill sizes="(max-width: 1440px) 71vw, 1020px" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,0.7)_100%)]" />
          <div className="absolute inset-x-[32px] bottom-[31px]">
            <h4 className="font-mulish text-[30px] leading-[36px] font-bold text-white">{current.title}</h4>
            <p className="mt-[8px] font-mulish text-[15px] leading-[22.5px] text-white/95">{current.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
