import Link from "next/link";
import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { content, img, localizedPath, t, type Locale } from "@/lib/content";
import { OliveBranch } from "./olive-branch";
import { NAV_PATHS } from "@/lib/nav";
import { FacebookIcon, InstagramIcon, TripadvisorIcon } from "./social-icons";
import { HRLogo } from "./hr-logo";

export function SiteFooter({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const yearsOpen = year - 1948;

  return (
    <footer className="relative mt-auto">
      {/* Reservations CTA strip */}
      <section className="relative bg-terracotta text-linen overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${img("bg1.jpg")})` }}
        />
        <div className="relative mx-auto max-w-6xl px-6 md:px-8 py-14 md:py-16 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="font-display italic text-ochre text-sm tracking-[0.3em] uppercase mb-2">
              {locale === "es" ? "Reservas" : "Reservations"}
            </p>
            <h3 className="font-display text-3xl md:text-5xl leading-[1.1]">
              {locale === "es"
                ? "¿Cuándo nos vemos?"
                : "When shall we see you?"}
            </h3>
            <p className="text-linen/85 mt-3 max-w-md">
              {locale === "es"
                ? "Abierto todos los días de 08:00 a 01:00. Llama o pásate, te esperamos."
                : "Open every day 08:00 – 01:00. Call, or just drop in. We'll be here."}
            </p>
          </div>
          <a
            href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 bg-linen text-terracotta hover:bg-ochre hover:text-charcoal transition-colors px-5 md:px-7 py-4 md:py-5 font-display text-xl sm:text-2xl md:text-3xl tabular-nums shadow-[0_8px_40px_-10px_rgba(0,0,0,0.3)] whitespace-nowrap"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            {content.contact.phone}
          </a>
        </div>
      </section>

      {/* Main footer */}
      <div className="relative bg-olive-deep text-linen/85 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] bg-repeat"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='1' fill='%23f5ede0'/></svg>\")",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 md:px-8 pt-20 pb-10">
          <div className="flex flex-col items-center text-center mb-14">
            <HRLogo
              variant="light"
              className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4 drop-shadow-[0_2px_12px_rgba(200,155,75,0.25)]"
            />
            <span className="text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-ochre/90">
              Antigua Venta
            </span>
            <span className="font-display italic text-3xl md:text-4xl text-linen leading-none mt-1">
              El Cortijuelo
            </span>
            <OliveBranch className="w-32 h-8 text-ochre/55 mt-5" />
            <p className="text-linen/55 text-[0.6rem] md:text-[0.7rem] mt-3 tracking-[0.3em] uppercase tabular-nums">
              {locale === "es" ? "Desde 1948" : "Since 1948"}
              <span className="mx-2 text-ochre/50">·</span>
              {yearsOpen} {locale === "es" ? "años" : "years"}
              <span className="mx-2 text-ochre/50">·</span>
              {locale === "es" ? "3 generaciones" : "3 generations"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
            {/* Brand */}
            <div>
              <h4 className="text-[0.7rem] uppercase tracking-[0.28em] text-ochre mb-5">
                {locale === "es" ? "La casa" : "The house"}
              </h4>
              <p className="text-sm leading-relaxed text-linen/75">
                {locale === "es"
                  ? "Cocina tradicional andaluza. Chivo, conejo y cordero a la brasa, en la sierra de Málaga."
                  : "Traditional Andalusian cuisine. Grilled goat, rabbit and lamb, in the Málaga sierra."}
              </p>
              <div className="flex items-center gap-3 mt-5">
                <a
                  href={content.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2.5 rounded-full border border-linen/25 hover:border-ochre hover:text-ochre transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={content.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-full border border-linen/25 hover:border-ochre hover:text-ochre transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={content.contact.social.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tripadvisor"
                  className="p-2.5 rounded-full border border-linen/25 hover:border-ochre hover:text-ochre transition-colors"
                >
                  <TripadvisorIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Nav */}
            <div>
              <h4 className="text-[0.7rem] uppercase tracking-[0.28em] text-ochre mb-5">
                {locale === "es" ? "Navegar" : "Explore"}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {NAV_PATHS.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={localizedPath(item.path, locale)}
                      className="group inline-flex items-center gap-1 text-linen/75 hover:text-ochre transition-colors"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span className="group-hover:translate-x-0.5 transition-transform">
                        {item[locale]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[0.7rem] uppercase tracking-[0.28em] text-ochre mb-5">
                {locale === "es" ? "Encuéntranos" : "Find us"}
              </h4>
              <ul className="space-y-4 text-sm">
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

          <div className="mt-14 pt-8 border-t border-linen/15 text-center text-xs text-linen/55">
            <p>
              © {year} Antigua Venta El Cortijuelo ·{" "}
              {t(content.footer.copyright, locale)}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
