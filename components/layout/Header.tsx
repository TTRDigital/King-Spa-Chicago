"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { SiteSettings } from "@/lib/data/site";

type Menu = SiteSettings["header"]["menu"];
type Props = { menu: Menu; button: { label: string; href: string }; logo: SiteSettings["logo"] };

const isExternal = (href: string) => /^https?:\/\//.test(href);

function NavLink({ href, className, children, onClick }: { href: string; className?: string; children: React.ReactNode; onClick?: () => void }) {
  if (href === "#") return <a href="#" className={className} onClick={(e) => e.preventDefault()}>{children}</a>;
  if (isExternal(href)) return <a href={href} className={className}>{children}</a>;
  return <Link href={href} className={className} onClick={onClick}>{children}</Link>;
}

const Caret = () => (
  <span aria-hidden="true" className="ml-[10px] inline-flex w-[16px] justify-center">
    <svg viewBox="0 0 10 6" width="10" height="6" className="fill-current">
      <path d="M0 0h10L5 6z" />
    </svg>
  </span>
);

/**
 * Maroon header, 88px, as on the old site. The full menu shows from 1025px
 * (the old site's breakpoint; it fits on one line down to there); below that,
 * the phone menu (white panel under the bar).
 */
export function Header({ menu, button, logo }: Props) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<number | null>(null);
  // As on the old site, only the current page's own item is marked (not its parent).
  const active = (href: string) => href === path;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-[99] bg-maroon">
      <div className="flex h-[88px] items-center justify-between px-[20px] lg:px-[30px]">
        <Link href="/" className="block w-[100px] lg:w-[110px]" aria-label="King Spa & Sauna home">
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} sizes="110px" className="h-[48px] w-full object-contain" />
        </Link>

        <nav aria-label="Main" className="relative -left-[2px] hidden lg:block">
          <ul className="flex items-center gap-[30px] font-recoleta text-[16px] leading-[20px] text-white capitalize">
            {menu.map((item) => (
              <li key={item.label} className="group relative">
                <NavLink
                  href={item.href}
                  className={`relative flex items-center whitespace-nowrap py-[13px] after:absolute after:bottom-[6px] after:left-0 after:h-[3px] after:w-full after:bg-rose after:transition-opacity ${active(item.href) ? "after:opacity-100" : "after:opacity-0 hover:after:opacity-100"}`}
                >
                  {item.label}
                  {item.children.length ? <Caret /> : null}
                </NavLink>
                {item.children.length ? (
                  <ul className="invisible absolute left-0 top-full min-w-[200px] rounded-[5px] bg-white py-[8px] opacity-0 shadow-[0_15px_20px_rgba(0,0,0,0.1)] transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <NavLink href={c.href} className="block whitespace-nowrap px-[25px] py-[10px] font-montserrat text-[14px] leading-[20px] normal-case text-[#16163f] hover:text-maroon">
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <Link href={button.href} className="hidden rounded-[8px] bg-white px-[24px] py-[12px] font-recoleta text-[16px] leading-[16px] text-black capitalize lg:inline-block">
          <span className="block text-center">{button.label}</span>
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="phone-menu"
          aria-label="Menu Toggle"
          onClick={() => setOpen((o) => !o)}
          className="flex h-[33px] w-[33px] items-center justify-center rounded-[3px] bg-white text-[#16163f] lg:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.6" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2.4" /></svg>
          )}
        </button>
      </div>

      <nav id="phone-menu" aria-label="Phone menu" hidden={!open} className="absolute inset-x-0 top-[80.5px] bg-white shadow-[0_15px_20px_rgba(0,0,0,0.1)] lg:hidden">
        <ul className="font-recoleta text-[16px] leading-[20px] capitalize text-[#16163f]">
          {menu.map((item, i) => (
            <li key={item.label}>
              <div className="flex items-center">
                <NavLink href={item.href} onClick={() => setOpen(false)} className={`flex items-center px-[25px] py-[24px] ${active(item.href) ? "text-[#d3b574]" : ""}`}>
                  {item.label}
                </NavLink>
                {item.children.length ? (
                  <button type="button" aria-label={`Show ${item.label} submenu`} aria-expanded={sub === i} onClick={() => setSub(sub === i ? null : i)} className="-ml-[20px] p-[10px]">
                    <Caret />
                  </button>
                ) : null}
              </div>
              {item.children.length && sub === i ? (
                <ul className="pb-[8px]">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <NavLink href={c.href} onClick={() => setOpen(false)} className="block px-[45px] py-[14px] font-montserrat text-[14px] normal-case">
                        {c.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
          <li>
            <NavLink href={button.href} onClick={() => setOpen(false)} className={`block px-[25px] py-[24px] ${path === button.href ? "text-[#d3b574]" : ""}`}>
              {button.label}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
