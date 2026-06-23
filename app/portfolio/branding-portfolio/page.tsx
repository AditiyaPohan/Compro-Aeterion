import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/data";
import { DesignPortfolioContent } from "@/components/portfolio/design-portfolio-content";

export const metadata: Metadata = {
  title: "Design Portfolio – Aetherion Zynera",
  description:
    "Portofolio desain grafis PT. Aetherion Zynera Indonesia — Digital Imaging, Fotografi Konseptual, Iklan Produk, Konten Skincare, Desain Event, dan Social Media Advertising.",
  openGraph: {
    title: "Design Portfolio | " + SITE.name,
    description:
      "Digital Imaging · Conceptual Photography · Social Media Content · Event Design — karya visual terbaik tim kreatif Aetherion.",
    images: [asset("/assets/images/portfolio/design/argent.jpg")],
  },
};

export default function BrandingPortfolioPage() {
  return <DesignPortfolioContent />;
}
