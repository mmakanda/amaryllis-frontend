import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  Services: [
    { name: "AI & Digital Transformation", href: "#ai-services" },
    { name: "Enterprise IT", href: "#it-services" },
    { name: "Smart Agriculture", href: "#agriculture" },
    { name: "Construction", href: "#construction" },
    { name: "Research", href: "#research" },
  ],
  Products: [
    { name: "Mudhumeni", href: "/products" },
    { name: "LexAI", href: "/products" },
    { name: "AutoBOQ", href: "/products" },
    { name: "DocuMind", href: "/products" },
  ],
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-midnight-900 border-t border-white/5">
      <div className="section-padding py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Amaryllis Success"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <div>
                  <div className="text-xl font-bold text-white">Amaryllis</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-brand-orange -mt-1">
                    Success
                  </div>
                </div>
              </div>
              <p className="text-midnight-300 text-sm leading-relaxed max-w-sm mb-6">
                AI-powered products and expert services across agriculture, construction, and
                digital transformation — built for Zimbabwean conditions, designed for scale.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-midnight-300">
                  <MapPin size={16} className="text-brand-orange" />
                  Harare, Zimbabwe
                </div>
                <div className="flex items-center gap-3 text-sm text-midnight-300">
                  <Mail size={16} className="text-brand-orange" />
                  admin@amaryllissuccess.co.zw
                </div>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-midnight-300 hover:text-brand-orange transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-midnight-400">
              © 2026 Amaryllis Success Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-midnight-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-midnight-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

