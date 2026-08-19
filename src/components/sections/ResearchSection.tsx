"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Atom, Crosshair, Zap, BookOpen, FlaskConical } from "lucide-react";

const focusAreas = [
  { icon: Atom, title: "Quantum Computing", desc: "Exploring quantum algorithms for optimization problems in logistics and agriculture." },
  { icon: Crosshair, title: "Biotech & Genomics", desc: "Crop genome analysis for drought-resistant strain development." },
  { icon: Zap, title: "Renewable Energy AI", desc: "ML models for solar and wind farm output prediction in Southern Africa." },
  { icon: BookOpen, title: "Open Research", desc: "Publishing datasets and models for the African AI research community." },
];

const partners = [
  "University of Zimbabwe",
  "Harare Institute of Technology",
  "African Institute for Mathematical Sciences",
  "CIRAD",
];

const stats = [
  { label: "Research Papers", value: "8" },
  { label: "Active Grants", value: "3" },
  { label: "PhD Collaborations", value: "5" },
  { label: "Open Datasets", value: "12" },
];

export default function ResearchSection() {
  return (
    <section id="research" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/ai-hero.jpg"
          alt="Research"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-midnight-900/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.06)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 px-5 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="min-w-0"
            >
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-3 md:mb-4">
                Research & Innovation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 md:mb-6 break-words">
                Pushing{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                  Boundaries
                </span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-midnight-300 mb-6 md:mb-8 break-words">
                We invest in emerging technology research that matters for Africa.
                From quantum computing applications to genomics-driven agriculture,
                our research partnerships create knowledge that drives innovation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {focusAreas.map((area, i) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-4 md:p-5 rounded-xl glass-card hover:bg-white/[0.06] transition-colors"
                  >
                    <area.icon className="text-pink-400 mb-3" size={22} />
                    <h3 className="font-semibold text-white text-sm mb-1 break-words">{area.title}</h3>
                    <p className="text-xs text-midnight-300 leading-relaxed break-words">{area.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span
                    key={p}
                    className="px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[11px] md:text-xs font-medium bg-white/5 text-midnight-200 border border-white/10"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-4 md:p-6 rounded-2xl glass-dark border border-pink-500/10 text-center"
                >
                  <div className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 mb-1">
                    {s.value}
                  </div>
                  <div className="text-xs text-midnight-300">{s.label}</div>
                </div>
              ))}
              <div className="col-span-2 p-4 md:p-6 rounded-2xl glass-dark border border-pink-500/10">
                <div className="flex items-center gap-3 mb-3">
                  <FlaskConical className="text-pink-400" size={20} />
                  <span className="font-semibold text-white text-sm">Research Partnerships</span>
                </div>
                <p className="text-xs md:text-sm text-midnight-300 leading-relaxed break-words">
                  Interested in collaborating? We welcome academic and industry partnerships
                  focused on technology for African development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

