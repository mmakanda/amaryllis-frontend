import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Leaf, Droplets, BarChart3, Smartphone, Satellite, Users } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import type { Testimonial } from "@/types";

export const metadata: Metadata = {
  title: "Agriculture",
  description:
    "Smart farming solutions — Mudhumeni precision farming app, crop monitoring, yield prediction, and agri-infrastructure services in Zimbabwe.",
};

const SERVICES = [
  { icon: Smartphone, title: "Mudhumeni Precision Farming App", desc: "AI-powered mobile platform for crop health monitoring, disease detection, irrigation scheduling, and yield forecasting — built specifically for Zimbabwean farming conditions." },
  { icon: Satellite, title: "Remote Crop Monitoring", desc: "Satellite and drone-based field analysis delivering NDVI maps, canopy cover assessments, and early stress detection at scale." },
  { icon: Droplets, title: "Smart Irrigation Systems", desc: "Sensor-driven irrigation management that saves up to 40% of water usage while maintaining optimal soil moisture for maximum yield." },
  { icon: BarChart3, title: "Yield Prediction & Analytics", desc: "Machine learning models trained on local agro-climatic data provide seasonal yield forecasts with 85%+ accuracy." },
  { icon: Leaf, title: "Soil Analysis & Advisory", desc: "Comprehensive soil testing paired with AI recommendations for fertiliser scheduling, crop rotation, and soil health improvement." },
  { icon: Users, title: "Farmer Training & Support", desc: "On-site and digital training programs ensuring farmers and extension officers can maximise the value of every tool we deploy." },
];

const AI_CASES = [
  { problem: "Farmers lack timely disease alerts", solution: "Mudhumeni's computer-vision model identifies 40+ crop diseases from phone photos", outcome: "Up to 60% reduction in crop loss from late detection" },
  { problem: "Inefficient, manual irrigation scheduling", solution: "IoT soil-moisture sensors feed an AI scheduler that automates irrigation timing", outcome: "35–40% water savings across monitored fields" },
  { problem: "No reliable yield forecast for planning", solution: "Historical weather + satellite NDVI data powers a gradient-boosted yield model", outcome: "Farmers plan financing, storage, and marketing 3 months ahead" },
];

const TESTIMONIALS: Testimonial[] = [
  { id: 1, author_name: "Tendai Moyo", author_role: "Farm Manager", company: "Mashonaland Estates", content: "Mudhumeni changed everything. We spotted fall armyworm three weeks before it would have devastated our maize — and treated it before any real damage.", pillar: "agriculture", rating: 5, is_featured: true },
  { id: 2, author_name: "Agnes Chirwa", author_role: "Extension Officer", company: "Agritex", content: "The soil analysis reports are incredibly detailed. Farmers in our district now have tailored fertiliser plans instead of guessing.", pillar: "agriculture", rating: 5, is_featured: true },
];

export default function AgriculturePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-hero-mesh">
        <div className="absolute inset-0 opacity-[0.04] bg-gradient-to-br from-green-600 to-emerald-300" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-white shadow-card border border-border p-4 text-5xl">🌱</div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600">Agriculture Division</p>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Smart Farming for a{" "}
            <span className="text-flame">Food-Secure Zimbabwe</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We combine AI, satellite imagery, IoT sensors, and local agronomic expertise to help farmers grow more with less — sustainably and profitably.
          </p>
          <Link href="/contact?subject=Agriculture+Consultation"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg,#7B2FBE 0%,#C2449F 60%,#F5821F 100%)" }}>
            Request a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Services</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">What We Offer</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
                    <s.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">AI in Agriculture</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Technology Solving Real Problems</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AI_CASES.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-card">
                  <div className="mb-5 space-y-3">
                    <div className="rounded-xl bg-red-50 border border-red-100 p-3">
                      <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">Problem</p>
                      <p className="text-sm text-foreground">{c.problem}</p>
                    </div>
                    <div className="rounded-xl bg-primary-50 border border-brand-purple/10 p-3">
                      <p className="text-xs font-semibold text-brand-purple uppercase tracking-wide mb-1">Solution</p>
                      <p className="text-sm text-foreground">{c.solution}</p>
                    </div>
                    <div className="rounded-xl bg-green-50 border border-green-100 p-3">
                      <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">Outcome</p>
                      <p className="text-sm text-foreground">{c.outcome}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel testimonials={TESTIMONIALS} title="Farmers Speak" />

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Ready to modernise your farm?</h2>
            <p className="text-muted-foreground mb-8">Schedule a free consultation with our agronomy and technology team.</p>
            <Link href="/contact?subject=Agriculture+Consultation"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-glow hover:scale-105 transition-all"
              style={{ background: "linear-gradient(135deg,#7B2FBE,#C2449F,#F5821F)" }}>
              Request a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
