import { type Metadata } from "next";
import { FileText, Send, Phone as PhoneIcon } from "lucide-react";
import HeroBanner from "@/components/ui/HeroBanner";
import { bids } from "@/data/bids";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bidding Opportunities | Corteq Solutions LLC",
  description: "Current bid opportunities and RFP submissions.",
};

export default function BiddingPage() {
  const openBids = bids.filter((b) => b.status === "Open");
  const closedBids = bids.filter((b) => b.status === "Closed");

  return (
    <>
      <HeroBanner title="Bidding Opportunities" subtitle="View current bid opportunities and learn how to submit proposals." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="section-label">Current Opportunities</p>
            <h2 className="section-heading">Open Bids</h2>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="pb-3 text-sm font-semibold text-brand-text">Project</th>
                  <th className="pb-3 text-sm font-semibold text-brand-text">Location</th>
                  <th className="pb-3 text-sm font-semibold text-brand-text">Deadline</th>
                  <th className="pb-3 text-sm font-semibold text-brand-text">Status</th>
                </tr>
              </thead>
              <tbody>
                {openBids.map((bid) => (
                  <tr key={bid.id} className="border-b border-gray-100">
                    <td className="py-4">
                      <p className="font-medium text-brand-text">{bid.project}</p>
                      <p className="text-sm text-brand-text-secondary">{bid.description}</p>
                    </td>
                    <td className="py-4 text-sm text-brand-text-secondary">{bid.location}</td>
                    <td className="py-4 text-sm text-brand-text-secondary">
                      {new Date(bid.deadline).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </td>
                    <td className="py-4">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">Open</span>
                    </td>
                  </tr>
                ))}
                {closedBids.map((bid) => (
                  <tr key={bid.id} className="border-b border-gray-100 opacity-60">
                    <td className="py-4">
                      <p className="font-medium text-brand-text">{bid.project}</p>
                      <p className="text-sm text-brand-text-secondary">{bid.description}</p>
                    </td>
                    <td className="py-4 text-sm text-brand-text-secondary">{bid.location}</td>
                    <td className="py-4 text-sm text-brand-text-secondary">
                      {new Date(bid.deadline).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </td>
                    <td className="py-4">
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">Closed</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="bg-brand-light-bg py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <p className="section-label">Submission Process</p>
            <h2 className="section-heading">How to Submit a Bid</h2>
          </div>
          <div className="mt-12 space-y-6">
            {[
              { icon: FileText, step: "1", title: "Review the Opportunity", desc: "Review the project details, scope, and requirements listed above." },
              { icon: Send, step: "2", title: "Prepare Your Proposal", desc: "Compile your qualifications, pricing, timeline, and relevant experience." },
              { icon: PhoneIcon, step: "3", title: "Submit & Follow Up", desc: `Email your proposal to ${SITE.email} or call ${SITE.phone} for questions.` },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">{item.step}</div>
                <div>
                  <h3 className="font-semibold text-brand-text">{item.title}</h3>
                  <p className="mt-1 text-sm text-brand-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-dark-bg py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="text-xl font-bold text-white">Questions About Bidding?</h3>
          <p className="mt-2 text-white/70">
            Contact us at{" "}
            <a href={`mailto:${SITE.email}`} className="text-brand-blue hover:underline">{SITE.email}</a>{" "}
            or call{" "}
            <a href={`tel:${SITE.phone}`} className="text-brand-blue hover:underline">{SITE.phone}</a>
          </p>
        </div>
      </section>
    </>
  );
}
