import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark-bg via-brand-dark-navy to-brand-blue py-20 md:py-32">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[4px] text-white/60">{SITE.name}</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
          Building Infrastructure.<br />Protecting Communities.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">{SITE.description}</p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact" size="lg">Get a Free Quote →</Button>
          <Button href="/portfolio" variant="outline-white" size="lg">View Our Work</Button>
        </div>
      </div>
    </section>
  );
}
