"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLang } from "@/components/providers/lang-provider";

export function Testimonials() {
  const { t: tr } = useLang();
  const TESTIMONIALS = tr.testimonials.items;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => go(1), 5500);
    return () => clearInterval(id);
  }, [paused, go]);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative overflow-hidden bg-surface py-24">
      <div
        data-speed="0.35"
        className="layer pointer-events-none absolute right-8 top-12 h-40 w-40 rounded-full bg-azure-soft blur-2xl"
      />
      <div
        data-speed="0.55"
        data-rotate="14"
        className="layer pointer-events-none absolute -left-10 bottom-10 h-32 w-32 rounded-3xl border border-gold/30"
      />
      <div className="container-x relative">
        <SectionHeading
          eyebrow={tr.testimonials.eyebrow}
          title={tr.testimonials.title}
          subtitle={tr.testimonials.subtitle}
        />

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-card sm:p-12">
            <Quote
              size={56}
              className="absolute right-8 top-8 text-azure-soft"
              aria-hidden="true"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="relative text-lg leading-relaxed text-ink sm:text-xl">
                  “{t.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand to-azure text-base font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-bold text-ink">{t.name}</p>
                    <p className="text-sm text-ink-soft">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-gold" : "w-2 bg-line"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
