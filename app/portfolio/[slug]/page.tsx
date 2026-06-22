import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProject, SITE } from "@/lib/data";
import { ProjectDetailContent } from "@/components/portfolio/project-detail-content";

const STATIC_ROUTES = ["digital-marketing-portfolio"];

export function generateStaticParams() {
  return PROJECTS.filter((p) => !STATIC_ROUTES.includes(p.slug)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${SITE.name}`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return <ProjectDetailContent project={project} others={others} />;
}
