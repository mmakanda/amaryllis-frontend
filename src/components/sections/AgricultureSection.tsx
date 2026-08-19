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
    <section id="agriculture" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/agriculture-hero.jpg"
          alt="Smart Agriculture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-midnight-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.06)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - CTA card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 mb-4">
                Smart Agriculture & AgriTech
              </span>
              <h2 className="heading-md text-white mb-6 text-balance">
                Growing Smarter,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                  Harvesting Better
                </span>
              </h2>
              <p className="body-md text-midnight-300 mb-8">
                From precision farming to AI-powered crop advisory, we bring
                cutting-edge technology to Zimbabwe's agricultural sector.
                Our Mudhumeni platform is already helping farmers increase
                yields by up to 30%.
              </p>

              <div className="p-6 rounded-2xl glass-dark border border-green-500/10 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Smartphone className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Mudhumeni</h3>
                    <p className="text-xs text-midnight-300">AI-Powered Farming Assistant</p>
                  </div>
                </div>
                <p className="text-sm text-midnight-300 mb-4">
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
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-5 rounded-xl glass-card hover:bg-white/[0.06] transition-colors"
                >
                  <f.icon className="text-green-400 mb-3" size={22} />
                  <h3 className="font-semibold text-white text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-midnight-300 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
