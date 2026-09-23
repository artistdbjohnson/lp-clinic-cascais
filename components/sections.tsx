"use client";

import Image from "next/image";
import { BeforeAfterRail } from "@/components/before-after";
import { ExtLink } from "@/components/ext-link";
import { MediaCard } from "@/components/media-card";
import { TEAM, TREATMENTS, links } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export function Hero() {
  const { t } = usePrefs();
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <Image
        src="/hero/hero.jpg"
        alt={t.heroPhotoAlt}
        fill
        priority
        className="object-cover object-center"
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
        <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">{t.brandLine}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ExtLink
            href={links.booking}
            className="rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-charcoal shadow-[0_12px_32px_rgba(220,148,13,0.32)]"
          >
            {t.heroCta}
          </ExtLink>
          <ExtLink href={links.whatsapp} className="hero-glass rounded-full px-6 py-3.5 text-sm font-semibold">
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
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[color:var(--muted)]">
            {t.address.replace("\n", ", ")} · {t.hours}
          </p>
        </div>
        <div className="grid gap-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[color:var(--line)]">
            <Image
              src="/clinic/exterior.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 560px"
            />
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--line)]">
            <Image
              src="/clinic/operatory.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 560px"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-6xl">
        <h3 className="text-lg font-semibold tracking-tight">{t.pillarsTitle}</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.pillars.map((p) => (
            <MediaCard key={p.t} img={p.img} title={p.t} body={p.d} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Tratamentos() {
  const { t, locale } = usePrefs();
  return (
    <section
      id="tratamentos"
      className="section-anchor bg-[color:var(--bg-elev)]/40 px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.treatmentsTitle}</h2>
        <p className="mt-3 max-w-2xl text-[color:var(--muted)]">{t.treatmentsLead}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((item) => (
            <MediaCard
              key={item.slug}
              href={item.href}
              img={item.img}
              title={locale === "pt" ? item.pt : item.en}
              body={locale === "pt" ? item.detail.pt : item.detail.en}
            />
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
        <div className="journey-chip sticky top-[calc(var(--sticky-nav-height)+0.4rem)] z-30 mt-6 flex gap-2 overflow-x-auto rounded-full border border-[color:var(--line)] bg-[color:var(--bg)]/92 p-1.5 backdrop-blur-md md:hidden">
          {t.journey.map((step, i) => (
            <span
              key={step.t}
              className="shrink-0 rounded-full bg-gold/15 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-gold"
            >
              0{i + 1} {step.t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible">
          {t.journey.map((step, i) => (
            <div key={step.t} className="min-w-[240px] shrink-0 md:min-w-0">
              <MediaCard img={step.img} kicker={`0${i + 1}`} title={step.t} body={step.d} />
            </div>
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
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.techTitle}</h2>
            <p className="mt-3 max-w-xl text-[color:var(--muted)]">{t.techLead}</p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--line)]">
            <Image src="/clinic/operatory.jpg" alt="" fill className="object-cover" sizes="640px" />
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.tech.map((item) => (
            <MediaCard key={item.t} img={item.img} title={item.t} body={item.d} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Casos() {
  const { t } = usePrefs();
  return (
    <section
      id="casos"
      className="section-anchor bg-[color:var(--bg-elev)]/40 px-5 py-20 sm:px-8 lg:px-12"
    >
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
            <ExtLink
              key={member.id}
              href="https://www.lpclinic.pt/equipa"
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elev)]/40"
            >
              <div className="relative aspect-square bg-[color:var(--bg)]">
                {member.photo ? (
                  <Image src={member.photo} alt="" fill className="object-cover" sizes="280px" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-charcoal to-steel/40">
                    <Image src="/brand/logo-crest.png" alt="" width={96} height={68} className="w-24 opacity-90" />
                    <span className="text-sm font-semibold tracking-[0.28em] text-gold">TM</span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-semibold">{member.name}</h3>
                <p className="mt-1 text-xs tracking-wide text-gold">
                  {locale === "pt" ? member.role.pt : member.role.en}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {locale === "pt" ? member.detail.pt : member.detail.en}
                </p>
              </div>
            </ExtLink>
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
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.intlTitle}</h2>
          <p className="mt-3 max-w-xl text-[color:var(--muted)]">{t.intlLead}</p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[color:var(--line)]">
          <Image src="/clinic/exterior.jpg" alt="" fill className="object-cover" sizes="560px" />
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl">
        <h3 className="text-lg font-semibold">{t.intlWhyTitle}</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.intlWhy.map((item) => (
            <MediaCard key={item.t} img={item.img} title={item.t} body={item.d} />
          ))}
        </div>
        <h3 className="mt-12 text-lg font-semibold">{t.intlStepsTitle}</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {t.intlSteps.map((step) => (
            <MediaCard key={step.t} img={step.img} title={step.t} body={step.d} />
          ))}
        </div>
        <h3 className="mt-12 text-lg font-semibold">{t.intlFaqTitle}</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {t.intlFaq.map((item) => (
            <MediaCard key={item.q} img={item.img} title={item.q} body={item.a} />
          ))}
        </div>
        <div className="mt-8">
          <ExtLink
            href={links.booking}
            className="inline-flex rounded-full bg-gold px-5 py-3 text-sm font-semibold text-charcoal"
          >
            {t.heroCta}
          </ExtLink>
        </div>
      </div>
    </section>
  );
}

export function Contacto() {
  const { t } = usePrefs();
  return (
    <section
      id="contacto"
      className="section-anchor bg-[color:var(--bg-elev)]/40 px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-72 overflow-hidden rounded-3xl border border-[color:var(--line)]">
          <Image src="/clinic/exterior.jpg" alt="" fill className="object-cover" sizes="560px" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">{t.addressLabel}</p>
            <p className="mt-1 whitespace-pre-line text-white">{t.address}</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.contactTitle}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
                <a href={links.phonePrimary} className="hover:text-gold">
                  {t.phones[0]}
                </a>
                <a href={links.phoneSecondary} className="hover:text-gold">
                  {t.phones[1]}
                </a>
                <a href={links.email} className="hover:text-gold">
                  {t.email}
                </a>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold uppercase">{t.ersLabel}</p>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{t.ers}</p>
            </div>
          </div>
          <div className="liquid-glass liquid-glass-panel mt-8 rounded-3xl p-7">
            <p className="text-sm leading-relaxed text-[color:var(--muted)]">{t.disclaimer}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ExtLink
                href={links.booking}
                className="rounded-full bg-gold px-5 py-3 text-sm font-semibold text-charcoal"
              >
                {t.heroCta}
              </ExtLink>
              <ExtLink
                href={links.whatsapp}
                className="rounded-full border border-[color:var(--line)] px-5 py-3 text-sm font-semibold"
              >
                WhatsApp
              </ExtLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <ExtLink href={links.instagram} className="hover:text-gold">
                Instagram
              </ExtLink>
              <ExtLink href={links.facebook} className="hover:text-gold">
                Facebook
              </ExtLink>
              <ExtLink href={links.tiktok} className="hover:text-gold">
                TikTok
              </ExtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = usePrefs();
  return (
    <footer className="border-t border-[color:var(--line)] px-5 pt-10 pb-10 sm:px-8 sm:pb-24 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[color:var(--muted)]">{t.footerRights}</p>
        <ExtLink href={links.dglxss} className="text-sm font-medium tracking-wide text-gold hover:underline">
          {t.builtBy}
        </ExtLink>
      </div>
    </footer>
  );
}
