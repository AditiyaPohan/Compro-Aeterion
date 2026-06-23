import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/data";
import { ItPortfolioContent } from "@/components/portfolio/it-portfolio-content";

export const metadata: Metadata = {
  title: "IT Solutions Portfolio – Aetherion Zynera",
  description:
    "Studi kasus pengembangan web PT. Aetherion Zynera Indonesia — website korporat Valentino Group: responsif, SEO-friendly, katalog produk, dan visualizer ruangan interaktif.",
  openGraph: {
    title: "IT Solutions Portfolio | " + SITE.name,
    description:
      "Web Development · Responsive · SEO · Product Catalog — website Valentino Group oleh tim Aetherion.",
    images: [asset("/assets/images/portfolio/it/web-hero.jpg")],
  },
};

export default function ItSolutionPortfolioPage() {
  return <ItPortfolioContent />;
}
