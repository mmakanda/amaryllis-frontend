"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Clock3,
  FlaskConical,
  Sparkles,
} from "lucide-react";

import { PRODUCTS } from "@/lib/constants";

const PRODUCT_VISUALS: Record<
  string,
  {
    image: string;
    featured?: boolean;
  }
> = {
  lexizw: {
    image: "/images/lexizw.png",
    featured: true,
  },
  mudhumeni: {
    image: "/images/agriculture-hero.jpg",
  },
  "boq-generator": {
    image: "/images/boq.jpeg",
  },
  researchmind: {
    image: "/images/researchmind.jpeg",
  },
  amara: {
    image: "/images/amara.jpeg",
  },
  inzwi: {
    image: "/images/inzwi.jpeg",
  },
};

function StatusBadge({
  status,
}: {
  status: "live" | "beta" | "coming-soon";
}) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-xl">
        <Sparkles className="h-3 w-3" />
        Live
      </span>
    );
  }

  if (status === "beta") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-xl">
        <FlaskConical className="h-3 w-3" />
        Beta
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/20 bg-amber-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300 backdrop-blur-xl">
      <Clock3 className="h-3 w-3" />
      Coming Soon
    </span>
  );
}

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#09090f] py-20 text-white md:py-28"
    >
      <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-[#7B2FBE]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C2449F]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[.22em] text-[#F5B800]">
              AI Products
            </span>

            <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
              Practical AI built for real-world problems.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
              From legal research and agriculture to construction,
              conversational AI and African-language technology, our products
              are designed around specific problems — not AI for AI&apos;s sake.
            </p>
          </div>

          <Link
            href="/products"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-white"
          >
            View all products
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => {
            const visual = PRODUCT_VISUALS[product.id];

            if (!visual) return null;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, transform: "translateY(18px)" }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0)",
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className={visual.featured ? "lg:col-span-2" : ""}
              >
                <Link
                  href={product.href}
                  className="group block h-full"
                >
                  <article className="relative min-h-[330px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.035] shadow-[0_22px_70px_rgba(0,0,0,.28)]">
                    <Image
                      src={visual.image}
                      alt={product.label}
                      fill
                      sizes={
                        visual.featured
                          ? "(max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 1024px) 50vw, 33vw"
                      }
                      className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080e] via-[#08080e]/85 to-[#08080e]/15" />

                    <div
                      className="absolute inset-x-0 top-0 h-1 opacity-80"
                      style={{
                        background: `linear-gradient(90deg, ${product.color}, transparent)`,
                      }}
                    />

                    <div className="relative flex min-h-[330px] flex-col justify-between p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.08] backdrop-blur-xl"
                          style={{
                            boxShadow: `0 0 30px ${product.color}22`,
                          }}
                        >
                          <product.icon
                            className="h-5 w-5"
                            style={{ color: product.color }}
                          />
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.18em] text-white/50 backdrop-blur-xl">
                            {product.tag}
                          </span>

                          <StatusBadge status={product.status} />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-white">
                          {product.label}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-white/65">
                          {product.tagline}
                        </p>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
                          {product.description}
                        </p>

                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors group-hover:text-white">
                          {product.ctaLabel}
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
