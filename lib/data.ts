/**
 * Sumber konten terpusat untuk seluruh halaman.
 * Teks dibuat semirip mungkin dengan desain referensi.
 */

import { asset } from "./asset";

export const SITE = {
  name: "Aetherion Zynera Indonesia",
  legalName: "PT Aetherion Zynera Indonesia",
  tagline: "Empowering Business Through Audit, Creative & Digital Technology",
  description:
    "PT Aetherion Zynera Indonesia provides integrated professional services in Audit, Design, Digital Marketing, and IT Solutions to help businesses grow, innovate, and thrive in the digital era.",
  email: "aetherionzynera@gmail.com",
  phone: "0896-4318-6843",
  whatsapp: "0896-4318-6843",
  address: "Perumahan Bumi Yapemas Indah, Blok C2 No.1 RT02/RW09, Desa Sumber Jaya, Kec. Tambun Selatan, Kab. Bekasi",
  founded: 2024,
  url: "https://compro-aeterion.vercel.app",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "#contact" },
] as const;

export type Service = {
  id: string;
  title: string;
  desc: string;
  icon: string; // key ikon lucide
  slug: string; // → /services/{slug}
};

export const SERVICES: Service[] = [
  {
    id: "audit",
    title: "Corporate Legal & Licensing",
    desc: "Financial Audit, Internal Audit, Tax Review, Public Accountant",
    icon: "ShieldCheck",
    slug: "audit",
  },
  {
    id: "design",
    title: "Graphic Design & Branding",
    desc: "Brand Identity, Logo Design, Company Profile, UI/UX Design",
    icon: "Palette",
    slug: "creative-agency",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    desc: "SEO, SEM, Social Media, Content Marketing, Ads, Management Analytics",
    icon: "TrendingUp",
    slug: "digital-marketing",
  },
  {
    id: "it",
    title: "IT Solutions",
    desc: "Web Development, ERP, SaaS, Cyber Security",
    icon: "Cpu",
    slug: "it-solutions",
  },
];

export const WHY_US: string[] = [
  "Certified & Experienced Professionals",
  "Integrated Multi-Services",
  "Data-Driven & Strategic Approach",
  "High Standard & Confidentiality",
  "Focus on Long-Term Partnership",
];

export type Project = {
  title: string;
  client: string;
  accent: "blue" | "azure" | "gold";
  slug: string; // → /portfolio/{slug}
  category: string;
  year: string;
  image: string;
  summary: string;
  description: string;
  scope: string[];
  results: { value: string; label: string }[];
};

