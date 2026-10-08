#!/usr/bin/env bash
# Run from the amaryllis-frontend project root:  bash apply-homepage-update.sh
set -euo pipefail

if [ ! -d "src/components/sections" ]; then
  echo "Run this from the amaryllis-frontend root (src/components/sections not found)." >&2
  exit 1
fi

BK="_backup_homepage_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BK"
for f in \
  src/components/sections/Hero.tsx \
  src/components/sections/ServicesGrid.tsx \
  src/components/sections/AgricultureSection.tsx \
  src/components/sections/ConstructionSection.tsx \
  "src/app/(public)/page.tsx"
do
  [ -f "$f" ] && mkdir -p "$BK/$(dirname "$f")" && cp "$f" "$BK/$f"
done
echo "Backed up originals to $BK"

cat > "src/components/sections/Hero.tsx" << 'AMARYLLIS_EOF'
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

const CAPABILITIES = [
  "AI Products",
  "Digital Engineering",
  "Industry Solutions",
];

// Only keep claims you can stand behind in a reference check.
const STATS = [
  { value: "4", label: "live AI products" },
  { value: "3", label: "core industries" },
  { value: "5 days", label: "to a fixed-scope proposal" },
];

type HeroTileProps = {
  src: string;
  alt: string;
  label: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

function HeroTile({
  src,
  alt,
  label,
  sizes,
  priority = false,
  className = "",
}: HeroTileProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.6rem] border border-white/15 shadow-2xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] text-white/75 backdrop-blur-xl">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-[#09090f] lg:min-h-[820px]">
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#7B2FBE]/20 blur-[120px]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#F5821F]/12 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#C2449F]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pt-32 xl:min-h-[820px] xl:px-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(18px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-2 text-xs font-medium text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-xl"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10">
              <Sparkles className="h-3.5 w-3.5 text-[#F5B800]" />
            </span>
            AI products + digital engineering &middot; Zimbabwe
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, transform: "translateY(24px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 0.65, delay: 0.06 }}
            className="max-w-2xl text-balance text-[clamp(3.2rem,7vw,6.4rem)] font-semibold leading-[.92] tracking-[-.065em] text-white"
          >
            Practical technology.
            <br />
            <span className="text-gradient">Built for Africa.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-7 max-w-xl text-base leading-7 text-white/62 sm:text-lg"
          >
            Amaryllis Success is an AI product and digital engineering company
            building practical technology for enterprise, agriculture and
            construction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, transform: "translateY(16px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 0.55, delay: 0.19 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {CAPABILITIES.map((capability) => (
              <span
                key={capability}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-xs font-medium text-white/65 backdrop-blur-xl"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#C2449F]" />
                {capability}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, transform: "translateY(18px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#15131c] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(255,255,255,.14)]"
            >
              Explore our products
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.055] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-[transform,background,border-color] duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.09]"
            >
              Start a conversation
              <ArrowDownRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 grid max-w-xl grid-cols-3 gap-x-5 gap-y-6 border-t border-white/10 pt-7"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[.14em] text-white/38">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual: three image tiles in a grid (no overlaps) + AI products card below */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(24px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[590px]"
        >
          <div className="pointer-events-none absolute -bottom-6 right-10 h-28 w-28 rounded-full bg-[#7B2FBE]/20 blur-[70px]" />

          <div className="grid h-[420px] grid-cols-2 grid-rows-2 gap-3 sm:h-[480px] lg:h-[500px]">
            <HeroTile
              src="/images/agriculture-hero.jpg"
              alt="Smart agriculture and crop production"
              label="Smart Agriculture"
              sizes="(max-width: 1024px) 50vw, 30vw"
              className="row-span-2"
            />
            <HeroTile
              src="/images/it-hero.jpg"
              alt="Digital engineering and enterprise technology"
              label="Enterprise Tech"
              sizes="(max-width: 1024px) 50vw, 30vw"
              priority
            />
            <HeroTile
              src="/images/construction-hero.jpg"
              alt="Civil engineering and construction"
              label="Construction"
              sizes="(max-width: 1024px) 50vw, 30vw"
            />
          </div>

          <div className="relative mt-3 rounded-2xl border border-white/15 bg-[#12111a]/95 p-4 shadow-[0_25px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/45">
                AI Products
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.7)]" />
            </div>

            <div className="flex items-start gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06]">
                <BrainCircuit className="h-4 w-4 text-[#C2449F]" />
              </div>

              <p className="text-sm font-medium leading-5 text-white">
                Practical AI products built around real business and industry
                problems.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {["LexiZW", "Mudhumeni", "BOQ", "Amara"].map((product) => (
                <span
                  key={product}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-[9px] font-medium text-white/55"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[.22em] text-white/30 lg:flex">
        <span className="h-px w-8 bg-white/20" />
        Explore
        <span className="h-px w-8 bg-white/20" />
      </div>
    </section>
  );
}
AMARYLLIS_EOF
echo "wrote src/components/sections/Hero.tsx"

cat > "src/components/sections/ServicesGrid.tsx" << 'AMARYLLIS_EOF'
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Enterprise Architecture & AI",
    desc: "Solution architecture, cloud migration, AI development and system integration.",
    image: "/images/aidi.jpeg",
    href: "#enterprise",
  },
  {
    title: "Smart Agriculture & AgriTech",
    desc: "Built by people who farm. Crop advisory, livestock tools and farm technology.",
    image: "/images/agriculture-hero.jpg",
    href: "#agriculture",
  },
  {
    title: "Construction & Engineering",
    desc: "Road and housing delivery with our construction partner, plus AI tools for estimating and planning.",
    image: "/images/construction-hero.jpg",
    href: "#construction",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f4f0e9] py-20 text-[#17151c] md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid items-end gap-8 border-b border-black/10 pb-10 md:grid-cols-[.8fr_1.2fr] md:pb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[.22em] text-[#7B2FBE]">
              What we do
            </span>
            <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-[-.045em] sm:text-5xl">
              Expertise with a practical point of view.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-black/55 sm:text-base">
            Enterprise technology, agriculture and construction, delivered by
            a team with hands-on field experience in each.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, transform: "translateY(20px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Link href={service.href} className="group block h-full">
                <article className="relative min-h-[360px] overflow-hidden rounded-[1.7rem] border border-black/10 bg-[#191720] shadow-[0_18px_60px_rgba(28,20,38,.12)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09080e] via-[#09080e]/50 to-transparent" />
                  <div className="relative flex min-h-[360px] flex-col justify-between p-6 sm:p-7">
                    <div className="flex items-center justify-end">
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-transform duration-200 group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="max-w-xl">
                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-6 text-white/62">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
AMARYLLIS_EOF
echo "wrote src/components/sections/ServicesGrid.tsx"

cat > "src/components/sections/EnterpriseSection.tsx" << 'AMARYLLIS_EOF'
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Brain, Cloud, Code2, Network, Plug } from "lucide-react";

