"use client";

import Link from "next/link";
import { Check, ArrowRight, ChevronRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/interactions/magnetic";
import { useLang } from "@/components/providers/lang-provider";
import type { Project } from "@/lib/data";

export function ProjectDetailContent({
  project,
  others,
}: {
  project: Project;
  others: Project[];
}) {
  const { t } = useLang();

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-brand-deep pt-24">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/70 to-brand-deep/30" />
          <div className="container-x relative z-10 py-16 text-white">
            <Reveal>
              <nav className="flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-gold">{t.nav.home}</Link>
                <ChevronRight size={14} />
                <Link href="/portfolio" className="hover:text-gold">{t.nav.portfolio}</Link>
                <ChevronRight size={14} />
                <span className="text-white">{project.title}</span>
              </nav>
            </Reveal>
            <Reveal index={1}>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                {project.category} · {project.year}
              </span>
            </Reveal>
            <Reveal index={2}>
              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.1] text-glow sm:text-5xl">
                {project.title}
              </h1>
            </Reveal>
            <Reveal index={3}>
              <p className="mt-4 max-w-2xl text-lg text-white/80">{project.summary}</p>
            </Reveal>
          </div>
        </section>

        {/* RESULTS */}
        <section className="border-b border-line bg-white py-12">
          <div className="container-x grid grid-cols-3 gap-6">
            {project.results.map((r) => (
              <Reveal key={r.label} className="text-center">
                <p className="text-3xl font-extrabold text-brand sm:text-4xl">{r.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft sm:text-sm">
                  {r.label}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* OVERVIEW + SCOPE */}
        <section className="bg-white py-24">
          <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-azure">
                  <span className="h-px w-6 bg-gold" />
                  Overview
                </span>
              </Reveal>
              <Reveal index={1}>
                <h2 className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">
                  {t.serviceDetail.ctaHeading === "Ready to Get Started?"
                    ? "The challenge & outcome"
                    : "Tantangan & Hasil"}
                </h2>
              </Reveal>
              <Reveal index={2}>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">{project.description}</p>
              </Reveal>
            </div>

            <Reveal index={2}>
              <div className="rounded-[2rem] bg-surface p-8 shadow-card">
                <h3 className="text-lg font-bold text-brand">{t.portfolio.scopeLabel}</h3>
                <ul className="mt-6 space-y-4">
                  {project.scope.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="font-medium text-ink">{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-line pt-6 text-sm">
                  <p className="text-ink-soft">Client</p>
                  <p className="font-semibold text-ink">{project.client}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-brand-deep py-20 text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="container-x relative flex flex-col items-center text-center">
            <Reveal>
              <h2 className="max-w-2xl text-3xl font-extrabold sm:text-4xl">
                {t.serviceDetail.ctaHeading}
              </h2>
            </Reveal>
            <Reveal index={1}>
              <Magnetic strength={0.4}>
                <Link
                  href="/#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-300 hover:bg-[#c79f2c]"
                >
                  {t.serviceDetail.ctaBtn}
                  <ArrowRight size={18} />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </section>

        {/* OTHER PROJECTS */}
        <section className="bg-surface py-20">
          <div className="container-x">
            <h2 className="text-2xl font-extrabold text-brand">{t.portfolio.otherLabel}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-brand group-hover:text-azure">{p.title}</h3>
                    <ArrowUpRight size={14} className="text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
