"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { ScrollTrigger } from "@/lib/gsap";
import { Preloader } from "./preloader";
import { LangProvider } from "./lang-provider";

const LoadingContext = createContext<{ ready: boolean }>({ ready: false });
export const useLoading = () => useContext(LoadingContext);

/**
 * Shell global: preloader → kunci scroll → Lenis (smooth + sinkron ScrollTrigger)
 * → buka kunci & refresh saat "ready". Menyediakan state `ready` ke hero dll.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Lenis + anchor links
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      lerp: 0.07,
      wheelMultiplier: 0.9,
      smoothWheel: true,
      syncTouch: false,
    });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    lenis.stop(); // dikunci sampai preloader selesai
    window.scrollTo(0, 0);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

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
        lenis.scrollTo(el as HTMLElement, { offset: -80 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Kunci scroll body selama preload
  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  // Saat preloader selesai → jalankan Lenis & hitung ulang ScrollTrigger
  useEffect(() => {
    if (!ready) return;
    lenisRef.current?.start();
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [ready]);

  // Pindah halaman (client nav) → ke atas + recalc ScrollTrigger
  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
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
