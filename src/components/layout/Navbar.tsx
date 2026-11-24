"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import QuaineLogo from "../brand/QuaineLogo";
import { Menu, X, ArrowUpRight, Instagram } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Inside Quaine", href: "/about" },
    { name: "Purification", href: "/purification" },
    { name: "The Bottle", href: "/product" },
    { name: "Quality", href: "/quality" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[#FAFCFE]/90 backdrop-blur-md border-b border-slate-200/80 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <QuaineLogo variant="dark" showTagline={false} size="md" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors ${
                    isActive
                      ? "text-[#091E3A] font-bold"
                      : "text-slate-500 hover:text-[#091E3A]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href="https://www.instagram.com/quainewater/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#00C2CB] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <Link
              href="/contact?type=business"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#091E3A] text-white hover:bg-[#00C2CB] hover:text-[#091E3A] transition-all duration-200"
            >
              <span>Partner</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#091E3A] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAFCFE] border-b border-slate-200 px-6 py-6 space-y-4 animate-in fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-sm uppercase tracking-widest text-[#091E3A] font-medium py-1"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-200">
              <Link
                href="/contact?type=business"
                className="block text-center py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#091E3A] text-white"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
