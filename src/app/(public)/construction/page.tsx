import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  ClipboardList,
  FileText,
  Ruler,
} from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";

export const metadata: Metadata = {
  title: "Construction & Engineering | Amaryllis Success",
  description:
    "AI-enabled construction and engineering solutions for BOQ generation, cost estimation, project planning, documentation, and digital workflows in Zimbabwe.",
};

const PROBLEMS = [
  {
    icon: BrainCircuit,
    title: "BOQ Generation",
    desc: "Generate structured Bills of Quantities from project requirements and technical documentation with AI-assisted workflows.",
  },
  {
    icon: BarChart3,
    title: "Cost Estimation & Analysis",
    desc: "Bring quantities, rates, assumptions, and project information into a clearer estimation and budgeting workflow.",
  },
  {
    icon: ClipboardList,
    title: "Project Planning",
    desc: "Turn project requirements into structured work packages, plans, schedules, and supporting information.",
  },
  {
    icon: FileText,
    title: "Construction Documentation",
    desc: "Organise technical documents and project information so teams can find, review, and use what they need more efficiently.",
  },
];

const CAPABILITIES = [
  { icon: Building2, title: "Construction", desc: "Digital tools and workflows that support construction teams from preparation through project delivery." },
  { icon: Ruler, title: "Infrastructure", desc: "Technology-enabled workflows for infrastructure, civil works, quantities, and technical project information." },
  { icon: BarChart3, title: "Cost Management", desc: "Structured estimating and analysis workflows designed to make project decisions clearer." },
  { icon: FileText, title: "Project Documentation", desc: "Practical systems for organising requirements, technical information, reports, and project records." },
];

const PRINCIPLES = [
  { label: "AI-first", desc: "We look for practical opportunities to apply AI where it improves a real workflow." },
  { label: "Data-driven", desc: "We structure project information so teams can work from clearer, more useful data." },
  { label: "Zimbabwe-focused", desc: "Our solutions are designed with local operating conditions and business realities in mind." },
  { label: "Practical", desc: "We prioritise useful products and workflows over technology for its own sake." },
];

export default function ConstructionPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-mesh pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(123,47,190,0.14),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(245,130,31,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-5 inline-flex rounded-full border border-purple-200/20 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-purple-700 shadow-sm backdrop-blur-xl">
            Construction & Engineering
          </span>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            AI-Powered Construction &amp; Engineering
          </h1>
          <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Smarter estimating. Better documentation. Faster project preparation.
            Practical technology for construction and engineering teams.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/products/boq-generator"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg,#7B2FBE 0%,#C2449F 60%,#F5821F 100%)" }}
            >
              Explore AutoBOQ <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact?subject=Construction+Quote"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white/70 px-7 py-3.5 text-base font-semibold text-foreground shadow-sm backdrop-blur-xl transition-all hover:bg-white"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">What We Solve</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Construction workflows, made more intelligent.</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              We combine construction and engineering workflows with practical AI and digital tools to make project preparation more structured and efficient.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="group h-full rounded-2xl border border-border bg-white/70 p-6 shadow-card backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-glow">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-midnight-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <AnimatedSection>
              <span className="mb-4 inline-flex rounded-full border border-purple-300/20 bg-purple-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-purple-200">
                Featured Product
              </span>
              <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">AutoBOQ</h2>
              <p className="mb-6 max-w-xl text-base leading-relaxed text-midnight-200">
                AI-assisted Bill of Quantities generation from project requirements and technical documentation.
              </p>
              <Link
                href="/products/boq-generator"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Explore AutoBOQ <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl backdrop-blur-2xl md:p-7">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />
                <div className="relative rounded-2xl border border-white/10 bg-black/20 p-5 md:p-7">
                  <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-midnight-400">AutoBOQ</p>
                      <p className="mt-1 text-sm font-semibold text-white">Project quantity schedule</p>
                    </div>
                    <span className="rounded-full bg-orange-400/10 px-3 py-1 text-[10px] font-semibold text-orange-300">AI assisted</span>
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    {[
                      ["Earthworks", "4,200 m³"],
                      ["Drainage", "1,240 m"],
                      ["Kerbing", "860 m"],
                      ["Road base", "2,100 m³"],
                    ].map(([name, qty]) => (
                      <div key={name} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3">
                        <span className="text-midnight-300">{name}</span>
                        <span className="text-white">{qty}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl border border-purple-300/10 bg-purple-400/5 p-4 text-xs text-midnight-300">
                    Structured output ready for review, analysis, and project documentation.
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Engineering Capabilities</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Built for the work behind the project.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-card">
                  <item.icon className="mb-5 h-6 w-6 text-purple-600" />
                  <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Why Amaryllis</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Technology with a practical point of view.</h2>
          </AnimatedSection>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-white/70 p-6 backdrop-blur-xl">
                  <h3 className="mb-2 font-bold text-foreground">{item.label}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimatedSection>
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">Have a construction or engineering challenge?</h2>
            <p className="mb-8 text-muted-foreground">
              Tell us what you are trying to plan, estimate, document, or improve. We can explore the right technology and engineering approach together.
            </p>
            <Link
              href="/contact?subject=Construction+Quote"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg,#7B2FBE,#C2449F,#F5821F)" }}
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

