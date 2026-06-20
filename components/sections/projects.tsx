"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { TiltCard } from "@/components/interactions/tilt-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

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
  return (
    <section id="portfolio" className="relative overflow-hidden bg-white py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Empowering Business Growth Through Innovation and Technology."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} index={i % 4}>
              <ProjectCard
                index={i}
                title={p.title}
                client={p.client}
                slug={p.slug}
                image={p.image}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-brand transition-colors hover:bg-surface"
          >
            View All Projects
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
