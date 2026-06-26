"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { LayoutGrid, X, ArrowUpRight, ArrowRight } from "lucide-react";
import { MEGA_MENU } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useLang } from "@/components/providers/lang-provider";

// flat list semua gambar → di-render bertumpuk supaya ter-preload & crossfade mulus
const FLAT = MEGA_MENU.flatMap((c, ci) =>
  c.items.map((it, ii) => ({ ...it, flat: ci * 3 + ii }))
);

const listV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};
const rowV: Variants = {
  hidden: { x: -40, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Dashboard menu icon (kiri-atas navbar) → fullscreen overlay navigasi dengan
 * hover preview gambar besar. Aditif: tidak mengubah navbar yang ada.
 *
 * Catatan performa (fix "ngelag saat diklik"):
 *  - TANPA backdrop-blur berat di atas hero yang teranimasi (sumber utama jank);
 *    pakai background gelap nyaris solid → murah & tetap premium.
 *  - Gambar di-preload saat komponen mount → buka overlay langsung instan.
 *  - Crossfade hanya pakai opacity/scale (GPU), tanpa filter blur per-gambar.
 */
export function MegaMenu({ scrolled }: { scrolled: boolean }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [cat, setCat] = useState(0);
  const [item, setItem] = useState(0);

  const activeCat = MEGA_MENU[cat];
  const activeFlat = cat * 3 + item;

  // Portal hanya aktif setelah mount (document tersedia di browser)
  useEffect(() => setMounted(true), []);

  // Preload gambar preview, tapi saat browser idle → tidak menghambat load awal
  useEffect(() => {
    const preload = () =>
      FLAT.forEach((img) => {
        const i = new Image();
        i.src = img.image;
      });
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(preload, { timeout: 4000 });
      return () => window.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(preload, 3000);
    return () => window.clearTimeout(t);
  }, []);

  // kunci scroll + Esc untuk menutup
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors",
          scrolled ? "text-ink hover:bg-surface" : "text-white hover:bg-white/10"
        )}
      >
        <LayoutGrid size={20} />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-[70] overflow-y-auto bg-brand-deep/95 backdrop-blur-sm"
              >
            {/* texture & glow (statis, murah) */}
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
            <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-azure/20 blur-[120px]" />

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative mx-auto grid min-h-screen max-w-7xl gap-8 px-6 py-24 md:grid-cols-[1fr_1.15fr] md:items-center md:gap-12 md:px-12"
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="fixed right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 md:right-12"
              >
                <X size={20} />
              </button>

              {/* Categories */}
              <motion.nav
                variants={listV}
                initial="hidden"
                animate="show"
                className="flex flex-col justify-center"
              >
                <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  <span className="h-px w-6 bg-gold" /> {t.megaMenu.explore}
                </span>
                {MEGA_MENU.map((c, i) => {
                  const active = i === cat;
                  return (
                    <motion.button
                      key={c.id}
                      variants={rowV}
                      type="button"
                      onMouseEnter={() => {
                        setCat(i);
                        setItem(0);
                      }}
                      onFocus={() => {
                        setCat(i);
                        setItem(0);
                      }}
                      onClick={() => {
                        setCat(i);
                        setItem(0);
                      }}
                      className="group flex items-baseline gap-4 py-1.5 text-left"
                    >
                      <span
                        className={cn(
                          "text-xs font-semibold tabular-nums transition-colors",
                          active ? "text-gold" : "text-white/30"
                        )}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={cn(
                          "text-3xl font-extrabold leading-tight transition-all duration-300 sm:text-4xl md:text-[2.7rem]",
                          active
                            ? "translate-x-2 text-white"
                            : "text-white/40 group-hover:translate-x-1 group-hover:text-white/70"
                        )}
                      >
                        {c.title}
                      </span>
                    </motion.button>
                  );
                })}
              </motion.nav>

              {/* Preview */}
              <div className="flex flex-col gap-6">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl">
                  {FLAT.map((img) => {
                    const isActive = img.flat === activeFlat;
                    return (
                      // bertumpuk → crossfade opacity/scale (GPU-only, 60fps)
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={img.flat}
                        src={img.image}
                        alt={img.label}
                        draggable={false}
                        decoding="async"
                        className={cn(
                          "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out will-change-transform",
                          isActive ? "scale-100 opacity-100" : "scale-105 opacity-0"
                        )}
                      />
                    );
                  })}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                      {activeCat.tagline}
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-white">
                      {activeCat.items[item].label}
                    </p>
                  </div>
                </div>

                {/* Sub-items (link ke halaman service) */}
                <ul className="flex flex-col gap-1.5">
                  {activeCat.items.map((it, j) => {
                    const active = j === item;
                    return (
                      <li key={it.label}>
                        <Link
                          href={activeCat.href}
                          onMouseEnter={() => setItem(j)}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300",
                            active
                              ? "scale-[1.02] bg-black/50 text-white"
                              : "text-white/55 hover:text-white"
                          )}
                        >
                          <span
                            className={cn(
                              "font-medium transition-all duration-300",
                              active ? "translate-x-1 text-lg" : "text-base"
                            )}
                          >
                            {it.label}
                          </span>
                          <ArrowUpRight
                            size={18}
                            className={cn(
                              "text-gold transition-opacity duration-300",
                              active ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* Explore category → service page */}
                <Link
                  href={activeCat.href}
                  onClick={() => setOpen(false)}
                  className="group inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-300 hover:bg-[#c79f2c]"
                >
                  {t.megaMenu.explore} {activeCat.title}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
