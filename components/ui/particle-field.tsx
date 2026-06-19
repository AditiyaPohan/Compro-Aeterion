"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Lapisan partikel melayang — deterministik (seed) agar SSR/CSR konsisten,
 * tiap titik melayang independen. Dipakai sebagai layer kecepatan tertinggi.
 */
export function ParticleField({
  count = 18,
  className,
  color = "bg-white/70",
}: {
  count?: number;
  className?: string;
  color?: string;
}) {
  const dots = useMemo(() => {
    // PRNG sederhana (mulberry32) supaya posisi stabil
    let s = 0x2f7de1 + count;
    const rand = () => {
      s |= 0;
      s = (s + 0x6d2b79f5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    return Array.from({ length: count }, () => ({
      left: rand() * 100,
      top: rand() * 100,
      size: 2 + rand() * 6,
      dur: 5 + rand() * 7,
      delay: rand() * 5,
      drift: 16 + rand() * 28,
    }));
  }, [count]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className={cn("absolute rounded-full blur-[0.5px]", color)}
          style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size }}
          animate={{ y: [0, -d.drift, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
