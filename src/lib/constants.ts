// ============================================================
//  Amaryllis Success — Brand Constants & Pillar Metadata
// ============================================================

import type { PillarMeta, NavItem } from "@/types";

export const BRAND = {
  name: "Amaryllis Success",
  tagline: "Growth. Innovation. Impact.",
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

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
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
  { label: "AI Showcase", href: "/ai-showcase" },
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
