"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HRLogo } from "./hr-logo";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setShown(true);
    const timer = setTimeout(() => setVisible(false), 2800);
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

            {/* HR monogram — gentle zoom-in + soft glow bloom */}
            <div className="relative">
              {/* Glow bloom behind logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.8, 0.4], scale: [0.5, 1.3, 1.15] }}
                transition={{
                  duration: 1.8,
                  delay: 0.4,
                  ease: "easeOut",
                  times: [0, 0.45, 1],
                }}
                className="absolute inset-0 -m-10 rounded-full bg-ochre/30 blur-3xl"
                aria-hidden
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.82, filter: "blur(6px)" }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.3,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <HRLogo
                  variant="light"
                  className="w-48 h-48 md:w-60 md:h-60 object-contain"
                />
                {/* Star shimmer — sparkle loop on top-right of the mark */}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0.4, 1, 0.6],
                    scale: [0.6, 1.1, 0.9, 1.05, 1],
                  }}
                  transition={{
                    duration: 1.6,
                    delay: 1.3,
                    times: [0, 0.25, 0.5, 0.75, 1],
                  }}
                  aria-hidden
                  className="pointer-events-none absolute top-[9%] right-[6%] w-4 h-4 md:w-5 md:h-5 rounded-full bg-linen blur-[6px]"
                />
              </motion.div>
            </div>

            {/* Restaurant name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
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
              transition={{ duration: 0.9, delay: 1.4 }}
              className="flex items-center gap-3 text-[0.65rem] md:text-xs uppercase tracking-[0.4em] text-linen/55"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                style={{ originX: 1 }}
                className="block w-8 md:w-10 h-px bg-linen/40"
              />
              <span className="tabular-nums">Desde 1948</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="block w-8 md:w-10 h-px bg-linen/40"
              />
            </motion.div>
          </div>

          {/* Fine print at the bottom */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute bottom-14 left-1/2 -translate-x-1/2 font-display italic text-ochre/50 text-[0.6rem] md:text-[0.65rem] tracking-[0.35em] uppercase whitespace-nowrap"
          >
            Villanueva del Trabuco · Málaga
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
