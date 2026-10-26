"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { homePage } from "@/lib/data/pages/home";

type Card = (typeof homePage)["treatments"]["cards"][number];

const GAP = 10;
const DELAY = 5000;

/**
 * "Our Signature Spa Treatments": a looping slider, three cards on desktop and
 * one on phones, with arrows, sliding on its own every 5 seconds like the old
 * site's carousel. It pauses while hovered or focused and never auto-slides
 * for visitors who prefer reduced motion.
 */
export function TreatmentCarousel({ cards }: { cards: Card[] }) {
  const n = cards.length;
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(n);
  const [animate, setAnimate] = useState(true);
  const paused = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setPerView(mq.matches ? 3 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const go = useCallback((d: number) => {
    setAnimate(true);
    setIndex((i) => i + d);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      if (!paused.current && document.visibilityState === "visible") go(1);
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

  const track = [...cards, ...cards, ...cards];
  const arrow = "absolute top-[calc(50%-16px)] z-10 -translate-y-1/2 p-[8px] text-white";
  return (
    <div
      className="relative"
      aria-roledescription="carousel"
      aria-label="Signature spa treatments"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{ gap: GAP, transform: `translateX(calc(${-index} * (100% + ${GAP}px) / ${perView}))`, transition: animate ? "transform 500ms ease" : "none" }}
          onTransitionEnd={onEnd}
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
      <button type="button" aria-label="Previous treatment" onClick={() => go(-1)} className={`${arrow} -left-[9px]`}>
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="M15 4l-8 8 8 8" /></svg>
      </button>
      <button type="button" aria-label="Next treatment" onClick={() => go(1)} className={`${arrow} -right-[8px]`}>
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="M9 4l8 8-8 8" /></svg>
      </button>
    </div>
  );
}
