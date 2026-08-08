import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import { PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Amaryllis Success is a Zimbabwe-based AI products and expert services company operating across agriculture, construction, and digital transformation.",
};

const UNITS = [
  {
    number: "01",
    icon: "🤖",
    name: "AI & Digital Products",
    color: "#7B2FBE",
    desc: "We own and operate five deployed AI products — LexiZW, Mudhumeni, BOQ Generator, ResearchMind, and Amara. Built in-house, serving real users across Zimbabwe today.",
  },
  {
    number: "02",
    icon: "💼",
    name: "Enterprise IT & Managed Services",
    color: "#0284C7",
    desc: "Architecture consulting, system integration, managed IT infrastructure, and custom software development for enterprise clients across Zimbabwe.",
  },
  {
    number: "03",
    icon: "🌱",
    name: "Smart Agriculture & AgriTech",
    color: "#16A34A",
    desc: "Precision farming advisory, IoT deployment, agricultural AI services, and field-level support — combining technology with deep local agronomic knowledge.",
  },
  {
    number: "04",
    icon: "🏗️",
    name: "Engineering & Civil Construction",
    color: "#D97706",
    desc: "Site management, BOQ preparation, road construction, stormwater systems, and civil infrastructure delivery to national standards.",
  },
  {
    number: "05",
    icon: "🔭",
    name: "Research & Innovation",
    color: "#C2449F",
    desc: "Emerging technology research and innovation partnerships — actively exploring the next generation of AI tools for the African context.",
  },
];

const VALUES = [
  { icon: "🎯", title: "Built for Context", desc: "Every product and service is designed for Zimbabwean conditions — infrastructure constraints, regulatory realities, and market dynamics included." },
  { icon: "⚡", title: "Bias for Action", desc: "We ship. LexiZW, Mudhumeni, BOQ Generator — all built, deployed, and in use. We learn by doing, not by planning in perpetuity." },
  { icon: "🔬", title: "Evidence-Driven", desc: "Our outcomes are measurable. 60% crop loss reduction. 85% faster BOQs. 78% fewer errors. We build to deliver results, not demos." },
  { icon: "🤝", title: "Long-Term Partnerships", desc: "We don't parachute in and disappear. Our relationships with clients are built for the long term — support, iteration, and growth together." },
];

