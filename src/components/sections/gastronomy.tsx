import Link from "next/link";
import { content, img, localizedPath, t, type Locale } from "@/lib/content";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { SectionDivider } from "@/components/olive-branch";

const SIGNATURES = {
  es: [
    { name: "Chivo malagueño al ajillo", kicker: "Plato estrella", desc: "Cocción lenta, ajo confitado y aceite de oliva virgen extra.", stand: "De la sierra" },
    { name: "Conejo al ajillo", kicker: "Especialidad", desc: "Lento, con ajo y vino blanco. Receta de la casa desde 1948.", stand: "Del campo" },
    { name: "Cordero a la brasa", kicker: "Brasa", desc: "Cordero lechal sobre sarmiento de vid, con sal gorda y romero.", stand: "De Antequera" },
    { name: "Porra caliente", kicker: "Cuchara", desc: "Clásico antequerano, servido templado, con su huevo y su jamón.", stand: "De la casa" },
    { name: "Churrasco ibérico", kicker: "Parrilla", desc: "Al corte, con sal gorda y romero del monte.", stand: "Cerdo ibérico" },
    { name: "Migas de la sierra", kicker: "Pastores", desc: "Pan, ajo, aceite de oliva y pimentón de la Vera.", stand: "Del pastor" },
  ],
  en: [
    { name: "Málaga-style garlic goat", kicker: "Signature", desc: "Slow-braised, confit garlic and extra-virgin olive oil.", stand: "From the sierra" },
    { name: "Garlic rabbit", kicker: "House dish", desc: "Slow-cooked with garlic and white wine. Our 1948 recipe.", stand: "From the fields" },
    { name: "Grilled lamb", kicker: "From the grill", desc: "Milk-fed lamb over vine cuttings, with coarse salt and rosemary.", stand: "From Antequera" },
    { name: "Hot porra", kicker: "Spoon dish", desc: "Antequera classic, served warm, topped with egg and ham.", stand: "House recipe" },
    { name: "Iberian churrasco", kicker: "Grill", desc: "Cut to order, with coarse salt and mountain rosemary.", stand: "Iberian pork" },
    { name: "Sierra migas", kicker: "Shepherd's dish", desc: "Bread, garlic, olive oil, pimentón de la Vera.", stand: "Shepherd's plate" },
  ],
} as const;

export function Gastronomy({ locale }: { locale: Locale }) {
  const dishes = content.home.gastronomy.dishes;
  const signatures = SIGNATURES[locale];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl bg-terracotta pointer-events-none"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn>
          <div className="text-center mb-16 md:mb-20">
            <SectionDivider
              label={locale === "es" ? "Nuestra cocina" : "Our kitchen"}
              className="mb-6"
            />
            <h2 className="font-display text-4xl md:text-6xl text-olive-deep leading-[1.05]">
              {t(content.home.gastronomy.heading, locale)}
            </h2>
            <p className="max-w-2xl mx-auto mt-5 text-charcoal/75 leading-relaxed">
              {locale === "es"
                ? "Cocina de pastores, de cazadores y de campo. Platos sencillos, memoria de generaciones, productos de los cortijos y olivares que nos rodean."
                : "Cuisine of shepherds, hunters and the countryside. Simple dishes, generational memory, produce from the farms and olive groves that surround us."}
            </p>
          </div>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7" gap={0.08}>
          {dishes.map((dish, i) => {
            const sig = signatures[i];
            const isLarge = i === 0 || i === 4;
            return (
              <StaggerItem
                key={i}
                className={`group relative ${isLarge ? "md:col-span-2" : ""}`}
              >
                <div
                  className={`relative overflow-hidden bg-charcoal ${
                    isLarge ? "aspect-[8/5]" : "aspect-[4/5]"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-[1200ms]"
                    style={{ backgroundImage: `url(${img(dish.image)})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/20 to-transparent" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.22em] bg-linen/90 text-olive-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.22em] bg-terracotta text-linen">
                      {sig.kicker}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 text-linen">
                    <p className="text-[0.65rem] uppercase tracking-[0.25em] text-ochre/90 mb-1.5 font-display italic">
                      {sig.stand}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl leading-tight">
                      {sig.name}
                    </h3>
                    <p className="text-linen/80 text-sm mt-2 leading-relaxed max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500">
                      {sig.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <FadeIn delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={localizedPath("/menu", locale)}
              className="inline-flex items-center gap-3 bg-olive-deep text-linen hover:bg-charcoal transition-colors px-8 py-3.5 font-medium tracking-wide text-sm uppercase"
            >
              {locale === "es" ? "Ver la carta completa" : "See the full menu"} →
            </Link>
            <a
              href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 border border-olive-deep/30 text-olive-deep hover:border-olive-deep transition-colors px-8 py-3.5 font-medium text-sm tabular-nums"
            >
              {locale === "es" ? "Reservar" : "Book"} · {content.contact.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
