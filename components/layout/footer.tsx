"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/data";
import { useLang } from "@/components/providers/lang-provider";

export function Footer() {
  const { t } = useLang();

  const NAV_LABELS: Record<string, string> = {
    "#home": t.nav.home,
    "#about": t.nav.about,
    "#services": t.nav.services,
    "/portfolio": t.nav.portfolio,
    "#contact": t.nav.contact,
  };

  return (
    <footer className="bg-brand-deep text-white/80">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:pr-6">
          <BrandLogo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            {t.footer.tagline}
          </p>
          <p className="mt-3 text-xs text-white/40">{t.footer.founded}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.company}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold">
                  {NAV_LABELS[l.href] ?? l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.services}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.map((s, idx) => (
              <li key={s.id}>
                <a href="#services" className="transition-colors hover:text-gold">
                  {t.services.items[idx]?.title ?? s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            {t.footer.contact}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-gold" />
              <a href={`tel:${SITE.phone}`} className="hover:text-gold">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. {t.footer.rights}
          </p>
          <p>Audit • Creative • Digital Technology</p>
        </div>
      </div>
    </footer>
  );
}
