import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  slug: string;
  title: string;
  location: string;
  serviceTag: string;
  image: string;
}

export default function ProjectCard({ slug, title, location, serviceTag, image }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-200 hover:shadow-lg"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <span className="inline-block rounded-full bg-brand-blue/10 px-2 py-0.5 text-xs font-medium text-brand-blue">{serviceTag}</span>
        <h3 className="mt-2 font-semibold text-brand-text">{title}</h3>
        <p className="text-sm text-brand-text-secondary">{location}</p>
      </div>
    </Link>
  );
}