const TIMELINE = [
  { year: "2022", event: "Amaryllis Success founded in Harare, Zimbabwe. Initial focus on agricultural advisory and civil construction services." },
  { year: "2023", event: "Mudhumeni launched — AI crop disease detection app built for Zimbabwean farmers. First 500 farmers onboarded across Mashonaland." },
  { year: "2024", event: "BOQ Generator deployed, cutting BOQ preparation from 3 weeks to 2 days for construction clients. Amaryllis expands into IT consultancy." },
  { year: "2025", event: "LexiZW launched — Zimbabwe's first AI legal research assistant. ResearchMind and Amara deployed. Amaryllis completes rebrand as a 5-unit AI products company." },
  { year: "2026", event: "Mudhumeni reaches 3,000+ farmers. Full product portfolio live. Enterprise IT and Managed Services unit formalised. Expansion beyond Zimbabwe being planned." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-hero-mesh overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-[0.06] blur-3xl"
          style={{ background: "radial-gradient(circle, #7B2FBE, #C2449F, #F5821F)" }} />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-orange">About Amaryllis Success</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl mb-6">
              Built in Zimbabwe.{" "}
              <span className="text-flame">Built for Scale.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
              We build AI-powered products and deliver expert services across agriculture,
              construction, and digital transformation — with a team that understands
              Zimbabwe&apos;s realities from the ground up.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-orange">Our Story</p>
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-6">
                We Decided to Build Our Own
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Amaryllis Success started with a simple observation: the tools being built for
                  African businesses were either too generic to work in local conditions, or too
                  expensive to deploy at scale.
                </p>
                <p>
                  So we started building our own. Mudhumeni for farmers who needed crop disease
                  detection that worked without reliable internet. BOQ Generator for construction
                  teams spending weeks on documents that AI could handle in hours. LexiZW for
                  legal professionals navigating a corpus of Zimbabwean case law that had never
                  been made searchable before.
                </p>
                <p>
                  Today we operate across agriculture, construction, and digital technology —
                  with five AI products deployed in the field and a team that understands
                  Zimbabwe&apos;s infrastructure, regulations, and market realities from the
                  ground up.
                </p>
                <p>
                  We&apos;re not a consultancy that dabbles in AI. We&apos;re an AI products
                  company that also delivers expert services — because we understand both worlds.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats panel */}
            <AnimatedSection delay={0.15} direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "5", label: "AI Products Live", color: "#7B2FBE" },
                  { stat: "3,000+", label: "Farmers Reached", color: "#16A34A" },
                  { stat: "50+", label: "Projects Delivered", color: "#D97706" },
                  { stat: "4+", label: "Years Operating", color: "#C2449F" },
                  { stat: "85%", label: "Faster BOQs", color: "#0284C7" },
                  { stat: "60%", label: "Crop Loss Reduction", color: "#16A34A" },
                ].map((item) => (
                  <div key={item.label}
                    className="rounded-2xl border border-border bg-gradient-to-b from-primary-50/30 to-white p-6 text-center hover:shadow-card transition-all">
                    <p className="text-3xl font-extrabold mb-1" style={{ color: item.color }}>{item.stat}</p>
                    <p className="text-xs text-muted-foreground leading-tight">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Five Business Units ───────────────────────────── */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">How We&apos;re Organised</p>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Five Business Units</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Each unit operates with its own expertise and delivery team — united by a shared
              commitment to AI-first, evidence-driven outcomes.
            </p>
          </AnimatedSection>

          <div className="space-y-5">
            {UNITS.map((unit, i) => (
              <AnimatedSection key={unit.number} delay={i * 0.08}>
                <div className="flex flex-col sm:flex-row gap-6 rounded-2xl border border-border bg-white p-7 hover:shadow-card hover:border-brand-purple/20 transition-all">
                  <div className="flex items-start gap-4 sm:w-64 flex-shrink-0">
                    <span className="text-3xl">{unit.icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: unit.color }}>
                        Unit {unit.number}
                      </p>
                      <h3 className="font-extrabold text-foreground">{unit.name}</h3>
                    </div>
                  </div>
                  <div className="flex-1 sm:border-l sm:border-border sm:pl-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">{unit.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Our Products</p>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Five AI Products. All Live.</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              We don&apos;t just talk about AI — we build it, deploy it, and put it in the hands of real users.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 0.08}>
                <Link href={p.href} className="group block h-full">
                  <div className="h-full rounded-2xl border border-border bg-gradient-to-b from-primary-50/30 to-white p-6 hover:shadow-card hover:border-brand-purple/20 transition-all flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <p.icon className="h-8 w-8" style={{ color: p.color }} strokeWidth={2} />
                      {p.status === "live" && (
                        <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-bold text-success">LIVE</span>
                      )}
                      {p.status === "beta" && (
                        <span className="rounded-full bg-info/10 px-2.5 py-1 text-xs font-bold text-info">COMING SOON</span>
                      )}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: p.color }}>{p.tag}</p>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-brand-purple transition-colors">{p.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.tagline}</p>
                    <div className="mt-4 pt-3 border-t border-border">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-purple group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────── */}
      <section className="py-24 bg-foreground text-white overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Our Journey</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">How We Got Here</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-white/10 hidden sm:block" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.1}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-20 text-right hidden sm:block">
                      <span className="text-sm font-extrabold text-brand-orange">{item.year}</span>
                    </div>
                    <div className="hidden sm:flex flex-shrink-0 w-4 h-4 rounded-full border-2 border-brand-orange bg-foreground mt-1 relative z-10" />
                    <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                      <p className="text-xs font-bold text-brand-orange mb-1 sm:hidden">{item.year}</p>
                      <p className="text-sm text-white/80 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">What We Stand For</p>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Our Values</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="flex gap-5 rounded-2xl border border-border bg-gradient-to-b from-primary-50/30 to-white p-7 hover:shadow-card hover:border-brand-purple/20 transition-all h-full">
                  <span className="text-3xl flex-shrink-0">{v.icon}</span>
                  <div>
                    <h3 className="font-extrabold text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20"
        style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Work with us.
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Whether you need a product, a service, or a partnership — we&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-brand-purple shadow-md hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="rounded-xl border-2 border-white/50 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore Our Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

