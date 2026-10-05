"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#f4f0e9] py-20 text-[#17151c] md:py-28">
      <div className="absolute right-[-10%] top-[-30%] h-[500px] w-[500px] rounded-full bg-[#C2449F]/10 blur-[100px]" />
      <div className="absolute bottom-[-30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#7B2FBE]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(18px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-[2rem] border border-black/10 bg-white/45 px-6 py-12 shadow-[0_25px_90px_rgba(40,25,50,.09)] backdrop-blur-2xl sm:px-10 md:px-16 md:py-16"
        >
          <span className="text-[11px] font-bold uppercase tracking-[.22em] text-[#7B2FBE]">
            Let's build something useful
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-[.98] tracking-[-.055em] sm:text-5xl md:text-6xl">
            Have a problem worth solving?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-black/52 sm:text-base">
            Tell us what you are trying to achieve. We will help you find the
            right product, service or technology approach.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#17151c] px-6 py-3.5 text-sm font-semibold text-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(23,21,28,.2)]"
            >
              <Mail className="h-4 w-4" />
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/35 px-6 py-3.5 text-sm font-semibold transition-colors duration-200 hover:bg-white/65"
            >
              Explore products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

