"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  {
    name: "Services",
    href: "#services",
    children: [
      { name: "AI & Digital", href: "#ai-services" },
      { name: "Enterprise IT", href: "#it-services" },
      { name: "Agriculture", href: "#agriculture" },
      { name: "Construction", href: "#construction" },
      { name: "Research", href: "#research" },
    ],
  },
  { name: "About", href: "#about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-midnight-900/90 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="section-padding">
        <div className="container-wide flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Amaryllis Success"
              width={36}
              height={36}
              className="h-8 w-8 md:h-10 md:w-auto"
              priority
            />
            <div className="hidden sm:block">
              <div className="text-white md:text-lg font-bold leading-tight">Amaryllis</div>
              <div className="text-[8px] md:text-[9px] uppercase tracking-[0.25em] text-brand-orange -mt-0.5">
                Success
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 xl:px-4 py-2 text-white/70 font-medium hover:text-white transition-colors rounded-lg hover:bg-white/5">
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 rounded-xl glass-dark shadow-dark-card overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 xl:px-4 py-2 text-white/70 font-medium hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-4 xl:px-5 py-2 md:py-2.5 text-white font-semibold transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)",
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2.5 text-white rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[80vw] max-w-[320px] bg-midnight-900 border-white/10 shadow-2xl"
            >
              <div className="p-6 space-y-1 overflow-y-auto h-full">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.name} className="border-white/5 last:border-0">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full px-4 py-3.5 text-white/80 font-medium hover:text-white"
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block pl-8 pr-4 py-3 text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => {
                                  setMobileOpen(false);
                                  setServicesOpen(false);
                                }}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-3.5 text-white/80 font-medium hover:text-white hover:bg-white/5 rounded-lg transition-colors border-white/5 last:border-0"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="block w-full text-white rounded-full px-5 py-3.5 font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

