import React from "react";
import Link from "next/link";
import { ArrowRight, Building, Truck, ShieldCheck, Mail, Phone } from "lucide-react";
import { QUAINE_DATA } from "@/data/quaine";

export default function PartnershipCTA() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#073B73] via-[#082747] to-[#073B73] text-white relative overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#53D6D1]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#1459A3]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-[0.2em] text-[#83E7D9]">
              <Truck className="w-3.5 h-3.5 text-[#53D6D1]" />
              <span>National Distribution & HORECA Supply</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Bring Quaine to Your Market.
            </h2>

            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Partner with Quaine and introduce premium ionized alkaline water to your customers. We collaborate with leading hotels, gourmet cafes, premium fitness chains, and regional beverage distributors across India.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-white/80">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-[#53D6D1]" />
                <span>9-Month Shelf Life</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-[#53D6D1]" />
                <span>FSSAI Compliant Supply</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-[#53D6D1]" />
                <span>POS Barcode Integrated</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/contact?type=distributor"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#53D6D1] text-[#082747] hover:bg-[#83E7D9] transition-all shadow-lg active:scale-95 group font-heading"
              >
                <span>Become a Distributor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact?type=business"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all shadow-sm"
              >
                <span>Business Enquiry</span>
              </Link>
            </div>
          </div>

          {/* Right Card: Quick Direct Contact Details */}
          <div className="lg:col-span-4 bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2 pb-3 border-b border-white/10">
              <Building className="w-4 h-4 text-[#53D6D1]" />
              <span>Commercial Desk</span>
            </h3>

            <div className="space-y-4 text-xs text-white/80">
              <div>
                <span className="text-white/50 block mb-1">Corporate Marketer</span>
                <strong className="text-white block">{QUAINE_DATA.brand.marketer.name}</strong>
                <span className="text-white/70 block mt-0.5">{QUAINE_DATA.brand.marketer.address}</span>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                <Phone className="w-4 h-4 text-[#53D6D1] shrink-0" />
                <span>Customer Care: {QUAINE_DATA.brand.manufacturer.customerCarePhone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#53D6D1] shrink-0" />
                <span>{QUAINE_DATA.brand.marketer.corporateEmail}</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-white/50">
              From the House of WPI Group · National trade distribution across key metro regions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
