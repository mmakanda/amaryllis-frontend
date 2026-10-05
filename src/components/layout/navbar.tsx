"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-6">
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-2xl border px-3 sm:px-4",
          "transition-[background,border-color,box-shadow,backdrop-filter] duration-300",
          scrolled
            ? "border-white/15 bg-[#0b0a10]/80 shadow-[0_18px_60px_rgba(0,0,0,.28)] backdrop-blur-2xl"
            : "border-white/10 bg-[#0b0a10]/45 backdrop-blur-xl"
        )}
      >
        <Link
          href="/"
          aria-label="Amaryllis Success home"
          className="group flex items-center gap-2.5 rounded-xl"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_8px_25px_rgba(0,0,0,.2)] transition-transform duration-200 group-hover:scale-[1.03]">
            <Image
              src="/images/logo.jpeg"
              alt="Amaryllis Success logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden leading-none sm:block">
            <p className="text-[15px] font-semibold tracking-[-.02em] text-white">Amaryllis</p>
            <p className="mt-1 text-[9px] font-medium uppercase tracking-[.24em] text-white/40">Success</p>
          </div>
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
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
                    onClick={() => setActiveDropdown((current) => current === item.label ? null : item.label)}
                    className={cn(
                      "flex items-center gap-1 rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-[background,color]",
                      activeDropdown === item.label
                        ? "bg-white/10 text-white"
                        : "text-white/62 hover:bg-white/[0.06] hover:text-white"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", activeDropdown === item.label && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, transform: "translateY(6px) scale(.98)" }}
                        animate={{ opacity: 1, transform: "translateY(0) scale(1)" }}
                        exit={{ opacity: 0, transform: "translateY(6px) scale(.98)" }}
                        transition={{ duration: 0.16 }}
                        className="absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#100e16]/95 p-1.5 shadow-[0_25px_80px_rgba(0,0,0,.42)] backdrop-blur-2xl"
                      >
                        {item.children.map((child) => {
                          const active = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium transition-colors",
                                active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/[0.06] hover:text-white"
                              )}
                            >
                              {child.label}
                              <ArrowUpRight className="h-3.5 w-3.5 text-white/25" />
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
                    "block rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-[background,color]",
                    pathname === item.href
                      ? "bg-white/10 text-white"
                      : "text-white/62 hover:bg-white/[0.06] hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#15131c] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(255,255,255,.16)]"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, transform: "translateY(-8px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            exit={{ opacity: 0, transform: "translateY(-8px)" }}
            transition={{ duration: 0.18 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#100e16]/95 p-2 shadow-[0_25px_80px_rgba(0,0,0,.4)] backdrop-blur-2xl md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-1">
                    <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[.2em] text-white/30">{item.label}</p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block rounded-lg px-3 py-2.5 text-sm font-medium",
                          pathname === child.href ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/[0.05] hover:text-white"
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
                      "block rounded-xl px-3 py-3 text-sm font-medium",
                      pathname === item.href ? "bg-white/10 text-white" : "text-white/65 hover:bg-white/[0.05] hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#15131c]"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

