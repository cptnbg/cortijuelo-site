"use client";

import { use, useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const filtered = filter === "*" ? g.images : g.images.filter((i) => i.category === filter);

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, next, prev]);

  const activeImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      <PageHeader
        title={t(g.pageTitle, locale) as string}
        kicker={locale === "es" ? "Interior · Exterior · Comida" : "Indoors · Outdoors · Food"}
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
                <motion.button
                  type="button"
                  key={image.file}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
                  onClick={() => setLightboxIndex(i)}
                  className={cn(
                    "group relative overflow-hidden bg-muted cursor-zoom-in text-left",
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
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeImage && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/96 flex items-center justify-center p-4 md:p-12"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-5 right-5 md:top-8 md:right-8 p-3 text-linen hover:text-ochre"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              type="button"
              aria-label="Previous"
              className="absolute left-3 md:left-8 p-3 text-linen hover:text-ochre"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <motion.div
              key={activeImage.file}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={img(activeImage.file)}
                alt=""
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-2 pb-2 text-[0.7rem] uppercase tracking-[0.25em] text-linen/70">
                <span>{g.filters.find((f) => f.key === activeImage.category)?.[locale]}</span>
                <span className="tabular-nums">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Next"
              className="absolute right-3 md:right-8 p-3 text-linen hover:text-ochre"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
