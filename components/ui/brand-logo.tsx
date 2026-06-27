import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

/**
 * Logo mark Aetherion Zynera — empat ring saling mengunci (quatrefoil)
 * biru & emas. Memakai aset PNG transparan (public/assets/logo.png).
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src={asset("/assets/logo.png")}
      alt="Aetherion Zynera"
      className={cn("h-9 w-9 shrink-0 object-contain", className)}
    />
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
