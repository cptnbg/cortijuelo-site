import type { SVGProps } from "react";

/**
 * HR Monogram — Hermanos Romero family crest
 * Reinterpreted from the menu cover: interlocking H + R with a 4-point star.
 */
export function HRLogo({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
      className={className}
      {...rest}
    >
      {/* H — ornate serif */}
      <g>
        {/* Left stem */}
        <path
          d="M 20 18
             C 18 18, 14 18, 14 22
             L 14 80
             C 14 84, 18 84, 20 84
             L 26 84
             C 28 84, 32 84, 32 80
             L 32 22
             C 32 18, 28 18, 26 18 Z"
          fill="currentColor"
          stroke="none"
        />
        {/* Crossbar */}
        <path
          d="M 32 48 L 62 48 L 62 54 L 32 54 Z"
          fill="currentColor"
          stroke="none"
        />
        {/* Right stem of H */}
        <path
          d="M 56 18
             C 54 18, 50 18, 50 22
             L 50 80
             C 50 84, 54 84, 56 84
             L 62 84
             C 64 84, 68 84, 68 80
             L 68 22
             C 68 18, 64 18, 62 18 Z"
          fill="currentColor"
          stroke="none"
        />
      </g>

      {/* R — overlapping */}
      <g transform="translate(36,0)">
        {/* Vertical stem */}
        <path
          d="M 42 18
             C 40 18, 36 18, 36 22
             L 36 80
             C 36 84, 40 84, 42 84
             L 48 84
             C 50 84, 54 84, 54 80
             L 54 22
             C 54 18, 50 18, 48 18 Z"
          fill="currentColor"
          stroke="none"
        />
        {/* Bowl — top curve */}
        <path
          d="M 54 20
             L 64 20
             C 76 20, 82 28, 82 38
             C 82 48, 76 56, 64 56
             L 54 56
             L 54 50
             L 64 50
             C 72 50, 76 45, 76 38
             C 76 31, 72 26, 64 26
             L 54 26 Z"
          fill="currentColor"
          stroke="none"
        />
        {/* Leg */}
        <path
          d="M 64 52
             L 72 52
             L 84 84
             L 74 84
             L 62 58 Z"
          fill="currentColor"
          stroke="none"
        />
      </g>

      {/* 4-point star above the R */}
      <g transform="translate(110,14)">
        <path
          d="M 0 -7 L 1.6 -1.6 L 7 0 L 1.6 1.6 L 0 7 L -1.6 1.6 L -7 0 L -1.6 -1.6 Z"
          fill="currentColor"
          stroke="none"
          className="hr-star"
        />
      </g>

      {/* Small dot accents around the star */}
      <circle cx="102" cy="8" r="0.9" fill="currentColor" stroke="none" opacity="0.7" />
      <circle cx="116" cy="22" r="0.9" fill="currentColor" stroke="none" opacity="0.7" />
    </svg>
  );
}

/**
 * Small "HR" mark for favicon / cramped spots — no star, tighter viewBox.
 */
export function HRMark({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 70"
      fill="currentColor"
      aria-hidden
      className={className}
      {...rest}
    >
      {/* Simplified H */}
      <rect x="8" y="10" width="10" height="50" rx="1.5" />
      <rect x="18" y="30" width="22" height="8" />
      <rect x="40" y="10" width="10" height="50" rx="1.5" />
      {/* Simplified R, overlapping */}
      <rect x="48" y="10" width="10" height="50" rx="1.5" />
      <path d="M 58 12 L 68 12 C 78 12, 82 18, 82 26 C 82 34, 78 40, 68 40 L 58 40 L 58 34 L 68 34 C 74 34, 76 30, 76 26 C 76 22, 74 18, 68 18 L 58 18 Z" />
      <path d="M 66 38 L 72 38 L 82 60 L 74 60 L 64 42 Z" />
    </svg>
  );
}
