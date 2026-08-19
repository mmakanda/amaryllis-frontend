"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-32 bg-midnight-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.08)_0%,transparent_60%)]" />
      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-12 md:p-20 rounded-3xl overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-midnight-900/80 to-midnight-950/80 border border-brand-purple/20 rounded-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15)_0%,transparent_70%)]" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="heading-md text-white mb-6 text-balance">
                Ready to <span className="text-gradient">Transform</span> Your Business?
              </h2>
              <p className="body-lg text-midnight-300 mb-10">
                Whether you need a product demo, a consulting engagement, or a custom AI build — our team is here.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden transition-transform hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)",
                  }}
                >
                  <span className="relative flex items-center gap-2">
                    <Mail size={18} />
                    Start a Conversation
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
