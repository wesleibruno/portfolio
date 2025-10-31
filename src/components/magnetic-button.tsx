"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function MagneticButton(
  props: React.ComponentProps<typeof Button>
) {
  const ref = useRef<HTMLButtonElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
  }

  return (
    <Button
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...props}
    />
  );
}


