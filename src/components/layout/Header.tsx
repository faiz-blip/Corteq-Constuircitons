"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, ExternalLink } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      {/* Parent company banner */}
      <div className="bg-brand-dark-bg text-center">
        <a
          href={SITE.parentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-1.5 text-xs text-white/70 transition-colors hover:text-white"
        >
          A division of Corteq Solutions LLC — Visit our main site
          <ExternalLink size={10} />
        </a>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-brand-blue">CORTEQ</span>
          <span className="hidden text-sm text-brand-text-secondary sm:inline">| Construction Division</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-brand-text-secondary transition-colors hover:text-brand-blue"
                >
                  {link.label}
                  <ChevronDown size={14} />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-brand-text-secondary transition-colors hover:bg-brand-light-bg hover:text-brand-blue"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-brand-text-secondary transition-colors hover:text-brand-blue"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={`tel:${SITE.phone}`} className="flex items-center gap-1 text-sm text-brand-text-secondary">
            <Phone size={14} />
            {SITE.phone}
          </a>
          <Button href="/contact" size="sm">Get a Quote</Button>
        </div>

        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-2 text-sm font-medium text-brand-text-secondary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {"children" in link && link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block py-2 pl-4 text-sm text-brand-text-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mt-4 border-t border-gray-100 pt-4">
            <a href={`tel:${SITE.phone}`} className="mb-3 flex items-center gap-2 text-sm text-brand-text-secondary">
              <Phone size={14} />
              {SITE.phone}
            </a>
            <Button href="/contact" size="sm" className="w-full">Get a Quote</Button>
          </div>
        </div>
      )}
    </header>
  );
}
