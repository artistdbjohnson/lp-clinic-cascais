"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import { ExtLink } from "@/components/ext-link";
import { GALLERY_PAIRS } from "@/lib/gallery";
import { usePrefs } from "@/lib/prefs";

export function BeforeAfterRail() {
  const { t, locale } = usePrefs();
  const rail = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((dir: number) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector("article");
    const gap = 20;
    const width = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.85;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * width, behavior: reduce ? "auto" : "smooth" });
  }, []);

  return (
    <div className="mt-8">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">{t.casesKicker}</p>
      <p
        role="note"
        className="mt-3 max-w-3xl rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg)]/70 px-4 py-3 text-sm leading-relaxed text-[color:var(--muted)]"
      >
        {t.casesDisclaimer}
      </p>
      <div className="mt-5 flex items-center justify-end gap-2">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-sm"
          aria-label={t.casesPrev}
          onClick={() => scrollByCard(-1)}
        >
          ←
        </button>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-sm"
          aria-label={t.casesNext}
          onClick={() => scrollByCard(1)}
        >
          →
        </button>
      </div>
      <div
        ref={rail}
        tabIndex={0}
        role="region"
        aria-label={t.casesTitle}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            scrollByCard(-1);
          }
          if (e.key === "ArrowRight") {
            e.preventDefault();
            scrollByCard(1);
          }
        }}
        className="case-rail mt-4 flex gap-5 overflow-x-auto pb-4 focus-visible:outline-none"
      >
        {GALLERY_PAIRS.map((pair, index) => {
          const label = locale === "pt" ? pair.label.pt : pair.label.en;
          const kicker = locale === "pt" ? pair.kicker.pt : pair.kicker.en;
          const detail = locale === "pt" ? pair.detail.pt : pair.detail.en;
          const open = pair.source === "instagram" ? t.instagramOpen : t.casesOpen;
          return (
            <article key={pair.id} className="w-[min(92vw,680px)] shrink-0 snap-center">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">
                {String(index + 1).padStart(2, "0")} · {kicker}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--line)] bg-black/20">
                    <Image
                      src={pair.before}
                      alt={`${t.before}. ${label}`}
                      fill
                      className="object-cover"
                      sizes="340px"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium tracking-wider text-white uppercase backdrop-blur-sm">
                      {t.before}
                    </span>
                  </div>
                </figure>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--line)] bg-black/20">
                    <Image
                      src={pair.after}
                      alt={`${t.after}. ${label}`}
                      fill
                      className="object-cover"
                      sizes="340px"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium tracking-wider text-white uppercase backdrop-blur-sm">
                      {t.after}
                    </span>
                  </div>
                </figure>
              </div>
              <h3 className="mt-3 text-base font-semibold">{label}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[color:var(--muted)]">{detail}</p>
              <ExtLink href={pair.href} className="mt-2 inline-block text-sm font-medium text-gold hover:underline">
                {open}
              </ExtLink>
            </article>
          );
        })}
      </div>
    </div>
  );
}
