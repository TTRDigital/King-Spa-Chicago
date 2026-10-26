"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { bodyScrubPage } from "@/lib/data/pages/bodyScrub";

type Tab = (typeof bodyScrubPage)["explore"]["tabs"][number];

const Caret = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 192 512" width="9" height="16" aria-hidden="true" className={`shrink-0 fill-current transition-transform ${open ? "rotate-90 text-white" : "text-rust"}`}>
    <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
  </svg>
);

function Panel({ tab, id, tabId }: { tab: Tab; id: string; tabId: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div id={id} role="tabpanel" aria-labelledby={tabId} className="order-none flex w-full flex-col gap-[40px] px-[20px] pt-[30px] pb-[30px] md:flex-row md:gap-[20px] md:pt-[30px] md:pb-[50px]">
      <div className="md:w-[629px] md:shrink-0">
        {tab.items.map((it, i) => (
          <div key={it.title}>
            <button
              type="button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between border border-black/[0.02] py-[11px] pr-[10px] text-left font-[Arial,Helvetica,sans-serif] text-[16px] leading-[16px] font-bold text-white"
            >
              <span className="block flex-1 pl-px">{it.title}</span>
              <Caret open={open === i} />
            </button>
            {open === i ? <p className="pt-[5px] pb-[27px] font-mulish text-[14px] leading-[23.8px] text-white md:pr-[62px]">{it.text}</p> : null}
          </div>
        ))}
        <Link
          href={tab.button.href}
          className="mt-[20px] inline-block rounded-[4px] border border-rust bg-rust p-[18px] font-[Arial,Helvetica,sans-serif] text-[14px] leading-[14px] font-bold text-white uppercase md:px-[40px] md:py-[20px]"
        >
          <span className="block text-center">{tab.button.label}</span>
        </Link>
      </div>
      <div className="md:w-[629px] md:shrink-0">
        <Image src={tab.image.src} alt={tab.image.alt} width={tab.image.width} height={tab.image.height} sizes="(max-width: 767px) 330px, 629px" className="h-auto w-full" />
      </div>
    </div>
  );
}

/**
 * "Explore Our Body Scrub Treatments": Women's / Men's tabs, each with an
 * accordion of treatments, a button and a photo. On phones the tab buttons
 * stack with the open panel under its button, as on the old site.
 */
export function ScrubTreatmentTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  return (
    <div role="tablist" aria-label="Body scrub treatments" className="mt-[40px] flex flex-col pb-[10px] md:mt-[15px] md:pb-0 md:flex-row md:flex-wrap md:gap-x-[10px] md:gap-y-0">
      {tabs.map((t, i) => {
        const tabId = `scrub-tab-${i}`;
        const panelId = `scrub-panel-${i}`;
        const on = active === i;
        return [
          <button
            key={tabId}
            id={tabId}
            type="button"
            role="tab"
            aria-selected={on}
            aria-controls={panelId}
            onClick={() => setActive(i)}
            className={`rounded-[10px_30px_10px_10px] px-[35px] py-[15px] font-recoleta text-[18px] leading-[27px] md:order-first ${on ? "bg-rust text-white" : "bg-[#f1f2f3] text-[#54595f]"}`}
          >
            <span className="block text-center">{t.label}</span>
          </button>,
          on ? <Panel key={panelId} tab={t} id={panelId} tabId={tabId} /> : null,
        ];
      })}
    </div>
  );
}
