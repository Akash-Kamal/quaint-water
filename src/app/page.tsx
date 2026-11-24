import React from "react";
import Hero from "@/components/home/Hero";
import MinimalShowcase from "@/components/home/MinimalShowcase";
import MinimalMinerals from "@/components/home/MinimalMinerals";
import MinimalLifestyleCTA from "@/components/home/MinimalLifestyleCTA";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* 1. Minimal Luxury Hero with Master Banner */}
      <Hero />

      {/* 2. The 1-Litre Bottle Showcase */}
      <MinimalShowcase />

      {/* 3. Essential Mineral Formula */}
      <MinimalMinerals />

      {/* 4. Lifestyle Imagery & Hospitality Partnership */}
      <MinimalLifestyleCTA />
    </main>
  );
}
