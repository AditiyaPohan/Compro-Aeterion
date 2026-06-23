"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight, ChevronRight, Check, ExternalLink, Globe, Code2,
  Smartphone, Layers, AppWindow, ShieldCheck, Wrench, LayoutTemplate,
  Boxes, Search,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/interactions/magnetic";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/providers/lang-provider";

const IMG = (name: string) => asset(`/assets/images/portfolio/it/${name}`);
const LIVE_URL = "https://www.valentinogroup.id/";

/** IT services Aetherion provides */
const SERVICES = [
  {
    icon: <Globe size={22} />,
    title: "Website Company Profile",
    titleEn: "Company Profile Website",
    desc: "Website company profile profesional — cepat, responsif, dan siap SEO.",
    descEn: "Professional company profile websites — fast, responsive, and SEO-ready.",
    accent: "from-azure to-brand",
  },
  {
    icon: <AppWindow size={22} />,
    title: "Web Application",
    titleEn: "Web Application",
    desc: "Aplikasi berbasis web custom untuk kebutuhan bisnis & operasional internal.",
    descEn: "Custom web applications for business and internal operations.",
    accent: "from-brand to-brand-deep",
  },
  {
    icon: <Layers size={22} />,
    title: "Super App",
    titleEn: "Super App",
    desc: "Platform super app multi-fitur dalam satu ekosistem terintegrasi.",
    descEn: "Multi-feature super app platforms within one integrated ecosystem.",
    accent: "from-violet-600 to-brand-deep",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Mobile Android App",
    titleEn: "Mobile Android App",
    desc: "Aplikasi mobile Android yang ringan, andal, dan nyaman digunakan.",
    descEn: "Android mobile apps that are light, reliable, and user-friendly.",
    accent: "from-emerald-600 to-teal-700",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Pentest Aplikasi",
    titleEn: "Application Pentest",
    desc: "Pengujian keamanan aplikasi (penetration testing) untuk menutup celah keamanan.",
    descEn: "Application penetration testing to identify and close security gaps.",
    accent: "from-rose-500 to-rose-700",
  },
  {
    icon: <Wrench size={22} />,
    title: "Maintenance & Support",
    titleEn: "Maintenance & Support",
    desc: "Pemeliharaan, monitoring, dan dukungan teknis berkelanjutan.",
    descEn: "Ongoing maintenance, monitoring, and technical support.",
    accent: "from-gold/80 to-amber-600",
  },
];

/** Browser-style frame around a website screenshot */
function BrowserFrame({ src, alt, url }: { src: string; alt: string; url?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 hidden flex-1 items-center gap-2 rounded-md bg-white px-3 py-1 text-[11px] text-ink-soft sm:flex">
          <Globe size={11} className="text-azure" />
          {url ?? "valentinogroup.id"}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
  );
}

