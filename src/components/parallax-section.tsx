"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxSection({ children, offset = 80 }: { children: React.ReactNode; offset?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.7, 1, 0.8]);

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ y, opacity }}>{children}</motion.div>
    </div>
  );
}


