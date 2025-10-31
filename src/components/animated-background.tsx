"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <motion.div
        className="absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side,var(--primary)/22%,transparent)" }}
        initial={{ opacity: 0.2, scale: 0.9 }}
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [0.9, 1.05, 0.9], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-[30rem] w-[30rem] translate-x-1/4 translate-y-1/4 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side,oklch(0.6 0.2 280)/18%,transparent)" }}
        initial={{ opacity: 0.15, scale: 0.9 }}
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [0.9, 1.1, 0.9], rotate: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}


