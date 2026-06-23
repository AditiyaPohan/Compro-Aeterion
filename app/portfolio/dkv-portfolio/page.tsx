import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/data";
import { DkvContent } from "@/components/portfolio/dkv-content";

export const metadata: Metadata = {
  title: "Graphic Design Portfolio – Aetherion Zynera",
  description:
    "Portofolio desain grafis PT. Aetherion Zynera Indonesia — Digital Imaging, Foto Konseptual, Iklan Produk, Konten Skincare, Desain Event, dan Media Sosial.",
  openGraph: {
    title: "Graphic Design Portfolio | " + SITE.name,
    description:
      "Digital Imaging · Conceptual Photography · Social Media Content · Event Design — karya visual terbaik tim kreatif Aetherion.",
    images: [asset("/assets/images/portfolio/dkv/img_54.png")],
  },
};

export default function DkvPortfolioPage() {
  return <DkvContent />;
}
