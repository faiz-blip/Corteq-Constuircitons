import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="section-label">Our Work</p>
          <h2 className="section-heading">Featured Projects</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
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
        <div className="mt-10 text-center">
          <Button href="/portfolio" variant="outline">View All Projects →</Button>
        </div>
      </div>
    </section>
  );
}
