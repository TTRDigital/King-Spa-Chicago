"use client";

import { useState } from "react";

/** Phone-only "OPENING HOURS" toggle from the old footer (the desktop shows the HOURS list instead). */
export function FooterHoursToggle({ label, text }: { label: string; text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-[18px] border-b border-white md:hidden">
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-[6px] text-left font-[Arial,Helvetica,sans-serif] text-[18px] leading-[18px] text-white">
        {label}
        <svg viewBox="0 0 6 10" width="6" height="10" fill="currentColor" aria-hidden="true" className={open ? "rotate-90" : ""}>
          <path d="M0 0l6 5-6 5z" />
        </svg>
      </button>
      {open ? <p className="pb-[10px] font-mulish text-[16px] leading-[24px] text-white">{text}</p> : null}
    </div>
  );
}
