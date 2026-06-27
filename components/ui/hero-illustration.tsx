/**
 * Ilustrasi korporat untuk hero — kartu dashboard + orbit ring brand.
 * Murni SVG / CSS, tanpa aset eksternal. Animasi kontinu (rotasi ring &
 * floating cards) dihapus demi performa; ilustrasi kini statis.
 */
export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      {/* Orbit rings (statis) */}
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
        <circle
          cx="200"
          cy="200"
          r="170"
          fill="none"
          stroke="url(#ringA)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
        />
        <circle
          cx="200"
          cy="200"
          r="130"
          fill="none"
          stroke="#d4af37"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
      </svg>

      {/* Center quatrefoil mark */}
      <svg
        viewBox="0 0 100 100"
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl"
        aria-hidden="true"
      >
        <g fill="none" strokeWidth="7" strokeLinecap="round">
          <circle cx="33" cy="50" r="19" stroke="#d4af37" />
          <circle cx="67" cy="50" r="19" stroke="#d4af37" />
          <circle cx="50" cy="33" r="19" stroke="#ffffff" />
          <circle cx="50" cy="67" r="19" stroke="#bcdcff" />
        </g>
      </svg>

      {/* Stat card top-left */}
      <div className="absolute left-0 top-6 w-44 rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur">
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
      </div>

      {/* Badge bottom-right */}
      <div className="absolute bottom-8 right-0 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-2xl backdrop-blur">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-lg">
          🛡️
        </span>
        <div>
          <p className="text-sm font-bold text-ink">ISO Certified</p>
          <p className="text-[11px] text-ink-soft">Assurance Quality</p>
        </div>
      </div>

      {/* Pill bottom-left */}
      <div className="absolute bottom-24 left-2 rounded-full bg-azure px-4 py-2 text-xs font-semibold text-white shadow-xl">
        12+ Years Experience
      </div>
    </div>
  );
}