const offerings = [
  {
    icon: Network,
    title: "Solution & Enterprise Architecture",
    desc: "Target architectures, roadmaps and technology decisions you can act on.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    desc: "Move workloads to AWS, Azure or private cloud, from assessment to cutover.",
  },
  {
    icon: Brain,
    title: "AI Development & Data",
    desc: "Custom and fine-tuned models for your domain, with the data pipelines behind them.",
  },
  {
    icon: Bot,
    title: "LLM & Agent Integration",
    desc: "Chatbots, assistants and automation inside your existing processes and channels.",
  },
  {
    icon: Plug,
    title: "System Integration",
    desc: "Connect legacy systems with modern APIs and services.",
  },
  {
    icon: Code2,
    title: "Custom Software & Web Platforms",
    desc: "Web and mobile platforms built from requirements to production.",
  },
];

// Only keep claims you can stand behind in a reference check.
const proof = [
  { value: "4", label: "Live AI products" },
  { value: "5 days", label: "To a fixed-scope proposal" },
  { value: "TOGAF", label: "Aligned, ArchiMate-modelled delivery" },
  { value: "100%", label: "Code and documentation handed over" },
];

const steps = [
  { title: "Discover", desc: "Understand the problem, the systems and the constraints." },
  { title: "Architect", desc: "Design the target solution and agree a fixed scope." },
  { title: "Build", desc: "Develop and integrate in short, reviewable cycles." },
  { title: "Hand over", desc: "Documentation, training and full ownership of the code." },
];

