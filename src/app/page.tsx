import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsCounter from "@/components/ui/StatsCounter";
import WhyCorteq from "@/components/sections/WhyCorteq";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CTABanner from "@/components/ui/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsCounter />
      <WhyCorteq />
      <FeaturedProjects />
      <CTABanner />
    </>
  );
}
