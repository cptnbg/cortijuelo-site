import { type Locale } from "@/lib/content";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { SectionDivider } from "@/components/olive-branch";

const EVENTS = {
  es: [
    {
      year: "1948",
      title: "Nace la Venta",
      body: "Francisco Romero Mejías adquiere una vieja posada a 2,5 km de Villanueva del Trabuco. Parada de arrieros en ruta por la sierra.",
    },
    {
      year: "1958",
      title: "La tienda de Eugenio",
      body: "Su yerno, Eugenio Romero, toma las riendas. Añade tienda y zapatería aprovechando el trasiego del camino.",
    },
    {
      year: "1970s",
      title: "La brasa como firma",
      body: "La leña de encina y los platos de campo, chivo al ajillo, conejo y cordero, convierten la casa en parada obligada para la comarca.",
    },
    {
      year: "Hoy",
      title: "Hermanos Romero",
      body: "La tercera generación mantiene las recetas de siempre. Cocina lenta, producto local, fuego de leña.",
    },
  ],
  en: [
    {
      year: "1948",
      title: "The inn begins",
      body: "Francisco Romero Mejías takes over an old roadside inn 2.5 km from Villanueva del Trabuco. A stopping point for muleteers crossing the sierra.",
    },
    {
      year: "1958",
      title: "Eugenio's shop",
      body: "His son-in-law Eugenio Romero takes the reins, adding a shop and shoemaker's that draw on the passing traffic.",
    },
    {
      year: "1970s",
      title: "The grill becomes the signature",
      body: "Holm-oak fire and country dishes, garlic goat, rabbit and lamb, make the house an unavoidable stop for the whole county.",
    },
    {
      year: "Today",
      title: "The Romero brothers",
      body: "The third generation keeps the old recipes. Slow cooking, local produce, wood fire.",
    },
  ],
} as const;

export function Timeline({ locale }: { locale: Locale }) {
  const events = EVENTS[locale];

  return (
    <section className="relative py-24 md:py-32 bg-linen-soft overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionDivider
              label={locale === "es" ? "Tres generaciones" : "Three generations"}
              className="mb-6"
            />
            <h2 className="font-display text-4xl md:text-5xl text-olive-deep">
              {locale === "es" ? "Nuestra historia" : "Our story"}
            </h2>
          </div>
        </FadeIn>

        <Stagger className="relative">
          {/* vertical line */}
          <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px bg-olive/25" aria-hidden />
          <div className="space-y-12 md:space-y-16">
            {events.map((e, i) => (
              <StaggerItem
                key={e.year}
                className={`relative grid md:grid-cols-2 gap-6 md:gap-16 items-center ${
                  i % 2 === 0 ? "md:text-right" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div
                  className={`relative pl-14 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-0 md:left-auto top-3 w-3 h-3 rounded-full bg-ochre ring-4 ring-linen ${
                      i % 2 === 0 ? "md:-right-[7px]" : "md:-left-[7px]"
                    }`}
                    style={{
                      left: "18px",
                    }}
                  />
                  <p className="font-display italic text-terracotta text-sm tracking-[0.25em] uppercase mb-2">
                    {e.year}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-olive-deep leading-tight mb-3">
                    {e.title}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed">{e.body}</p>
                </div>
                <div aria-hidden className="hidden md:block" />
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
