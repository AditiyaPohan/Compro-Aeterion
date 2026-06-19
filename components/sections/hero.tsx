"use client";

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SITE } from "@/lib/data";
import { HeroIllustration } from "@/components/ui/hero-illustration";
import { ParticleField } from "@/components/ui/particle-field";
import { Magnetic } from "@/components/interactions/magnetic";
import { useLoading } from "@/components/providers/app-shell";

const lineV: Variants = {
  hidden: { y: "115%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.95, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeV: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.45 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const HEAD = [
  { t: "Empowering Business", c: "text-gradient-gold" },
  { t: "Through Audit, Creative", c: "text-white" },
  { t: "& Digital Technology", c: "text-white" },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { ready } = useLoading();
  const anim = ready ? "show" : "hidden";

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        // ZOOM ON SCROLL — hero di-pin, objek membesar & terbang melewati kamera
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=120%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(".hero-title", { scale: 2.1, yPercent: -10, opacity: 0, ease: "power2.in" }, 0)
          .to(".hero-sub", { yPercent: -40, opacity: 0, ease: "power2.in" }, 0)
          .to(".hero-cta", { yPercent: -60, opacity: 0, ease: "power2.in" }, 0)
          .to(".hero-illu", { scale: 2.9, opacity: 0, ease: "power2.in" }, 0)
          .to(".hero-video", { scale: 1.4, yPercent: 14, ease: "none" }, 0)
          .to(".hero-city", { scale: 1.5, yPercent: 22, ease: "none" }, 0)
          .to(".hero-gradient", { scale: 1.35, ease: "none" }, 0)
          .to(".hero-grid", { scale: 1.6, opacity: 0, ease: "none" }, 0)
          .to(".hero-particles", { scale: 2, opacity: 0.15, ease: "none" }, 0);
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section
      id="home"
      ref={root}
      className="scene relative flex h-screen items-center overflow-hidden bg-brand-deep"
    >
      {/* depth layers (digerakkan timeline zoom) */}
      <div className="hero-gradient layer absolute inset-[-15%] animate-gradient bg-[linear-gradient(125deg,#16447f_0%,#1e5aa8_40%,#2f7de1_70%,#16447f_100%)]" />
      {/* Background video corporate building (fallback ke gradient + poster) */}
      <video
        className="hero-video layer absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/videos/hero-poster.webp"
      >
        <source src="/assets/videos/corporate-building.mp4" type="video/mp4" />
      </video>
      {/* Overlay hitam transparan agar teks tetap terbaca */}
      <div className="hero-overlay layer absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-brand-deep/75" />
      <div
        className="hero-city layer absolute inset-x-0 bottom-0 h-[72%] bg-bottom bg-cover bg-no-repeat opacity-60"
        style={{ backgroundImage: "url(/assets/city.svg)" }}
      />
      <div className="hero-grid layer bg-grid absolute inset-0 opacity-30" />
      <div className="animate-glow pointer-events-none absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-azure/40 blur-[130px]" />
      <div className="animate-glow pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-gold/20 blur-[120px]" />
      <div className="hero-particles layer absolute inset-0">
        <ParticleField count={24} color="bg-gold/60" />
      </div>

      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-2">
        {/* content */}
        <div>
          <motion.span
            variants={fadeV}
            custom={-2}
            initial="hidden"
            animate={anim}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Integrated Professional Services
          </motion.span>

          <h1 className="hero-title mt-6 origin-left text-4xl font-extrabold leading-[1.08] text-glow sm:text-5xl lg:text-[3.4rem]">
            {HEAD.map((line, i) => (
              <span key={line.t} className="block overflow-hidden">
                <motion.span
                  variants={lineV}
                  custom={i}
                  initial="hidden"
                  animate={anim}
                  className={`block ${line.c}`}
                >
                  {line.t}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeV}
            custom={1}
            initial="hidden"
            animate={anim}
            className="hero-sub mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            variants={fadeV}
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
                Contact Us
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* illustration */}
        <motion.div
          variants={fadeV}
          custom={1}
          initial="hidden"
          animate={anim}
          className="hero-illu relative hidden lg:block"
        >
          <HeroIllustration />
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
          <motion.span
            className="h-2 w-1 rounded-full bg-gold"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
