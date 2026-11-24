import React from "react";
import Link from "next/link";
import { ArrowRight, Filter, Sparkles, Shield, SunMedium, Zap, CheckCircle2 } from "lucide-react";
import { QUAINE_DATA } from "@/data/quaine";

export default function PurificationPreview() {
  const iconMap: Record<string, any> = {
    Filter: Filter,
    Sparkles: Sparkles,
    Shield: Shield,
    SunMedium: SunMedium,
    Zap: Zap,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative border-b border-[#D3E9F5]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
              Five-Stage Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#082747] tracking-tight leading-tight">
              Five Steps.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#073B73] to-[#53D6D1]">
                One Standard of Purity.
              </span>
            </h2>
            <p className="text-base text-[#4A6277] leading-relaxed">
              Every drop of Quaine undergoes an uncompromising sequential purification cycle before being electrochemically ionized and enriched with vital electrolytes.
            </p>
          </div>

          <Link
            href="/purification"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#073B73] text-white hover:bg-[#1459A3] transition-all shadow-sm shrink-0 group"
          >
            <span>Explore Our Process</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Horizontal Visual Process Flow */}
        <div className="relative">
          {/* Connector Line across cards (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#073B73] via-[#53D6D1] to-[#1459A3] -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {QUAINE_DATA.purificationStages.map((stage, idx) => {
              const Icon = iconMap[stage.iconName] || Filter;
              return (
                <div
                  key={idx}
                  className="bg-[#F7FCFF] hover:bg-white rounded-2xl p-6 border border-[#D3E9F5] hover:border-[#53D6D1] transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Step Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold text-[#073B73] bg-[#EAF5FA] px-3 py-1 rounded-full border border-[#D3E9F5]">
                        {stage.number}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-white border border-[#D3E9F5] flex items-center justify-center text-[#073B73] group-hover:bg-[#073B73] group-hover:text-[#53D6D1] transition-colors shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#082747] mb-1 group-hover:text-[#073B73] transition-colors">
                      {stage.name}
                    </h3>
                    <div className="text-[11px] font-semibold text-[#1459A3] uppercase tracking-wider mb-3">
                      {stage.subtitle}
                    </div>
                    <p className="text-xs text-[#4A6277] leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Benefit footer */}
                  <div className="pt-4 mt-4 border-t border-[#D3E9F5]/60 text-[11px] text-[#073B73] font-medium flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#53D6D1] shrink-0 mt-0.5" />
                    <span>{stage.benefit}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Safe Minerals Informational Callout (from Presentation Slide 4) */}
        <div className="mt-12 bg-[#EAF5FA] border border-[#D3E9F5] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#073B73] text-[#53D6D1] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-xs text-[#082747] leading-relaxed">
              <strong className="font-semibold text-[#073B73]">Quality Note on Minerals: </strong>
              {QUAINE_DATA.whiteParticlesClarification}
            </p>
          </div>
          <Link
            href="/purification"
            className="text-xs font-bold uppercase tracking-wider text-[#073B73] hover:text-[#1459A3] whitespace-nowrap shrink-0 hover:underline"
          >
            Learn Science →
          </Link>
        </div>
      </div>
    </section>
  );
}
