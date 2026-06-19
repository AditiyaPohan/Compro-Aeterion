import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  Briefcase,
  Palette,
  TrendingUp,
  Cpu,
  Server,
  Check,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/interactions/magnetic";
import { SERVICE_DETAILS, getServiceDetail, SITE } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  Briefcase,
  Palette,
  TrendingUp,
  Cpu,
  Server,
};

export function generateStaticParams() {
  return SERVICE_DETAILS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceDetail(slug);
  if (!svc) return { title: "Service Not Found" };
  return {
    title: svc.title,
    description: svc.intro,
    openGraph: {
      title: `${svc.title} — ${SITE.name}`,
      description: svc.intro,
      images: [svc.image],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getServiceDetail(slug);
  if (!svc) notFound();

  const Icon = ICONS[svc.icon] ?? ShieldCheck;
  const others = SERVICE_DETAILS.filter((s) => s.slug !== svc.slug);

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-brand-deep pt-24">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${svc.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-brand-deep/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep to-transparent" />

          <div className="container-x relative z-10 py-16 text-white">
            {/* breadcrumb */}
            <Reveal>
              <nav className="flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-gold">
                  Home
                </Link>
                <ChevronRight size={14} />
                <Link href="/#services" className="hover:text-gold">
                  Services
                </Link>
                <ChevronRight size={14} />
                <span className="text-white">{svc.title}</span>
              </nav>
            </Reveal>

            <Reveal index={1}>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                <Icon size={15} className="text-gold" />
                Aetherion Service
              </span>
            </Reveal>

            <Reveal index={2}>
              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.1] text-glow sm:text-5xl">
                {svc.title}
              </h1>
            </Reveal>
            <Reveal index={3}>
              <p className="mt-5 max-w-2xl text-lg text-white/80">{svc.tagline}</p>
            </Reveal>
            <Reveal index={4}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Magnetic strength={0.4}>
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-300 hover:bg-[#c79f2c]"
                  >
                    Get Consultation
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Magnetic>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Portfolio
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* OVERVIEW + BENEFITS */}
        <section className="bg-white py-24">
          <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-azure">
                  <span className="h-px w-6 bg-gold" />
                  Overview
                </span>
              </Reveal>
              <Reveal index={1}>
                <h2 className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">
                  What this service is — and why it matters
                </h2>
              </Reveal>
              <Reveal index={2}>
                <p className="mt-5 text-lg font-medium text-ink">{svc.intro}</p>
              </Reveal>
              {svc.about.map((p, i) => (
                <Reveal key={i} index={3 + i}>
                  <p className="mt-4 leading-relaxed text-ink-soft">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal index={2}>
              <div className="rounded-[2rem] bg-surface p-8 shadow-card sm:p-10">
                <h3 className="text-lg font-bold text-brand">Why choose us</h3>
                <ul className="mt-6 space-y-4">
                  {svc.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="font-medium text-ink">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* OFFERINGS */}
        <section className="bg-surface py-24">
          <div className="container-x">
            <div className="max-w-2xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-azure">
                  <span className="h-px w-6 bg-gold" />
                  Capabilities
                </span>
              </Reveal>
              <Reveal index={1}>
                <h2 className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">
                  What we deliver
                </h2>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {svc.offerings.map((o, i) => (
                <Reveal key={o.label} index={i}>
                  <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={o.image}
                        alt={o.label}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand/30 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-brand">{o.label}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{o.desc}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white py-24">
          <div className="container-x">
            <div className="max-w-2xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-azure">
                  <span className="h-px w-6 bg-gold" />
                  How we work
                </span>
              </Reveal>
              <Reveal index={1}>
                <h2 className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">
                  Our process
                </h2>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {svc.process.map((step, i) => (
                <Reveal key={step.title} index={i}>
                  <div className="relative h-full rounded-2xl border border-line bg-surface p-6">
                    <span className="text-3xl font-extrabold text-gold/40">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-brand">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-brand-deep py-20 text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="container-x relative flex flex-col items-center text-center">
            <Reveal>
              <h2 className="max-w-2xl text-3xl font-extrabold sm:text-4xl">
                Ready to get started with {svc.title.split("—")[0].trim()}?
              </h2>
            </Reveal>
            <Reveal index={1}>
              <p className="mt-4 max-w-xl text-white/75">
                Let&apos;s discuss how we can help your business grow. Our team replies
                within one business day.
              </p>
            </Reveal>
            <Reveal index={2}>
              <Magnetic strength={0.4}>
                <Link
                  href="/#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-300 hover:bg-[#c79f2c]"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </section>

        {/* OTHER SERVICES */}
        <section className="bg-surface py-20">
          <div className="container-x">
            <h2 className="text-2xl font-extrabold text-brand">Explore other services</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {others.map((o) => {
                const OIcon = ICONS[o.icon] ?? ShieldCheck;
                return (
                  <Link
                    key={o.slug}
                    href={`/services/${o.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-azure-soft text-brand">
                        <OIcon size={18} />
                      </span>
                      <span className="text-sm font-semibold text-ink group-hover:text-brand">
                        {o.title.split("—")[0].split(",")[0].trim()}
                      </span>
                    </span>
                    <ArrowUpRight size={16} className="text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
