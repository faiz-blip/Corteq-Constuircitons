import { type Metadata } from "next";
import { notFound } from "next/navigation";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import HeroBanner from "@/components/ui/HeroBanner";
import CTABanner from "@/components/ui/CTABanner";
import ProjectCard from "@/components/ui/ProjectCard";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return {
    title: service ? `${service.title} | Corteq Solutions LLC` : "Service",
    description: service?.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedProjects = projects.filter((p) => p.serviceSlug === service.slug).slice(0, 3);
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[service.icon];

  return (
    <>
      <HeroBanner title={service.title} subtitle={service.description} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-start gap-4">
            {IconComponent && <IconComponent className="mt-1 shrink-0 text-brand-blue" size={36} />}
            <p className="text-lg leading-relaxed text-brand-text-secondary">{service.fullDescription}</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light-bg py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="section-label">What We Offer</p>
            <h2 className="section-heading">Key Services</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map((offering) => (
              <div key={offering.title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-brand-text">{offering.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <p className="section-label">How We Work</p>
            <h2 className="section-heading">Our Process</h2>
          </div>
          <div className="mt-12 space-y-6">
            {service.process.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">{i + 1}</div>
                <div className="flex items-center gap-3 pt-2">
                  <p className="text-brand-text-secondary">{step}</p>
                  {i < service.process.length - 1 && <ArrowRight className="hidden shrink-0 text-brand-blue/30 md:block" size={16} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-brand-light-bg py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <p className="section-label">Our Work</p>
              <h2 className="section-heading">Related Projects</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} slug={project.slug} title={project.title} location={project.location} serviceTag={project.serviceTag} image={project.image} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner heading={`Need ${service.shortTitle} Services?`} subtitle="Contact us for a free consultation and project quote." />
    </>
  );
}
