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
      {/* As live: a box at most 1400px wide with at least 10px around it, three columns (15% / 70% / 15%) with 10px padding each from 768px up. */}
      <div className="px-[10px]">
        <div className="mx-auto flex h-[88px] max-w-[1400px] items-center px-[10px] md:px-0">
          <div className="shrink-0 md:w-[15%] md:px-[10px]">
            {/* 100px on phones; on tablets live squeezes the logo to its column minus 90px; 110px on desktops. */}
            <Link href="/" className="block w-[100px] md:max-lg:w-[calc(100%-90px)] lg:w-[110px]" aria-label="King Spa & Sauna home">
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} sizes="110px" className="h-[48px] w-full object-contain" />
            </Link>
          </div>

          <div className="flex flex-1 justify-end self-stretch md:w-[70%] md:flex-none md:items-start md:px-[10px] md:pt-[20px] lg:items-center lg:justify-center lg:pt-0 max-md:items-center">
            {/* Centred 7.5px left of the column's centre, like live's menu. */}
            <nav aria-label="Main" className="mr-[15px] hidden lg:block">
              <ul className="flex items-center gap-[30px] font-recoleta text-[16px] leading-[20px] text-white capitalize">
                {menu.map((item) => (
                  <li key={item.label} className="group relative">
                    <NavLink
                      href={item.href}
                      className={`relative flex items-center whitespace-nowrap py-[13px] after:absolute after:bottom-[6px] after:left-0 after:h-[3px] after:w-full after:bg-rose after:transition-opacity ${active(item.href) ? "after:opacity-100" : "after:opacity-0 group-hover:after:opacity-100"}`}
                    >
                      {item.label}
                      {item.children.length ? <Caret /> : null}
                    </NavLink>
                    {item.children.length ? (
                      // As live: 15px below the item (the padding keeps the hover across the gap), as wide as its longest item, gold on hover.
                      <div className="invisible absolute left-0 top-full pt-[15px] opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                        <ul className="min-w-[130px] rounded-[5px] bg-white shadow-[0_15px_20px_rgba(0,0,0,0.1)]">
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <NavLink href={c.href} className="block whitespace-nowrap border-l-[8px] border-transparent px-[25px] py-[10px] font-montserrat text-[14px] leading-[20px] font-normal normal-case text-[#16163f] transition-colors duration-[400ms] hover:text-[#d3b574]">
                                {c.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              aria-expanded={open}
              aria-controls="phone-menu"
              aria-label="Menu Toggle"
              onClick={() => setOpen((o) => !o)}
              className="flex h-[33px] w-[33px] items-center justify-center rounded-[3px] bg-white text-[#16163f] lg:hidden"
            >
              {/* Three rounded bars / a cross, drawn at the weight of live's menu icon. */}
              {open ? (
                <svg viewBox="0 0 1000 1000" width="22" height="22" aria-hidden="true"><path d="M212 212l576 576M788 212L212 788" stroke="currentColor" strokeWidth="120" strokeLinecap="round" /></svg>
              ) : (
                <svg viewBox="0 0 1000 1000" width="22" height="22" fill="currentColor" aria-hidden="true">
                  <rect x="42" y="208" width="916" height="125" rx="62.5" />
                  <rect x="42" y="458" width="916" height="125" rx="62.5" />
                  <rect x="42" y="708" width="916" height="125" rx="62.5" />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden text-right md:block md:w-[15%] md:px-[10px]">
            <Link href={button.href} className="hidden rounded-[8px] bg-white px-[24px] py-[12px] font-recoleta text-[16px] leading-[16px] text-black capitalize lg:inline-block">
              <span className="block text-center">{button.label}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* As live: phones get 68px rows at 16px (with E-Coupon), tablets 40px rows at 14px from 73px down; the open submenu's parent turns gold. */}
      <nav id="phone-menu" aria-label="Phone menu" hidden={!open} className="absolute inset-x-0 top-[80.5px] rounded-[5px] bg-white shadow-[0_15px_20px_rgba(0,0,0,0.1)] md:top-[73px] lg:hidden">
        <ul className="font-recoleta text-[16px] leading-[20px] capitalize text-[#16163f] md:text-[14px]">
          {menu.map((item, i) => (
            <li key={item.label}>
              <div className="flex items-center">
                <NavLink href={item.href} onClick={() => setOpen(false)} className={`block py-[24px] pl-[25px] md:py-[10px] ${item.children.length ? "" : "flex-1 pr-[25px]"} ${active(item.href) || sub === i ? "text-[#d3b574]" : ""}`}>
                  {item.label}
                </NavLink>
                {item.children.length ? (
                  <button type="button" aria-label={`Show ${item.label} submenu`} aria-expanded={sub === i} onClick={() => setSub(sub === i ? null : i)} className={`flex self-stretch items-center pl-[10px] pr-[25px] ${active(item.href) || sub === i ? "text-[#d3b574]" : ""}`}>
                    <svg viewBox="0 0 320 512" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" /></svg>
                  </button>
                ) : null}
              </div>
              {item.children.length && sub === i ? (
                <ul>
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <NavLink href={c.href} onClick={() => setOpen(false)} className={`block border-l-[8px] border-transparent px-[25px] py-[24px] font-montserrat text-[16px] leading-[20px] font-normal normal-case md:py-[10px] md:text-[14px] ${active(c.href) ? "text-[#d3b574]" : ""}`}>
                        {c.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
          <li className="md:hidden">
            <NavLink href={button.href} onClick={() => setOpen(false)} className={`block px-[25px] py-[24px] ${path === button.href ? "text-[#d3b574]" : ""}`}>
              {button.label}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
