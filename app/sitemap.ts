import type { MetadataRoute } from "next";
import { SITE, SERVICE_DETAILS, PROJECTS } from "@/lib/data";

// Wajib untuk output: "export" (static)
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/portfolio",
    ...SERVICE_DETAILS.map((s) => `/services/${s.slug}`),
    ...PROJECTS.map((p) => `/portfolio/${p.slug}`),
  ];
  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
