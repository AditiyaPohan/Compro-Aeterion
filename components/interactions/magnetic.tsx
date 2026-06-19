"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * Magnetic hover — elemen tertarik mengikuti kursor (GSAP quickSetter).
 * Inner span ikut bergerak lebih jauh → efek berlapis.
 */
export function Magnetic({
  children,
  className,
  strength = 0.4,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current!;
      const inner = innerRef.current!;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
      const ix = gsap.quickTo(inner, "x", { duration: 0.6, ease: "power3" });
      const iy = gsap.quickTo(inner, "y", { duration: 0.6, ease: "power3" });

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        xTo(dx * strength);
        yTo(dy * strength);
        ix(dx * strength * 0.4);
        iy(dy * strength * 0.4);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
        ix(0);
        iy(0);
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      };
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      <span ref={innerRef} className="inline-block">
        {children}
      </span>
    </span>
  );
}
