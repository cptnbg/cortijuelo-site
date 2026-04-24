"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { content, img, localizedPath, t, type Locale } from "@/lib/content";

export function Hero({ locale }: { locale: Locale }) {
  const hero = content.home.hero;
  const title = t(hero.title, locale);
  const [titleLine1, titleLine2] = title.split("\n");
  const year = new Date().getFullYear();

  const stats = [
    {
      value: `${year - 1948}`,
      label: locale === "es" ? "años" : "years",
      full: locale === "es" ? "años abiertos" : "years open",
    },
    {
      value: "3",
      label: locale === "es" ? "gen." : "gen.",
      full: locale === "es" ? "generaciones" : "generations",
    },
    {
      value: "5★",
      label: "Tripadvisor",
      full: "Tripadvisor",
    },
  ];

  return (
    <section className="relative h-[100vh] min-h-[680px] w-full overflow-hidden text-linen">
      {/* Background video — royalty-free Mixkit reel: flames, grilled meat, paella, rustic pan cooking.
          Falls back to hero-main.jpg for browsers that block autoplay. */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/videos/hero-poster.jpg`}
      >
        <source
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/videos/hero-reel.webm`}
          type="video/webm"
        />
        <source
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/videos/hero-reel.mp4`}
          type="video/mp4"
        />
      </video>

      {/* Stronger tonal overlays for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/50 to-charcoal/95" />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(30,26,22,0.75)_0%,rgba(30,26,22,0.35)_55%,rgba(30,26,22,0.15)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,155,75,0.18),_transparent_55%)]" />
      {/* Vignette at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,rgba(0,0,0,0.55)_100%)]" />

      {/* corner ornaments */}
      <div className="absolute top-28 right-6 md:top-32 md:right-12 text-ochre/60 writing-mode-vertical hidden md:block pointer-events-none select-none">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-display italic tracking-[0.35em] uppercase text-[0.65rem] rotate-90 origin-top-right"
          style={{ writingMode: "vertical-rl" }}
        >
          EST · 1948 · MÁLAGA
        </motion.p>
      </div>

      <div className="relative h-full flex flex-col justify-end pb-32 md:pb-28">
        <div className="mx-auto max-w-6xl w-full px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-10 h-px bg-ochre" />
            <p className="text-[0.7rem] md:text-xs uppercase tracking-[0.35em] text-ochre font-medium">
              {t(hero.eyebrow, locale)}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.75rem] leading-[1.05] md:leading-[1.02] tracking-tight max-w-4xl break-words hyphens-auto"
          >
            <span className="block">{titleLine1}</span>
            {titleLine2 && (
              <span className="block italic text-ochre/95">{titleLine2}</span>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-6 max-w-xl text-base md:text-lg text-linen/85 leading-relaxed"
          >
            {t(hero.subtitle, locale)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href={localizedPath(hero.primaryCta.href, locale)}
              className="inline-flex items-center gap-2 bg-ochre text-charcoal hover:bg-linen transition-colors px-7 py-3.5 font-medium tracking-wide text-sm uppercase"
            >
              {t(hero.primaryCta, locale)}
            </Link>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 border border-linen/40 hover:border-ochre hover:text-ochre transition-colors px-7 py-3.5 font-medium text-sm tabular-nums"
            >
              {t(hero.secondaryCta, locale)}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.22em] text-linen/75"
          >
            {(hero.specialties[locale] as readonly string[]).map((s, i) => (
              <span key={s} className="flex items-center gap-2">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-ochre/60" />}
                {s}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stats band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute inset-x-0 bottom-0 border-t border-linen/15 bg-charcoal/60 backdrop-blur-md"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8 py-4 md:py-5 flex items-center justify-between gap-4 md:gap-6 text-linen">
            <div className="hidden md:block font-display italic text-ochre/90 text-sm tracking-[0.28em] uppercase">
              {locale === "es" ? "Tres generaciones" : "Three generations"}
            </div>
            <div className="flex items-center gap-3 sm:gap-5 md:gap-12 mx-auto md:ml-auto md:mx-0 flex-wrap justify-center">
              {stats.map((stat) => (
                <div
                  key={stat.full}
                  className="flex items-baseline gap-1.5 sm:gap-2.5 border-l border-linen/15 pl-3 sm:pl-5 md:pl-10 first:border-l-0 first:pl-0"
                >
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl text-ochre tabular-nums leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[0.55rem] sm:text-[0.65rem] md:text-xs uppercase tracking-[0.18em] md:tracking-[0.22em] text-linen/70 leading-tight">
                    <span className="sm:hidden">{stat.label}</span>
                    <span className="hidden sm:inline">{stat.full}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.a
          href="#intro"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-28 left-1/2 -translate-x-1/2 text-linen/60 hover:text-ochre transition-colors"
          aria-label="Scroll"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
