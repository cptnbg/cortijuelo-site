"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { content, img, localizedPath, t, type Locale } from "@/lib/content";

export function Hero({ locale }: { locale: Locale }) {
  const hero = content.home.hero;
  const title = t(hero.title, locale);
  const [titleLine1, titleLine2] = title.split("\n");

  return (
    <section className="relative h-[100vh] min-h-[640px] w-full overflow-hidden text-linen">
      {/* background image with slow ken-burns */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img(hero.slides[0])})` }}
        />
      </motion.div>

      {/* tonal overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/35 to-charcoal/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,155,75,0.18),_transparent_55%)]" />

      <div className="relative h-full flex flex-col justify-end pb-24 md:pb-28">
        <div className="mx-auto max-w-6xl w-full px-6 md:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-[0.7rem] md:text-xs uppercase tracking-[0.35em] text-ochre mb-5 font-medium"
          >
            {t(hero.eyebrow, locale)}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight max-w-4xl"
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
            className="mt-8 flex flex-wrap items-center gap-4"
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
            {(hero.specialties[locale] as string[]).map((s, i) => (
              <span key={s} className="flex items-center gap-2">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-ochre/60" />}
                {s}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.a
          href="#intro"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-linen/70 hover:text-ochre transition-colors"
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
