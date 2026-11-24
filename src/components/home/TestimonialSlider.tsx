"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote:
        "Switching to structured alkaline water with bio-available electrolytes has made a noticeable difference for clients combatting high acidity and urban dietary fatigue. The mouthfeel is exceptionally clean, crisp, and smooth.",
      name: "Dr. Ananya Sen",
      role: "Clinical Nutritionist & Wellness Consultant",
      city: "New Delhi",
      rating: 5,
    },
    {
      quote:
        "During long endurance training and gym sessions, standard RO water often feels heavy or lacks mineral retention. Quaine's balance of Calcium, Magnesium, Sodium, and Potassium keeps my hydration levels steady without any digestive sluggishness.",
      name: "Vikramaditya Singhania",
      role: "Triathlete & Fitness Coach",
      city: "Mumbai",
      rating: 5,
    },
    {
      quote:
        "Quaine's 1-litre silhouette has the exact tabletop elegance and certified safety credentials our fine dining guests appreciate. The tamper-evident cap and clean aesthetic stand out on any premium table setting.",
      name: "Rohan Mehra",
      role: "F&B Director, Boutique Luxury Hotel",
      city: "Bengaluru",
      rating: 5,
    },
    {
      quote:
        "I used to suffer from throat irritation and acid discomfort after frequent work travel and restaurant meals. Making Quaine my primary daily water has provided great comfort. The quality, purity, and batch transparency are world-class.",
      name: "Priya Nambiar",
      role: "Senior Corporate Strategist",
      city: "Gurugram",
      rating: 5,
    },
  ];

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D3E9F5]/70 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
            Community Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#082747] tracking-tight">
            What Our Community Says
          </h2>
          <p className="text-sm sm:text-base text-[#4A6277]">
            Don&apos;t just take our word for it. Hear how daily ionized hydration transforms wellness routines.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative bg-[#F7FCFF] rounded-3xl p-8 sm:p-12 border border-[#D3E9F5] shadow-sm">
          {/* Decorative Quote Icon */}
          <div className="absolute top-6 right-8 text-[#53D6D1]/30">
            <Quote className="w-16 h-16" />
          </div>

          <div className="relative z-10 space-y-6">
            {/* Stars */}
            <div className="flex items-center gap-1 text-[#F59E0B]">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-xl font-medium text-[#082747] leading-relaxed italic">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="pt-4 border-t border-[#D3E9F5]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-[#082747]">
                  {testimonials[current].name}
                </h4>
                <p className="text-xs text-[#1459A3] font-medium">
                  {testimonials[current].role} · {testimonials[current].city}
                </p>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white border border-[#D3E9F5] hover:bg-[#073B73] hover:text-white transition-all flex items-center justify-center text-[#073B73] shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-mono font-semibold text-[#4A6277] px-2">
                  {current + 1} / {testimonials.length}
                </div>
                <button
                  type="button"
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-white border border-[#D3E9F5] hover:bg-[#073B73] hover:text-white transition-all flex items-center justify-center text-[#073B73] shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
