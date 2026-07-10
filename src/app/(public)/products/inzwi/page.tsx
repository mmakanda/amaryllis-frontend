"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Code2, BookOpen, Zap, Shield, Users } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";

const LANGUAGES = [
  { flag: "🇿🇼", name: "Shona", status: "active", note: "Corpus collection & cleaning underway" },
  { flag: "🇿🇼", name: "Ndebele", status: "active", note: "In scope — data collection starting" },
  { flag: "🌍", name: "Swahili", status: "planned", note: "Planned — Q3 2026" },
  { flag: "🌍", name: "Zulu", status: "planned", note: "Planned — Q3 2026" },
  { flag: "🌍", name: "Yoruba", status: "planned", note: "Planned — Q4 2026" },
  { flag: "🇫🇷", name: "French", status: "planned", note: "ATS school curriculum — Q4 2026" },
  { flag: "🇨🇳", name: "Chinese (Mandarin)", status: "planned", note: "ATS school curriculum — Q4 2026" },
  { flag: "🇪🇸", name: "Spanish", status: "planned", note: "ATS school curriculum — Q4 2026" },
];

const CAPABILITIES = [
  { icon: Globe, title: "Multilingual by Design", desc: "Trained natively on African languages — not translated from English. Shona and Ndebele are first-class citizens, not afterthoughts." },
  { icon: Code2, title: "Public REST API", desc: "A clean, well-documented REST API that any developer can integrate into multilingual web, mobile, or enterprise applications." },
  { icon: BookOpen, title: "African Language NLP", desc: "Text generation, translation, summarisation, and Q&A — all with genuine understanding of African linguistic structure and context." },
  { icon: Zap, title: "Low-Latency Inference", desc: "Optimised for production workloads — fast inference endpoints suitable for real-time applications." },
  { icon: Shield, title: "Contextually Accurate", desc: "Trained on authentic African-language corpora, not machine-translated text — reducing hallucination and cultural misrepresentation." },
  { icon: Users, title: "Enterprise & Research Tiers", desc: "Flexible access tiers for individual researchers, academic institutions, and enterprise clients with SLA guarantees." },
];

const USE_CASES = [
  { icon: "🏥", title: "Healthcare Communication", desc: "Patient-facing health applications that communicate in Shona or Ndebele — critical for rural healthcare access in Zimbabwe." },
  { icon: "📚", title: "Education Technology", desc: "Learning platforms that teach and assess students in their mother tongue — aligned with Zimbabwe's ATS school curriculum." },
  { icon: "🏛️", title: "Government Services", desc: "Digital government services and chatbots that serve citizens in indigenous languages — not just English." },
  { icon: "📰", title: "Media & Publishing", desc: "Automated translation, summarisation, and content generation for African-language media outlets." },
  { icon: "💼", title: "Enterprise Multilingual Apps", desc: "CRM, ERP, and customer service tools that operate across English, Shona, Ndebele, and other African languages." },
  { icon: "🔬", title: "NLP Research", desc: "A research-grade model for academics studying African language processing, linguistics, and computational language preservation." },
];

const STAGES = [
  { stage: "01", title: "Data Collection", status: "active", desc: "Scraping and curating Shona corpora from Wikipedia, news sources, literature, and web sources. Cleaning and deduplication pipeline live." },
  { stage: "02", title: "Corpus Expansion", status: "upcoming", desc: "Expanding to Ndebele, Swahili, Zulu, Yoruba. Synthetic data generation for low-resource language augmentation." },
  { stage: "03", title: "Pre-training", status: "upcoming", desc: "Training the base model on the full multilingual corpus. Architecture optimised for African phonological and morphological patterns." },
  { stage: "04", title: "Fine-tuning & RLHF", status: "upcoming", desc: "Instruction fine-tuning and human feedback alignment. Native Shona and Ndebele speakers involved in evaluation." },
  { stage: "05", title: "API Beta", status: "upcoming", desc: "Private API beta for research partners and early enterprise clients. Documentation, SDKs, and rate-limited access." },
  { stage: "06", title: "Public Launch", status: "upcoming", desc: "Public API with enterprise and research pricing tiers. Full documentation and integration guides." },
];

