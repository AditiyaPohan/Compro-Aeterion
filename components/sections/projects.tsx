"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { PROJECTS } from "@/lib/data";
import { TiltCard } from "@/components/interactions/tilt-card";

function ProjectCard({
  index,
  title,
  client,
  slug,
  image,
  panel = false,
}: {
  index: number;
  title: string;
  client: string;
  slug: string;
  image: string;
  panel?: boolean;
}) {
  return (
    <TiltCard
      max={8}
      className={panel ? "w-[78vw] shrink-0 sm:w-[60vw] lg:w-[30vw]" : "w-full"}
    >
      <Link
        href={`/portfolio/${slug}`}
        className="group block cursor-pointer overflow-hidden rounded-[1.6rem] bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand/50 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-brand">
            0{index + 1}
          </span>
          <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-gold text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-lg font-bold text-brand transition-colors group-hover:text-azure">
            {title}
          </h3>
          <p className="mt-1 text-sm text-ink-soft">{client}</p>
        </div>
      </Link>
    </TiltCard>
  );
}

export function Projects() {
  const pin = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const distance = () =>
          track.current!.scrollWidth - window.innerWidth + 120;

        gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: pin.current,
            start: "top top",
            end: () => "+=" + distance(),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: pin }
  );

  return (
    <section id="portfolio" className="relative overflow-hidden bg-white">
      {/* DESKTOP — pinned horizontal */}
      <div ref={pin} className="relative hidden h-screen lg:block">
        <div
          data-speed="0.4"
          className="layer pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-azure-soft blur-3xl"
        />
        <div
          ref={track}
          className="flex h-full items-center gap-8 pl-[8vw] pr-[4vw] will-change-transform"
        >
          {/* intro panel */}
          <div className="w-[60vw] shrink-0 lg:w-[26vw]">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-azure">
              <span className="h-px w-6 bg-gold" />
              Portfolio
            </span>
            <h2 className="mt-4 text-4xl font-extrabold text-brand xl:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Empowering Business Growth Through Innovation and Technology. Scroll
              to explore selected work.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-azure">
              <span>Scroll</span>
              <span className="h-px w-12 bg-azure" />
              <ArrowUpRight size={16} className="rotate-45" />
            </div>
          </div>

          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} index={i} title={p.title} client={p.client} slug={p.slug} image={p.image} panel />
          ))}
        </div>
      </div>

      {/* MOBILE — vertical stack */}
      <div className="container-x py-20 lg:hidden">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-azure">
          <span className="h-px w-6 bg-gold" />
          Portfolio
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-brand">Featured Projects</h2>
        <p className="mt-3 text-base leading-relaxed text-ink-soft">
          Empowering Business Growth Through Innovation and Technology.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} index={i} title={p.title} client={p.client} slug={p.slug} image={p.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
