import "./sauna.css";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { saunaPage } from "@/lib/data/pages/sauna";
import { images } from "@/lib/data/images";
import { Inline } from "@/components/ui/RichText";
import { TreatmentBanner } from "@/components/sections/TreatmentBanner";
import { ActiveAccordion } from "@/components/sections/ActiveAccordion";

/* The old page's icons, in order. */
const FLOW = [
  {
    cls: "ks-step-warm",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <line x1="12" x2="12" y1="2" y2="5" />
        <line x1="12" x2="12" y1="19" y2="22" />
        <line x1="4.22" x2="6.34" y1="4.22" y2="6.34" />
        <line x1="17.66" x2="19.78" y1="17.66" y2="19.78" />
        <line x1="2" x2="5" y1="12" y2="12" />
        <line x1="19" x2="22" y1="12" y2="12" />
        <line x1="4.22" x2="6.34" y1="19.78" y2="17.66" />
        <line x1="17.66" x2="19.78" y1="6.34" y2="4.22" />
      </>
    ),
  },
  {
    cls: "ks-step-hot",
    icon: (
      <path d="M12 22c-4 0-7-2.5-7-7 0-3.5 2-6 4-8 .5-.5 1.5-.2 1.5.5 0 1.5 1 3 2.5 3.5 0-2 1-4 2.5-5.5.4-.4 1.1-.2 1.2.4.5 2 1.3 3.6 2.3 5.1C20.5 13.5 21 15 21 17c0 3-2 5-5 5" />
    ),
  },
  {
    cls: "ks-step-cool",
    icon: (
      <>
        <line x1="12" x2="12" y1="2" y2="22" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <line x1="4.93" x2="19.07" y1="4.93" y2="19.07" />
        <line x1="19.07" x2="4.93" y1="4.93" y2="19.07" />
        <polyline points="9 2 12 5 15 2" />
        <polyline points="9 22 12 19 15 22" />
        <polyline points="2 9 5 12 2 15" />
        <polyline points="22 9 19 12 22 15" />
      </>
    ),
  },
  {
    cls: "ks-step-rest",
    icon: (
      <>
        <path d="M12 21c0-4-3-7.5-7-9 1.5-.5 3-1.5 4-3" />
        <path d="M12 21c0-4 3-7.5 7-9-1.5-.5-3-1.5-4-3" />
        <path d="M12 21V3" />
        <circle cx="12" cy="5" r="2" />
      </>
    ),
  },
];
const STEP_ICONS: ReactNode[] = [
  <g key="0">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4 0 8.5-3.5 9-10" />
    <path d="M20.88 3.12C20.88 3.12 15 4 12 7c-3 3-4 8-4 8s5-1 8-4c3-3 4.88-7.88 4.88-7.88z" />
  </g>,
  <g key="1">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </g>,
  <g key="2">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2" />
    <path d="M12.59 19.41A2 2 0 1 0 14 16H2" />
    <path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2" />
  </g>,
  <g key="3">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </g>,
];
const TIP_ICONS: ReactNode[] = [
  <g key="0">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </g>,
  <g key="1">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </g>,
  <g key="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </g>,
  <g key="3">
    <line x1="12" x2="12" y1="2" y2="22" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <polyline points="9 2 12 5 15 2" />
    <polyline points="9 22 12 19 15 22" />
    <polyline points="2 9 5 12 2 15" />
    <polyline points="22 9 19 12 22 15" />
  </g>,
  <g key="4">
    <path d="M6 2h12" />
    <path d="M6 22h12" />
    <path d="M7 2v4.3C7 8.5 8.6 10 10.4 10h0c.8 0 1.6.8 1.6 1.6v0" />
    <path d="M17 2v4.3C17 8.5 15.4 10 13.6 10h0c-.8 0-1.6.8-1.6 1.6v0" />
    <path d="M7 22v-4.3C7 15.5 8.6 14 10.4 14h0c.8 0 1.6-.8 1.6-1.6v0" />
    <path d="M17 22v-4.3c0-2.2-1.6-3.7-3.4-3.7h0c-.8 0-1.6-.8-1.6-1.6v0" />
  </g>,
  <g key="5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </g>,
];

