"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Amaryllis transformed how we monitor our crops. The Mudhumeni app gives us real-time insights we never had before.",
    author: "Isaac Bwanya",
    role: "Farm Manager · Dunstan Plot",
  },
  {
    quote: "Their AutoBOQ tool cut our estimation time in half. The accuracy is remarkable and it's already paying for itself.",
    author: "Tsitsi Utaumire",
    role: "Architect · Gekam Holdings",
  },
  {
    quote: "The IT infrastructure they built for us has been rock-solid. Their response time has consistently impressed our team.",
    author: "Tafadzwa Makanda",
    role: "DevOps Engineer · EdwardMikel",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#09090f] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-2xl">
          <span className="text-[11px] font-bold uppercase tracking-[.22em] text-[#F5B800]">
            Client perspective
          </span>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
            What working together feels like.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.author}
              initial={{ opacity: 0, transform: "translateY(18px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
            >
              <Quote className="h-7 w-7 text-[#C2449F]" />
              <p className="mt-7 text-[15px] leading-7 text-white/68">“{item.quote}”</p>
              <div className="mt-7 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#F5B800] text-[#F5B800]" />
                ))}
              </div>
              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-white">{item.author}</p>
                <p className="mt-1 text-xs text-white/38">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

