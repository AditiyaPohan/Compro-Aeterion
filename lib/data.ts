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
  titleEn?: string;
  client: string;
  accent: "blue" | "azure" | "gold";
  slug: string;
  category: string;
  categoryEn?: string;
  year: string;
  image: string;
  summary: string;
  summaryEn?: string;
  description: string;
  descriptionEn?: string;
  scope: string[];
  scopeEn?: string[];
  results: { value: string; label: string }[];
  resultsEn?: { value: string; label: string }[];
};

export const PROJECTS: Project[] = [
  {
    title: "Audit Portfolio",
    titleEn: "Audit Portfolio",
    client: "PT. Aetherion Zynera Indonesia",
    accent: "blue",
    slug: "audit-portfolio",
    category: "Audit & Asuransi",
    categoryEn: "Audit & Assurance",
    year: "2025",
    image: asset("/assets/images/services/audit-corporate-audit.webp"),
    summary:
      "Membangun Kepercayaan, Memastikan Kepatuhan, Mempercepat Pertumbuhan — layanan audit, legalitas, dan kepatuhan regulasi profesional.",
    summaryEn:
      "Building Trust, Ensuring Compliance, Accelerating Growth — professional audit, legal, and regulatory compliance services.",
    description:
      "PT Aetherion Zynera Indonesia adalah Perusahaan Konsultan Profesional yang bergerak di bidang Legalitas Perusahaan, Audit Laporan Keuangan, Sertifikasi ISO, Perpajakan, SBU, dan SKK. Kami hadir sebagai solusi terpercaya untuk membantu perusahaan memenuhi kebutuhan perizinan, kepatuhan regulasi, dan penguatan kredibilitas bisnis melalui layanan yang cepat, profesional, dan berorientasi pada hasil.",
    descriptionEn:
      "PT Aetherion Zynera Indonesia is a Professional Consulting Company specializing in Corporate Legality, Financial Statement Audit, ISO Certification, Taxation, SBU, and SKK. We serve as a trusted solution to help companies meet their licensing, regulatory compliance, and business credibility needs through fast, professional, and results-oriented services.",
    scope: [
      "Legalitas & perizinan perusahaan",
      "Audit laporan keuangan independen",
      "Sertifikasi ISO, SBU & SKK",
      "Perpajakan & kepatuhan regulasi",
    ],
    scopeEn: [
      "Corporate legality & business licensing",
      "Independent financial statement audit",
      "ISO, SBU & SKK certification",
      "Taxation & regulatory compliance",
    ],
    results: [
      { value: "100%", label: "Kepatuhan Regulasi" },
      { value: "Cepat", label: "Proses Profesional" },
      { value: "Terpercaya", label: "Kredibilitas Bisnis" },
    ],
    resultsEn: [
      { value: "100%", label: "Regulatory Compliance" },
      { value: "Fast", label: "Professional Process" },
      { value: "Trusted", label: "Business Credibility" },
    ],
  },
  {
    title: "Design Portfolio",
    titleEn: "Design Portfolio",
    client: "PT. Aetherion Zynera Indonesia",
    accent: "azure",
    slug: "branding-portfolio",
    category: "Desain Grafis & Visual",
    categoryEn: "Graphic Design & Visual",
    year: "2025",
    image: asset("/assets/images/portfolio/design/argent.jpg"),
    summary:
      "Koleksi karya desain grafis & komunikasi visual — dari digital imaging produk, foto konseptual, hingga konten media sosial, iklan, dan desain event.",
    summaryEn:
      "A graphic design & visual communication portfolio — from product digital imaging and conceptual photography to social media content, advertising, and event design.",
    description:
      "Tim kreatif Aetherion menghadirkan karya visual berkualitas tinggi: digital imaging produk (Argent Instinct, Jahe Wangi), fotografi konseptual, konten skincare Instagram (TM Estetik), iklan produk (SoftBank), desain turnamen esports (PANTURA MLBB), serta social media advertising (Surya Duta Internasional) — dikerjakan dengan Adobe Photoshop, Illustrator, dan InDesign.",
    descriptionEn:
      "The Aetherion creative team delivers high-quality visual works: product digital imaging (Argent Instinct, Jahe Wangi), conceptual photography, skincare Instagram content (TM Estetik), product advertising (SoftBank), esports tournament design (PANTURA MLBB), and social media advertising (Surya Duta Internasional) — crafted with Adobe Photoshop, Illustrator, and InDesign.",
    scope: [
      "Digital Imaging & Manipulasi Produk",
      "Fotografi Konseptual",
      "Konten Media Sosial (Feed & Story)",
      "Iklan Produk & Desain Event",
    ],
    scopeEn: [
      "Digital Imaging & Product Manipulation",
      "Conceptual Photography",
      "Social Media Content (Feed & Story)",
      "Product Advertising & Event Design",
    ],
    results: [
      { value: "6+", label: "Kategori Karya" },
      { value: "5", label: "Brand Klien" },
      { value: "20+", label: "Aset Visual" },
    ],
    resultsEn: [
      { value: "6+", label: "Work Categories" },
      { value: "5", label: "Client Brands" },
      { value: "20+", label: "Visual Assets" },
    ],
  },
  {
    title: "Digital Marketing Portfolio",
    titleEn: "Digital Marketing Portfolio",
    client: "PT. Aetherion Zynera Indonesia",
    accent: "azure",
    slug: "digital-marketing-portfolio",
    category: "Pemasaran Digital",
    categoryEn: "Digital Marketing",
    year: "2025",
    image: asset("/assets/images/services/digital-innovation.webp"),
    summary:
      "Layanan digital marketing end-to-end — Google Ads, SEO, konten media sosial, dan website development untuk pertumbuhan bisnis yang terukur.",
    summaryEn:
      "End-to-end digital marketing services — Google Ads, SEO, social media content, and website development for measurable business growth.",
    description:
      "PT. Aetherion Zynera Indonesia menyediakan layanan digital marketing terintegrasi mulai dari pengelolaan Google Ads, optimasi SEO, pembuatan konten media sosial (300+ upload), hingga redesign website — menghasilkan CTR 10.32%, 31,753+ klik, dan 6,006+ leads untuk klien di sektor logistik nasional.",
    descriptionEn:
      "PT. Aetherion Zynera Indonesia provides integrated digital marketing services ranging from Google Ads management, SEO optimization, social media content creation (300+ uploads), to website redesign — delivering 10.32% CTR, 31,753+ clicks, and 6,006+ leads for clients in the national logistics sector.",
    scope: [
      "Manajemen kampanye Google Ads",
      "Redesign website & optimasi SEO",
      "Pembuatan konten media sosial (300+ posting)",
      "Analitik performa & pelaporan",
    ],
    scopeEn: [
      "Google Ads campaign management",
      "Website redesign & SEO optimization",
      "Social media content creation (300+ posts)",
      "Performance analytics & reporting",
    ],
    results: [
      { value: "10.32%", label: "Google Ads CTR" },
      { value: "6,006+", label: "Leads Dihasilkan" },
      { value: "300+", label: "Konten Diunggah" },
    ],
    resultsEn: [
      { value: "10.32%", label: "Google Ads CTR" },
      { value: "6,006+", label: "Leads Generated" },
      { value: "300+", label: "Content Uploads" },
    ],
  },
  {
    title: "IT Solution Portfolio",
    titleEn: "IT Solution Portfolio",
    client: "PT. Aetherion Zynera Indonesia",
    accent: "azure",
    slug: "it-solution-portfolio",
    category: "Solusi IT",
    categoryEn: "IT Solutions",
    year: "2024",
    image: asset("/assets/images/portfolio/it/web-hero.jpg"),
    summary:
      "Penyedia jasa solusi IT end-to-end — website company profile, web app, super app, aplikasi mobile Android, hingga pentest aplikasi.",
    summaryEn:
      "End-to-end IT solutions provider — company profile websites, web apps, super apps, Android mobile apps, and application penetration testing.",
    description:
      "PT Aetherion Zynera Indonesia adalah partner IT end-to-end: kami membangun website company profile, web application, super app, dan aplikasi mobile Android, serta mengamankannya melalui penetration testing. Salah satu hasil karya kami adalah website korporat Valentino Group yang telah tayang di www.valentinogroup.id.",
    descriptionEn:
      "PT Aetherion Zynera Indonesia is an end-to-end IT partner: we build company profile websites, web applications, super apps, and Android mobile apps, and secure them through penetration testing. One of our works is the Valentino Group corporate website, now live at www.valentinogroup.id.",
    scope: [
      "Website company profile & web application",
      "Super app & aplikasi mobile Android",
      "Pentest aplikasi (penetration testing)",
      "Maintenance, monitoring & support",
    ],
    scopeEn: [
      "Company profile website & web application",
      "Super app & Android mobile app",
      "Application penetration testing",
      "Maintenance, monitoring & support",
    ],
    results: [
      { value: "6+", label: "Layanan IT" },
      { value: "Live", label: "Proyek Klien" },
      { value: "Secure", label: "Lewat Pentest" },
    ],
    resultsEn: [
      { value: "6+", label: "IT Services" },
      { value: "Live", label: "Client Projects" },
      { value: "Secure", label: "By Pentest" },
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
  titleEn?: string;
  tagline: string;
  taglineEn?: string;
  icon: string;
  image: string;
  intro: string;
  introEn?: string;
  about: string[];
  aboutEn?: string[];
  offerings: { label: string; desc: string; image: string }[];
  offeringsEn?: { label: string; desc: string }[];
  benefits: string[];
  benefitsEn?: string[];
  process: { title: string; desc: string }[];
  processEn?: { title: string; desc: string }[];
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "audit",
    title: "Corporate Legal & Licensing",
    titleEn: "Corporate Legal & Licensing",
    tagline: "Membangun Kepercayaan, Memastikan Kepatuhan, Mempercepat Pertumbuhan",
    taglineEn: "Building Trust, Ensuring Compliance, Accelerating Growth",
    icon: "ShieldCheck",
    image: `${SVC_IMG}/audit-corporate-audit.webp`,
    intro:
      "PT Aetherion Zynera Indonesia adalah Perusahaan Konsultan Profesional yang bergerak di bidang Legalitas Perusahaan, Audit Laporan Keuangan, Sertifikasi ISO, Perpajakan, SBU, dan SKK.",
    introEn:
      "PT Aetherion Zynera Indonesia is a Professional Consulting Company specializing in Corporate Legality, Financial Statement Audit, ISO Certification, Taxation, SBU, and SKK.",
    about: [
      "Kami hadir sebagai solusi terpercaya untuk membantu perusahaan memenuhi kebutuhan perizinan, kepatuhan regulasi, dan penguatan kredibilitas bisnis melalui layanan yang cepat, profesional, dan berorientasi pada hasil.",
      "Dengan tim berpengalaman dan bersertifikasi, kami memastikan setiap proses audit, legalitas, dan kepatuhan berjalan sesuai standar regulasi yang berlaku — memberikan kepastian hukum dan kepercayaan kepada seluruh pemangku kepentingan.",
    ],
    aboutEn: [
      "We serve as a trusted solution to help companies meet their licensing, regulatory compliance, and business credibility needs through fast, professional, and results-oriented services.",
      "With an experienced and certified team, we ensure every audit, legal, and compliance process meets applicable regulatory standards — providing legal certainty and trust to all stakeholders.",
    ],
    offerings: [
      {
        label: "Legalitas Perusahaan",
        desc: "Pengurusan perizinan usaha, akta pendirian, perubahan, dan dokumen legal perusahaan.",
        image: `${SVC_IMG}/audit-corporate-audit.webp`,
      },
      {
        label: "Audit Laporan Keuangan & Perpajakan",
        desc: "Audit keuangan independen, review laporan pajak, dan kepatuhan perpajakan.",
        image: `${SVC_IMG}/audit-financial-review.webp`,
      },
      {
        label: "Sertifikasi ISO, SBU & SKK",
        desc: "Pendampingan sertifikasi ISO, Sertifikasi Badan Usaha (SBU), dan SKK Konstruksi.",
        image: `${SVC_IMG}/audit-business-compliance.webp`,
      },
    ],
    offeringsEn: [
      { label: "Corporate Legality", desc: "Business licensing, deed of establishment, amendments, and corporate legal documents." },
      { label: "Financial Audit & Taxation", desc: "Independent financial audit, tax report review, and tax compliance." },
      { label: "ISO, SBU & SKK Certification", desc: "Assistance with ISO certification, Business Entity Certification (SBU), and Construction SKK." },
    ],
    benefits: [
      "Konsultan berpengalaman & bersertifikasi resmi",
      "Proses cepat, transparan, dan berorientasi hasil",
      "Kerahasiaan data klien terjaga penuh",
      "Solusi end-to-end dari perizinan hingga kepatuhan",
    ],
    benefitsEn: [
      "Experienced & officially certified consultants",
      "Fast, transparent, and results-oriented process",
      "Full confidentiality of client data",
      "End-to-end solutions from licensing to compliance",
    ],
    process: [
      { title: "Konsultasi Awal", desc: "Identifikasi kebutuhan legalitas dan kepatuhan perusahaan Anda." },
      { title: "Persiapan Dokumen", desc: "Pengumpulan dan verifikasi seluruh dokumen yang diperlukan." },
      { title: "Proses & Pengajuan", desc: "Pengurusan resmi ke instansi terkait dengan pemantauan berkala." },
      { title: "Serah Terima & Laporan", desc: "Penyerahan dokumen final beserta laporan kepatuhan lengkap." },
    ],
    processEn: [
      { title: "Initial Consultation", desc: "Identify your company's legal and compliance needs." },
      { title: "Document Preparation", desc: "Collect and verify all required documents." },
      { title: "Processing & Submission", desc: "Official handling with relevant agencies and periodic monitoring." },
      { title: "Handover & Report", desc: "Delivery of final documents with a complete compliance report." },
    ],
  },
  {
    slug: "consulting",
    title: "Konsultasi Bisnis",
    titleEn: "Business Consulting",
    tagline: "Strategi yang mengubah kompleksitas menjadi hasil yang terukur",
    taglineEn: "Strategy that turns complexity into measurable outcomes",
    icon: "Briefcase",
    image: `${SVC_IMG}/consulting-strategy-meeting.webp`,
    intro:
      "Pendampingan strategis yang membantu pimpinan mengambil keputusan dengan percaya diri — berbasis data, wawasan pasar, dan pengalaman operasional langsung.",
    introEn:
      "Strategic advisory that helps leadership make confident decisions — grounded in data, market insight, and hands-on operational experience.",
    about: [
      "Kami bekerja bersama tim Anda untuk mendiagnosis tantangan, merancang strategi, dan menerjemahkannya menjadi eksekusi nyata. Bukan sekadar presentasi generik — rencana yang praktis, terprioritaskan, dan benar-benar dapat dijalankan tim Anda.",
      "Mulai dari strategi pertumbuhan hingga perbaikan proses dan manajemen risiko, konsultan kami membawa pengalaman lintas industri dengan fokus pada nilai jangka panjang yang berkelanjutan.",
    ],
    aboutEn: [
      "We work alongside your team to diagnose challenges, design strategy, and translate it into execution. No generic slide decks — practical, prioritized plans your people can actually deliver.",
      "From growth strategy to process improvement and risk management, our consultants bring cross-industry experience and a bias toward sustainable, long-term value.",
    ],
    offerings: [
      {
        label: "Rapat Strategi",
        desc: "Workshop strategi terfasilitasi dan peta jalan pertumbuhan.",
        image: `${SVC_IMG}/consulting-strategy-meeting.webp`,
      },
      {
        label: "Konsultan Bisnis",
        desc: "Pendampingan khusus untuk operasional, keuangan, dan skala bisnis.",
        image: `${SVC_IMG}/consulting-business-consultant.webp`,
      },
      {
        label: "Diskusi Eksekutif",
        desc: "Arahan tingkat direksi, manajemen risiko, dan dukungan keputusan.",
        image: `${SVC_IMG}/consulting-executive-discussion.webp`,
      },
    ],
    offeringsEn: [
      { label: "Strategy Meeting", desc: "Facilitated strategy workshops and growth roadmaps." },
      { label: "Business Consultant", desc: "Dedicated advisory on operations, finance, and scaling." },
      { label: "Executive Discussion", desc: "Board-level guidance, risk management, and decision support." },
    ],
    benefits: [
      "Pendekatan strategis berbasis data",
      "Keahlian lintas industri",
      "Fokus pada eksekusi, bukan sekadar saran",
      "Pola pikir kemitraan jangka panjang",
    ],
    benefitsEn: [
      "Data-driven, strategic approach",
      "Cross-industry expertise",
      "Execution-focused, not just advice",
      "Long-term partnership mindset",
    ],
    process: [
      { title: "Penelusuran", desc: "Mendalami tujuan, data, dan kendala Anda." },
      { title: "Diagnosis", desc: "Mengidentifikasi peluang dan risiko berdampak tinggi." },
      { title: "Strategi", desc: "Menyusun peta jalan yang terprioritaskan dan dapat dijalankan." },
      { title: "Pendampingan", desc: "Mendukung pelaksanaan dan mengukur hasilnya." },
    ],
    processEn: [
      { title: "Discovery", desc: "Deep-dive into your goals, data, and constraints." },
      { title: "Diagnosis", desc: "Pinpoint the highest-impact opportunities and risks." },
      { title: "Strategy", desc: "Co-create a prioritized, actionable roadmap." },
      { title: "Enablement", desc: "Support delivery and measure the results." },
    ],
  },
  {
    slug: "creative-agency",
    title: "Agensi Kreatif — Desain Grafis & Branding",
    titleEn: "Creative Agency — Graphic Design & Branding",
    tagline: "Merek yang khas dan mustahil untuk diabaikan",
    taglineEn: "Distinct brands that are impossible to ignore",
    icon: "Palette",
    image: `${SVC_IMG}/creative-branding-team.webp`,
    intro:
      "Identitas merek dan sistem visual yang membuat bisnis Anda mudah diingat, terpercaya, dan konsisten di setiap titik sentuh.",
    introEn:
      "Brand identities and visual systems that make your business memorable, trustworthy, and consistent across every touchpoint.",
    about: [
      "Merek yang kuat lebih dari sekadar logo — ia adalah kesan yang dirasakan orang saat bertemu bisnis Anda. Kami merancang sistem identitas, profil perusahaan, dan pengalaman digital yang memancarkan kepercayaan diri dan kualitas.",
      "Tim kreatif kami memadukan strategi dengan craft, sehingga merek Anda tidak hanya tampak menarik — tetapi juga bekerja keras memenangkan perhatian dan kepercayaan.",
    ],
    aboutEn: [
      "A strong brand is more than a logo — it's the feeling people get when they meet your business. We craft identity systems, company profiles, and digital experiences that communicate confidence and quality.",
      "Our creative team blends strategy with craft, so your brand doesn't just look good — it works hard to win attention and trust.",
    ],
    offerings: [
      {
        label: "Tim Branding",
        desc: "Identitas merek, sistem logo, dan panduan merek.",
        image: `${SVC_IMG}/creative-branding-team.webp`,
      },
      {
        label: "Desain UI/UX",
        desc: "Antarmuka yang intuitif dan indah untuk web dan produk.",
        image: `${SVC_IMG}/creative-ui-ux-design.webp`,
      },
      {
        label: "Workshop Kreatif",
        desc: "Konsep kampanye, materi pemasaran, dan profil perusahaan.",
        image: `${SVC_IMG}/creative-workshop.webp`,
      },
    ],
    offeringsEn: [
      { label: "Branding Team", desc: "Brand identity, logo systems, and brand guidelines." },
      { label: "UI/UX Design", desc: "Intuitive, beautiful interfaces for web and product." },
      { label: "Creative Workshop", desc: "Campaign concepts, collateral, and company profiles." },
    ],
    benefits: [
      "Arahan kreatif yang dipimpin strategi",
      "Sistem identitas multi-kanal yang konsisten",
      "Craft visual modern dan premium",
      "Toolkit merek yang dapat dipakai ulang oleh tim Anda",
    ],
    benefitsEn: [
      "Strategy-led creative direction",
      "Consistent multi-channel identity systems",
      "Premium, modern visual craft",
      "Reusable brand toolkit for your team",
    ],
    process: [
      { title: "Penemuan Merek", desc: "Memahami audiens, pasar, dan ambisi Anda." },
      { title: "Konsep", desc: "Mengeksplorasi arah dan menentukan bahasa visual." },
      { title: "Sistem Desain", desc: "Membangun identitas, komponen, dan panduan." },
      { title: "Penerapan", desc: "Menerapkan merek di setiap titik sentuh." },
    ],
    processEn: [
      { title: "Brand Discovery", desc: "Understand your audience, market, and ambition." },
      { title: "Concept", desc: "Explore directions and define the visual language." },
      { title: "Design System", desc: "Build identity, components, and guidelines." },
      { title: "Rollout", desc: "Apply the brand across every touchpoint." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Pemasaran Digital",
    titleEn: "Digital Marketing",
    tagline: "Mesin pertumbuhan yang ditenagai data, bukan tebakan",
    taglineEn: "Growth engines powered by data, not guesswork",
    icon: "TrendingUp",
    image: `${SVC_IMG}/digital-innovation.webp`,
    intro:
      "Kampanye berbasis data yang meningkatkan jangkauan, keterlibatan, dan konversi berkualitas — terukur dari awal hingga akhir.",
    introEn:
      "Data-driven campaigns that grow reach, engagement, and qualified conversions — measured end to end.",
    about: [
      "Kami membangun sistem demand-generation terintegrasi mencakup SEO, paid media, dan konten, semuanya terhubung dengan analitik sehingga setiap rupiah dapat dipertanggungjawabkan.",
      "Eksperimen berkelanjutan berarti pemasaran Anda terus membaik — biaya per leads lebih rendah, konversi lebih tinggi, dan hasil yang berlipat.",
    ],
    aboutEn: [
      "We build integrated demand-generation systems across SEO, paid media, and content, all tied to analytics so every rupiah is accountable.",
      "Continuous experimentation means your marketing keeps improving — lower cost per lead, higher conversion, compounding results.",
    ],
    offerings: [
      {
        label: "Manajemen Kampanye",
        desc: "Kampanye paid search, sosial, dan display yang mengonversi.",
        image: `${SVC_IMG}/digital-innovation.webp`,
      },
      {
        label: "Konten & SEO",
        desc: "Strategi pencarian dan konten yang menghasilkan trafik berkelanjutan.",
        image: `${SVC_IMG}/creative-ui-ux-design.webp`,
      },
      {
        label: "Analitik & CRO",
        desc: "Dashboard dan eksperimen yang mengoptimalkan konversi.",
        image: `${SVC_IMG}/consulting-strategy-meeting.webp`,
      },
    ],
    offeringsEn: [
      { label: "Campaign Management", desc: "Paid search, social, and display campaigns that convert." },
      { label: "Content & SEO", desc: "Search strategy and content that earns durable traffic." },
      { label: "Analytics & CRO", desc: "Dashboards and experiments that optimize conversion." },
    ],
    benefits: [
      "Kampanye terukur yang fokus pada ROI",
      "Analitik & pelaporan seluruh funnel",
      "Pengujian A/B berkelanjutan",
      "SEO, iklan & konten yang terintegrasi",
    ],
    benefitsEn: [
      "Measurable, ROI-focused campaigns",
      "Full-funnel analytics & reporting",
      "Continuous A/B testing",
      "Integrated SEO, ads & content",
    ],
    process: [
      { title: "Audit", desc: "Menganalisis kanal, funnel, dan kompetitor." },
      { title: "Strategi", desc: "Menentukan audiens, pesan, dan kanal." },
      { title: "Peluncuran", desc: "Menjalankan kampanye dan konten dengan cepat." },
      { title: "Optimasi", desc: "Mengukur, menguji, dan menskalakan yang berhasil." },
    ],
    processEn: [
      { title: "Audit", desc: "Analyze channels, funnel, and competitors." },
      { title: "Strategy", desc: "Define audiences, messaging, and channels." },
      { title: "Launch", desc: "Run campaigns and content at pace." },
      { title: "Optimize", desc: "Measure, test, and scale what works." },
    ],
  },
  {
    slug: "digital-technology",
    title: "Teknologi Digital",
    titleEn: "Digital Technology",
    tagline: "AI, data, dan inovasi yang membawa Anda maju",
    taglineEn: "AI, data, and innovation that move you forward",
    icon: "Cpu",
    image: `${SVC_IMG}/digital-artificial-intelligence.webp`,
    intro:
      "Teknologi terkini yang diterapkan dengan tujuan — mulai dari AI dan platform data hingga inovasi digital yang membuat Anda tetap unggul.",
    introEn:
      "Emerging technology applied with purpose — from AI and data platforms to the digital innovation that keeps you ahead.",
    about: [
      "Kami membantu bisnis mengadopsi teknologi yang menciptakan keunggulan nyata: otomatisasi cerdas, infrastruktur data, dan produk digital modern yang dibangun untuk berkembang.",
      "Pendekatan kami pragmatis — kami fokus pada use case yang memberikan nilai terukur, lalu membangunnya secara andal dan aman.",
    ],
    aboutEn: [
      "We help businesses adopt technology that creates real advantage: intelligent automation, data infrastructure, and modern digital products built to scale.",
      "Our approach is pragmatic — we focus on the use cases that deliver measurable value, then build them reliably and securely.",
    ],
    offerings: [
      {
        label: "Kecerdasan Buatan",
        desc: "AI & otomatisasi untuk operasional yang lebih cerdas dan cepat.",
        image: `${SVC_IMG}/digital-artificial-intelligence.webp`,
      },
      {
        label: "Pusat Data",
        desc: "Infrastruktur data dan platform analitik yang andal.",
        image: `${SVC_IMG}/digital-data-center.webp`,
      },
      {
        label: "Inovasi Digital",
        desc: "Produk digital modern dan program transformasi.",
        image: `${SVC_IMG}/digital-innovation.webp`,
      },
    ],
    offeringsEn: [
      { label: "Artificial Intelligence", desc: "AI & automation for smarter, faster operations." },
      { label: "Data Center", desc: "Robust data infrastructure and analytics platforms." },
      { label: "Digital Innovation", desc: "Modern digital products and transformation programs." },
    ],
    benefits: [
      "Adopsi teknologi yang pragmatis dan mengutamakan nilai",
      "Arsitektur yang aman & skalabel",
      "Platform keputusan berbasis data",
      "Fondasi yang siap menghadapi masa depan",
    ],
    benefitsEn: [
      "Pragmatic, value-first technology adoption",
      "Secure & scalable architecture",
      "Data-driven decision platforms",
      "Future-ready foundations",
    ],
    process: [
      { title: "Penilaian", desc: "Mengidentifikasi peluang teknologi bernilai tinggi." },
      { title: "Perancangan", desc: "Merancang solusi yang aman dan skalabel." },
      { title: "Pembangunan", desc: "Mengembangkan dan mengintegrasikan secara andal." },
      { title: "Skala", desc: "Mengoperasikan, memantau, dan meningkatkan." },
    ],
    processEn: [
      { title: "Assess", desc: "Identify high-value technology opportunities." },
      { title: "Design", desc: "Architect secure, scalable solutions." },
      { title: "Build", desc: "Develop and integrate reliably." },
      { title: "Scale", desc: "Operate, monitor, and improve." },
    ],
  },
  {
    slug: "it-solutions",
    title: "Solusi IT",
    titleEn: "IT Solutions",
    tagline: "Sistem yang andal dan aman, dibangun mengikuti operasional Anda",
    taglineEn: "Reliable, secure systems built around your operations",
    icon: "Server",
    image: `${SVC_IMG}/it-cloud-infrastructure.webp`,
    intro:
      "Perangkat lunak dan infrastruktur yang skalabel — direkayasa untuk keandalan, keamanan, dan cara bisnis Anda benar-benar berjalan.",
    introEn:
      "Scalable software and infrastructure — engineered for reliability, security, and the way your business actually runs.",
    about: [
      "Mulai dari infrastruktur cloud hingga sistem internal kustom dan keamanan jaringan, kami memodernisasi operasional menjadi platform yang skalabel dan tetap terlindungi.",
      "Dan kami tidak menghilang setelah peluncuran — dukungan dan pemantauan berkelanjutan menjaga semuanya berjalan lancar, 24/7.",
    ],
    aboutEn: [
      "From cloud infrastructure to custom internal systems and network security, we modernize operations into platforms that scale and stay protected.",
      "And we don't disappear after launch — ongoing support and monitoring keep everything running smoothly, 24/7.",
    ],
    offerings: [
      {
        label: "Infrastruktur Cloud",
        desc: "Migrasi cloud, arsitektur, dan managed hosting.",
        image: `${SVC_IMG}/it-cloud-infrastructure.webp`,
      },
      {
        label: "Operasi Jaringan",
        desc: "Desain jaringan, pemantauan, dan penguatan keamanan.",
        image: `${SVC_IMG}/it-network-operations.webp`,
      },
      {
        label: "Dukungan IT",
        desc: "Dukungan responsif dan pemeliharaan proaktif.",
        image: `${SVC_IMG}/it-support.webp`,
      },
    ],
    offeringsEn: [
      { label: "Cloud Infrastructure", desc: "Cloud migration, architecture, and managed hosting." },
      { label: "Network Operations", desc: "Network design, monitoring, and security hardening." },
      { label: "IT Support", desc: "Responsive support and proactive maintenance." },
    ],
    benefits: [
      "Arsitektur cloud-native yang aman dan skalabel",
      "Ketersediaan tinggi & pemantauan",
      "ERP / sistem internal kustom",
      "Dukungan berkelanjutan yang andal",
    ],
    benefitsEn: [
      "Secure, scalable cloud-native architecture",
      "High availability & monitoring",
      "Custom ERP / internal systems",
      "Reliable ongoing support",
    ],
    process: [
      { title: "Penilaian", desc: "Meninjau sistem, infrastruktur, dan risiko." },
      { title: "Perancangan", desc: "Merancang solusi yang aman dan skalabel." },
      { title: "Implementasi", desc: "Membangun, migrasi, dan integrasi." },
      { title: "Dukungan", desc: "Memantau dan memelihara 24/7." },
    ],
    processEn: [
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

