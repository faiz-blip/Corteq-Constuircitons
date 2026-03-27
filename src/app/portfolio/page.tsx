"use client";

import { useState } from "react";
import HeroBanner from "@/components/ui/HeroBanner";
import ProjectCard from "@/components/ui/ProjectCard";
import CTABanner from "@/components/ui/CTABanner";
import { projects } from "@/data/projects";

const filters = [
  { label: "All", value: "all" },
  { label: "FEMA Floodplain", value: "fema-floodplain" },
  { label: "Construction", value: "construction" },
  { label: "Storm Sewer", value: "storm-sewer" },
  { label: "Engineering", value: "engineering" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.serviceSlug === active);

  return (
    <>
      <HeroBanner title="Our Work" subtitle="Explore our portfolio of construction, engineering, and floodplain management projects." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActive(filter.value)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${active === filter.value ? "bg-brand-blue text-white" : "bg-gray-100 text-brand-text-secondary hover:bg-gray-200"}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                location={project.location}
                serviceTag={project.serviceTag}
                image={project.image}
              />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-12 text-center text-brand-text-secondary">No projects found for this category.</p>
          )}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
