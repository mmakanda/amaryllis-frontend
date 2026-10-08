#!/usr/bin/env bash
# Run from the amaryllis-frontend root:  bash update-agri-construction.sh
set -euo pipefail
[ -d src/components/sections ] || { echo "Run from the amaryllis-frontend root." >&2; exit 1; }
BK="_backup_bg_$(date +%Y%m%d_%H%M%S)"; mkdir -p "$BK"
cp src/components/sections/AgricultureSection.tsx src/components/sections/ConstructionSection.tsx "$BK"/
echo "Backed up originals to $BK"

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

// Readability comes from frosted panels, not from dimming the photo.
const PANEL = "border border-white/15 bg-black/45 backdrop-blur-md";

export default function AgricultureSection() {
  return (
    <section id="agriculture" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Photo shown as-is: no overlay, no tint */}
      <div className="absolute inset-0">
        <Image
          src="/images/agriculture-hero.jpg"
          alt="Smart Agriculture"
          fill
          quality={95}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 px-5 sm:px-6 lg:px-8 xl:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-start gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`min-w-0 rounded-3xl p-6 md:p-8 ${PANEL}`}
            >
              <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white md:mb-4 md:px-4 md:py-1.5 md:text-sm">
                Smart Agriculture & AgriTech
              </span>
              <h2 className="mb-4 break-words text-2xl font-bold tracking-tight text-white sm:text-3xl md:mb-6 md:text-4xl">
                Built by people who{" "}
                <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                  actually farm
                </span>
              </h2>
              <p className="mb-5 break-words text-sm leading-relaxed text-white/80 md:text-base">
                We run our own farming operation, so what we build gets tested
                where it matters. From AI crop advisory to livestock tools, our
                technology is designed for Zimbabwean conditions.
              </p>

              <div className="mb-6 flex flex-wrap gap-2 md:mb-8">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white md:text-xs"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/35 p-4 md:p-6">
                <div className="mb-3 flex items-center gap-3 md:mb-4 md:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 md:h-12 md:w-12">
                    <Smartphone className="text-green-300" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-white md:text-base">Mudhumeni</h3>
                    <p className="text-[11px] text-white/65 md:text-xs">
                      AI for the Zimbabwean farmer
                    </p>
                  </div>
                </div>
                <p className="mb-3 break-words text-xs text-white/80 md:mb-4 md:text-sm">
                  Point your phone at a crop and get an instant disease diagnosis.
                  Built on 50,000+ images of Zimbabwean crops, and works on-device
                  without reliable internet.
                </p>
                <Link
                  href="/products/mudhumeni"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-300 transition-colors hover:text-green-200"
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
                  className={`rounded-xl p-4 transition-colors hover:bg-black/60 md:p-5 ${PANEL}`}
                >
                  <f.icon className="mb-3 text-green-300" size={22} />
                  <h3 className="mb-1 break-words text-sm font-semibold text-white">{f.title}</h3>
                  <p className="break-words text-xs leading-relaxed text-white/75">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mt-8 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between md:mt-10 md:p-6 ${PANEL}`}
          >
            <div>
              <p className="text-sm font-semibold text-white">Running a farm or livestock operation?</p>
              <p className="mt-1 text-xs text-white/70 md:text-sm">
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

// Readability comes from frosted panels, not from dimming the photo.
const PANEL = "border border-white/15 bg-black/45 backdrop-blur-md";

export default function ConstructionSection() {
  return (
    <section id="construction" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Photo shown as-is: no overlay, no tint */}
      <div className="absolute inset-0">
        <Image
          src="/images/construction-hero.jpg"
          alt="Construction and engineering site"
          fill
          quality={95}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 px-5 sm:px-6 lg:px-8 xl:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className={`mb-8 max-w-3xl rounded-3xl p-6 md:mb-10 md:p-8 ${PANEL}`}
          >
            <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-orange-200 md:px-4">
              Construction & Engineering
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Site-tested engineering,{" "}
              <span className="bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">
                backed by smarter tools.
              </span>
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
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
                  className={`group rounded-2xl p-5 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-black/60 md:p-6 ${PANEL}`}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-orange-300">
                    <solution.icon size={21} />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-white md:text-base">
                    {solution.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/75 md:text-sm">
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
              className="self-start rounded-2xl border border-white/15 bg-black/55 p-6 shadow-2xl backdrop-blur-md md:p-7"
            >
              <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                Featured Product
              </span>
              <h3 className="mb-3 text-2xl font-bold text-white">AutoBOQ</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/80">
                AI-assisted Bill of Quantities generation from project requirements
                and technical documentation.
              </p>

              <div className="mb-6 rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-[11px] text-white/70">
                <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-white">PROJECT</span>
                  <span className="text-orange-300">BOQ</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between"><span>Earthworks</span><span>4,200 m&sup3;</span></div>
                  <div className="flex justify-between"><span>Drainage</span><span>1,240 m</span></div>
                  <div className="flex justify-between"><span>Kerbing</span><span>860 m</span></div>
                </div>
                <p className="mt-3 border-t border-white/10 pt-2 text-[10px] uppercase tracking-[.14em] text-white/45">
                  Sample output
                </p>
              </div>

              <Link
                href="/products/boq-generator"
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition-colors hover:text-orange-200"
              >
                Explore AutoBOQ <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mt-8 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between md:mt-10 md:p-6 ${PANEL}`}
          >
            <div>
              <p className="text-sm font-semibold text-white">Have a construction or engineering challenge?</p>
              <p className="mt-1 text-xs text-white/70 md:text-sm">
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

rm -rf .next
echo "Done. Now run: npm run build"
