export type Lang = "en" | "id";

const en = {
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    cta: "Get Consultation",
  },
  hero: {
    badge: "Integrated Professional Services",
    lines: ["Empowering Business", "Through Audit, Creative", "& Digital Technology"],
    description:
      "PT Aetherion Zynera Indonesia provides integrated professional services in Audit, Design, Digital Marketing, and IT Solutions to help businesses grow, innovate, and thrive in the digital era.",
    cta: "Contact Us",
  },
  about: {
    eyebrow: "About Us",
    heading: ["Why Choose Aetherion", "Zynera Indonesia?"],
    subtitle: "Empowering Business Growth Through Innovation and Technology",
    cta: "Learn More About Us",
    stats: { clients: "Clients", projects: "Projects", years: "Years" },
    whyUs: [
      "Certified & Experienced Professionals",
      "Integrated Multi-Services",
      "Data-Driven & Strategic Approach",
      "High Standard & Confidentiality",
      "Focus on Long-Term Partnership",
    ],
  },
  services: {
    eyebrow: "What We Do",
    heading: "Zynera Core Services",
    subtitle:
      "Integrated solution to help your business grow, optimize performance and achieve sustainable goals.",
    learnMore: "Learn more",
    items: [
      {
        title: "Corporate Legal & Licensing",
        desc: "Financial Audit, Internal Audit, Tax Review, Public Accountant",
      },
      {
        title: "Graphic Design & Branding",
        desc: "Brand Identity, Logo Design, Company Profile, UI/UX Design",
      },
      {
        title: "Digital Marketing",
        desc: "SEO, SEM, Social Media, Content Marketing, Ads, Analytics",
      },
      {
        title: "IT Solutions",
        desc: "Web Development, ERP, SaaS, Cyber Security",
      },
    ],
  },
  achievements: [
    { suffix: "+", label: "Clients Served" },
    { suffix: "+", label: "Projects Completed" },
    { suffix: "+", label: "Years of Experience" },
    { suffix: "+", label: "Team Members" },
  ],
  projects: {
    eyebrow: "Portfolio",
    heading: "Featured Projects",
    subtitle: "Empowering Business Growth Through Innovation and Technology.",
    viewAll: "View All Projects",
  },
  contact: {
    eyebrow: "Get in Touch",
    heading: ["Let's Build Something", "Great Together"],
    subtitle:
      "Tell us about your goals. Our team will get back to you within one business day to explore how we can help.",
    fields: {
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      phone: "Phone",
      phonePlaceholder: "+62 ...",
      message: "Message",
      messagePlaceholder: "How can we help?",
    },
    send: "Send Message",
    sent: "Message Sent",
    labels: { office: "Office", phone: "Phone", email: "Email" },
  },
  footer: {
    tagline:
      "Integrated professional services in Audit, Design, Digital Marketing, and IT Solutions for the digital era.",
    company: "Company",
    services: "Services",
    contact: "Contact",
    rights: "All rights reserved.",
    founded: "Est. 2024",
  },
  portfolio: {
    eyebrow: "Our Work",
    backLabel: "Back to Portfolio",
    scopeLabel: "Project Scope",
    resultLabel: "Results",
    otherLabel: "Other Projects",
    viewProject: "View Project",
    categories: {
      audit: "Audit & Assurance",
      creative: "Creative & Branding",
      digital: "Digital Marketing",
      it: "IT Solutions",
    },
  },
  serviceDetail: {
    backLabel: "Back to Services",
    benefitsLabel: "Why Choose This Service",
    processLabel: "Our Process",
    offeringsLabel: "What We Offer",
    otherLabel: "Other Services",
    ctaHeading: "Ready to Get Started?",
    ctaDesc:
      "Contact our team today and let us craft a solution tailored to your business.",
    ctaBtn: "Start a Conversation",
  },
};

