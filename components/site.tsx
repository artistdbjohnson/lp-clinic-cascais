"use client";

import { useEffect, useState } from "react";
import { Chrome } from "@/components/chrome";
import { CrestLoader } from "@/components/crest-loader";
import { IntlDock } from "@/components/intl-dock";
import { Social } from "@/components/social";
import {
  Casos,
  Contacto,
  Equipa,
  Footer,
  Hero,
  Internacional,
  Sobre,
  SmileJourney,
  Tecnologia,
  Tratamentos,
} from "@/components/sections";
import { RAIL } from "@/lib/copy";
import { scrollToAnchor } from "@/lib/scroll";

export function Site() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", ...RAIL.map((r) => r.id), "smile-journey", "instagram"];
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.08, 0.2, 0.4],
      },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const frame = window.requestAnimationFrame(() => scrollToAnchor(hash, "auto"));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <CrestLoader />
      <Chrome scrolled={scrolled} active={active} />
      <main id="content">
        <Hero />
        <Sobre />
        <Tratamentos />
        <SmileJourney />
        <Tecnologia />
        <Casos />
        <Equipa />
        <Social />
        <Internacional />
        <Contacto />
      </main>
      <Footer />
      <IntlDock scrolled={scrolled} />
    </>
  );
}
