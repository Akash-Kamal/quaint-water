import React from "react";
import Link from "next/link";
import { Sparkles, Droplets, Shield, Zap, ArrowRight, Heart } from "lucide-react";

export default function WhyDrinkQuaine() {
  const pillars = [
    {
      title: "Balanced Alkaline pH",
      spec: "pH 8.0 – 9.5",
      desc: "Processed urban diets and daily stress lean acidic. Quaine's controlled ionization helps restore your natural biological equilibrium with smooth, clean hydration.",
      icon: Sparkles,
      tag: "Acid-Neutralizing",
    },
    {
      title: "Essential Bio-Minerals",
      spec: "Calcium & Magnesium",
      desc: "Fortified with 12 mg Calcium and 8 mg Magnesium per litre to support muscular cellular communication, bone density, and energy metabolic pathways.",
      icon: Shield,
      tag: "Mineral Rich",
    },
    {
      title: "Cellular Electrolytes",
      spec: "Sodium & Potassium",
      desc: "Precision infusion of 8 mg Sodium and 7 mg Potassium aids rapid intracellular fluid absorption, ensuring sustained hydration without the heavy feeling.",
      icon: Zap,
      tag: "Rapid Hydration",
    },
    {
      title: "Five-Stage Absolute Purity",
      spec: "0.0001 µm RO to Ionization",
      desc: "From molecular Reverse Osmosis and Micron Filtration to Ozonation and UV Disinfection, every bottle meets uncompromising microbiological safety.",
      icon: Droplets,
      tag: "Lab Tested",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7FCFF] border-b border-[#D3E9F5]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
            Proven Hydration Science
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#082747] tracking-tight leading-tight">
            Why Should You Drink Quaine?
          </h2>
          <p className="text-base text-[#4A6277] leading-relaxed">
            Not all waters are created equal. Discover why fitness enthusiasts, discerning households, and luxury hospitality choose Quaine over ordinary bottled water.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-[#D3E9F5] hover:border-[#53D6D1] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF5FA] text-[#073B73] group-hover:bg-[#073B73] group-hover:text-[#53D6D1] transition-colors flex items-center justify-center shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1459A3] bg-[#EAF5FA] px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#1459A3] block mb-1">
                    {item.spec}
                  </span>
                  <h3 className="text-lg font-bold text-[#082747] mb-2.5 group-hover:text-[#073B73] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A6277] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D3E9F5]/60">
                  <Link
                    href="/purification"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#073B73] group-hover:text-[#1459A3] transition-colors"
                  >
                    <span>Read The Science</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
