"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "@/lib/gsap";
import { Preloader } from "./preloader";
import { LangProvider } from "./lang-provider";

const LoadingContext = createContext<{ ready: boolean }>({ ready: false });
export const useLoading = () => useContext(LoadingContext);

/**
 * Shell global: preloader → kunci scroll selama preload → buka kunci & refresh
 * ScrollTrigger saat "ready". Menyediakan state `ready` ke hero dll.
 *
 * Smooth-scroll Lenis (momentum/parallax) sudah dihapus demi performa — kini
 * memakai scroll native browser (jauh lebih ringan). Klik anchor `#id` tetap
 * mulus lewat `scrollIntoView({ behavior: "smooth" })`.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const pathname = usePathname();

  // Smooth-scroll untuk anchor links (#id) — native, tanpa library.
  useEffect(() => {
    window.scrollTo(0, 0);

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        const top =
          (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Kunci scroll body selama preload
  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  // Saat preloader selesai → hitung ulang ScrollTrigger
  useEffect(() => {
    if (!ready) return;
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [ready]);

  // Pindah halaman (client nav) → ke atas + recalc ScrollTrigger
  useEffect(() => {
    window.scrollTo(0, 0);
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <LangProvider>
      <LoadingContext.Provider value={{ ready }}>
        <Preloader onComplete={() => setReady(true)} />
        {children}
      </LoadingContext.Provider>
    </LangProvider>
  );
}
