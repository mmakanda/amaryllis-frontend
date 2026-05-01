import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Shield, TrendingUp, Users } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { PILLARS, COMPANY_VALUES } from "@/lib/constants";
import type { Testimonial } from "@/types";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Amaryllis Success — delivering innovation across agriculture, construction, and IT consultancy in Zimbabwe.",
};

// Static seed testimonials (replaced by DB data in production)
const SEED_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author_name: "Tendai Moyo",
    author_role: "Farm Manager",
    company: "Mashonaland Estates",
    content:
      "Amaryllis transformed how we monitor our crops. The Mudhumeni app gives us real-time insights we never had before. Yield has improved by 30% this season.",
    pillar: "agriculture",
    rating: 5,
    is_featured: true,
  },
  {
    id: 2,
    author_name: "Chiedza Mutasa",
    author_role: "Director of Works",
    company: "Ruwa Local Board",
    content:
      "The road construction project was delivered on time and within budget. Their site monitoring technology kept us informed at every stage.",
    pillar: "construction",
    rating: 5,
    is_featured: true,
  },
  {
    id: 3,
    author_name: "Blessing Ncube",
    author_role: "IT Manager",
    company: "ZimFinance Group",
    content:
      "Our managed IT services package has been flawless. Downtime dropped to near zero and the AI automation tools have saved us hundreds of hours a month.",
    pillar: "it",
    rating: 5,
    is_featured: true,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-mesh pt-20">
        {/* Flame blob decorations */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: "radial-gradient(circle, #7B2FBE, #C2449F, #F5821F)" }} />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full opacity-[0.06] blur-3xl"
          style={{ background: "radial-gradient(circle, #F5821F, #F5B800)" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <div>
              <AnimatedSection>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-primary-50 px-4 py-1.5 text-xs font-semibold text-brand-purple mb-6">
                  <Zap className="h-3 w-3" /> AI-Powered Solutions · Zimbabwe
                </span>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl xl:text-7xl leading-[1.05] mb-6">
                  Where{" "}
                  <span className="text-flame">Growth</span>
                  {" "}Meets{" "}
                  <span className="text-flame">Innovation</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
                  Amaryllis Success delivers transformative solutions across agriculture,
                  civil construction, and AI-powered IT consultancy — driving real impact
                  across Zimbabwe and beyond.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#pillars"
                    className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:shadow-glow-lg hover:scale-105"
                    style={{ background: "linear-gradient(135deg,#7B2FBE 0%,#C2449F 60%,#F5821F 100%)" }}
                  >
                    Explore Our Services <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/ai-showcase"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-purple px-7 py-3.5 text-base font-semibold text-brand-purple transition-all hover:bg-primary-50"
                  >
                    Talk to Our AI
                  </Link>
                </div>
              </AnimatedSection>

              {/* Stats */}
              <AnimatedSection delay={0.4}>
                <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-10">
                  {[
                    { value: "50+", label: "Projects Delivered" },
                    { value: "3", label: "Core Sectors" },
                    { value: "98%", label: "Client Satisfaction" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-extrabold text-brand-purple">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right — visual card stack */}
            <AnimatedSection delay={0.2} direction="left" className="hidden lg:block">
              <div className="relative">
                {/* Decorative card stack */}
                <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl border border-brand-purple/10 bg-primary-50" />
                <div className="absolute -top-2 -right-2 h-full w-full rounded-3xl border border-brand-orange/10 bg-amber-50/50" />
                <div className="relative rounded-3xl border border-border bg-white shadow-card p-8 space-y-5">
                  {PILLARS.map((p) => (
                    <Link
                      key={p.id}
                      href={p.href}
                      className="flex items-center gap-4 rounded-2xl border border-border p-4 transition-all hover:border-brand-purple/30 hover:shadow-card group"
                    >
                      <span className="text-3xl">{p.icon}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground group-hover:text-brand-purple transition-colors">
                          {p.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{p.tagline}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-brand-purple group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Pillar cards ─────────────────────────────────── */}
      <section id="pillars" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">
              What We Do
            </p>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              Three Pillars of Excellence
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 0.1}>
                <Link href={p.href} className="group block h-full">
                  <div className="h-full rounded-2xl border border-border bg-white shadow-card p-8 transition-all hover:shadow-glow hover:-translate-y-1 hover:border-brand-purple/20">
                    <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
                      style={{ background: `linear-gradient(135deg,${p.color}20,${p.color}10)` }}>
                      {p.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-brand-purple transition-colors">
                      {p.label}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{p.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-purple">
                      Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Amaryllis — mission/values ───────────────── */}
      <section id="about" className="py-24 bg-foreground text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-orange">
                Why Amaryllis
              </p>
              <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
                Built on Purpose,{" "}
                <span className="text-flame">Driven by Impact</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-5">
                Amaryllis Success was founded with a singular vision: to harness technology
                and expertise to solve the real challenges facing Zimbabwean businesses,
                farmers, and communities.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                From intelligent irrigation systems for smallholder farmers, to AI-powered
                BOQ automation for construction firms, to fully managed IT infrastructure —
                we meet our clients where they are and take them where they need to go.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-4">
              {COMPANY_VALUES.map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                    <span className="text-2xl mb-3 block">{v.icon}</span>
                    <h3 className="font-bold text-white mb-2">{v.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{v.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AI use cases strip ───────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">
              AI at Work
            </p>
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              Intelligence Across Every Sector
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌾",
                sector: "Agriculture",
                title: "Mudhumeni — Precision Farming AI",
                desc: "Crop health monitoring, AI-driven yield prediction, soil analysis, and irrigation advisory — all in one app built for Zimbabwean farmers.",
                href: "/agriculture",
              },
              {
                icon: "🏗️",
                sector: "Construction",
                title: "Automated BOQ & Site Monitoring",
                desc: "AI generates Bills of Quantities from project drawings, while computer-vision cameras track site progress in real time.",
                href: "/construction",
              },
              {
                icon: "💡",
                sector: "IT Consultancy",
                title: "Enterprise AI Integration",
                desc: "Custom large-language-model deployments, intelligent process automation, and AI-powered dashboards for your business.",
                href: "/it-consultancy",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <Link href={item.href} className="group block h-full">
                  <div className="h-full rounded-2xl border border-border bg-gradient-to-b from-primary-50/60 to-white p-7 transition-all hover:shadow-card hover:border-brand-purple/20">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-border shadow-sm text-2xl">
                      {item.icon}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-purple mb-2">
                      {item.sector}
                    </p>
                    <h3 className="font-bold text-foreground mb-3 group-hover:text-brand-purple transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/ai-showcase"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-purple px-7 py-3 text-sm font-semibold text-brand-purple hover:bg-primary-50 transition-colors"
            >
              See the Full AI Showcase <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <TestimonialsCarousel testimonials={SEED_TESTIMONIALS} />

      {/* ── CTA banner ───────────────────────────────────── */}
      <section className="py-20"
        style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Talk to our team today — we'll find the right solution for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-brand-purple shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                Get in Touch
              </Link>
              <Link
                href="/managed-services"
                className="rounded-xl border-2 border-white/50 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                View Service Packages
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