const id: typeof en = {
  nav: {
    home: "Beranda",
    about: "Tentang Kami",
    services: "Layanan",
    portfolio: "Portofolio",
    contact: "Kontak",
    cta: "Konsultasi Gratis",
  },
  hero: {
    badge: "Layanan Profesional Terintegrasi",
    lines: ["Memberdayakan Bisnis", "Melalui Audit, Kreatif", "& Teknologi Digital"],
    description:
      "PT Aetherion Zynera Indonesia menyediakan layanan profesional terintegrasi di bidang Audit, Desain, Pemasaran Digital, dan Solusi IT untuk membantu bisnis Anda tumbuh, berinovasi, dan berkembang di era digital.",
    cta: "Hubungi Kami",
  },
  about: {
    eyebrow: "Tentang Kami",
    heading: ["Mengapa Memilih Aetherion", "Zynera Indonesia?"],
    subtitle: "Memberdayakan Pertumbuhan Bisnis Melalui Inovasi dan Teknologi",
    cta: "Pelajari Lebih Lanjut",
    stats: { clients: "Klien", projects: "Proyek", years: "Tahun" },
    whyUs: [
      "Profesional Bersertifikat & Berpengalaman",
      "Multi-Layanan Terintegrasi",
      "Pendekatan Berbasis Data & Strategis",
      "Standar Tinggi & Kerahasiaan",
      "Fokus pada Kemitraan Jangka Panjang",
    ],
  },
  services: {
    eyebrow: "Apa yang Kami Lakukan",
    heading: "Layanan Inti Zynera",
    subtitle:
      "Solusi terintegrasi untuk membantu bisnis Anda tumbuh, mengoptimalkan kinerja, dan mencapai tujuan yang berkelanjutan.",
    learnMore: "Selengkapnya",
    items: [
      {
        title: "Audit, Asuransi & Kepatuhan Hukum",
        desc: "Audit Keuangan, Audit Internal, Tinjauan Pajak, Akuntan Publik",
      },
      {
        title: "Desain Grafis & Branding",
        desc: "Identitas Merek, Desain Logo, Profil Perusahaan, Desain UI/UX",
      },
      {
        title: "Pemasaran Digital",
        desc: "SEO, SEM, Media Sosial, Pemasaran Konten, Iklan, Analitik",
      },
      {
        title: "Solusi IT",
        desc: "Pengembangan Web, ERP, SaaS, Keamanan Siber",
      },
    ],
  },
  achievements: [
    { suffix: "+", label: "Klien Dilayani" },
    { suffix: "+", label: "Proyek Selesai" },
    { suffix: "+", label: "Tahun Pengalaman" },
    { suffix: "+", label: "Anggota Tim" },
  ],
  projects: {
    eyebrow: "Portofolio",
    heading: "Proyek Unggulan",
    subtitle: "Memberdayakan Pertumbuhan Bisnis Melalui Inovasi dan Teknologi.",
    viewAll: "Lihat Semua Proyek",
  },
  contact: {
    eyebrow: "Hubungi Kami",
    heading: ["Mari Bangun Sesuatu", "yang Luar Biasa Bersama"],
    subtitle:
      "Ceritakan tujuan Anda. Tim kami akan menghubungi Anda dalam satu hari kerja untuk mengeksplorasi bagaimana kami dapat membantu.",
    fields: {
      name: "Nama",
      namePlaceholder: "Nama lengkap Anda",
      email: "Email",
      emailPlaceholder: "anda@perusahaan.com",
      phone: "Telepon",
      phonePlaceholder: "+62 ...",
      message: "Pesan",
      messagePlaceholder: "Bagaimana kami bisa membantu?",
    },
    send: "Kirim Pesan",
    sent: "Pesan Terkirim",
    labels: { office: "Kantor", phone: "Telepon", email: "Email" },
  },
  footer: {
    tagline:
      "Layanan profesional terintegrasi di bidang Audit, Desain, Pemasaran Digital, dan Solusi IT untuk era digital.",
    company: "Perusahaan",
    services: "Layanan",
    contact: "Kontak",
    rights: "Hak cipta dilindungi.",
    founded: "Est. 2024",
  },
  portfolio: {
    eyebrow: "Karya Kami",
    backLabel: "Kembali ke Portofolio",
    scopeLabel: "Ruang Lingkup Proyek",
    resultLabel: "Hasil",
    otherLabel: "Proyek Lainnya",
    viewProject: "Lihat Proyek",
    categories: {
      audit: "Audit & Asuransi",
      creative: "Kreatif & Branding",
      digital: "Pemasaran Digital",
      it: "Solusi IT",
    },
  },
  serviceDetail: {
    backLabel: "Kembali ke Layanan",
    benefitsLabel: "Mengapa Memilih Layanan Ini",
    processLabel: "Proses Kami",
    offeringsLabel: "Apa yang Kami Tawarkan",
    otherLabel: "Layanan Lainnya",
    ctaHeading: "Siap Memulai?",
    ctaDesc:
      "Hubungi tim kami hari ini dan biarkan kami merancang solusi yang disesuaikan dengan bisnis Anda.",
    ctaBtn: "Mulai Konsultasi",
  },
};

export const translations = { en, id } as const;
export type Translations = typeof en;
