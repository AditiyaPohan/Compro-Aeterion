"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight, ChevronRight, Check, ExternalLink, Globe, Code2,
  Smartphone, Search, LayoutTemplate, Boxes, Gauge, ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/interactions/magnetic";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/providers/lang-provider";

const IMG = (name: string) => asset(`/assets/images/portfolio/it/${name}`);
const LIVE_URL = "https://www.valentinogroup.id/";

const STACK = [
  { icon: <LayoutTemplate size={15} />, label: "Corporate Website" },
  { icon: <Boxes size={15} />, label: "Product Catalog" },
  { icon: <Smartphone size={15} />, label: "Responsive Design" },
  { icon: <Search size={15} />, label: "SEO Optimized" },
  { icon: <Gauge size={15} />, label: "Performance" },
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

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
              <div>
                <Reveal index={1}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                    {isEn ? "Web Development · 2024" : "Pengembangan Web · 2024"}
                  </span>
                </Reveal>
                <Reveal index={2}>
                  <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-glow sm:text-5xl">
                    {isEn ? "IT Solutions" : "Solusi IT"}
                    <span className="mt-2 block text-2xl font-semibold text-gold sm:text-3xl">
                      {isEn ? "Valentino Group Corporate Website" : "Website Korporat Valentino Group"}
                    </span>
                  </h1>
                </Reveal>
                <Reveal index={3}>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                    {isEn
                      ? "A premium corporate website built by the Aetherion team for Valentino Group — a leading large-slab tile brand. Modern, fast, responsive, and SEO-ready, complete with a product catalog and an interactive 'Design Your Space' visualizer."
                      : "Website korporat premium yang dibangun tim Aetherion untuk Valentino Group — brand tile large-slab ternama. Modern, cepat, responsif, dan siap SEO, lengkap dengan katalog produk serta visualizer interaktif 'Design Your Space'."}
                  </p>
                </Reveal>
                <Reveal index={4}>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {STACK.map((s) => (
                      <span key={s.label} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
                        <span className="text-gold">{s.icon}</span>
                        {s.label}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal index={5}>
                  <Magnetic strength={0.3}>
                    <a
                      href={LIVE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-300 hover:bg-[#c79f2c]"
                    >
                      {isEn ? "Visit Live Site" : "Kunjungi Situs Live"}
                      <ExternalLink size={16} />
                    </a>
                  </Magnetic>
                </Reveal>
              </div>

              <Reveal index={2}>
                <BrowserFrame src={IMG("web-hero.jpg")} alt="Valentino Group homepage" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="border-b border-line bg-white py-12">
          <div className="container-x grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "100%", label: isEn ? "Responsive" : "Responsif" },
              { value: "SEO", label: isEn ? "Optimized" : "Teroptimasi" },
              { value: "6+", label: isEn ? "Page Sections" : "Seksi Halaman" },
              { value: "Live", label: isEn ? "In Production" : "Tayang Produksi" },
            ].map((s, i) => (
              <Reveal key={s.label} index={i}>
                <div className="rounded-2xl bg-surface p-6 text-center shadow-card">
                  <p className="text-3xl font-extrabold text-brand sm:text-4xl">{s.value}</p>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-ink-soft">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── OVERVIEW + SCOPE ── */}
        <section className="bg-surface py-20">
          <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  <span className="h-px w-6 bg-gold" /> Overview
                </span>
              </Reveal>
              <Reveal index={1}>
                <h2 className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">
                  {isEn ? "What We Built" : "Yang Kami Bangun"}
                </h2>
              </Reveal>
              <Reveal index={2}>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  {isEn
                    ? "We designed and developed a complete corporate web experience for Valentino Group: a striking homepage, brand story, product catalog, an interactive room visualizer to preview tiles on walls and floors, and a trusted-by section showcasing major partners — all wrapped in a fast, mobile-first, SEO-friendly build."
                    : "Kami merancang dan mengembangkan pengalaman web korporat lengkap untuk Valentino Group: homepage yang memukau, brand story, katalog produk, visualizer ruangan interaktif untuk pratinjau tile pada dinding dan lantai, serta bagian mitra terpercaya — semuanya dalam build yang cepat, mobile-first, dan ramah SEO."}
                </p>
              </Reveal>
              <Reveal index={3}>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: <Code2 size={18} />, t: isEn ? "Custom Web Development" : "Pengembangan Web Kustom", d: isEn ? "Hand-crafted, component-based front-end." : "Front-end berbasis komponen yang rapi." },
                    { icon: <Boxes size={18} />, t: isEn ? "Product Catalog" : "Katalog Produk", d: isEn ? "Organized slab & tile collections." : "Koleksi slab & tile yang tertata." },
                    { icon: <LayoutTemplate size={18} />, t: isEn ? "Room Visualizer" : "Visualizer Ruangan", d: isEn ? "‘Design Your Space’ interactive preview." : "Pratinjau interaktif ‘Design Your Space’." },
                    { icon: <ShieldCheck size={18} />, t: isEn ? "SEO & Performance" : "SEO & Performa", d: isEn ? "Fast, indexable, mobile-first." : "Cepat, terindeks, mobile-first." },
                  ].map((f) => (
                    <div key={f.t} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-card">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">{f.icon}</span>
                      <div>
                        <p className="text-sm font-bold text-brand">{f.t}</p>
                        <p className="mt-0.5 text-xs text-ink-soft">{f.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal index={2}>
              <div className="rounded-[2rem] bg-white p-8 shadow-card">
                <h3 className="text-lg font-bold text-brand">{isEn ? "Project Scope" : "Lingkup Proyek"}</h3>
                <ul className="mt-6 space-y-4">
                  {(isEn
                    ? ["Corporate website design & development", "Responsive layout (desktop, tablet, mobile)", "Product catalog & collection pages", "Interactive room/tile visualizer", "SEO setup & performance tuning", "Partner & client showcase"]
                    : ["Desain & pengembangan website korporat", "Layout responsif (desktop, tablet, mobile)", "Katalog produk & halaman koleksi", "Visualizer ruangan/tile interaktif", "Setup SEO & optimasi performa", "Showcase mitra & klien"]
                  ).map((s) => (
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
                  <p className="font-semibold text-ink">Valentino Group</p>
                  <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-azure hover:text-brand transition-colors">
                    www.valentinogroup.id <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── SCREENSHOT GALLERY ── */}
        <section className="bg-white py-20">
          <div className="container-x">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-6 bg-gold" /> {isEn ? "Live Screenshots" : "Tangkapan Layar Situs"}
              </span>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">
                {isEn ? "A Look Inside the Website" : "Lihat Lebih Dekat Website-nya"}
              </h2>
            </Reveal>

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
                {isEn ? "Trusted by Leading Brands" : "Dipercaya Brand Ternama"}
              </h2>
            </Reveal>
            <Reveal index={1}>
              <p className="mx-auto mt-3 max-w-2xl text-center text-ink-soft">
                {isEn
                  ? "Valentino Group's partners and clients featured across the website we built."
                  : "Mitra dan klien Valentino Group yang ditampilkan di seluruh website yang kami bangun."}
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
                {isEn ? "Need a Website That Performs?" : "Butuh Website yang Berperforma?"}
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-4 max-w-xl text-white/75">
                {isEn
                  ? "From corporate sites to web apps and custom systems — let the Aetherion team build your digital presence."
                  : "Dari website korporat hingga web app dan sistem kustom — biarkan tim Aetherion membangun kehadiran digital Anda."}
              </p>
            </Reveal>
            <Reveal index={3}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Magnetic strength={0.4}>
                  <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-300 hover:bg-[#c79f2c]">
                    {isEn ? "Start a Project" : "Mulai Proyek"}
                    <ArrowRight size={18} />
                  </Link>
                </Magnetic>
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-white/10">
                  {isEn ? "View Live Site" : "Lihat Situs Live"}
                  <ExternalLink size={16} />
                </a>
              </div>
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
