"use client";

import Image from "next/image";
import { ExtLink } from "@/components/ext-link";
import { links } from "@/lib/copy";
import { instagramPosts } from "@/lib/instagram";
import { usePrefs } from "@/lib/prefs";

export function Social() {
  const { t, locale } = usePrefs();

  return (
    <section className="section-anchor py-20">
      <div id="instagram" className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[11px] font-semibold tracking-[0.24em] text-gold uppercase">
              {t.instagramKicker}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.instagramAccount}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[color:var(--muted)]">
              {t.instagramLead}
            </p>
          </div>
          <ExtLink
            href={links.instagram}
            className="text-sm font-medium text-gold underline-offset-4 hover:underline"
          >
            {t.instagramOpen}
          </ExtLink>
        </div>
      </div>

      <div className="ig-marquee" role="region" aria-label={t.instagramFeed}>
        <div className="ig-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="ig-set" aria-hidden={copy === 1 ? true : undefined}>
              {instagramPosts.map((post) => (
                <li key={`${copy}-${post.href}`} className="ig-card">
                  <ExtLink
                    href={post.href}
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="absolute inset-0 block"
                  >
                    <Image
                      src={post.src}
                      alt={copy === 1 ? "" : locale === "pt" ? post.alt.pt : post.alt.en}
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                  </ExtLink>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
