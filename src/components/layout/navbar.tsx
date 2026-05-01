"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, BRAND } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl transition-transform group-hover:scale-105">
            <Image
              src="/images/logo.jpeg"
              alt="Amaryllis Success logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p
              className={cn(
                "font-bold text-lg tracking-tight transition-colors",
                scrolled ? "text-brand-purple" : "text-brand-purple"
              )}
            >
              Amaryllis
            </p>
            <p className="text-xs font-medium text-brand-charcoal -mt-0.5">Success</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <div
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      scrolled
                        ? "text-foreground hover:text-brand-purple hover:bg-primary-50"
                        : "text-foreground hover:text-brand-purple hover:bg-white/20"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        activeDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-1 w-52 rounded-xl border border-border bg-white shadow-lg overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary-50 hover:text-brand-purple",
                              pathname === child.href
                                ? "text-brand-purple bg-primary-50"
                                : "text-foreground"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-brand-purple bg-primary-50"
                      : scrolled
                      ? "text-foreground hover:text-brand-purple hover:bg-primary-50"
                      : "text-foreground hover:text-brand-purple hover:bg-white/20"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-brand-gradient px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-glow hover:scale-105 active:scale-100"
            style={{
              background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)",
            }}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden rounded-lg p-2 text-foreground hover:bg-primary-50 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-border bg-white/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </p>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:text-brand-purple hover:bg-primary-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "text-brand-purple bg-primary-50"
                          : "text-foreground hover:text-brand-purple hover:bg-primary-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-border">
                <Link
                  href="/contact"
                  className="block text-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)",
                  }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
