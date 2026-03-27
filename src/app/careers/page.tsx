import { type Metadata } from "next";
import { TrendingUp, Heart, Users, Briefcase, MapPin } from "lucide-react";
import HeroBanner from "@/components/ui/HeroBanner";
import CTABanner from "@/components/ui/CTABanner";
import { jobs } from "@/data/jobs";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers | Corteq Solutions LLC",
  description: "Join the Corteq Solutions construction team.",
};

const perks = [
  { icon: TrendingUp, title: "Growth Opportunities", description: "Career development, training, and advancement paths." },
  { icon: Heart, title: "Competitive Benefits", description: "Health, dental, vision, 401(k), and paid time off." },
  { icon: Users, title: "Great Culture", description: "Collaborative team environment focused on excellence." },
];

export default function CareersPage() {
  return (
    <>
      <HeroBanner title="Join Our Team" subtitle="Build your career with a team that builds infrastructure." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {perks.map((perk) => (
              <div key={perk.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10">
                  <perk.icon className="text-brand-blue" size={28} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-text">{perk.title}</h3>
                <p className="mt-2 text-sm text-brand-text-secondary">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-light-bg py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <p className="section-label">Open Positions</p>
            <h2 className="section-heading">Current Openings</h2>
          </div>
          <div className="mt-12 space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="rounded-lg border border-gray-200 bg-white p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-text">{job.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-brand-text-secondary">
                      <span className="inline-flex items-center gap-1"><MapPin size={14} />{job.location}</span>
                      <span className="inline-flex items-center gap-1"><Briefcase size={14} />{job.type}</span>
                    </div>
                  </div>
                  <a href={`mailto:${SITE.email}?subject=Application: ${job.title}`} className="inline-flex items-center justify-center rounded-md bg-brand-blue px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark">
                    Apply Now
                  </a>
                </div>
                <p className="mt-3 text-sm text-brand-text-secondary">{job.description}</p>
                <ul className="mt-3 space-y-1">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="text-sm text-brand-text-secondary before:mr-2 before:text-brand-blue before:content-['•']">{req}</li>
                  ))}
                </ul>
              </div>
            ))}
            {jobs.length === 0 && <p className="py-12 text-center text-brand-text-secondary">No open positions at this time. Check back soon!</p>}
          </div>
        </div>
      </section>
      <CTABanner heading="Don't See the Right Role?" subtitle="Send us your resume — we're always looking for talented people." />
    </>
  );
}
