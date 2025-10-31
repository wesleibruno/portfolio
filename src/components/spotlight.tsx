"use client";

import { useEffect, useRef } from "react";

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      const { clientX, clientY } = e;
      el.style.setProperty("--x", `${clientX}px`);
      el.style.setProperty("--y", `${clientY}px`);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(400px_400px_at_var(--x,50%)_var(--y,30%),hsl(220_90%_60%/.20),transparent_60%)] dark:[background:radial-gradient(400px_400px_at_var(--x,50%)_var(--y,30%),hsl(220_90%_60%/.12),transparent_60%)]"
    />
  );
}


