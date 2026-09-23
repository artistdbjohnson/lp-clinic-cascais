"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ExtLink } from "@/components/ext-link";
import { cn } from "@/lib/cn";
import { RAIL, links } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";
import { scrollToAnchor, syncStickyNavHeight } from "@/lib/scroll";

export function Chrome({
  scrolled,
  active,
}: {
  scrolled: boolean;
  active: string;
}) {
  const { t, locale, setLocale, theme, setTheme } = usePrefs();
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;
    const publish = () => syncStickyNavHeight(node);
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(node);
    window.addEventListener("resize", publish);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", publish);
    };
  }, [scrolled, menuOpen]);

  const onHero = !scrolled;

  const goTo = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!document.getElementById(id)) return;
    event.preventDefault();
    setMenuOpen(false);
    scrollToAnchor(id, reduce ? "auto" : "smooth");
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-colors",
        onHero ? "on-hero" : "is-stuck",
        scrolled && "bg-[color:var(--bg)]/88 backdrop-blur-md",
      )}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-charcoal"
      >
        {t.chrome.skip}
      </a>

      <div
        className={cn(
          "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 sm:gap-5 sm:px-8 xl:gap-8",
          scrolled ? "py-2.5" : "py-3.5 sm:py-4",
        )}
      >
        <a
          href="#top"
          onClick={(e) => goTo(e, "top")}
          className="flex min-w-0 items-center justify-self-start gap-2"
        >
          <Image
            src={theme === "dark" || onHero ? "/brand/logo-gold-dark.png" : "/brand/logo-gold.png"}
            alt={t.brand}
            width={160}
            height={48}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </a>

        <nav
          className="liquid-glass hidden min-w-0 items-center justify-self-center gap-0.5 overflow-x-auto rounded-xl px-2.5 py-1.5 [scrollbar-width:none] md:flex lg:gap-1 lg:px-3.5 [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {RAIL.map((item) => {
            const label = locale === "pt" ? item.pt : item.en;
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => goTo(e, item.id)}
                className={cn(
                  "relative rounded-lg px-2.5 py-1.5 text-[12.5px] font-medium tracking-wide whitespace-nowrap transition-colors lg:px-3",
                  onHero || theme === "dark"
                    ? "text-white/78 hover:text-white"
                    : "text-charcoal/70 hover:text-charcoal",
                  isActive && (onHero || theme === "dark" ? "text-white" : "text-charcoal"),
                )}
              >
                {label}
                {isActive && (
                  <span className="rail-underline absolute right-2 bottom-0.5 left-2" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center justify-self-end gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
            className={cn(
              "rounded-full px-2.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase",
              onHero || theme === "dark"
                ? "text-white/85 hover:bg-white/10"
                : "text-charcoal/80 hover:bg-black/5",
            )}
            aria-label={t.chrome.localeAria}
          >
            {t.chrome.locale}
          </button>
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
              "rounded-full p-2",
              onHero || theme === "dark"
                ? "text-white/85 hover:bg-white/10"
                : "text-charcoal/80 hover:bg-black/5",
            )}
            aria-label={theme === "dark" ? t.chrome.themeLight : t.chrome.themeDark}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <ExtLink
            href={links.instagram}
            aria-label={t.instagramKicker}
            className={cn(
              "hidden rounded-full p-2 md:inline-flex",
              onHero || theme === "dark" ? "text-white/85 hover:bg-white/10" : "text-charcoal/80 hover:bg-black/5",
            )}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </ExtLink>
          <ExtLink
            href={links.booking}
            className="hidden rounded-full bg-gold px-3.5 py-2 text-[12px] font-semibold tracking-wide text-charcoal shadow-[0_8px_24px_rgba(220,148,13,0.28)] sm:inline-flex"
          >
            {t.chrome.book}
          </ExtLink>
          <button
            type="button"
            className={cn(
              "rounded-full p-2 md:hidden",
              onHero || theme === "dark" ? "text-white" : "text-charcoal",
            )}
            aria-label={menuOpen ? t.chrome.close : t.chrome.menu}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.22 }}
            className="liquid-glass liquid-glass-panel mx-4 mb-3 rounded-2xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {RAIL.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => goTo(e, item.id)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/8"
                >
                  {locale === "pt" ? item.pt : item.en}
                </a>
              ))}
              <ExtLink
                href={links.instagram}
                className="rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/8"
              >
                Instagram
              </ExtLink>
              <ExtLink
                href={links.booking}
                className="mt-2 rounded-full bg-gold px-4 py-3 text-center text-sm font-semibold text-charcoal"
              >
                {t.heroCta}
              </ExtLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
