import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, Tag } from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | Corteq Solutions LLC` : "Project",
    description: project?.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative h-64 md:h-80">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            href="/portfolio"
            className="mb-6 inline-flex items-center gap-2 text-sm text-brand-blue hover:underline"
          >
            <ArrowLeft size={14} />Back to Portfolio
          </Link>
          <h1 className="text-3xl font-bold text-brand-text md:text-4xl">{project.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1 text-sm text-brand-text-secondary">
              <MapPin size={14} />{project.location}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue">
              <Tag size={12} />{project.serviceTag}
            </span>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-brand-text">Project Overview</h2>
            <p className="mt-3 leading-relaxed text-brand-text-secondary">{project.description}</p>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-brand-text">Scope of Work</h2>
            <p className="mt-3 leading-relaxed text-brand-text-secondary">{project.scope}</p>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
