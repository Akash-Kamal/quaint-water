"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Sparkles, RefreshCw } from "lucide-react";

export default function ProductShowcase() {
  const [activeView, setActiveView] = useState<"duo" | "front" | "lifestyle" | "pouring">("duo");

  const images = {
    duo: {
      src: "/assets/product/bottle-duo.jpg",
      title: "Front & Back Product Duo",
      subtitle: "Full commercial 1-litre bottle view showing nutritional label and tamper-evident cap.",
    },
    front: {
      src: "/assets/product/bottle-front.jpg",
      title: "Front Silhouette with Dewdrops",
      subtitle: "Ergonomic hourglass silhouette designed for grip and shelf distinction.",
    },
    lifestyle: {
      src: "/assets/product/bottle-lifestyle.jpg",
      title: "Table & Hospitality Presentation",
      subtitle: "Crystal clear water paired with fine glassware for premium dining & hospitality.",
    },
    pouring: {
      src: "/assets/product/bottle-pouring.jpg",
      title: "Pristine Pour Experience",
      subtitle: "Smooth, micro-filtered flow delivering crisp, clean taste every time.",
    },
  };

  const specs = [
    { label: "Nominal Volume", value: "1000 ml / 1 Litre" },
    { label: "Bottle Material", value: "Clear High-Grade PET (100% Recyclable)" },
    { label: "Safety Standard", value: "BPA & BPS Free" },
    { label: "Closure Type", value: "Black Tamper-Evident Security Cap" },
    { label: "Water Class", value: "Ionized Alkaline Water (pH 8.0–9.5)" },
    { label: "Shelf Life", value: "9 Months from packaging" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7FCFF] relative border-b border-[#D3E9F5]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Interactive Product Visual Switcher */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Main Stage Image */}
            <div className="relative w-full max-w-md h-[460px] sm:h-[540px] bg-white rounded-3xl p-6 border border-[#D3E9F5] shadow-sm flex items-center justify-center overflow-hidden group">
              <Image
                src={images[activeView].src}
                alt={images[activeView].title}
                fill
                className="object-contain p-6 transition-all duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Pill badge showing current view title */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-[#D3E9F5] px-3 py-1 rounded-full text-[11px] font-semibold text-[#073B73]">
                {images[activeView].title}
              </div>
            </div>

            {/* Thumbnail Switcher */}
            <div className="grid grid-cols-4 gap-3 mt-4 w-full max-w-md">
              {(["duo", "front", "lifestyle", "pouring"] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveView(key)}
                  className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all p-1 bg-white ${
                    activeView === key
                      ? "border-[#073B73] shadow-md scale-102"
                      : "border-[#D3E9F5] hover:border-[#53D6D1] opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Show ${images[key].title}`}
                >
                  <Image
                    src={images[key].src}
                    alt={images[key].title}
                    fill
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
            <p className="text-xs text-[#4A6277] mt-3 text-center italic">
              {images[activeView].subtitle}
            </p>
          </div>

          {/* Right Column: Narrative, Specifications, and CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
                The Flagship Bottle
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#082747] tracking-tight leading-tight">
                Meet Your Everyday
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#073B73] to-[#53D6D1]">
                  Hydration Partner.
                </span>
              </h2>
              <p className="text-base text-[#4A6277] leading-relaxed">
                Engineered for table elegance and daily portability. The Quaine 1-litre silhouette is crafted in premium, crystal-clear PET that is completely BPA and BPS free, capped with a tamper-evident seal for total peace of mind.
              </p>
            </div>

            {/* Specifications Matrix */}
            <div className="bg-white rounded-2xl p-6 border border-[#D3E9F5] shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#073B73] pb-2 border-b border-[#D3E9F5]/60 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#53D6D1]" />
                <span>Verified Product Specifications</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {specs.map((item, idx) => (
                  <div key={idx} className="flex flex-col text-xs">
                    <span className="text-[#4A6277] font-medium">{item.label}</span>
                    <span className="text-[#082747] font-bold mt-0.5">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Assurance Points */}
            <div className="space-y-2 text-xs text-[#082747]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#53D6D1] shrink-0" />
                <span>Zero artificial additives or synthetic flavor modifiers</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#53D6D1] shrink-0" />
                <span>Scannable on-pack QR code linking to verified company profile</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#53D6D1] shrink-0" />
                <span>Individual neck batch, MFD and USE-BY coding for full traceability</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/product"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#073B73] text-white hover:bg-[#1459A3] transition-all shadow-md group"
              >
                <span>Explore Full Product Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/quality"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-[#073B73] bg-[#EAF5FA] hover:bg-[#D3E9F5] transition-colors"
              >
                <span>View Quality & Compliance</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
