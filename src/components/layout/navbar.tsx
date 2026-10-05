"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-midnight-950/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "bg-midnight-950/20 backdrop-blur-md"
      )}
    >
      <nav
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="focus-ring group flex items-center gap-2.5 rounded-xl"
          aria-label="Amaryllis Success home"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/10 shadow-glow transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.jpeg"
              alt="Amaryllis Success logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="text-lg font-bold tracking-tight text-white">
              Amaryllis
            </p>
            <p className="-mt-0.5 text-xs font-medium text-white/50">
              Success
            </p>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <div
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                    onClick={() =>
                      setActiveDropdown((current) =>
                        current === item.label ? null : item.label
                      )
                    }
                    className={cn(
                      "focus-ring flex items-center gap-1 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all",
                      activeDropdown === item.label
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/[0.06] hover:text-white"
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
                        className="absolute left-0 top-full mt-2 w-60 overflow-hidden rounded-2xl border border-white/10 bg-midnight-950/95 p-1.5 shadow-2xl backdrop-blur-2xl"
                      >
                        {item.children.map((child) => {
                          const active = pathname === child.href;

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "focus-ring block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                                active
                                  ? "bg-brand-purple/15 text-white"
                                  : "text-white/65 hover:bg-white/[0.06] hover:text-white"
                              )}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "focus-ring block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all",
                    pathname === item.href
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="focus-ring inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-glow-lg"
            style={{
              background:
                "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)",
            }}
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="focus-ring rounded-xl border border-white/10 bg-white/[0.05] p-2.5 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 bg-midnight-950/95 backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-5 sm:px-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-2">
                      <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                        {item.label}
                      </p>

                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "focus-ring block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                            pathname === child.href
                              ? "bg-brand-purple/15 text-white"
                              : "text-white/65 hover:bg-white/[0.06] hover:text-white"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "focus-ring block rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="border-t border-white/10 pt-4">
                <Link
                  href="/contact"
                  className="focus-ring block rounded-xl px-5 py-3 text-center text-sm font-semibold text-white shadow-glow"
                  style={{
                    background:
                      "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)",
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

