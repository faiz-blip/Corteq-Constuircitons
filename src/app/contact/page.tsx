"use client";

import { useActionState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import HeroBanner from "@/components/ui/HeroBanner";
import { SITE } from "@/lib/constants";
import { submitContactForm, type ContactFormState } from "./action";

const initialState: ContactFormState = { success: false, message: "" };

const serviceOptions = [
  "FEMA Floodplain Management",
  "General Construction",
  "Storm Sewer Design & Installation",
  "Engineering & Consulting",
  "Other",
];

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <>
      <HeroBanner title="Contact Us" subtitle="Get in touch for a free consultation and project quote." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-brand-text">Send Us a Message</h2>
              {state.message && (
                <div className={`mt-4 rounded-md p-4 text-sm ${state.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                  {state.message}
                </div>
              )}
              <form action={formAction} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-text">Name *</label>
                    <input type="text" id="name" name="name" required className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-text">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-text">Phone</label>
                    <input type="tel" id="phone" name="phone" className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1 block text-sm font-medium text-brand-text">Service Interest</label>
                    <select id="service" name="service" className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue">
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-text">Message *</label>
                  <textarea id="message" name="message" required rows={5} className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" disabled={isPending} className="w-full rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark disabled:opacity-50 sm:w-auto">
                  {isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-text">Get in Touch</h2>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
                    <Mail className="text-brand-blue" size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-text">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-sm text-brand-blue hover:underline">{SITE.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
                    <Phone className="text-brand-blue" size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-text">Phone</p>
                    <a href={`tel:${SITE.phone}`} className="text-sm text-brand-blue hover:underline">{SITE.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
                    <MapPin className="text-brand-blue" size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-text">Locations</p>
                    <p className="text-sm text-brand-text-secondary">United States, Australia, Canada, Pakistan, United Kingdom</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex h-48 items-center justify-center rounded-lg bg-gray-100">
                <span className="text-sm text-brand-text-secondary">Google Maps Embed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
