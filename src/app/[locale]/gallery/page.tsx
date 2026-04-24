"use client";

import { use, useState } from "react";
import { content, img, t, type Locale } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GalleryPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = use(params);
  const g = content.gallery;
  const [filter, setFilter] = useState<string>("*");
  const filtered = filter === "*" ? g.images : g.images.filter((i) => i.category === filter);

  return (
    <>
      <PageHeader
        title={t(g.pageTitle, locale) as string}
        background={g.pageTitleBackground}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {g.filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={cn(
                  "px-5 py-2 text-sm uppercase tracking-[0.2em] border transition-colors",
                  filter === f.key
                    ? "bg-olive-deep text-linen border-olive-deep"
                    : "bg-transparent text-olive-deep border-olive/30 hover:border-olive-deep"
                )}
              >
                {f[locale]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((image, i) => (
                <motion.div
                  key={image.file}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
                  className={cn(
                    "group relative overflow-hidden bg-muted cursor-pointer",
                    i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"
                  )}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${img(image.file)})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-3 left-3 text-[0.6rem] uppercase tracking-[0.2em] text-linen opacity-0 group-hover:opacity-100 transition-opacity">
                    {g.filters.find((f) => f.key === image.category)?.[locale]}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
