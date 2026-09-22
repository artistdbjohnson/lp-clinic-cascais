"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

const KEY = "lp-crest-seen";
const HOLD_MS = 1500;
const FADE_MS = 700;

type Phase = "showing" | "fading" | "hidden";

function shouldSkip() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
    if (window.location.hash.length > 1) return true;
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return true;
  }
}

export function CrestLoader() {
  const skip = useSyncExternalStore(() => () => {}, shouldSkip, () => true);
  const [phase, setPhase] = useState<Phase>("showing");
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  const finish = useCallback(() => {
    if (done.current) return;
    done.current = true;
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setPhase((p) => (p === "showing" ? "fading" : p));
  }, []);

  useEffect(() => {
    if (skip) {
      document.documentElement.removeAttribute("data-crest");
      return;
    }
    document.documentElement.setAttribute("data-crest", "show");
  }, [skip]);

  useEffect(() => {
    if (skip || phase !== "showing") return;
    const t = window.setTimeout(finish, HOLD_MS);
    return () => window.clearTimeout(t);
  }, [finish, phase, skip]);

  useEffect(() => {
    if (phase !== "fading") return;
    const el = ref.current;
    requestAnimationFrame(() => {
      if (el) {
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
      }
    });
    document.documentElement.removeAttribute("data-crest");
    const t = window.setTimeout(() => setPhase("hidden"), FADE_MS);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (skip || phase === "hidden") return null;

  return (
    <div
      ref={ref}
      className="crest-loader"
      role="status"
      aria-live="polite"
      aria-label="LP CLINIC"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-crest.png"
        alt=""
        width={180}
        height={125}
        className="crest-mark"
      />
    </div>
  );
}
