"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function RippleButton(props: React.ComponentProps<typeof Button>) {
  const ref = useRef<HTMLButtonElement>(null);

  function onMouseDown(e: React.MouseEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height) * 1.2;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.className = "ripple-animate";
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  }

  return (
    <Button ref={ref} onMouseDown={onMouseDown} className="relative overflow-hidden" {...props} />
  );
}


