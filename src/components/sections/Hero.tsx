"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";

const STATS = [
  { value: "5", label: "AI Products Live" },
  { value: "50+", label: "Projects Delivered" },
  { value: "4", label: "Business Units" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home.jpg"
          alt="AI and human collaboration"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-950/60 via-midnight-950/70 to-midnight-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full pt-32 pb-20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-1.5 text-xs font-semibold text-brand-purple mb-6 backdrop-blur-sm">
                <Zap className="h-3 w-3" /> AI Products & Expert Services · Zimbabwe
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-lg text-white mb-6 text-balance"
            >
              We Build{" "}
              <span className="text-gradient">AI Products</span>
              {" "}That Work in the{" "}
              <span className="text-gradient">Real World</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="body-lg text-white/70 mb-10 max-w-xl"
            >
              Amaryllis Success delivers AI-powered products and expert services across
              agriculture, construction, and digital transformation — built for Zimbabwean
              conditions, designed for scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all hover:shadow-glow-lg hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)",
                }}
              >
                Explore Our Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 backdrop-blur-sm"
              >
                Talk to Amara
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-10"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-gradient">{stat.value}</p>
                  <p className="text-xs text-white/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="rgba(20,20,32,1)"
            opacity="1"
          />
        </svg>
      </div>
    </section>
  );
}
