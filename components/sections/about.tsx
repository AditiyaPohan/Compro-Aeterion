"use client";

import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { BrandMark } from "@/components/ui/brand-logo";
import { Floating } from "@/components/interactions/floating";
import { useLang } from "@/components/providers/lang-provider";

const STAT_VALUES = [
  { value: 1000, suffix: "+" },
  { value: 480, suffix: "+" },
  { value: 2, suffix: "+" },
];

export function About() {
  const pin = useRef<HTMLDivElement>(null);
  const counters = useRef<(HTMLSpanElement | null)[]>([]);
  const { t } = useLang();

  const STAT_LABELS = [t.about.stats.clients, t.about.stats.projects, t.about.stats.years];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin.current,
            start: "top 70%",
            once: true,
          },
        });

        tl.from(".about-card", {
          xPercent: -40,
          opacity: 0,
          rotateY: 28,
          scale: 0.85,
          ease: "power2.out",
          duration: 1,
        })
          .from(
            ".about-deco",
            { scale: 0, opacity: 0, stagger: 0.2, ease: "back.out(1.6)", duration: 1 },
            0
          )
          .from(
            ".about-head .line",
            { yPercent: 120, opacity: 0, stagger: 0.12, ease: "power3.out", duration: 1 },
            0.3
          )
          .from(
            ".about-item",
            { x: 50, opacity: 0, stagger: 0.18, ease: "power2.out", duration: 1 },
            0.7
          )
          .from(".about-cta", { y: 30, opacity: 0, duration: 0.8 }, 1.6);

        STAT_VALUES.forEach((stat, i) => {
          const proxy = { v: 0 };
          tl.to(
            proxy,
            {
              v: stat.value,
              duration: 1.4,
              ease: "power1.out",
              onUpdate: () => {
                const el = counters.current[i];
                if (el) el.textContent = String(Math.round(proxy.v));
              },
            },
            0.5
          );
        });
      });

      return () => mm.revert();
    },
    { scope: pin }
  );

  return (
    <section id="about" className="relative bg-surface">
      <div ref={pin} className="scene relative overflow-hidden py-24">
        <div className="about-deco pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-[0.06] lg:block">
          <BrandMark className="h-[36rem] w-[36rem]" />
        </div>
        <div className="about-deco pointer-events-none absolute left-8 top-16 hidden h-32 w-32 rounded-3xl border border-azure/15 lg:block" />
        <div className="about-deco pointer-events-none absolute right-10 bottom-16 hidden h-24 w-24 rounded-full border border-gold/25 lg:block" />

        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          {/* Left: logo card + counters */}
          <div className="about-card preserve-3d">
            <div className="relative mx-auto max-w-md rounded-[2rem] bg-white p-10 shadow-card">
              <div className="absolute inset-x-0 -top-px mx-auto h-1 w-24 rounded-full bg-gold" />
              <div className="flex flex-col items-center text-center">
                <Floating amplitude={10} duration={6}>
                  <BrandMark className="h-24 w-24 glow" />
                </Floating>
                <p className="mt-5 text-3xl font-extrabold uppercase tracking-[0.14em] text-brand">
                  Aetherion
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.34em] text-ink-soft">
                  Zynera Indonesia
                </p>
                <div className="mt-8 h-px w-full bg-line" />
                <div className="mt-6 grid w-full grid-cols-3 gap-4">
                  {STAT_VALUES.map((s, i) => (
                    <div key={STAT_LABELS[i]} className="text-center">
                      <p className="text-2xl font-extrabold text-brand">
                        <span ref={(el) => { counters.current[i] = el; }}>
                          {s.value}
                        </span>
                        {s.suffix}
                      </p>
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-ink-soft">
                        {STAT_LABELS[i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: progressive story */}
          <div>
            <h2 className="about-head text-3xl font-extrabold leading-tight text-brand sm:text-4xl">
              <span className="block overflow-hidden">
                <span className="line block">{t.about.heading[0]}</span>
              </span>
              <span className="block overflow-hidden">
                <span className="line block">{t.about.heading[1]}</span>
              </span>
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-ink-soft">
              {t.about.subtitle}
            </p>

            <ul className="mt-8 space-y-4">
              {t.about.whyUs.map((item) => (
                <li key={item} className="about-item flex items-center gap-3">
                  <CheckCircle2 size={22} className="shrink-0 text-gold" />
                  <span className="font-medium text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="about-cta mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_14px_30px_-12px_rgba(212,175,55,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c79f2c]"
            >
              {t.about.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
