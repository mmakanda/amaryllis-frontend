"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Brain, MessageSquare, Database, Star } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Custom AI Models",
    desc: "Fine-tuned models for your specific domain — agriculture, legal, construction.",
  },
  {
    icon: MessageSquare,
    title: "LLM Integration",
    desc: "Deploy conversational AI across your operations with enterprise-grade security.",
  },
  {
    icon: Database,
    title: "Data Pipelines",
    desc: "End-to-end data engineering — ingestion, transformation, and real-time inference.",
  },
  {
    icon: Sparkles,
    title: "Digital Products",
    desc: "Full-stack product development from concept to production deployment.",
  },
];

const metrics = [
  { label: "Model Accuracy", value: "94%" },
  { label: "Inference Speed", value: "<100ms" },
  { label: "Uptime SLA", value: "99.9%" },
  { label: "Models Deployed", value: "12+" },
];

export default function AISection() {
  return (
    <section id="ai-services" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/ai-hero.jpg"
          alt="AI technology"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-midnight-900/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.08)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 px-5 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="min-w-0"
            >
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium bg-brand-purple/10 text-brand-purple border border-brand-purple/20 mb-3 md:mb-4">
                AI & Digital Transformation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 md:mb-6 break-words">
                Intelligence That{" "}
                <span className="text-gradient">Understands Context</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-midnight-300 mb-6 md:mb-8 break-words">
                We don't just deploy models — we architect AI systems that understand
                Zimbabwean languages, local regulations, and real-world constraints.
                From LexAI for legal research to Mudhumeni's crop disease detection,
                our AI is trained on local data.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-4 md:p-5 rounded-xl glass-card hover:bg-white/[0.06] transition-colors"
                  >
                    <cap.icon className="text-brand-purple mb-3" size={22} />
                    <h3 className="font-semibold text-white text-sm mb-1 break-words">{cap.title}</h3>
                    <p className="text-xs text-midnight-300 leading-relaxed break-words">{cap.desc}</p>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl px-4 md:px-6 py-2.5 md:py-3 text-sm font-semibold text-white border border-brand-purple/30 hover:bg-brand-purple/10 transition-colors"
              >
                View AI Products <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Right metrics card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative min-w-0"
            >
              <div className="absolute -inset-4 bg-brand-purple/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl glass-dark p-6 md:p-8 border border-brand-purple/10">
                <div className="flex items-center gap-2 mb-6 md:mb-8">
                  <Star className="text-brand-orange" size={20} />
                  <span className="text-sm font-semibold text-white">Performance Metrics</span>
                </div>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {metrics.map((m) => (
                    <div key={m.label} className="text-center p-3 md:p-4 rounded-xl bg-white/[0.03]">
                      <div className="text-xl md:text-2xl font-extrabold text-gradient mb-1">{m.value}</div>
                      <div className="text-xs text-midnight-300">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 md:mt-8 p-3 md:p-4 rounded-xl bg-brand-purple/5 border border-brand-purple/10">
                  <p className="text-sm text-midnight-200 italic break-words">
                    "Our legal AI reduced research time from 6 hours to 45 minutes per case."
                  </p>
                  <p className="text-xs text-midnight-400 mt-2">— Zimbabwe Law Society Member</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

