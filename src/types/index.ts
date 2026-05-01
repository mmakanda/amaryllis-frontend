// ============================================================
//  Amaryllis Success — Shared TypeScript Types
// ============================================================

export type Pillar = "agriculture" | "construction" | "it";

export interface Project {
  id: number;
  title: string;
  slug: string;
  pillar: Pillar;
  description: string;
  image_url?: string;
  is_featured: boolean;
  order: number;
  created_at: string;
}

export interface Testimonial {
  id: number;
  author_name: string;
  author_role: string;
  company?: string;
  content: string;
  pillar?: Pillar | null;
  rating: number;
  is_featured: boolean;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  pillar?: Pillar | null;
  order: number;
  is_active: boolean;
}

export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

export interface PillarMeta {
  id: Pillar;
  label: string;
  href: string;
  tagline: string;
  color: string;
  gradient: string;
  icon: string;
}

// Contact form
export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Admin
export interface AdminUser {
  id: string;
  full_name: string;
  email: string;
  role: string;
}
