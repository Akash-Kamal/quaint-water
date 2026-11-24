import React from "react";
import Link from "next/link";
import { HeartPulse, Flame, Home, Building2, Check, ArrowRight } from "lucide-react";
import { QUAINE_DATA } from "@/data/quaine";

export default function AudienceSection() {
  const iconMap: Record<string, any> = {
    HeartPulse: HeartPulse,
    Flame: Flame,
    Home: Home,
    Building2: Building2,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F7FCFF] relative border-b border-[#D3E9F5]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
            Target Segments
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#082747] tracking-tight leading-tight">
            Made for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#073B73] to-[#53D6D1]">
              Every Lifestyle.
            </span>
          </h2>
          <p className="text-base text-[#4A6277] leading-relaxed">
            Whether for everyday wellness routines, post-workout replenishment, or distinguished table presentation in luxury hospitality, Quaine delivers an elevated hydration standard.
          </p>
        </div>

        {/* 4 Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUAINE_DATA.audiences.map((aud, idx) => {
            const Icon = iconMap[aud.iconName] || HeartPulse;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-[#D3E9F5] hover:border-[#53D6D1] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF5FA] text-[#073B73] flex items-center justify-center group-hover:bg-[#073B73] group-hover:text-[#53D6D1] transition-colors mb-5 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1459A3]">
                    {aud.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-[#082747] mt-1 mb-2">
                    {aud.title}
                  </h3>
                  <p className="text-xs text-[#4A6277] leading-relaxed mb-4">
                    {aud.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#D3E9F5]/60">
                    {aud.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-[11px] text-[#082747]">
                        <Check className="w-3.5 h-3.5 text-[#53D6D1] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D3E9F5]/60">
                  <Link
                    href={aud.id === "horeca" ? "/contact?type=business" : "/about"}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#073B73] group-hover:text-[#1459A3] transition-colors"
                  >
                    <span>{aud.id === "horeca" ? "Hospitality Supply" : "Learn More"}</span>
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
