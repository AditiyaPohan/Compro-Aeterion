import { cn } from "@/lib/utils";

/**
 * Floating — sebelumnya gerak naik-turun + goyang terus-menerus (framer-motion,
 * loop tak-berujung). Dimatikan demi performa: kini hanya wadah statis. Props
 * animasi (amplitude/duration/delay/rotate) dipertahankan agar pemanggilan lama
 * tetap valid, tapi tidak lagi menganimasi apa pun.
 */
export function Floating({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
  rotate?: number;
}) {
  return <div className={cn(className)}>{children}</div>;
}
