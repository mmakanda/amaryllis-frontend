"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, Bug, TrendingUp, Satellite, Smartphone, Radio } from "lucide-react";

const features = [
  { icon: Droplets, title: "Irrigation Management", desc: "Smart water scheduling based on soil moisture and weather forecasts." },
  { icon: Bug, title: "Pest & Disease AI", desc: "Image-based detection of crop diseases with treatment recommendations." },
  { icon: TrendingUp, title: "Yield Prediction", desc: "ML models trained on local soil and climate data for accurate forecasts." },
  { icon: Satellite, title: "Satellite Monitoring", desc: "Remote sensing for large-scale farm health assessment." },
  { icon: Smartphone, title: "Mudhumeni App", desc: "Farmer-facing mobile platform for real-time advisory and market prices." },
  { icon: Radio, title: "IoT Sensors", desc: "Soil, weather, and livestock monitoring with low-power LoRa networks." },
];

export default function AgricultureSection() {
  return (
    <section id="agriculture" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/agriculture-hero.jpg"
          alt="Smart Agriculture"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-midnight-900/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.06)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 px-5 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left - CTA card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="min-w-0"
            >
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 mb-3 md:mb-4">
                Smart Agriculture & AgriTech
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 md:mb-6 break-words">
                Growing Smarter,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                  Harvesting Better
                </span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-midnight-300 mb-6 md:mb-8 break-words">
                From precision farming to AI-powered crop advisory, we bring
                cutting-edge technology to Zimbabwe's agricultural sector.
                Our Mudhumeni platform is already helping farmers increase
                yields by up to 30%.
              </p>

              <div className="p-4 md:p-6 rounded-2xl glass-dark border border-green-500/10 mb-6 md:mb-8">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <Smartphone className="text-green-400" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-sm md:text-base">Mudhumeni</h3>
                    <p className="text-[11px] md:text-xs text-midnight-300">AI-Powered Farming Assistant</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-midnight-300 mb-3 md:mb-4 break-words">
                  Real-time crop monitoring, disease detection, market prices, and
                  irrigation scheduling — all in one app built for Zimbabwean farmers.
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors"
                >
                  Explore Mudhumeni <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right - feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-4 md:p-5 rounded-xl glass-card hover:bg-white/[0.06] transition-colors"
                >
                  <f.icon className="text-green-400 mb-3" size={22} />
                  <h3 className="font-semibold text-white text-sm mb-1 break-words">{f.title}</h3>
                  <p className="text-xs text-midnight-300 leading-relaxed break-words">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

