"use client";

import { useRef } from "react";
import Link from "next/link";
import { ShieldCheck, Palette, TrendingUp, Cpu, ArrowUpRight, type LucideIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SERVICES } from "@/lib/data";
import { ParticleField } from "@/components/ui/particle-field";
import { TiltCard } from "@/components/interactions/tilt-card";
import { Floating } from "@/components/interactions/floating";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  Palette,
  TrendingUp,
  Cpu,
};

export function Services() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".svc-card");
        cards.forEach((card, i) => {
          // Emerge from depth → scrub mengikat ke posisi scroll
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 150,
              z: -300,
              scale: 0.7,
              rotateX: 30,
              rotateY: i % 2 ? 12 : -12,
            },
            {
              opacity: 1,
              y: 0,
              z: 0,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                end: "top 45%",
                scrub: 1.1,
              },
            }
          );
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
          {/* layered moving background */}
          <div
            data-speed="0.3"
            className="layer absolute inset-0 bg-center bg-cover opacity-[0.12]"
            style={{ backgroundImage: "url(/assets/network.svg)" }}
          />
          <div data-speed="0.55" className="layer bg-grid absolute inset-0 opacity-25" />
          <div
            data-speed="0.25"
            className="layer pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-azure/30 blur-3xl"
          />
          <div
            data-speed="1.3"
            className="layer absolute inset-0"
          >
            <ParticleField count={14} color="bg-gold/50" />
          </div>

          {/* heading */}
          <div className="relative mx-auto max-w-2xl text-center">
            <Floating amplitude={6} duration={6}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-6 bg-gold" />
                What We Do
              </span>
            </Floating>
            <h2 className="mt-4 text-3xl font-extrabold text-gradient-gold sm:text-4xl">
              Zynera Core Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Integrated solution to help your business grow, optimize performance
              and achieve sustainable goals.
            </p>
          </div>

          {/* cards */}
          <div className="scene relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.icon] ?? ShieldCheck;
              return (
                <div key={service.id} className="svc-card will-change-transform">
                  <TiltCard max={9} className="h-full">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-azure-soft text-brand transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                        <Icon size={24} strokeWidth={2} />
                      </span>
                      <h3 className="mt-5 text-base font-bold text-brand">
                        {service.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                        {service.desc}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand transition-colors group-hover:text-azure">
                        Learn more
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
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
