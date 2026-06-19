import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/ui/reveal";
import { PROJECTS, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Selected work by ${SITE.legalName} across audit, branding, digital marketing, and IT solutions.`,
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-brand-deep pt-32 pb-20 text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="animate-glow pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-azure/30 blur-[120px]" />
          <div className="container-x relative">
            <Reveal>
              <nav className="flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-gold">
                  Home
                </Link>
                <ChevronRight size={14} />
                <span className="text-white">Portfolio</span>
              </nav>
            </Reveal>
            <Reveal index={1}>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-6 bg-gold" />
                Our Work
              </span>
            </Reveal>
            <Reveal index={2}>
              <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] text-glow sm:text-5xl">
                Featured Projects
              </h1>
            </Reveal>
            <Reveal index={3}>
              <p className="mt-5 max-w-2xl text-lg text-white/80">
                Empowering business growth through innovation and technology — a
                selection of work across our practice areas.
              </p>
            </Reveal>
          </div>
        </section>

        {/* GRID */}
        <section className="bg-white py-24">
          <div className="container-x grid gap-8 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} index={i % 2}>
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="group block overflow-hidden rounded-[1.6rem] bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/50 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-brand">
                      {p.category}
                    </span>
                    <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-gold text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-azure">
                      {p.client} · {p.year}
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-brand transition-colors group-hover:text-azure">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
