import type { SVGProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Alternative section ornaments — replaces overused olive-branch dividers
 * across the site (the olive branch is now reserved for the footer medallion).
 */

/** A clean horizontal rule with an optional centered label. */
export function Rule({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 text-olive/35",
        className
      )}
    >
      <span className="block w-14 md:w-20 h-px bg-current" />
      {label && (
        <span className="font-display italic text-[0.7rem] md:text-xs tracking-[0.32em] uppercase text-olive-deep/70 whitespace-nowrap">
          {label}
        </span>
      )}
      <span className="block w-14 md:w-20 h-px bg-current" />
    </div>
  );
}

/** Two thin lines with the HR-monogram 4-point star in the middle. */
export function StarMark({
  label,
  className = "",
  ...rest
}: SVGProps<SVGSVGElement> & { label?: string }) {
  if (label) {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-3 text-ochre/60",
          className
        )}
      >
        <span className="block w-12 md:w-16 h-px bg-current" />
        <Star className="w-3 h-3 text-ochre" />
        <span className="font-display italic text-[0.7rem] md:text-xs tracking-[0.32em] uppercase text-olive-deep/70">
          {label}
        </span>
        <Star className="w-3 h-3 text-ochre" />
        <span className="block w-12 md:w-16 h-px bg-current" />
      </div>
    );
  }
  return (
    <svg
      viewBox="0 0 100 16"
      aria-hidden
      className={cn("text-ochre/70", className)}
      fill="none"
      {...rest}
    >
      <line x1="0" y1="8" x2="42" y2="8" stroke="currentColor" strokeWidth="0.5" />
      <path
        d="M50 2 L52 7 L57 8 L52 9 L50 14 L48 9 L43 8 L48 7 Z"
        fill="currentColor"
      />
      <line x1="58" y1="8" x2="100" y2="8" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={className} fill="currentColor">
      <path d="M8 1 L9.5 6.5 L15 8 L9.5 9.5 L8 15 L6.5 9.5 L1 8 L6.5 6.5 Z" />
    </svg>
  );
}

/** Andalusian tile / azulejo motif — small quatrefoil between two lines. */
export function AzulejoMark({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const tile = (
    <svg viewBox="0 0 14 14" aria-hidden className="w-3.5 h-3.5 text-tile" fill="currentColor">
      <path d="M7 0 Q9 5 14 7 Q9 9 7 14 Q5 9 0 7 Q5 5 7 0 Z" opacity="0.85" />
      <circle cx="7" cy="7" r="1.2" fill="var(--linen)" opacity="0.9" />
    </svg>
  );
  if (label) {
    return (
      <div className={cn("flex items-center justify-center gap-3 text-olive/40", className)}>
        <span className="block w-12 md:w-16 h-px bg-current" />
        {tile}
        <span className="font-display italic text-[0.7rem] md:text-xs tracking-[0.32em] uppercase text-olive-deep/70">
          {label}
        </span>
        {tile}
        <span className="block w-12 md:w-16 h-px bg-current" />
      </div>
    );
  }
  return (
    <div className={cn("flex items-center justify-center gap-2 text-olive/40", className)}>
      <span className="block w-16 md:w-20 h-px bg-current" />
      {tile}
      <span className="block w-16 md:w-20 h-px bg-current" />
    </div>
  );
}

/** Vertical line + text — for left-aligned section labels. */
export function KickerLine({
  children,
  className = "",
  tone = "ochre",
}: {
  children: ReactNode;
  className?: string;
  tone?: "ochre" | "olive";
}) {
  const accent = tone === "olive" ? "bg-olive" : "bg-ochre";
  const text = tone === "olive" ? "text-olive-deep" : "text-ochre";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("block w-10 h-px", accent)} />
      <span
        className={cn(
          "font-display italic text-xs tracking-[0.32em] uppercase",
          text
        )}
      >
        {children}
      </span>
    </div>
  );
}

/** Sheaf-of-wheat divider — agricultural, Andalusian. Used sparingly. */
export function WheatMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 28"
      aria-hidden
      className={cn("text-ochre/70", className)}
      fill="currentColor"
    >
      {/* Stems */}
      <g stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.8">
        <path d="M40 28 Q34 18 30 8" />
        <path d="M40 28 Q40 18 40 4" />
        <path d="M40 28 Q46 18 50 8" />
      </g>
      {/* Grains */}
      <g opacity="0.9">
        {[
          { x: 30, y: 8, r: -25 },
          { x: 32, y: 12, r: -20 },
          { x: 34, y: 16, r: -15 },
          { x: 40, y: 4 },
          { x: 40, y: 9 },
          { x: 40, y: 14 },
          { x: 40, y: 19 },
          { x: 50, y: 8, r: 25 },
          { x: 48, y: 12, r: 20 },
          { x: 46, y: 16, r: 15 },
        ].map((g, i) => (
          <ellipse
            key={i}
            cx={g.x}
            cy={g.y}
            rx="1.6"
            ry="3.2"
            transform={g.r ? `rotate(${g.r} ${g.x} ${g.y})` : undefined}
          />
        ))}
      </g>
    </svg>
  );
}
