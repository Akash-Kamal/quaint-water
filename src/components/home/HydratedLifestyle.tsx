import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function HydratedLifestyle() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D3E9F5]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm h-[440px] sm:h-[520px] bg-[#F7FCFF] rounded-3xl p-6 border border-[#D3E9F5] shadow-sm flex items-center justify-center overflow-hidden group">
              <Image
                src="/assets/product/bottle-lifestyle.jpg"
                alt="QUAINE bottle with crystal glassware"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D3E9F5] text-[11px] font-semibold text-[#073B73]">
                1000 ml · Everyday Hydration
              </div>
            </div>
          </div>

          {/* Right Column: Alkalen-style Editorial Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
              Daily Wellness Philosophy
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#082747] tracking-tight leading-tight">
              Experience the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#073B73] to-[#53D6D1]">
                Hydrated Lifestyle.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#4A6277] leading-relaxed">
              <p>
                Modern life moves fast. Processed foods, sugary beverages, and daily urban stress can throw off your body&apos;s natural balance, making it easy to lose touch with the fundamentals of good hydration.
              </p>
              <p>
                Quaine is an ionized alkaline water thoughtfully engineered to help you find that balance again. With a calibrated pH of <strong>8.0 to 9.5</strong> and four bio-available electrolytes (Calcium, Magnesium, Sodium, Potassium), it&apos;s a simple, mindful shift you can make part of your everyday routine.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-[#082747]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#53D6D1] shrink-0" />
                <span>pH 8.0 – 9.5 Ionized Alkalinity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#53D6D1] shrink-0" />
                <span>4 Bio-Available Electrolytes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#53D6D1] shrink-0" />
                <span>100% BPA/BPS-Free Recyclable PET</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#53D6D1] shrink-0" />
                <span>5-Stage Molecular Purification</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#073B73] text-white hover:bg-[#1459A3] transition-all shadow-md group font-heading"
              >
                <span>Learn More About Quaine</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs font-semibold text-[#073B73] bg-[#EAF5FA] hover:bg-[#D3E9F5] transition-colors"
              >
                <span>View Product SKU</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
