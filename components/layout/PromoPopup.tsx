"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { SiteSettings } from "@/lib/data/site";

/**
 * The old site's Fall Sale popup: opens 2 seconds after the page loads and
 * links to the offer page. It stops showing after "showUntil" (Chicago date),
 * so an ended offer never appears. Closed with the X, Escape or a click outside.
 */
export function PromoPopup({ popup }: { popup: SiteSettings["promoPopup"] }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!popup.enabled) return;
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago" }).format(new Date());
    if (popup.showUntil && today > popup.showUntil) return;
    const t = window.setTimeout(() => setOpen(true), 2000);
    return () => window.clearTimeout(t);
  }, [popup.enabled, popup.showUntil]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-[10px]" onClick={() => setOpen(false)} role="presentation">
      <div role="dialog" aria-modal="true" aria-label={popup.image.alt} className="relative w-[640px] max-w-full animate-[popin_.4s_ease-out]" onClick={(e) => e.stopPropagation()}>
        <Link href={popup.href} onClick={() => setOpen(false)} className="block">
          <Image src={popup.image.src} alt={popup.image.alt} width={popup.image.width} height={popup.image.height} sizes="640px" className="block h-auto w-full" />
        </Link>
        <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="absolute right-[18px] top-[-2px] flex h-[26px] w-[26px] items-center justify-center rounded-[3px] border-2 border-white bg-black/60 text-white">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="3" /></svg>
        </button>
      </div>
    </div>
  );
}
