"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight, ChevronRight, Check, Sparkles, Camera, Megaphone,
  Trophy, Fish, Wand2,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/interactions/magnetic";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/providers/lang-provider";

const IMG = (name: string) => asset(`/assets/images/portfolio/design/${name}`);

const TOOLS = ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Clip Studio Paint"];

type Work = {
  id: string;
  tag: string;
  tagEn: string;
  title: string;
  titleEn: string;
  client: string;
  desc: string;
  descEn: string;
  icon: React.ReactNode;
  accent: string;
  images: { src: string; ratio: "portrait" | "square" | "wide" | "story" }[];
};

const WORKS: Work[] = [
  {
    id: "digital-imaging",
    tag: "Digital Imaging",
    tagEn: "Digital Imaging",
    title: "Manipulasi Produk — Argent & Jahe Wangi",
    titleEn: "Product Manipulation — Argent & Jahe Wangi",
    client: "Creative Project",
    desc: "Komposisi produk dengan teknik digital imaging (digital manipulation) — memadukan fotografi, ilustrasi, dan tipografi menjadi visual iklan produk yang dramatis dan premium.",
    descEn: "Product compositions using digital imaging techniques — merging photography, illustration, and typography into dramatic, premium product advertising visuals.",
    icon: <Wand2 size={18} />,
    accent: "from-azure to-brand",
    images: [
      { src: "argent.jpg", ratio: "portrait" },
      { src: "jahewangi.jpg", ratio: "portrait" },
    ],
  },
  {
    id: "conceptual",
    tag: "Conceptual Photography",
    tagEn: "Conceptual Photography",
    title: "Fotografi Konseptual",
    titleEn: "Conceptual Photography",
    client: "Creative Project",
    desc: "Eksplorasi narasi visual melalui konsep, pencahayaan, dan pengarahan gaya — menghasilkan karya foto bergaya editorial yang kuat dan penuh karakter.",
    descEn: "Visual narrative exploration through concept, lighting, and styling direction — producing strong, editorial-style photographic works full of character.",
    icon: <Camera size={18} />,
    accent: "from-brand to-brand-deep",
    images: [
      { src: "conceptual-1.jpg", ratio: "portrait" },
    ],
  },
  {
    id: "softbank",
    tag: "Product Advertising",
    tagEn: "Product Advertising",
    title: "Iklan Produk — SoftBank",
    titleEn: "Product Advertising — SoftBank",
    client: "SoftBank",
    desc: "Desain materi advertising untuk produk konektivitas SoftBank — visual yang informatif dan menjual untuk kebutuhan promosi WiFi rumah dan paket data.",
    descEn: "Advertising material design for SoftBank connectivity products — informative, sales-driven visuals for home WiFi and data plan promotions.",
    icon: <Megaphone size={18} />,
    accent: "from-sky-500 to-brand-deep",
    images: [
      { src: "softbank-1.jpg", ratio: "square" },
      { src: "softbank-2.jpg", ratio: "square" },
    ],
  },
  {
    id: "tm-estetik",
    tag: "Social Media · Skincare",
    tagEn: "Social Media · Skincare",
    title: "Konten Skincare — TM Estetik",
    titleEn: "Skincare Content — TM Estetik",
    client: "TM Estetik",
    desc: "Produksi konten feeds & story Instagram untuk brand skincare TM Estetik — meliputi promosi produk (Sunscreen, Acne Serum), campaign musiman, dan konten edukasi yang konsisten secara visual.",
    descEn: "Instagram feeds & story content production for TM Estetik skincare brand — covering product promotions (Sunscreen, Acne Serum), seasonal campaigns, and visually consistent educational content.",
    icon: <Sparkles size={18} />,
    accent: "from-pink-500 to-rose-600",
    images: [
      { src: "tm-1.jpg", ratio: "square" },
      { src: "tm-2.jpg", ratio: "square" },
      { src: "tm-3.jpg", ratio: "story" },
      { src: "tm-4.jpg", ratio: "story" },
      { src: "tm-5.jpg", ratio: "story" },
      { src: "tm-6.jpg", ratio: "story" },
    ],
  },
  {
    id: "rupakuy",
    tag: "Event Design · Esports",
    tagEn: "Event Design · Esports",
    title: "Turnamen MLBB — PANTURA",
    titleEn: "MLBB Tournament — PANTURA",
    client: "Rupakuy Creative",
    desc: "Desain visual lengkap untuk turnamen Mobile Legends (MLBB) bertajuk PANTURA bersama Event Organizer Rupakuy Creative — poster, materi promosi, dan kelengkapan visual event.",
    descEn: "Complete visual design for the PANTURA Mobile Legends (MLBB) tournament with Rupakuy Creative Event Organizer — posters, promotional materials, and event visual assets.",
    icon: <Trophy size={18} />,
    accent: "from-violet-600 to-brand-deep",
    images: [
      { src: "rupakuy-1.jpg", ratio: "portrait" },
      { src: "rupakuy-2.jpg", ratio: "portrait" },
      { src: "rupakuy-3.jpg", ratio: "wide" },
    ],
  },
  {
    id: "surya-duta",
    tag: "Social Media · Advertising",
    tagEn: "Social Media · Advertising",
    title: "Iklan Produk — Surya Duta Internasional",
    titleEn: "Product Advertising — Surya Duta Internasional",
    client: "PT. Surya Duta Internasional",
    desc: "Konten advertising feeds & story Instagram untuk produk aquarium PT. Surya Duta Internasional (Aqura, Recent, Wild Oscar) — visual produk yang rapi, informatif, dan konsisten.",
    descEn: "Instagram feeds & story advertising content for PT. Surya Duta Internasional aquarium products (Aqura, Recent, Wild Oscar) — clean, informative, and consistent product visuals.",
    icon: <Fish size={18} />,
    accent: "from-emerald-600 to-teal-700",
    images: [
      { src: "surya-1.jpg", ratio: "story" },
      { src: "surya-2.jpg", ratio: "story" },
      { src: "surya-3.jpg", ratio: "wide" },
      { src: "surya-4.jpg", ratio: "wide" },
      { src: "surya-5.jpg", ratio: "wide" },
      { src: "surya-6.jpg", ratio: "wide" },
    ],
  },
];

