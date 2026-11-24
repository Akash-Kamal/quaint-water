import React from "react";
import Link from "next/link";
import { Filter, Sparkles, Zap, ArrowRight } from "lucide-react";

export default function BrandIntro() {
  const features = [
    {
      title: "Advanced Purification",
      subtitle: "Molecular Clarity",
      desc: "Purified through a rigorous 5-stage system: Reverse Osmosis, Micron Filtration, Ozonation, and UV Disinfection for unmatched microbiological safety.",
      icon: Filter,
      accent: "from-[#073B73] to-[#1459A3]",
      href: "/purification",
    },
    {
      title: "Electrolyte Enriched",
      subtitle: "Balanced Mineral Profile",
      desc: "Enriched with 4 vital minerals: Calcium (12 mg), Magnesium (8 mg), Sodium (8 mg), and Potassium (7 mg) to replenish natural cellular equilibrium.",
      icon: Sparkles,
      accent: "from-[#1459A3] to-[#53D6D1]",
      href: "/product",
    },
    {
      title: "Ionized Alkaline Water",
      subtitle: "Optimal pH 8.0 – 9.5",
      desc: "Electrochemical ionization balances pH to 8.0–9.5, removing acidic elements while delivering a crisp, smooth, and refreshing hydration experience.",
      icon: Zap,
      accent: "from-[#53D6D1] to-[#073B73]",
      href: "/about",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative border-b border-[#D3E9F5]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
            The Quaine Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#082747] tracking-tight leading-tight">
            More Than Water.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#073B73] to-[#53D6D1]">
              A Better Way to Hydrate.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A6277] leading-relaxed">
            Quaine brings together advanced purification, ionization and essential electrolytes in every bottle. Created for people who value quality, purity and everyday wellness.
          </p>
        </div>

        {/* 3 Core Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7FCFF] hover:bg-white rounded-2xl p-8 border border-[#D3E9F5] hover:border-[#53D6D1] transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between"
              >
                <div>
                  {/* Icon with gradient badge */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EAF5FA] to-[#D3E9F5] flex items-center justify-center text-[#073B73] group-hover:bg-[#073B73] group-hover:text-[#53D6D1] transition-colors mb-6 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1459A3]">
                    {feature.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#082747] mt-1 mb-3 group-hover:text-[#073B73] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#4A6277] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D3E9F5]/60">
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#073B73] group-hover:text-[#1459A3] transition-colors"
                  >
                    <span>Learn More</span>
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
