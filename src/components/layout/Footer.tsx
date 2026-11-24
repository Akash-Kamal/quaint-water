import React from "react";
import Link from "next/link";
import QuaineLogo from "../brand/QuaineLogo";
import { QUAINE_DATA } from "@/data/quaine";
import { Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#091E3A] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <QuaineLogo variant="light" showTagline={false} size="md" />
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Ionized alkaline water calibrated to pH 8.0–9.5. Thoughtfully purified through a 5-stage process and enriched with essential electrolytes.
            </p>
            <div className="text-[11px] text-slate-400">
              From the House of WPI Group · Marketed by ROS Retail India Pvt. Ltd.
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/about" className="hover:text-[#00C2CB] transition-colors">
                  Inside Quaine
                </Link>
              </li>
              <li>
                <Link href="/purification" className="hover:text-[#00C2CB] transition-colors">
                  Purification Process
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-[#00C2CB] transition-colors">
                  The 1L Bottle
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-[#00C2CB] transition-colors">
                  Quality &amp; FSSAI
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00C2CB] transition-colors">
                  Wholesale &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Social */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Compliance &amp; Traceability
            </h4>
            <div className="text-xs text-slate-400 space-y-1">
              <div>FSSAI Central Lic. No. <span className="font-mono text-slate-200">{QUAINE_DATA.brand.marketer.fssaiLicense}</span></div>
              <div>Retail POS EAN: <span className="font-mono text-slate-200">{QUAINE_DATA.brand.meta.barcode}</span></div>
            </div>
            <div className="pt-2">
              <a
                href={QUAINE_DATA.brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#00C2CB] hover:underline"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Follow {QUAINE_DATA.brand.social.handle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} QUAINE. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
