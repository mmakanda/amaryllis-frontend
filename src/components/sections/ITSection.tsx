"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Server, Cloud, Shield, Monitor, Headphones, RotateCcw } from "lucide-react";

const services = [
  { icon: Server, title: "Infrastructure Design", desc: "Scalable architecture for cloud and on-premise deployments." },
  { icon: Cloud, title: "Cloud Migration", desc: "Seamless transition to AWS, Azure, or private cloud environments." },
  { icon: Shield, title: "Cybersecurity", desc: "Enterprise-grade security audits, penetration testing, and compliance." },
  { icon: Monitor, title: "System Integration", desc: "Connect legacy systems with modern APIs and microservices." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock monitoring and incident response." },
  { icon: RotateCcw, title: "Disaster Recovery", desc: "Backup strategies that keep your business running through any crisis." },
];

const slaMetrics = [
  { label: "Network Uptime", value: "99.97%" },
  { label: "Response Time", value: "<15 min" },
  { label: "Resolution Rate", value: "98.5%" },
  { label: "Client Retention", value: "96%" },
];

export default function ITSection() {
  return (
    <section id="it-services" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/it-hero.jpg"
          alt="IT Infrastructure"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-midnight-900/72" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 px-5 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3 md:mb-4">
              Enterprise IT & Managed Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 md:mb-4 break-words">
              Infrastructure That{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Never Sleeps
              </span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-midnight-300 max-w-2xl mx-auto break-words">
              From architecture consulting to fully managed IT operations — we design,
              build, and maintain the backbone of your digital business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 md:p-6 rounded-xl glass-card hover:bg-white/[0.06] transition-colors group"
              >
                <svc.icon className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="font-semibold text-white mb-2 break-words">{svc.title}</h3>
                <p className="text-xs md:text-sm text-midnight-300 leading-relaxed break-words">{svc.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* SLA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl glass-dark border border-blue-500/10 p-6 md:p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {slaMetrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">
                    {m.value}
                  </div>
                  <div className="text-xs text-midnight-300">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

