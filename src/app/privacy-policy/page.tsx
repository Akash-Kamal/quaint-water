import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { QUAINE_DATA } from "@/data/quaine";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | QUAINE Ionized Alkaline Water",
  description: "Privacy policy and consumer data management practices of QUAINE Water, marketed by ROS Retail India Private Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 pt-24 pb-16 bg-[#F7FCFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D3E9F5] shadow-sm space-y-6 text-[#082747]">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1459A3] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#53D6D1]" />
            <span>Corporate Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#4A6277]">
            Last updated: November 2026 · Governed by {QUAINE_DATA.brand.marketer.name}
          </p>

          <div className="space-y-6 text-sm text-[#4A6277] leading-relaxed pt-4 border-t border-[#D3E9F5]">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#082747]">1. Introduction & Scope</h2>
              <p>
                QUAINE (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates under the House of WPI Group, marketed by ROS Retail India Private Limited. We are committed to safeguarding the privacy and digital rights of our consumers, corporate hospitality partners, and commercial distributors visiting our digital channels.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#082747]">2. Information We Collect</h2>
              <p>
                When you initiate a business enquiry, register for retail distribution, or communicate via our contact portal, we collect voluntarily submitted information including your name, business designation, corporate affiliation, telephone number, email address, and regional logistics requirements.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#082747]">3. Use of Information</h2>
              <p>
                All data collected is strictly utilized to evaluate commercial supply feasibility, coordinate sample shipments, fulfill regional distribution mandates, verify regulatory compliance, and respond to general customer queries. We do not sell, license, or monetize consumer contact records to third-party marketing brokers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#082747]">4. Regulatory Compliance & Data Storage</h2>
              <p>
                Commercial records and traceability logs are securely retained in compliance with Indian information technology frameworks and FSSAI statutory documentation requirements.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#082747]">5. Contact Our Privacy Officer</h2>
              <p>
                For questions regarding data processing or updates to corporate distributor dossiers, contact our compliance desk at{" "}
                <a href={`mailto:${QUAINE_DATA.brand.marketer.corporateEmail}`} className="text-[#073B73] font-semibold underline">
                  {QUAINE_DATA.brand.marketer.corporateEmail}
                </a>{" "}
                or by mail to: {QUAINE_DATA.brand.marketer.name}, {QUAINE_DATA.brand.marketer.address}.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-[#D3E9F5] flex justify-between items-center text-xs">
            <Link href="/" className="text-[#073B73] font-bold hover:underline">
              ← Return to Home
            </Link>
            <Link href="/terms" className="text-[#1459A3] hover:underline">
              Review Terms & Conditions →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
