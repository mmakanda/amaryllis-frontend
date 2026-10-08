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

const STATS = [
  { value: "5+", label: "AI products" },
  { value: "50+", label: "projects delivered" },
  { value: "3", label: "core industries" },
  { value: "24/7", label: "digital support" },
];

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
            AI products + digital engineering · Zimbabwe
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
            building practical technology for agriculture, construction,
            enterprise and research.
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
            className="mt-12 grid max-w-xl grid-cols-2 gap-x-5 gap-y-6 border-t border-white/10 pt-7 sm:grid-cols-4"
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

        <motion.div
          initial={{ opacity: 0, transform: "translateY(24px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative mx-auto h-[500px] w-full max-w-[590px] sm:h-[570px] lg:h-[620px]"
        >
          <div className="absolute inset-x-8 top-8 bottom-8 rounded-[2rem] border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-sm" />

          <div className="absolute right-0 top-0 h-[53%] w-[68%] overflow-hidden rounded-[1.8rem] border border-white/15 shadow-2xl">
            <Image
              src="/images/it-hero.jpg"
              alt="Digital engineering and enterprise technology"
              fill
              priority
              sizes="(max-width: 1024px) 68vw, 40vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] text-white/75 backdrop-blur-xl">
                Digital Engineering
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-[54%] w-[64%] overflow-hidden rounded-[1.8rem] border border-white/15 shadow-2xl">
            <Image
              src="/images/agriculture-hero.jpg"
              alt="Smart agriculture and crop production"
              fill
              sizes="(max-width: 1024px) 64vw, 38vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] text-white/75 backdrop-blur-xl">
                Smart Agriculture
              </span>
            </div>
          </div>

          <div className="absolute bottom-[10%] right-[4%] h-[39%] w-[46%] overflow-hidden rounded-[1.5rem] border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,.45)]">
            <Image
              src="/images/construction-hero.jpg"
              alt="Civil engineering and construction"
              fill
              sizes="(max-width: 1024px) 46vw, 28vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] text-white/75 backdrop-blur-xl">
                Construction
              </span>
            </div>
          </div>

          <div className="absolute left-[3%] top-[8%] z-20 w-[220px] rounded-2xl border border-white/15 bg-[#12111a]/95 p-4 shadow-[0_25px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl sm:w-[235px]">
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

          <div className="pointer-events-none absolute -bottom-4 right-10 h-28 w-28 rounded-full bg-[#7B2FBE]/20 blur-[70px]" />
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
