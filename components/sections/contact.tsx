"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SITE } from "@/lib/data";
import { asset } from "@/lib/asset";
import { ParticleField } from "@/components/ui/particle-field";
import { Magnetic } from "@/components/interactions/magnetic";
import { useLang } from "@/components/providers/lang-provider";

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
  const { t } = useLang();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".contact-head .line", {
          yPercent: 120,
          opacity: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
        });
        gsap.from(".contact-card", {
          y: 60,
          opacity: 0,
          rotateX: 14,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.currentTarget.reset();
  };

  const contacts = [
    { icon: MapPin, label: t.contact.labels.office, value: SITE.address },
    { icon: Phone, label: t.contact.labels.phone, value: SITE.phone, href: `tel:${SITE.phone}` },
    { icon: Mail, label: t.contact.labels.email, value: SITE.email, href: `mailto:${SITE.email}` },
  ];

  return (
    <section
      id="contact"
      ref={root}
      className="scene relative overflow-hidden bg-brand-deep py-28 text-white"
    >
      <div
        data-speed="0.25"
        className="layer absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${asset("/assets/contact-bg.svg")})` }}
      />
      <div data-speed="0.5" className="layer bg-grid absolute inset-0 opacity-20" />
      <div
        className="animate-glow pointer-events-none absolute left-1/4 top-10 hidden h-80 w-80 rounded-full bg-azure/40 blur-[130px] md:block"
      />
      <div data-speed="1.3" className="layer absolute inset-0">
        <ParticleField count={12} color="bg-gold/50" />
      </div>

      <div className="container-x relative">
        <div className="scene grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-6 bg-gold" />
              {t.contact.eyebrow}
            </span>
            <h2 className="contact-head mt-4 text-4xl font-extrabold leading-tight text-glow sm:text-5xl">
              <span className="block overflow-hidden">
                <span className="line block">{t.contact.heading[0]}</span>
              </span>
              <span className="block overflow-hidden">
                <span className="line block text-gradient-gold">{t.contact.heading[1]}</span>
              </span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
              {t.contact.subtitle}
            </p>

            <ul className="mt-10 space-y-5">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold backdrop-blur">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/55">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="font-semibold text-white hover:text-gold">
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-white">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-card preserve-3d rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-none sm:p-10 md:bg-white/[0.06] md:backdrop-blur-xl">
            <form onSubmit={onSubmit} className="space-y-5">
              {[
                { name: "name", label: t.contact.fields.name, type: "text", placeholder: t.contact.fields.namePlaceholder, required: true },
                { name: "email", label: t.contact.fields.email, type: "email", placeholder: t.contact.fields.emailPlaceholder, required: true },
                { name: "phone", label: t.contact.fields.phone, type: "tel", placeholder: t.contact.fields.phonePlaceholder, required: false },
              ].map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="mb-1.5 block text-sm font-medium text-white/80">
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    placeholder={f.placeholder}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-gold focus:ring-2 focus:ring-gold/25"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/80">
                  {t.contact.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder={t.contact.fields.messagePlaceholder}
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-gold focus:ring-2 focus:ring-gold/25"
                />
              </div>

              <Magnetic strength={0.35} className="w-full">
                <button
                  type="submit"
                  disabled={sent}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#b8901f] px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-gold disabled:opacity-90"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 size={18} /> {t.contact.sent}
                    </>
                  ) : (
                    <>
                      {t.contact.send}
                      <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </Magnetic>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
