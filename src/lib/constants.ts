// ============================================================
//  Amaryllis Success — Brand Constants & Product Metadata
// ============================================================

import type { PillarMeta, NavItem } from "@/types";

export const BRAND = {
  name: "Amaryllis Success",
  tagline: "AI Products & Expert Services — Built for Africa.",
  email: "support@amaryllissuccess.co.zw",
  phone1: "+263 786 176 284",
  phone2: "+263 787 394 581",
  whatsapp: "263786176284",
  address: "9796 Chipukutu Park",
  city: "Harare, Zimbabwe",
  hours: {
    weekdays: "Monday – Friday: 08:00 – 17:00",
    saturday: "Saturday: 08:00 – 13:00",
    sunday: "Sunday: Closed",
  },
} as const;

export const WA_MESSAGE = encodeURIComponent(
  "Hello Amaryllis Success, I'd like to enquire about your services."
);

export const PILLARS: PillarMeta[] = [
  {
    id: "agriculture",
    label: "Agriculture",
    href: "/agriculture",
    tagline: "Smart farming solutions for a food-secure Zimbabwe",
    color: "#16A34A",
    gradient: "from-green-600 to-emerald-400",
    icon: "🌱",
  },
  {
    id: "construction",
    label: "Construction",
    href: "/construction",
    tagline: "Building infrastructure that endures",
    color: "#D97706",
    gradient: "from-amber-600 to-yellow-400",
    icon: "🏗️",
  },
  {
    id: "it",
    label: "IT Consultancy",
    href: "/it-consultancy",
    tagline: "AI-powered digital transformation",
    color: "#7B2FBE",
    gradient: "from-brand-purple to-brand-magenta",
    icon: "💡",
  },
];

export interface ProductMeta {
  id: string;
  label: string;
  emoji: string;
  href: string;
  tag: string;
  tagline: string;
  description: string;
  status: "live" | "beta" | "coming-soon";
  color: string;
  ctaLabel: string;
}

export const PRODUCTS: ProductMeta[] = [
  {
    id: "lexizw",
    label: "LexiZW",
    emoji: "⚖️",
    href: "/products/lexizw",
    tag: "Legal AI",
    tagline: "Zimbabwe's first AI legal research assistant.",
    description:
      "Search Zimbabwean case law, statutes, and legal precedents in plain language — and get a researched, sourced answer in seconds.",
    status: "live",
    color: "#7B2FBE",
    ctaLabel: "Try LexiZW",
  },
  {
    id: "mudhumeni",
    label: "Mudhumeni",
    emoji: "🌾",
    href: "/products/mudhumeni",
    tag: "AgriTech AI",
    tagline: "AI for the Zimbabwean farmer — in the field, on the phone.",
    description:
      "Point your phone at a crop and get an instant disease diagnosis. Built on 50,000+ images of Zimbabwean crops. Works on-device — no reliable internet required.",
    status: "live",
    color: "#16A34A",
    ctaLabel: "Explore Mudhumeni",
  },
  {
    id: "boq-generator",
    label: "BOQ Generator",
    emoji: "📋",
    href: "/products/boq-generator",
    tag: "Construction AI",
    tagline: "From engineering drawings to BOQ — in hours, not weeks.",
    description:
      "Upload engineering drawings and get a structured Bill of Quantities automatically. Reduces preparation time by 85% and error rate by 78%.",
    status: "live",
    color: "#D97706",
    ctaLabel: "See BOQ Generator",
  },
  {
    id: "researchmind",
    label: "ResearchMind",
    emoji: "🔬",
    href: "/products/researchmind",
    tag: "Research AI",
    tagline: "Research faster. Think deeper.",
    description:
      "Upload papers, paste URLs, or ask questions — ResearchMind summarises sources, surfaces key insights, and accelerates literature reviews.",
    status: "beta",
    color: "#0284C7",
    ctaLabel: "Join Waitlist",
  },
  {
    id: "amara",
    label: "Amara",
    emoji: "🤖",
    href: "/products/amara",
    tag: "AI Assistant",
    tagline: "Your always-on AI business assistant.",
    description:
      "Amara answers questions, handles enquiries, and connects visitors to the right team — 24/7, at near-zero marginal cost. Also available as an enterprise deployment.",
    status: "live",
    color: "#C2449F",
    ctaLabel: "Chat with Amara",
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "LexiZW", href: "/products/lexizw" },
      { label: "Mudhumeni", href: "/products/mudhumeni" },
      { label: "BOQ Generator", href: "/products/boq-generator" },
      { label: "ResearchMind", href: "/products/researchmind" },
      { label: "Amara", href: "/products/amara" },
    ],
  },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Agriculture", href: "/agriculture" },
      { label: "Construction", href: "/construction" },
      { label: "IT Consultancy", href: "/it-consultancy" },
      { label: "Managed Services", href: "/managed-services" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const COMPANY_VALUES = [
  {
    title: "Integrity",
    description:
      "We build trust through transparency, honesty, and consistent delivery on our promises.",
    icon: "🤝",
  },
  {
    title: "Innovation",
    description:
      "We leverage cutting-edge AI and technology to solve real-world challenges across every sector.",
    icon: "⚡",
  },
  {
    title: "Impact",
    description:
      "Every project we deliver creates measurable, lasting impact for communities and businesses.",
    icon: "🎯",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards — in quality, safety, and client satisfaction.",
    icon: "🏆",
  },
];

