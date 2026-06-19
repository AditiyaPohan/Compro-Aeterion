"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Floating — gerak naik-turun + sedikit goyang terus-menerus (icon/dekor).
 */
export function Floating({
  children,
  className,
  amplitude = 12,
  duration = 5,
  delay = 0,
  rotate = 3,
}: {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      animate={{ y: [0, -amplitude, 0], rotate: [0, rotate, 0, -rotate, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
