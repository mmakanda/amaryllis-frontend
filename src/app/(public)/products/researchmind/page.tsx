"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, FileText, GitMerge, MessageSquare, BookMarked, Search, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";

const CAPABILITIES = [
  { icon: FileText, title: "Document Summarisation", desc: "Upload PDFs or paste text — get a structured summary with key points extracted automatically." },
  { icon: GitMerge, title: "Multi-Source Synthesis", desc: "Compare and synthesise findings across multiple sources into a single coherent analysis." },
  { icon: Search, title: "Literature Review", desc: "Accelerate literature reviews — ResearchMind surfaces relevant themes and gaps across your sources." },
  { icon: MessageSquare, title: "Q&A Over Documents", desc: "Ask questions directly about your uploaded research material and get sourced answers." },
  { icon: BookMarked, title: "Citation Assistance", desc: "Generate and manage citations and references for your research outputs." },
  { icon: CheckCircle2, title: "Insight Extraction", desc: "Surface key findings, methodologies, and conclusions across large document sets." },
];

const USE_CASES = [
  { role: "🎓 Academic Researchers", desc: "Cut literature review time from weeks to days — surface insights across hundreds of papers." },
  { role: "📊 Analysts & Consultants", desc: "Synthesise reports, policies, and industry data into structured briefings faster." },
  { role: "📰 Journalists", desc: "Research stories thoroughly across multiple sources without reading every document in full." },
  { role: "🏛️ Policy Professionals", desc: "Understand legislation, research, and precedent quickly to inform policy decisions." },
  { role: "🎒 Students", desc: "Understand complex papers, compare sources, and build well-cited arguments efficiently." },
  { role: "💼 Business Researchers", desc: "Monitor competitor intelligence, market reports, and industry research at scale." },
];

export default function ResearchMindPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch(`https://formsubmit.co/makandamichael@gmail.com`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          subject: "ResearchMind Waitlist Signup",
          message: `New waitlist signup: ${email}`,
          _captcha: "false",
        }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(2,132,199,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(123,47,190,0.06) 0%, transparent 55%), #ffffff" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline mb-6">
                ← All Products
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">🔬</span>
                <span className="rounded-full bg-info/10 px-3 py-1 text-xs font-bold text-info">REVAMP IN PROGRESS</span>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#0284C7] mb-3">Research AI</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl mb-4">
                ResearchMind
              </h1>
              <p className="text-xl font-semibold italic mb-4" style={{ color: "#0284C7" }}>
                Research faster. Think deeper.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg">
                ResearchMind helps academics, analysts, and professionals cut through
                information overload. Upload papers, paste URLs, or ask questions —
                get structured insights, summaries, and citations instantly.
              </p>
              <div className="rounded-xl border border-info/20 bg-info/5 px-5 py-4 mb-8 max-w-lg">
                <p className="text-sm font-semibold text-info mb-1">🔧 Revamp in progress</p>
                <p className="text-sm text-muted-foreground">
                  A significantly improved version of ResearchMind is in active development.
                  Join the waitlist for early access.
                </p>
              </div>

              {/* Waitlist form */}
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#0284C7]/30 focus:border-[#0284C7]"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg,#0284C7 0%,#0EA5E9 100%)" }}
                >
                  {status === "loading" ? "Joining..." : status === "success" ? "✓ You're on the list!" : <>Join Waitlist <ArrowRight className="h-4 w-4" /></>}
                </button>
              </form>
              {status === "error" && (
                <p className="mt-2 text-xs text-red-500">Something went wrong — try again or email us directly.</p>
              )}
            </AnimatedSection>

            {/* Right — capability preview */}
            <AnimatedSection delay={0.2} direction="left" className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl border border-sky-200 bg-sky-50/50" />
                <div className="relative rounded-3xl border border-border bg-white shadow-card p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center text-xl bg-sky-50">🔬</div>
                    <div>
                      <p className="font-bold text-foreground">ResearchMind</p>
                      <p className="text-xs text-muted-foreground">Research AI Assistant</p>
                    </div>
                    <span className="ml-auto rounded-full bg-info/10 px-2.5 py-1 text-xs font-bold text-info">COMING SOON</span>
                  </div>
                  <div className="rounded-xl border border-border bg-muted p-4 mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Upload documents or ask a question</p>
                    <p className="text-sm font-medium text-foreground">
                      &ldquo;Summarise the key findings across these 3 papers on climate-smart agriculture in sub-Saharan Africa.&rdquo;
                    </p>
                  </div>
                  <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 space-y-2">
                    <p className="text-xs font-bold text-[#0284C7] uppercase tracking-widest">AI Synthesis</p>
                    <p className="text-sm text-foreground leading-relaxed">
                      Across all three papers, the central finding is that drought-tolerant varieties combined with precision irrigation...
                    </p>
                    <div className="flex items-center gap-2 pt-1 flex-wrap">
                      <span className="rounded-full bg-[#0284C7]/10 px-2 py-0.5 text-xs text-[#0284C7] font-medium">3 sources</span>
                      <span className="rounded-full bg-[#0284C7]/10 px-2 py-0.5 text-xs text-[#0284C7] font-medium">12 citations</span>
                    </div>
                  </div>
                  <div className="mt-4 rounded-xl border border-dashed border-sky-300 p-3 text-center">
                    <p className="text-xs text-muted-foreground">🔧 Enhanced version launching soon</p>
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
                <div className="rounded-2xl border border-border bg-gradient-to-b from-sky-50/40 to-white p-6 hover:shadow-card hover:border-sky-300 transition-all h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100">
                    <cap.icon className="h-5 w-5 text-[#0284C7]" />
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
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Built for Researchers & Analysts</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((uc, i) => (
              <AnimatedSection key={uc.role} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-white p-6 hover:shadow-card hover:border-sky-300 transition-all h-full">
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
        style={{ background: "linear-gradient(135deg, #0284C7 0%, #0EA5E9 60%, #7B2FBE 100%)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Be first when ResearchMind launches.
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join the waitlist and get early access to the revamped version.
            </p>
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0284C7] hover:shadow-lg hover:scale-105 transition-all disabled:opacity-60"
              >
                {status === "success" ? "✓ On the list!" : "Join Waitlist"}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

