import { ShieldCheck, Clock, Handshake } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "FEMA Certified", description: "Full compliance with federal floodplain regulations and NFIP standards." },
  { icon: Clock, title: "On-Time Delivery", description: "Proven track record of completing projects on schedule and within budget." },
  { icon: Handshake, title: "Trusted Partner", description: "Federal, municipal, and commercial clients across the United States." },
];

export default function WhyCorteq() {
  return (
    <section className="bg-brand-light-bg py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="section-label">Why Corteq</p>
          <h2 className="section-heading">Built on Expertise & Integrity</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10">
                <reason.icon className="text-brand-blue" size={28} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-text">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
