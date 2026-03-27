import Link from "next/link";
import { SITE } from "@/lib/constants";

const serviceLinks = [
  { label: "FEMA Floodplain", href: "/services/fema-floodplain" },
  { label: "Construction", href: "/services/construction" },
  { label: "Storm Sewer", href: "/services/storm-sewer" },
  { label: "Engineering", href: "/services/engineering" },
];

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Bidding", href: "/bidding" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark-bg text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold text-brand-blue">CORTEQ</Link>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Construction Division of Corteq Solutions LLC. Building infrastructure, protecting communities.
            </p>
            <a href={SITE.parentUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-brand-blue hover:underline">
              Visit Corteq Solutions →
            </a>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-brand-blue">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-brand-blue">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href={`mailto:${SITE.email}`} className="hover:text-brand-blue">{SITE.email}</a></li>
              <li><a href={`tel:${SITE.phone}`} className="hover:text-brand-blue">{SITE.phone}</a></li>
              <li>United States</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Corteq Solutions LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
