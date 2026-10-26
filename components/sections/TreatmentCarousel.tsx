"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { homePage } from "@/lib/data/pages/home";

type Card = (typeof homePage)["treatments"]["cards"][number];

const GAP = 10;
const DELAY = 5000;

/**
 * "Our Signature Spa Treatments": a looping slider, three cards from 1024px,
 * two from 767px and one below (the old Elementor carousel's own breakpoints), with arrows, sliding on its own every 5 seconds like the old
 * site's carousel. As there, it can be dragged or swiped, and stops sliding on
 * its own once a visitor uses it. It also waits while a card has the keyboard
 * focus and never slides on its own for visitors who prefer reduced motion.
 */
export function TreatmentCarousel({ cards }: { cards: Card[] }) {
  const n = cards.length;
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(n);
  const [animate, setAnimate] = useState(true);
  const paused = useRef(false);
  const stopped = useRef(false);
  const drag = useRef<{ x: number; dx: number; t: number; moved: boolean } | null>(null);
  const [dragX, setDragX] = useState<number | null>(null);

  useEffect(() => {
    const three = window.matchMedia("(min-width: 1024px)");
    const two = window.matchMedia("(min-width: 767px)");
    const update = () => setPerView(three.matches ? 3 : two.matches ? 2 : 1);
    update();
    three.addEventListener("change", update);
    two.addEventListener("change", update);
    return () => {
      three.removeEventListener("change", update);
      two.removeEventListener("change", update);
    };
  }, []);

  const go = useCallback((d: number) => {
    setAnimate(true);
    setIndex((i) => i + d);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      if (!paused.current && !stopped.current && document.visibilityState === "visible") go(1);
    }, DELAY);
    return () => window.clearInterval(t);
  }, [go]);

  // After sliding past either copy of the list, jump back to the middle copy without animation.
  const onEnd = () => {
    if (index >= 2 * n || index < n) {
      setAnimate(false);
      setIndex(((index % n) + n) % n + n);
    }
  };
  useEffect(() => {
    if (animate) return;
    const r = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(r);
  }, [animate]);

  const userGo = (d: number) => {
    stopped.current = true;
    go(d);
  };
  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    drag.current = { x: e.clientX, dx: 0, t: Date.now(), moved: false };
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    d.dx = e.clientX - d.x;
    if (!d.moved && Math.abs(d.dx) > 5) {
      d.moved = true;
      stopped.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (d.moved) setDragX(d.dx);
  };
  const onUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    setDragX(null);
    if (!d.moved) {
      drag.current = null;
      return;
    }
    // Swiper's rule: a quick flick (under 300ms) always moves; a slow drag moves past half a card.
    const card = e.currentTarget.getBoundingClientRect().width / perView;
    if (Date.now() - d.t < 300 || Math.abs(d.dx) > card / 2) userGo(d.dx < 0 ? 1 : -1);
    // Keep the drag until the click that ends it has been swallowed (a drag never opens a card's link).
    window.setTimeout(() => (drag.current = null), 0);
  };

  const track = [...cards, ...cards, ...cards];
  const arrow = "absolute top-[calc(50%-16px)] z-10 flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center text-white";
  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label="Signature spa treatments"
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex touch-pan-y select-none"
          style={{ gap: GAP, transform: `translateX(calc(${-index} * (100% + ${GAP}px) / ${perView} + ${dragX ?? 0}px))`, transition: animate && dragX === null ? "transform 500ms ease" : "none" }}
          onTransitionEnd={onEnd}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onClickCapture={(e) => {
            if (drag.current?.moved) e.preventDefault();
          }}
          onDragStart={(e) => e.preventDefault()}
        >
          {track.map((c, i) => {
            const visible = i >= index && i < index + perView;
            return (
              <div
                key={i}
                aria-hidden={!visible}
                className="flex shrink-0 flex-col overflow-hidden rounded-[20px] bg-maroon pb-[21px] text-center"
                style={{ flexBasis: `calc((100% - ${(perView - 1) * GAP}px) / ${perView})` }}
              >
                <div className="relative h-[300px] w-full md:h-[400px]">
                  <Image src={c.image.src} alt={c.image.alt} fill sizes="(max-width: 767px) 370px, 460px" className="object-cover" />
                </div>
                <h2 className="mt-[20px] font-recoleta text-[32px] leading-[32px] font-medium text-white">{c.title}</h2>
                <div className="mt-[20px] font-recoleta text-[18px] leading-[7px] text-white">
                  {c.lines.map((l) => (
                    <p key={l} className="mb-[14.4px]">{l}</p>
                  ))}
                </div>
                <div className="mt-[19px]">
                  <Link href={c.button.href} tabIndex={visible ? 0 : -1} className="inline-flex items-center gap-[7px] rounded-[3px] bg-rust px-[24px] py-[12px] font-recoleta text-[15px] leading-[15px] text-white">
                    {c.button.label}
                    <svg viewBox="0 0 448 512" width="13" height="13" fill="currentColor" aria-hidden="true">
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button type="button" aria-label="Previous treatment" onClick={() => userGo(-1)} className={`${arrow} left-0`}>
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M14.6 4l-8 8 8 8" /></svg>
      </button>
      <button type="button" aria-label="Next treatment" onClick={() => userGo(1)} className={`${arrow} right-0`}>
        <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M9.4 4l8 8-8 8" /></svg>
      </button>
    </div>
  );
}
