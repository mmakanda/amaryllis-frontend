import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Server, Code2, Brain, LayoutDashboard, ShieldCheck, Headphones } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import type { Testimonial } from "@/types";

export const metadata: Metadata = {
  title: "IT Consultancy",
  description: "Managed IT services, custom software development, AI integration, and enterprise automation for businesses in Zimbabwe.",
};

const SERVICES = [
  { icon: Server, title: "Managed IT Services", desc: "Fully managed infrastructure, helpdesk, network monitoring, backup, and disaster recovery — so your team can focus on what matters." },
  { icon: Code2, title: "Software & App Development", desc: "Custom web and mobile applications built with modern stacks — from MVPs to enterprise-grade platforms, delivered on time." },
  { icon: Brain, title: "AI Integration", desc: "Deploy open-source and commercial LLMs, computer-vision pipelines, and ML models directly into your business workflows." },
  { icon: LayoutDashboard, title: "Enterprise Dashboards", desc: "Real-time business intelligence dashboards pulling from your existing data sources — built for decision-makers, not just analysts." },
  { icon: ShieldCheck, title: "Cybersecurity & Compliance", desc: "Vulnerability assessments, penetration testing, security policy development, and ongoing monitoring to keep your data safe." },
  { icon: Headphones, title: "IT Support & Training", desc: "On-site and remote support packages with defined SLAs, plus end-user training programs that stick." },
];

const TESTIMONIALS: Testimonial[] = [
  { id: 1, author_name: "Blessing Ncube", author_role: "IT Manager", company: "ZimFinance Group", content: "Our downtime dropped to near zero after switching to Amaryllis managed services. Their AI automation tools have saved hundreds of hours a month — genuinely transformative.", pillar: "it", rating: 5, is_featured: true },
  { id: 2, author_name: "Rudo Zvimba", author_role: "CEO", company: "RetailZim", content: "The custom inventory management system they built for us handles everything from POS integration to automated reordering. Exceptional quality and support.", pillar: "it", rating: 5, is_featured: true },
];

export default function ITConsultancyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-hero-mesh">
        <div className="absolute inset-0 opacity-[0.04] bg-gradient-to-br from-brand-purple to-brand-magenta" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-white shadow-card border border-border p-4 text-5xl">💡</div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-purple">IT Consultancy Division</p>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            AI-Powered{" "}
            <span className="text-flame">Digital Transformation</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From managed infrastructure to custom AI deployments — we help Zimbabwean businesses work smarter, move faster, and stay secure.
          </p>
          <Link href="/contact?subject=Discovery+Call"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg,#7B2FBE 0%,#C2449F 60%,#F5821F 100%)" }}>
            Book a Discovery Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Services</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Technology That Works For You</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                    <s.icon className="h-6 w-6 text-brand-purple" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI */}
      <section className="py-24 bg-foreground text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">AI Strategy</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Why Open-Source AI?</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Data Privacy", icon: "🔒", desc: "Your data stays in your environment. Open-source LLMs like Mistral 7B and LLaMA 3 run on-premise or in private cloud — no third-party data exposure." },
              { title: "Cost Efficiency", icon: "💰", desc: "Avoid recurring per-token API costs from cloud AI vendors. A one-time deployment of a self-hosted model serves unlimited queries." },
              { title: "Full Customisation", icon: "🎛️", desc: "Fine-tune models on your proprietary data. We build AI that understands your industry, your terminology, and your processes." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition-colors">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel testimonials={TESTIMONIALS} title="Client Results" />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Let's build something powerful</h2>
            <p className="text-muted-foreground mb-8">Book a free 30-minute discovery call to discuss your technology needs.</p>
            <Link href="/contact?subject=Discovery+Call"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-glow hover:scale-105 transition-all"
              style={{ background: "linear-gradient(135deg,#7B2FBE,#C2449F,#F5821F)" }}>
              Book a Discovery Call <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
