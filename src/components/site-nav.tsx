"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { content, localizedPath, type Locale } from "@/lib/content";
import { NAV_PATHS } from "@/lib/nav";
import { LocaleSwitcher } from "./locale-switcher";
import { HRLogo } from "./hr-logo";
import { cn } from "@/lib/utils";

export function SiteNav({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-olive/15 shadow-[0_1px_0_0_rgba(0,0,0,0.03)]"
          : "bg-transparent"
      )}
      style={scrolled ? { backgroundColor: "#f5ede0" } : undefined}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link
          href={localizedPath("/", locale)}
          className="flex items-center gap-3 leading-tight font-display group"
        >
          <HRLogo
            variant={scrolled ? "dark" : "light"}
            className={cn(
              "w-10 h-10 md:w-12 md:h-12 shrink-0 object-contain transition-opacity",
              scrolled ? "" : "drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
            )}
          />
          <div className="flex flex-col leading-tight">
            <span
              className={cn(
                "text-[0.55rem] md:text-[0.6rem] tracking-[0.25em] uppercase transition-colors",
                scrolled ? "text-olive" : "text-ochre/90"
              )}
            >
              Antigua Venta
            </span>
            <span
              className={cn(
                "font-display italic text-base md:text-lg leading-none transition-colors",
                scrolled ? "text-olive-deep" : "text-linen drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
              )}
            >
              El Cortijuelo
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_PATHS.map((item) => (
            <Link
              key={item.key}
              href={localizedPath(item.path, locale)}
              onClick={() => {
                if (item.path === "/" && typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors",
                scrolled
                  ? "text-charcoal/80 hover:text-olive-deep"
                  : "text-linen/90 hover:text-ochre drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
              )}
            >
              {item[locale]}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              scrolled ? "text-olive-deep" : "text-linen drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
            )}
          >
            <Phone className="w-4 h-4" />
            <span className="tabular-nums">{content.contact.phone}</span>
          </a>
          <LocaleSwitcher current={locale} />
        </div>

        <button
          type="button"
          className={cn("lg:hidden p-2", scrolled ? "text-olive-deep" : "text-linen")}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col"
          style={{ backgroundColor: "#f5ede0" }}
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-olive/15">
            <Link
              href={localizedPath("/", locale)}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 leading-tight"
            >
              <HRLogo
                variant="dark"
                className="w-10 h-10 shrink-0 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[0.55rem] tracking-[0.25em] uppercase text-olive">
                  Antigua Venta
                </span>
                <span className="font-display italic text-base leading-none text-olive-deep">
                  El Cortijuelo
                </span>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 text-olive-deep"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-7 px-6">
            {NAV_PATHS.map((item) => (
              <Link
                key={item.key}
                href={localizedPath(item.path, locale)}
                onClick={() => {
                  setOpen(false);
                  if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="font-display text-3xl text-olive-deep"
              >
                {item[locale]}
              </Link>
            ))}
            <a
              href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
              className="mt-6 flex items-center gap-2 text-olive-deep"
            >
              <Phone className="w-5 h-5" /> {content.contact.phone}
            </a>
            <LocaleSwitcher current={locale} className="mt-2" />
          </nav>
        </div>
      )}
    </header>
  );
}

