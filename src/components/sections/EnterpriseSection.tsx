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
