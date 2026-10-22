"use client";

import { useEffect, useRef } from "react";

/**
 * Elfsight Google Reviews widget, embedded as on the old site. The Elfsight
 * script loads only when the widget comes near the screen, so it never slows
 * the first paint.
 */
export function Reviews({ widgetId, className }: { widgetId: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !widgetId) return;
    const load = () => {
      if (document.querySelector('script[data-elfsight]')) return;
      const s = document.createElement("script");
      s.src = "https://elfsightcdn.com/platform.js";
      s.async = true;
      s.dataset.elfsight = "";
      document.body.appendChild(s);
    };
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) {
        load();
        io.disconnect();
      }
    }, { rootMargin: "600px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [widgetId]);
  return <div ref={ref} className={`elfsight-app-${widgetId} ${className ?? ""}`} data-elfsight-app-lazy="" />;
}
