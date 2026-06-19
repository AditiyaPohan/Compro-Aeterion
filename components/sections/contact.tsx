"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { SITE } from "@/lib/data";
import { ParticleField } from "@/components/ui/particle-field";
import { Magnetic } from "@/components/interactions/magnetic";

const FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+62 ..." },
] as const;

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".contact-head .line", {
          yPercent: 120,
          opacity: 0,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 70%", end: "top 35%", scrub: 1 },
        });
        gsap.from(".contact-card", {
          y: 80,
          opacity: 0,
          rotateX: 18,
          ease: "power2.out",
          scrollTrigger: { trigger: root.current, start: "top 75%", end: "top 40%", scrub: 1 },
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
    { icon: MapPin, label: "Office", value: SITE.address },
    { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  ];

  return (
    <section
      id="contact"
      ref={root}
      className="scene relative overflow-hidden bg-brand-deep py-28 text-white"
    >
      {/* layered cinematic background */}
      <div
        data-speed="0.25"
        className="layer absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url(/assets/contact-bg.svg)" }}
      />
      <div data-speed="0.5" className="layer bg-grid absolute inset-0 opacity-20" />
      <div
        data-speed="0.2"
        className="layer animate-glow pointer-events-none absolute left-1/4 top-10 h-80 w-80 rounded-full bg-azure/40 blur-[130px]"
      />
      <div data-speed="1.3" className="layer absolute inset-0">
        <ParticleField count={20} color="bg-gold/50" />
      </div>

      <div className="container-x relative">
        <div className="scene grid items-center gap-12 lg:grid-cols-2">
          {/* Left: CTA copy */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-6 bg-gold" />
              Get in Touch
            </span>
            <h2 className="contact-head mt-4 text-4xl font-extrabold leading-tight text-glow sm:text-5xl">
              <span className="block overflow-hidden">
                <span className="line block">Let&apos;s Build Something</span>
              </span>
              <span className="block overflow-hidden">
                <span className="line block text-gradient-gold">Great Together</span>
              </span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
              Tell us about your goals. Our team will get back to you within one
              business day to explore how we can help.
            </p>

            <ul className="mt-10 space-y-5">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-gold backdrop-blur">
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

          {/* Right: glass form */}
          <div className="contact-card preserve-3d rounded-[2rem] border border-white/15 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl sm:p-10">
            <form onSubmit={onSubmit} className="space-y-5">
              {FIELDS.map((f) => (
                <div key={f.name}>
                  <label htmlFor={f.name} className="mb-1.5 block text-sm font-medium text-white/80">
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required={f.name !== "phone"}
                    placeholder={f.placeholder}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-gold focus:ring-2 focus:ring-gold/25"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-gold focus:ring-2 focus:ring-gold/25"
                />
              </div>

              <Magnetic strength={0.35} className="w-full">
                <button
                  type="submit"
                  disabled={sent}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_18px_40px_-14px_rgba(212,175,55,0.9)] transition-colors duration-300 hover:bg-[#c79f2c] disabled:opacity-90"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 size={18} /> Message Sent
                    </>
                  ) : (
                    <>
                      Send Message
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
