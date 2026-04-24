import Link from "next/link";
import { Download, Phone, Utensils, Flame, Soup, Cake } from "lucide-react";
import { content, img, type Locale } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { SectionDivider } from "@/components/olive-branch";

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  star?: boolean;
};

type MenuSection = {
  title: string;
  subtitle: string;
  kicker: string;
  image: string;
  icon: "utensils" | "flame" | "soup" | "cake";
  signature?: boolean;
  items: readonly MenuItem[];
};

const MENU: Record<Locale, readonly MenuSection[]> = {
  es: [
    {
      title: "Para empezar",
      subtitle: "Entradas y compartir",
      kicker: "01 · Aperitivos",
      image: "carta2.jpg",
      icon: "utensils",
      items: [
        { name: "Jamón ibérico de bellota", desc: "Cortado a cuchillo, con pan de pueblo.", price: "18" },
        { name: "Queso de oveja curado", desc: "De la serranía, con miel de caña.", price: "12" },
        { name: "Porra caliente de Antequera", desc: "Nuestro clásico, servido templado.", price: "7" },
        { name: "Migas de la sierra", desc: "Con panceta, chorizo y pimientos.", price: "10" },
        { name: "Croquetas caseras de puchero", desc: "Receta de la abuela Dolores.", price: "9" },
        { name: "Ensalada de naranja y bacalao", desc: "Aceite virgen extra y aceitunas negras.", price: "11" },
      ],
    },
    {
      title: "La brasa",
      subtitle: "Carnes al fuego de leña",
      kicker: "02 · Especialidad",
      image: "carta1.jpg",
      icon: "flame",
      signature: true,
      items: [
        { name: "Chivo malagueño al ajillo", desc: "Nuestro plato estrella. Cocción lenta, ajo confitado y aceite de oliva virgen.", price: "19", star: true },
        { name: "Conejo a la leña", desc: "De monte, asado sobre encina con hierbas de la sierra.", price: "17", star: true },
        { name: "Cordero lechal a la brasa", desc: "Sobre sarmiento de vid, con sal gorda y romero.", price: "22" },
        { name: "Churrasco de cerdo ibérico", desc: "Cortado al peso, con chimichurri de la casa.", price: "16" },
        { name: "Chuletas de cordero a la parrilla", desc: "Al punto que prefieras.", price: "20" },
        { name: "Solomillo de ternera al Pedro Ximénez", desc: "Con reducción de vino dulce de Málaga.", price: "24" },
        { name: "Secreto ibérico con patatas a lo pobre", desc: "Lento, con cebolla y pimiento.", price: "17" },
      ],
    },
    {
      title: "De la tierra",
      subtitle: "Guisos y cuchara",
      kicker: "03 · Tradición",
      image: "carta4.jpg",
      icon: "soup",
      items: [
        { name: "Potaje de garbanzos con espinacas", desc: "Receta de Cuaresma, todo el año.", price: "11" },
        { name: "Rabo de toro al vino tinto", desc: "Cocción de seis horas.", price: "16" },
        { name: "Ajoblanco malagueño", desc: "Con uvas moscatel (temporada).", price: "8" },
        { name: "Gazpacho de la casa", desc: "Con crujiente de pan y pimiento verde.", price: "7" },
      ],
    },
    {
      title: "Dulces",
      subtitle: "Postres caseros",
      kicker: "04 · Para terminar",
      image: "carta5.jpg",
      icon: "cake",
      items: [
        { name: "Arroz con leche", desc: "Con canela y limón.", price: "5" },
        { name: "Leche frita", desc: "Con helado de vainilla.", price: "6" },
        { name: "Torta de aceite y miel", desc: "Pastelería tradicional.", price: "5" },
        { name: "Tarta de la abuela", desc: "Hojaldre, crema y chocolate.", price: "6" },
        { name: "Tocino de cielo", desc: "Yemas y caramelo.", price: "5" },
      ],
    },
  ],
  en: [
    {
      title: "To begin",
      subtitle: "Starters & sharing",
      kicker: "01 · Aperitifs",
      image: "carta2.jpg",
      icon: "utensils",
      items: [
        { name: "Acorn-fed Iberian ham", desc: "Hand-carved, served with village bread.", price: "18" },
        { name: "Aged sheep's cheese", desc: "From the sierra, with cane honey.", price: "12" },
        { name: "Hot porra of Antequera", desc: "Our classic, served warm.", price: "7" },
        { name: "Sierra migas", desc: "With pancetta, chorizo and peppers.", price: "10" },
        { name: "House-made stew croquettes", desc: "Grandmother Dolores' recipe.", price: "9" },
        { name: "Orange and salt-cod salad", desc: "Extra-virgin olive oil and black olives.", price: "11" },
      ],
    },
    {
      title: "The grill",
      subtitle: "Meats over wood fire",
      kicker: "02 · Speciality",
      image: "carta1.jpg",
      icon: "flame",
      signature: true,
      items: [
        { name: "Málaga-style garlic goat", desc: "Our signature dish. Slow-braised, confit garlic and extra-virgin olive oil.", price: "19", star: true },
        { name: "Wood-fire rabbit", desc: "Wild rabbit, roasted over holm-oak embers with mountain herbs.", price: "17", star: true },
        { name: "Grilled milk-fed lamb", desc: "Over vine cuttings, with coarse salt and rosemary.", price: "22" },
        { name: "Iberian pork churrasco", desc: "Cut to order, with house chimichurri.", price: "16" },
        { name: "Grilled lamb chops", desc: "Cooked to your preference.", price: "20" },
        { name: "Beef tenderloin in Pedro Ximénez", desc: "With Málaga sweet-wine reduction.", price: "24" },
        { name: "Iberian secreto with poor-man's potatoes", desc: "Slow, with onion and pepper.", price: "17" },
      ],
    },
    {
      title: "From the land",
      subtitle: "Stews & spoons",
      kicker: "03 · Tradition",
      image: "carta4.jpg",
      icon: "soup",
      items: [
        { name: "Chickpea and spinach potaje", desc: "A Lenten recipe, all year round.", price: "11" },
        { name: "Oxtail in red wine", desc: "Six-hour braise.", price: "16" },
        { name: "Málaga ajoblanco", desc: "With Muscatel grapes (in season).", price: "8" },
        { name: "House gazpacho", desc: "With bread crumb and green pepper.", price: "7" },
      ],
    },
    {
      title: "Sweet",
      subtitle: "House-made desserts",
      kicker: "04 · To finish",
      image: "carta5.jpg",
      icon: "cake",
      items: [
        { name: "Rice pudding", desc: "With cinnamon and lemon.", price: "5" },
        { name: "Fried milk", desc: "With vanilla ice cream.", price: "6" },
        { name: "Olive-oil and honey cake", desc: "Traditional pastry.", price: "5" },
        { name: "Grandmother's tart", desc: "Puff pastry, cream and chocolate.", price: "6" },
        { name: "Tocino de cielo", desc: "Egg yolk and caramel.", price: "5" },
      ],
    },
  ],
} as const;

