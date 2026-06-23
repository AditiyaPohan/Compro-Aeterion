"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Check, Palette, Camera, Megaphone, Sparkles, Trophy, LayoutGrid } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/interactions/magnetic";
import { asset } from "@/lib/asset";
import { useLang } from "@/components/providers/lang-provider";

const DKV = (name: string) => asset(`/assets/images/portfolio/dkv/${name}`);

/* ── Tools / Skills ── */
const TOOLS = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Clip Studio Paint",
];

/* ── Design categories ── */
type WorkItem = {
  slug: string;
  title: string;
  titleEn: string;
  client: string;
  clientEn: string;
  tag: string;
  tagEn: string;
  desc: string;
  descEn: string;
  icon: React.ReactNode;
  images: string[];
  accent: string;
};

const WORKS: WorkItem[] = [
  {
    slug: "digital-imaging",
    title: "Digital Imaging & Manipulasi",
    titleEn: "Digital Imaging & Manipulation",
    client: "Proyek Kreatif Aetherion",
    clientEn: "Aetherion Creative Project",
    tag: "Digital Imaging",
    tagEn: "Digital Imaging",
    desc: "Eksplorasi teknik manipulasi digital tingkat lanjut — menggabungkan elemen fotografis, ilustrasi, dan tipografi menjadi komposisi visual yang kuat dan bercerita.",
    descEn: "Advanced digital manipulation techniques — merging photographic elements, illustration, and typography into powerful, story-driven visual compositions.",
    icon: <Palette size={20} />,
    accent: "from-azure to-brand",
    images: ["img_15.jpg", "img_19.jpg", "img_24.jpg"],
  },
  {
    slug: "conceptual-photography",
    title: "Foto Konseptual",
    titleEn: "Conceptual Photography",
    client: "Proyek Kreatif Aetherion",
    clientEn: "Aetherion Creative Project",
    tag: "Photography",
    tagEn: "Photography",
    desc: "Karya foto konseptual yang mengeksplorasi narasi visual melalui komposisi, cahaya, dan konsep yang matang — setiap frame bercerita lebih dari kata-kata.",
    descEn: "Conceptual photography exploring visual narrative through composition, lighting, and refined concepts — every frame tells more than words.",
    icon: <Camera size={20} />,
    accent: "from-brand to-brand-deep",
    images: ["img_29.jpg", "img_33.jpg"],
  },
  {
    slug: "product-advertising",
    title: "Iklan Produk & Visual Advertising",
    titleEn: "Product Advertising & Visual Ads",
    client: "Klien Softbank",
    clientEn: "Softbank Client",
    tag: "Advertising",
    tagEn: "Advertising",
    desc: "Kreasi visual advertising untuk produk Softbank — menggabungkan konsep yang kuat dengan eksekusi visual premium untuk meningkatkan daya tarik produk di pasar.",
    descEn: "Advertising visuals for Softbank products — combining strong concepts with premium visual execution to elevate product appeal in the market.",
    icon: <Megaphone size={20} />,
    accent: "from-gold/80 to-amber-600",
    images: ["img_37.jpg", "img_39.jpg", "img_41.jpg", "img_43.jpg"],
  },
  {
    slug: "skincare-branding",
    title: "Konten Skincare & Instagram Marketing",
    titleEn: "Skincare Content & Instagram Marketing",
    client: "TM Estetik",
    clientEn: "TM Estetik",
    tag: "Social Media · Skincare",
    tagEn: "Social Media · Skincare",
    desc: "Desain konten media sosial untuk brand perawatan kulit TM Estetik — meliputi feeds Instagram yang estetis dan story yang informatif, menjaga konsistensi visual brand.",
    descEn: "Social media content design for TM Estetik skincare brand — covering aesthetic Instagram feeds and informative stories, maintaining brand visual consistency.",
    icon: <Sparkles size={20} />,
    accent: "from-pink-500 to-rose-600",
    images: ["img_45.jpg", "img_48.jpg", "img_54.png", "img_59.jpg", "img_62.jpg"],
  },
  {
    slug: "event-design",
    title: "Desain Event & Turnamen Esports",
    titleEn: "Event Design & Esports Tournament",
    client: "Rupakuy Creative",
    clientEn: "Rupakuy Creative",
    tag: "Event Design · Esports",
    tagEn: "Event Design · Esports",
    desc: "Desain visual lengkap untuk turnamen Mobile Legends (MLBB) bertajuk PANTURA — meliputi banner, poster, dan keseluruhan materi promosi event bersama Event Organizer Rupakuy Creative.",
    descEn: "Complete visual design for the PANTURA Mobile Legends (MLBB) tournament — including banners, posters, and full promotional materials for Rupakuy Creative Event Organizer.",
    icon: <Trophy size={20} />,
    accent: "from-violet-600 to-brand-deep",
    images: ["img_65.jpg", "img_68.jpg"],
  },
  {
    slug: "social-media-ads",
    title: "Iklan Media Sosial & Konten Brand",
    titleEn: "Social Media Advertising & Brand Content",
    client: "PT. Surya Duta Internasional",
    clientEn: "PT. Surya Duta Internasional",
    tag: "Social Media · Advertising",
    tagEn: "Social Media · Advertising",
    desc: "Produksi konten advertising untuk feeds dan story Instagram PT. Surya Duta Internasional — visual yang konsisten, menarik, dan mendukung pertumbuhan brand di media sosial.",
    descEn: "Advertising content production for PT. Surya Duta Internasional's Instagram feeds and stories — consistent, appealing visuals that support brand growth on social media.",
    icon: <LayoutGrid size={20} />,
    accent: "from-emerald-600 to-teal-700",
    images: ["img_71.jpg", "img_74.jpg", "img_76.jpg", "img_78.jpg", "img_81.jpg", "img_83.jpg"],
  },
];

