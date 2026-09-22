"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { CASE_PAIRS } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

function Pair({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const { t } = usePrefs();
  const [pos, setPos] = useState(52);
  const dragging = useRef(false);
  const box = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = box.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, next)));
  }, []);

  return (
    <div className="min-w-[min(86vw,420px)] snap-center">
      <div
        ref={box}
        className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black/30 select-none"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (!dragging.current) return;
          setFromClientX(e.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onPointerLeave={() => {
          dragging.current = false;
        }}
      >
        <Image src={after} alt="" fill className="object-cover" sizes="420px" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <div className="relative h-full" style={{ width: `${10000 / pos}%` }}>
            <Image src={before} alt="" fill className="object-cover" sizes="420px" />
          </div>
        </div>
        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-gold shadow-[0_0_12px_rgba(220,148,13,0.55)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/60 bg-charcoal/80 text-[10px] font-semibold tracking-wider text-gold">
            ‖
          </span>
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-medium tracking-wider text-white/90 uppercase backdrop-blur-sm">
          {t.before}
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-medium tracking-wider text-white/90 uppercase backdrop-blur-sm">
          {t.after}
        </span>
      </div>
      <p className="mt-3 text-sm text-[color:var(--muted)]">{label}</p>
    </div>
  );
}

export function BeforeAfterRail() {
  const { t, locale } = usePrefs();
  return (
    <div className="mt-8 flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {CASE_PAIRS.map((pair, i) => (
        <Pair
          key={i}
          before={pair.before}
          after={pair.after}
          label={locale === "pt" ? pair.label.pt : pair.label.en}
        />
      ))}
    </div>
  );
}
