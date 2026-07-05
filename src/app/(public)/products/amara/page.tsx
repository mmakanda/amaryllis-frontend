import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Clock, Shield, Zap, BarChart3, Settings } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";

export const metadata: Metadata = {
  title: "Amara — AI Business Assistant | Amaryllis Success",
  description:
    "Amara is Amaryllis's always-on AI assistant — answering questions, handling enquiries, and available 24/7. Also available as an enterprise deployment for your business.",
};

const CAPABILITIES = [
  { icon: Bot, title: "Natural Language Understanding", desc: "Amara understands plain language questions — no commands or keywords required." },
  { icon: Clock, title: "24/7 Availability", desc: "Always on, at near-zero marginal cost per conversation — even at 2am." },
  { icon: Shield, title: "No Third-Party Data Exposure", desc: "Conversations stay within the platform. No data sent to external AI services." },
  { icon: Zap, title: "Instant Response", desc: "Sub-second responses to common enquiries — no hold times, no queues." },
  { icon: BarChart3, title: "Conversation Analytics", desc: "Understand what your customers are asking most — valuable product and service intelligence." },
  { icon: Settings, title: "Enterprise Fine-Tuning", desc: "Train Amara on your own knowledge base for your business — products, FAQs, policies." },
];

const ENTERPRISE_FEATURES = [
  "Fine-tuned on your product and service knowledge base",
  "Integrated with your existing systems via API",
  "Full conversation history and audit trail",
  "Handles 70% of routine enquiries without human intervention",
  "Seamless handoff to human agents for complex issues",
  "White-label deployment under your brand",
];

const USE_CASES = [
  { role: "🛒 Retail & E-commerce", desc: "Handle order enquiries, product questions, and returns automatically — 24/7." },
  { role: "🏥 Healthcare", desc: "Answer appointment, service, and general health information queries at scale." },
  { role: "🏦 Financial Services", desc: "Respond to account, product, and eligibility questions without agent overhead." },
  { role: "🏢 Enterprise", desc: "Internal knowledge base assistant — give employees instant answers to HR, IT, and policy questions." },
  { role: "🎓 Education", desc: "Student enquiry handling for admissions, fees, timetables, and course information." },
  { role: "🏗️ Construction & Services", desc: "Handle project enquiries, quoting requests, and service availability questions." },
];

export default function AmaraPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(194,68,159,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(123,47,190,0.08) 0%, transparent 55%), #ffffff" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline mb-6">
                ← All Products
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">🤖</span>
                <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">LIVE</span>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#C2449F] mb-3">AI Assistant</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl mb-4">
                Amara
              </h1>
              <p className="text-xl font-semibold italic mb-4" style={{ color: "#C2449F" }}>
                Your always-on AI business assistant.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg">
                Amara answers questions, handles enquiries, and connects visitors to the right
                team — 24/7, at near-zero marginal cost. Live on this website right now.
                Also available as an enterprise deployment for your business.
              </p>
              <div className="rounded-xl border border-pink-200 bg-pink-50 px-5 py-4 mb-8 max-w-lg">
                <p className="text-sm font-semibold text-[#C2449F] mb-1">💬 Try Amara now</p>
                <p className="text-sm text-muted-foreground">
                  Amara is live on this site — click the chat icon in the bottom right corner to start a conversation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#7B2FBE 0%,#C2449F 100%)" }}
                >
                  Deploy Amara for My Business <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Right — chat UI mockup */}
            <AnimatedSection delay={0.2} direction="left" className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl border border-pink-200 bg-pink-50/50" />
                <div className="relative rounded-3xl border border-border bg-white shadow-card overflow-hidden">
                  {/* Chat header */}
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-border"
                    style={{ background: "linear-gradient(135deg,#7B2FBE 0%,#C2449F 100%)" }}>
                    <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center text-lg">🤖</div>
                    <div>
                      <p className="font-bold text-white text-sm">Amara</p>
                      <p className="text-white/70 text-xs">AI Assistant · Online</p>
                    </div>
                    <span className="ml-auto h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  {/* Chat messages */}
                  <div className="p-5 space-y-4 bg-gray-50">
                    <div className="flex gap-2">
                      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-purple to-pink-500 flex items-center justify-center text-white text-xs flex-shrink-0">A</div>
                      <div className="rounded-2xl rounded-tl-sm bg-white border border-border px-4 py-2.5 max-w-[80%] shadow-sm">
                        <p className="text-sm text-foreground">Hi! I&apos;m Amara. How can I help you today?</p>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <div className="rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]"
                        style={{ background: "linear-gradient(135deg,#7B2FBE,#C2449F)" }}>
                        <p className="text-sm text-white">Tell me about LexiZW</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-purple to-pink-500 flex items-center justify-center text-white text-xs flex-shrink-0">A</div>
                      <div className="rounded-2xl rounded-tl-sm bg-white border border-border px-4 py-2.5 max-w-[80%] shadow-sm">
                        <p className="text-sm text-foreground">LexiZW is Zimbabwe&apos;s first AI legal research tool — search case law and statutes in plain language...</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-purple to-pink-500 flex items-center justify-center text-white text-xs flex-shrink-0">A</div>
                      <div className="rounded-2xl rounded-tl-sm bg-white border border-border px-3 py-2.5 shadow-sm">
                        <div className="flex gap-1">
                          <span className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Input */}
                  <div className="flex gap-2 px-4 py-3 border-t border-border bg-white">
                    <div className="flex-1 rounded-xl border border-border bg-muted px-4 py-2 text-sm text-muted-foreground">
                      Type a message...
                    </div>
                    <button className="rounded-xl px-3 py-2 text-white text-sm"
                      style={{ background: "linear-gradient(135deg,#7B2FBE,#C2449F)" }}>
                      ↑
                    </button>
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
                <div className="rounded-2xl border border-border bg-gradient-to-b from-pink-50/40 to-white p-6 hover:shadow-card hover:border-pink-200 transition-all h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100">
                    <cap.icon className="h-5 w-5 text-[#C2449F]" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enterprise offering ───────────────────────────── */}
      <section className="py-24 bg-foreground text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C2449F]">Enterprise Deployment</p>
              <h2 className="text-3xl font-extrabold sm:text-4xl mb-5">
                Deploy Amara for{" "}
                <span style={{ color: "#C2449F" }}>Your Business</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                We fine-tune and deploy Amara on your own product and service knowledge base —
                integrated with your systems, under your brand, with no third-party data exposure.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                70% of routine enquiries handled without human intervention. Your team focuses
                on complex, high-value interactions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                Talk to Our Team <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-[#C2449F] mb-5">Enterprise Features</p>
                <ul className="space-y-3">
                  {ENTERPRISE_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 h-5 w-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: "#C2449F" }}>✓</span>
                      <span className="text-sm text-white/80 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Who it's for ─────────────────────────────────── */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Who It&apos;s For</p>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Industries We Serve</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((uc, i) => (
              <AnimatedSection key={uc.role} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-white p-6 hover:shadow-card hover:border-pink-200 transition-all h-full">
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
              Ready to automate your customer conversations?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Try Amara on this site — or talk to us about an enterprise deployment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-brand-purple shadow-md hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Deploy Amara for My Business <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

