"use client";

import { Fragment, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { MegaMenu } from "@/components/layout/mega-menu";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Link pintar: anchor (#…) di homepage = smooth-scroll via Lenis;
  // di subpage diarahkan ke /#… (client nav). Link rute (/…) selalu next/link.
  const navLink = (
    href: string,
    className: string,
    children: ReactNode,
    onClick?: () => void,
    ariaLabel?: string
  ) => {
    const isHash = href.startsWith("#");
    if (isHash && onHome) {
      return (
        <a href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    const resolved = isHash ? `/${href}` : href;
    return (
      <Link href={resolved} className={className} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 shadow-card backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <div className="flex items-center gap-2">
          <MegaMenu scrolled={scrolled} />
          {navLink(
            "#home",
            "",
            <BrandLogo light={!scrolled} />,
            undefined,
            "Aetherion Zynera home"
          )}
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Fragment key={link.href}>
              {navLink(
                link.href,
                cn(
                  "group relative text-sm font-medium transition-colors",
                  scrolled ? "text-ink hover:text-brand" : "text-white/90 hover:text-white"
                ),
                <>
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </>
              )}
            </Fragment>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {navLink(
            "#contact",
            "hidden rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink shadow-[0_8px_20px_-8px_rgba(212,175,55,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c79f2c] sm:inline-flex",
            "Get Consultation"
          )}

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
              scrolled ? "text-ink hover:bg-surface" : "text-white hover:bg-white/10"
            )}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <ul className="container-x flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {navLink(
                    link.href,
                    "block rounded-lg px-2 py-3 text-base font-medium text-ink transition-colors hover:bg-surface hover:text-brand",
                    link.label,
                    () => setOpen(false)
                  )}
                </li>
              ))}
              <li className="mt-2">
                {navLink(
                  "#contact",
                  "block rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-ink",
                  "Get Consultation",
                  () => setOpen(false)
                )}
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
