"use client";

import Link from "next/link";
import {
  ChevronRight, ArrowRight, Check, TrendingUp, Globe,
  Image as ImageIcon, Mail, Phone, Instagram,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/interactions/magnetic";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/providers/lang-provider";

const IMG = (name: string) => asset(`/assets/images/portfolio/hananda/${name}`);

const METRICS_OMKIRIM = [
  { value: "10.32%", label: "Google Ads CTR" },
  { value: "31,753+", label: "Klik / Clicks" },
  { value: "6,006+", label: "Leads Generated" },
  { value: "10K+", label: "Cost Per Lead (CPL)" },
];

const METRICS_98ID = [
  { value: "13.63%", label: "Google Ads CTR" },
  { value: "4,007+", label: "Klik / Clicks" },
  { value: "421+", label: "Leads Generated" },
  { value: "29.9K+", label: "Impressions" },
];

const EXPERIENCE = [
  {
    role: "Digital Marketing Specialist",
    roleEn: "Digital Marketing Specialist",
    company: "PT. Bima Utama Sukses Mandiri (Bitama)",
    tasks: [
      "Manajemen marketplace (Indotrading.com)",
      "Pengembangan & optimasi website",
      "Meta Ads: 53K+ tayangan, 270+ jangkauan",
      "Strategi content marketing",
    ],
    tasksEn: [
      "Marketplace management (Indotrading.com)",
      "Website development & optimization",
      "Meta Ads: 53K+ impressions, 270+ reach",
      "Content marketing strategy",
    ],
  },
  {
    role: "Digital Marketing Leader",
    roleEn: "Digital Marketing Leader",
    company: "PT. Perisai Cakrawala Indonesia (Omkirim)",
    tasks: [
      "Google Ads: CTR 10.32%, 6,006+ leads",
      "Redesain website & SEO (8,000+ views/bulan)",
      "Konten media sosial (300+ upload, pertumbuhan follower 75%)",
      "Kampanye musiman (Lebaran, HUT, Grand Opening)",
    ],
    tasksEn: [
      "Google Ads: 10.32% CTR, 6,006+ leads",
      "Website redesign & SEO (8,000+ monthly views)",
      "Social media content (300+ uploads, 75% follower growth)",
      "Season campaign projects (Lebaran, HUT, Grand Opening)",
    ],
  },
  {
    role: "Website Developer Project",
    roleEn: "Website Developer Project",
    company: "PT. Omm Simpan Indonesia (Osin)",
    tasks: [
      "Pengembangan website WordPress (www.osin-asia.com)",
      "Konsep supply chain logistik & UI",
      "Tools: Elementor, CSS, Canva, Photoshop",
    ],
    tasksEn: [
      "WordPress website development (www.osin-asia.com)",
      "Supply chain logistics concept & UI",
      "Tools: Elementor, CSS, Canva, Photoshop",
    ],
  },
  {
    role: "Ads Specialist Freelance",
    roleEn: "Ads Specialist Freelance",
    company: "PT. Sembilan Delapan Vendor Indonesia (98.id)",
    tasks: [
      "Google Ads: CTR 13.63%, 421+ leads",
      "Pengembangan website WordPress (sembilandelapan.id)",
      "Strategi digital presence merek",
    ],
    tasksEn: [
      "Google Ads: 13.63% CTR, 421+ leads",
      "WordPress website development (sembilandelapan.id)",
      "Brand digital presence strategy",
    ],
  },
];

const CERTS = [
  "Mini Course – Digital Marketing",
  "Short Class Social Media Strategy",
  "Digital Practice CFDS",
  "Digital Campaign Mastery",
  "Full Stack Digital Marketing",
];

export function DigitalMarketingContent() {
  const { t, lang } = useLang();
  const isEn = lang === "en";

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative min-h-[70vh] overflow-hidden bg-brand-deep pt-28 pb-16 text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="container-x relative z-10">
            <Reveal>
              <nav className="flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-gold">{t.nav.home}</Link>
                <ChevronRight size={14} />
                <Link href="/portfolio" className="hover:text-gold">{t.nav.portfolio}</Link>
                <ChevronRight size={14} />
                <span className="text-white">Digital Marketing</span>
              </nav>
            </Reveal>
            <div className="mt-10">
              <Reveal index={1}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                  Digital Marketing · 2025
                </span>
              </Reveal>
              <Reveal index={2}>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-glow sm:text-5xl lg:text-[3.2rem]">
                  {isEn ? "Digital Marketing" : "Pemasaran Digital"}
                  <span className="mt-2 block text-2xl font-semibold text-gold sm:text-3xl">
                    {isEn ? "Digital Marketing Specialist" : "Spesialis Pemasaran Digital"}
                  </span>
                </h1>
              </Reveal>
              <Reveal index={3}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                  {isEn
                    ? "A performance marketing specialist focused on digital advertising management, website development, and funnel optimization to measurably increase leads and business conversions."
                    : "Spesialis performance marketing yang berfokus pada pengelolaan iklan digital, pengembangan website, dan optimasi funnel untuk meningkatkan leads dan konversi bisnis secara terukur."}
                </p>
              </Reveal>
              <Reveal index={4}>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
                  <span className="flex items-center gap-1.5"><Mail size={14} className="text-gold" /> whananda92@gmail.com</span>
                  <span className="flex items-center gap-1.5"><Phone size={14} className="text-gold" /> +62 822-1122-5600</span>
                  <span className="flex items-center gap-1.5"><Instagram size={14} className="text-gold" /> @Nandettt</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="border-b border-line bg-white py-14">
          <div className="container-x">
            <Reveal>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-azure">
                Google Ads — PT. Perisai Cakrawala Indonesia (Omkirim) · 2025
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {METRICS_OMKIRIM.map((m, i) => (
                <Reveal key={m.label} index={i}>
                  <div className="rounded-2xl bg-surface p-6 text-center shadow-card">
                    <p className="text-3xl font-extrabold text-brand sm:text-4xl">{m.value}</p>
                    <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-ink-soft">{m.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TENTANG / ABOUT */}
        <section className="bg-surface py-20">
          <div className="container-x grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="flex items-center justify-center rounded-[2rem] bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG("photo2.png")} alt="Hananda" className="w-full object-contain" style={{ mixBlendMode: "multiply" }} loading="lazy" />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  <span className="h-px w-6 bg-gold" /> {isEn ? "About" : "Tentang"}
                </span>
              </Reveal>
              <Reveal index={1}>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-brand sm:text-4xl">
                  Performance Marketing Specialist
                </h2>
              </Reveal>
              <Reveal index={2}>
                <p className="mt-5 leading-relaxed text-ink-soft">
                  {isEn
                    ? <>I am a Digital Marketing Specialist focused on <strong>performance marketing</strong>, specifically in digital advertising management, website development, and funnel optimization to increase leads and conversions. With experience as a Digital Marketing Leader, Ads Specialist, and website developer, I manage campaigns from planning to data-driven evaluation.</>
                    : <>Saya adalah Digital Marketing Specialist yang berfokus pada <strong>performance marketing</strong>, khususnya dalam pengelolaan iklan digital, pengembangan website, dan optimasi funnel untuk meningkatkan leads dan konversi. Memiliki pengalaman sebagai Digital Marketing Leader, Ads Specialist, serta terlibat dalam pengembangan website project, saya terbiasa mengelola campaign dari tahap perencanaan hingga evaluasi berbasis data.</>}
                </p>
              </Reveal>
              <Reveal index={3}>
                <ul className="mt-6 space-y-3">
                  {(isEn
                    ? ["Google Ads & Meta Ads Management", "Website Development (WordPress, Elementor)", "SEO & Content Strategy", "Social Media Content Creation", "Performance Analytics & Reporting"]
                    : ["Manajemen Google Ads & Meta Ads", "Pengembangan Website (WordPress, Elementor)", "Strategi SEO & Konten", "Pembuatan Konten Media Sosial", "Analitik Performa & Pelaporan"]
                  ).map((s) => (
                    <li key={s} className="flex items-center gap-3">
                      <Check size={18} className="shrink-0 text-gold" />
                      <span className="font-medium text-ink">{s}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* TRACK RECORD */}
        <section className="bg-white py-20">
          <div className="container-x">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-6 bg-gold" /> {isEn ? "Work Experience" : "Pengalaman Kerja"}
              </span>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">Track Record</h2>
            </Reveal>
            <div className="mt-12 space-y-8">
              {EXPERIENCE.map((exp, i) => (
                <Reveal key={exp.company} index={i}>
                  <div className="relative grid gap-4 rounded-[1.5rem] bg-surface p-6 shadow-card sm:grid-cols-[200px_1fr] sm:gap-8 sm:p-8">
                    <div className="shrink-0">
                      <p className="text-sm font-bold text-brand">{isEn ? exp.roleEn : exp.role}</p>
                      <p className="mt-0.5 text-xs text-ink-soft">{exp.company}</p>
                    </div>
                    <ul className="space-y-2">
                      {(isEn ? exp.tasksEn : exp.tasks).map((task) => (
                        <li key={task} className="flex items-start gap-2 text-sm text-ink-soft">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* OMKIRIM CASE STUDY */}
        <section className="bg-surface py-20">
          <div className="container-x">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-6 bg-gold" /> Case Study
              </span>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">
                Omkirim – Perisai Cakrawala Indonesia
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-3 max-w-2xl text-ink-soft">
                {isEn
                  ? "Vehicle shipping service to 6 major cities in Indonesia. Managed Google Ads, website, social media content, and season campaigns."
                  : "Layanan pengiriman kendaraan ke 6 kota besar Indonesia. Mengelola Google Ads, website, konten media sosial, dan season campaigns."}
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-4 rounded-[2rem] bg-brand-deep p-8 text-white lg:grid-cols-4">
              {METRICS_OMKIRIM.map((m, i) => (
                <Reveal key={m.label} index={i}>
                  <div className="text-center">
                    <p className="text-2xl font-extrabold text-gold sm:text-3xl">{m.value}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/70">{m.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="overflow-hidden rounded-[1.5rem] shadow-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG("analytics.jpg")} alt="Google Ads Analytics" loading="lazy" className="w-full object-cover" />
                </div>
              </Reveal>
              <Reveal index={1}>
                <div className="flex flex-col justify-center gap-4 p-4">
                  <div className="flex items-start gap-3">
                    <Globe size={20} className="mt-0.5 shrink-0 text-gold" />
                    <div>
                      <p className="font-bold text-brand">Website & SEO</p>
                      <p className="mt-0.5 text-sm text-ink-soft">8,000+ page views/month · 55+ top 3 ranked pages · 236+ index</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp size={20} className="mt-0.5 shrink-0 text-gold" />
                    <div>
                      <p className="font-bold text-brand">Google Ads Performance</p>
                      <p className="mt-0.5 text-sm text-ink-soft">CTR 10.32% · 31,753+ {isEn ? "clicks" : "klik"} · 6,006+ leads · CPL 10K</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ImageIcon size={20} className="mt-0.5 shrink-0 text-gold" />
                    <div>
                      <p className="font-bold text-brand">{isEn ? "Content Creation" : "Pembuatan Konten"}</p>
                      <p className="mt-0.5 text-sm text-ink-soft">300+ upload · 75% {isEn ? "followers growth" : "pertumbuhan follower"} · Season campaigns</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {["omkirim-ad1.jpg", "omkirim-ad2.jpg", "omkirim-ad3.jpg", "omkirim-ad4.jpg"].map((img, i) => (
                <Reveal key={img} index={i}>
                  <div className="overflow-hidden rounded-2xl shadow-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={IMG(img)} alt={`Omkirim campaign ${i + 1}`} loading="lazy" className="w-full object-cover" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BITAMA CASE STUDY */}
        <section className="bg-white py-20">
          <div className="container-x">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-6 bg-gold" /> Case Study
              </span>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">
                Bitama – PT. Bima Utama Sukses Mandiri
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-3 max-w-2xl text-ink-soft">
                {isEn
                  ? "Marketplace & website management, Meta Ads, and content marketing for a company in the industrial & distribution sector."
                  : "Marketplace & website management, Meta Ads, dan content marketing untuk perusahaan yang bergerak di bidang industri & distribusi."}
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="overflow-hidden rounded-[1.5rem] shadow-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG("bitama-website.jpg")} alt="Bitama website" loading="lazy" className="w-full object-cover" />
                </div>
              </Reveal>
              <Reveal index={1}>
                <div className="overflow-hidden rounded-[1.5rem] shadow-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG("bitama-web2.jpg")} alt="Bitama content" loading="lazy" className="w-full object-cover" />
                </div>
              </Reveal>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-5">
              {[
                { value: "270+", label: isEn ? "Meta Ads Reach" : "Jangkauan Meta Ads" },
                { value: "53K+", label: isEn ? "Impressions" : "Tayangan" },
                { value: "55+", label: isEn ? "Interactions" : "Interaksi" },
              ].map((m, i) => (
                <Reveal key={m.label} index={i}>
                  <div className="rounded-2xl bg-surface p-5 text-center shadow-card">
                    <p className="text-2xl font-extrabold text-brand sm:text-3xl">{m.value}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft">{m.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 98.ID CASE STUDY */}
        <section className="bg-surface py-20">
          <div className="container-x">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-6 bg-gold" /> Case Study
              </span>
            </Reveal>
            <Reveal index={1}>
              <h2 className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">
                98.id – PT. Sembilan Delapan Vendor Indonesia
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-3 max-w-2xl text-ink-soft">
                {isEn
                  ? "Google Ads management and website development for an event organizer & e-commerce company. Highest CTR among all clients: 13.63%."
                  : "Google Ads management dan website development untuk perusahaan event organizer & e-commerce. CTR tertinggi di antara semua klien: 13.63%."}
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
              <Reveal>
                <div className="overflow-hidden rounded-[1.5rem] shadow-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG("98id-ad.jpg")} alt="98.id campaign" loading="lazy" className="w-full object-cover" />
                </div>
              </Reveal>
              <Reveal index={1}>
                <div className="grid grid-cols-2 gap-4">
                  {METRICS_98ID.map((m) => (
                    <div key={m.label} className="rounded-2xl bg-white p-5 text-center shadow-card">
                      <p className="text-2xl font-extrabold text-brand sm:text-3xl">{m.value}</p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft">{m.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PORTFOLIO HIGHLIGHTS */}
        <section className="bg-white py-20">
          <div className="container-x">
            <Reveal>
              <h2 className="text-3xl font-extrabold text-brand sm:text-4xl">
                {isEn ? "Portfolio Highlights" : "Sorotan Portofolio"}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {["portfolio-1.jpg", "portfolio-2.jpg"].map((img, i) => (
                <Reveal key={img} index={i}>
                  <div className="overflow-hidden rounded-[1.5rem] shadow-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={IMG(img)} alt={`Portfolio ${i + 1}`} loading="lazy" className="w-full object-cover" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="bg-brand-deep py-14 text-white">
          <div className="container-x text-center">
            <Reveal>
              <h2 className="text-2xl font-extrabold">{isEn ? "Certifications" : "Sertifikasi"}</h2>
            </Reveal>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {CERTS.map((cert, i) => (
                <Reveal key={cert} index={i}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur">
                    <Check size={14} className="text-gold" /> {cert}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-deep py-20 text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="animate-glow pointer-events-none absolute -left-20 top-0 hidden h-72 w-72 rounded-full bg-azure/30 blur-3xl md:block" />
          <div className="container-x relative flex flex-col items-center text-center">
            <Reveal>
              <h2 className="max-w-2xl text-3xl font-extrabold sm:text-4xl">
                {isEn ? "Need Measurable Digital Marketing?" : "Butuh Digital Marketing yang Terukur?"}
              </h2>
            </Reveal>
            <Reveal index={1}>
              <p className="mt-4 max-w-xl text-white/75">
                {isEn
                  ? "Contact the Aetherion Zynera team to discuss the right digital marketing strategy for your business."
                  : "Hubungi tim Aetherion Zynera untuk mendiskusikan strategi digital marketing yang tepat untuk bisnis Anda."}
              </p>
            </Reveal>
            <Reveal index={2}>
              <Magnetic strength={0.4}>
                <Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-300 hover:bg-[#c79f2c]">
                  {isEn ? "Start Consultation" : "Mulai Konsultasi"}
                  <ArrowRight size={18} />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </section>

        {/* BACK */}
        <section className="bg-surface py-10">
          <div className="container-x">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-azure">
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
