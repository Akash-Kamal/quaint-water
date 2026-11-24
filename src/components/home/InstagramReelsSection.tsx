import React from "react";
import Image from "next/image";
import { Instagram, Play, ArrowUpRight } from "lucide-react";
import { QUAINE_DATA } from "@/data/quaine";

export default function InstagramReelsSection() {
  const reels = [
    {
      title: "Morning Routine Hydration",
      tag: "Everyday Wellness",
      image: "/assets/product/bottle-front.jpg",
      duration: "0:24",
    },
    {
      title: "Crystal Glass Pour & Aeration",
      tag: "Pure Palate",
      image: "/assets/product/bottle-pouring.jpg",
      duration: "0:18",
    },
    {
      title: "Post-Workout Electrolyte Restore",
      tag: "High Performance",
      image: "/assets/product/bottle-lifestyle.jpg",
      duration: "0:30",
    },
    {
      title: "Fine Dining Table Placement",
      tag: "Hospitality SKU",
      image: "/assets/product/bottle-duo.jpg",
      duration: "0:22",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#073B73] to-[#082747] text-white overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#53D6D1]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#83E7D9] bg-white/10 px-4 py-1.5 rounded-full inline-block">
            Social & Community
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Find Your Balance with Quaine
          </h2>
          <p className="text-sm sm:text-base text-white/80">
            Join our community of high-performance individuals sharing their daily hydration journey.
          </p>
        </div>

        {/* 4 Vertical 9:16 Reel Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {reels.map((reel, idx) => (
            <a
              key={idx}
              href={QUAINE_DATA.brand.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden aspect-[9/16] bg-[#073B73]/60 border border-white/15 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-4"
            >
              {/* Card Background Image */}
              <Image
                src={reel.image}
                alt={reel.title}
                fill
                className="object-contain p-4 group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              {/* Top Tag & Duration */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#83E7D9] bg-[#082747]/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                  {reel.tag}
                </span>
                <span className="text-[10px] font-mono text-white/70 bg-black/40 px-2 py-0.5 rounded-md">
                  {reel.duration}
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="relative z-10 self-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-[#53D6D1] group-hover:text-[#082747] transition-all shadow-lg">
                <Play className="w-5 h-5 ml-0.5 fill-current" />
              </div>

              {/* Bottom Caption */}
              <div className="relative z-10 bg-gradient-to-t from-[#082747] via-[#082747]/80 to-transparent p-2 rounded-xl">
                <h4 className="text-xs font-bold text-white leading-snug group-hover:text-[#83E7D9] transition-colors">
                  {reel.title}
                </h4>
                <div className="flex items-center gap-1 text-[10px] text-white/60 mt-1">
                  <Instagram className="w-3 h-3 text-[#53D6D1]" />
                  <span>@quainewater</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            href={QUAINE_DATA.brand.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#53D6D1] text-[#082747] hover:bg-[#83E7D9] transition-all shadow-lg hover:shadow-xl group font-heading"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Us on Instagram @quainewater</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
