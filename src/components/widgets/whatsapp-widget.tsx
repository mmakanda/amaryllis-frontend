"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { BRAND, WA_MESSAGE } from "@/lib/constants";
import { waLink } from "@/lib/utils";

export function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="mb-1 max-w-[200px] rounded-xl bg-white p-3 shadow-lg border border-border text-right"
          >
            <p className="text-xs font-semibold text-foreground">Chat with us!</p>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              Mon–Fri 08:00–17:00
              <br />
              Sat 08:00–13:00
            </p>
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-1.5 -right-1.5 rounded-full bg-muted p-0.5 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={waLink(BRAND.whatsapp, decodeURIComponent(WA_MESSAGE))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 text-white"
      >
        <MessageCircle className="h-7 w-7" />
        {/* Pulse ring */}
        <span className="absolute h-14 w-14 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      </motion.a>
    </div>
  );
}
