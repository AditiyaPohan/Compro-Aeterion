import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_DETAILS, getServiceDetail, SITE } from "@/lib/data";
import { ServiceDetailContent } from "@/components/services/service-detail-content";

export function generateStaticParams() {
  return SERVICE_DETAILS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceDetail(slug);
  if (!svc) return { title: "Service Not Found" };
  return {
    title: svc.title,
    description: svc.intro,
    openGraph: {
      title: `${svc.title} — ${SITE.name}`,
      description: svc.intro,
      images: [svc.image],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getServiceDetail(slug);
  if (!svc) notFound();

  const others = SERVICE_DETAILS.filter((s) => s.slug !== svc.slug);

  return <ServiceDetailContent svc={svc} others={others} />;
}
