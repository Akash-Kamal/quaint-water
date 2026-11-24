"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#073B73] text-white text-[11px] sm:text-xs py-2 px-4 border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center font-medium tracking-wide">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#53D6D1] shrink-0 animate-pulse" />
          <span>
            <strong className="font-bold text-[#83E7D9]">LAUNCH 2026</strong> ✨ PREMIUM IONIZED ALKALINE WATER (pH 8.0–9.5) &nbsp;|&nbsp;
          </span>
          <Link
            href="/contact?type=business"
            className="underline underline-offset-2 hover:text-[#53D6D1] transition-colors font-semibold"
          >
            HORECA &amp; WHOLESALE DISTRIBUTION ENQUIRIES OPEN →
          </Link>
        </div>
      </div>
    </div>
  );
}
