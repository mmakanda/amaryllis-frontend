"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Amaryllis transformed how we monitor our crops. The Mudhumeni app gives us real-time insights we never had before. Yield has improved by 30% this season.",
    author: "Isaac Bwanya",
    role: "Farm Manager · Dunstan Plot",
    rating: 5,
  },
  {
    quote: "Their AutoBOQ tool cut our estimation time in half. The accuracy is remarkable and it's already paying for itself on our second project.",
    author: "Tsitsi Utaumire",
    role: "Architect · Freelancer",
    rating: 5,
  },
  {
    quote: "The IT infrastructure they built for us has been rock-solid. 99.9% uptime and their response time is under 15 minutes every single time.",
    author: "Tafadzwa Makanda.",
    role: "DevOps Engineer ·EdwardMikel ",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 bg-midnight-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.05)_0%,transparent_60%)]" />
      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-brand-purple/10 text-brand-purple border border-brand-purple/20 mb-4">
              Testimonials
            </span>
            <h2 className="heading-md text-white mb-4">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-8 rounded-2xl glass-dark border border-white/5"
              >
                <Quote className="text-brand-purple/30 mb-4" size={32} />
                <p className="text-midnight-200 leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-brand-orange fill-brand-orange" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-sm text-midnight-400">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
