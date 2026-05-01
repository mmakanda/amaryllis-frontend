"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle2, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import { BRAND } from "@/lib/constants";
import { waLink } from "@/lib/utils";
import apiClient from "@/lib/api-client";

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormValues) {
    setError("");
    try {
      await apiClient.post("/contact", data);
      setSent(true);
      reset();
    } catch (e: any) {
      setError(e.message ?? "Something went wrong. Please try again.");
    }
  }

  const CONTACT_ITEMS = [
    { icon: Mail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: Phone, label: "WhatsApp / Phone", value: BRAND.phone1, href: `tel:${BRAND.phone1.replace(/\s/g,"")}` },
    { icon: Phone, label: "Alternative", value: BRAND.phone2, href: `tel:${BRAND.phone2.replace(/\s/g,"")}` },
    { icon: MapPin, label: "Address", value: `${BRAND.address}, ${BRAND.city}`, href: undefined },
    { icon: Clock, label: "Hours", value: `${BRAND.hours.weekdays} | ${BRAND.hours.saturday} | ${BRAND.hours.sunday}`, href: undefined },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-hero-mesh">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-orange">Get in Touch</p>
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
            Let's Start a{" "}
            <span className="text-flame">Conversation</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Whether you have a project in mind, need a quote, or just want to explore possibilities — our team is ready.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact info column */}
            <AnimatedSection className="lg:col-span-2" direction="right">
              <div className="rounded-2xl border border-border bg-foreground text-white p-8 h-full">
                <h2 className="text-xl font-bold mb-2">Contact Information</h2>
                <p className="text-white/60 text-sm mb-8">Reach out through any channel — we respond within one business day.</p>

                <ul className="space-y-6">
                  {CONTACT_ITEMS.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <item.icon className="h-4 w-4 text-brand-orange" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-white/50 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-white/80 hover:text-white transition-colors break-all">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-white/80 leading-relaxed">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <a
                    href={waLink(BRAND.whatsapp, decodeURIComponent("Hello Amaryllis Success, I'd like to enquire about your services."))}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us Directly
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Form column */}
            <AnimatedSection className="lg:col-span-3" delay={0.1}>
              <div className="rounded-2xl border border-border bg-white shadow-card p-8">
                <h2 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h2>

                {sent ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle2 className="h-14 w-14 text-green-500 mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm max-w-sm">
                      Thank you for reaching out. We'll be in touch within one business day.
                    </p>
                    <button onClick={() => setSent(false)} className="mt-6 text-sm text-brand-purple hover:underline">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                        <input {...register("name")} placeholder="Your full name"
                          className="w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
                        {errors.name && <p className="mt-1 text-xs text-error">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                        <input {...register("email")} type="email" placeholder="you@company.com"
                          className="w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
                        {errors.email && <p className="mt-1 text-xs text-error">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                      <input {...register("subject")} placeholder="How can we help?"
                        className="w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors" />
                      {errors.subject && <p className="mt-1 text-xs text-error">{errors.subject.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea {...register("message")} rows={6} placeholder="Tell us about your project or enquiry..."
                        className="w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors resize-none" />
                      {errors.message && <p className="mt-1 text-xs text-error">{errors.message.message}</p>}
                    </div>

                    {error && (
                      <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-error">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                      style={{ background: "linear-gradient(135deg,#7B2FBE,#C2449F,#F5821F)" }}
                    >
                      {isSubmitting ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                      ) : (
                        <><Send className="h-4 w-4" /> Send Message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
