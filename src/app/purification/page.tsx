"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Filter,
  Sparkles,
  Shield,
  SunMedium,
  Zap,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Droplets,
  Microscope,
} from "lucide-react";
import { QUAINE_DATA } from "@/data/quaine";
import PartnershipCTA from "@/components/home/PartnershipCTA";

export default function PurificationPage() {
  const [selectedStage, setSelectedStage] = useState(0);

  const stages = [
    {
      number: "01",
      name: "Reverse Osmosis",
      headline: "Molecular-Level Contaminant Filtration",
      coreQuote: "Removes dissolved solids and impurities through a specialized filtration membrane.",
      scientificDetail:
        "High-pressure pumps force water through semi-permeable membranes with microscopic pores measuring 0.0001 microns. This strips away heavy metals, dissolved salts, suspended colloids, and organic contaminants at a molecular boundary.",
      benefit: "Creates an ultra-pure, chemically uncompromised baseline water matrix.",
      icon: Filter,
      stats: { metric: "0.0001 µm", label: "Membrane Pore Porosity" },
    },
    {
      number: "02",
      name: "Micron Filtration",
      headline: "Fine Particulate Clarification",
      coreQuote: "Removes fine particulates to help achieve crystal clarity.",
      scientificDetail:
        "Sequential micro-porous depth filters trap microscopic sediment, micro-particles, and residual suspended solids, ensuring optical clarity and polish prior to disinfection stages.",
      benefit: "Produces crystal-clear optical purity and velvety mouthfeel.",
      icon: Sparkles,
      stats: { metric: "Crystal Clear", label: "Optical Transparency" },
    },
    {
      number: "03",
      name: "Ozonation",
      headline: "Organic Pathogen Neutralization",
      coreQuote: "Helps neutralize microorganisms through ozonation.",
      scientificDetail:
        "Dissolved triatomic oxygen (O3) provides rapid, broad-spectrum microbiological oxidation. It breaks cellular membranes of bacteria and spores without leaving chlorine or chemical residues, naturally decomposing back into pure oxygen.",
      benefit: "Zero synthetic chemical disinfectants or chemical odors.",
      icon: Shield,
      stats: { metric: "Zero Residue", label: "Chemical Byproduct Free" },
    },
    {
      number: "04",
      name: "UV Purification",
      headline: "Photolytic Disinfection Barrier",
      coreQuote: "Provides an additional disinfection barrier.",
      scientificDetail:
        "Water passes through quartz sleeves exposed to germicidal ultraviolet C (UV-C) radiation at 254 nm. The optical photon energy alters microbial DNA/RNA structures, ensuring redundant safety throughout shelf storage.",
      benefit: "Dual-redundant microbiological defense that preserves water taste.",
      icon: SunMedium,
      stats: { metric: "254 nm", label: "UV-C Germicidal Wavelength" },
    },
    {
      number: "05",
      name: "Ionization",
      headline: "Alkaline Calibration & Electrolyte Infusion",
      coreQuote: "Balances the water's pH and enriches it with electrolytes.",
      scientificDetail:
        "Using precision electrochemical cells with platinum-coated titanium plates, water is split into alkaline and acidic streams. Acidic compounds are separated out, while beneficial hydroxide ions and calibrated electrolytes (Calcium, Magnesium, Sodium, Potassium) are infused.",
      benefit: "Elevates ordinary water into stable alkaline hydration at pH 8.0–9.5.",
      icon: Zap,
      stats: { metric: "8.0 – 9.5", label: "Ionized Alkaline pH" },
    },
  ];

  return (
    <main className="flex-1 pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 water-gradient-bg border-b border-[#D3E9F5]/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#53D6D1]/50 text-xs font-semibold uppercase tracking-[0.2em] text-[#073B73]">
              <Microscope className="w-3.5 h-3.5 text-[#53D6D1]" />
              <span>Engineered Science</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#082747] leading-tight">
              Discover the Science
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#073B73] via-[#1459A3] to-[#53D6D1]">
                Behind Every Drop.
              </span>
            </h1>

            <p className="text-lg text-[#4A6277] leading-relaxed">
              Quaine combines multi-barrier physical filtration with electrochemical ionization. Explore the exact five-stage purification journey engineered to produce refreshing, mineral-balanced alkaline water.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive 5-Stage Journey */}
      <section className="py-20 bg-white border-b border-[#D3E9F5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stage Selector Buttons (Navigation Tabs) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = selectedStage === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedStage(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#073B73] text-white border-[#073B73] shadow-lg scale-102"
                      : "bg-[#F7FCFF] text-[#082747] border-[#D3E9F5] hover:border-[#53D6D1]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? "bg-white/20 text-[#83E7D9]" : "bg-[#EAF5FA] text-[#073B73]"
                      }`}
                    >
                      Stage {stage.number}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? "text-[#53D6D1]" : "text-[#1459A3]"}`} />
                  </div>
                  <div className="text-sm font-bold truncate">
                    {stage.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Stage Feature Display */}
          <div className="bg-[#F7FCFF] rounded-3xl p-8 sm:p-12 border border-[#D3E9F5] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-[#073B73] text-[#53D6D1] flex items-center justify-center font-mono font-bold text-lg">
                  {stages[selectedStage].number}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1459A3]">
                    Purification Stage {stages[selectedStage].number} of 05
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082747]">
                    {stages[selectedStage].name}
                  </h2>
                </div>
              </div>

              {/* Exact Presentation Quote */}
              <div className="p-4 rounded-xl bg-white border border-[#D3E9F5] text-sm font-semibold text-[#073B73] italic">
                “{stages[selectedStage].coreQuote}”
              </div>

              <div className="space-y-3 text-sm text-[#4A6277] leading-relaxed">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#082747]">
                  Scientific Mechanism:
                </h4>
                <p>{stages[selectedStage].scientificDetail}</p>
              </div>

              {/* Verified Result */}
              <div className="p-4 rounded-xl bg-[#EAF5FA] border border-[#D3E9F5] flex items-start gap-3 text-xs text-[#073B73]">
                <CheckCircle2 className="w-5 h-5 text-[#53D6D1] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Engineered Benefit: </strong>
                  {stages[selectedStage].benefit}
                </div>
              </div>
            </div>

            {/* Right Metric Callout Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-8 border border-[#D3E9F5] text-center space-y-4 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1459A3] block">
                Technical Benchmark
              </span>
              <div className="text-4xl font-black text-[#073B73] font-heading">
                {stages[selectedStage].stats.metric}
              </div>
              <div className="text-xs text-[#4A6277] font-medium">
                {stages[selectedStage].stats.label}
              </div>
              <div className="pt-4 border-t border-[#D3E9F5]/60 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedStage((prev) => (prev + 1) % stages.length)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#073B73] hover:text-[#1459A3]"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edible Minerals Clarification Box (Presentation Slide 4) */}
      <section className="py-16 bg-[#F7FCFF] border-b border-[#D3E9F5]/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 border border-[#D3E9F5] shadow-sm flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#073B73] text-[#53D6D1] flex items-center justify-center shrink-0">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1459A3]">
                Mineral Notice
              </span>
              <h3 className="text-lg font-bold text-[#082747]">
                Understanding Solidified Edible Minerals
              </h3>
              <p className="text-xs sm:text-sm text-[#4A6277] leading-relaxed">
                {QUAINE_DATA.whiteParticlesClarification} Because Quaine is fortified with genuine bio-available electrolytes rather than artificial stabilizing chemicals, slight mineral crystallization is normal and a sign of active mineral content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Responsible Communication Notice */}
      <section className="py-12 bg-white border-b border-[#D3E9F5]/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[#F7FCFF] border border-[#D3E9F5] flex items-start gap-3 text-xs text-[#4A6277] leading-relaxed">
            <AlertCircle className="w-5 h-5 text-[#1459A3] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#082747] font-semibold">Important Regulatory Notice: </strong>
              Quaine Ionized Alkaline Water is a premium functional bottled water crafted for daily hydration and mineral replenishment. Quaine does not claim medical or therapeutic benefits, nor does it claim to diagnose, treat, prevent, or cure any disease. Consult a healthcare professional regarding specific dietary health conditions.
            </div>
          </div>
        </div>
      </section>

      {/* Final Section: Five Stages. One Refreshing Experience */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#073B73] to-[#082747] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#83E7D9] bg-white/10 px-4 py-1.5 rounded-full inline-block">
            The Result
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Five Stages.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#83E7D9] to-[#53D6D1]">
              One Refreshing Experience.
            </span>
          </h2>
          <p className="text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            From molecular Reverse Osmosis to controlled Ionization, each step is designed to bring you the purest, smoothest everyday hydration in every bottle.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/product"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#53D6D1] text-[#082747] hover:bg-[#83E7D9] transition-all shadow-md"
            >
              <span>Explore The 1-Litre Bottle</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              <span>Distributor Enquiries</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <PartnershipCTA />
    </main>
  );
}
