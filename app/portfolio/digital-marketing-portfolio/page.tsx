import type { Metadata } from "next";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/data";
import { DigitalMarketingContent } from "@/components/portfolio/digital-marketing-content";

export const metadata: Metadata = {
  title: "Digital Marketing Portfolio – Aetherion Zynera",
  description:
    "Layanan digital marketing end-to-end dari PT. Aetherion Zynera Indonesia — Google Ads, SEO, konten media sosial, dan website development.",
  openGraph: {
    title: "Digital Marketing Portfolio | " + SITE.name,
    description:
      "Google Ads · Content Marketing · SEO · Social Media — hasil terukur untuk bisnis Anda.",
    images: [asset("/assets/images/portfolio/hananda/portfolio-2.jpg")],
  },
};

export default function DigitalMarketingPage() {
  return <DigitalMarketingContent />;
}
