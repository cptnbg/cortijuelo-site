"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/content";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ current, className }: { current: Locale; className?: string }) {
  const pathname = usePathname() || `/${current}`;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const stripped = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;

  const makeHref = (target: Locale) => {
    const withoutLocale = stripped.replace(/^\/(es|en)/, "") || "/";
    return `${base}/${target}${withoutLocale}`.replace(/\/\/+/g, "/");
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