export function ItPortfolioContent() {
  const { t, lang } = useLang();
  const isEn = lang === "en";

  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-brand-deep pt-28 pb-20 text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="animate-glow pointer-events-none absolute -right-32 -top-16 h-[28rem] w-[28rem] rounded-full bg-azure/20 blur-[120px]" />
          <div className="animate-glow pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />
          <div className="container-x relative z-10">
            <Reveal>
              <nav className="flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-gold transition-colors">{t.nav.home}</Link>
                <ChevronRight size={14} />
                <Link href="/portfolio" className="hover:text-gold transition-colors">{t.nav.portfolio}</Link>
                <ChevronRight size={14} />
                <span className="text-white">{isEn ? "IT Solutions" : "Solusi IT"}</span>
              </nav>
            </Reveal>

            <div className="mt-10 max-w-3xl">
              <Reveal index={1}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                  {isEn ? "Digital Solutions Provider" : "Penyedia Jasa Solusi Digital"}
                </span>
              </Reveal>
              <Reveal index={2}>
                <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-glow sm:text-5xl lg:text-[3.4rem]">
                  {isEn ? "IT Solutions" : "Solusi IT"}
                  <span className="mt-2 block text-2xl font-semibold text-gold sm:text-3xl">
                    {isEn
                      ? "Website, Apps, Super App & Application Security"
                      : "Website, Aplikasi, Super App & Keamanan Aplikasi"}
                  </span>
                </h1>
              </Reveal>
              <Reveal index={3}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                  {isEn
                    ? "PT Aetherion Zynera Indonesia is your end-to-end IT partner — we build company profile websites, web applications, super apps, and Android mobile apps, and secure them through application penetration testing."
                    : "PT Aetherion Zynera Indonesia adalah partner IT end-to-end Anda — kami membangun website company profile, web application, super app, dan aplikasi mobile Android, serta mengamankannya melalui penetration testing aplikasi."}
                </p>
              </Reveal>
              <Reveal index={4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Website", "Web Apps", "Super App", "Mobile Android", "Pentest"].map((s) => (
                    <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal index={5}>
                <Magnetic strength={0.3}>
                  <Link
                    href="/#contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-300 hover:bg-[#c79f2c]"
                  >
                    {isEn ? "Start a Project" : "Mulai Proyek"}
                    <ArrowRight size={16} />
                  </Link>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="bg-white py-20">
          <div className="container-x">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-6 bg-gold" /> {isEn ? "Our IT Services" : "Layanan IT Kami"}
              </span>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-4 max-w-2xl text-3xl font-extrabold text-brand sm:text-4xl">
                {isEn ? "Everything You Need, Built In-House" : "Semua Kebutuhan Digital, Kami Kerjakan"}
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} index={i % 3}>
                  <div className="group h-full rounded-[1.5rem] border border-line bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow`}>
                      {s.icon}
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-brand">{isEn ? s.titleEn : s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{isEn ? s.descEn : s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="border-y border-line bg-surface py-12">
          <div className="container-x grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "6+", label: isEn ? "IT Services" : "Layanan IT" },
              { value: "End-to-End", label: isEn ? "Development" : "Pengerjaan" },
              { value: "Live", label: isEn ? "Client Projects" : "Proyek Klien" },
              { value: "Secure", label: isEn ? "By Pentest" : "Lewat Pentest" },
            ].map((s, i) => (
              <Reveal key={s.label} index={i}>
                <div className="rounded-2xl bg-white p-6 text-center shadow-card">
                  <p className="text-2xl font-extrabold text-brand sm:text-3xl">{s.value}</p>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-ink-soft">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── FEATURED CASE STUDY: Valentino Group ── */}
        <section className="bg-white py-20">
          <div className="container-x">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-6 bg-gold" /> {isEn ? "Case Study · Website" : "Studi Kasus · Website"}
              </span>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">
                {isEn ? "One of Our Website Builds" : "Salah Satu Hasil Pembuatan Website Kami"}
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-3 max-w-2xl text-ink-soft">
                {isEn
                  ? "The Aetherion team designed and developed this premium corporate website for our client, Valentino Group — responsive, fast, SEO-ready, complete with a product catalog and an interactive 'Design Your Space' room visualizer. Now live in production."
                  : "Tim Aetherion merancang dan mengembangkan website korporat premium ini untuk klien kami, Valentino Group — responsif, cepat, siap SEO, lengkap dengan katalog produk dan visualizer ruangan interaktif 'Design Your Space'. Kini telah tayang di produksi."}
              </p>
            </Reveal>

            <Reveal index={3}>
              <div className="mt-10">
                <BrowserFrame src={IMG("web-hero.jpg")} alt="Valentino Group website by Aetherion" />
              </div>
            </Reveal>

            {/* What we built + live link */}
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              <Reveal>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: <LayoutTemplate size={18} />, t: isEn ? "Corporate Website" : "Website Korporat", d: isEn ? "Striking homepage & brand story." : "Homepage memukau & brand story." },
                    { icon: <Boxes size={18} />, t: isEn ? "Product Catalog" : "Katalog Produk", d: isEn ? "Organized slab & tile collections." : "Koleksi slab & tile yang tertata." },
                    { icon: <Code2 size={18} />, t: isEn ? "Room Visualizer" : "Visualizer Ruangan", d: isEn ? "Interactive 'Design Your Space'." : "Interaktif 'Design Your Space'." },
                    { icon: <Search size={18} />, t: isEn ? "SEO & Performance" : "SEO & Performa", d: isEn ? "Fast, indexable, mobile-first." : "Cepat, terindeks, mobile-first." },
                  ].map((f) => (
                    <div key={f.t} className="flex items-start gap-3 rounded-2xl bg-surface p-4 shadow-card">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">{f.icon}</span>
                      <div>
                        <p className="text-sm font-bold text-brand">{f.t}</p>
                        <p className="mt-0.5 text-xs text-ink-soft">{f.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal index={1}>
                <div className="flex h-full flex-col justify-center rounded-[1.5rem] bg-brand-deep p-7 text-white shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Client</p>
                  <p className="mt-1 text-xl font-bold">Valentino Group</p>
                  <p className="mt-3 text-sm text-white/70">
                    {isEn ? "Built & delivered by PT Aetherion Zynera Indonesia." : "Dibangun & diserahkan oleh PT Aetherion Zynera Indonesia."}
                  </p>
                  <a
                    href={LIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-[#c79f2c]"
                  >
                    {isEn ? "Visit Live Site" : "Kunjungi Situs Live"} <ExternalLink size={15} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Screenshot gallery */}
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {[
                { src: "web-about.jpg", t: isEn ? "Brand Story" : "Brand Story" },
                { src: "web-features.jpg", t: isEn ? "Why Valentino" : "Keunggulan" },
                { src: "web-interior.jpg", t: isEn ? "Interior Showcase" : "Showcase Interior" },
                { src: "web-visualizer.jpg", t: isEn ? "Design Your Space" : "Design Your Space" },
              ].map((g, i) => (
                <Reveal key={g.src} index={i % 2}>
                  <div>
                    <BrowserFrame src={IMG(g.src)} alt={g.t} />
                    <p className="mt-3 text-sm font-medium text-ink-soft">{g.t}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUSTED BY ── */}
        <section className="bg-surface py-20">
          <div className="container-x">
            <Reveal>
              <h2 className="text-center text-3xl font-extrabold text-brand sm:text-4xl">
                {isEn ? "Trusted Across Industries" : "Dipercaya Lintas Industri"}
              </h2>
            </Reveal>
            <Reveal index={1}>
              <p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
                {isEn
                  ? "Brands and partners featured across the digital products we deliver."
                  : "Brand dan mitra yang tampil di berbagai produk digital yang kami kerjakan."}
              </p>
            </Reveal>
            <Reveal index={2}>
              <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-card sm:p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG("web-clients.jpg")} alt="Client brands" loading="lazy" className="block w-full" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-deep py-20 text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="animate-glow pointer-events-none absolute -left-20 top-0 hidden h-72 w-72 rounded-full bg-azure/30 blur-3xl md:block" />
          <div className="container-x relative flex flex-col items-center text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                {isEn ? "Get In Touch" : "Hubungi Kami"}
              </span>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-5 max-w-2xl text-3xl font-extrabold sm:text-4xl">
                {isEn ? "Have a Website or App in Mind?" : "Punya Rencana Website atau Aplikasi?"}
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-4 max-w-xl text-white/75">
                {isEn
                  ? "From company profile websites to web & mobile apps, super apps, and application security — let the Aetherion team build it for you."
                  : "Dari website company profile hingga web & mobile app, super app, dan keamanan aplikasi — biarkan tim Aetherion yang mengerjakannya untuk Anda."}
              </p>
            </Reveal>
            <Reveal index={3}>
              <Magnetic strength={0.4}>
                <Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-300 hover:bg-[#c79f2c]">
                  {isEn ? "Start a Project" : "Mulai Proyek"}
                  <ArrowRight size={18} />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </section>

        {/* ── BACK ── */}
        <section className="bg-surface py-10">
          <div className="container-x">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-azure transition-colors">
              <ChevronRight size={16} className="rotate-180" />
              {isEn ? "Back to Portfolio" : "Kembali ke Portofolio"}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
