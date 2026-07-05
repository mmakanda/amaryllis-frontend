import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import { PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products | Amaryllis Success",
  description:
    "Five AI products built for Zimbabwe — LexiZW, Mudhumeni, BOQ Generator, ResearchMind, and Amara. Deployed, in use, and delivering results.",
};

const PRODUCT_DETAILS: Record<string, { capabilities: string[]; outcomes?: string[]; audience: string; note?: string }> = {
  lexizw: {
    audience: "Legal professionals, law firms, researchers, compliance teams, government bodies.",
    capabilities: [
      "Natural language search across Zimbabwean legal sources",
      "Case law summaries and precedent analysis",
      "Statute lookup and plain-language interpretation",
      "Citation generation",
      "Secure — no data leaves your session",
    ],
  },
  mudhumeni: {
    audience: "Smallholder farmers, commercial farms, agricultural extension officers, agribusiness.",
    capabilities: [
      "Instant crop disease detection from a smartphone photo",
      "Trained on 50,000+ images of Zimbabwean crops",
      "Works on-device — no reliable internet required",
      "AI-driven yield prediction and soil analysis",
      "Irrigation scheduling advisory",
      "Available in English and Shona",
    ],
    outcomes: [
      "Up to 60% reduction in crop loss",
      "3,000+ farmers across Mashonaland and Manicaland",
    ],
  },
  "boq-generator": {
    audience: "Quantity surveyors, civil engineers, construction firms, project managers, developers.",
    capabilities: [
      "Upload PDF or image drawings — AI extracts dimensions automatically",
      "Generates structured BOQ with line items, quantities, and unit rates",
      "Export to Excel or PDF",
      "Supports residential, commercial, and civil infrastructure projects",
      "Built to Zimbabwe construction standards",
    ],
    outcomes: [
      "BOQ preparation time reduced from 3 weeks to 2 days",
      "Error rate dropped by 78%",
    ],
  },
  researchmind: {
    audience: "Researchers, students, analysts, journalists, consultants, policy professionals.",
    capabilities: [
      "Document summarisation — upload PDFs or paste text",
      "Multi-source synthesis and comparison",
      "Literature review acceleration",
      "Q&A over uploaded research material",
      "Citation and reference management assistance",
    ],
    note: "Revamp in progress — join the waitlist to get early access.",
  },
  amara: {
    audience: "Anyone visiting the Amaryllis platform. Also available as an enterprise deployment.",
    capabilities: [
      "Natural language answers about Amaryllis products and services",
      "24/7 availability at near-zero marginal cost",
      "Full conversation history",
      "No third-party data exposure",
      "Enterprise deployment available — fine-tuned on your knowledge base",
    ],
    outcomes: [
      "70% of routine enquiries handled without human intervention",
    ],
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 bg-hero-mesh overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: "radial-gradient(circle, #7B2FBE, #C2449F)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-orange">
              Our Products
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl mb-6">
              AI Tools Built for the{" "}
              <span className="text-flame">Work That Matters</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
              Amaryllis Success owns and operates five AI products — each addressing a real,
              specific problem faced by professionals, farmers, builders, researchers, and
              businesses across Zimbabwe.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Product detail cards ─────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {PRODUCTS.map((product, i) => {
            const detail = PRODUCT_DETAILS[product.id];
            const isEven = i % 2 === 0;

            return (
              <AnimatedSection key={product.id} delay={0.05}>
                <div className="rounded-3xl border border-border bg-gradient-to-br from-white to-primary-50/30 p-8 lg:p-10 hover:shadow-card transition-all">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${!isEven ? "lg:grid-flow-dense" : ""}`}>

                    {/* Left — info */}
                    <div className={!isEven ? "lg:col-start-2" : ""}>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl text-4xl border border-border bg-white shadow-sm flex-shrink-0">
                          {product.emoji}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h2 className="text-2xl font-extrabold text-foreground">{product.label}</h2>
                            {product.status === "live" && (
                              <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">LIVE</span>
                            )}
                            {product.status === "beta" && (
                              <span className="rounded-full bg-info/10 px-3 py-1 text-xs font-bold text-info">REVAMP IN PROGRESS</span>
                            )}
                          </div>
                          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: product.color }}>
                            {product.tag}
                          </p>
                        </div>
                      </div>

                      <p className="text-lg font-semibold text-brand-purple italic mb-3">
                        {product.tagline}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-5">
                        {product.description}
                      </p>

                      <p className="text-sm font-semibold text-foreground mb-1">Who it&apos;s for</p>
                      <p className="text-sm text-muted-foreground mb-6">{detail?.audience}</p>

                      {detail?.note && (
                        <div className="rounded-xl border border-info/20 bg-info/5 px-4 py-3 mb-6">
                          <p className="text-sm text-info font-medium">{detail.note}</p>
                        </div>
                      )}

                      {/* Outcomes */}
                      {detail?.outcomes && (
                        <div className="rounded-xl border border-success/20 bg-success/5 px-4 py-4 mb-6">
                          <p className="text-xs font-bold uppercase tracking-widest text-success mb-2">Outcomes</p>
                          {detail.outcomes.map((o) => (
                            <div key={o} className="flex items-center gap-2 text-sm text-success font-medium">
                              <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                              {o}
                            </div>
                          ))}
                        </div>
                      )}

                      <Link
                        href={product.id === "researchmind" ? "/contact" : product.href}
                        className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-glow hover:scale-105 transition-all"
                        style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)" }}
                      >
                        {product.ctaLabel} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>

                    {/* Right — capabilities */}
                    <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-4">
                          Key Capabilities
                        </p>
                        <ul className="space-y-3">
                          {detail?.capabilities.map((cap) => (
                            <li key={cap} className="flex items-start gap-3">
                              <span
                                className="mt-1 h-5 w-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                                style={{ background: product.color }}
                              >
                                ✓
                              </span>
                              <span className="text-sm text-foreground leading-relaxed">{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20"
        style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Want a product demo or custom build?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Talk to our team — we'll find the right solution for your business.
            </p>
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-brand-purple shadow-md hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

