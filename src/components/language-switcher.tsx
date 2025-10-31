"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/i18n/locales";
import { Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  // Remove locale prefix atual
  const parts = pathname.split("/").filter(Boolean);
  const currentMaybeLocale = parts[0];
  const rest = locales.includes(currentMaybeLocale as any) ? parts.slice(1) : parts;
  const base = "/" + rest.join("/");
  const current = locales.includes(currentMaybeLocale as any) ? (currentMaybeLocale as typeof locales[number]) : "pt";

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div ref={ref} className="relative flex items-center gap-1 text-xs">
      <button
        type="button"
        aria-label="Change language"
        className="flex items-center gap-1 rounded border bg-background px-2 py-1 hover:bg-accent"
        onClick={() => setOpen((v) => !v)}
      >
        <Globe className="h-4 w-4" />
        <FlagIcon loc={current} />
      </button>
      {open ? (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[160px] rounded border bg-background p-1 shadow-md">
          {locales.map((loc) => {
            const href = `/${loc}${base}`.replace(/\/\/$/, '/');
            return (
              <button
                key={loc}
                className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-left hover:bg-accent"
                onClick={() => {
                  setOpen(false);
                  router.push(href, { scroll: false });
                }}
              >
                <FlagIcon loc={loc} />
                <span className="text-foreground/90">{label(loc)}</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function FlagIcon({ loc }: { loc: string }) {
  if (loc === "pt") {
    // Brazil flag (simplified)
    return (
      <svg width="18" height="12" viewBox="0 0 18 12" aria-label="Português (Brasil)">
        <rect width="18" height="12" fill="#229E45" />
        <polygon points="9,2 15,6 9,10 3,6" fill="#F7E250" />
        <circle cx="9" cy="6" r="2" fill="#0A389F" />
      </svg>
    );
  }
  if (loc === "en") {
    // USA flag (very simplified)
    return (
      <svg width="18" height="12" viewBox="0 0 18 12" aria-label="English (US)">
        <rect width="18" height="12" fill="#B22234" />
        <rect y="2" width="18" height="2" fill="#FFFFFF" />
        <rect y="6" width="18" height="2" fill="#FFFFFF" />
        <rect y="10" width="18" height="2" fill="#FFFFFF" />
        <rect width="8" height="6" fill="#3C3B6E" />
      </svg>
    );
  }
  if (loc === "es") {
    // Spain flag (simplified)
    return (
      <svg width="18" height="12" viewBox="0 0 18 12" aria-label="Español">
        <rect width="18" height="12" fill="#AA151B" />
        <rect y="3" width="18" height="6" fill="#F1BF00" />
      </svg>
    );
  }
  if (loc === "fr") {
    // France flag
    return (
      <svg width="18" height="12" viewBox="0 0 18 12" aria-label="Français">
        <rect width="6" height="12" x="0" fill="#0055A4" />
        <rect width="6" height="12" x="6" fill="#FFFFFF" />
        <rect width="6" height="12" x="12" fill="#EF4135" />
      </svg>
    );
  }
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden>
      <rect width="18" height="12" fill="#ccc" />
    </svg>
  );
}

function label(loc: string) {
  switch (loc) {
    case "pt":
      return "Português (Brasil)";
    case "en":
      return "English";
    case "es":
      return "Español";
    case "fr":
      return "Français";
    default:
      return loc;
  }
}


