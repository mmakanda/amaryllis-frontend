"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "AI & Digital Transformation",
    desc: "Custom AI deployments, LLM integration, and digital product development.",
    image: "/images/ai-hero.jpg",
    href: "#ai-services",
    color: "#c084fc",
  },
  {
    title: "Enterprise IT & Managed Services",
    desc: "Architecture consulting, system integration, and managed IT infrastructure.",
    image: "/images/it-hero.jpg",
    href: "#it-services",
    color: "#60a5fa",
  },
  {
    title: "Smart Agriculture & AgriTech",
    desc: "Precision farming advisory, IoT deployment, and agricultural AI services.",
    image: "/images/agriculture-hero.jpg",
    href: "#agriculture",
    color: "#4ade80",
  },
  {
    title: "Engineering & Civil Construction",
    desc: "Site management, BOQ preparation, road construction, and civil infrastructure.",
    image: "/images/construction-hero.jpg",
    href: "#construction",
    color: "#fb923c",
  },
  {
    title: "Research & Innovation",
    desc: "Emerging technology research and innovation partnerships.",
    image: "/images/ai-hero.jpg",
    href: "#research",
    color: "#f472b6",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-24 bg-midnight-900">
      <div className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-brand-purple/10 text-brand-purple border border-brand-purple/20 mb-4">
              Our Services
            </span>
            <h2 className="heading-md text-white mb-4">
              Expert Services Across{" "}
              <span className="text-gradient">Five Domains</span>
            </h2>
            <p className="body-md text-midnight-300 max-w-2xl mx-auto">
              Beyond our products, our teams deliver hands-on expertise in AI consulting,
              civil engineering, agricultural advisory, and IT infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={svc.href} className="group block h-full">
                  <div className="relative h-full rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1">
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        quality={90}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/80 to-midnight-950/40" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-7 flex flex-col h-full min-h-[280px]">
                      <div className="flex-1" />
                      <div>
                        <h3 className="font-bold text-white text-lg mb-2 group-hover:text-gradient transition-all">
                          {svc.title}
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed mb-4">
                          {svc.desc}
                        </p>
                        <span
                          className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                          style={{ color: svc.color }}
                        >
                          Learn more
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
