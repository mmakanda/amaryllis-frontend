"use client";

import { motion, useReducedMotion } from "framer-motion";

interface FloatingBlobProps {
  className: string;
  gradient: string;
  duration?: number;
}

export function FloatingBlob({ className, gradient, duration = 10 }: FloatingBlobProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ background: gradient }}
      animate={
        reduceMotion
          ? undefined
          : {
              x: [0, 24, -16, 0],
              y: [0, -20, 12, 0],
              scale: [1, 1.05, 0.97, 1],
            }
      }
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    />
  );
}
