import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { QUAINE_DATA } from "@/data/quaine";

export default function MinimalMinerals() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFCFE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#00C2CB] font-semibold">
              The Mineral Formula
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#091E3A] tracking-tight">
              Essential Minerals,
              <br />
              <span className="font-extrabold">In Every Drop.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
            Calibrated values per litre. Bio-available electrolytes infused following 5-stage purification.
          </p>
        </div>

        {/* 4 Clean Typographic Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {QUAINE_DATA.minerals.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 luxury-card-hover flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {m.symbol} · 0{idx + 1}
                </span>

                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-5xl sm:text-6xl font-extrabold text-[#091E3A] font-heading tracking-tight">
                    {m.amount}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">mg/L</span>
                </div>

                <h3 className="text-base font-bold text-[#091E3A] mb-1">
                  {m.name}
                </h3>
              </div>

              <div className="text-[11px] text-slate-500 pt-4 border-t border-slate-100">
                {m.role}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/purification"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#091E3A] hover:text-[#00C2CB] transition-colors"
          >
            <span>Explore The 5-Stage Purification Journey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
