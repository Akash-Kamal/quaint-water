"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Sparkles,
  Droplets,
  Clock,
  QrCode,
  Barcode,
  Layers,
  CheckCircle2,
  AlertCircle,
  Truck,
  ArrowRight,
  Sun,
  Snowflake,
  Calendar,
} from "lucide-react";
import { QUAINE_DATA } from "@/data/quaine";
import PartnershipCTA from "@/components/home/PartnershipCTA";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [
    {
      src: "/assets/product/bottle-front.jpg",
      title: "Front View with Condensation",
      desc: "Premium 1-litre clear PET bottle with dewy droplets and silver-blue brand label.",
    },
    {
      src: "/assets/product/bottle-duo.jpg",
      title: "Front & Back Label Duo",
      desc: "Complete retail presentation displaying nutrition panel, FSSAI logo, and batch print.",
    },
    {
      src: "/assets/product/bottle-pouring.jpg",
      title: "Pouring into Glass",
      desc: "High clarity pour into faceted crystal glassware.",
    },
    {
      src: "/assets/product/bottle-lifestyle.jpg",
      title: "Tabletop Hospitality",
      desc: "Distinguished beverage presentation designed for fine dining and hotels.",
    },
    {
      src: "/assets/product/bottle-plain.jpg",
      title: "Studio Product Profile",
      desc: "Clear silhouette displaying ergonomic grip and tamper-evident cap.",
    },
  ];

  return (
    <main className="flex-1 pt-24 pb-16">
      {/* Product Hero Breadcrumb & Header */}
      <section className="py-12 lg:py-16 water-gradient-bg border-b border-[#D3E9F5]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1459A3] mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-[#073B73]">Product Details</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Gallery & Zoom Showcase */}
            <div className="lg:col-span-6 space-y-4">
              {/* Primary Image Viewport */}
              <div className="relative w-full h-[480px] sm:h-[560px] bg-white rounded-3xl p-6 border border-[#D3E9F5] shadow-sm flex items-center justify-center overflow-hidden group">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].title}
                  fill
                  priority
                  className="object-contain p-6 transition-all duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-[#073B73] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow">
                  1 Litre / 1000 ml
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="grid grid-cols-5 gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all p-1 bg-white ${
                      selectedImage === idx
                        ? "border-[#073B73] shadow-md scale-102"
                        : "border-[#D3E9F5] hover:border-[#53D6D1] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
              <p className="text-xs text-[#4A6277] text-center italic">
                {galleryImages[selectedImage].desc}
              </p>
            </div>

            {/* Right: Product Details & Commercial Availability */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-3.5 py-1 rounded-full">
                  Flagship Product · Launch 2026
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#082747] tracking-tight mt-3">
                  QUAINE Ionized Alkaline Water
                </h1>
                <p className="text-sm sm:text-base text-[#4A6277] mt-3 leading-relaxed">
                  Carefully engineered for superior hydration. Purified through a 5-step process (RO, Micron Filtration, Ozonation, UV, and Ionization) and enriched with four bio-available electrolytes.
                </p>
              </div>

              {/* Pricing & Commercial Note (Strictly from Actual Label: ₹79 / RS 130) */}
              <div className="bg-white rounded-2xl p-5 border border-[#D3E9F5] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#4A6277] block">On-Pack Retail Price (Per Bottle)</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl font-black text-[#073B73] font-heading">
                      ₹79
                    </span>
                    <span className="text-sm text-[#4A6277] line-through">
                      MRP ₹130
                    </span>
                    <span className="text-[11px] font-mono text-[#1459A3] ml-2">
                      USP: ₹0.02 / ml
                    </span>
                  </div>
                  <span className="text-[11px] text-[#4A6277]">
                    Includes all applicable taxes · 1000 ml
                  </span>
                </div>

                <Link
                  href="/contact?type=business"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#073B73] text-white hover:bg-[#1459A3] transition-all shadow shrink-0"
                >
                  <Truck className="w-4 h-4" />
                  <span>Wholesale Order</span>
                </Link>
              </div>

              {/* Quick Specification Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-[#D3E9F5]">
                  <span className="text-[#4A6277] block">Alkaline pH</span>
                  <strong className="text-[#073B73] text-sm font-bold">8.0 – 9.5 Ionized</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#D3E9F5]">
                  <span className="text-[#4A6277] block">Net Volume</span>
                  <strong className="text-[#082747] text-sm font-bold">1 Litre (1000 ml)</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#D3E9F5]">
                  <span className="text-[#4A6277] block">Packaging</span>
                  <strong className="text-[#082747] text-sm font-bold">Clear PET (BPA/BPS Free)</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#D3E9F5]">
                  <span className="text-[#4A6277] block">Shelf Life</span>
                  <strong className="text-[#082747] text-sm font-bold">9 Months Guaranteed</strong>
                </div>
              </div>

              {/* Verified Product Benefits Checklist */}
              <div className="space-y-2 text-xs text-[#082747] pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#53D6D1] shrink-0" />
                  <span>5-stage molecular purification ensuring absolute purity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#53D6D1] shrink-0" />
                  <span>Infused with Calcium (12 mg), Magnesium (8 mg), Sodium (8 mg), Potassium (7 mg)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#53D6D1] shrink-0" />
                  <span>Tamper-evident security cap with embossed seal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#53D6D1] shrink-0" />
                  <span>Individual neck batch coding with MFD, USE-BY and on-pack QR code</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact?type=distributor"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#53D6D1] text-[#082747] hover:bg-[#83E7D9] transition-all shadow font-heading"
                >
                  <span>Request Distribution Supply</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/quality"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-[#073B73] bg-[#EAF5FA] hover:bg-[#D3E9F5] transition-colors"
                >
                  <span>Compliance & FSSAI</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Instructions & Shelf Life Section (From Presentation Slide 7) */}
      <section className="py-20 bg-white border-b border-[#D3E9F5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
              Preservation & Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082747] tracking-tight">
              Storage Instructions & Shelf Life
            </h2>
            <p className="text-sm text-[#4A6277]">
              Follow these recommended guidelines to ensure optimal taste, crispness, and mineral stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                title: "Cool & Dry Storage",
                desc: "Store in a clean, cool and dry place away from ambient humidity.",
                icon: ShieldCheck,
              },
              {
                title: "Direct Sunlight",
                desc: "Keep away from direct sunlight to preserve PET integrity and mineral balance.",
                icon: Sun,
              },
              {
                title: "Refrigerate Opened",
                desc: "Refrigerate after opening to preserve refreshing chill and taste.",
                icon: Snowflake,
              },
              {
                title: "Consume in 3 Days",
                desc: "Once opened, consume within 3 days for maximum crispness and hygiene.",
                icon: Clock,
              },
              {
                title: "9 Months Best Before",
                desc: "Best before 9 months from date of packaging. Refer to batch print on neck.",
                icon: Calendar,
              },
            ].map((inst, idx) => {
              const Icon = inst.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F7FCFF] rounded-2xl p-6 border border-[#D3E9F5] hover:border-[#53D6D1] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#D3E9F5] flex items-center justify-center text-[#073B73] mb-4">
                      <Icon className="w-5 h-5 text-[#1459A3]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#082747] mb-2">
                      {inst.title}
                    </h3>
                    <p className="text-xs text-[#4A6277] leading-relaxed">
                      {inst.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packaging & Compliance Details with Traceability Artwork */}
      <section className="py-20 bg-[#F7FCFF] border-b border-[#D3E9F5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Traceability Artwork */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-72 sm:h-80 bg-white rounded-3xl p-6 border border-[#D3E9F5] overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/packaging/product-label.jpg"
                  alt="Actual Quaine Bottle Label showing ingredients, manufacturing, and batch details"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="text-xs text-[#4A6277] text-center">
                Authentic Quaine label crop displaying FSSAI lic., batch box, and mineral declaration.
              </div>
            </div>

            {/* Right Column: Key Label Data Points */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
                Label Integrity
              </span>
              <h2 className="text-3xl font-extrabold text-[#082747] tracking-tight">
                Traceability Built into Every Bottle
              </h2>
              <p className="text-sm text-[#4A6277] leading-relaxed">
                Quaine provides comprehensive consumer transparency. Every bottle produced features unique batch numbers, manufacturing dates, expiry dates, and scannable digital markers for inventory scanning nationwide.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-[#D3E9F5] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#4A6277] block">FSSAI Licence Number</span>
                    <span className="text-sm font-mono font-bold text-[#073B73]">11519005000608</span>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-[#53D6D1]" />
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#D3E9F5] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#4A6277] block">Retail POS EAN Barcode</span>
                    <span className="text-sm font-mono font-bold text-[#073B73]">8 903002 010003</span>
                  </div>
                  <Barcode className="w-5 h-5 text-[#53D6D1]" />
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#D3E9F5] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#4A6277] block">Digital Consumer Dossier</span>
                    <span className="text-sm font-bold text-[#082747]">On-Pack Scannable QR Code</span>
                  </div>
                  <QrCode className="w-5 h-5 text-[#53D6D1]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <PartnershipCTA />
    </main>
  );
}
