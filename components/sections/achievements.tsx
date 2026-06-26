"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { ACHIEVEMENTS } from "@/lib/data";
import { asset } from "@/lib/asset";
import { ParticleField } from "@/components/ui/particle-field";
import { Floating } from "@/components/interactions/floating";
import { useLang } from "@/components/providers/lang-provider";

export function Achievements() {
  const root = useRef<HTMLElement>(null);
  const nums = useRef<(HTMLSpanElement | null)[]>([]);
  const { t } = useLang();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        ACHIEVEMENTS.forEach((stat, i) => {
          const proxy = { v: 0 };
          gsap.to(proxy, {
            v: stat.value,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
            onUpdate: () => {
              const el = nums.current[i];
              if (el) el.textContent = String(Math.round(proxy.v));
            },
          });
        });

        gsap.from(".stat-col", {
          yPercent: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="scene relative overflow-hidden bg-brand-deep py-24"
    >
      <div data-speed="0.5" className="layer bg-grid absolute inset-0 opacity-30" />
      <div
        data-speed="0.3"
        className="layer absolute inset-0 bg-center bg-cover opacity-[0.14]"
        style={{ backgroundImage: `url(${asset("/assets/floating-shapes.svg")})` }}
      />
      <div
        className="animate-glow pointer-events-none absolute -left-20 top-0 hidden h-72 w-72 rounded-full bg-azure/30 blur-3xl md:block"
      />
      <div
        className="animate-glow pointer-events-none absolute -right-20 bottom-0 hidden h-72 w-72 rounded-full bg-gold/15 blur-3xl md:block"
      />
      <div data-speed="1.3" className="layer absolute inset-0">
        <ParticleField count={10} color="bg-white/50" />
      </div>

      <div className="container-x relative grid grid-cols-2 gap-10 lg:grid-cols-4">
        {ACHIEVEMENTS.map((stat, i) => (
          <div key={stat.label} className="stat-col relative text-center">
            <Floating amplitude={8} duration={5 + i} delay={i * 0.3}>
              <p className="text-4xl font-extrabold text-white text-glow sm:text-5xl">
                <span ref={(el) => { nums.current[i] = el; }}>
                  {stat.value}
                </span>
                <span className="text-gold">{t.achievements[i]?.suffix ?? stat.suffix}</span>
              </p>
            </Floating>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/70">
              {t.achievements[i]?.label ?? stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
