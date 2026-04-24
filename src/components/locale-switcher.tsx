"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/content";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ current, className }: { current: Locale; className?: string }) {
  const pathname = usePathname() || `/${current}`;
  // Next.js usePathname returns the path WITHOUT basePath, and <Link> adds it back.
  const makeHref = (target: Locale) => {
    const withoutLocale = pathname.replace(/^\/(es|en)/, "") || "/";
    return `/${target}${withoutLocale}`.replace(/\/\/+/g, "/");
  };

  return (
    <div className={cn("flex items-center gap-1 text-xs font-medium tracking-[0.2em] uppercase", className)}>
      {LOCALES.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-olive/40">/</span>}
          <Link
            href={makeHref(loc)}
            className={cn(
              "px-1 py-0.5 transition-colors",
              loc === current
                ? "text-olive-deep"
                : "text-olive/60 hover:text-olive-deep"
            )}
            aria-current={loc === current ? "true" : undefined}
          >
            {loc}
          </Link>
        </span>
      ))}
    </div>
  );
}
