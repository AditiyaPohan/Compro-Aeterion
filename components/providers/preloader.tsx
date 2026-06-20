"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { BrandMark } from "@/components/ui/brand-logo";

/**
 * Loading screen sinematik — counter 0→100%, bar emas terisi, lalu tirai
 * terangkat (clip/slide) memperlihatkan hero. Memberi kesan profesional.
 */
export function Preloader({ onComplete }: { onComplete: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  const finish = () => {
    if (fired.current) return;
    fired.current = true;
    onComplete();
  };

  useGSAP(
    () => {
      // Lewati preloader di HP & saat reduce-motion → konten tampil instan
      // (preloader adalah penyebab utama LCP lambat di mobile).
      const skip = window.matchMedia(
        "(max-width: 767px), (prefers-reduced-motion: reduce)"
      ).matches;
      if (skip) {
        gsap.set(root.current, { autoAlpha: 0, display: "none" });
        finish();
        return;
      }

      const counter = { v: 0 };
      const tl = gsap.timeline();

      // Durasi dipangkas agar hero (LCP) cepat tampil (~1s, bukan ~3s).
      tl.to(".pl-brand", { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" })
        .to(
          counter,
          {
            v: 100,
            duration: 0.7,
            ease: "power1.inOut",
            onUpdate: () => {
              if (num.current) num.current.textContent = String(Math.round(counter.v));
            },
          },
          0.1
        )
        .to(".pl-bar-fill", { scaleX: 1, duration: 0.7, ease: "power1.inOut" }, 0.1)
        .to(".pl-content", { y: -20, opacity: 0, duration: 0.3, ease: "power2.in" }, ">-0.05")
        // tirai terangkat — hero mulai tampil & beri sinyal "ready"
        .to(
          root.current,
          {
            yPercent: -100,
            duration: 0.55,
            ease: "power4.inOut",
            onStart: finish,
          },
          ">-0.1"
        )
        .set(root.current, { display: "none" });
    },
    { scope: root }
  );

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-brand-deep text-white"
    >
      {/* texture */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="animate-glow pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-azure/30 blur-[120px]" />

      <div className="pl-content relative flex w-full max-w-sm flex-col items-center px-8">
        <div className="pl-brand flex translate-y-4 flex-col items-center opacity-0">
          <BrandMark className="h-20 w-20 glow-gold" />
          <p className="mt-5 text-2xl font-extrabold uppercase tracking-[0.16em]">
            Aetherion
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.4em] text-white/60">
            Zynera Indonesia
          </p>
        </div>

        {/* progress bar */}
        <div className="mt-10 h-px w-full overflow-hidden bg-white/15">
          <div className="pl-bar-fill h-full w-full origin-left scale-x-0 bg-gold" />
        </div>

        <div className="mt-4 flex w-full items-center justify-between text-xs uppercase tracking-[0.3em] text-white/55">
          <span>Loading Experience</span>
          <span>
            <span ref={num}>0</span>%
          </span>
        </div>
      </div>
    </div>
  );
}
