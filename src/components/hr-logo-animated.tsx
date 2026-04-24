"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated HR monogram — SVG vector traced from the carta.
 * Path data was generated with potrace from the original PNG, then simplified.
 * Used only where we want the "being written" reveal (loading splash, page transitions).
 * For static placements (nav, footer) we still use the PNG — it keeps bundle size lean.
 */

const PATH_D = "M2673 11813 c240 -2 634 -2 875 0 240 1 43 2 -438 2 -481 0 -678 -1 -437 -2z M6793 11813 c230 -2 604 -2 830 0 227 1 39 2 -418 2 -456 0 -642 -1 -412 -2z M2224 11680 c-49 -20 -66 -77 -39 -129 18 -36 23 -38 136 -46 183 -13 296 -55 376 -137 53 -55 81 -117 93 -210 5 -42 10 -578 10 -1280 0 -1207 0 -1207 -22 -1223 -13 -9 -97 -62 -188 -118 -417 -259 -773 -553 -1012 -837 -214 -254 -358 -540 -419 -833 -31 -145 -31 -363 -1 -504 54 -252 151 -433 318 -592 153 -148 309 -228 550 -282 98 -23 109 -23 970 -26 872 -4 872 -4 900 20 38 33 39 90 2 122 -23 20 -40 23 -155 27 -161 7 -196 20 -227 87 -21 46 -21 46 -24 1464 -2 1318 -4 1419 -19 1413 -58 -23 -398 -239 -630 -402 -42 -29 -42 -29 -43 -1119 0 -619 -5 -1121 -10 -1163 -19 -147 -78 -225 -198 -262 -295 -91 -635 122 -771 485 -66 177 -86 309 -78 534 9 246 52 414 170 656 211 431 604 820 1223 1211 637 403 1437 684 2267 799 325 44 497 56 895 62 382 6 382 6 382 175 0 169 0 169 -42 164 -24 -3 -97 -8 -163 -11 -293 -15 -727 -61 -1040 -111 -643 -103 -1289 -293 -1840 -539 -33 -15 -70 -31 -83 -36 -23 -9 -23 -9 -20 1144 3 1152 3 1152 28 1197 28 50 74 85 133 101 49 13 193 29 268 29 89 0 137 54 108 122 -25 60 13 58 -926 57 -472 0 -868 -4 -879 -9z M6369 11675 c-32 -18 -52 -63 -43 -99 10 -42 49 -66 108 -66 28 0 93 -5 144 -10 121 -13 166 -36 195 -98 22 -47 22 -47 22 -2852 0 -2375 -2 -2810 -14 -2838 -25 -59 -72 -74 -250 -80 -138 -4 -155 -7 -177 -26 -13 -11 -27 -35 -30 -53 -5 -27 -1 -37 24 -63 30 -30 30 -30 862 -30 831 0 831 0 855 25 46 45 23 127 -38 139 -12 3 -74 7 -137 10 -226 10 -317 62 -368 210 -16 48 -17 168 -20 1760 -2 1708 -2 1708 45 1701 1045 -152 1795 -602 2113 -1268 374 -783 71 -1704 -755 -2294 -220 -157 -520 -315 -1060 -558 -301 -136 -701 -333 -860 -424 -569 -328 -987 -736 -1229 -1203 -56 -108 -56 -108 -56 1962 0 1495 3 2084 11 2122 40 186 146 262 398 284 104 9 136 30 134 90 -1 28 -8 44 -28 61 -26 23 -26 23 -806 23 -780 0 -780 0 -804 -25 -34 -33 -34 -93 -1 -124 22 -21 38 -24 164 -31 194 -10 226 -30 241 -151 5 -35 8 -1335 7 -2889 -2 -2688 -3 -2827 -20 -2858 -29 -55 -79 -71 -252 -78 -160 -6 -186 -13 -203 -51 -17 -37 -13 -62 14 -88 24 -25 24 -25 875 -25 851 0 851 0 877 26 21 21 24 32 19 62 -9 57 -35 72 -125 72 -208 0 -342 38 -407 113 -77 90 -99 213 -91 509 4 177 10 234 31 337 67 316 178 559 356 779 172 214 398 362 644 423 118 29 316 36 431 15 174 -33 363 -108 525 -209 248 -156 453 -321 1110 -892 228 -199 440 -372 608 -498 408 -308 790 -469 1243 -523 240 -28 1375 -12 1425 21 26 16 34 43 23 72 -15 42 -39 46 -206 33 -447 -35 -838 86 -1333 414 -218 144 -299 208 -875 687 -740 615 -1005 814 -1290 971 -336 185 -616 263 -935 262 -227 -1 -398 -35 -607 -118 -46 -18 -83 -32 -83 -30 0 1 37 29 83 62 288 209 657 384 1627 775 897 361 1244 559 1585 901 337 338 530 714 601 1171 23 148 23 449 -1 600 -80 522 -324 919 -770 1255 -511 384 -1214 606 -2092 660 -98 6 -206 13 -240 16 -63 6 -63 6 -63 682 0 398 5 706 10 746 31 215 154 311 425 332 94 7 138 22 149 49 13 34 5 75 -18 102 -24 28 -24 28 -848 30 -697 2 -827 0 -849 -12z M6670 10591 c0 -720 0 -720 -32 -724 -32 -4 -32 -4 5 -5 37 -2 37 -2 37 723 0 399 -2 725 -5 725 -3 0 -5 -324 -5 -719z M9137 11236 c-8 -8 -17 -42 -21 -74 -24 -214 -136 -405 -281 -484 -57 -30 -184 -68 -231 -68 -20 0 -39 -9 -54 -25 -20 -21 -22 -28 -12 -50 6 -13 22 -27 34 -30 13 -2 57 -12 98 -20 230 -46 382 -211 432 -468 10 -56 21 -112 24 -124 5 -26 49 -41 73 -26 10 7 22 43 32 104 30 167 77 273 165 368 71 77 183 135 294 153 82 13 110 29 110 63 0 34 -20 44 -119 65 -248 51 -392 206 -443 475 -11 61 -24 120 -29 133 -10 26 -50 30 -72 8z";

