"use client";

import { motion } from "framer-motion";

/**
 * Ilustrasi korporat untuk hero — kartu dashboard melayang + orbit ring brand.
 * Murni SVG / CSS, tanpa aset eksternal.
 */
export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      {/* Orbit rings */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ringA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="200"
          cy="200"
          r="170"
          fill="none"
          stroke="url(#ringA)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="130"
          fill="none"
          stroke="#d4af37"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        />
      </svg>

      {/* Center quatrefoil mark */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <g fill="none" strokeWidth="7" strokeLinecap="round">
          <circle cx="33" cy="50" r="19" stroke="#d4af37" />
          <circle cx="67" cy="50" r="19" stroke="#d4af37" />
          <circle cx="50" cy="33" r="19" stroke="#ffffff" />
          <circle cx="50" cy="67" r="19" stroke="#bcdcff" />
        </g>
      </motion.svg>

      {/* Floating stat card top-left */}
      <motion.div
        className="absolute left-0 top-6 w-44 rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft">
          Growth
        </p>
        <p className="mt-1 text-2xl font-extrabold text-brand">+184%</p>
        <svg viewBox="0 0 120 36" className="mt-2 h-9 w-full">
          <polyline
            points="0,30 20,24 40,26 60,14 80,18 100,6 120,10"
            fill="none"
            stroke="#2f7de1"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Floating badge bottom-right */}
      <motion.div
        className="absolute bottom-8 right-0 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-2xl backdrop-blur"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-lg">
          🛡️
        </span>
        <div>
          <p className="text-sm font-bold text-ink">ISO Certified</p>
          <p className="text-[11px] text-ink-soft">Assurance Quality</p>
        </div>
      </motion.div>

      {/* Floating pill bottom-left */}
      <motion.div
        className="absolute bottom-24 left-2 rounded-full bg-azure px-4 py-2 text-xs font-semibold text-white shadow-xl"
        animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        12+ Years Experience
      </motion.div>
    </div>
  );
}