/** Sauna & Healing Rooms (/sauna-healing-rooms/): the old page's own layout and stylesheet (sauna.css). */
export function SaunaView({ data }: { data: typeof saunaPage }) {
  const { banner, intro, healingIntro, rooms, sequencing, cta } = data;
  return (
    <>
      <TreatmentBanner
        {...banner}
        image={images.bannerRedWide}
        className="h-[492px] px-0 pt-[100px] md:h-auto md:py-[244px]"
        koreanClassName="font-sans text-[32px] leading-[32px] font-medium"
        titleClassName="text-[45px] leading-[45px] font-medium md:text-[77px] md:leading-[77px]"
        subtitleClassName="text-[23px] leading-[23px] font-medium md:text-[32px] md:leading-[32px]"
      />
      <div className="pg-sauna">
        <div className="ks-pillar-page">
          <section className="ks-section-intro">
            <div className="ks-container">
              <div className="ks-intro-grid">
                <div className="ks-intro-text">
                  <h2>{intro.title}</h2>
                  {intro.paragraphs.map((p, i) => (
                    <p key={i}>
                      <Inline text={p} />
                    </p>
                  ))}
                </div>
                <div className="ks-cultural-note">
                  <h3>{intro.noteTitle}</h3>
                  {intro.note.map((p, i) => (
                    <p
                      key={i}
                      style={
                        i ? { marginTop: "1rem", marginBottom: 0 } : undefined
                      }
                    >
                      <Inline text={p} />
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="ks-healing-intro">
            <div className="ks-healing-intro-inner">
              <span className="ks-healing-symbol">{healingIntro.symbol}</span>
              <p className="ks-healing-quote">{healingIntro.quote}</p>
              <p>{healingIntro.text}</p>
            </div>
          </section>

          <section className="ks-rooms-section">
            <div className="ks-section-header">
              <span className="ks-section-label">{rooms.label}</span>
              <h2 className="ks-section-title">{rooms.title}</h2>
              <div className="ks-divider" />
            </div>
            <div className="ks-rooms-container">
              <ActiveAccordion
                measure
                itemClassName="ks-room-item"
                buttonClassName="ks-room-btn"
                contentClassName="ks-room-content"
                items={rooms.items.map((r) => ({
                  key: `room-${r.number}`,
                  button: (
                    <>
                      <div className="ks-room-header-left">
                        <span className="ks-room-num">{r.number}</span>
                        <span className="ks-room-name">{r.name}</span>
                        <span className="ks-room-meta">{r.meta}</span>
                      </div>
                      <div className="ks-accordion-icon" />
                    </>
                  ),
                  body: (
                    <div className="ks-room-inner">
                      <Image
                        src={r.image.src}
                        alt={r.image.alt}
                        width={r.image.width}
                        height={r.image.height}
                        sizes="(max-width: 940px) 100vw, 850px"
                        className="ks-room-img"
                      />
                      <div className="ks-info-columns">
                        <div className="ks-info-col">
                          <h4>{rooms.experienceLabel}</h4>
                          <p>
                            <Inline text={r.experience} />
                          </p>
                          <ul className="ks-tags">
                            {r.tags.map((t) => (
                              <li key={t}>{t}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="ks-info-col">
                          <h4>{rooms.benefitsLabel}</h4>
                          <ul className="ks-benefits-list">
                            {r.benefits.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                }))}
              />
            </div>
          </section>

          <section className="ks-sequencing-section">
            <div className="ks-container">
              <div className="ks-sequencing-header">
                <span className="ks-section-label">{sequencing.label}</span>
                <h2>{sequencing.title}</h2>
                <div className="ks-divider" />
                <p style={{ marginTop: 20 }}>{sequencing.text}</p>
              </div>
              <div className="ks-sequence-flow">
                {sequencing.flow.map((f, i) => (
                  <span key={f.label} className="contents">
                    {i ? <div className="ks-sequence-connector" /> : null}
                    <div className="ks-sequence-step">
                      <div
                        className={`ks-sequence-circle ${FLOW[i % FLOW.length].cls}`}
                      >
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          {FLOW[i % FLOW.length].icon}
                        </svg>
                      </div>
                      <span className="ks-sequence-label">{f.label}</span>
                      <span className="ks-sequence-sub">{f.sub}</span>
                    </div>
                  </span>
                ))}
              </div>
              <div className="ks-journey-grid">
                {sequencing.steps.map((s, i) => (
                  <div key={s.number} className="ks-journey-card">
                    <div className="ks-journey-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        {STEP_ICONS[i % STEP_ICONS.length]}
                      </svg>
                    </div>
                    <div className="ks-journey-card-body">
                      <span className="ks-journey-step-num">{s.number}</span>
                      <h4>{s.title}</h4>
                      <p>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ks-tips-section">
                <div className="ks-tips-title">
                  <h3>{sequencing.tipsTitle}</h3>
                  <div className="ks-divider" />
                </div>
                <ul className="ks-tips-grid-inner">
                  {sequencing.tips.map((t, i) => (
                    <li key={t} className="ks-tip-item">
                      <span className="ks-tip-icon">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          {TIP_ICONS[i % TIP_ICONS.length]}
                        </svg>
                      </span>
                      <span className="ks-tip-text">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="ks-cta-section">
            <h2
              className="ks-section-title"
              style={{ color: "var(--ks-cream)" }}
            >
              {cta.title}
            </h2>
            <p style={{ color: "rgba(255,253,244,0.8)" }}>{cta.text}</p>
            <Link className="ks-cta-btn" href={cta.button.href}>
              {cta.button.label}
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
