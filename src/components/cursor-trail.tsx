"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function CursorTrail() {
  const dots = Array.from({ length: 10 });
  const positions = useRef(Array.from({ length: dots.length }, () => ({ x: 0, y: 0 })));

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const { clientX: x, clientY: y } = e;
      positions.current.unshift({ x, y });
      positions.current.pop();
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {dots.map((_, i) => {
        const delay = i * 0.02;
        const pos = positions.current[i] ?? { x: 0, y: 0 };
        return (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-primary/40 blur-[1px]"
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay }}
          />
        );
      })}
    </div>
  );
}


