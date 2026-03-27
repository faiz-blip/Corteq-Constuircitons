import { type Metadata } from "next";
import HeroBanner from "@/components/ui/HeroBanner";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/ui/CTABanner";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | Corteq Solutions LLC",
  description: "FEMA Floodplain, Construction, Storm Sewer, and Engineering services.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroBanner title="Our Services" subtitle="Comprehensive construction and engineering solutions for every project." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} title={service.title} description={service.description} icon={service.icon} href={`/services/${service.slug}`} large />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
