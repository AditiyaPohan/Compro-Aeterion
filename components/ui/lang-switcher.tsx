"use client";

import { useLang } from "@/components/providers/lang-provider";
import { cn } from "@/lib/utils";

export function LangSwitcher({ scrolled = false }: { scrolled?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "id" : "en")}
      aria-label="Switch language"
      className={cn(
        "inline-flex h-8 items-center gap-0.5 rounded-full border px-2.5 text-[11px] font-bold uppercase tracking-wide transition-colors duration-200",
        scrolled
          ? "border-line text-ink hover:border-brand hover:text-brand"
          : "border-white/25 text-white/80 hover:border-white hover:text-white"
      )}
    >
      <span className={lang === "en" ? "opacity-100" : "opacity-40"}>EN</span>
      <span className="mx-0.5 opacity-30">|</span>
      <span className={lang === "id" ? "opacity-100" : "opacity-40"}>ID</span>
    </button>
  );
}
