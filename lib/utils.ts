import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Gabungkan className Tailwind dengan aman (dedupe konflik). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
