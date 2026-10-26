"use client";

import { useEffect, useRef, useState } from "react";
import "flatpickr/dist/flatpickr.css";
import { ATTRIBUTION_STORAGE_KEY } from "@/lib/lead-options";
import type { eCouponPage } from "@/lib/data/pages/eCoupon";

type Copy = (typeof eCouponPage)["form"];
type Field = "name" | "email" | "visitors" | "visit_date";
type Errors = Partial<Record<Field, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * The e-coupon sign-up, with the old Fluent form's fields (Name, Email,
 * Number Of Visitors *, Visiting Date). Posts JSON to /api/lead.php, which
 * forwards it to GoHighLevel; GoHighLevel sends the coupon email. The date
 * field opens the same Flatpickr calendar as live (Monday first, d/m/Y).
 */
export function ECouponForm({ copy }: { copy: Copy }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const mounted = useRef(0);
  const dateInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    mounted.current = Date.now();
    let picker: { destroy: () => void } | undefined;
    let cancelled = false;
    import("flatpickr").then(({ default: flatpickr }) => {
      if (!cancelled && dateInput.current) picker = flatpickr(dateInput.current, { dateFormat: "d/m/Y", disableMobile: true, locale: { firstDayOfWeek: 1 } });
    });
    return () => {
      cancelled = true;
      picker?.destroy();
    };
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const values = { name: get("name"), email: get("email"), visitors: get("visitors"), visit_date: get("visit_date") };
    const errs: Errors = {};
    if (!values.visitors) errs.visitors = "This field is required";
    else if (!/^[1-9]\d{0,2}$/.test(values.visitors)) errs.visitors = "Please enter a valid number.";
    if (values.email && !EMAIL.test(values.email)) errs.email = "Please enter a valid email address.";
    setErrors(errs);
    // As live, the message shows under the field without moving the focus.
    if (Object.keys(errs).length) return;
    let attribution: Record<string, string> = {};
    try {
      attribution = JSON.parse(sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY) ?? "{}");
    } catch {
      /* storage unavailable */
    }
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/lead.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          form: "e-coupon",
          ...values,
          visitors: Number(values.visitors),
          website_url: get("website_url"),
          elapsed_ms: mounted.current ? Date.now() - mounted.current : null,
          page_url: window.location.href,
          ...attribution,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fields?: Errors };
      if (res.ok && json.ok) {
        setStatus("sent");
        return;
      }
      if (json.fields) setErrors(json.fields);
      setStatus("error");
      setMessage(json.error || "Something went wrong. Please try again.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <p role="status" className="mx-auto max-w-[925px] text-center font-sans text-[16px] leading-[24px] text-white">
        {copy.success}
      </p>
    );
  }

  const input = (f: Field) =>
    `mt-[5px] block h-[44px] w-full rounded-[7px] border bg-white px-[15px] py-[11px] font-sans text-[16px] leading-[24px] text-[#606266] placeholder:text-[#868e96] transition-[border-color,box-shadow] duration-150 ease-in-out focus:outline-none ${errors[f] ? "border-[#f56c6c]" : "border-[#dadbdd] focus:border-[#1a7efb]"}`;
  const label = "block font-sans text-[16px] leading-[24px] font-medium text-white";
  const err = (f: Field) =>
    errors[f] ? (
      <p id={`ecoupon-${f}-error`} role="alert" className="mt-[4px] font-sans text-[12px] leading-[18px] text-[#f56c6c]">
        {errors[f]}
      </p>
    ) : null;
  const aria = (f: Field) => ({ "aria-invalid": errors[f] ? true : undefined, "aria-describedby": errors[f] ? `ecoupon-${f}-error` : undefined });

  return (
    <form onSubmit={onSubmit} className="mx-auto w-[70%]">
      <div className="grid grid-cols-1 gap-x-[15px] gap-y-[21px] md:grid-cols-2 md:gap-y-[22px]">
        <div>
          <label htmlFor="ecoupon-name" className={label}>{copy.nameLabel}</label>
          <input id="ecoupon-name" name="name" type="text" autoComplete="name" maxLength={120} placeholder={copy.namePlaceholder} className={input("name")} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="ecoupon-email" className={label}>{copy.emailLabel}</label>
          <input id="ecoupon-email" name="email" type="email" autoComplete="email" maxLength={200} placeholder={copy.emailPlaceholder} className={input("email")} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="ecoupon-visitors" className={label}>
            {copy.visitorsLabel} <span aria-hidden="true" className="ml-[3px] text-[#f56c6c]">*</span>
          </label>
          <input id="ecoupon-visitors" name="visitors" type="number" step="any" inputMode="numeric" aria-required="true" placeholder={copy.visitorsPlaceholder} className={input("visitors")} {...aria("visitors")} />
          {err("visitors")}
        </div>
        <div>
          <label htmlFor="ecoupon-visit_date" className={label}>{copy.dateLabel}</label>
          <input
            id="ecoupon-visit_date"
            name="visit_date"
            ref={dateInput}
            type="text"
            placeholder={copy.datePlaceholder}
            className={input("visit_date")}
            {...aria("visit_date")}
          />
          {err("visit_date")}
        </div>
      </div>
      {/* Spam trap: hidden from people, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="ecoupon-website_url">Website</label>
        <input id="ecoupon-website_url" name="website_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {status === "error" && message ? (
        <p role="alert" className="mt-[16px] text-center font-sans text-[15px] leading-[22px] text-[#ffd0d0]">
          {message}
        </p>
      ) : null}
      <div className="mt-[20px] text-center">
        <button type="submit" disabled={status === "sending"} className="rounded-[7px] border border-transparent bg-rust px-[20px] py-[10px] font-sans text-[16px] leading-[24px] font-medium text-white disabled:opacity-70">
          {copy.button}
        </button>
      </div>
    </form>
  );
}
