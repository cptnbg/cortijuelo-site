import Link from "next/link";
import { content, img, localizedPath, t, type Locale } from "@/lib/content";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { SectionDivider } from "@/components/olive-branch";

const SIGNATURES = {
  es: [
    { name: "Chivo malagueño al ajillo", desc: "Nuestro plato estrella, lento y lleno de ajo." },
    { name: "Conejo a la leña", desc: "Conejo de monte asado al fuego de encina." },
    { name: "Cordero a la brasa", desc: "Cordero lechal sobre sarmiento." },
    { name: "Porra caliente", desc: "Clásico antequerano servido templado." },
    { name: "Churrasco de cerdo ibérico", desc: "Al corte, con sal gorda y romero." },
    { name: "Migas de la sierra", desc: "Pan, ajo, aceite de oliva y pimentón." },
  ],
  en: [
    { name: "Málaga-style garlic goat", desc: "Our signature dish, slow-braised and rich with garlic." },
    { name: "Wood-fire rabbit", desc: "Wild rabbit roasted over holm-oak embers." },
    { name: "Grilled lamb", desc: "Milk-fed lamb cooked over vine cuttings." },
    { name: "Hot porra", desc: "Antequera classic, served warm." },
    { name: "Iberian pork churrasco", desc: "Cut to order, coarse salt and rosemary." },
    { name: "Sierra migas", desc: "Bread, garlic, olive oil and pimentón." },
  ],
} as const;

export function Gastronomy({ locale }: { locale: Locale }) {
  const dishes = content.home.gastronomy.dishes;
  const signatures = SIGNATURES[locale];
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionDivider
              label={locale === "es" ? "Nuestra cocina" : "Our kitchen"}
              className="mb-6"
            />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-olive-deep">
              {t(content.home.gastronomy.heading, locale)}
            </h2>
            <p className="max-w-2xl mx-auto mt-5 text-charcoal/80 leading-relaxed">
              {locale === "es"
                ? "Cocina de pastores, de cazadores y de campo. Platos sencillos, memoria de generaciones, productos de los cortijos y olivares que nos rodean."
                : "Cuisine of shepherds, hunters and the countryside. Simple dishes, generational memory, produce from the farms and olive groves that surround us."}
            </p>
          </div>
        </FadeIn>

        <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6" gap={0.06}>
          {dishes.map((dish, i) => (
            <StaggerItem key={i} className="group">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <div
                  className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${img(dish.image)})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-display text-linen text-lg leading-tight">
                    {signatures[i]?.name}
                  </p>
                  <p className="text-linen/75 text-xs mt-1 leading-relaxed">
                    {signatures[i]?.desc}
                  </p>
                </div>
                <div className="absolute top-3 left-3 bg-linen/92 backdrop-blur px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-olive-deep">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.2}>
          <div className="mt-14 text-center">
            <Link
              href={localizedPath("/menu", locale)}
              className="inline-flex items-center gap-3 bg-olive-deep text-linen hover:bg-charcoal transition-colors px-8 py-3.5 font-medium tracking-wide text-sm uppercase"
            >
              {locale === "es" ? "Ver la carta completa" : "See the full menu"} →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