import React from "react";

export function DkvContent() {
  const { t, lang } = useLang();
  const isEn = lang === "en";

  return (
    <>
      <Header />
      <main>

        {/* ── HERO ── */}
        <section className="relative min-h-[72vh] overflow-hidden bg-brand-deep pt-28 pb-20 text-white">
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
                  {isEn ? "Graphic Design" : "Desain Grafis"}
                  <span className="mt-2 block text-2xl font-semibold text-gold sm:text-3xl">
                    {isEn
                      ? "Creative Visual Portfolio — PT Aetherion Zynera"
                      : "Portofolio Visual Kreatif — PT Aetherion Zynera"}
                  </span>
                </h1>
              </Reveal>
              <Reveal index={3}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                  {isEn
                    ? "A curated collection of visual communication works — from digital imaging and conceptual photography to brand advertising, social media content, and event design. Every pixel crafted with purpose."
                    : "Koleksi karya komunikasi visual terkurasi — mulai dari digital imaging dan foto konseptual hingga iklan brand, konten media sosial, dan desain event. Setiap piksel dirancang dengan tujuan."}
                </p>
              </Reveal>

              {/* Tools */}
              <Reveal index={4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {TOOLS.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {tool}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Decorative side image strip */}
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[38%] overflow-hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/60 to-transparent z-10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={DKV("img_54.png")}
              alt="Aetherion Design Work"
              className="h-full w-full object-cover object-center opacity-60"
            />
          </div>
        </section>

        {/* ── QUICK STATS ── */}
        <section className="border-b border-line bg-white py-12">
          <div className="container-x grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "6+", label: isEn ? "Design Categories" : "Kategori Desain" },
              { value: "4", label: isEn ? "Industry Clients" : "Klien Industri" },
              { value: "3+", label: isEn ? "Design Tools" : "Tools Desain" },
              { value: "50+", label: isEn ? "Design Assets" : "Aset Desain" },
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

        {/* ── ABOUT / CAPABILITIES ── */}
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
                    ? "The Aetherion creative team specializes in visual communication design — combining technical mastery of digital tools with a deep sense of visual storytelling. From single-frame compositions to full brand campaigns, we deliver design that communicates and converts."
                    : "Tim kreatif Aetherion mengkhususkan diri dalam desain komunikasi visual — memadukan penguasaan teknis tools digital dengan kepekaan visual storytelling yang mendalam. Dari komposisi satu frame hingga kampanye brand penuh, kami menghadirkan desain yang berkomunikasi dan mengkonversi."}
                </p>
              </Reveal>
              <Reveal index={3}>
                <ul className="mt-6 space-y-3">
                  {(isEn
                    ? [
                        "Advanced Digital Imaging & Photo Manipulation",
                        "Brand Identity & Visual System Design",
                        "Social Media Content Creation (Feed & Story)",
                        "Event & Campaign Visual Production",
                        "Product Photography Direction & Advertising",
                        "Print & Digital Publication Design",
                      ]
                    : [
                        "Digital Imaging & Manipulasi Foto Tingkat Lanjut",
                        "Identitas Brand & Sistem Visual",
                        "Pembuatan Konten Media Sosial (Feed & Story)",
                        "Produksi Visual Event & Kampanye",
                        "Arahan Foto Produk & Advertising",
                        "Desain Publikasi Print & Digital",
                      ]
                  ).map((s) => (
                    <li key={s} className="flex items-center gap-3">
                      <Check size={16} className="shrink-0 text-gold" />
                      <span className="text-sm font-medium text-ink">{s}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Image collage */}
            <Reveal index={1}>
              <div className="grid grid-cols-2 gap-3">
                {["img_15.jpg", "img_65.jpg", "img_71.jpg", "img_45.jpg"].map((img, i) => (
                  <div
                    key={img}
                    className={`overflow-hidden rounded-2xl shadow-card ${i === 0 ? "row-span-2" : ""}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={DKV(img)}
                      alt={`Design work ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── WORK SECTIONS ── */}
        {WORKS.map((work, wi) => {
          const isOdd = wi % 2 === 0;
          const title = isEn ? work.titleEn : work.title;
          const desc = isEn ? work.descEn : work.desc;
          const client = isEn ? work.clientEn : work.client;
          const tag = isEn ? work.tagEn : work.tag;

          return (
            <section
              key={work.slug}
              className={`py-20 ${isOdd ? "bg-white" : "bg-surface"}`}
            >
              <div className="container-x">
                {/* Section header */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <Reveal>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                        <span className="h-px w-6 bg-gold" />
                        {tag}
                      </span>
                    </Reveal>
                    <Reveal index={1}>
                      <h2 className="mt-3 text-2xl font-extrabold text-brand sm:text-3xl">
                        {title}
                      </h2>
                    </Reveal>
                    <Reveal index={2}>
                      <p className="mt-1 text-sm font-medium text-azure">{client}</p>
                    </Reveal>
                  </div>
                  <Reveal index={3}>
                    <div className={`flex items-center gap-2 rounded-full bg-gradient-to-r ${work.accent} px-4 py-2 text-xs font-bold text-white shadow`}>
                      {work.icon}
                      {isEn ? "Aetherion Creative" : "Kreatif Aetherion"}
                    </div>
                  </Reveal>
                </div>

                {/* Description */}
                <Reveal index={4}>
                  <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">{desc}</p>
                </Reveal>

                {/* Image grid — layout depends on count */}
                <div className={`mt-10 ${
                  work.images.length === 2
                    ? "grid grid-cols-1 gap-5 sm:grid-cols-2"
                    : work.images.length === 3
                    ? "grid grid-cols-1 gap-5 sm:grid-cols-3"
                    : work.images.length === 4
                    ? "grid grid-cols-2 gap-4 sm:grid-cols-4"
                    : "grid grid-cols-2 gap-4 sm:grid-cols-3"
                }`}>
                  {work.images.map((img, i) => (
                    <Reveal key={img} index={i % 3}>
                      <div className={`group overflow-hidden rounded-2xl shadow-card ${
                        work.images.length === 5 && i === 0 ? "col-span-2 sm:col-span-1 sm:row-span-2" : ""
                      }`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={DKV(img)}
                          alt={`${title} — ${i + 1}`}
                          loading="lazy"
                          className="h-full min-h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* ── FULL GALLERY STRIP ── */}
        <section className="bg-brand-deep py-16 text-white">
          <div className="container-x">
            <Reveal>
              <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
                {isEn ? "More Works" : "Karya Lainnya"}
              </h2>
            </Reveal>
            <Reveal index={1}>
              <p className="mt-3 text-center text-white/70">
                {isEn
                  ? "A glimpse at additional creative works produced by the Aetherion Design Team."
                  : "Sekilas karya kreatif tambahan yang diproduksi oleh Tim Desain Aetherion."}
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {[
                "img_17.jpg", "img_21.jpg", "img_23.jpg", "img_46.jpg",
                "img_52.jpg", "img_56.jpg", "img_74.jpg", "img_78.jpg",
                "img_80.jpg", "img_84.jpg", "img_85.jpg", "img_89.jpg",
              ].map((img, i) => (
                <Reveal key={img} index={i % 4}>
                  <div className="group overflow-hidden rounded-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={DKV(img)}
                      alt={`Gallery ${i + 1}`}
                      loading="lazy"
                      className="h-32 w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
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
                {isEn
                  ? "Need Creative Design That Stands Out?"
                  : "Butuh Desain Kreatif yang Berkesan?"}
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
                <Link
                  href="/#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-300 hover:bg-[#c79f2c]"
                >
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
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-azure transition-colors"
            >
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