export const PROJECTS: Project[] = [
  {
    title: "Digital Marketing – Hananda",
    client: "PT. Perisai Cakrawala Indonesia",
    accent: "azure",
    slug: "hananda",
    category: "Digital Marketing",
    year: "2025",
    image: asset("/assets/images/portfolio/hananda/portfolio-2.jpg"),
    summary:
      "Full-funnel digital marketing campaign delivering 10.32% CTR, 31,753+ clicks, and 6,006+ leads via Google Ads for a national logistics company.",
    description:
      "Led end-to-end digital marketing for PT. Perisai Cakrawala Indonesia (Omkirim), a logistics brand specializing in inter-city vehicle shipment across 6 major cities. Managed Google Ads, content creation (300+ uploads), SEO, and website redesign — driving sustained growth in reach, leads, and brand equity.",
    scope: [
      "Google Ads campaign management",
      "Website redesign & SEO optimization",
      "Social media content creation (300+ posts)",
      "Performance analytics & reporting",
    ],
    results: [
      { value: "10.32%", label: "Google Ads CTR" },
      { value: "6,006+", label: "Leads Generated" },
      { value: "300+", label: "Content Uploads" },
    ],
  },
  {
    title: "Audit Portfolio",
    client: "Manufacturing Company",
    accent: "blue",
    slug: "audit-portfolio",
    category: "Audit & Assurance",
    year: "2025",
    image: asset("/assets/images/services/audit-corporate-audit.webp"),
    summary:
      "Independent financial statement audit and internal control review for a national manufacturing group.",
    description:
      "We delivered a full-scope statutory audit across five operating entities, strengthening the group's financial governance ahead of an investor due-diligence process. Our team combined data-driven sampling with on-site verification to surface risks early and provide a clear remediation roadmap.",
    scope: [
      "Statutory financial statement audit",
      "Internal control & risk assessment",
      "Tax compliance review",
      "Management letter & remediation plan",
    ],
    results: [
      { value: "5", label: "Entities Audited" },
      { value: "100%", label: "On-time Reporting" },
      { value: "0", label: "Material Findings Post-fix" },
    ],
  },
  {
    title: "Design Portfolio",
    client: "Manufacturing Company",
    accent: "azure",
    slug: "branding-portfolio",
    category: "Creative & Branding",
    year: "2025",
    image: asset("/assets/images/services/creative-branding-team.webp"),
    summary:
      "Complete brand identity system and company profile redesign for a manufacturing brand entering new markets.",
    description:
      "From logo and visual language to a polished company profile and sales collateral, we rebuilt the brand to feel confident and modern. The new identity system gave the marketing and sales teams a consistent, premium toolkit across every touchpoint.",
    scope: [
      "Brand identity & logo system",
      "Company profile & pitch deck",
      "Marketing collateral",
      "Brand guidelines",
    ],
    results: [
      { value: "1", label: "Unified Brand System" },
      { value: "40+", label: "Assets Delivered" },
      { value: "2x", label: "Faster Sales Prep" },
    ],
  },
  {
    title: "Digital Marketing Portfolio",
    client: "Manufacturing Company",
    accent: "blue",
    slug: "digital-marketing-portfolio",
    category: "Digital Marketing",
    year: "2024",
    image: asset("/assets/images/services/digital-innovation.webp"),
    summary:
      "Performance marketing and content strategy that tripled qualified B2B leads in two quarters.",
    description:
      "We built an integrated demand-generation engine — SEO, paid campaigns, and content — backed by analytics dashboards. Continuous experimentation lifted conversion rates while lowering cost per qualified lead.",
    scope: [
      "SEO & content strategy",
      "Paid ads management",
      "Marketing analytics dashboard",
      "Conversion rate optimization",
    ],
    results: [
      { value: "3x", label: "Qualified Leads" },
      { value: "-38%", label: "Cost per Lead" },
      { value: "2", label: "Quarters" },
    ],
  },
  {
    title: "IT Solution Portfolio",
    client: "Manufacturing Company",
    accent: "azure",
    slug: "it-solution-portfolio",
    category: "IT Solutions",
    year: "2024",
    image: asset("/assets/images/services/it-cloud-infrastructure.webp"),
    summary:
      "End-to-end rebuild of internal systems with secure, scalable cloud infrastructure.",
    description:
      "We modernized legacy operations into a secure, cloud-native platform — integrating ERP modules, automating manual workflows, and hardening the network. The result is a reliable system that scales with the business and protects critical data.",
    scope: [
      "Cloud infrastructure & migration",
      "Custom ERP / internal systems",
      "Network operations & security",
      "Ongoing IT support",
    ],
    results: [
      { value: "99.9%", label: "Uptime" },
      { value: "60%", label: "Less Manual Work" },
      { value: "24/7", label: "Monitoring" },
    ],
  },
];

export const ACHIEVEMENTS: { value: number; suffix: string; label: string }[] = [
  { value: 1000, suffix: "+", label: "Clients Served" },
  { value: 480, suffix: "+", label: "Projects Completed" },
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 45, suffix: "+", label: "Team Members" },
];

export const TESTIMONIALS: {
  quote: string;
  name: string;
  role: string;
}[] = [
    {
      quote:
        "Aetherion's audit team brought a level of rigor and clarity we hadn't seen before. Their report became a roadmap for better decisions.",
      name: "Andika Pratama",
      role: "CFO, Nusantara Manufacturing",
    },
    {
      quote:
        "From branding to our digital campaigns, the results spoke for themselves — a 3x increase in qualified leads within two quarters.",
      name: "Sarah Wijaya",
      role: "Marketing Director, Lumina Retail",
    },
    {
      quote:
        "They rebuilt our internal systems end to end. Reliable, secure, and delivered exactly on schedule. A true long-term partner.",
      name: "Reza Maulana",
      role: "COO, Sigma Logistics",
    },
  ];

/* ---- Fullscreen dashboard mega-menu (overlay navigation) ---- */
const SVC_IMG = asset("/assets/images/services");

