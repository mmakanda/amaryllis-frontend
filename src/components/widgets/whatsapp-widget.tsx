"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { BRAND, WA_MESSAGE } from "@/lib/constants";
import { waLink } from "@/lib/utils";

export function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="glass-strong relative mb-1 w-[205px] rounded-2xl p-4 text-right"
          >
            <p className="text-xs font-semibold text-white">Chat with us</p>
            <p className="mt-1 text-xs leading-relaxed text-white/50">
              Mon–Fri 08:00–17:00
              <br />
              Sat 08:00–13:00
            </p>

            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="focus-ring absolute -right-2 -top-2 rounded-full border border-white/10 bg-midnight-900 p-1 text-white/60 transition-colors hover:text-white"
              aria-label="Close WhatsApp information"
            >
              <X className="h-3 w-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waLink(BRAND.whatsapp, decodeURIComponent(WA_MESSAGE))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Amaryllis Success on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#25D366] text-white shadow-[0_12px_40px_rgba(37,211,102,0.28)]"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping"
          aria-hidden="true"
        />
        <MessageCircle className="relative z-10 h-7 w-7" />
      </motion.a>
    </div>
  );
}

