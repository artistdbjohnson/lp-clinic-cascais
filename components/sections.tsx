"use client";

import Image from "next/image";
import { BeforeAfterRail } from "@/components/before-after";
import { ExtLink } from "@/components/ext-link";
import { TEAM, TREATMENTS, links } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export function Hero() {
  const { t } = usePrefs();
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/hero/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[image:var(--hero-veil)]" />
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-12">
        <p className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gold uppercase">
          {t.heroKicker}
        </p>
        <h1 className="max-w-3xl whitespace-pre-line text-4xl leading-[1.05] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t.heroHeadline}
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/72 sm:text-lg">{t.brandLine}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ExtLink
            href={links.booking}
            className="rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-charcoal shadow-[0_12px_32px_rgba(220,148,13,0.32)]"
          >
            {t.heroCta}
          </ExtLink>
          <ExtLink
            href={links.whatsapp}
            className="liquid-glass rounded-full px-6 py-3.5 text-sm font-semibold text-white"
          >
            {t.heroWhatsapp}
          </ExtLink>
        </div>
      </div>
    </section>
  );
}

export function Sobre() {
  const { t } = usePrefs();
  return (
    <section id="sobre" className="section-anchor px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.24em] text-gold uppercase">Cascais</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.sobreTitle}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
            {t.sobreLead}
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[color:var(--line)]">
          <Image src="/hero/clinic-calm.jpg" alt="" fill className="object-cover" sizes="560px" />
          <div className="photo-plate-grade" />
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-6xl">
        <h3 className="text-lg font-semibold tracking-tight">{t.pillarsTitle}</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.pillars.map((p) => (
            <article
              key={p.t}
              className="liquid-glass liquid-glass-panel rounded-2xl p-5"
            >
              <h4 className="text-[12px] font-semibold tracking-[0.16em] text-gold uppercase">
                {p.t}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Tratamentos() {
  const { t, locale } = usePrefs();
  return (
    <section id="tratamentos" className="section-anchor bg-[color:var(--bg-elev)]/40 px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.treatmentsTitle}</h2>
        <p className="mt-3 max-w-2xl text-[color:var(--muted)]">{t.treatmentsLead}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((item) => (
            <article
              key={item.slug}
              className="group relative aspect-[5/4] overflow-hidden rounded-2xl border border-[color:var(--line)]"
            >
              <Image
                src={item.img}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                sizes="(max-width:768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/25 to-transparent" />
              <h3 className="absolute right-4 bottom-4 left-4 text-lg font-semibold text-white">
                {locale === "pt" ? item.pt : item.en}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SmileJourney() {
  const { t } = usePrefs();
  return (
    <section id="smile-journey" className="section-anchor px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.journeyTitle}</h2>
        <p className="mt-3 text-[color:var(--muted)]">{t.journeyLead}</p>
        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible">
          {t.journey.map((step, i) => (
            <article
              key={step.t}
              className="liquid-glass liquid-glass-panel min-w-[220px] shrink-0 rounded-2xl p-5 md:min-w-0"
            >
              <span className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{step.d}</p>
            </article>
          ))}
        </div>
        {/* sticky chip mobile */}
        <div className="journey-chip sticky top-[calc(var(--sticky-nav-height)+0.5rem)] z-30 mt-6 flex gap-2 overflow-x-auto rounded-full border border-[color:var(--line)] bg-[color:var(--bg)]/90 p-1.5 backdrop-blur-md md:hidden">
          {t.journey.map((step) => (
            <span
              key={step.t}
              className="shrink-0 rounded-full bg-gold/15 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-gold"
            >
              {step.t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Tecnologia() {
  const { t } = usePrefs();
  return (
    <section id="tecnologia" className="section-anchor px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.techTitle}</h2>
        <p className="mt-3 max-w-2xl text-[color:var(--muted)]">{t.techLead}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.tech.map((item) => (
            <article key={item.t} className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elev)]/50 p-6">
              <h3 className="text-base font-semibold">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{item.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Casos() {
  const { t } = usePrefs();
  return (
    <section id="casos" className="section-anchor bg-[color:var(--bg-elev)]/40 px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.casesTitle}</h2>
        <p className="mt-3 max-w-3xl text-[color:var(--muted)]">{t.casesLead}</p>
        <p className="mt-2 text-sm text-gold/90">{t.casesHint}</p>
        <BeforeAfterRail />
      </div>
    </section>
  );
}

export function Equipa() {
  const { t, locale } = usePrefs();
  return (
    <section id="equipa" className="section-anchor px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.teamTitle}</h2>
        <p className="mt-3 max-w-2xl text-[color:var(--muted)]">{t.teamLead}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TEAM.map((member) => (
            <article key={member.id} className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elev)]/40">
              <div className="relative aspect-square bg-[color:var(--bg)]">
                {member.photo ? (
                  <Image src={member.photo} alt={member.name} fill className="object-cover" sizes="280px" />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-charcoal to-steel/40">
                    <span className="text-3xl font-semibold tracking-widest text-gold/80">TM</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold">{member.name}</h3>
                <p className="mt-1 text-xs tracking-wide text-[color:var(--muted)]">
                  {locale === "pt" ? member.role.pt : member.role.en}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Internacional() {
  const { t } = usePrefs();
  return (
    <section id="internacional" className="section-anchor px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.intlTitle}</h2>
        <p className="mt-3 max-w-3xl text-[color:var(--muted)]">{t.intlLead}</p>
        <h3 className="mt-10 text-lg font-semibold">{t.intlWhyTitle}</h3>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {t.intlWhy.map((item) => (
            <li key={item} className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elev)]/40 px-4 py-3 text-sm text-[color:var(--muted)]">
              {item}
            </li>
          ))}
        </ul>
        <h3 className="mt-12 text-lg font-semibold">{t.intlStepsTitle}</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {t.intlSteps.map((step) => (
            <article key={step.t} className="liquid-glass liquid-glass-panel rounded-2xl p-5">
              <h4 className="font-semibold text-gold">{step.t}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{step.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contacto() {
  const { t } = usePrefs();
  return (
    <section id="contacto" className="section-anchor bg-[color:var(--bg-elev)]/40 px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.contactTitle}</h2>
          <div className="mt-8 space-y-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">{t.addressLabel}</p>
              <ExtLink href={links.maps} className="mt-2 block whitespace-pre-line text-base hover:text-gold">
                {t.address}
              </ExtLink>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">{t.hoursLabel}</p>
              <p className="mt-2 text-base">{t.hours}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">{t.contactsLabel}</p>
              <div className="mt-2 flex flex-col gap-1">
                <a href={links.phonePrimary} className="hover:text-gold">{t.phones[0]}</a>
                <a href={links.phoneSecondary} className="hover:text-gold">{t.phones[1]}</a>
                <a href={links.email} className="hover:text-gold">{t.email}</a>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">{t.ersLabel}</p>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{t.ers}</p>
            </div>
          </div>
        </div>
        <div className="liquid-glass liquid-glass-panel flex flex-col justify-between rounded-3xl p-7">
          <div>
            <p className="text-sm text-white/70">{t.disclaimer}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ExtLink href={links.booking} className="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-charcoal">
                {t.heroCta}
              </ExtLink>
              <ExtLink href={links.whatsapp} className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
                WhatsApp
              </ExtLink>
            </div>
          </div>
          <div className="mt-10 flex gap-4 text-sm text-white/60">
            <ExtLink href={links.instagram}>Instagram</ExtLink>
            <ExtLink href={links.facebook}>Facebook</ExtLink>
            <ExtLink href={links.tiktok}>TikTok</ExtLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = usePrefs();
  return (
    <footer className="border-t border-[color:var(--line)] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[color:var(--muted)]">{t.footerRights}</p>
        <ExtLink href={links.dglxss} className="text-sm font-medium tracking-wide text-gold hover:underline">
          {t.builtBy}
        </ExtLink>
      </div>
    </footer>
  );
}