const ICONS = {
  utensils: Utensils,
  flame: Flame,
  soup: Soup,
  cake: Cake,
};

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const sections = MENU[locale];
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      <PageHeader
        title={locale === "es" ? "La Carta" : "The Menu"}
        kicker={locale === "es" ? "Cocina tradicional andaluza" : "Traditional Andalusian cuisine"}
        background="carta3.jpg"
      />

      <section className="py-20 md:py-24 bg-linen-soft">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
                {locale === "es"
                  ? "Cocinamos lo que da la tierra. Precios orientativos, pueden variar según temporada y mercado. Consúltanos por las sugerencias del día, alergias e intolerancias. Vino y bebidas, aparte."
                  : "We cook what the land gives us. Prices are indicative and may vary by season and market. Please ask about daily specials, allergies and dietary needs. Wine and drinks billed separately."}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`${base}/menu/carta.pdf`}
                  download
                  className="inline-flex items-center gap-2 bg-olive-deep text-linen hover:bg-charcoal transition-colors px-6 py-3 text-sm font-medium uppercase tracking-wider"
                >
                  <Download className="w-4 h-4" />
                  {locale === "es" ? "Descargar PDF" : "Download PDF"}
                </a>
                <a
                  href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 border border-olive/30 text-olive-deep hover:border-olive-deep transition-colors px-6 py-3 text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  {content.contact.phone}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="bg-background">
        {sections.map((section, si) => {
          const Icon = ICONS[section.icon];
          const reverse = si % 2 === 1;
          return (
            <section
              key={section.title}
              className={`relative py-20 md:py-28 ${si > 0 ? "border-t border-olive/10" : ""}`}
            >
              <div className="mx-auto max-w-6xl px-6 md:px-8">
                <div
                  className={`grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16 items-start ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Section image & heading */}
                  <FadeIn className="lg:sticky lg:top-28">
                    <div className="relative aspect-[4/5] overflow-hidden mb-6">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${img(section.image)})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                      <div className="absolute top-5 left-5 px-3 py-1.5 bg-linen/92 text-[0.65rem] uppercase tracking-[0.25em] text-olive-deep">
                        {section.kicker}
                      </div>
                      {section.signature && (
                        <div className="absolute top-5 right-5 px-3 py-1.5 bg-terracotta text-[0.65rem] uppercase tracking-[0.25em] text-linen">
                          {locale === "es" ? "Casa" : "House"}
                        </div>
                      )}
                      <div className="absolute bottom-5 left-5 right-5 text-linen">
                        <Icon className="w-6 h-6 text-ochre mb-2" />
                        <h2 className="font-display text-4xl md:text-5xl leading-[1.02]">
                          {section.title}
                        </h2>
                        <p className="font-display italic text-ochre/95 text-lg mt-1">
                          {section.subtitle}
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Items */}
                  <Stagger className="space-y-1">
                    {section.items.map((item) => (
                      <StaggerItem
                        key={item.name}
                        className="group flex items-baseline gap-5 py-5 border-b border-olive/12 last:border-b-0"
                      >
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-xl md:text-2xl text-charcoal flex items-center gap-2 leading-tight">
                            {item.name}
                            {item.star && (
                              <span className="inline-flex items-center gap-0.5 text-terracotta">
                                <Utensils className="w-3.5 h-3.5" />
                              </span>
                            )}
                          </h3>
                          <p className="text-sm text-charcoal/70 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <div
                          className="hidden sm:block flex-1 translate-y-[-3px] opacity-50 group-hover:opacity-80 transition-opacity"
                          aria-hidden
                          style={{
                            backgroundImage:
                              "radial-gradient(circle, currentColor 1px, transparent 1.5px)",
                            backgroundSize: "8px 2px",
                            height: "2px",
                            color: "var(--olive)",
                          }}
                        />
                        <div className="font-display text-xl md:text-2xl text-olive-deep tabular-nums whitespace-nowrap">
                          {item.price}
                          <span className="text-sm text-olive/70 ml-0.5">€</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="relative py-20 bg-olive-deep text-linen overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url(${img("bg1.jpg")})` }}
        />
        <div className="relative mx-auto max-w-3xl px-6 md:px-8 text-center">
          <SectionDivider className="mb-6 text-ochre/60" />
          <p className="font-display italic text-2xl md:text-3xl leading-relaxed">
            {locale === "es"
              ? "“Los platos que salen de nuestra cocina son los mismos que servía mi abuelo. Algunas cosas no se tocan.”"
              : "“The dishes coming out of our kitchen are the same ones my grandfather served. Some things you don't touch.”"}
          </p>
          <p className="mt-5 text-[0.7rem] uppercase tracking-[0.3em] text-ochre">
            Hermanos Romero · Villanueva del Trabuco
          </p>
        </div>
      </section>
    </>
  );
}
