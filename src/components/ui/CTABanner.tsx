import Button from "./Button";
import { SITE } from "@/lib/constants";

interface CTABannerProps {
  heading?: string;
  subtitle?: string;
}

export default function CTABanner({
  heading = "Ready to Start Your Project?",
  subtitle = "Get a free consultation and quote from our expert team.",
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">{heading}</h2>
        <p className="mt-3 text-white/90">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact" variant="outline-white" size="lg">Contact Us</Button>
          <Button href={`tel:${SITE.phone}`} variant="outline-white" size="lg">{SITE.phone}</Button>
        </div>
      </div>
    </section>
  );
}
