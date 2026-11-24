import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Droplets,
  ShieldCheck,
  Zap,
  Leaf,
  Layers,
  ArrowRight,
  Heart,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { QUAINE_DATA } from "@/data/quaine";
import PartnershipCTA from "@/components/home/PartnershipCTA";

export const metadata: Metadata = {
  title: "About Quaine — Engineered Purity, Bottled for Wellness",
  description:
    "Learn about Quaine: Premium ionized alkaline water crafted for everyday wellness. Discover our purification philosophy, electrolyte enrichment, and eco-hydrate approach.",
  alternates: {
    canonical: "https://quainewater.com/about",
  },
  openGraph: {
    title: "About Quaine — Engineered Purity, Bottled for Wellness",
    description:
      "Created for people who value quality, purity, and everyday hydration. Purified through a 5-step journey and enriched with 4 essential electrolytes.",
    url: "https://quainewater.com/about",
  },
};

export default function AboutPage() {
  const pillars = [
    {
      title: "Eco-Hydrate",
      subtitle: "Environmentally Conscious",
      description: "Superior filtration built around environmentally conscious sourcing and 100% recyclable clear PET packaging.",
      icon: Leaf,
    },
    {
      title: "BPA / BPS Free",
      subtitle: "Safe-Grade PET Packaging",
      description: "Bottled exclusively in certified safe-grade PET, completely free from harmful bisphenols, phthalates, or plasticizers.",
      icon: ShieldCheck,
    },
    {
      title: "Electrolyte Enriched",
      subtitle: "Cellular Mineral Balance",
      description: "Naturally enriched with Calcium (12 mg), Magnesium (8 mg), Sodium (8 mg), and Potassium (7 mg) in every bottle.",
      icon: Sparkles,
    },
    {
      title: "Ionized & Alkaline",
      subtitle: "Controlled pH 8.0 – 9.5",
      description: "Balanced through advanced electrochemical ionization to remove acidic contents and restore natural bodily hydration equilibrium.",
      icon: Zap,
    },
  ];

  return (
    <main className="flex-1 pt-24 pb-16">
      {/* Hero / Intro Section */}
      <section className="py-16 lg:py-24 water-gradient-bg border-b border-[#D3E9F5]/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#53D6D1]/50 text-xs font-semibold uppercase tracking-[0.2em] text-[#073B73]">
              <Droplets className="w-3.5 h-3.5 text-[#53D6D1]" />
              <span>Brand Philosophy & Origin</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#082747] leading-tight">
              Introducing Quaine.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#073B73] via-[#1459A3] to-[#53D6D1]">
                Engineered Purity, Bottled for Wellness.
              </span>
            </h1>

            <p className="text-lg text-[#4A6277] leading-relaxed">
              Quaine was founded on a simple conviction: everyday hydration should do more than merely quench thirst. It should restore, replenish, and elevate your daily wellness through rigorous science and uncompromised purity.
            </p>

            {/* Brand Creed Quote */}
            <div className="bg-white/80 backdrop-blur-sm border-l-4 border-[#073B73] p-5 rounded-r-2xl shadow-sm">
              <blockquote className="text-sm sm:text-base font-semibold text-[#073B73] italic">
                “{QUAINE_DATA.brand.philosophy}”
              </blockquote>
              <div className="text-xs text-[#4A6277] mt-1 font-medium">
                — Quaine Master Brand Commitment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story & Visual Breakdown */}
      <section className="py-20 bg-white border-b border-[#D3E9F5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Photography Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative h-[440px] sm:h-[500px] rounded-3xl overflow-hidden border border-[#D3E9F5] shadow-lg bg-[#F7FCFF]">
                <Image
                  src="/assets/product/bottle-lifestyle.jpg"
                  alt="QUAINE Bottle standing gracefully with crystal water glass"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Secondary Duo Photo */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 rounded-2xl overflow-hidden border border-[#D3E9F5] bg-[#F7FCFF]">
                  <Image
                    src="/assets/product/bottle-pouring.jpg"
                    alt="Pristine pour of Quaine into crystal glass"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden border border-[#D3E9F5] bg-[#F7FCFF]">
                  <Image
                    src="/assets/product/bottle-front.jpg"
                    alt="QUAINE front packaging with dew condensation"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </div>

            {/* Narrative Editorial Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
                Why Quaine Exists
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082747] tracking-tight">
                Trading Up to Functional Hydration
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#4A6277] leading-relaxed">
                <p>
                  Across urban centres, consumers are moving beyond generic bottled water. People now check labels for alkalinity, clean mineral sourcing, and verified purification methods.
                </p>
                <p>
                  Quaine delivers an engineered evolution. Instead of relying on plain municipal sources or standard domestic RO, every bottle goes through a verified 5-stage purification cycle: Reverse Osmosis, Micron Filtration, Ozonation, and UV Disinfection, followed by electrochemical Ionization.
                </p>
                <p>
                  This multi-stage sequence removes acidic contaminants, raises the water to an alkaline pH of 8.0–9.5, and precisely infuses essential Calcium, Magnesium, Sodium, and Potassium electrolytes.
                </p>
              </div>

              {/* Key Highlights Matrix */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#F7FCFF] border border-[#D3E9F5]">
                  <h4 className="text-sm font-bold text-[#082747] mb-1">
                    Engineered Precision
                  </h4>
                  <p className="text-xs text-[#4A6277]">
                    Ionized at the molecular level for smooth palate mouthfeel and clean hydration.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F7FCFF] border border-[#D3E9F5]">
                  <h4 className="text-sm font-bold text-[#082747] mb-1">
                    Traceable Integrity
                  </h4>
                  <p className="text-xs text-[#4A6277]">
                    Batch-coded neck with MFD, USE-BY and on-pack QR linking to company profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Core Brand Pillars */}
      <section className="py-20 bg-[#F7FCFF] border-b border-[#D3E9F5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
              Core Brand Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082747] tracking-tight">
              Built on Scientific Purity & Safety
            </h2>
            <p className="text-base text-[#4A6277]">
              The four non-negotiable promises stamped onto every bottle of Quaine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-[#D3E9F5] shadow-sm hover:shadow-xl hover:border-[#53D6D1] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF5FA] text-[#073B73] flex items-center justify-center group-hover:bg-[#073B73] group-hover:text-[#53D6D1] transition-colors mb-5 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1459A3]">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-[#082747] mt-1 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#4A6277] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#D3E9F5]/60 flex items-center gap-1.5 text-xs text-[#073B73] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#53D6D1]" />
                    <span>Label Guaranteed</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Go-To-Market Phased Strategy Section (From Slide 10) */}
      <section className="py-20 bg-white border-b border-[#D3E9F5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
              Market Expansion
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082747] tracking-tight">
              Phased Go-To-Market Strategy
            </h2>
            <p className="text-base text-[#4A6277]">
              Engineered for seamless commercial expansion backed by a national FSSAI-compliant supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {QUAINE_DATA.gtmPhases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-[#F7FCFF] rounded-3xl p-8 border border-[#D3E9F5] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#D3E9F5]/60 mb-4">
                    <span className="text-xs font-mono font-bold text-[#073B73] bg-[#EAF5FA] px-3 py-1 rounded-full">
                      {phase.phase}
                    </span>
                    <Layers className="w-4 h-4 text-[#1459A3]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#082747] mb-1">
                    {phase.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#1459A3] uppercase tracking-wider mb-3">
                    {phase.focus}
                  </div>
                  <p className="text-xs text-[#4A6277] leading-relaxed mb-6">
                    {phase.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#082747] uppercase tracking-wider block">
                      Target Channels:
                    </span>
                    {phase.channels.map((ch, chIdx) => (
                      <div key={chIdx} className="flex items-center gap-2 text-xs text-[#4A6277]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#53D6D1]" />
                        <span>{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <PartnershipCTA />
    </main>
  );
}