const RATIO_CLASS: Record<string, string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  story: "aspect-[9/16]",
  wide: "aspect-[16/10]",
};

export function DesignPortfolioContent() {
  const { t, lang } = useLang();
  const isEn = lang === "en";

  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[68vh] overflow-hidden bg-brand-deep pt-28 pb-20 text-white">
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
                <span className="text-white">{isEn ? "Graphic Design" : "Desain Grafis"}</span>
              </nav>
            </Reveal>

            <div className="mt-10 max-w-3xl">
              <Reveal index={1}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                  {isEn ? "Graphic Design & Visual Communication · 2025" : "Desain Grafis & Komunikasi Visual · 2025"}
                </span>
              </Reveal>
              <Reveal index={2}>
                <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-glow sm:text-5xl lg:text-[3.4rem]">
                  {isEn ? "Design Portfolio" : "Portofolio Desain"}
                  <span className="mt-2 block text-2xl font-semibold text-gold sm:text-3xl">
                    {isEn ? "Creative Works by PT Aetherion Zynera" : "Karya Kreatif PT Aetherion Zynera"}
                  </span>
                </h1>
              </Reveal>
              <Reveal index={3}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                  {isEn
                    ? "A curated collection of visual communication works — from product digital imaging and conceptual photography to social media content, advertising, and esports event design. Every pixel crafted with purpose."
                    : "Koleksi karya komunikasi visual terkurasi — mulai dari digital imaging produk dan foto konseptual hingga konten media sosial, iklan, dan desain event esports. Setiap piksel dirancang dengan tujuan."}
                </p>
              </Reveal>
              <Reveal index={4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {TOOLS.map((tool) => (
                    <span key={tool} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {tool}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="border-b border-line bg-white py-12">
          <div className="container-x grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "6", label: isEn ? "Work Categories" : "Kategori Karya" },
              { value: "5", label: isEn ? "Client Brands" : "Brand Klien" },
              { value: "4", label: isEn ? "Design Tools" : "Tools Desain" },
              { value: "20+", label: isEn ? "Visual Assets" : "Aset Visual" },
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

        {/* ── CAPABILITIES ── */}
        <section className="bg-surface py-20">
          <div className="container-x grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  <span className="h-px w-6 bg-gold" />
                  {isEn ? "Creative Capabilities" : "Kemampuan Kreatif"}
                </span>
              </Reveal>
              <Reveal index={1}>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-brand sm:text-4xl">
                  {isEn ? "Visual Craft at Every Scale" : "Keahlian Visual di Setiap Skala"}
                </h2>
              </Reveal>
              <Reveal index={2}>
                <p className="mt-5 leading-relaxed text-ink-soft">
                  {isEn
                    ? "The Aetherion creative team specializes in visual communication design — combining technical mastery of digital tools with a strong sense of visual storytelling. From single-frame product compositions to full social media campaigns and event branding, we deliver design that communicates and converts."
                    : "Tim kreatif Aetherion mengkhususkan diri dalam desain komunikasi visual — memadukan penguasaan teknis tools digital dengan kepekaan visual storytelling yang kuat. Dari komposisi produk satu frame hingga kampanye media sosial penuh dan branding event, kami menghadirkan desain yang berkomunikasi dan mengkonversi."}
                </p>
              </Reveal>
              <Reveal index={3}>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {(isEn
                    ? ["Digital Imaging & Photo Manipulation", "Conceptual & Product Photography", "Social Media Content (Feed & Story)", "Product Advertising Design", "Event & Esports Visual Design", "Print & Digital Publication"]
                    : ["Digital Imaging & Manipulasi Foto", "Fotografi Konseptual & Produk", "Konten Media Sosial (Feed & Story)", "Desain Iklan Produk", "Desain Visual Event & Esports", "Publikasi Print & Digital"]
                  ).map((s) => (
                    <li key={s} className="flex items-center gap-3">
                      <Check size={16} className="shrink-0 text-gold" />
                      <span className="text-sm font-medium text-ink">{s}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal index={1}>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl shadow-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG("argent.jpg")} alt="Argent Instinct" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG("tm-1.jpg")} alt="TM Estetik" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG("rupakuy-1.jpg")} alt="PANTURA Tournament" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── WORK SECTIONS ── */}
        {WORKS.map((work, wi) => {
          const isOdd = wi % 2 === 0;
          const title = isEn ? work.titleEn : work.title;
          const desc = isEn ? work.descEn : work.desc;
          const tag = isEn ? work.tagEn : work.tag;

          return (
            <section key={work.id} className={`py-20 ${isOdd ? "bg-white" : "bg-surface"}`}>
              <div className="container-x">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <Reveal>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                        <span className="h-px w-6 bg-gold" />
                        {tag}
                      </span>
                    </Reveal>
                    <Reveal index={1}>
                      <h2 className="mt-3 text-2xl font-extrabold text-brand sm:text-3xl">{title}</h2>
                    </Reveal>
                    <Reveal index={2}>
                      <p className="mt-1 text-sm font-medium text-azure">{work.client}</p>
                    </Reveal>
                  </div>
                  <Reveal index={3}>
                    <div className={`flex items-center gap-2 self-start rounded-full bg-gradient-to-r ${work.accent} px-4 py-2 text-xs font-bold text-white shadow`}>
                      {work.icon}
                      {isEn ? "Aetherion Creative" : "Kreatif Aetherion"}
                    </div>
                  </Reveal>
                </div>

                <Reveal index={4}>
                  <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">{desc}</p>
                </Reveal>

                <div className={`mt-10 grid gap-5 ${
                  work.images.length <= 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : work.images[0].ratio === "story"
                    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
                    : work.images[0].ratio === "wide"
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-2 sm:grid-cols-3"
                }`}>
                  {work.images.map((im, i) => (
                    <Reveal key={im.src} index={i % 3}>
                      <div className={`group overflow-hidden rounded-2xl bg-surface shadow-card ${RATIO_CLASS[im.ratio]}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={IMG(im.src)}
                          alt={`${title} — ${i + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

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
                {isEn ? "Need Creative Design That Stands Out?" : "Butuh Desain Kreatif yang Berkesan?"}
              </h2>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-4 max-w-xl text-white/75">
                {isEn
                  ? "Let's build visual identities, campaigns, and content that make your brand impossible to ignore. Talk to the Aetherion creative team today."
                  : "Mari bangun identitas visual, kampanye, dan konten yang membuat brand Anda tidak terlupakan. Bicara dengan tim kreatif Aetherion hari ini."}
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
