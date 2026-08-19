"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Ruler, HardHat, Route, Building2, Truck, ShieldCheck } from "lucide-react";

const services = [
  { icon: Ruler, title: "BOQ Preparation", desc: "Automated bill of quantities with AI-assisted cost estimation." },
  { icon: HardHat, title: "Site Management", desc: "Digital oversight of labour, materials, and progress tracking." },
  { icon: Route, title: "Road Construction", desc: "Full-service road building from survey to surfacing." },
  { icon: Building2, title: "Civil Infrastructure", desc: "Bridges, drainage, and public works delivered on spec." },
  { icon: Truck, title: "Equipment & Logistics", desc: "Fleet management and material supply chain coordination." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous testing and compliance at every project phase." },
];

const projects = [
  { name: "Ruwa Road Rehabilitation", value: "$2.4M", status: "Completed" },
  { name: "Harare Industrial Park", value: "$8.1M", status: "In Progress" },
  { name: "Mutare Drainage System", value: "$1.2M", status: "Completed" },
  { name: "Chitungwiza Housing", value: "$4.5M", status: "Planning" },
];

export default function ConstructionSection() {
  return (
    <section id="construction" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/construction-hero.jpg"
          alt="Construction"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-midnight-900/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.06)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-4">
              Engineering & Civil Construction
            </span>
            <h2 className="heading-md text-white mb-4">
              Building{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
                Zimbabwe's Future
              </span>
            </h2>
            <p className="body-md text-midnight-300 max-w-2xl mx-auto">
              From BOQ automation to full-scale civil engineering — we deliver
              infrastructure projects with precision, transparency, and modern technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Services */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-5 rounded-xl glass-card hover:bg-white/[0.06] transition-colors"
                >
                  <svc.icon className="text-orange-400 mb-3" size={22} />
                  <h3 className="font-semibold text-white text-sm mb-1">{svc.title}</h3>
                  <p className="text-xs text-midnight-300 leading-relaxed">{svc.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Project list */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl glass-dark border border-orange-500/10 p-6"
            >
              <h3 className="font-bold text-white mb-6">Recent Projects</h3>
              <div className="space-y-4">
                {projects.map((p) => (
                  <div key={p.name} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-white">{p.name}</p>
                      <p className="text-xs text-midnight-400">{p.status}</p>
                    </div>
                    <span className="text-sm font-bold text-orange-400">{p.value}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
              >
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
