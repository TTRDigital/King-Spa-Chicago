"use client";

import { useState } from "react";

const Chevron = ({ up }: { up: boolean }) => (
  <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor" aria-hidden="true">
    {up ? (
      <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" />
    ) : (
      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
    )}
  </svg>
);

/**
 * The old post template's "Table of Contents" box: lists the page's headings
 * (on the old site only the banner's Korean heading qualified), open on
 * desktop and folded on tablets and phones, sticky while scrolling.
 */
export function PostToc({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  // null = not toggled yet: open on desktop, folded below 1025px (CSS decides, so no layout flash).
  const [open, setOpen] = useState<boolean | null>(null);
  const toggle = () => setOpen(open === null ? !window.matchMedia("(min-width: 1025px)").matches : !open);
  return (
    <div className="lg:sticky lg:top-[120px]">
      <div className="flex items-center justify-center lg:justify-start">
        <h4 className="font-[Arial,Helvetica,sans-serif] text-[20px] leading-[24px] font-bold text-maroon">{title}</h4>
        <button type="button" aria-expanded={open ?? undefined} aria-controls="post-toc" aria-label="Open or close the table of contents" onClick={toggle} className="ml-[4px] text-maroon">
          {open === null ? (
            <>
              <span className="lg:hidden"><Chevron up={false} /></span>
              <span className="hidden lg:inline"><Chevron up /></span>
            </>
          ) : (
            <Chevron up={open} />
          )}
        </button>
      </div>
      <ul id="post-toc" className={open === null ? "hidden lg:block" : open ? "block" : "hidden"}>
        {items.map((it) => (
          <li key={it.href}>
            <a href={it.href} className="block w-fit font-mulish text-[14px] leading-[21px] text-[#ff0000] underline">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
