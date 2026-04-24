import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { content, localizedPath, t, type Locale } from "@/lib/content";
import { OliveBranch } from "./olive-branch";
import { NAV_PATHS } from "@/lib/nav";
import { FacebookIcon, InstagramIcon } from "./social-icons";

export function SiteFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-olive-deep text-linen/85 mt-auto">
      <div className="absolute inset-x-0 -top-px h-16 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 md:px-8 pt-16 pb-10">
        <div className="flex justify-center mb-10 text-ochre/70">
          <OliveBranch className="w-36 h-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          <div>
            <h3 className="font-display text-2xl text-linen mb-3">
              Antigua Venta El Cortijuelo
            </h3>
            <p className="text-sm leading-relaxed text-linen/70 max-w-xs">
              {locale === "es"
                ? "Cocina tradicional andaluza entre olivares. Abierta desde 1948."
                : "Traditional Andalusian cuisine among the olive groves. Open since 1948."}
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={content.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full border border-linen/25 hover:border-ochre hover:text-ochre transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={content.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full border border-linen/25 hover:border-ochre hover:text-ochre transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-ochre/90 mb-4">
              {locale === "es" ? "Navegar" : "Explore"}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_PATHS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={localizedPath(item.path, locale)}
                    className="text-linen/70 hover:text-ochre transition-colors"
                  >
                    {item[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-ochre/90 mb-4">
              {locale === "es" ? "Encuéntranos" : "Find us"}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-ochre/80 shrink-0" />
                <span className="text-linen/80 leading-relaxed">
                  {t(content.contact.address, locale)}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-ochre/80 shrink-0" />
                <a
                  href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
                  className="text-linen hover:text-ochre transition-colors tabular-nums"
                >
                  {content.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-ochre/80 shrink-0" />
                <span className="text-linen/80">
                  {t(content.contact.hours, locale)}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-linen/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-linen/50">
          <p>
            © {year} Antigua Venta El Cortijuelo.{" "}
            {t(content.footer.copyright, locale)}.
          </p>
          <p className="italic font-display">Hermanos Romero · Villanueva del Trabuco</p>
        </div>
      </div>
    </footer>
  );
}
