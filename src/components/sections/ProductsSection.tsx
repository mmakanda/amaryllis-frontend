"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, FileText, Calculator, FileCheck, MessageCircle } from "lucide-react";

const PRODUCTS = [
  {
    id: "mudhumeni",
    label: "Mudhumeni",
    tag: "AgriTech",
    tagline: "AI-Powered Farming Assistant",
    description: "Real-time crop monitoring, disease detection, market prices, and irrigation scheduling for Zimbabwean farmers.",
    color: "#22c55e",
    icon: Leaf,
    status: "live",
    href: "/products",
    image: "/images/agriculture-hero.jpg",
  },
  {
    id: "lexai",
    label: "LexAI",
    tag: "Legal AI",
    tagline: "Legal Research, Automated",
    description: "AI-powered legal research, case law analysis, and document drafting for Zimbabwean practitioners.",
    color: "#7B2FBE",
    icon: FileText,
    status: "live",
    href: "/products",
    image: "/images/ai-hero.jpg",
  },
  {
    id: "autoboq",
    label: "AutoBOQ",
    tag: "Construction",
    tagline: "Smart Bill of Quantities",
    description: "Automated BOQ generation with AI-assisted cost estimation and material scheduling.",
    color: "#f97316",
    icon: Calculator,
    status: "live",
    href: "/products",
    image: "/images/construction-hero.jpg",
  },
  {
    id: "documind",
    label: "DocuMind",
    tag: "Document AI",
    tagline: "Intelligent Document Processing",
    description: "Extract, classify, and analyze documents with enterprise-grade accuracy and local compliance.",
    color: "#3b82f6",
    icon: FileCheck,
    status: "beta",
    href: "/products",
    image: "/images/it-hero.jpg",
  },
  {
    id: "amara",
    label: "Amara",
    tag: "Conversational AI",
    tagline: "Your AI Business Assistant",
    description: "Enterprise conversational AI for customer support, internal knowledge, and process automation.",
    color: "#C2449F",
    icon: MessageCircle,
    status: "coming-soon",
    href: "/products",
    image: "/images/ai-hero.jpg",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-32 bg-midnight-900">
      <div className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-brand-purple/10 text-brand-purple border border-brand-purple/20 mb-4">
              Our Products
            </span>
            <h2 className="heading-md text-white mb-4">
              Five AI Tools.{" "}
              <span className="text-gradient">Real Problems Solved.</span>
            </h2>
            <p className="body-md text-midnight-300 max-w-2xl mx-auto">
              From legal research to crop disease detection to automated bills of quantities —
              our products are deployed, in use, and delivering results today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={product.href} className="group block h-full">
                  <div className="relative h-full rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1">
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <Image
                        src={product.image}
                        alt={product.label}
                        fill
                        quality={90}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/90 to-midnight-950/70" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-7 flex flex-col h-full min-h-[320px]">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10"
                          style={{ backgroundColor: `${product.color}14` }}
                        >
                          <product.icon className="h-6 w-6" style={{ color: product.color }} />
                        </div>
                        {product.status === "live" && (
                          <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-bold text-green-400 border border-green-500/20">
                            LIVE
                          </span>
                        )}
                        {product.status === "beta" && (
                          <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-bold text-blue-400 border border-blue-500/20">
                            BETA
                          </span>
                        )}
                        {product.status === "coming-soon" && (
                          <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-bold text-amber-400 border border-amber-500/20">
                            IN DEV
                          </span>
                        )}
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: product.color }}>
                          {product.tag}
                        </p>
                        <h3 className="font-bold text-white text-xl mb-1 group-hover:text-gradient transition-all">
                          {product.label}
                        </h3>
                        <p className="text-sm font-medium text-white/60 mb-3 italic">
                          {product.tagline}
                        </p>
                        <p className="text-sm text-midnight-300 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/5">
                        <span
                          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                          style={{ color: product.color }}
                        >
                          Learn more
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