export type MegaItem = { label: string; image: string };
export type MegaCategory = {
  id: string;
  title: string;
  tagline: string;
  href: string;
  items: MegaItem[];
};

export const MEGA_MENU: MegaCategory[] = [
  {
    id: "audit",
    title: "Audit",
    tagline: "Assurance & Legal Compliance",
    href: "/services/audit",
    items: [
      { label: "Corporate Audit", image: `${SVC_IMG}/audit-corporate-audit.webp` },
      { label: "Financial Review", image: `${SVC_IMG}/audit-financial-review.webp` },
      { label: "Business Compliance", image: `${SVC_IMG}/audit-business-compliance.webp` },
    ],
  },
  {
    id: "consulting",
    title: "Consulting",
    tagline: "Strategy & Advisory",
    href: "/services/consulting",
    items: [
      { label: "Strategy Meeting", image: `${SVC_IMG}/consulting-strategy-meeting.webp` },
      { label: "Business Consultant", image: `${SVC_IMG}/consulting-business-consultant.webp` },
      { label: "Executive Discussion", image: `${SVC_IMG}/consulting-executive-discussion.webp` },
    ],
  },
  {
    id: "creative",
    title: "Creative Agency",
    tagline: "Branding & Design",
    href: "/services/creative-agency",
    items: [
      { label: "Branding Team", image: `${SVC_IMG}/creative-branding-team.webp` },
      { label: "UI/UX Design", image: `${SVC_IMG}/creative-ui-ux-design.webp` },
      { label: "Creative Workshop", image: `${SVC_IMG}/creative-workshop.webp` },
    ],
  },
  {
    id: "digital",
    title: "Digital Technology",
    tagline: "AI, Data & Innovation",
    href: "/services/digital-technology",
    items: [
      { label: "Artificial Intelligence", image: `${SVC_IMG}/digital-artificial-intelligence.webp` },
      { label: "Data Center", image: `${SVC_IMG}/digital-data-center.webp` },
      { label: "Digital Innovation", image: `${SVC_IMG}/digital-innovation.webp` },
    ],
  },
  {
    id: "it",
    title: "IT Solutions",
    tagline: "Cloud, Network & Support",
    href: "/services/it-solutions",
    items: [
      { label: "Cloud Infrastructure", image: `${SVC_IMG}/it-cloud-infrastructure.webp` },
      { label: "Network Operations", image: `${SVC_IMG}/it-network-operations.webp` },
      { label: "IT Support", image: `${SVC_IMG}/it-support.webp` },
    ],
  },
];

