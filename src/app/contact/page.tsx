"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  ShieldCheck,
  Building,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Truck,
  Sparkles,
} from "lucide-react";
import { QUAINE_DATA } from "@/data/quaine";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const defaultCategory =
    searchParams.get("type") === "distributor" || searchParams.get("type") === "business"
      ? "business"
      : "general";

  const [category, setCategory] = useState<"general" | "business">(defaultCategory);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    city: "",
    enquiryType: defaultCategory === "business" ? "Regional Distribution" : "Product & Brand Question",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
    deliveryMode?: string;
    referenceId?: string;
  } | null>(null);

  useEffect(() => {
    if (searchParams.get("type") === "distributor") {
      setCategory("business");
      setFormData((prev) => ({ ...prev, enquiryType: "Regional Distribution" }));
    } else if (searchParams.get("type") === "business") {
      setCategory("business");
      setFormData((prev) => ({ ...prev, enquiryType: "HORECA & Hospitality Supply" }));
    }
  }, [searchParams]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (formData.phone.trim().length < 8) {
      errs.phone = "Please enter a valid telephone number.";
    }
    if (!formData.city.trim()) errs.city = "City / Region is required.";
    if (category === "business" && !formData.businessName.trim()) {
      errs.businessName = "Business / Institution Name is recommended for trade enquiries.";
    }
    if (!formData.message.trim()) errs.message = "Please share a message or specific enquiry details.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          category,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmissionResult({
          success: true,
          message: data.message,
          deliveryMode: data.deliveryMode,
          referenceId: data.referenceId,
        });
        // Clear form fields
        setFormData({
          name: "",
          businessName: "",
          email: "",
          phone: "",
          city: "",
          enquiryType: category === "business" ? "Regional Distribution" : "Product & Brand Question",
          message: "",
        });
        setErrors({});
      } else {
        setSubmissionResult({
          success: false,
          message: data.error || "Failed to submit enquiry. Please try again.",
        });
      }
    } catch (err) {
      setSubmissionResult({
        success: false,
        message: "Network error occurred while connecting to server. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-7 bg-[#F7FCFF] rounded-3xl p-6 sm:p-10 border border-[#D3E9F5] shadow-sm">
      {/* Category Selector Tabs */}
      <div className="flex rounded-xl bg-white p-1 border border-[#D3E9F5] mb-8">
        <button
          type="button"
          onClick={() => {
            setCategory("general");
            setFormData((prev) => ({ ...prev, enquiryType: "Product & Brand Question" }));
          }}
          className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
            category === "general"
              ? "bg-[#073B73] text-white shadow-sm"
              : "text-[#4A6277] hover:text-[#082747]"
          }`}
        >
          General Enquiry
        </button>
        <button
          type="button"
          onClick={() => {
            setCategory("business");
            setFormData((prev) => ({ ...prev, enquiryType: "Regional Distribution" }));
          }}
          className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
            category === "business"
              ? "bg-[#073B73] text-white shadow-sm"
              : "text-[#4A6277] hover:text-[#082747]"
          }`}
        >
          Business / Distribution
        </button>
      </div>

      {/* Submission Status Alerts */}
      {submissionResult && (
        <div
          className={`p-5 rounded-2xl mb-6 border text-xs leading-relaxed ${
            submissionResult.success
              ? "bg-[#EAF5FA] border-[#53D6D1] text-[#073B73]"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          <div className="flex items-start gap-3">
            {submissionResult.success ? (
              <CheckCircle2 className="w-5 h-5 text-[#2BB8B2] shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <strong className="block font-bold">
                {submissionResult.success ? "Enquiry Successfully Recorded" : "Submission Notice"}
              </strong>
              <p>{submissionResult.message}</p>
              {submissionResult.referenceId && (
                <div className="pt-2 text-[11px] font-mono">
                  Reference ID: <span className="font-bold">{submissionResult.referenceId}</span>
                </div>
              )}
              {submissionResult.deliveryMode === "stored_pending_smtp_config" && (
                <div className="pt-1 text-[11px] text-[#4A6277] italic">
                  (Technical Notice: The backend logged this submission to the operational queue. Production SMTP/Webhook credentials can be connected via CONTACT_WEBHOOK_URL).
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Form Element */}
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label className="block text-xs font-bold text-[#082747] uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#073B73] ${
                errors.name ? "border-red-500 bg-red-50/50" : "border-[#D3E9F5]"
              }`}
            />
            {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
          </div>

          {/* Business Name (Optional/Required based on category) */}
          <div>
            <label className="block text-xs font-bold text-[#082747] uppercase tracking-wider mb-1.5">
              Business / Organization Name {category === "business" && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              placeholder={category === "business" ? "e.g. Grand Vista Hotel / FitClub" : "Optional"}
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#073B73] ${
                errors.businessName ? "border-red-500 bg-red-50/50" : "border-[#D3E9F5]"
              }`}
            />
            {errors.businessName && (
              <p className="text-[11px] text-red-600 mt-1">{errors.businessName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-[#082747] uppercase tracking-wider mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@domain.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#073B73] ${
                errors.email ? "border-red-500 bg-red-50/50" : "border-[#D3E9F5]"
              }`}
            />
            {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-bold text-[#082747] uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#073B73] ${
                errors.phone ? "border-red-500 bg-red-50/50" : "border-[#D3E9F5]"
              }`}
            />
            {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* City */}
          <div>
            <label className="block text-xs font-bold text-[#082747] uppercase tracking-wider mb-1.5">
              City & State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="e.g. New Delhi, Mumbai, Bengaluru"
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#073B73] ${
                errors.city ? "border-red-500 bg-red-50/50" : "border-[#D3E9F5]"
              }`}
            />
            {errors.city && <p className="text-[11px] text-red-600 mt-1">{errors.city}</p>}
          </div>

          {/* Enquiry Type Dropdown */}
          <div>
            <label className="block text-xs font-bold text-[#082747] uppercase tracking-wider mb-1.5">
              Enquiry Category <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.enquiryType}
              onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#D3E9F5] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#073B73]"
            >
              {category === "business" ? (
                <>
                  <option value="Regional Distribution">Regional Distribution Mandate</option>
                  <option value="HORECA & Hospitality Supply">Hotel / Restaurant / Cafe Supply</option>
                  <option value="Gym & Fitness Chain Supply">Gym & Fitness Club Supply</option>
                  <option value="Modern Trade & Supermarket">Modern Trade & Supermarket Shelf</option>
                  <option value="Corporate Campus Supply">Corporate Campus Hydration</option>
                </>
              ) : (
                <>
                  <option value="Product & Brand Question">Product & Brand Specifications</option>
                  <option value="Purification Process Inquiry">Purification & Science Inquiry</option>
                  <option value="Retail Availability Question">Retail Availability in My City</option>
                  <option value="General Consumer Feedback">General Feedback</option>
                </>
              )}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-[#082747] uppercase tracking-wider mb-1.5">
            Your Message / Requirement Details <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={
              category === "business"
                ? "Please outline your target region, estimated monthly volume requirement, and distribution profile..."
                : "How can our team assist you with Quaine?"
            }
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#073B73] ${
              errors.message ? "border-red-500 bg-red-50/50" : "border-[#D3E9F5]"
            }`}
          />
          {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
        </div>

        {/* Submit CTA Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#073B73] hover:bg-[#1459A3] text-white transition-all shadow-md flex items-center justify-center gap-2 active:scale-98 disabled:opacity-70 font-heading"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Commercial Enquiry</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-[#4A6277] text-center">
          Submissions are reviewed directly by ROS Retail India Private Limited commercial desk. We respect your confidentiality.
        </p>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="flex-1 pt-24 pb-16">
      {/* Hero Header */}
      <section className="py-16 lg:py-20 water-gradient-bg border-b border-[#D3E9F5]/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1459A3] bg-[#EAF5FA] px-4 py-1.5 rounded-full inline-block">
              Corporate & Commercial Communications
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#082747] leading-tight">
              Let&apos;s Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#073B73] via-[#1459A3] to-[#53D6D1]">
                Refreshing Together.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#4A6277] leading-relaxed">
              Whether you are a consumer with a question about our purification process, a hotelier seeking premium table water, or a regional distributor looking for growth, our commercial team is at your service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Details & Form */}
      <section className="py-20 bg-white border-b border-[#D3E9F5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Corporate Office & Direct Contacts */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1459A3]">
                  Direct Contact
                </span>
                <h2 className="text-2xl font-extrabold text-[#082747]">
                  Corporate Office & Distribution Hub
                </h2>
                <p className="text-xs sm:text-sm text-[#4A6277] leading-relaxed">
                  Headquartered in South Delhi, with national supply chain networks serving luxury hospitality, modern retail, and fitness sectors.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Physical Address */}
                <div className="bg-[#F7FCFF] p-5 rounded-2xl border border-[#D3E9F5] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#D3E9F5] flex items-center justify-center text-[#073B73] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#1459A3]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#082747]">
                      Corporate Marketer Address
                    </h4>
                    <p className="text-xs font-semibold text-[#073B73] mt-1">
                      {QUAINE_DATA.brand.marketer.name}
                    </p>
                    <p className="text-xs text-[#4A6277] mt-0.5 leading-relaxed">
                      {QUAINE_DATA.brand.marketer.address}
                    </p>
                    <span className="text-[11px] text-[#1459A3] mt-1 block">
                      From the House of WPI Group
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="bg-[#F7FCFF] p-5 rounded-2xl border border-[#D3E9F5] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#D3E9F5] flex items-center justify-center text-[#073B73] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#1459A3]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#082747]">
                      Customer Care Desk
                    </h4>
                    <p className="text-sm font-bold text-[#073B73] mt-0.5">
                      {QUAINE_DATA.brand.manufacturer.customerCarePhone}
                    </p>
                    <p className="text-xs text-[#4A6277] mt-0.5">
                      Monday to Saturday · 9:30 AM to 6:30 PM IST
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-[#F7FCFF] p-5 rounded-2xl border border-[#D3E9F5] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#D3E9F5] flex items-center justify-center text-[#073B73] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#1459A3]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#082747]">
                      Commercial Inquiries
                    </h4>
                    <a
                      href={`mailto:${QUAINE_DATA.brand.marketer.corporateEmail}`}
                      className="text-xs font-bold text-[#073B73] hover:underline mt-0.5 block"
                    >
                      {QUAINE_DATA.brand.marketer.corporateEmail}
                    </a>
                    <a
                      href={`mailto:${QUAINE_DATA.brand.marketer.email}`}
                      className="text-xs text-[#4A6277] hover:underline block"
                    >
                      {QUAINE_DATA.brand.marketer.email}
                    </a>
                  </div>
                </div>

                {/* Instagram Direct Link */}
                <div className="bg-[#F7FCFF] p-5 rounded-2xl border border-[#D3E9F5] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#D3E9F5] flex items-center justify-center text-[#073B73] shrink-0 mt-0.5">
                    <Instagram className="w-5 h-5 text-[#1459A3]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#082747]">
                      Official Social Channel
                    </h4>
                    <a
                      href={QUAINE_DATA.brand.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#073B73] hover:text-[#53D6D1] transition-colors mt-0.5 inline-flex items-center gap-1"
                    >
                      <span>Follow {QUAINE_DATA.brand.social.handle} on Instagram</span>
                      <span>↗</span>
                    </a>
                    <p className="text-[11px] text-[#4A6277] mt-0.5">
                      Brand stories, wellness community updates & hydration activations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Suspense-wrapped form */}
            <Suspense
              fallback={
                <div className="lg:col-span-7 bg-[#F7FCFF] rounded-3xl p-12 border border-[#D3E9F5] flex items-center justify-center">
                  <Loader2 className="w-8 h-8 animate-spin text-[#073B73]" />
                </div>
              }
            >
              <ContactFormInner />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}

