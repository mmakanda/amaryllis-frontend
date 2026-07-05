import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Camera, Wifi, BarChart3, Droplets, CheckCircle2, Globe } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";

export const metadata: Metadata = {
  title: "Mudhumeni — Precision Farming AI | Amaryllis Success",
  description:
    "AI crop disease detection and precision farming for Zimbabwean farmers. Instant diagnosis from a smartphone photo. Works on-device — no internet required.",
};

const CAPABILITIES = [
  { icon: Camera, title: "Instant Disease Detection", desc: "Point your phone at a crop and get a diagnosis in seconds — trained on 50,000+ images of Zimbabwean crops." },
  { icon: Wifi, title: "Works Offline", desc: "On-device AI model runs without reliable internet — built for rural Zimbabwean conditions." },
  { icon: BarChart3, title: "Yield Prediction", desc: "AI-driven yield forecasting based on soil conditions, weather patterns, and crop stage." },
  { icon: Droplets, title: "Irrigation Scheduling", desc: "Predictive irrigation advisory to reduce water waste and prevent crop stress." },
  { icon: CheckCircle2, title: "Soil Analysis", desc: "Interpret soil data to recommend optimal fertiliser application and planting schedules." },
  { icon: Globe, title: "Shona & English", desc: "Available in both Shona and English — built for Zimbabwean farmers, in their language." },
];

const OUTCOMES = [
  { stat: "60%", label: "Reduction in crop loss" },
  { stat: "3,000+", label: "Farmers using the app" },
  { stat: "2", label: "Provinces covered" },
  { stat: "50K+", label: "Training images" },
];

const USE_CASES = [
  { role: "🌾 Smallholder Farmers", desc: "Get expert crop diagnosis without waiting for an extension officer — in your language, on your phone." },
  { role: "🏢 Commercial Farms", desc: "Monitor large crop estates for disease outbreak with automated alerts before losses scale." },
  { role: "👨‍🌾 Extension Officers", desc: "Augment advisory capacity across more farmers simultaneously with AI-assisted diagnosis." },
  { role: "🏪 Agribusiness", desc: "Support your farmer supply chain with precision agriculture tools that improve input ROI." },
];

export default function MudhumeniPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(22,163,74,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(245,130,31,0.08) 0%, transparent 55%), #ffffff" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline mb-6">
                ← All Products
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">🌾</span>
                <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">LIVE</span>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A] mb-3">AgriTech AI</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl xl:text-6xl mb-4">
                Mudhumeni
              </h1>
              <p className="text-xl font-semibold italic mb-4" style={{ color: "#16A34A" }}>
                AI for the Zimbabwean farmer — in the field, on the phone.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Point your phone at a crop and get an instant disease diagnosis. Built on
                50,000+ images of Zimbabwean crops. Works on-device — no reliable internet required.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://mudhumeni.amaryllissuccess.co.zw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#16A34A 0%,#22C55E 100%)" }}
                >
                  Explore Mudhumeni <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border-2 px-7 py-3.5 text-base font-semibold transition-all hover:bg-green-50"
                  style={{ borderColor: "#16A34A", color: "#16A34A" }}
                >
                  Partner With Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Right — outcomes */}
            <AnimatedSection delay={0.2} direction="left" className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl border border-green-200 bg-green-50/50" />
                <div className="relative rounded-3xl border border-border bg-white shadow-card p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#16A34A] mb-6">Live Results</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {OUTCOMES.map((o) => (
                      <div key={o.label} className="rounded-2xl bg-green-50 border border-green-100 p-4 text-center">
                        <p className="text-3xl font-extrabold text-[#16A34A]">{o.stat}</p>
                        <p className="text-xs text-muted-foreground mt-1">{o.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                    <p className="text-xs font-bold text-[#16A34A] uppercase tracking-widest mb-2">How it works</p>
                    {["📸 Farmer photographs crop", "🤖 AI analyses on-device", "✅ Diagnosis in seconds", "💊 Treatment recommended"].map((step) => (
                      <p key={step} className="text-sm text-foreground py-1 border-b border-green-100 last:border-0">{step}</p>
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
                <div className="rounded-2xl border border-border bg-gradient-to-b from-green-50/40 to-white p-6 hover:shadow-card hover:border-green-300 transition-all h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                    <cap.icon className="h-5 w-5 text-[#16A34A]" />
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
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Built for Zimbabwe&apos;s Agricultural Sector</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {USE_CASES.map((uc, i) => (
              <AnimatedSection key={uc.role} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-white p-6 hover:shadow-card hover:border-green-300 transition-all h-full">
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
        style={{ background: "linear-gradient(135deg, #16A34A 0%, #22C55E 60%, #F5821F 100%)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Put AI in every farmer&apos;s pocket.
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Try Mudhumeni or talk to us about deploying it across your farming operation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://mudhumeni.amaryllissuccess.co.zw"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-8 py-3.5 text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
                style={{ color: "#16A34A" }}
              >
                Explore Mudhumeni <ExternalLink className="h-4 w-4" />
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