export default function EnterpriseSection() {
  return (
    <section id="enterprise" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Anchors kept so older links to #it-services and #ai-services still land here */}
      <span id="it-services" aria-hidden className="absolute top-0" />
      <span id="ai-services" aria-hidden className="absolute top-0" />

      <div className="absolute inset-0">
        <Image
          src="/images/it-hero.jpg"
          alt="Enterprise technology"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-midnight-900/72" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 px-5 sm:px-6 lg:px-8 xl:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center md:mb-16"
          >
            <span className="mb-3 inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 md:mb-4 md:px-4 md:py-1.5 md:text-sm">
              Enterprise Architecture & AI
            </span>
            <h2 className="mb-3 break-words text-2xl font-bold tracking-tight text-white sm:text-3xl md:mb-4 md:text-4xl">
              Architecture that turns into{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                working systems
              </span>
            </h2>
            <p className="mx-auto max-w-2xl break-words text-sm leading-relaxed text-midnight-300 md:text-base">
              We design the solution, then build and integrate it. Cloud
              migration, AI development and system integration, delivered by a
              small senior team.
            </p>
          </motion.div>

          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-12 md:gap-6 lg:grid-cols-3">
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group glass-card rounded-xl p-5 transition-colors hover:bg-white/[0.06] md:p-6"
              >
                <item.icon
                  className="mb-4 text-blue-400 transition-transform group-hover:scale-110"
                  size={24}
                />
                <h3 className="mb-2 break-words font-semibold text-white">{item.title}</h3>
                <p className="break-words text-xs leading-relaxed text-midnight-300 md:text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* How we work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-12"
          >
            <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[.2em] text-white/45">
              How we work
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                >
                  <h3 className="mb-1 text-sm font-semibold text-white">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-midnight-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark rounded-2xl border border-blue-500/10 p-6 md:p-8"
          >
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {proof.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="mb-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
                    {m.value}
                  </div>
                  <div className="text-xs text-midnight-300">{m.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-white/10 pt-5 text-center text-xs text-midnight-300 md:text-sm">
              Recent builds: pharmacy web platforms, an event management system
              and four live AI products.
            </p>
          </motion.div>

          <div className="mt-8 flex justify-center md:mt-10">
            <Link
              href="/contact?subject=Architecture+Conversation"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book an architecture conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
AMARYLLIS_EOF
echo "wrote src/components/sections/EnterpriseSection.tsx"

cat > "src/components/sections/AgricultureSection.tsx" << 'AMARYLLIS_EOF'
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bug,
  Droplets,
  HeartPulse,
  Radio,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Bug,
    title: "Crop Advisory & Disease Detection",
    desc: "Image-based diagnosis with treatment guidance, built on Zimbabwean crop data.",
  },
  {
    icon: Droplets,
    title: "Irrigation Management",
    desc: "Smart water scheduling based on soil moisture and weather forecasts.",
  },
  {
    icon: HeartPulse,
    title: "Livestock & Piggery Management",
    desc: "Herd records, feed, health and breeding tracking for livestock and piggery operations.",
  },
  {
    icon: TrendingUp,
    title: "Farm Data & Yield Forecasting",
    desc: "Turn farm records into forecasts and planning decisions.",
  },
  {
    icon: Smartphone,
    title: "Farm Management Software",
    desc: "Custom mobile and web tools for records, inputs, labour and market prices.",
  },
  {
    icon: Radio,
    title: "IoT & Sensor Deployment",
    desc: "Soil, weather and livestock monitoring with low-power networks.",
  },
];

const credentials = [
  "Run on our own farm",
  "Piggery operations",
  "Mudhumeni: live",
];

export default function AgricultureSection() {
  return (
    <section id="agriculture" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/agriculture-hero.jpg"
          alt="Smart Agriculture"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-midnight-900/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.06)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 px-5 sm:px-6 lg:px-8 xl:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="min-w-0"
            >
              <span className="mb-3 inline-block rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 md:mb-4 md:px-4 md:py-1.5 md:text-sm">
                Smart Agriculture & AgriTech
              </span>
              <h2 className="mb-4 break-words text-2xl font-bold tracking-tight text-white sm:text-3xl md:mb-6 md:text-4xl">
                Built by people who{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  actually farm
                </span>
              </h2>
              <p className="mb-5 break-words text-sm leading-relaxed text-midnight-300 md:text-base">
                We run our own farming operation, so what we build gets tested
                where it matters. From AI crop advisory to livestock tools, our
                technology is designed for Zimbabwean conditions.
              </p>

              <div className="mb-6 flex flex-wrap gap-2 md:mb-8">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-[11px] font-medium text-green-300 md:text-xs"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="glass-dark mb-6 rounded-2xl border border-green-500/10 p-4 md:mb-8 md:p-6">
                <div className="mb-3 flex items-center gap-3 md:mb-4 md:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 md:h-12 md:w-12">
                    <Smartphone className="text-green-400" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-white md:text-base">Mudhumeni</h3>
                    <p className="text-[11px] text-midnight-300 md:text-xs">
                      AI for the Zimbabwean farmer
                    </p>
                  </div>
                </div>
                <p className="mb-3 break-words text-xs text-midnight-300 md:mb-4 md:text-sm">
                  Point your phone at a crop and get an instant disease diagnosis.
                  Built on 50,000+ images of Zimbabwean crops, and works on-device
                  without reliable internet.
                </p>
                <Link
                  href="/products/mudhumeni"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 transition-colors hover:text-green-300"
                >
                  Explore Mudhumeni <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass-card rounded-xl p-4 transition-colors hover:bg-white/[0.06] md:p-5"
                >
                  <f.icon className="mb-3 text-green-400" size={22} />
                  <h3 className="mb-1 break-words text-sm font-semibold text-white">{f.title}</h3>
                  <p className="break-words text-xs leading-relaxed text-midnight-300">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between md:mt-10 md:p-6"
          >
            <div>
              <p className="text-sm font-semibold text-white">Running a farm or livestock operation?</p>
              <p className="mt-1 text-xs text-midnight-300 md:text-sm">
                Tell us what slows you down and we will tell you what is worth building.
              </p>
            </div>
            <Link
              href="/contact?subject=Agriculture+Enquiry"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
AMARYLLIS_EOF
echo "wrote src/components/sections/AgricultureSection.tsx"

cat > "src/components/sections/ConstructionSection.tsx" << 'AMARYLLIS_EOF'
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Calculator,
  ClipboardList,
  FileText,
  Home,
  Route,
} from "lucide-react";

const solutions = [
  {
    icon: Route,
    title: "Road Rehabilitation & Civil Works",
    desc: "Delivered with our construction partner: road rehabilitation, drainage and kerbing.",
  },
  {
    icon: Home,
    title: "Housing & Building Construction",
    desc: "Residential construction delivered with our construction partner, from site set-up to handover.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered BOQ Generation",
    desc: "Generate structured bills of quantities faster with AutoBOQ from project requirements and technical documentation.",
  },
  {
    icon: Calculator,
    title: "Cost Estimation & Analysis",
    desc: "Support project budgeting with structured quantities, cost analysis, and clearer estimation workflows.",
  },
  {
    icon: ClipboardList,
    title: "Project Planning",
    desc: "Turn project requirements into organised plans, work packages, schedules, and supporting documentation.",
  },
  {
    icon: FileText,
    title: "Construction Documentation",
    desc: "Keep technical documentation and project information structured, accessible, and easy to manage.",
  },
];

export default function ConstructionSection() {
  return (
    <section id="construction" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/construction-hero.jpg"
          alt="Construction and engineering site"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-midnight-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(168,85,247,0.16),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(245,130,31,0.12),transparent_32%)]" />
      </div>

      <div className="relative z-10 px-5 sm:px-6 lg:px-8 xl:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10 max-w-3xl md:mb-14"
          >
            <span className="mb-4 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-300 md:px-4">
              Construction & Engineering
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Site-tested engineering,{" "}
              <span className="bg-gradient-to-r from-orange-300 via-amber-300 to-purple-300 bg-clip-text text-transparent">
                backed by smarter tools.
              </span>
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-midnight-200 md:text-base">
              Civil works delivered with our construction partner, from road
              rehabilitation to housing, plus AI tools for estimating, planning
              and documentation.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            <div className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:col-span-2">
              {solutions.map((solution, i) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/20 hover:bg-white/[0.09] md:p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-orange-300/15 bg-orange-400/10 text-orange-300">
                    <solution.icon size={21} />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-white md:text-base">
                    {solution.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-midnight-300 md:text-sm">
                    {solution.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative self-start overflow-hidden rounded-2xl border border-purple-300/15 bg-midnight-950/65 p-6 shadow-2xl backdrop-blur-2xl md:p-7"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/15 blur-3xl" />
              <div className="relative">
                <span className="mb-3 inline-flex rounded-full border border-purple-300/20 bg-purple-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-purple-200">
                  Featured Product
                </span>
                <h3 className="mb-3 text-2xl font-bold text-white">AutoBOQ</h3>
                <p className="mb-6 text-sm leading-relaxed text-midnight-200">
                  AI-assisted Bill of Quantities generation from project requirements
                  and technical documentation.
                </p>

                <div className="mb-6 rounded-xl border border-white/10 bg-black/20 p-4 font-mono text-[11px] text-midnight-300">
                  <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-white">PROJECT</span>
                    <span className="text-orange-300">BOQ</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span>Earthworks</span><span>4,200 m&sup3;</span></div>
                    <div className="flex justify-between"><span>Drainage</span><span>1,240 m</span></div>
                    <div className="flex justify-between"><span>Kerbing</span><span>860 m</span></div>
                  </div>
                  <p className="mt-3 border-t border-white/10 pt-2 text-[10px] uppercase tracking-[.14em] text-midnight-400">
                    Sample output
                  </p>
                </div>

                <Link
                  href="/products/boq-generator"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition-colors hover:text-orange-200"
                >
                  Explore AutoBOQ <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between md:mt-10 md:p-6"
          >
            <div>
              <p className="text-sm font-semibold text-white">Have a construction or engineering challenge?</p>
              <p className="mt-1 text-xs text-midnight-300 md:text-sm">
                Let&apos;s explore the right combination of engineering expertise and technology.
              </p>
            </div>
            <Link
              href="/contact?subject=Construction+Quote"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
AMARYLLIS_EOF
echo "wrote src/components/sections/ConstructionSection.tsx"

cat > "src/app/(public)/page.tsx" << 'AMARYLLIS_EOF'
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import EnterpriseSection from "@/components/sections/EnterpriseSection";
import AgricultureSection from "@/components/sections/AgricultureSection";
import ConstructionSection from "@/components/sections/ConstructionSection";
import ProductsSection from "@/components/sections/ProductsSection";
import AboutSection from "@/components/sections/AboutSection";
// import TestimonialsSection from "@/components/sections/TestimonialsSection"; // re-enable once you have real, approved testimonials
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-midnight-950 text-white">
      <Hero />
      <ServicesGrid />
      <EnterpriseSection />
      <AgricultureSection />
      <ConstructionSection />
      <ProductsSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </div>
  );
}
AMARYLLIS_EOF
echo "wrote src/app/(public)/page.tsx"

rm -rf .next
echo "Done. Now run: npm run build"
