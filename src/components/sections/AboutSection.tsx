"use client";

import { motion } from "framer-motion";
import { Shield, Lightbulb, TrendingUp, Award, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const values = [
  { icon: Shield, title: "Integrity", description: "Transparent delivery, honest advice and clear accountability." },
  { icon: Lightbulb, title: "Innovation", description: "Modern technology applied to problems that actually matter." },
  { icon: TrendingUp, title: "Impact", description: "Solutions measured by outcomes, not by how impressive they sound." },
  { icon: Award, title: "Excellence", description: "High standards across product, engineering and client experience." },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f4f0e9] py-20 text-[#17151c] md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(18px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[.22em] text-[#7B2FBE]">
              Why Amaryllis
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-[.98] tracking-[-.05em] sm:text-5xl">
              Built for African reality.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-black/58">
              The best technology is not the most complicated. It is the
              technology that works in the environment where it is deployed.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-black/48">
              We combine local context, strong engineering and practical
              product thinking to build systems that can start here and scale
              beyond Zimbabwe.
            </p>

            <div className="mt-8 rounded-[1.6rem] border border-black/10 bg-white/45 p-6 shadow-[0_20px_60px_rgba(30,20,40,.06)] backdrop-blur-xl">
              <p className="text-base font-medium leading-7 tracking-tight">
                “We don't import solutions. We architect them for where you are,
                then scale them to where you're going.”
              </p>
              <Link href="/about" className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7B2FBE]">
                Our story
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, transform: "translateY(18px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-[1.5rem] border border-black/10 bg-white/35 p-6 backdrop-blur-xl transition-[transform,background,border-color] duration-200 hover:-translate-y-1 hover:bg-white/55 hover:border-black/15"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#7B2FBE]/10 text-[#7B2FBE]">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/50">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

