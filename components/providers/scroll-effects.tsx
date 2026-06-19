"use client";

import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Mesin parallax berlapis (depth engine).
 *
 * Setiap layer memakai atribut data-* dan bergerak independen saat scroll,
 * dikendalikan ScrollTrigger `scrub` (gerak tertinggal = kesan berbobot/mahal).
 *
 *   data-speed   kecepatan layer (philosophy: bg .2 / overlay .4 / pattern .6 /
 *                illustration .8 / content 1 / particles 1.3). Offset =
 *                (1 - speed) → makin jauh dari 1 makin besar parallax-nya.
 *   data-range   pengali jarak (default 1).
 *   data-depth   drift scale (mis. 0.12 → kamera zoom pelan).
 *   data-rotate  drift rotasi dalam derajat.
 *   data-scrub   lag scrub dalam detik (default 1).
 *
 * Dimatikan di layar kecil & saat prefers-reduced-motion (perf + aksesibilitas).
 */
export function ScrollEffects() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const base = window.innerHeight * 0.42;
        const els = gsap.utils.toArray<HTMLElement>("[data-speed]");

        els.forEach((el) => {
          const speed = parseFloat(el.dataset.speed ?? "1");
          const range = parseFloat(el.dataset.range ?? "1");
          const depth = parseFloat(el.dataset.depth ?? "0");
          const rotate = parseFloat(el.dataset.rotate ?? "0");
          const scrub = parseFloat(el.dataset.scrub ?? "1");

          const amp = (1 - speed) * base * range;
          if (!amp && !depth && !rotate) return;

          const from: gsap.TweenVars = {};
          const to: gsap.TweenVars = {};

          if (amp) {
            from.y = amp;
            to.y = -amp;
          }
          if (depth) {
            from.scale = 1 + depth;
            to.scale = 1 - depth * 0.35;
          }
          if (rotate) {
            from.rotation = rotate;
            to.rotation = -rotate;
          }

          gsap.fromTo(el, from, {
            ...to,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub,
              invalidateOnRefresh: true,
            },
          });
        });

        ScrollTrigger.refresh();
      }
    );

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => {
      window.removeEventListener("load", onLoad);
      mm.revert();
    };
  }, []);

  return null;
}
