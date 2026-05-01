import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";

export const metadata: Metadata = {
  title: "AI Showcase",
  description: "See how Amaryllis Success deploys open-source AI across agriculture, construction, and IT consultancy — from crop disease detection to automated BOQs.",
};

const CASES = [
  {
    pillar: "Agriculture",
    pillarColor: "text-green-600",
    pillarBg: "bg-green-50 border-green-100",
    icon: "🌾",
    title: "Mudhumeni — Crop Disease Detection",
    problem: "Farmers lose 20–40% of yields to diseases and pests that are identified too late for effective intervention.",
    solution: "A computer-vision model trained on 50,000+ images of Zimbabwean crop diseases runs on-device, giving instant diagnosis from a smartphone photo.",
    outcome: "Up to 60% reduction in crop loss. 3,000+ farmers using the app across Mashonaland and Manicaland.",
    tech: ["Computer Vision (ResNet-50)", "React Native app", "Offline-first SQLite", "FastAPI backend"],
  },
  {
    pillar: "Agriculture",
    pillarColor: "text-green-600",
    pillarBg: "bg-green-50 border-green-100",
    icon: "💧",
    title: "AI Irrigation Scheduler",
    problem: "Over-irrigation wastes water and nutrients; under-irrigation stunts growth. Manual scheduling is imprecise and labour-intensive.",
    solution: "IoT soil-moisture sensors feed a recurrent neural network that predicts optimal irrigation windows 48 hours ahead, accounting for weather forecasts.",
    outcome: "35–40% water savings. Automated pump control reduces labour by 8 hours/week per farm.",
    tech: ["LSTM time-series model", "ESP32 IoT sensors", "MQTT broker", "Grafana dashboards"],
  },
  {
    pillar: "Construction",
    pillarColor: "text-amber-600",
    pillarBg: "bg-amber-50 border-amber-100",
    icon: "📋",
    title: "Automated BOQ Generation",
    problem: "Preparing a Bill of Quantities manually from engineering drawings takes 2–3 weeks and is prone to costly errors.",
    solution: "A document-intelligence pipeline extracts dimensions and materials from PDF drawings, then generates a structured BOQ using an LLM with domain-specific fine-tuning.",
    outcome: "BOQ preparation time reduced from 3 weeks to 2 days. Error rate dropped by 78%.",
    tech: ["GPT-4V / LLaMA 3 Vision", "LayoutLM document AI", "Python extraction pipeline", "Excel/PDF output"],
  },
  {
    pillar: "Construction",
    pillarColor: "text-amber-600",
    pillarBg: "bg-amber-50 border-amber-100",
    icon: "📷",
    title: "AI Site Progress Monitoring",
    problem: "Project managers can't be on-site 24/7. Delays and safety violations go undetected until weekly inspections.",
    solution: "IP cameras with an on-edge AI model detect construction progress milestones, PPE compliance, and unauthorised access — sending real-time alerts to project dashboards.",
    outcome: "Clients receive automated daily progress videos and milestone alerts. Safety incidents reduced by 45%.",
    tech: ["YOLOv8 object detection", "RTSP camera feeds", "Edge computing (Jetson Nano)", "WebSocket dashboard"],
  },
  {
    pillar: "IT Consultancy",
    pillarColor: "text-brand-purple",
    pillarBg: "bg-primary-50 border-primary-100",
    icon: "🤖",
    title: "Enterprise AI Chatbot (Amara)",
    problem: "Businesses waste hours answering repetitive customer enquiries. Support teams are overloaded with routine questions.",
    solution: "A self-hosted Mistral 7B model fine-tuned on the client's product knowledge base, deployed as a secure API with full conversation history — no third-party data exposure.",
    outcome: "70% of routine enquiries handled without human intervention. 24/7 availability at near-zero marginal cost.",
    tech: ["Mistral 7B / LLaMA 3", "LangChain orchestration", "FastAPI + WebSockets", "Ollama self-host"],
  },
  {
    pillar: "IT Consultancy",
    pillarColor: "text-brand-purple",
    pillarBg: "bg-primary-50 border-primary-100",
    icon: "📊",
    title: "Intelligent Business Dashboard",
    problem: "Decision-makers rely on static spreadsheets and delayed reports. Real-time visibility into KPIs is unavailable.",
    solution: "A unified data platform aggregates ERP, CRM, and operational data into a live dashboard with AI-generated narrative summaries and anomaly alerts.",
    outcome: "Executives receive a 5-minute AI briefing each morning. Operational issues are detected 4× faster.",
    tech: ["Next.js + Recharts", "dbt + PostgreSQL", "LLM narrative generation", "Vercel Edge"],
  },
];

export default function AIShowcasePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-hero-mesh overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-white shadow-card border border-border p-4">
            <Bot className="h-10 w-10 text-brand-purple" />
          </div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">AI at Amaryllis</p>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Real AI.{" "}
            <span className="text-flame">Real Impact.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            We deploy open-source AI across all three of our pillars — not as a gimmick, but as a practical tool that solves specific, measurable problems.
          </p>
          <Link href="/contact?subject=AI+Project+Enquiry"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg,#7B2FBE 0%,#C2449F 60%,#F5821F 100%)" }}>
            Discuss an AI Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {CASES.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-white shadow-card overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Left — header */}
                    <div className="p-8 border-b lg:border-b-0 lg:border-r border-border flex flex-col">
                      <span className={`inline-flex items-center gap-1.5 mb-4 rounded-lg border px-3 py-1 text-xs font-semibold w-fit ${c.pillarBg} ${c.pillarColor}`}>
                        {c.pillar}
                      </span>
                      <div className="text-4xl mb-4">{c.icon}</div>
                      <h2 className="text-lg font-bold text-foreground mb-4">{c.title}</h2>
                      <div className="mt-auto">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Tech Stack</p>
                        <div className="flex flex-wrap gap-1.5">
                          {c.tech.map((t) => (
                            <span key={t} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground border border-border">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right — P/S/O */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                      {[
                        { label: "Problem", content: c.problem, color: "text-error", bg: "bg-red-50/50" },
                        { label: "Solution", content: c.solution, color: "text-brand-purple", bg: "bg-primary-50/50" },
                        { label: "Outcome", content: c.outcome, color: "text-green-600", bg: "bg-green-50/50" },
                      ].map((block) => (
                        <div key={block.label} className={`p-6 ${block.bg}`}>
                          <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${block.color}`}>{block.label}</p>
                          <p className="text-sm text-foreground leading-relaxed">{block.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive chat prompt */}
      <section className="py-20"
        style={{ background: "linear-gradient(135deg,#7B2FBE 0%,#C2449F 60%,#F5821F 100%)" }}>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimatedSection>
            <Bot className="h-12 w-12 text-white/80 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-white mb-4">Try Our AI Assistant Now</h2>
            <p className="text-white/80 mb-8">
              Ask Amara anything about our services — the chat widget is live in the bottom-left corner of every page.
            </p>
            <p className="text-white/60 text-sm">
              Powered by Mistral 7B · Hosted privately · No data shared with third parties
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
