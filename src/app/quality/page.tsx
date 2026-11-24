import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  QrCode,
  Barcode,
  Building,
  MapPin,
  Phone,
  Mail,
  Clock,
  Layers,
  ArrowRight,
} from "lucide-react";
import { QUAINE_DATA } from "@/data/quaine";
import PartnershipCTA from "@/components/home/PartnershipCTA";

export const metadata: Metadata = {
  title: "Quality & Safety — Verified Compliance & Traceability | QUAINE",
  description:
    "Review Quaine's complete quality and regulatory documentation: FSSAI Licence No. 11519005000608, manufacturer credentials, marketer details, on-pack QR and barcode traceability.",
  alternates: {
    canonical: "https://quainewater.com/quality",
  },
  openGraph: {
    title: "Quality & Safety | QUAINE Ionized Alkaline Water",
    description:
      "Every detail matters. Verified FSSAI licensing, pharmaceutical-grade filtration, and batch-level traceability printed on every bottle.",
    url: "https://quainewater.com/quality",
  },
};

export default function QualityPage() {
  const complianceArtifacts = [
    {
      title: "FSSAI Registration & Licensing",
      subtitle: "Licence No. 11519005000608",
      description:
        "Licensed under the Food Safety and Standards Authority of India (FSSAI) governing packaged drinking water and alkaline mineral water standards. Compliant with physical, chemical, and microbiological purity thresholds.",
      image: "/assets/compliance/fssai.jpg",
      meta: "Central Licensing & Registration",
    },
    {
      title: "Manufacturing Plant Certification",
      subtitle: "Best Food Processors",
      description:
        "Processed at our certified manufacturing partner facility with advanced continuous RO, ozonation chambers, ultraviolet germicidal lamps, and electrochemical ionization reactors.",
      image: "/assets/compliance/manufacturer.jpg",
      meta: "Panki Industrial Area, Unnao (U.P.)",
    },
    {
      title: "Storage & Shelf-Life Protocol",
      subtitle: "9 Months from Packaging Date",
      description:
        "Verified stability for 9 months from packaging date under recommended cool & dry conditions. Once opened, keep refrigerated and consume within 3 days for optimum mineral hydration.",
      image: "/assets/compliance/storage-instructions.jpg",
      meta: "Batch neck printing protocol",
    },
  ];

  const traceabilityTouchpoints = [
    {
      title: "Scannable On-Pack QR Code",
      category: "Consumer Transparency",
      description:
        "Every 1-litre bottle includes a high-contrast printed QR code. When scanned by any standard smartphone camera, it connects consumers directly to the Quaine official company profile, mineral dossier, and verification portal.",
      image: "/assets/digital/qr-code.jpg",
      icon: QrCode,
    },
    {
      title: "National POS Retail Barcode",
      category: "Supply Chain & Retail Scanning",
      description:
        "Printed with registered GS1 EAN barcode (8 903002 010003), enabling seamless point-of-sale checkout, automated inventory tracking, and electronic billing across modern trade supermarkets, hospitality, and quick-commerce hubs.",
      image: "/assets/digital/barcode.jpg",
      icon: Barcode,
    },
    {
      title: "Neck Coding & Traceability Print",
      category: "Batch Integrity & Recall Readiness",
      description:
        "High-contrast laser neck printing records Batch Number, Manufacturing Date (MFD), Expiry Date (EXP), and Maximum Retail Price (MRP ₹79 / RS 130) with per-millilitre unit pricing (USP ₹0.02 / ml) for complete supply chain traceability.",
      image: "/assets/packaging/back-single.jpg",
      icon: Layers,
    },
  ];

  return (
    <main className="flex-1 pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 water-gradient-bg border-b border-[#D3E9F5]/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#53D6D1]/50 text-xs font-semibold uppercase tracking-[0.2em] text-[#073B73]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#53D6D1]" />
              <span>Trust, Compliance & Traceability</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#082747] leading-tight">
              Every Detail Matters.
            </h1>

            <p className="text-lg text-[#4A6277] leading-relaxed">
              At Quaine, purity is not a marketing phrase—it is an audited, verifiable science. From state-approved FSSAI licensing to batch-level laser neck printing, we hold every bottle to the highest standard of accountability.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="bg-white px-4 py-2 rounded-xl border border-[#D3E9F5] shadow-sm text-xs font-mono font-bold text-[#073B73]">
                FSSAI LIC: 11519005000608
              </div>
              <div className="bg-white px-4 py-2 rounded-xl border border-[#D3E9F5] shadow-sm text-xs font-mono font-bold text-[#073B73]">
                EAN: 8 903002 010003
              </div>
              <div className="bg-white px-4 py-2 rounded-xl border border-[#D3E9F5] shadow-sm text-xs font-semibold text-[#1459A3]">
                From the House of WPI Group
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Compliance Artifacts Section */}
      <section className="py-20 bg-white border-b border-[#D3E9F5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
              Packaging Artwork
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082747] tracking-tight">
              Verified Packaging & Label Credentials
            </h2>
            <p className="text-base text-[#4A6277]">
              Actual packaging crops extracted from the official Quaine Brand Launch documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceArtifacts.map((art, idx) => (
              <div
                key={idx}
                className="bg-[#F7FCFF] rounded-3xl p-6 border border-[#D3E9F5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden border border-[#D3E9F5] bg-white mb-5 shadow-inner">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-contain p-3"
                    />
                    <div className="absolute top-2 right-2 bg-[#073B73] text-white px-2 py-0.5 rounded text-[10px] font-mono">
                      Verified Asset
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-[#1459A3] bg-[#EAF5FA] px-2.5 py-1 rounded-full block w-fit mb-2">
                    {art.meta}
                  </span>

                  <h3 className="text-lg font-bold text-[#082747] mb-1">
                    {art.title}
                  </h3>

                  <div className="text-xs font-bold text-[#073B73] mb-3">
                    {art.subtitle}
                  </div>

                  <p className="text-xs text-[#4A6277] leading-relaxed">
                    {art.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D3E9F5]/60 flex items-center gap-1.5 text-xs text-[#073B73] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#53D6D1]" />
                  <span>Audited Documentation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Touchpoints & Digital Traceability */}
      <section className="py-20 bg-[#F7FCFF] border-b border-[#D3E9F5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
              Slide 08 Touchpoints
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082747] tracking-tight">
              Every Bottle Connects Back to the Brand
            </h2>
            <p className="text-base text-[#4A6277]">
              Digital touchpoints providing immediate consumer reassurance and retail workflow automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {traceabilityTouchpoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-[#D3E9F5] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 rounded-2xl overflow-hidden border border-[#D3E9F5] bg-[#F7FCFF] mb-5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-3"
                      />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-[#073B73]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1459A3]">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#082747] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#4A6277] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate & Regulatory Entity Disclosures */}
      <section className="py-20 bg-white border-b border-[#D3E9F5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
              Entity Information
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082747] tracking-tight">
              Corporate & Manufacturing Disclosures
            </h2>
            <p className="text-base text-[#4A6277]">
              Full statutory disclosures in compliance with Indian packaged food and beverage regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Marketer Box */}
            <div className="bg-[#F7FCFF] rounded-3xl p-8 border border-[#D3E9F5] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#D3E9F5]/60">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1459A3]">
                  Commercial Marketer
                </span>
                <span className="text-xs font-semibold text-[#073B73]">House of WPI Group</span>
              </div>
              <h3 className="text-xl font-bold text-[#082747]">
                {QUAINE_DATA.brand.marketer.name}
              </h3>
              <div className="space-y-2 text-xs text-[#4A6277] leading-relaxed">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#073B73] shrink-0 mt-0.5" />
                  <span>
                    <strong>Corporate Address:</strong> {QUAINE_DATA.brand.marketer.address}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Building className="w-4 h-4 text-[#073B73] shrink-0 mt-0.5" />
                  <span>
                    <strong>Registered Office:</strong> {QUAINE_DATA.brand.marketer.registeredOffice}
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <ShieldCheck className="w-4 h-4 text-[#53D6D1] shrink-0" />
                  <span>
                    <strong>FSSAI Central Licence:</strong> {QUAINE_DATA.brand.marketer.fssaiLicense} (Marketer Lic: {QUAINE_DATA.brand.marketer.marketerFssaiLicense})
                  </span>
                </div>
              </div>
            </div>

            {/* Manufacturer Box */}
            <div className="bg-[#F7FCFF] rounded-3xl p-8 border border-[#D3E9F5] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#D3E9F5]/60">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1459A3]">
                  Licensed Manufacturer
                </span>
                <span className="text-xs font-semibold text-[#073B73]">Approved Bottling Unit</span>
              </div>
              <h3 className="text-xl font-bold text-[#082747]">
                {QUAINE_DATA.brand.manufacturer.name}
              </h3>
              <div className="space-y-2 text-xs text-[#4A6277] leading-relaxed">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#073B73] shrink-0 mt-0.5" />
                  <span>
                    <strong>Facility Address:</strong> {QUAINE_DATA.brand.manufacturer.address}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#073B73] shrink-0" />
                  <span>
                    <strong>Customer Care:</strong> {QUAINE_DATA.brand.manufacturer.customerCarePhone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#073B73] shrink-0" />
                  <span>
                    <strong>Customer Support:</strong> {QUAINE_DATA.brand.manufacturer.customerCareEmail}
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <ShieldCheck className="w-4 h-4 text-[#53D6D1] shrink-0" />
                  <span>
                    <strong>Manufacturer FSSAI Lic:</strong> {QUAINE_DATA.brand.manufacturer.fssaiLicense}
                  </span>
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
