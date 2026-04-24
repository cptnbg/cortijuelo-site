"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HRLogoAnimated } from "./hr-logo-animated";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setShown(true);
    const timer = setTimeout(() => setVisible(false), 3600);
    return () => clearTimeout(timer);
  }, []);

  if (!shown) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-olive-deep text-linen overflow-hidden"
        >
          {/* Warm radial glow behind the mark — gently breathes in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,155,75,0.32),_transparent_55%)]"
          />

          {/* Subtle dotted texture for warmth */}
          <div
            className="absolute inset-0 opacity-[0.07] bg-repeat pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='1' fill='%23f5ede0'/></svg>\")",
            }}
          />

          {/* Decorative top/bottom hairlines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0.5 }}
            className="absolute top-8 left-1/2 -translate-x-1/2 w-40 h-px bg-ochre/35"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-px bg-ochre/35"
          />

          <div className="relative flex flex-col items-center gap-6 px-8">
            {/* Kicker */}
            <motion.p
              initial={{ opacity: 0, y: 8, letterSpacing: "0.3em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.4em" }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display italic text-ochre/85 text-[0.7rem] md:text-xs uppercase"
            >
              Hermanos Romero
            </motion.p>

            {/* HR monogram — draws in stroke-first, then fills, then star flashes */}
            <div className="relative">
              {/* Glow bloom behind logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.7, 0.35], scale: [0.5, 1.3, 1.15] }}
                transition={{
                  duration: 2.6,
                  delay: 0.4,
                  ease: "easeOut",
                  times: [0, 0.5, 1],
                }}
                className="absolute inset-0 -m-10 rounded-full bg-ochre/30 blur-3xl"
                aria-hidden
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="relative text-ochre drop-shadow-[0_2px_14px_rgba(200,155,75,0.45)]"
              >
                <HRLogoAnimated
                  className="w-48 h-48 md:w-60 md:h-60"
                  drawDuration={1.8}
                  fillDelay={1.7}
                  starDelay={2.3}
                />
              </motion.div>
            </div>

            {/* Restaurant name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="font-display text-xl md:text-2xl text-linen leading-tight tracking-wide">
                Antigua Venta
              </p>
              <p className="font-display italic text-3xl md:text-4xl text-ochre leading-tight">
                El Cortijuelo
              </p>
            </motion.div>

            {/* Founding year with hairlines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 2.5 }}
              className="flex items-center gap-3 text-[0.65rem] md:text-xs uppercase tracking-[0.4em] text-linen/55"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
                style={{ originX: 1 }}
                className="block w-8 md:w-10 h-px bg-linen/40"
              />
              <span className="tabular-nums">EST. 1948</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="block w-8 md:w-10 h-px bg-linen/40"
              />
            </motion.div>
          </div>

          {/* Fine print at the bottom */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 2.9 }}
            className="absolute bottom-14 left-1/2 -translate-x-1/2 font-display italic text-ochre/50 text-[0.6rem] md:text-[0.65rem] tracking-[0.35em] uppercase whitespace-nowrap"
          >
            Villanueva del Trabuco · Málaga
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
