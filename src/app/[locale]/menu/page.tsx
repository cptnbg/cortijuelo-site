import Link from "next/link";
import { Download, Phone, Utensils } from "lucide-react";
import { content, img, type Locale } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { SectionDivider } from "@/components/olive-branch";

const MENU_SECTIONS = {
  es: [
    {
      title: "Para empezar",
      subtitle: "Entradas y compartir",
      items: [
        { name: "Jamón ibérico de bellota", desc: "Cortado a cuchillo, con pan de pueblo.", price: "18" },
        { name: "Queso de oveja curado", desc: "De la serranía, con miel de caña.", price: "12" },
        { name: "Porra caliente de Antequera", desc: "Nuestro clásico, servido templado.", price: "7" },
        { name: "Migas de la sierra", desc: "Con panceta, chorizo y pimientos.", price: "10" },
        { name: "Croquetas caseras de puchero", desc: "Receta de la abuela Dolores.", price: "9" },
      ],
    },
    {
      title: "La brasa",
      subtitle: "Carnes al fuego de leña",
      signature: true,
      items: [
        { name: "Chivo malagueño al ajillo", desc: "Nuestro plato estrella. Cocción lenta, ajo confitado y aceite de oliva virgen.", price: "19", star: true },
        { name: "Conejo a la leña", desc: "De monte, asado sobre encina con hierbas de la sierra.", price: "17", star: true },
        { name: "Cordero lechal a la brasa", desc: "Sobre sarmiento de vid, con sal gorda y romero.", price: "22" },
        { name: "Churrasco de cerdo ibérico", desc: "Cortado al peso, con chimichurri de la casa.", price: "16" },
        { name: "Chuletas de cordero a la parrilla", desc: "Al punto que prefieras.", price: "20" },
        { name: "Solomillo de ternera al Pedro Ximénez", desc: "Con reducción de vino dulce de Málaga.", price: "24" },
      ],
    },
    {
      title: "De la tierra",
      subtitle: "Guisos y cuchara",
      items: [
        { name: "Potaje de garbanzos con espinacas", desc: "Receta de Cuaresma, todo el año.", price: "11" },
        { name: "Rabo de toro al vino tinto", desc: "Cocción de seis horas.", price: "16" },
        { name: "Ajoblanco malagueño", desc: "Con uvas moscatel (temporada).", price: "8" },
      ],
    },
    {
      title: "Dulces",
      subtitle: "Postres caseros",
      items: [
        { name: "Arroz con leche", desc: "Con canela y limón.", price: "5" },
        { name: "Leche frita", desc: "Con helado de vainilla.", price: "6" },
        { name: "Torta de aceite y miel", desc: "Pastelería tradicional.", price: "5" },
        { name: "Tarta de la abuela", desc: "Hojaldre, crema y chocolate.", price: "6" },
      ],
    },
  ],
  en: [
    {
      title: "To begin",
      subtitle: "Starters & sharing",
      items: [
        { name: "Acorn-fed Iberian ham", desc: "Hand-carved, served with village bread.", price: "18" },
        { name: "Aged sheep's cheese", desc: "From the sierra, with cane honey.", price: "12" },
        { name: "Hot porra of Antequera", desc: "Our classic, served warm.", price: "7" },
        { name: "Sierra migas", desc: "With pancetta, chorizo and peppers.", price: "10" },
        { name: "House-made stew croquettes", desc: "Grandmother Dolores' recipe.", price: "9" },
      ],
    },
    {
      title: "The grill",
      subtitle: "Meats over wood fire",
      signature: true,
      items: [
        { name: "Málaga-style garlic goat", desc: "Our signature dish. Slow-braised, confit garlic and extra-virgin olive oil.", price: "19", star: true },
        { name: "Wood-fire rabbit", desc: "Wild rabbit, roasted over holm-oak embers with mountain herbs.", price: "17", star: true },
        { name: "Grilled milk-fed lamb", desc: "Over vine cuttings, with coarse salt and rosemary.", price: "22" },
        { name: "Iberian pork churrasco", desc: "Cut to order, with house chimichurri.", price: "16" },
        { name: "Grilled lamb chops", desc: "Cooked to your preference.", price: "20" },
        { name: "Beef tenderloin in Pedro Ximénez", desc: "With Málaga sweet-wine reduction.", price: "24" },
      ],
    },
    {
      title: "From the land",
      subtitle: "Stews & spoons",
      items: [
        { name: "Chickpea and spinach potaje", desc: "A Lenten recipe, all year round.", price: "11" },
        { name: "Oxtail in red wine", desc: "Six-hour braise.", price: "16" },
        { name: "Málaga ajoblanco", desc: "With Muscatel grapes (in season).", price: "8" },
      ],
    },
    {
      title: "Sweet",
      subtitle: "House-made desserts",
      items: [
        { name: "Rice pudding", desc: "With cinnamon and lemon.", price: "5" },
        { name: "Fried milk", desc: "With vanilla ice cream.", price: "6" },
        { name: "Olive-oil and honey cake", desc: "Traditional pastry.", price: "5" },
        { name: "Grandmother's tart", desc: "Puff pastry, cream and chocolate.", price: "6" },
      ],
    },
  ],
} as const;

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const sections = MENU_SECTIONS[locale];
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      <PageHeader
        title={locale === "es" ? "La Carta" : "The Menu"}
        kicker={locale === "es" ? "Cocina tradicional" : "Traditional cuisine"}
        background="carta3.jpg"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-charcoal/80 leading-relaxed">
                {locale === "es"
                  ? "Los precios son orientativos y pueden variar según temporada y mercado. Consulta con nuestro equipo sobre sugerencias del día, alergias e intolerancias."
                  : "Prices are indicative and may vary by season and market. Please ask our team about daily specials, allergies and dietary requirements."}
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

        <div className="mx-auto max-w-4xl px-6 md:px-8 space-y-20">
          {sections.map((section, si) => (
            <FadeIn key={section.title} delay={si * 0.05}>
              <div className="text-center mb-10">
                <SectionDivider className="mb-5" />
                {"signature" in section && section.signature && (
                  <span className="inline-block text-[0.65rem] uppercase tracking-[0.3em] text-terracotta mb-2">
                    {locale === "es" ? "Nuestra especialidad" : "Our specialty"}
                  </span>
                )}
                <h2 className="font-display text-4xl md:text-5xl text-olive-deep leading-tight">
                  {section.title}
                </h2>
                <p className="font-display italic text-ochre mt-2">{section.subtitle}</p>
              </div>

              <Stagger className="space-y-1">
                {section.items.map((item) => (
                  <StaggerItem
                    key={item.name}
                    className="group flex items-baseline gap-4 py-5 border-b border-olive/10 last:border-b-0"
                  >
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-charcoal flex items-center gap-2">
                        {item.name}
                        {"star" in item && item.star && (
                          <Utensils className="w-3.5 h-3.5 text-terracotta" />
                        )}
                      </h3>
                      <p className="text-sm text-charcoal/70 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="hidden sm:block flex-1 border-b border-dotted border-olive/30 translate-y-[-4px] mb-1" />
                    <div className="font-display text-xl text-olive-deep tabular-nums">
                      {item.price}<span className="text-sm text-olive/70 ml-0.5">€</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative py-16 bg-olive-deep text-linen overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${img("bg1.jpg")})` }}
        />
        <div className="relative mx-auto max-w-3xl px-6 md:px-8 text-center">
          <p className="font-display italic text-2xl md:text-3xl leading-relaxed">
            {locale === "es"
              ? "“Los platos que salen de nuestra cocina son los mismos que servía mi abuelo. Algunas cosas no se tocan.”"
              : "“The dishes coming out of our kitchen are the same ones my grandfather served. Some things you don't touch.”"}
          </p>
          <p className="mt-4 text-[0.7rem] uppercase tracking-[0.3em] text-ochre">
            Hermanos Romero
          </p>
        </div>
      </section>
    </>
  );
}
