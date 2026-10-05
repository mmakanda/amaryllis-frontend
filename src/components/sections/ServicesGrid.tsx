"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "AI & Digital Transformation",
    desc: "Custom AI deployments, LLM integration and digital product development.",
    image: "/images/it-hero.jpg",
    href: "#ai-services",
  },
  {
    number: "02",
    title: "Enterprise IT & Managed Services",
    desc: "Architecture consulting, system integration and resilient IT infrastructure.",
    image: "/images/it-hero.jpg",
    href: "#it-services",
  },
  {
    number: "03",
    title: "Smart Agriculture & AgriTech",
    desc: "Precision farming, IoT deployment and agricultural AI services.",
    image: "/images/agriculture-hero.jpg",
    href: "#agriculture",
  },
  {
    number: "04",
    title: "Engineering & Civil Construction",
    desc: "Site management, BOQ preparation, roads and civil infrastructure.",
    image: "/images/construction-hero.jpg",
    href: "#construction",
  },
  {
    number: "05",
    title: "Research & Innovation",
    desc: "Emerging technology research and partnerships focused on African impact.",
    image: "/images/it-hero.jpg",
    href: "#research",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f4f0e9] py-20 text-[#17151c] md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid items-end gap-8 border-b border-black/10 pb-10 md:grid-cols-[.8fr_1.2fr] md:pb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[.22em] text-[#7B2FBE]">
              What we do
            </span>
            <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-[-.045em] sm:text-5xl">
              Expertise with a practical point of view.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-black/55 sm:text-base">
            We bring product thinking, engineering discipline and local
            context together — from the first strategy session to production.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, transform: "translateY(20px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <Link href={service.href} className="group block h-full">
                <article className="relative min-h-[330px] overflow-hidden rounded-[1.7rem] border border-black/10 bg-[#191720] shadow-[0_18px_60px_rgba(28,20,38,.12)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09080e] via-[#09080e]/50 to-transparent" />
                  <div className="relative flex min-h-[330px] flex-col justify-between p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-[.18em] text-white/65 backdrop-blur-xl">
                        {service.number}
                      </span>
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-transform duration-200 group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="max-w-xl">
                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-sm leading-6 text-white/62">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

