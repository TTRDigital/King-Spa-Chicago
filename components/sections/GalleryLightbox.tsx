"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Img } from "@/lib/types";
import { LIGHTBOX_ICONS as I } from "./lightboxIcons";

type Photo = { image: Img; title: string };

const Icon = ({ d, className = "" }: { d: string; className?: string }) => (
  <svg viewBox="0 0 1000 1000" fill="currentColor" aria-hidden="true" className={className}>
    <path d={d} />
  </svg>
);

/* Header buttons as in Elementor's lightbox: a 20px icon with 5px round it. */
const tool = "absolute top-[15px] h-[30px] w-[30px] p-[5px] text-[rgba(237,237,237,0.9)] hover:text-white";

/**
 * Photo grid; a photo opens in the old site's lightbox (Elementor's): the
 * photo at its own size (never enlarged) within 70px of the edges, a looping
 * 300ms slide between photos, "1 / 16" counter, full screen, 3x zoom (drag to
 * look around), share menu and close, the photo's title underneath. Arrows /
 * Escape work on the keyboard; focus returns to the photo when it closes.
 */
export function GalleryLightbox({ photos }: { photos: Photo[] }) {
  const n = photos.length;
  // Position on the track [last, ...photos, first]; the clones at both ends make the loop seamless.
  const [pos, setPos] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [share, setShare] = useState(false);
  const [full, setFull] = useState(false);
  const dialog = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const drag = useRef<{ x: number; y: number; px: number; py: number; maxX: number; maxY: number } | null>(null);

  const index = pos === null ? 0 : (((pos - 1) % n) + n) % n;
  const photo = photos[index];
  const track = n ? [photos[n - 1], ...photos, photos[0]] : [];

  const resetZoom = () => {
    setZoom(false);
    setPan({ x: 0, y: 0 });
  };
  const close = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    setPos(null);
    setShare(false);
    setZoom(false);
    setPan({ x: 0, y: 0 });
    opener.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => {
      if (pos === null || pos < 1 || pos > n) return; // still sliding onto a clone
      setAnimate(true);
      setZoom(false);
      setPan({ x: 0, y: 0 });
      setShare(false);
      setPos(pos + d);
    },
    [pos, n],
  );

  useEffect(() => {
    if (pos === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pos, close, step]);

  const isOpen = pos !== null;
  useEffect(() => {
    if (!isOpen) return;
    dialog.current?.focus();
    const onFull = () => setFull(document.fullscreenElement === dialog.current);
    document.addEventListener("fullscreenchange", onFull);
    return () => document.removeEventListener("fullscreenchange", onFull);
  }, [isOpen]);

  // After sliding onto a clone, jump (unanimated) to the real photo it copies.
  const onSlid = () => {
    setAnimate(false);
    setPos((p) => (p === 0 ? n : p === n + 1 ? 1 : p));
  };

  const toggleZoom = () => (zoom ? resetZoom() : setZoom(true));
  const startDrag = (e: React.PointerEvent<HTMLImageElement>) => {
    if (!zoom) return;
    const img = e.currentTarget.getBoundingClientRect();
    const slide = e.currentTarget.closest("[data-slide]")!.getBoundingClientRect();
    // The zoomed photo may move until its edges meet the slide's.
    drag.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y, maxX: Math.max(0, (img.width - slide.width) / 2), maxY: Math.max(0, (img.height - slide.height) / 2) };
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
  };
  const moveDrag = (e: React.PointerEvent<HTMLImageElement>) => {
    const d = drag.current;
    if (!d) return;
    const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));
    setPan({ x: clamp(d.px + e.clientX - d.x, d.maxX), y: clamp(d.py + e.clientY - d.y, d.maxY) });
  };
  const endDrag = () => {
    drag.current = null;
    setDragging(false);
  };

  const pageUrl = typeof window === "undefined" ? "" : window.location.href.split("#")[0];
  const imageUrl = typeof window === "undefined" ? photo?.image.src : new URL(photo?.image.src ?? "", window.location.origin).href;

  return (
    <>
      <div className="grid grid-cols-3 gap-[10px] min-[767px]:grid-cols-2 min-[1024px]:grid-cols-4 min-[1024px]:gap-y-[9.5px]">
        {photos.map((x, i) => (
          <button
            key={x.image.src + i}
            type="button"
            aria-label={`Open photo: ${x.image.alt}`}
            onClick={(e) => {
              opener.current = e.currentTarget;
              setAnimate(false);
              setPos(i + 1);
            }}
            className="relative block aspect-[4/3] overflow-hidden rounded-[10px]"
          >
            <Image src={x.image.src} alt={x.image.alt} fill sizes="(max-width: 766px) 33vw, (max-width: 1023px) 50vw, 343px" className="object-cover transition-transform duration-300 hover:scale-105" />
          </button>
        ))}
      </div>
      {isOpen && photo ? (
        <div ref={dialog} tabIndex={-1} role="dialog" aria-modal="true" aria-label={photo.title} className="fixed inset-0 z-[300] animate-[lbfade_.3s_linear] overflow-hidden bg-black/80 outline-none">
          <div
            className="flex h-full"
            style={{ transform: `translateX(-${pos * 100}%)`, transition: animate ? "transform 300ms ease" : "none" }}
            onTransitionEnd={(e) => e.target === e.currentTarget && onSlid()}
          >
            {track.map((x, t) => {
              const active = t === pos;
              const near = Math.abs(t - pos) <= 1;
              return (
                <div key={t} data-slide="" aria-hidden={!active} className="relative h-full w-full shrink-0 overflow-hidden">
                  {/* A click on the dark area round the photo closes the lightbox, as on live. */}
                  <div className="absolute inset-0 flex items-center justify-center py-[70px] md:p-[70px]" onClick={(e) => e.target === e.currentTarget && close()}>
                    <Image
                      src={x.image.src}
                      alt={x.image.alt}
                      width={x.image.width}
                      height={x.image.height}
                      sizes={`${x.image.width}px`}
                      loading={near ? "eager" : "lazy"}
                      draggable={false}
                      onDoubleClick={active ? toggleZoom : undefined}
                      onPointerDown={active ? startDrag : undefined}
                      onPointerMove={active ? moveDrag : undefined}
                      onPointerUp={endDrag}
                      onPointerCancel={endDrag}
                      className={`h-auto min-w-0 shrink-0 rounded-[2px] shadow-[0_0_30px_rgba(0,0,0,0.3),0_0_8px_-5px_rgba(0,0,0,0.3)] ${active && zoom ? "cursor-move" : ""}`}
                      style={{
                        // Its own size, shrunk (never enlarged) to fit the space inside the 70px margins.
                        width: `min(${x.image.width}px, 100%, calc((100dvh - 140px) * ${x.image.width / x.image.height}))`,
                        transform: active && zoom ? `translate(${pan.x}px, ${pan.y}px) scale(3)` : undefined,
                        transition: dragging ? "none" : "transform 0.3s",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Previous / next: 15% of the width from 768px (icon centred), 20% below (icon at the edge). */}
          <button type="button" aria-label="Previous" onClick={() => step(-1)} className="absolute inset-y-0 left-0 flex w-[20%] items-center justify-start text-[25px] text-[rgba(237,237,237,0.9)] hover:text-white md:w-[15%] md:justify-center">
            <Icon d={I.chevronLeft} className="h-[1em] w-[1em]" />
          </button>
          <button type="button" aria-label="Next" onClick={() => step(1)} className="absolute inset-y-0 right-0 flex w-[20%] items-center justify-end text-[25px] text-[rgba(237,237,237,0.9)] hover:text-white md:w-[15%] md:justify-center">
            <Icon d={I.chevronRight} className="h-[1em] w-[1em]" />
          </button>

          <div className="absolute top-[19px] left-[20px] font-sans text-[15px] leading-[22.5px] text-[rgba(237,237,237,0.9)]">
            {index + 1} / {n}
          </div>
          <button type="button" aria-label="Fullscreen" aria-pressed={full} onClick={() => (full ? document.exitFullscreen() : dialog.current?.requestFullscreen())?.catch(() => {})} className={`${tool} right-[147px]`}>
            <Icon d={full ? I.minimize : I.expand} className="h-[20px] w-[20px]" />
          </button>
          <button type="button" aria-label="Zoom" aria-pressed={zoom} onClick={toggleZoom} className={`${tool} right-[103px]`}>
            <Icon d={zoom ? I.zoomOut : I.zoomIn} className="h-[20px] w-[20px]" />
          </button>
          <button type="button" aria-label="Share" aria-expanded={share} onClick={() => setShare((s) => !s)} className={`${tool} right-[59px]`}>
            <Icon d={I.share} className="h-[20px] w-[20px]" />
          </button>
          <button type="button" aria-label="Close (Esc)" onClick={close} className="absolute top-[13px] right-[15px] h-[30px] w-[30px] p-[5px] text-[rgba(237,237,237,0.9)] hover:text-white">
            <Icon d={I.close} className="h-[20px] w-[20px]" />
          </button>

          {share ? (
            <div className="absolute inset-0 bg-black/50" onClick={() => setShare(false)}>
              <div className="absolute top-[60px] right-[56px] w-[200px] rounded-[3px] bg-white px-[20px] py-[14px] shadow-[0_4px_15px_rgba(0,0,0,0.3)]" onClick={(e) => e.stopPropagation()}>
                <span aria-hidden="true" className="absolute top-[1px] right-[10px] -translate-y-full border-[9px] border-transparent border-b-white" />
                {[
                  { label: "Share on Facebook", href: `https://www.facebook.com/sharer.php?u=${encodeURIComponent(pageUrl)}`, d: I.facebook, color: "fill-[#3b5998]" },
                  { label: "Share on X", href: `https://x.com/intent/tweet?text=%20${encodeURIComponent(pageUrl)}`, d: I.x, color: "fill-black" },
                  { label: "Pin it", href: `https://www.pinterest.com/pin/create/button/?url=&media=${encodeURIComponent(imageUrl ?? "")}`, d: I.pinterest, color: "fill-[#bd081c]" },
                ].map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener" className="block font-sans text-[12px] leading-[30px] text-[#0c0d0e]">
                    <svg viewBox="0 0 1000 1000" aria-hidden="true" className={`mr-[9px] inline h-[15px] w-[15px] ${l.color}`}>
                      <path d={l.d} />
                    </svg>
                    {l.label}
                  </a>
                ))}
                <a href={photo.image.src} download="" className="block font-sans text-[12px] leading-[30px] text-[#0c0d0e]">
                  <svg viewBox="0 0 1000 1000" aria-label="Download" className="mr-[9px] inline h-[15px] w-[15px] fill-[#9da5ae]">
                    <path d={I.download} />
                  </svg>
                  Download image
                </a>
              </div>
            </div>
          ) : null}

          <div className="absolute inset-x-0 bottom-0 px-[20px] py-[15px] text-center font-sans text-[16px] leading-[24px] font-bold text-[rgba(237,237,237,0.9)]">{photo.title}</div>
        </div>
      ) : null}
    </>
  );
}