/* ---- Service detail pages (/services/[slug]) ---- */
export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  image: string;
  intro: string;
  about: string[];
  offerings: { label: string; desc: string; image: string }[];
  benefits: string[];
  process: { title: string; desc: string }[];
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "audit",
    title: "Corporate Legal & Licensing",
    tagline: "Trust built on independent, rigorous assurance",
    icon: "ShieldCheck",
    image: `${SVC_IMG}/audit-corporate-audit.webp`,
    intro:
      "Independent assurance that strengthens confidence in your financial and operational reporting — so stakeholders, investors, and regulators can rely on your numbers.",
    about: [
      "Our audit practice goes beyond ticking boxes. We combine certified public accountants with data-driven testing to give an honest, defensible picture of your financial health and control environment.",
      "Whether you need a statutory audit, an internal control review, or help staying compliant with evolving regulations, we deliver clarity you can act on — and a remediation roadmap, not just a list of problems.",
    ],
    offerings: [
      {
        label: "Corporate Audit",
        desc: "Full-scope statutory and financial statement audits across entities.",
        image: `${SVC_IMG}/audit-corporate-audit.webp`,
      },
      {
        label: "Financial Review",
        desc: "Analytical review of performance, cash flow, and reporting quality.",
        image: `${SVC_IMG}/audit-financial-review.webp`,
      },
      {
        label: "Business Compliance",
        desc: "Tax, regulatory, and legal compliance assessment and assurance.",
        image: `${SVC_IMG}/audit-business-compliance.webp`,
      },
    ],
    benefits: [
      "Certified public accountants & experienced auditors",
      "Risk-based, data-driven testing approach",
      "Clear management letters with remediation plans",
      "Strict confidentiality & quality control",
    ],
    process: [
      { title: "Planning & Risk Assessment", desc: "We map your business, systems, and key risk areas." },
      { title: "Fieldwork & Testing", desc: "Evidence gathering, sampling, and control testing." },
      { title: "Reporting", desc: "Clear findings, opinions, and prioritized recommendations." },
      { title: "Follow-up", desc: "We help you close gaps and strengthen controls." },
    ],
  },
  {
    slug: "consulting",
    title: "Business Consulting",
    tagline: "Strategy that turns complexity into measurable outcomes",
    icon: "Briefcase",
    image: `${SVC_IMG}/consulting-strategy-meeting.webp`,
    intro:
      "Strategic advisory that helps leadership make confident decisions — grounded in data, market insight, and hands-on operational experience.",
    about: [
      "We work alongside your team to diagnose challenges, design strategy, and translate it into execution. No generic slide decks — practical, prioritized plans your people can actually deliver.",
      "From growth strategy to process improvement and risk management, our consultants bring cross-industry experience and a bias toward sustainable, long-term value.",
    ],
    offerings: [
      {
        label: "Strategy Meeting",
        desc: "Facilitated strategy workshops and growth roadmaps.",
        image: `${SVC_IMG}/consulting-strategy-meeting.webp`,
      },
      {
        label: "Business Consultant",
        desc: "Dedicated advisory on operations, finance, and scaling.",
        image: `${SVC_IMG}/consulting-business-consultant.webp`,
      },
      {
        label: "Executive Discussion",
        desc: "Board-level guidance, risk management, and decision support.",
        image: `${SVC_IMG}/consulting-executive-discussion.webp`,
      },
    ],
    benefits: [
      "Data-driven, strategic approach",
      "Cross-industry expertise",
      "Execution-focused, not just advice",
      "Long-term partnership mindset",
    ],
    process: [
      { title: "Discovery", desc: "Deep-dive into your goals, data, and constraints." },
      { title: "Diagnosis", desc: "Pinpoint the highest-impact opportunities and risks." },
      { title: "Strategy", desc: "Co-create a prioritized, actionable roadmap." },
      { title: "Enablement", desc: "Support delivery and measure the results." },
    ],
  },
  {
    slug: "creative-agency",
    title: "Creative Agency — Graphic Design & Branding",
    tagline: "Distinct brands that are impossible to ignore",
    icon: "Palette",
    image: `${SVC_IMG}/creative-branding-team.webp`,
    intro:
      "Brand identities and visual systems that make your business memorable, trustworthy, and consistent across every touchpoint.",
    about: [
      "A strong brand is more than a logo — it's the feeling people get when they meet your business. We craft identity systems, company profiles, and digital experiences that communicate confidence and quality.",
      "Our creative team blends strategy with craft, so your brand doesn't just look good — it works hard to win attention and trust.",
    ],
    offerings: [
      {
        label: "Branding Team",
        desc: "Brand identity, logo systems, and brand guidelines.",
        image: `${SVC_IMG}/creative-branding-team.webp`,
      },
      {
        label: "UI/UX Design",
        desc: "Intuitive, beautiful interfaces for web and product.",
        image: `${SVC_IMG}/creative-ui-ux-design.webp`,
      },
      {
        label: "Creative Workshop",
        desc: "Campaign concepts, collateral, and company profiles.",
        image: `${SVC_IMG}/creative-workshop.webp`,
      },
    ],
    benefits: [
      "Strategy-led creative direction",
      "Consistent multi-channel identity systems",
      "Premium, modern visual craft",
      "Reusable brand toolkit for your team",
    ],
    process: [
      { title: "Brand Discovery", desc: "Understand your audience, market, and ambition." },
      { title: "Concept", desc: "Explore directions and define the visual language." },
      { title: "Design System", desc: "Build identity, components, and guidelines." },
      { title: "Rollout", desc: "Apply the brand across every touchpoint." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Growth engines powered by data, not guesswork",
    icon: "TrendingUp",
    image: `${SVC_IMG}/digital-innovation.webp`,
    intro:
      "Data-driven campaigns that grow reach, engagement, and qualified conversions — measured end to end.",
    about: [
      "We build integrated demand-generation systems across SEO, paid media, and content, all tied to analytics so every rupiah is accountable.",
      "Continuous experimentation means your marketing keeps improving — lower cost per lead, higher conversion, compounding results.",
    ],
    offerings: [
      {
        label: "Campaign Management",
        desc: "Paid search, social, and display campaigns that convert.",
        image: `${SVC_IMG}/digital-innovation.webp`,
      },
      {
        label: "Content & SEO",
        desc: "Search strategy and content that earns durable traffic.",
        image: `${SVC_IMG}/creative-ui-ux-design.webp`,
      },
      {
        label: "Analytics & CRO",
        desc: "Dashboards and experiments that optimize conversion.",
        image: `${SVC_IMG}/consulting-strategy-meeting.webp`,
      },
    ],
    benefits: [
      "Measurable, ROI-focused campaigns",
      "Full-funnel analytics & reporting",
      "Continuous A/B testing",
      "Integrated SEO, ads & content",
    ],
    process: [
      { title: "Audit", desc: "Analyze channels, funnel, and competitors." },
      { title: "Strategy", desc: "Define audiences, messaging, and channels." },
      { title: "Launch", desc: "Run campaigns and content at pace." },
      { title: "Optimize", desc: "Measure, test, and scale what works." },
    ],
  },
  {
    slug: "digital-technology",
    title: "Digital Technology",
    tagline: "AI, data, and innovation that move you forward",
    icon: "Cpu",
    image: `${SVC_IMG}/digital-artificial-intelligence.webp`,
    intro:
      "Emerging technology applied with purpose — from AI and data platforms to the digital innovation that keeps you ahead.",
    about: [
      "We help businesses adopt technology that creates real advantage: intelligent automation, data infrastructure, and modern digital products built to scale.",
      "Our approach is pragmatic — we focus on the use cases that deliver measurable value, then build them reliably and securely.",
    ],
    offerings: [
      {
        label: "Artificial Intelligence",
        desc: "AI & automation for smarter, faster operations.",
        image: `${SVC_IMG}/digital-artificial-intelligence.webp`,
      },
      {
        label: "Data Center",
        desc: "Robust data infrastructure and analytics platforms.",
        image: `${SVC_IMG}/digital-data-center.webp`,
      },
      {
        label: "Digital Innovation",
        desc: "Modern digital products and transformation programs.",
        image: `${SVC_IMG}/digital-innovation.webp`,
      },
    ],
    benefits: [
      "Pragmatic, value-first technology adoption",
      "Secure & scalable architecture",
      "Data-driven decision platforms",
      "Future-ready foundations",
    ],
    process: [
      { title: "Assess", desc: "Identify high-value technology opportunities." },
      { title: "Design", desc: "Architect secure, scalable solutions." },
      { title: "Build", desc: "Develop and integrate reliably." },
      { title: "Scale", desc: "Operate, monitor, and improve." },
    ],
  },
  {
    slug: "it-solutions",
    title: "IT Solutions",
    tagline: "Reliable, secure systems built around your operations",
    icon: "Server",
    image: `${SVC_IMG}/it-cloud-infrastructure.webp`,
    intro:
      "Scalable software and infrastructure — engineered for reliability, security, and the way your business actually runs.",
    about: [
      "From cloud infrastructure to custom internal systems and network security, we modernize operations into platforms that scale and stay protected.",
      "And we don't disappear after launch — ongoing support and monitoring keep everything running smoothly, 24/7.",
    ],
    offerings: [
      {
        label: "Cloud Infrastructure",
        desc: "Cloud migration, architecture, and managed hosting.",
        image: `${SVC_IMG}/it-cloud-infrastructure.webp`,
      },
      {
        label: "Network Operations",
        desc: "Network design, monitoring, and security hardening.",
        image: `${SVC_IMG}/it-network-operations.webp`,
      },
      {
        label: "IT Support",
        desc: "Responsive support and proactive maintenance.",
        image: `${SVC_IMG}/it-support.webp`,
      },
    ],
    benefits: [
      "Secure, scalable cloud-native architecture",
      "High availability & monitoring",
      "Custom ERP / internal systems",
      "Reliable ongoing support",
    ],
    process: [
      { title: "Assess", desc: "Review systems, infrastructure, and risks." },
      { title: "Architect", desc: "Design a secure, scalable solution." },
      { title: "Implement", desc: "Build, migrate, and integrate." },
      { title: "Support", desc: "Monitor and maintain 24/7." },
    ],
  },
];

export const getServiceDetail = (slug: string) =>
  SERVICE_DETAILS.find((s) => s.slug === slug);

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);

