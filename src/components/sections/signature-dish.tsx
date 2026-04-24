import Link from "next/link";
import { content, img, localizedPath, type Locale } from "@/lib/content";
import { FadeIn } from "@/components/motion";
import { AzulejoMark } from "@/components/ornaments";

export function SignatureDish({ locale }: { locale: Locale }) {
  return (
    <section className="relative bg-olive-deep text-linen overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] bg-repeat pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><path d='M0 60Q60 20 120 60T240 60' fill='none' stroke='%23f5ede0' stroke-width='0.5' opacity='0.8'/></svg>\")",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 min-h-[600px]">
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img("carta1.jpg")})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-olive-deep/30 lg:to-olive-deep/0" />

          {/* Floating price/badge card */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-linen text-charcoal px-5 py-4 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.4)] max-w-[220px]">
            <p className="text-[0.6rem] uppercase tracking-[0.28em] text-terracotta font-medium">
              {locale === "es" ? "Plato de la casa" : "House signature"}
            </p>
            <p className="font-display text-xl leading-tight mt-1">
              {locale === "es" ? "Chivo al ajillo" : "Garlic goat"}
            </p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="font-display text-2xl text-olive-deep tabular-nums">19</span>
              <span className="text-olive-deep/60 text-sm">€</span>
              <span className="text-[0.65rem] uppercase tracking-wider text-charcoal/55 ml-auto">
                {locale === "es" ? "ración" : "per serving"}
              </span>
            </div>
          </div>
        </div>

        <FadeIn className="px-8 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col justify-center">
          <AzulejoMark className="w-32 mb-6" />
          <p className="font-display italic text-ochre text-sm tracking-[0.32em] uppercase mb-4">
            {locale === "es" ? "Receta malagueña" : "A Málaga recipe"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] mb-6">
            {locale === "es" ? "Chivo, ajo y" : "Goat, garlic and"}
            <span className="italic text-ochre"> {locale === "es" ? "tiempo" : "time"}</span>
          </h2>
          <p className="text-linen/85 leading-relaxed max-w-lg mb-5">
            {locale === "es"
              ? "Nuestro plato estrella desde 1948. Chivo malagueño despiezado y dorado a fuego lento, cocinado con ajo confitado, laurel y aceite de oliva virgen de la comarca. Dos horas de cocción, ni un minuto menos."
              : "Our signature dish since 1948. Málaga goat, broken down and slowly browned, cooked with confit garlic, bay leaf and local extra-virgin olive oil. Two hours of cooking, not a minute less."}
          </p>
          <p className="text-linen/85 leading-relaxed max-w-lg mb-8">
            {locale === "es"
              ? "Lo mismo para el conejo al ajillo. Brasa de encina, hierbas de la sierra, paciencia."
              : "The same for our garlic rabbit. Holm-oak embers, mountain herbs, patience."}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={localizedPath("/menu", locale)}
              className="inline-flex items-center gap-2 bg-ochre text-charcoal hover:bg-linen transition-colors px-7 py-3.5 text-sm font-medium uppercase tracking-wider"
            >
              {locale === "es" ? "Ver la carta" : "See the menu"} →
            </Link>
            <a
              href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
              className="text-linen/80 hover:text-ochre transition-colors text-sm underline-offset-4 hover:underline tabular-nums"
            >
              {locale === "es" ? "Reservar mesa" : "Book a table"}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
