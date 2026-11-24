import React from "react";
import Image from "next/image";
import Link from "next/link";
import { QUAINE_DATA } from "@/data/quaine";
import { Sparkles, Info, ShieldCheck, ArrowRight } from "lucide-react";

export default function MineralComposition() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7FCFF] relative border-b border-[#D3E9F5]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
            Scientific Mineral Profile
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#082747] tracking-tight leading-tight">
            Essential Minerals.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#073B73] to-[#53D6D1]">
              In Every Bottle.
            </span>
          </h2>
          <p className="text-base text-[#4A6277] leading-relaxed">
            Calibrated for smooth biological hydration. Each litre of Quaine delivers four essential mineral electrolytes vital for fluid retention and cellular wellness.
          </p>
        </div>

        {/* 4 Mineral Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {QUAINE_DATA.minerals.map((mineral, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#D3E9F5] shadow-sm hover:shadow-xl hover:border-[#53D6D1] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Chemical Symbol & Unit */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-black text-lg transition-transform group-hover:scale-105 shadow-inner"
                    style={{
                      backgroundColor: `${mineral.color}20`,
                      color: "#073B73",
                      border: `1px solid ${mineral.color}40`,
                    }}
                  >
                    {mineral.symbol}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#4A6277] bg-[#F7FCFF] px-2.5 py-1 rounded-full border border-[#D3E9F5]">
                    {mineral.unit}
                  </span>
                </div>

                {/* Amount */}
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-5xl font-extrabold text-[#082747] font-heading tracking-tight">
                    {mineral.amount}
                  </span>
                  <span className="text-sm font-semibold text-[#1459A3]">mg / L</span>
                </div>

                <h3 className="text-lg font-bold text-[#082747] mb-2">
                  {mineral.name}
                </h3>
                <p className="text-xs text-[#4A6277] leading-relaxed">
                  {mineral.role}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D3E9F5]/60 flex items-center justify-between text-[11px] text-[#073B73]">
                <span className="font-semibold">Bio-available</span>
                <Sparkles className="w-3.5 h-3.5 text-[#53D6D1]" />
              </div>
            </div>
          ))}
        </div>

        {/* Separate pH & Label Verification Showcase */}
        <div className="bg-white rounded-3xl border border-[#D3E9F5] p-6 lg:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Label crop illustration */}
          <div className="lg:col-span-4 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#D3E9F5] bg-[#F7FCFF]">
            <Image
              src="/assets/packaging/nutrition-label.jpg"
              alt="Actual Quaine Nutrition & Mineral Label Crop showing Calcium, Magnesium, Sodium, Potassium and pH Level"
              fill
              className="object-contain p-2"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-sm border border-[#D3E9F5] px-3 py-1 rounded-lg text-[10px] text-center font-medium text-[#073B73]">
              Actual packaging nutrition label artwork
            </div>
          </div>

          {/* Details & Discrepancy Note Flag */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#EAF5FA] text-[#073B73] font-bold text-xs">
                pH 8.0 – 9.5 Ionized Alkaline
              </span>
              <span className="px-3 py-1 rounded-full bg-[#53D6D1]/20 text-[#073B73] font-semibold text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#073B73]" />
                Confirmed on Primary Packaging
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#082747]">
              Harmonized Alkaline pH Profile
            </h3>

            <p className="text-xs sm:text-sm text-[#4A6277] leading-relaxed">
              Quaine maintains an alkaline range of <strong>pH 8.0 to 9.5</strong> achieved through controlled electrochemical ionization rather than synthetic additive salts.
            </p>

            <div className="bg-[#EAF5FA] border border-[#D3E9F5] rounded-xl p-4 flex items-start gap-3 text-xs text-[#082747]">
              <Info className="w-4 h-4 text-[#1459A3] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-[#073B73]">Regulatory & Packaging Verification: </strong>
                Physical packaging labels state <em>pH 8.0 to 9.5</em>, matching the master product dossier. All values reflect approximate baseline values per litre after full 5-stage processing.
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/product"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#073B73] hover:text-[#1459A3] hover:underline"
              >
                <span>View Full Product Nutritional Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
