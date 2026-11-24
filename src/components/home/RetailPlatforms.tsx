import React from "react";
import Link from "next/link";
import { Building2, ShoppingBag, Truck, ArrowRight } from "lucide-react";

export default function RetailPlatforms() {
  const channels = [
    { name: "Swiggy Instamart", tag: "10-Min Quick Commerce" },
    { name: "Blinkit", tag: "Instant Grocery Delivery" },
    { name: "Zepto", tag: "Speed Delivery Metro" },
    { name: "Nature's Basket", tag: "Gourmet Supermarket" },
    { name: "Foodsquare", tag: "Artisanal Luxury Retail" },
    { name: "Amazon Prime", tag: "Pan-India Doorstep" },
    { name: "Luxury HORECA", tag: "5-Star Dining & Hotels" },
    { name: "Elite Fitness Hubs", tag: "Premium Health Clubs" },
  ];

  return (
    <section className="py-16 bg-[#FFFFFF] border-b border-[#D3E9F5]/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block mb-3">
          Phased Rollout Network
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#082747] tracking-tight">
          Available Across India&apos;s Leading Retail Platforms
        </h2>
        <p className="text-xs sm:text-sm text-[#4A6277] max-w-xl mx-auto mt-2">
          Launching across premier quick-commerce hubs, gourmet supermarkets, and luxury hospitality destinations.
        </p>
      </div>

      {/* Marquee Row */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="flex items-center gap-6 animate-pulse" style={{ animationDuration: "4s" }}>
          <div className="flex items-center gap-6 shrink-0 flex-wrap justify-center w-full max-w-6xl mx-auto px-4">
            {channels.map((ch, idx) => (
              <div
                key={idx}
                className="bg-[#F7FCFF] border border-[#D3E9F5] hover:border-[#53D6D1] rounded-2xl px-6 py-4 flex flex-col items-center justify-center transition-all shadow-sm hover:shadow-md min-w-[180px]"
              >
                <div className="text-sm font-bold text-[#073B73] font-heading">
                  {ch.name}
                </div>
                <div className="text-[10px] text-[#4A6277] uppercase tracking-wider mt-0.5">
                  {ch.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <Link
          href="/contact?type=distributor"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#073B73] hover:text-[#1459A3] hover:underline"
        >
          <span>List Quaine on Your Retail Shelf or Hotel</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
