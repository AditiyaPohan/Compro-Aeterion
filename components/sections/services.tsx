"use client";

import { useRef } from "react";
import { ShieldCheck, Palette, TrendingUp, Cpu, type LucideIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SERVICES } from "@/lib/data";
import { asset } from "@/lib/asset";
import { ParticleField } from "@/components/ui/particle-field";
import { TiltCard } from "@/components/interactions/tilt-card";
import { Floating } from "@/components/interactions/floating";
import { useLang } from "@/components/providers/lang-provider";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  Palette,
  TrendingUp,
  Cpu,
};

export function Services() {
  const root = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".svc-card", {
          opacity: 0,
          y: 120,
          z: -240,
          scale: 0.8,
          rotateX: 22,
          transformOrigin: "center center",
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="services" className="relative px-4 pb-28 pt-20">
      <div className="container-x">
        <div
          ref={root}
          className="scene relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-deep px-6 py-20 shadow-[0_30px_80px_-30px_rgba(30,90,168,0.6)] sm:px-12"
        >
          <div
            data-speed="0.3"
            className="layer absolute inset-0 bg-center bg-cover opacity-[0.12]"
            style={{ backgroundImage: `url(${asset("/assets/network.svg")})` }}
          />
          <div data-speed="0.55" className="layer bg-grid absolute inset-0 opacity-25" />
          <div
            className="pointer-events-none absolute -right-16 -top-16 hidden h-64 w-64 rounded-full bg-azure/30 blur-3xl md:block"
          />
          <div data-speed="1.3" className="layer absolute inset-0">
            <ParticleField count={10} color="bg-gold/50" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <Floating amplitude={6} duration={6}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-6 bg-gold" />
                {t.services.eyebrow}
              </span>
            </Floating>
            <h2 className="mt-4 text-3xl font-extrabold text-gradient-gold sm:text-4xl">
              {t.services.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {t.services.subtitle}
            </p>
          </div>

          <div className="scene relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, idx) => {
              const Icon = ICONS[service.icon] ?? ShieldCheck;
              const item = t.services.items[idx];
              return (
                <div key={service.id} className="svc-card will-change-transform">
                  <TiltCard max={9} className="h-full">
                    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-azure-soft text-brand">
                        <Icon size={24} strokeWidth={2} />
                      </span>
                      <h3 className="mt-5 text-base font-bold text-brand">
                        {item?.title ?? service.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                        {item?.desc ?? service.desc}
                      </p>
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
