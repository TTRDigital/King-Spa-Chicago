"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { SiteSettings } from "@/lib/data/site";

/**
 * The old site's Fall Sale popup: opens 2 seconds after the page loads and
 * links to the offer page. It stops showing after "showUntil" (Chicago date),
 * so an ended offer never appears. Closed with the X, Escape or a click outside.
 * As on live, the X takes the focus when it opens (so the browser shows its focus ring round it).
 */
export function PromoPopup({ popup }: { popup: SiteSettings["promoPopup"] }) {
  const [open, setOpen] = useState(false);
  const close = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!popup.enabled) return;
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago" }).format(new Date());
    if (popup.showUntil && today > popup.showUntil) return;
    const t = window.setTimeout(() => setOpen(true), 2000);
    return () => window.clearTimeout(t);
  }, [popup.enabled, popup.showUntil]);
  useEffect(() => {
    if (!open) return;
    close.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  if (!open) return null;
  return (
    // As live: no margin round it (full width on phones), no entrance animation, a plain white × at the top, 5% from the right (the box behind it is in the image).
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80" onClick={() => setOpen(false)} role="presentation">
      <div role="dialog" aria-modal="true" aria-label={popup.image.alt} className="relative w-[640px] max-w-full shadow-[2px_8px_23px_3px_rgba(0,0,0,0.2)]" onClick={(e) => e.stopPropagation()}>
        <Link href={popup.href} onClick={() => setOpen(false)} className="block">
          <Image src={popup.image.src} alt={popup.image.alt} width={popup.image.width} height={popup.image.height} sizes="(max-width: 639px) 100vw, 640px" className="block h-auto w-full" />
        </Link>
        <button ref={close} type="button" aria-label="Close" onClick={() => setOpen(false)} className="absolute top-0 right-[5%] flex h-[22px] w-[22px] items-center justify-center text-white/[0.97]">
          <svg viewBox="0 0 1000 1000" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
