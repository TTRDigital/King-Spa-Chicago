"use client";

import { useState } from "react";

const CARET_RIGHT = "M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z";
const CARET_UP = "M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z";

/**
 * Phone-only "OPENING HOURS" toggle from the old footer (the desktop shows the HOURS list instead).
 * As the old Elementor toggle: a caret pointing right (up when open), the line under the title
 * moves under the answer when it opens, the answer in Roboto.
 */
export function FooterHoursToggle({ label, text }: { label: string; text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="footer-hours"
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between pt-[9.5px] pb-[10.5px] text-left font-mulish text-[18px] leading-[18px] font-semibold text-white ${open ? "" : "border-b border-white"}`}
      >
        <span>{label}</span>
        <svg viewBox={open ? "0 0 320 512" : "0 0 192 512"} width="16" height="16" fill="currentColor" aria-hidden="true">
          <path d={open ? CARET_UP : CARET_RIGHT} />
        </svg>
      </button>
      <div id="footer-hours" hidden={!open} className="border-b border-white py-[5px]">
        <p className="mb-[10px] font-roboto text-[16px] leading-[24px] text-white">{text}</p>
      </div>
    </div>
  );
}
