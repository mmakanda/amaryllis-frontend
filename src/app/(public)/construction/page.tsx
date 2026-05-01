import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HardHat, Truck, Wrench, BarChart2, Camera, FileText } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import type { Testimonial } from "@/types";

export const metadata: Metadata = {
  title: "Construction",
  description: "Civil construction services — road works, drainage, sewer reticulation, and AI-enhanced site monitoring in Zimbabwe.",
};

const SERVICES = [
  { icon: Truck, title: "Road Construction & Rehabilitation", desc: "Full-scope road works from earthworks and sub-base preparation through to asphalt surfacing, line marking, and traffic management." },
  { icon: Wrench, title: "Drainage Systems", desc: "Design and installation of storm-water management systems, culverts, channels, and retention ponds that protect infrastructure from flood damage." },
  { icon: HardHat, title: "Sewer Reticulation", desc: "Complete sewer network construction — from pipe-laying and manhole installation to pump-station commissioning and CCTV inspection." },
  { icon: FileText, title: "Bills of Quantities (BOQ)", desc: "AI-assisted BOQ preparation from architectural and engineering drawings, reducing preparation time by 70% while improving accuracy." },
  { icon: Camera, title: "AI Site Monitoring", desc: "Computer-vision cameras provide 24/7 progress tracking, safety compliance checks, and automated daily progress reports." },
  { icon: BarChart2, title: "Project Management", desc: "End-to-end project delivery using MS Project + custom dashboards — keeping clients informed on schedule, cost, and quality at all times." },
];

const PROJECTS = [
  { title: "Ruwa Road Rehabilitation", desc: "4.2 km of arterial road resurfacing including drainage upgrades, kerbing, and pedestrian walkways. Delivered 2 weeks ahead of schedule.", tag: "Road Works" },
  { title: "Chipukutu Storm-Water System", desc: "Complete storm-water reticulation for a 200-stand residential development — 3.8 km of piped drainage and 12 retention structures.", tag: "Drainage" },
  { title: "Industrial Park Sewer Network", desc: "Design and construction of 5.5 km sewer reticulation serving a 60-unit industrial park, including 2 pump stations.", tag: "Sewer Reticulation" },
];

const TESTIMONIALS: Testimonial[] = [
  { id: 1, author_name: "Chiedza Mutasa", author_role: "Director of Works", company: "Ruwa Local Board", content: "The road project was delivered on time, on budget, and to a quality that exceeded our specification. Their AI site monitoring gave us full visibility every step of the way.", pillar: "construction", rating: 5, is_featured: true },
  { id: 2, author_name: "Patrick Dube", author_role: "Project Manager", company: "Zimdev Properties", content: "The BOQ automation alone saved us 3 weeks of work. We submitted our tender on time and won. Amaryllis are a serious outfit.", pillar: "construction", rating: 5, is_featured: true },
];

export default function ConstructionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-hero-mesh">
        <div className="absolute inset-0 opacity-[0.04] bg-gradient-to-br from-amber-600 to-yellow-400" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-white shadow-card border border-border p-4 text-5xl">🏗️</div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600">Construction Division</p>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Infrastructure That{" "}
            <span className="text-flame">Endures</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From road construction and drainage to full sewer reticulation — Amaryllis delivers civil infrastructure on time, on spec, and with AI-powered transparency.
          </p>
          <Link href="/contact?subject=Construction+Quote"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg,#7B2FBE 0%,#C2449F 60%,#F5821F 100%)" }}>
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Services</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Civil Works & AI Capabilities</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                    <s.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Portfolio</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Featured Projects</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-card">
                  <span className="inline-block mb-4 rounded-lg bg-amber-50 border border-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    {p.tag}
                  </span>
                  <h3 className="font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel testimonials={TESTIMONIALS} title="Client Feedback" />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Start your project today</h2>
            <p className="text-muted-foreground mb-8">Request a quote or feasibility assessment from our civil engineering team.</p>
            <Link href="/contact?subject=Construction+Quote"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-glow hover:scale-105 transition-all"
              style={{ background: "linear-gradient(135deg,#7B2FBE,#C2449F,#F5821F)" }}>
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
