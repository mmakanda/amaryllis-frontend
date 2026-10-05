import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BRAND, PRODUCTS, WA_MESSAGE } from "@/lib/constants";
import { waLink } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  const companyLinks = [
    { label: "About Us", href: "/#about" },
    { label: "Our Products", href: "/products" },
    { label: "Services", href: "/managed-services" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-midnight-950">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-purple/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-magenta/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="glass-strong rounded-[2rem] p-7 md:p-9 lg:p-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link
                href="/"
                className="focus-ring group mb-5 flex w-fit items-center gap-2.5 rounded-xl"
              >
                <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/10">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Amaryllis Success"
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                <div className="leading-tight">
                  <p className="text-lg font-bold text-white">Amaryllis</p>
                  <p className="-mt-0.5 text-xs text-white/45">Success</p>
                </div>
              </Link>

              <p className="max-w-sm text-sm leading-relaxed text-white/55">
                Building AI-powered products and delivering expert services
                across agriculture, construction, and digital transformation
                in Zimbabwe.
              </p>

              <a
                href={waLink(BRAND.whatsapp, decodeURIComponent(WA_MESSAGE))}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2.5 text-sm font-semibold text-[#6ff19a] transition-all hover:-translate-y-0.5 hover:bg-[#25D366]/15"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Our Products
              </h3>

              <ul className="space-y-2">
                {PRODUCTS.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={product.href}
                      className="focus-ring group flex w-fit items-center gap-2 rounded-lg py-1 text-sm text-white/55 transition-colors hover:text-white"
                    >
                      <product.icon
                        className="h-4 w-4 shrink-0"
                        style={{ color: product.color }}
                        strokeWidth={2}
                      />
                      <span className="transition-transform group-hover:translate-x-0.5">
                        {product.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Company
              </h3>

              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="focus-ring inline-block rounded-lg py-1 text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Contact
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                  <span className="text-sm leading-relaxed text-white/55">
                    {BRAND.address}
                    <br />
                    {BRAND.city}
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-brand-orange" />
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="focus-ring break-all rounded text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {BRAND.email}
                  </a>
                </li>

                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-brand-orange" />
                  <a
                    href={`tel:${BRAND.phone1.replace(/\s/g, "")}`}
                    className="focus-ring rounded text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {BRAND.phone1}
                  </a>
                </li>

                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-white/25" />
                  <a
                    href={`tel:${BRAND.phone2.replace(/\s/g, "")}`}
                    className="focus-ring rounded text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {BRAND.phone2}
                  </a>
                </li>

                <li className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                  <div className="space-y-0.5 text-sm text-white/55">
                    <p>{BRAND.hours.weekdays}</p>
                    <p>{BRAND.hours.saturday}</p>
                    <p>{BRAND.hours.sunday}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <p className="text-xs text-white/30">
                © {year} Amaryllis Success Private Limited. All rights
                reserved.
              </p>

              <div className="flex items-center gap-4">
                <span className="text-xs text-white/25">Harare, Zimbabwe</span>
                <span
                  className="h-3 w-px bg-white/15"
                  role="separator"
                  aria-hidden="true"
                />
                <Link
                  href="/admin"
                  className="focus-ring rounded text-xs text-white/25 transition-colors hover:text-white/60"
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

