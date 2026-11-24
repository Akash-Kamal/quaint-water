import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MinimalShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md h-[460px] sm:h-[540px] bg-[#FAFCFE] rounded-3xl p-6 border border-slate-200/80 flex items-center justify-center">
              <Image
                src="/assets/product/bottle-front.jpg"
                alt="QUAINE 1 Litre Bottle"
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <span className="absolute top-6 left-6 text-[10px] uppercase tracking-widest text-slate-400 font-mono">
                1000 ML · 1 LITRE
              </span>
            </div>
          </div>

          {/* Minimal Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#00C2CB] font-semibold">
              The Flagship Silhouette
            </span>

            <h2 className="text-4xl sm:text-5xl font-light text-[#091E3A] tracking-tight leading-tight">
              Engineered for
              <br />
              <span className="font-extrabold text-[#091E3A]">
                Pure Balance.
              </span>
            </h2>

            <p className="text-base text-slate-500 leading-relaxed font-light">
              Crafted in certified BPA/BPS-free clear PET with an ergonomic silhouette and tamper-evident cap. Designed to grace dining tables, boutique fitness spaces, and everyday routines.
            </p>

            {/* Minimal Spec Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-2xl bg-[#FAFCFE] border border-slate-200/70">
                <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Format</span>
                <span className="text-[#091E3A] font-bold mt-1 block">1 Litre / 1000 ml</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFCFE] border border-slate-200/70">
                <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Alkalinity</span>
                <span className="text-[#091E3A] font-bold mt-1 block">pH 8.0 – 9.5</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFCFE] border border-slate-200/70">
                <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Material</span>
                <span className="text-[#091E3A] font-bold mt-1 block">BPA / BPS Free PET</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFCFE] border border-slate-200/70">
                <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Shelf Life</span>
                <span className="text-[#091E3A] font-bold mt-1 block">9 Months Tested</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/product"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#091E3A] hover:text-[#00C2CB] transition-colors"
              >
                <span>Full Product Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
