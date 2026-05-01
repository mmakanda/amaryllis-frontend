"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  title?: string;
}

export function TestimonialsCarousel({
  testimonials,
  title = "What Our Clients Say",
}: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  if (!testimonials.length) return null;

  function go(dir: number) {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }

  const t = testimonials[index];

  return (
    <section className="py-20 bg-muted/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">
          Testimonials
        </p>
        <h2 className="mb-12 text-3xl font-extrabold text-foreground sm:text-4xl">{title}</h2>

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <div className="mx-auto max-w-2xl rounded-2xl bg-white border border-border shadow-card p-8">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < t.rating
                          ? "fill-brand-gold text-brand-gold"
                          : "text-border fill-border"
                      )}
                    />
                  ))}
                </div>

                <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{t.content}"
                </blockquote>

                <div className="flex items-center justify-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full text-white font-bold text-sm"
                    style={{ background: "linear-gradient(135deg,#7B2FBE,#C2449F)" }}>
                    {t.author_name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{t.author_name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.author_role}{t.company ? ` · ${t.company}` : ""}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        {testimonials.length > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm hover:border-brand-purple hover:text-brand-purple transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index ? "w-6 bg-brand-purple" : "w-2 bg-border hover:bg-brand-purple/40"
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm hover:border-brand-purple hover:text-brand-purple transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
