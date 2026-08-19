"use client";

import { motion } from "framer-motion";
import { Shield, Lightbulb, TrendingUp, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We build trust through transparency, honesty, and consistent delivery on our promises.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We leverage cutting-edge AI and technology to solve real-world challenges across every sector.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description: "Every project we deliver creates measurable, lasting impact for communities and businesses.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards — in quality, safety, and client satisfaction.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-midnight-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,47,190,0.05)_0%,transparent_60%)]" />
      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-brand-purple/10 text-brand-purple border border-brand-purple/20 mb-4">
                Why Amaryllis
              </span>
              <h2 className="heading-md text-white mb-6 text-balance">
                Built for{" "}
                <span className="text-gradient">African Reality</span>
              </h2>
              <p className="body-lg text-midnight-300 mb-6">
                Amaryllis Success started with a simple observation: the tools being built for
                African businesses were either too generic to work in local conditions, or too
                expensive to deploy at scale.
              </p>
              <p className="body-md text-midnight-400 mb-8">
                Today we operate across agriculture, construction, and digital technology —
                with AI products deployed in the field and a team that understands Zimbabwe's
                infrastructure, regulations, and market realities from the ground up.
              </p>
              <div className="p-6 rounded-2xl glass-dark border border-white/5">
                <p className="text-white font-medium italic">
                  "We don't import solutions. We architect them for where you are, then scale them to where you're going."
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-purple/30 transition-all"
                >
                  <value.icon className="text-brand-orange mb-4" size={28} />
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-midnight-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
