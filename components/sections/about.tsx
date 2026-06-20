"use client";

import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { BrandMark } from "@/components/ui/brand-logo";
import { WHY_US } from "@/lib/data";
import { Floating } from "@/components/interactions/floating";

const STATS = [
  { value: 250, suffix: "+", label: "Clients" },
  { value: 480, suffix: "+", label: "Projects" },
  { value: 12, suffix: "+", label: "Years" },
];

export function About() {
  const pin = useRef<HTMLDivElement>(null);
  const counters = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: pinned cinematic storytelling
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        // TANPA pin (pin → spacer → CLS). Reveal di-scrub saat section lewat.
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin.current,
            start: "top 80%",
            end: "bottom 35%",
            scrub: 1,
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

        // Kinetic counters terikat ke progres timeline
        STATS.forEach((stat, i) => {
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
      <div
        ref={pin}
        className="scene relative flex min-h-screen items-center overflow-hidden py-20"
      >
        {/* decorative layers */}
        <div className="about-deco pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-[0.06] lg:block">
          <BrandMark className="h-[36rem] w-[36rem]" />
        </div>
        <div className="about-deco pointer-events-none absolute left-6 top-24 h-40 w-40 rounded-3xl border border-azure/20 bg-white/40" />
        <div className="about-deco pointer-events-none absolute right-10 bottom-20 h-28 w-28 rounded-full border border-gold/40" />

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
                  {STATS.map((s, i) => (
                    <div key={s.label} className="text-center">
                      <p className="text-2xl font-extrabold text-brand">
                        <span
                          ref={(el) => {
                            counters.current[i] = el;
                          }}
                        >
                          {s.value}
                        </span>
                        {s.suffix}
                      </p>
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-ink-soft">
                        {s.label}
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
                <span className="line block">Why Choose Aetherion</span>
              </span>
              <span className="block overflow-hidden">
                <span className="line block">Zynera Indonesia?</span>
              </span>
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-ink-soft">
              Empowering Business Growth Through Innovation and Technology
            </p>

            <ul className="mt-8 space-y-4">
              {WHY_US.map((item) => (
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
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
