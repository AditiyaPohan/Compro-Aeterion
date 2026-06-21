import type { Metadata } from "next";
import { SITE } from "@/lib/data";
import { PortfolioContent } from "@/components/portfolio/portfolio-content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Selected work by ${SITE.legalName} across audit, branding, digital marketing, and IT solutions.`,
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
