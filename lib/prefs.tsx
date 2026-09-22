"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  dictionaries,
  type Dictionary,
  type Locale,
  type Theme,
} from "@/lib/copy";

type Prefs = {
  locale: Locale;
  theme: Theme;
  ready: boolean;
  setLocale: (locale: Locale) => void;
  setTheme: (theme: Theme) => void;
  t: Dictionary;
};

const PrefsContext = createContext<Prefs | null>(null);
const PREFS_EVENT = "lp-prefs";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(PREFS_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(PREFS_EVENT, onChange);
  };
}

function readLocale(): Locale {
  try {
    const v = window.localStorage.getItem("lp-locale");
    if (v === "en") return "en";
    return "pt";
  } catch {
    return "pt";
  }
}

function readTheme(): Theme {
  try {
    return window.localStorage.getItem("lp-theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function writePref(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
    window.dispatchEvent(new Event(PREFS_EVENT));
  } catch {
    /* ignore */
  }
}

export function PrefsProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore<Locale>(subscribe, readLocale, () => "pt");
  const theme = useSyncExternalStore<Theme>(subscribe, readTheme, () => "dark");
  const ready = useSyncExternalStore(subscribe, () => true, () => false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    root.lang = locale;
    root.style.colorScheme = theme;
  }, [locale, theme]);

  const setLocale = useCallback((next: Locale) => {
    writePref("lp-locale", next);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    writePref("lp-theme", next);
  }, []);

  const value = useMemo<Prefs>(
    () => ({
      locale,
      theme,
      ready,
      setLocale,
      setTheme,
      t: dictionaries[locale],
    }),
    [locale, ready, setLocale, setTheme, theme],
  );

  return (
    <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>
  );
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs must be used within PrefsProvider");
  return ctx;
}
