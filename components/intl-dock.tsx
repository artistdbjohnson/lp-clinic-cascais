"use client";

import { ExtLink } from "@/components/ext-link";
import { links } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";
import { scrollToAnchor } from "@/lib/scroll";
import { useReducedMotion } from "framer-motion";

export function IntlDock() {
  const { t, setLocale } = usePrefs();
  const reduce = useReducedMotion();

  return (
    <div className="intl-dock liquid-glass pointer-events-auto fixed right-3 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 hidden max-w-[16rem] flex-col gap-2 rounded-2xl p-3 sm:flex">
      <button
        type="button"
        className="text-left text-[12px] font-medium tracking-wide text-white/90"
        onClick={() => scrollToAnchor("internacional", reduce ? "auto" : "smooth")}
      >
        {t.intlDock}
      </button>
      <div className="flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={() => setLocale("en")}
          className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white/85 uppercase"
        >
          EN
        </button>
        <ExtLink
          href={links.booking}
          className="rounded-full bg-gold px-2.5 py-1 text-[10px] font-semibold tracking-wider text-charcoal uppercase"
        >
          {t.chrome.book}
        </ExtLink>
      </div>
    </div>
  );
}
