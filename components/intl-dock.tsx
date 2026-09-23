"use client";

import { useEffect, useState } from "react";
import { ExtLink } from "@/components/ext-link";
import { links } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";
import { scrollToAnchor } from "@/lib/scroll";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "framer-motion";

export function IntlDock({ scrolled }: { scrolled: boolean }) {
  const { t, locale, setLocale } = usePrefs();
  const reduce = useReducedMotion();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = document.getElementById("contacto");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "intl-dock liquid-glass liquid-glass-panel pointer-events-auto fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 z-40 hidden -translate-x-1/2 items-center gap-2 rounded-full px-3 py-2 sm:flex",
        (hidden || !scrolled) && "sm:hidden",
      )}
    >
      <button
        type="button"
        className="text-[12px] font-medium tracking-wide whitespace-nowrap text-[color:var(--ink)]"
        onClick={() => scrollToAnchor("internacional", reduce ? "auto" : "smooth")}
      >
        {t.intlDock}
      </button>
      <button
        type="button"
        onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
        className="rounded-full border border-[color:var(--line)] px-2.5 py-1 text-[10px] font-semibold tracking-wider text-[color:var(--ink)] uppercase"
        aria-label={t.chrome.localeAria}
      >
        {t.chrome.locale}
      </button>
      <ExtLink
        href={links.booking}
        className="rounded-full bg-gold px-2.5 py-1 text-[10px] font-semibold tracking-wider text-charcoal uppercase"
      >
        {t.chrome.book}
      </ExtLink>
    </div>
  );
}
