import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function MinimalLifestyleCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Visual Pair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden bg-[#FAFCFE] border border-slate-200/80">
            <Image
              src="/assets/product/bottle-pouring.jpg"
              alt="Pouring Quaine into glass"
              fill
              className="object-contain p-4 transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden bg-[#FAFCFE] border border-slate-200/80">
            <Image
              src="/assets/product/bottle-lifestyle.jpg"
              alt="Quaine tabletop presentation"
              fill
              className="object-contain p-4 transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Minimal Trade Callout */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#00C2CB] font-semibold">
            Hospitality &amp; Distribution
          </span>

          <h2 className="text-3xl sm:text-5xl font-light text-[#091E3A] tracking-tight">
            Bring Quaine to Your Venue.
          </h2>

          <p className="text-base text-slate-500 font-light max-w-lg mx-auto leading-relaxed">
            Partner with Quaine for fine dining, luxury hospitality, boutique fitness clubs, and regional beverage distribution across India.
          </p>

          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              href="/contact?type=distributor"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#091E3A] text-white hover:bg-[#00C2CB] hover:text-[#091E3A] transition-all shadow-sm"
            >
              <span>Distributor Mandate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/contact?type=business"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FAFCFE] border border-slate-200 text-[#091E3A] hover:bg-slate-50 transition-colors"
            >
              <span>HORECA Supply</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
