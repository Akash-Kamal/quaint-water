import React from "react";
import Image from "next/image";
import Link from "next/link";

interface QuaineLogoProps {
  variant?: "light" | "dark" | "photo";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function QuaineLogo({
  variant = "dark",
  showTagline = false,
  size = "md",
  className = "",
}: QuaineLogoProps) {
  const isLight = variant === "light";
  
  // Dimensions
  const dimensions = {
    sm: { icon: 30, text: "text-lg", height: 32 },
    md: { icon: 38, text: "text-2xl", height: 42 },
    lg: { icon: 50, text: "text-3xl", height: 54 },
    xl: { icon: 68, text: "text-4xl", height: 72 },
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group transition-transform active:scale-95 ${className}`}
      aria-label="QUAINE Ionized Alkaline Water Homepage"
    >
      {/* Precision Vector Emblem matching Quaine 3D droplet curves */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={dimensions.icon}
          height={dimensions.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm transition-transform group-hover:scale-105 duration-300"
        >
          <defs>
            {/* Outer Aqua Gradient */}
            <linearGradient id="aquaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#83E7D9" />
              <stop offset="50%" stopColor="#53D6D1" />
              <stop offset="100%" stopColor="#2BB8B2" />
            </linearGradient>

            {/* Inner Ocean Gradient */}
            <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1459A3" />
              <stop offset="100%" stopColor="#073B73" />
            </linearGradient>

            {/* Deep Navy Shadow Arc */}
            <linearGradient id="navyGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#082747" />
              <stop offset="100%" stopColor="#073B73" />
            </linearGradient>

            {/* White Core Highlight */}
            <linearGradient id="coreHighlight" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#F7FCFF" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Outer Layer: Left curved droplet contour */}
          <path
            d="M50 8C48 12 36 26 28 38C18 53 18 69 28 80C37 89 53 92 65 85C77 78 82 64 80 50C78 40 70 30 63 23C58 17 52 11 50 8Z"
            fill="url(#aquaGrad)"
          />

          {/* Deep Ocean Blue Underlayer */}
          <path
            d="M50 14C45 22 36 34 32 46C27 58 29 70 38 78C45 84 57 85 66 79C74 74 77 62 74 52C71 42 63 32 58 24C54 18 51 14 50 14Z"
            fill="url(#oceanGrad)"
          />

          {/* Swirling Aqua Inner Lip */}
          <path
            d="M50 20C47 28 40 38 38 48C36 57 39 67 46 72C52 76 61 76 67 71C73 66 74 56 71 48C67 38 58 28 50 20Z"
            fill="url(#aquaGrad)"
          />

          {/* Core Teardrop Void / Negative Space with White Glow */}
          <path
            d="M50 32C48 38 44 46 44 54C44 63 49 68 54 68C60 68 64 62 64 54C64 46 56 38 50 32Z"
            fill="url(#coreHighlight)"
          />

          {/* Deep Navy Swirl accentuating the 3D twist */}
          <path
            d="M36 60C38 68 44 75 52 77C50 74 48 70 47 66C44 58 46 50 49 42C43 47 38 53 36 60Z"
            fill="url(#navyGrad)"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Typography: QUAINE */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-black tracking-[0.16em] uppercase font-heading transition-colors ${
            dimensions.text
          } ${isLight ? "text-white" : "text-[#073B73]"}`}
          style={{ letterSpacing: "0.14em" }}
        >
          QUAINE
        </span>
        {showTagline && (
          <span
            className={`text-[9px] uppercase tracking-[0.28em] font-semibold -mt-1 ${
              isLight ? "text-[#83E7D9]" : "text-[#1459A3]"
            }`}
          >
            Ionized Alkaline Water
          </span>
        )}
      </div>
    </Link>
  );
}
