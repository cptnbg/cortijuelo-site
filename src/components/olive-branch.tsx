import type { SVGProps } from "react";

export function OliveBranch({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden
      className={className}
      {...rest}
    >
      <path d="M4 15 Q 60 4, 116 15" />
      <g fill="currentColor" stroke="none" opacity="0.85">
        <ellipse cx="22" cy="10.5" rx="4.5" ry="2" transform="rotate(-18 22 10.5)" />
        <ellipse cx="36" cy="7.5" rx="4.5" ry="2" transform="rotate(-10 36 7.5)" />
        <ellipse cx="52" cy="5.8" rx="4.8" ry="2" transform="rotate(-4 52 5.8)" />
        <ellipse cx="68" cy="5.8" rx="4.8" ry="2" transform="rotate(4 68 5.8)" />
        <ellipse cx="84" cy="7.5" rx="4.5" ry="2" transform="rotate(10 84 7.5)" />
        <ellipse cx="98" cy="10.5" rx="4.5" ry="2" transform="rotate(18 98 10.5)" />
      </g>
      <circle cx="60" cy="4.5" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SectionDivider({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 text-olive ${className}`}>
      <OliveBranch className="w-20 h-6 -scale-x-100" />
      {label && (
        <span className="font-display italic text-sm tracking-[0.18em] uppercase text-olive-deep/80">
          {label}
        </span>
      )}
      <OliveBranch className="w-20 h-6" />
    </div>
  );
}
