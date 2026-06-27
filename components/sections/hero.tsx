"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { asset } from "@/lib/asset";
import { Magnetic } from "@/components/interactions/magnetic";
import { useLoading } from "@/components/providers/app-shell";
import { useLang } from "@/components/providers/lang-provider";

/* Desktop: slide up from overflow-hidden clip (cinematic) */
const lineDesktop: Variants = {
  hidden: { y: "115%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.08 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* Mobile: simple fade — no y-transform, no overflow clip, no composite layer per line */
const lineMobile: Variants = {
  hidden: { opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.45, delay: 0.06 + i * 0.08 },
  }),
};

const fadeV: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* Mobile fade (no y movement) */
const fadeMobileV: Variants = {
  hidden: { opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.45, delay: 0.25 + i * 0.08 },
  }),
};

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { ready } = useLoading();
  const { t } = useLang();
  const anim = ready ? "show" : "hidden";

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const lineV = isMobile ? lineMobile : lineDesktop;
  const currentFadeV = isMobile ? fadeMobileV : fadeV;

  return (
    <section
      id="home"
      ref={root}
      className="scene relative flex h-screen items-center overflow-hidden bg-brand-deep"
    >
      <div className="hero-gradient layer absolute inset-[-15%] bg-[linear-gradient(125deg,#16447f_0%,#1e5aa8_40%,#2f7de1_70%,#16447f_100%)]" />
      <div
        className="hero-media layer absolute inset-0 bg-cover bg-center [background-image:var(--hero-bg-mobile)] md:[background-image:var(--hero-bg-desktop)]"
        style={
          {
            "--hero-bg-mobile": `url(${asset("/assets/images/hero-building-mobile.webp")})`,
            "--hero-bg-desktop": `url(${asset("/assets/images/hero-building.webp")})`,
          } as React.CSSProperties
        }
      />
      <div className="hero-overlay layer absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-brand-deep/75" />
      <div className="hero-grid layer bg-grid absolute inset-0 opacity-30" />

      {/* Glow blobs statis — desktop only, hindari biaya blur GPU di mobile */}
      <div className="pointer-events-none absolute -right-24 top-1/4 hidden h-[28rem] w-[28rem] rounded-full bg-azure/30 blur-[130px] md:block" />
      <div className="pointer-events-none absolute -left-20 bottom-0 hidden h-80 w-80 rounded-full bg-gold/15 blur-[120px] md:block" />

      <div className="container-x relative z-10 flex items-center">
        <div>
          <motion.span
            variants={currentFadeV}
            custom={-2}
            initial="hidden"
            animate={anim}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-none md:backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {t.hero.badge}
          </motion.span>

          <h1 className="hero-title mt-6 origin-left text-4xl font-extrabold leading-[1.08] text-glow sm:text-5xl lg:text-[3.4rem]">
            {t.hero.lines.map((line, i) => {
              const colorClass = i === 0 ? "text-gradient-gold" : "text-white";
              if (isMobile) {
                return (
                  <motion.span
                    key={line}
                    variants={lineV}
                    custom={i}
                    initial="hidden"
                    animate={anim}
                    className={`block ${colorClass}`}
                  >
                    {line}
                  </motion.span>
                );
              }
              return (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    variants={lineV}
                    custom={i}
                    initial="hidden"
                    animate={anim}
                    className={`block ${colorClass}`}
                  >
                    {line}
                  </motion.span>
                </span>
              );
            })}
          </h1>

          <motion.p
            variants={currentFadeV}
            custom={1}
            initial="hidden"
            animate={anim}
            className="hero-sub mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={currentFadeV}
            custom={2}
            initial="hidden"
            animate={anim}
            className="hero-cta mt-9"
          >
            <Magnetic strength={0.5}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink shadow-[0_18px_40px_-14px_rgba(212,175,55,0.9)] transition-colors duration-300 hover:bg-[#c79f2c]"
              >
                {t.hero.cta}
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
