"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 luxury-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12 sm:mb-16">

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light text-[#091E3A] tracking-tight leading-[1.02]">
            Purity,
            <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#091E3A] via-[#00C2CB] to-[#091E3A]">
              Elevated.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-500 max-w-lg mx-auto font-light leading-relaxed">
            Ionized alkaline water calibrated to pH 8.0–9.5 and enriched with essential electrolytes for daily cellular balance.
          </p>

          {/* Minimalist CTAs */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link
              href="/product"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#091E3A] text-white hover:bg-[#00C2CB] hover:text-[#091E3A] transition-all shadow-sm"
            >
              <span>The 1L Bottle</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/purification"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white border border-slate-200 text-[#091E3A] hover:bg-slate-50 transition-colors"
            >
              <span>Our Process</span>
            </Link>
          </div>
        </div>

        {/* Master Banner Showcase */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/assets/brand/main-banner.jpg"
                alt="QUAINE Ionized Alkaline Water"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-102"
                sizes="(max-width: 1200px) 100vw, 1100px"
              />
            </div>
          </div>
        </div>

        {/* Clean 3-Metric Footnote */}
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 pt-12 sm:pt-16 border-t border-slate-200/60 mt-12 sm:mt-16 text-center">
          <div>
            <div className="text-2xl sm:text-4xl font-extrabold text-[#091E3A] font-heading">
              8.0–9.5
            </div>
            <div className="text-[11px] uppercase tracking-wider text-slate-500 font-medium mt-1">
              Alkaline pH
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-extrabold text-[#091E3A] font-heading">
              4 Minerals
            </div>
            <div className="text-[11px] uppercase tracking-wider text-slate-500 font-medium mt-1">
              Ca · Mg · Na · K
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-extrabold text-[#091E3A] font-heading">
              5 Stages
            </div>
            <div className="text-[11px] uppercase tracking-wider text-slate-500 font-medium mt-1">
              Pure RO to Ionization
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
