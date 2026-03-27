interface HeroBannerProps {
  title: string;
  subtitle?: string;
}

export default function HeroBanner({ title, subtitle }: HeroBannerProps) {
  return (
    <section className="bg-brand-light-bg py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-4xl font-bold text-brand-text md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-brand-text-secondary">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
