import { type Metadata } from "next";
import Image from "next/image";
import { Award, Users, Target, Shield } from "lucide-react";
import HeroBanner from "@/components/ui/HeroBanner";
import CTABanner from "@/components/ui/CTABanner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Corteq Solutions LLC",
  description: "Learn about Corteq Solutions LLC Construction Division.",
};

const values = [
  { icon: Award, title: "Professional Excellence", description: "We deliver the highest quality work through rigorous standards and continuous improvement." },
  { icon: Shield, title: "Integrity", description: "Honest communication, transparent pricing, and ethical business practices in every engagement." },
  { icon: Users, title: "Teamwork", description: "Collaborative partnerships with clients, contractors, and communities for better outcomes." },
  { icon: Target, title: "Accountability", description: "We stand behind our work with clear deliverables, timelines, and measurable results." },
];

export default function AboutPage() {
  return (
    <>
      <HeroBanner title="About Corteq Solutions" subtitle="A trusted partner in construction, engineering, and floodplain management." />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="section-heading">Decades of Construction Expertise</h2>
              <p className="mt-6 leading-relaxed text-brand-text-secondary">
                Corteq Solutions LLC&apos;s Construction Division brings together seasoned professionals in FEMA floodplain management, general construction, storm sewer systems, and civil engineering. As part of the broader Corteq Solutions family, we leverage cutting-edge technology and deep industry knowledge to deliver projects that protect communities and build lasting infrastructure.
              </p>
              <p className="mt-4 leading-relaxed text-brand-text-secondary">
                Operating across the United States, our team has completed over 150 projects for federal agencies, municipalities, and private clients. We specialize in the intersection of regulatory compliance and practical construction — ensuring every project meets the highest standards of safety, quality, and environmental stewardship.
              </p>
            </div>
            <div className="relative h-72 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Corteq Solutions construction team at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light-bg py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="section-label">Our Values</p>
            <h2 className="section-heading">What Drives Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-text-secondary">
              Our mission is to deliver exceptional construction and engineering solutions that protect communities and build resilient infrastructure.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10">
                  <value.icon className="text-brand-blue" size={24} />
                </div>
                <h3 className="mt-4 font-semibold text-brand-text">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="section-label">Part of Something Bigger</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-text">Corteq Solutions LLC</h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-text-secondary">
            Our Construction Division is part of Corteq Solutions LLC, a technology and consulting firm serving federal agencies, corporations, and non-profits across five countries.
          </p>
          <a href={SITE.parentUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-brand-blue hover:underline">
            Visit Corteq Solutions →
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
