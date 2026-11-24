import React from "react";
import { CheckCircle2, ShieldCheck, Clock, Layers, Sparkles, AlertCircle } from "lucide-react";

export default function BrandStats() {
  const specs = [
    {
      value: "8.0 – 9.5",
      label: "Alkaline pH Range",
      detail: "Ionized for smooth alkalinity and optimal physiological hydration.",
      icon: Sparkles,
      tag: "Laboratory Verified",
    },
    {
      value: "5",
      unit: "Stages",
      label: "Purification Steps",
      detail: "RO, Micron Filtration, Ozonation, UV Disinfection, and Ionization.",
      icon: Layers,
      tag: "End-to-End Safety",
    },
    {
      value: "4",
      unit: "Minerals",
      label: "Essential Electrolytes",
      detail: "Calcium (12 mg), Magnesium (8 mg), Sodium (8 mg), Potassium (7 mg).",
      icon: ShieldCheck,
      tag: "Targeted Replenishment",
    },
    {
      value: "9",
      unit: "Months",
      label: "Guaranteed Shelf Life",
      detail: "From date of packaging under recommended cool & dry storage.",
      icon: Clock,
      tag: "Traceable Batch Coding",
    },
  ];

  return (
    <section className="py-16 bg-[#073B73] text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#53D6D1]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1459A3]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#83E7D9]">
              Verified Benchmarks
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
              Key Brand Specifications
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#83E7D9]/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg max-w-md">
            <CheckCircle2 className="w-4 h-4 text-[#53D6D1] shrink-0" />
            <span>Specifications directly verified against official label and manufacturing filing.</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#53D6D1]/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-[#83E7D9] uppercase tracking-wider bg-white/10 px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                    <Icon className="w-5 h-5 text-[#53D6D1] group-hover:scale-110 transition-transform" />
                  </div>

                  <div className="flex items-baseline gap-1.5 my-2">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-white font-heading">
                      {item.value}
                    </span>
                    {item.unit && (
                      <span className="text-base font-semibold text-[#83E7D9]">
                        {item.unit}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative verification note */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
          <p>
            *pH range of 8.0–9.5 confirmed via packaging specifications and production quality control guidelines.
          </p>
          <span className="hidden sm:inline font-mono text-[#83E7D9]">
            FSSAI Lic. 11519005000608
          </span>
        </div>
      </div>
    </section>
  );
}
