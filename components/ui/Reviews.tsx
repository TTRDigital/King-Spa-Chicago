"use client";

import { useEffect } from "react";

/**
 * Elfsight Google Reviews widget, embedded as on the old site. Elfsight's
 * platform script is added once the page has finished loading (so it never
 * slows the first paint); the widget itself starts only when scrolled near,
 * through Elfsight's own lazy mode (data-elfsight-app-lazy), as on live.
 */
export function Reviews({ widgetId, className }: { widgetId: string; className?: string }) {
  useEffect(() => {
    if (!widgetId) return;
    const load = () => {
      if (document.querySelector("script[data-elfsight]")) return;
      const s = document.createElement("script");
      s.src = "https://elfsightcdn.com/platform.js";
      s.async = true;
      s.dataset.elfsight = "";
      document.body.appendChild(s);
    };
    if (document.readyState === "complete") load();
    else {
      window.addEventListener("load", load, { once: true });
      return () => window.removeEventListener("load", load);
    }
  }, [widgetId]);
  return <div className={`elfsight-app-${widgetId} ${className ?? ""}`} data-elfsight-app-lazy="" />;
}
