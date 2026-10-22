"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Img } from "@/lib/types";

/** Photo grid; a photo opens full size in a lightbox (arrows / Escape on the keyboard, focus returns to the photo). */
export function GalleryLightbox({ images }: { images: Img[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement | null>(null);
  const close = useCallback(() => {
    setOpen(null);
    opener.current?.focus();
  }, []);
  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + images.length) % images.length)), [images.length]);

  useEffect(() => {
    if (open === null) return;
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  const img = open === null ? null : images[open];
  return (
    <>
      <div className="grid grid-cols-3 gap-[10px] md:grid-cols-4 md:gap-x-[10px] md:gap-y-[9.5px]">
        {images.map((x, i) => (
          <button
            key={x.src + i}
            type="button"
            aria-label={`Open photo: ${x.alt}`}
            onClick={(e) => {
              opener.current = e.currentTarget;
              setOpen(i);
            }}
            className="relative block aspect-[4/3] overflow-hidden rounded-[10px]"
          >
            <Image src={x.src} alt={x.alt} fill sizes="(max-width: 767px) 33vw, 343px" className="object-cover transition-transform duration-300 hover:scale-105" />
          </button>
        ))}
      </div>
      {img ? (
        <div role="dialog" aria-modal="true" aria-label={img.alt} className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90" onClick={close}>
          <div className="relative h-[85vh] w-[92vw]" onClick={(e) => e.stopPropagation()}>
            <Image src={img.src} alt={img.alt} fill sizes="92vw" className="object-contain" />
          </div>
          <button ref={closeBtn} type="button" aria-label="Close" onClick={close} className="absolute right-[16px] top-[16px] p-[8px] text-white">
            <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.5" /></svg>
          </button>
          <button type="button" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-[10px] top-1/2 -translate-y-1/2 p-[10px] text-white">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M15 4l-8 8 8 8" /></svg>
          </button>
          <button type="button" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-[10px] top-1/2 -translate-y-1/2 p-[10px] text-white">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M9 4l8 8-8 8" /></svg>
          </button>
        </div>
      ) : null}
    </>
  );
}
