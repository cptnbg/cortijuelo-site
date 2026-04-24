import { MapPin, Phone, Clock, Car } from "lucide-react";
import { content, t, type Locale } from "@/lib/content";
import { FadeIn } from "@/components/motion";

export function FindUs({ locale }: { locale: Locale }) {
  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
        <FadeIn className="flex flex-col justify-center">
          <p className="font-display italic text-ochre text-sm tracking-[0.3em] uppercase mb-4">
            {locale === "es" ? "Cómo llegar" : "How to find us"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-olive-deep leading-[1.05] mb-6">
            {locale === "es"
              ? "Entre olivares,\nen Los Alazores"
              : "In the olive groves,\nat Los Alazores"}
          </h2>
          <p className="text-charcoal/85 leading-relaxed mb-8 max-w-md">
            {locale === "es"
              ? "Estamos a 2,5 km de Villanueva del Trabuco, en el kilómetro 2,5 de la carretera de Los Alazores. Muy cerca del nacimiento de Los Cien Caños. Hay sitio para aparcar."
              : "We're 2.5 km from Villanueva del Trabuco, on the Los Alazores road. Very close to the Los Cien Caños springs. Plenty of parking."}
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-linen-soft flex items-center justify-center text-olive-deep shrink-0 border border-olive/15">
                <MapPin className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-olive mb-0.5">
                  {locale === "es" ? "Dirección" : "Address"}
                </p>
                <p className="text-charcoal leading-relaxed">
                  {t(content.contact.address, locale)}
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-linen-soft flex items-center justify-center text-olive-deep shrink-0 border border-olive/15">
                <Clock className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-olive mb-0.5">
                  {locale === "es" ? "Horario" : "Hours"}
                </p>
                <p className="text-charcoal">{t(content.contact.hours, locale)}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-linen-soft flex items-center justify-center text-olive-deep shrink-0 border border-olive/15">
                <Car className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-olive mb-0.5">
                  {locale === "es" ? "Aparcamiento" : "Parking"}
                </p>
                <p className="text-charcoal">
                  {locale === "es" ? "Gratuito · Amplio" : "Free · Plenty of space"}
                </p>
              </div>
            </li>
          </ul>

          <a
            href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 bg-olive-deep text-linen hover:bg-charcoal transition-colors px-7 py-3.5 font-medium tracking-wide text-sm uppercase self-start"
          >
            <Phone className="w-4 h-4" />
            {locale === "es" ? "Reservar mesa" : "Book a table"}
          </a>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden border border-olive/20 bg-linen-soft min-h-[380px]">
            <iframe
              src={content.contact.mapEmbed}
              title="Map"
              className="w-full h-full"
              style={{ border: 0, filter: "saturate(0.85) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-charcoal/5" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