export default function InzwiPage() {
  const [email, setEmail] = useState("");
  const [type, setType] = useState<"researcher" | "enterprise">("researcher");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      await fetch("https://formsubmit.co/makandamichael@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          subject: `Inzwi LLM Waitlist — ${type === "researcher" ? "Researcher" : "Enterprise"}`,
          message: `New Inzwi waitlist signup:\nEmail: ${email}\nType: ${type === "researcher" ? "Researcher / Academic" : "Enterprise Client"}`,
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
      <section className="relative pt-32 pb-20 overflow-hidden bg-foreground text-white">
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-[0.12] blur-3xl"
          style={{ background: "radial-gradient(circle, #7C3AED, #C2449F)" }} />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: "radial-gradient(circle, #F5821F, #7C3AED)" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white mb-6 transition-colors">
                ← All Products
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">🗣️</span>
                <span className="rounded-full bg-amber-400/20 border border-amber-400/30 px-3 py-1 text-xs font-bold text-amber-300">
                  IN DEVELOPMENT
                </span>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#A78BFA] mb-3">
                Foundational LLM · African Languages
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl mb-4">
                Inzwi
              </h1>
              <p className="text-2xl font-semibold italic mb-2" style={{ color: "#A78BFA" }}>
                Voice for Africa&apos;s Languages.
              </p>
              <p className="text-sm text-white/50 mb-6 italic">
                <em>inzwi</em> — Shona for &ldquo;voice&rdquo;
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
                Inzwi is a foundational large language model being built natively on Shona,
                Ndebele, and other African languages. A public API for any developer building
                multilingual applications — with African languages as first-class citizens,
                not translations.
              </p>

              {/* Waitlist form */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 max-w-lg">
                <p className="text-sm font-bold text-white mb-1">Join the Waitlist</p>
                <p className="text-xs text-white/50 mb-4">Be first for API access. Researchers and enterprise clients both welcome.</p>

                <div className="flex gap-2 mb-4">
                  {(["researcher", "enterprise"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      className={`flex-1 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                        type === t
                          ? "bg-[#7C3AED] text-white"
                          : "border border-white/20 text-white/60 hover:border-white/40"
                      }`}
                    >
                      {t === "researcher" ? "🔬 Researcher / Academic" : "💼 Enterprise Client"}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleWaitlist} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 focus:border-[#7C3AED]"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#7C3AED,#C2449F)" }}
                  >
                    {status === "loading" ? "..." : status === "success" ? "✓ Done" : <ArrowRight className="h-4 w-4" />}
                  </button>
                </form>
                {status === "success" && (
                  <p className="mt-2 text-xs text-[#A78BFA]">✓ You&apos;re on the list — we&apos;ll be in touch.</p>
                )}
                {status === "error" && (
                  <p className="mt-2 text-xs text-red-400">Something went wrong — try again.</p>
                )}
              </div>
            </AnimatedSection>

            {/* Right — language grid */}
            <AnimatedSection delay={0.2} direction="left" className="hidden lg:block">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#A78BFA] mb-6">
                  Languages in Scope
                </p>
                <div className="space-y-3">
                  {LANGUAGES.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="text-xl flex-shrink-0">{lang.flag}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white text-sm">{lang.name}</p>
                        <p className="text-xs text-white/40 truncate">{lang.note}</p>
                      </div>
                      <span className={`flex-shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${
                        lang.status === "active"
                          ? "bg-green-400/20 text-green-300"
                          : "bg-white/10 text-white/40"
                      }`}>
                        {lang.status === "active" ? "ACTIVE" : "PLANNED"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Why Inzwi ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">The Problem We&apos;re Solving</p>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-6">
              Africa&apos;s Languages Have Been Left Behind
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "2,000+", label: "Languages spoken across Africa", color: "#7C3AED" },
              { stat: "<1%", label: "Represented in major LLM training data", color: "#C2449F" },
              { stat: "16M+", label: "Shona speakers — with almost no AI support", color: "#F5821F" },
            ].map((item) => (
              <AnimatedSection key={item.label}>
                <div className="rounded-2xl border border-border bg-gradient-to-b from-primary-50/30 to-white p-7 text-center hover:shadow-card transition-all">
                  <p className="text-4xl font-extrabold mb-2" style={{ color: item.color }}>{item.stat}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10">
            <div className="rounded-2xl border border-[#7C3AED]/20 bg-[#7C3AED]/5 p-8">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Existing large language models — GPT-4, Claude, Gemini — were trained overwhelmingly
                on English and European language data. When they attempt Shona or Ndebele, they
                hallucinate, mistranslate, and misrepresent cultural context.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Inzwi is being built from the ground up with African languages as the primary
                training target — not a fine-tuned afterthought. Authentic corpora. Native speaker
                evaluation. Infrastructure that actually works for African developers and their users.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────── */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">What It Will Do</p>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">API Capabilities</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-white p-6 hover:shadow-card hover:border-[#7C3AED]/20 transition-all h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#7C3AED]/10">
                    <cap.icon className="h-5 w-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Build Roadmap ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Build Roadmap</p>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Where We Are</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {STAGES.map((s, i) => (
              <AnimatedSection key={s.stage} delay={i * 0.08}>
                <div className={`flex gap-5 rounded-2xl border p-6 transition-all ${
                  s.status === "active"
                    ? "border-[#7C3AED]/30 bg-[#7C3AED]/5"
                    : "border-border bg-white"
                }`}>
                  <div className="flex-shrink-0">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center text-xs font-extrabold ${
                      s.status === "active"
                        ? "bg-[#7C3AED] text-white"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {s.stage}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-foreground">{s.title}</h3>
                      {s.status === "active" && (
                        <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700">
                          IN PROGRESS
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ─────────────────────────────────────── */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Who It&apos;s For</p>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              What You Can Build with Inzwi
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((uc, i) => (
              <AnimatedSection key={uc.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-white p-6 hover:shadow-card hover:border-[#7C3AED]/20 transition-all h-full">
                  <span className="text-2xl mb-3 block">{uc.icon}</span>
                  <h3 className="font-bold text-foreground mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing tiers preview ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Access Tiers</p>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Built for Both Research and Enterprise</h2>
            <p className="mt-4 text-muted-foreground">Pricing will be confirmed at API launch. Join the waitlist to be first and lock in early-access rates.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                tier: "Research",
                icon: "🔬",
                color: "#7C3AED",
                desc: "For academic researchers, linguists, and NLP teams studying African languages.",
                features: [
                  "Generous free tier for non-commercial research",
                  "Access to model weights for academic use",
                  "Co-authorship opportunities on published research",
                  "Direct access to the Inzwi research team",
                  "Priority access to new language releases",
                ],
                cta: "Join Research Waitlist",
              },
              {
                tier: "Enterprise",
                icon: "💼",
                color: "#C2449F",
                desc: "For businesses building multilingual applications, products, or services.",
                features: [
                  "High-volume API access with SLA guarantees",
                  "Custom fine-tuning on your domain data",
                  "Dedicated support and integration assistance",
                  "On-premise deployment option",
                  "White-label licensing available",
                ],
                cta: "Join Enterprise Waitlist",
              },
            ].map((tier) => (
              <AnimatedSection key={tier.tier}>
                <div className="h-full rounded-2xl border-2 p-8 hover:shadow-card transition-all"
                  style={{ borderColor: `${tier.color}30` }}>
                  <span className="text-3xl mb-3 block">{tier.icon}</span>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: tier.color }}>
                    {tier.tier} Tier
                  </p>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{tier.desc}</p>
                  <ul className="space-y-2.5 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className="mt-0.5 h-4 w-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold"
                          style={{ background: tier.color }}>✓</span>
                        <span className="text-sm text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-5xl mb-6 block">🗣️</span>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Help us give Africa its voice.
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Whether you&apos;re a researcher, a developer, or an enterprise — join the
              Inzwi waitlist and be part of building the foundational AI layer for
              Africa&apos;s languages.
            </p>
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 disabled:opacity-60 flex-shrink-0 inline-flex items-center gap-2"
                style={{ background: "linear-gradient(135deg,#7C3AED,#C2449F)" }}
              >
                {status === "success" ? "✓ You're on the list!" : <>Join Waitlist <ArrowRight className="h-4 w-4" /></>}
              </button>
            </form>
            <p className="text-xs text-white/30">
              Or email us directly at{" "}
              <a href="mailto:support@amaryllissuccess.co.zw" className="text-white/50 hover:text-white underline">
                support@amaryllissuccess.co.zw
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

