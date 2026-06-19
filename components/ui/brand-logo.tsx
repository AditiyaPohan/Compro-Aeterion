import { cn } from "@/lib/utils";

/**
 * Logo mark Aetherion Zynera — empat ring saling mengunci (quatrefoil)
 * biru (#1E5AA8 / #2F7DE1) & emas (#D4AF37). Murni SVG, tanpa aset eksternal.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-9 w-9 shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Aetherion Zynera"
    >
      <g fill="none" strokeWidth="7" strokeLinecap="round">
        {/* gold rings (left & right) behind */}
        <circle cx="33" cy="50" r="19" stroke="#d4af37" />
        <circle cx="67" cy="50" r="19" stroke="#d4af37" />
        {/* blue rings (top & bottom) front */}
        <circle cx="50" cy="33" r="19" stroke="#2f7de1" />
        <circle cx="50" cy="67" r="19" stroke="#1e5aa8" />
        {/* inner chevrons */}
        <path d="M44 38 l6 -9 l6 9" stroke="#1e5aa8" strokeWidth="5" />
        <path d="M44 62 l6 9 l6 -9" stroke="#1e5aa8" strokeWidth="5" />
      </g>
    </svg>
  );
}

export function BrandLogo({
  className,
  subtitle = true,
  light = false,
}: {
  className?: string;
  subtitle?: boolean;
  light?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <BrandMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[16px] font-extrabold uppercase tracking-[0.12em]",
            light ? "text-white" : "text-brand"
          )}
        >
          Aetherion
        </span>
        {subtitle && (
          <span
            className={cn(
              "mt-1 text-[9px] uppercase tracking-[0.32em]",
              light ? "text-white/70" : "text-ink-soft"
            )}
          >
            Zynera Indonesia
          </span>
        )}
      </span>
    </span>
  );
}
