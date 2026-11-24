import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { QUAINE_DATA } from "@/data/quaine";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | QUAINE Ionized Alkaline Water",
  description: "Terms and conditions governing the purchase, supply, distribution, and commercial use of QUAINE Water.",
};

export default function TermsPage() {
  return (
    <main className="flex-1 pt-24 pb-16 bg-[#F7FCFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D3E9F5] shadow-sm space-y-6 text-[#082747]">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1459A3] uppercase tracking-wider">
            <FileText className="w-4 h-4 text-[#53D6D1]" />
            <span>Commercial Terms</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#4A6277]">
            Effective Date: Launch 2026 · Marketed by {QUAINE_DATA.brand.marketer.name}
          </p>

          <div className="space-y-6 text-sm text-[#4A6277] leading-relaxed pt-4 border-t border-[#D3E9F5]">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#082747]">1. General Agreement</h2>
              <p>
                By accessing this website, requesting product samples, or executing wholesale procurement orders for QUAINE Ionized Alkaline Water, you acknowledge and agree to comply with the following commercial and operational terms established by ROS Retail India Private Limited.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#082747]">2. Product Specifications & Regulatory Standard</h2>
              <p>
                QUAINE is packaged in 1000 ml clear PET bottles under FSSAI Licence No. 11519005000608. Product specifications—including alkaline pH range (8.0–9.5) and mineral composition (Calcium 12 mg, Magnesium 8 mg, Sodium 8 mg, Potassium 7 mg per litre)—reflect standard laboratory analysis at packaging. White particles occasionally visible are solidified edible minerals naturally occurring in higher concentration and are completely safe to consume.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#082747]">3. Storage and Handling Mandate</h2>
              <p>
                Distributors, retail establishments, and hospitality partners must maintain product stock in a clean, cool, and dry place protected from direct exposure to sunlight. Proper temperature control preserves the physical integrity of PET packaging and prevents mineral degradation.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#082747]">4. Commercial Inquiries & Distribution Rights</h2>
              <p>
                Submission of a distributor enquiry form does not constitute a binding exclusivity agreement or franchise grant. Commercial contracts are executed individually following credit verification and territory assessment by our commercial desk.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#082747]">5. Trademark & Intellectual Property</h2>
              <p>
                The QUAINE trademark, 3D droplet insignia, packaging trade dress, bottle silhouette, and associated brand creative assets are proprietary property belonging to the House of WPI Group and ROS Retail India Private Limited. Unauthorized duplication or rebranding is strictly prohibited.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-[#D3E9F5] flex justify-between items-center text-xs">
            <Link href="/" className="text-[#073B73] font-bold hover:underline">
              ← Return to Home
            </Link>
            <Link href="/privacy-policy" className="text-[#1459A3] hover:underline">
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
