import { Flame, Wheat, Droplet, Sprout } from "lucide-react";
import { type Locale } from "@/lib/content";
import { FadeIn } from "@/components/motion";

/**
 * Provenance strip — what we cook with and how.
 * Intentionally different content from the hero stats band
 * (years open / generations / Tripadvisor), which already lives above.
 */
export function Recognition({ locale }: { locale: Locale }) {
  const items = [
    {
      icon: Flame,
      label: locale === "es" ? "Carnes" : "Meats",
      value: locale === "es" ? "a la brasa" : "over the grill",
    },
    {
      icon: Sprout,
      label: locale === "es" ? "Productos" : "Produce",
      value: locale === "es" ? "de la sierra" : "from the sierra",
    },
    {
      icon: Droplet,
      label: locale === "es" ? "Aceite" : "Extra-virgin",
      value: locale === "es" ? "de oliva virgen" : "olive oil",
    },
    {
      icon: Wheat,
      label: locale === "es" ? "Recetas" : "Recipes",
      value: locale === "es" ? "de siempre" : "of always",
    },
  ];

  return (
    <section className="relative py-10 md:py-14 bg-linen border-y border-olive/15">
      <FadeIn>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-center text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.35em] text-olive/70 font-medium mb-8 md:mb-10">
            {locale === "es" ? "Nuestra cocina, en cuatro palabras" : "Our kitchen, in four words"}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-7 md:gap-8">
            {items.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 md:gap-4 md:justify-center min-w-0"
              >
                <span className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-background border border-olive/20 flex items-center justify-center text-olive-deep shrink-0">
                  <Icon className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.22em] text-olive/80 mb-0.5 leading-tight">
                    {label}
                  </p>
                  <p className="font-display italic text-olive-deep text-base md:text-lg leading-tight truncate">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
