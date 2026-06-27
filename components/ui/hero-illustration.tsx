/**
 * Ilustrasi korporat untuk hero — kartu dashboard + orbit ring brand.
 * Murni SVG / CSS, tanpa aset eksternal. Animasi kontinu (rotasi ring &
 * floating cards) dihapus demi performa; ilustrasi kini statis.
 */
export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
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
