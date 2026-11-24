export interface MineralItem {
  name: string;
  symbol: string;
  amount: string;
  unit: string;
  role: string;
  color: string;
}

export interface PurificationStage {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  benefit: string;
  iconName: string;
}

export interface AudienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  iconName: string;
}

export interface GtmPhase {
  phase: string;
  title: string;
  focus: string;
  description: string;
  channels: string[];
}

export const QUAINE_DATA = {
  brand: {
    name: "QUAINE",
    fullName: "QUAINE Ionized Alkaline Water",
    tagline: "Engineered Purity. Everyday Wellness.",
    subTagline: "Discover the refreshing experience of premium ionized alkaline water, thoughtfully purified and enriched with essential electrolytes.",
    philosophy: "It is and will always be the best ionized alkaline for your wellness.",
    shortDescription: "Premium ionized alkaline water with pH 8.0–9.5, purified through a five-stage purification journey and enriched with essential electrolytes.",
    parentCompany: "House of WPI Group",
    marketer: {
      name: "ROS Retail India Private Limited",
      address: "Khasra No. 119, Ground Floor, Neb Sarai, Friday Market, South Delhi – 110068",
      registeredOffice: "Ansari Plot No 5, Ground Floor, KH-119/26 0, Pocket H Sector 16, Rohini, Delhi - 110085",
      fssaiLicense: "11519005000608",
      marketerFssaiLicense: "13319011000600",
      email: "contact@quainewater.com",
      corporateEmail: "partners@rosretail.co.in",
    },
    manufacturer: {
      name: "Best Food Processors",
      alternateEntity: "EMPY Healthcare Craft Pvt. Ltd.",
      address: "G-479 No 5, Panki Ind. Area, Kanpur - Unnao Road, Unnao - 209 801 (U.P.) India",
      customerCarePhone: "0120-691 1111",
      customerCareEmail: "customercare@quainewater.com",
      fssaiLicense: "10015051000377",
    },
    social: {
      instagram: "https://www.instagram.com/quainewater/",
      handle: "@quainewater",
    },
    meta: {
      launchYear: "2026",
      shelfLife: "9 Months from date of packaging",
      volume: "1 Litre / 1000 ml",
      packaging: "Clear PET, BPA/BPS Free, Tamper-Evident Cap",
      barcode: "8 903002 010003",
      mrpDisplay: "₹79 / MRP ₹130",
      uspPerMl: "₹0.02 / ml",
    },
  },

  specifications: {
    phRange: "8.0 – 9.5",
    purificationStagesCount: 5,
    mineralsCount: 4,
    shelfLifeMonths: 9,
    phStatusNote: "Specification is verified against product packaging and brand launch documentation (pH 8.0–9.5).",
  },

  minerals: [
    {
      name: "Calcium",
      symbol: "Ca",
      amount: "12",
      unit: "mg/L",
      role: "Essential for cellular function and bone mineral density support",
      color: "#53D6D1",
    },
    {
      name: "Magnesium",
      symbol: "Mg",
      amount: "8",
      unit: "mg/L",
      role: "Supports neuromuscular health and energy metabolic pathways",
      color: "#83E7D9",
    },
    {
      name: "Sodium",
      symbol: "Na",
      amount: "8",
      unit: "mg/L",
      role: "Maintains optimal systemic hydration and cellular osmotic balance",
      color: "#38BDF8",
    },
    {
      name: "Potassium",
      symbol: "K",
      amount: "7",
      unit: "mg/L",
      role: "Aids muscle contraction balance and normal fluid distribution",
      color: "#1459A3",
    },
  ] as MineralItem[],

  purificationStages: [
    {
      number: "01",
      name: "Reverse Osmosis",
      subtitle: "Molecular Filtration",
      description: "Removes dissolved solids, heavy minerals, and dissolved impurities at a microscopic molecular level through specialized high-efficiency membranes.",
      benefit: "Creates an ultra-pure, baseline water foundation stripped of foreign contaminants.",
      iconName: "Filter",
    },
    {
      number: "02",
      name: "Micron Filtration",
      subtitle: "Particulate Clarification",
      description: "Strips out fine suspended particulates and microscopic sediments to ensure impeccable crystal clarity and visual purity.",
      benefit: "Polishes the water matrix for exceptional clarity and smoothness.",
      iconName: "Sparkles",
    },
    {
      number: "03",
      name: "Ozonation",
      subtitle: "Chemical-Free Disinfection",
      description: "Neutralizes microorganisms and pathogens organically via dissolved ozone without introducing artificial chemical disinfectants.",
      benefit: "Naturally reverts to pure oxygen, leaving no chemical residue.",
      iconName: "Shield",
    },
    {
      number: "04",
      name: "UV Purification",
      subtitle: "Optical Safety Barrier",
      description: "High-intensity ultraviolet illumination disrupts microbial DNA, serving as a redundant disinfection barrier for long-term microbiological stability.",
      benefit: "Ensures absolute microbial safety without altering mineral taste.",
      iconName: "SunMedium",
    },
    {
      number: "05",
      name: "Ionization",
      subtitle: "Alkaline & Electrolyte Infusion",
      description: "Controlled electrochemical ionization removes acidic elements, balances pH to 8.0–9.5, and precisely infuses essential Calcium, Magnesium, Sodium, and Potassium electrolytes.",
      benefit: "Elevates ordinary water into structured, refreshing functional hydration.",
      iconName: "Zap",
    },
  ] as PurificationStage[],

  audiences: [
    {
      id: "wellness",
      title: "Wellness Seekers",
      subtitle: "Daily Health Optimization",
      description: "Urban professionals optimizing hydration, dietary balance, and wellness routines with clean alkaline water.",
      benefits: ["Alkaline pH balance", "Clean, crisp hydration", "BPA/BPS-free safe packaging"],
      iconName: "HeartPulse",
    },
    {
      id: "active",
      title: "Active Lifestylers",
      subtitle: "High-Performance Hydration",
      description: "Gym-goers, runners, and athletes seeking rapid, balanced electrolyte replenishment on the go.",
      benefits: ["4 essential electrolytes", "Optimal fluid retention", "Smooth post-workout refresh"],
      iconName: "Flame",
    },
    {
      id: "households",
      title: "Premium Households",
      subtitle: "Uncompromising Family Safety",
      description: "Discerning families choosing mineral-enriched, multi-stage purified bottled water over standard tap or basic domestic RO.",
      benefits: ["Tested multi-stage purity", "Pure, odorless clean taste", "Reliable batch traceability"],
      iconName: "Home",
    },
    {
      id: "horeca",
      title: "HORECA & Modern Retail",
      subtitle: "Distinguished Hospitality SKU",
      description: "Luxury hotels, fine cafes, boutique restaurants, fitness studios, and modern trade seeking a differentiated premium beverage partner.",
      benefits: ["Elegant table aesthetic", "High-margin brand value", "National supply chain compliance"],
      iconName: "Building2",
    },
  ] as AudienceItem[],

  gtmPhases: [
    {
      phase: "Phase 1",
      title: "HORECA & General Trade",
      focus: "Hospitality & Boutique Fitness",
      description: "Onboard hotels, cafes, premium dining, fitness clubs, and general trade across primary metro cities.",
      channels: ["Luxury Boutique Hotels", "Fine Dining & Cafes", "Elite Fitness Studios", "Selected General Trade"],
    },
    {
      phase: "Phase 2",
      title: "Modern Trade & Q-Commerce",
      focus: "Metro Retail Expansion",
      description: "Widespread launch via leading quick-commerce platforms and premium supermarket chains for immediate doorstep delivery.",
      channels: ["Quick-Commerce 10-Min Delivery", "Gourmet Supermarkets", "Corporate Campus Hubs"],
    },
    {
      phase: "Phase 3",
      title: "Digital & Community",
      focus: "Brand Storytelling & Direct Subscriptions",
      description: "Interactive QR-driven brand storytelling, influencer hydration samplings, and direct-to-consumer recurring replenishment subscriptions.",
      channels: ["On-Pack QR Engagement", "D2C Recurring Subscriptions", "Wellness Community Activations"],
    },
  ] as GtmPhase[],

  storageInstructions: [
    { instruction: "Store in a cool and dry place", detail: "Protect from high ambient heat and humidity" },
    { instruction: "Keep away from direct sunlight", detail: "Preserves PET stability and mineral equilibrium" },
    { instruction: "Refrigerate after opening", detail: "Maintains optimal crisp temperature and freshness" },
    { instruction: "Once opened, consume within 3 days", detail: "Ensures pristine taste and hygienic purity" },
    { instruction: "Best before 9 months from date of packaging", detail: "Refer to batch neck print for MFD and USE-BY" },
  ],

  whiteParticlesClarification: "White particles occasionally visible in the bottle are solidified edible minerals (Calcium/Magnesium) which naturally occur in higher concentration — completely safe to consume.",
};
