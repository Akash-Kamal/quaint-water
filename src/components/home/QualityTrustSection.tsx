import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight, QrCode, Barcode, MapPin, Building } from "lucide-react";
import { QUAINE_DATA } from "@/data/quaine";

export default function QualityTrustSection() {
  const complianceCards = [
    {
      title: "FSSAI Registration & Licensing",
      license: "11519005000608",
      desc: "Licensed under Food Safety and Standards Authority of India for premium packaged drinking and alkaline mineral water standards.",
      image: "/assets/compliance/fssai.jpg",
      badge: "National Regulatory Approval",
    },
    {
      title: "Manufacturing & Sourcing",
      license: "Best Food Processors",
      desc: "Manufactured at state-of-the-art facilities with advanced multi-barrier RO, ozonation and electrochemical ionization chambers.",
      image: "/assets/compliance/manufacturer.jpg",
      badge: "Certified Processing Plant",
    },
    {
      title: "Storage & Shelf-Life Protocol",
      license: "9 Months Best Before",
      desc: "Store cool & dry away from direct sunlight. Refrigerate after opening and consume within 3 days for optimum crisp hydration.",
      image: "/assets/compliance/storage-instructions.jpg",
      badge: "Quality Preservation Guidelines",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative border-b border-[#D3E9F5]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
              Compliance & Accountability
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#082747] tracking-tight leading-tight">
              Quality You Can See.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#073B73] to-[#53D6D1]">
                Trust You Can Verify.
              </span>
            </h2>
            <p className="text-base text-[#4A6277] leading-relaxed">
              Every bottle of Quaine provides transparent manufacturing data, authentic FSSAI licensing, and batch-level traceability printed directly on the bottle neck.
            </p>
          </div>

          <Link
            href="/quality"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#073B73] text-white hover:bg-[#1459A3] transition-all shadow-sm shrink-0 group"
          >
            <span>Explore Quality & Safety</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Presentation Artwork Compliance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {complianceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F7FCFF] hover:bg-white rounded-3xl p-6 border border-[#D3E9F5] hover:border-[#53D6D1] transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                {/* Artwork Image Container */}
                <div className="relative h-44 rounded-2xl overflow-hidden border border-[#D3E9F5] bg-white mb-5 shadow-inner">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-[#073B73] text-white px-2 py-0.5 rounded text-[10px] font-mono">
                    Slide Asset
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1459A3] bg-[#EAF5FA] px-2.5 py-0.5 rounded-full">
                  {card.badge}
                </span>

                <h3 className="text-lg font-bold text-[#082747] mt-2 mb-1">
                  {card.title}
                </h3>

                <div className="text-xs font-mono font-bold text-[#073B73] mb-2">
                  {card.license}
                </div>

                <p className="text-xs text-[#4A6277] leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D3E9F5]/60 flex items-center gap-1.5 text-xs text-[#073B73] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#53D6D1]" />
                <span>Verified Documentation</span>
              </div>
            </div>
          ))}
        </div>

        {/* Traceability Strip with Barcode & QR Artwork */}
        <div className="bg-[#EAF5FA] rounded-3xl p-6 sm:p-8 border border-[#D3E9F5] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white border border-[#D3E9F5] flex items-center justify-center text-[#073B73] shadow-sm shrink-0">
              <QrCode className="w-7 h-7 text-[#073B73]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#082747]">
                On-Pack QR & Inventory Barcode Integration
              </h4>
              <p className="text-xs text-[#4A6277] max-w-xl">
                Scannable on-pack QR code connects directly to the Quaine brand dossier. EAN Barcode ({QUAINE_DATA.brand.meta.barcode}) enables frictionless retail POS scanning across India.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="relative w-28 h-14 bg-white rounded-xl border border-[#D3E9F5] overflow-hidden p-1 flex items-center justify-center">
              <Image
                src="/assets/digital/barcode.jpg"
                alt="Barcode"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-14 h-14 bg-white rounded-xl border border-[#D3E9F5] overflow-hidden p-1 flex items-center justify-center">
              <Image
                src="/assets/digital/qr-code.jpg"
                alt="QR Code"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