export function HRLogoAnimated({
  className = "",
  drawDuration = 1.6,
  fillDelay = 1.4,
  starDelay = 1.9,
}: {
  className?: string;
  drawDuration?: number;
  fillDelay?: number;
  starDelay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 1254 1254"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        fill="none"
      >
        <g transform="translate(0.000000,1254.000000) scale(0.100000,-0.100000)">
          {/* Stroke — draws in */}
          <motion.path
            d={PATH_D}
            stroke="currentColor"
            strokeWidth={28}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={reduced ? { opacity: 1 } : { pathLength: 0, opacity: 0.9 }}
            animate={reduced ? { opacity: 1 } : { pathLength: 1, opacity: 0.9 }}
            transition={{
              duration: drawDuration,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
          {/* Fill — fades in after the outline is drawn */}
          <motion.path
            d={PATH_D}
            fill="currentColor"
            stroke="none"
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: reduced ? 0 : fillDelay,
              ease: "easeOut",
            }}
          />
        </g>
      </svg>

      {/* Star flash — glowing circle at the star's position (top-right) */}
      {!reduced && (
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.4, 1, 0.7, 1],
            scale: [0.4, 1.6, 1, 1.3, 1.05, 1.15],
          }}
          transition={{
            duration: 1.4,
            delay: starDelay,
            times: [0, 0.15, 0.35, 0.6, 0.85, 1],
          }}
          className="pointer-events-none absolute w-5 h-5 md:w-7 md:h-7 rounded-full bg-linen blur-[8px]"
          style={{
            // Star is at approximately viewBox coords (914, 112) in the 1254x1254 system.
            // That's 73% across, 9% down.
            left: "73%",
            top: "9%",
            transform: "translate(-50%, -50%)",
            mixBlendMode: "screen",
          }}
        />
      )}
      {/* Secondary sparkle trail for a twinkle feel */}
      {!reduced && (
        <motion.span
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0, 0.5, 0] }}
          transition={{ duration: 1.8, delay: starDelay + 0.3, times: [0, 0.2, 0.5, 0.75, 1] }}
          className="pointer-events-none absolute w-2 h-2 rounded-full bg-ochre blur-[2px]"
          style={{
            left: "68%",
            top: "13%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
}
