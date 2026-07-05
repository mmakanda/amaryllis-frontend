import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Upload, FileSpreadsheet, Clock, CheckCircle2, Building2, Layers } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";

export const metadata: Metadata = {
  title: "BOQ Generator — Construction AI | Amaryllis Success",
  description:
    "AI-powered Bill of Quantities generation from engineering drawings. Reduce BOQ preparation from 3 weeks to 2 days. Built for Zimbabwe construction standards.",
};

const CAPABILITIES = [
  { icon: Upload, title: "Drawing Upload", desc: "Upload PDF or image drawings — AI extracts dimensions, materials, and specifications automatically." },
  { icon: FileSpreadsheet, title: "Structured BOQ Output", desc: "Generates a complete BOQ with line items, quantities, unit rates, and totals." },
  { icon: Clock, title: "Hours, Not Weeks", desc: "Reduce BOQ preparation from 3 weeks to 2 days — freeing your team for higher-value work." },
  { icon: CheckCircle2, title: "78% Fewer Errors", desc: "AI extraction eliminates manual transcription errors that cause costly tender disputes." },
  { icon: Building2, title: "Zimbabwe Standards", desc: "Built to local construction standards — residential, commercial, and civil infrastructure." },
  { icon: Layers, title: "Excel & PDF Export", desc: "Export the generated BOQ directly to Excel for editing or PDF for submission." },
];

const OUTCOMES = [
  { stat: "85%", label: "Faster BOQ preparation" },
  { stat: "78%", label: "Error rate reduction" },
  { stat: "2 days", label: "From drawings to BOQ" },
  { stat: "3 weeks", label: "Time saved per project" },
];

const USE_CASES = [
  { role: "📐 Quantity Surveyors", desc: "Handle more projects simultaneously without sacrificing accuracy — let AI do the extraction." },
  { role: "👷 Civil Engineers", desc: "Generate BOQs directly from your own drawings without QS dependency for every tender." },
  { role: "🏗️ Construction Firms", desc: "Submit more competitive tenders faster with consistent, accurate pricing documents." },
  { role: "📊 Project Managers", desc: "Keep cost estimates current throughout the project lifecycle with quick BOQ revisions." },
  { role: "🏢 Developers", desc: "Get reliable cost estimates early in the design process to inform feasibility decisions." },
  { role: "🏛️ Government Procurement", desc: "Standardise BOQ quality across departments with consistent AI-generated documents." },
];

export default function BOQGeneratorPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(217,119,6,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(123,47,190,0.06) 0%, transparent 55%), #ffffff" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline mb-6">
                ← All Products
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">📋</span>
                <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">LIVE</span>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#D97706] mb-3">Construction AI</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl mb-4">
                BOQ Generator
              </h1>
              <p className="text-xl font-semibold italic mb-4" style={{ color: "#D97706" }}>
                From engineering drawings to BOQ — in hours, not weeks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Upload engineering drawings and get a structured Bill of Quantities
                automatically. Reduces preparation time by 85% and error rate by 78%.
                Built for Zimbabwe construction standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://boq.amaryllissuccess.co.zw/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#D97706 0%,#F59E0B 100%)" }}
                >
                  Try BOQ Generator <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border-2 px-7 py-3.5 text-base font-semibold transition-all hover:bg-amber-50"
                  style={{ borderColor: "#D97706", color: "#D97706" }}
                >
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Right — process + outcomes */}
            <AnimatedSection delay={0.2} direction="left" className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl border border-amber-200 bg-amber-50/50" />
                <div className="relative rounded-3xl border border-border bg-white shadow-card p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#D97706] mb-4">Proven Results</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {OUTCOMES.map((o) => (
                      <div key={o.label} className="rounded-2xl bg-amber-50 border border-amber-100 p-4 text-center">
                        <p className="text-2xl font-extrabold text-[#D97706]">{o.stat}</p>
                        <p className="text-xs text-muted-foreground mt-1">{o.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                    <p className="text-xs font-bold text-[#D97706] uppercase tracking-widest mb-2">Simple workflow</p>
                    {["📄 Upload engineering drawings", "🤖 AI extracts dimensions & materials", "📋 Structured BOQ generated", "📊 Export to Excel or PDF"].map((step) => (
                      <p key={step} className="text-sm text-foreground py-1 border-b border-amber-100 last:border-0">{step}</p>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">What It Does</p>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Key Capabilities</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-gradient-to-b from-amber-50/40 to-white p-6 hover:shadow-card hover:border-amber-300 transition-all h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                    <cap.icon className="h-5 w-5 text-[#D97706]" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ─────────────────────────────────── */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Who It&apos;s For</p>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Built for Zimbabwe&apos;s Construction Sector</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((uc, i) => (
              <AnimatedSection key={uc.role} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-white p-6 hover:shadow-card hover:border-amber-300 transition-all h-full">
                  <p className="font-bold text-foreground mb-2">{uc.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20"
        style={{ background: "linear-gradient(135deg, #D97706 0%, #F59E0B 60%, #F5821F 100%)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Stop spending weeks on BOQs.
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Try the BOQ Generator or request a demo for your team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://boq.amaryllissuccess.co.zw/auth/login"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-8 py-3.5 text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
                style={{ color: "#D97706" }}
              >
                Try BOQ Generator <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="rounded-xl border-2 border-white/50 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

