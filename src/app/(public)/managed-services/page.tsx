import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Managed Services",
  description: "Packaged service offerings across IT, construction project management, and agri-tech support. Basic, Standard, and Enterprise tiers.",
};

const TIERS = [
  {
    name: "Basic",
    tagline: "For small businesses getting started",
    price: "Contact us",
    highlight: false,
    features: [
      "Up to 10 managed devices",
      "8×5 helpdesk support",
      "Monthly system health report",
      "Cloud backup (100 GB)",
      "Basic network monitoring",
      "Email & phone support",
    ],
    cta: "Get Started",
  },
  {
    name: "Standard",
    tagline: "Most popular for growing businesses",
    price: "Contact us",
    highlight: true,
    features: [
      "Up to 50 managed devices",
      "24×5 helpdesk support",
      "Weekly performance reports",
      "Cloud backup (1 TB)",
      "Advanced network monitoring",
      "AI-powered anomaly detection",
      "Quarterly security assessment",
      "Dedicated account manager",
    ],
    cta: "Start Standard",
  },
  {
    name: "Enterprise",
    tagline: "Full-scale digital operations management",
    price: "Custom",
    highlight: false,
    features: [
      "Unlimited managed devices",
      "24×7 helpdesk + on-site SLA",
      "Real-time dashboards",
      "Unlimited cloud backup",
      "SOC monitoring",
      "Custom AI integrations",
      "Penetration testing (bi-annual)",
      "Executive reporting",
      "Priority escalation path",
    ],
    cta: "Talk to Sales",
  },
];

const ALL_SERVICES = [
  { category: "IT", items: ["Managed helpdesk", "Device management", "Cloud backup & DR", "Network operations", "Cybersecurity", "Custom software development", "AI & automation"] },
  { category: "Construction", items: ["Project management retainer", "BOQ preparation", "Site monitoring subscription", "Progress reporting", "Subcontractor coordination"] },
  { category: "Agriculture", items: ["Mudhumeni platform subscription", "Monthly crop advisory", "Remote monitoring (drone/satellite)", "Seasonal yield reporting", "Soil testing program"] },
];

export default function ManagedServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-hero-mesh">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Managed Services</p>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
            Packaged Solutions for{" "}
            <span className="text-flame">Every Scale</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a managed services tier that fits your business today — and scales with you tomorrow.
            All packages are fully customisable.
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {TIERS.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <div className={cn(
                  "relative rounded-2xl border p-8 transition-all",
                  tier.highlight
                    ? "border-brand-purple shadow-glow scale-[1.03]"
                    : "border-border shadow-card"
                )}>
                  {tier.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="rounded-full px-4 py-1 text-xs font-bold text-white"
                        style={{ background: "linear-gradient(135deg,#7B2FBE,#C2449F)" }}>
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-extrabold text-foreground mb-1">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{tier.tagline}</p>

                  <div className="mb-6">
                    <span className="text-2xl font-bold text-foreground">{tier.price}</span>
                    {tier.price !== "Custom" && (
                      <span className="text-muted-foreground text-sm"> / month</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="h-4 w-4 mt-0.5 shrink-0 text-brand-purple" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(tier.name + " Managed Services")}`}
                    className={cn(
                      "block w-full rounded-xl px-5 py-3 text-center text-sm font-semibold transition-all",
                      tier.highlight
                        ? "text-white shadow-glow hover:shadow-glow-lg hover:scale-105"
                        : "border-2 border-brand-purple text-brand-purple hover:bg-primary-50"
                    )}
                    style={tier.highlight ? { background: "linear-gradient(135deg,#7B2FBE,#C2449F,#F5821F)" } : undefined}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <p className="text-sm text-muted-foreground">
              All pricing is in USD. Contact us for ZWL pricing. Packages are fully customisable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* All services by category */}
      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Service Catalogue</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Everything We Manage</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ALL_SERVICES.map((cat, i) => (
              <AnimatedSection key={cat.category} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-card">
                  <h3 className="font-bold text-brand-purple mb-5 text-lg">{cat.category}</h3>
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full shrink-0 bg-brand-orange" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Not sure which tier is right for you?</h2>
            <p className="text-muted-foreground mb-8">Book a free 30-minute consultation and we'll recommend the best fit.</p>
            <Link href="/contact?subject=Managed+Services+Consultation"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-glow hover:scale-105 transition-all"
              style={{ background: "linear-gradient(135deg,#7B2FBE,#C2449F,#F5821F)" }}>
              Get a Free Recommendation <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
