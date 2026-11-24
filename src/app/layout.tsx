import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { QUAINE_DATA } from "@/data/quaine";

export const viewport: Viewport = {
  themeColor: "#073B73",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://quainewater.com"),
  title: {
    default: "QUAINE — Ionized Alkaline Water | Engineered Purity, Everyday Wellness",
    template: "%s | QUAINE Ionized Alkaline Water",
  },
  description:
    "Discover QUAINE: Premium ionized alkaline water with pH 8.0–9.5, purified through an advanced 5-stage purification journey and enriched with essential Calcium, Magnesium, Sodium, and Potassium electrolytes.",
  keywords: [
    "Quaine Water",
    "Quaine Alkaline Water",
    "Ionized Alkaline Water",
    "Premium Alkaline Water",
    "Electrolyte Enriched Water",
    "1 Litre Alkaline Water",
    "Alkaline Water India",
    "Functional Hydration",
    "HORECA Premium Water",
  ],
  authors: [{ name: "ROS Retail India Pvt. Ltd." }],
  creator: "House of WPI Group",
  publisher: "ROS Retail India Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "QUAINE — Premium Ionized Alkaline Water",
    description:
      "Engineered purity, bottled for wellness. 5-step purification with Calcium, Magnesium, Sodium and Potassium electrolytes in clear BPA/BPS-free PET.",
    url: "https://quainewater.com",
    siteName: "QUAINE Water",
    images: [
      {
        url: "/assets/brand/main-banner.jpg",
        width: 1024,
        height: 576,
        alt: "QUAINE Ionized Alkaline Water - Pure by Nature. Better for You.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QUAINE — Ionized Alkaline Water",
    description:
      "Engineered purity, bottled for wellness. pH 8.0–9.5 with essential electrolytes.",
    images: ["/assets/brand/main-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "QUAINE",
    alternateName: "QUAINE Ionized Alkaline Water",
    url: "https://quainewater.com",
    logo: "https://quainewater.com/assets/brand/quaine-logo.jpg",
    description: QUAINE_DATA.brand.shortDescription,
    parentOrganization: {
      "@type": "Organization",
      name: "House of WPI Group",
    },
    founder: {
      "@type": "Organization",
      name: "ROS Retail India Private Limited",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Khasra No. 119, Ground Floor, Neb Sarai, Friday Market",
        addressLocality: "South Delhi",
        postalCode: "110068",
        addressCountry: "IN",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-120-691-1111",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [QUAINE_DATA.brand.social.instagram],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7FCFF] text-[#082747] antialiased selection:bg-[#53D6D1]/30 selection:text-[#073B73]">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
