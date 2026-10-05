"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Leaf, FileText, Calculator, FileCheck, MessageCircle } from "lucide-react";

const PRODUCTS = [
  {
    id: "mudhumeni",
    label: "Mudhumeni",
    tag: "AgriTech",
    tagline: "AI-powered farming assistant",
    description: "Crop monitoring, disease detection, market prices and irrigation scheduling for Zimbabwean farmers.",
    color: "#55c878",
    icon: Leaf,
    href: "/products",
    image: "/images/agriculture-hero.jpg",
  },
  {
    id: "lexai",
    label: "LexAI",
    tag: "Legal AI",
    tagline: "Legal research, automated",
    description: "AI-powered legal research, case analysis and document workflows for Zimbabwean practitioners.",
    color: "#b58ae8",
    icon: FileText,
    href: "/products",
    image: "/images/it-hero.jpg",
  },
  {
    id: "autoboq",
    label: "AutoBOQ",
    tag: "Construction",
    tagline: "Smart bills of quantities",
    description: "Automated BOQ generation with AI-assisted cost estimation and material scheduling.",
    color: "#ffae65",
    icon: Calculator,
    href: "/products",
    image: "/images/construction-hero.jpg",
  },
  {
    id: "documind",
    label: "DocuMind",
    tag: "Document AI",
    tagline: "Intelligent document processing",
    description: "Extract, classify and analyse documents with enterprise-grade workflows.",
    color: "#70b8ff",
    icon: FileCheck,
    href: "/products",
    image: "/images/it-hero.jpg",
  },
  {
    id: "amara",
    label: "Amara",
    tag: "Conversational AI",
    tagline: "Your AI business assistant",
    description: "Conversational AI for customer support, knowledge and process automation.",
    color: "#df82bd",
    icon: MessageCircle,
    href: "/products/amara",
    image: "/images/it-hero.jpg",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="relative overflow-hidden bg-[#09090f] py-20 text-white md:py-28">
      <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-[#7B2FBE]/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[.22em] text-[#F5B800]">
              Products
            </span>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
              Useful AI, not AI theatre.
            </h2>
          </div>
          <Link href="/products" className="group inline-flex items-center gap-2 text-sm font-semibold text-white/65 hover:text-white">
            View all products
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, transform: "translateY(18px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <Link href={product.href} className="group block h-full">
                <article className="relative min-h-[310px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.035] shadow-[0_22px_70px_rgba(0,0,0,.28)]">
                  <Image
                    src={product.image}
                    alt={product.label}
                    fill
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 50vw, 33vw"}
                    className="object-cover opacity-45 transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080e] via-[#08080e]/80 to-[#08080e]/15" />
                  <div className="relative flex min-h-[310px] flex-col justify-between p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.08] backdrop-blur-xl">
                        <product.icon className="h-5 w-5" style={{ color: product.color }} />
                      </div>
                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.18em] text-white/50 backdrop-blur-xl">
                        {product.tag}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white">{product.label}</h3>
                      <p className="mt-1 text-sm font-medium text-white/60">{product.tagline}</p>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">{product.description}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors group-hover:text-white">
                        Explore
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
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

