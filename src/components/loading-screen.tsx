"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setShown(true);
    const timer = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  if (!shown) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-olive-deep text-linen overflow-hidden"
        >
          {/* Subtle radial glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,155,75,0.22),_transparent_65%)]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Tag line above */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display italic text-ochre/80 text-[0.7rem] md:text-xs tracking-[0.4em] uppercase"
            >
              Hermanos Romero
            </motion.p>

            {/* HR monogram — drawn-in with stroke */}
            <svg
              viewBox="0 0 120 100"
              className="w-32 h-24 md:w-44 md:h-36 text-ochre"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* H left stem */}
              <motion.path
                d="M 14 22 L 14 80 M 32 22 L 32 80 M 14 22 L 32 22 M 14 80 L 32 80"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              />
              {/* Crossbar */}
              <motion.path
                d="M 32 51 L 86 51"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
              />
              {/* H right / R stem */}
              <motion.path
                d="M 50 22 L 50 80 M 68 22 L 68 80 M 50 22 L 68 22 M 50 80 L 68 80 M 72 22 L 72 84 M 90 22 L 90 56 M 72 22 L 88 22 M 72 84 L 90 84"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
              />
              {/* R bowl */}
              <motion.path
                d="M 72 22 Q 106 22, 106 39 Q 106 56, 72 56"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
              />
              {/* R leg */}
              <motion.path
                d="M 88 52 L 108 86"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
              />
              {/* Star */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.2,
                  type: "spring",
                  stiffness: 180,
                }}
                style={{ transformOrigin: "114px 16px" }}
              >
                <path
                  d="M 114 10 L 115.5 14.5 L 120 16 L 115.5 17.5 L 114 22 L 112.5 17.5 L 108 16 L 112.5 14.5 Z"
                  fill="currentColor"
                  stroke="none"
                />
              </motion.g>
            </svg>

            {/* Restaurant name */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center"
            >
              <p className="font-display text-xl md:text-2xl text-linen leading-tight">
                Antigua Venta
              </p>
              <p className="font-display italic text-2xl md:text-3xl text-ochre leading-tight">
                El Cortijuelo
              </p>
            </motion.div>

            {/* Founding year */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.4em] text-linen/60"
            >
              <span className="w-8 h-px bg-linen/40" />
              MCMXLVIII
              <span className="w-8 h-px bg-linen/40" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
