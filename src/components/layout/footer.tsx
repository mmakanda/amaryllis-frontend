import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { BRAND, PRODUCTS, WA_MESSAGE } from "@/lib/constants";
import { waLink } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-white/10">
                <Image
                  src="/images/logo.jpeg"
                  alt="Amaryllis Success"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-lg text-white">Amaryllis</p>
                <p className="text-xs text-white/60 -mt-0.5">Success</p>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Building AI-powered products and delivering expert services across agriculture,
              construction, and digital transformation in Zimbabwe.
            </p>
            {/* WhatsApp CTA */}
            <a
              href={waLink(BRAND.whatsapp, decodeURIComponent(WA_MESSAGE))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Products column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
              Our Products
            </h3>
            <ul className="space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link
                    href={p.href}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group"
                  >
                    <p.icon className="h-4 w-4" style={{ color: p.color }} strokeWidth={2} />
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {p.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/#about" },
                { label: "Our Products", href: "/products" },
                { label: "Services", href: "/managed-services" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-orange" />
                <span className="text-sm text-white/70">
                  {BRAND.address}<br />{BRAND.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand-orange" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-sm text-white/70 hover:text-white transition-colors break-all"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-orange" />
                <a
                  href={`tel:${BRAND.phone1.replace(/\s/g, "")}`}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {BRAND.phone1}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-white/30" />
                <a
                  href={`tel:${BRAND.phone2.replace(/\s/g, "")}`}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {BRAND.phone2}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-brand-orange" />
                <div className="text-sm text-white/70 space-y-0.5">
                  <p>{BRAND.hours.weekdays}</p>
                  <p>{BRAND.hours.saturday}</p>
                  <p>{BRAND.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {year} Amaryllis Success Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/30">Harare, Zimbabwe</span>
            <span
              className="h-3 w-px bg-white/20"
              role="separator"
              aria-hidden="true"
            />
            <Link
              href="/admin"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

