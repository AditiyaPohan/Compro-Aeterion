import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]",
              light ? "text-gold" : "text-azure"
            )}
          >
            <span className="h-px w-6 bg-gold" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal index={1}>
        <h2
          className={cn(
            "mt-4 text-3xl font-extrabold sm:text-4xl",
            light && "text-white"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal index={2}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed",
              light ? "text-white/75" : "text-ink-soft"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
