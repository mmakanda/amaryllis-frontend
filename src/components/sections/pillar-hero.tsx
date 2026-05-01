import { motion } from "framer-motion";

interface PillarHeroProps {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  gradient: string; // tailwind gradient classes
}

export function PillarHero({
  icon,
  title,
  tagline,
  description,
  ctaLabel,
  ctaHref,
  gradient,
}: PillarHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 bg-hero-mesh">
      {/* Background decoration */}
      <div
        className={`absolute inset-0 opacity-5 bg-gradient-to-br ${gradient}`}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-white shadow-card border border-border p-4 text-5xl">
          {icon}
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-orange">
          {tagline}
        </p>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:shadow-glow-lg hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)",
          }}
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
