"use client";

import { useRef, useState, type ReactNode } from "react";

/**
 * Accordion that works like the old site's custom ones (V-Steam FAQ, Sauna
 * healing rooms): all closed at first, one open at a time, the open item gets
 * the "active" class, and the page's own CSS animates max-height. With
 * `measure`, the open panel's max-height is set to its content height, as the
 * old script did.
 */
export function ActiveAccordion({
  items,
  itemClassName,
  buttonClassName,
  contentClassName,
  measure = false,
}: {
  items: { key: string; button: ReactNode; body: ReactNode }[];
  itemClassName: string;
  buttonClassName: string;
  contentClassName: string;
  measure?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const [height, setHeight] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const toggle = (i: number) => {
    if (open === i) return setOpen(null);
    setHeight(refs.current[i]?.scrollHeight ?? 0);
    setOpen(i);
  };
  return (
    <>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={it.key}
            className={`${itemClassName}${isOpen ? " active" : ""}`}
          >
            <button
              type="button"
              className={buttonClassName}
              aria-expanded={isOpen}
              aria-controls={`acc-${it.key}`}
              onClick={() => toggle(i)}
            >
              {it.button}
            </button>
            <div
              id={`acc-${it.key}`}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={contentClassName}
              style={measure && isOpen ? { maxHeight: height } : undefined}
              aria-hidden={!isOpen}
              inert={!isOpen}
            >
              {it.body}
            </div>
          </div>
        );
      })}
    </>
  );
}
