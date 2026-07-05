import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Search, FileText, Shield, BookOpen, Scale, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";

export const metadata: Metadata = {
  title: "LexiZW — Legal Research AI | Amaryllis Success",
  description:
    "Zimbabwe's first AI legal research assistant. Search case law, statutes, and legal precedents in plain language — sourced from Zimbabwean legal databases.",
};

const CAPABILITIES = [
  { icon: Search, title: "Natural Language Search", desc: "Ask legal questions in plain English — no boolean operators or database syntax required." },
  { icon: BookOpen, title: "Case Law & Precedents", desc: "Search and summarise Zimbabwean case law with source citations included." },
  { icon: FileText, title: "Statute Lookup", desc: "Find and interpret legislation in plain language across all Zimbabwean statutes." },
  { icon: Scale, title: "Precedent Analysis", desc: "Understand how courts have applied the law across similar cases." },
  { icon: Shield, title: "Secure & Private", desc: "No data leaves your session. Your research stays confidential." },
  { icon: CheckCircle2, title: "Citation Generation", desc: "Auto-generate properly formatted legal citations for any result." },
];

const USE_CASES = [
  { role: "⚖️ Lawyers & Advocates", desc: "Research precedents and prepare submissions faster — without junior associate hours." },
  { role: "🏛️ Law Firms", desc: "Reduce research overhead and give every fee-earner instant access to the full legal corpus." },
  { role: "📚 Legal Researchers", desc: "Synthesise case law and legislation across topics in minutes, not days." },
  { role: "🏢 Compliance Teams", desc: "Stay current on regulatory changes and understand your legal obligations clearly." },
  { role: "🏛️ Government Bodies", desc: "Quickly reference legislation, precedent, and regulatory frameworks." },
  { role: "🎓 Law Students", desc: "Accelerate research, understand judgments, and prepare for moots." },
];

export default function LexiZWPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-hero-mesh overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: "radial-gradient(circle, #7B2FBE, #C2449F)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline mb-6">
                ← All Products
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">⚖️</span>
                <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">LIVE</span>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple mb-3">Legal AI</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl mb-4">
                LexiZW
              </h1>
              <p className="text-xl font-semibold text-brand-purple/80 italic mb-4">
                Zimbabwe&apos;s first AI legal research assistant.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Search Zimbabwean case law, statutes, and legal precedents in plain language.
                Ask a question — get a researched, sourced answer in seconds.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://lexizw.amaryllissuccess.co.zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:shadow-glow-lg hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#7B2FBE 0%,#C2449F 60%,#F5821F 100%)" }}
                >
                  Try LexiZW <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-purple px-7 py-3.5 text-base font-semibold text-brand-purple transition-all hover:bg-primary-50"
                >
                  Enquire for Your Firm <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Right — mock UI card */}
            <AnimatedSection delay={0.2} direction="left" className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl border border-brand-purple/10 bg-primary-50" />
                <div className="relative rounded-3xl border border-border bg-white shadow-card p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center text-xl bg-primary-50">⚖️</div>
                    <div>
                      <p className="font-bold text-foreground">LexiZW</p>
                      <p className="text-xs text-muted-foreground">Legal Research AI</p>
                    </div>
                    <span className="ml-auto rounded-full bg-success/10 px-2.5 py-1 text-xs font-bold text-success">LIVE</span>
                  </div>
                  <div className="rounded-xl border border-border bg-muted p-4 mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Ask a legal question</p>
                    <p className="text-sm font-medium text-foreground">
                      &ldquo;What are the grounds for unfair dismissal under Zimbabwean labour law?&rdquo;
                    </p>
                  </div>
                  <div className="rounded-xl border border-brand-purple/20 bg-primary-50 p-4 space-y-2">
                    <p className="text-xs font-bold text-brand-purple uppercase tracking-widest">AI Research Result</p>
                    <p className="text-sm text-foreground leading-relaxed">
                      Under the Labour Act [Chapter 28:01], Section 12B, an employee may claim unfair dismissal where the employer fails to prove a valid reason...
                    </p>
                    <div className="flex items-center gap-2 pt-1 flex-wrap">
                      <span className="rounded-full bg-brand-purple/10 px-2 py-0.5 text-xs text-brand-purple font-medium">Labour Act</span>
                      <span className="rounded-full bg-brand-purple/10 px-2 py-0.5 text-xs text-brand-purple font-medium">3 cases cited</span>
                    </div>
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
                <div className="rounded-2xl border border-border bg-gradient-to-b from-primary-50/40 to-white p-6 hover:shadow-card hover:border-brand-purple/20 transition-all h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10">
                    <cap.icon className="h-5 w-5 text-brand-purple" />
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
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Built for Zimbabwe&apos;s Legal Community</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((uc, i) => (
              <AnimatedSection key={uc.role} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-white p-6 hover:shadow-card hover:border-brand-purple/20 transition-all h-full">
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
        style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Ready to research smarter?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Try LexiZW free or talk to us about a firm-wide deployment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://lexizw.amaryllissuccess.co.zw"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-brand-purple shadow-md hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Try LexiZW <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="rounded-xl border-2 border-white/50 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Talk to Our Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

