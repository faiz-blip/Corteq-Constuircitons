import Link from "next/link";
import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  large?: boolean;
}

export default function ServiceCard({ title, description, icon, href, large = false }: ServiceCardProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[icon];

  return (
    <Link
      href={href}
      className={`group block rounded-lg border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-brand-blue hover:shadow-lg ${large ? "p-8" : ""}`}
    >
      {IconComponent && <IconComponent className="text-brand-blue mb-4" size={large ? 40 : 32} />}
      <h3 className={`font-bold text-brand-text ${large ? "text-xl" : "text-base"}`}>{title}</h3>
      <p className={`mt-2 leading-relaxed text-brand-text-secondary ${large ? "text-base" : "text-sm"}`}>{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-brand-blue transition-transform group-hover:translate-x-1">Learn More →</span>
    </Link>
  );
}
