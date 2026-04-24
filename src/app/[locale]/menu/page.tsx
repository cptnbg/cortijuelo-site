import Link from "next/link";
import { Download, Phone, Utensils, Flame, Soup, Cake, Fish, Wine, Sparkles } from "lucide-react";
import { content, img, type Locale } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { Rule, StarMark, AzulejoMark } from "@/components/ornaments";
import { MENU } from "@/lib/menu-data";
import type { MenuItem } from "@/lib/menu-data";

const ICONS = {
  utensils: Utensils,
  flame: Flame,
  soup: Soup,
  cake: Cake,
  fish: Fish,
  wine: Wine,
  sparkles: Sparkles,
};

function Price({ value }: { value: string }) {
  const isMarket = value === "S/M" || value === "market";
  return (
    <span
      className={
        isMarket
          ? "font-display italic text-olive/70 text-base md:text-lg whitespace-nowrap"
          : "font-display text-lg md:text-xl text-olive-deep tabular-nums whitespace-nowrap"
      }
    >
      {isMarket ? value : (
        <>
          {value}
          <span className="text-sm text-olive/70 ml-0.5">€</span>
        </>
      )}
    </span>
  );
}

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="group flex items-baseline gap-4 py-3.5 border-b border-olive/10 last:border-b-0">
      <div className="flex-1 min-w-0">
        <p className="font-display text-base md:text-lg text-charcoal leading-snug flex items-center gap-2">
          {item.star && (
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-terracotta/15 text-terracotta text-[0.6rem]">
              ✦
            </span>
          )}
          {item.name}
        </p>
      </div>
      <div
        className="hidden sm:block flex-1 translate-y-[-3px] opacity-40 group-hover:opacity-70 transition-opacity"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1.5px)",
          backgroundSize: "8px 2px",
          height: "2px",
          color: "var(--olive)",
        }}
      />
      <Price value={item.price} />
    </div>
  );
}

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

      {/* Intro + CTA + jump nav */}
      <section className="py-16 md:py-20 bg-linen-soft border-b border-olive/10">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <Rule
                label={locale === "es" ? "Nuestra carta" : "Our menu"}
                className="mb-5"
              />
              <p className="text-charcoal/80 leading-relaxed text-sm md:text-base">
                {locale === "es"
                  ? "Cocina de campo, lo que da la sierra y el mercado de cada día. Los precios son orientativos y pueden variar según temporada. S/M indica precio según mercado. Pregunta al equipo por las sugerencias del día, alérgenos e intolerancias."
                  : "Country cooking — whatever the sierra and the daily market bring. Prices are indicative and may vary by season. \"Market\" means priced daily. Please ask the team about daily specials, allergens and dietary needs."}
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`${base}/menu/carta.pdf`}
                  download
                  className="inline-flex items-center gap-2 bg-olive-deep text-linen hover:bg-charcoal transition-colors px-5 py-2.5 text-[0.7rem] md:text-xs uppercase tracking-[0.2em]"
                >
                  <Download className="w-3.5 h-3.5" />
                  {locale === "es" ? "Descargar PDF" : "Download PDF"}
                </a>
                <a
                  href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 border border-olive/30 text-olive-deep hover:border-olive-deep transition-colors px-5 py-2.5 text-[0.7rem] md:text-xs uppercase tracking-[0.2em] tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {locale === "es" ? "Reservar" : "Reserve"}
                </a>
              </div>
            </div>

            <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-1 md:gap-x-2 gap-y-2 text-[0.65rem] md:text-xs uppercase tracking-[0.22em] text-olive">
              {sections.map((section, i) => (
                <span key={section.id} className="flex items-center gap-1 md:gap-2">
                  {i > 0 && <span className="text-olive/40">·</span>}
                  <Link
                    href={`#${section.id}`}
                    className="px-2 py-1 hover:text-olive-deep transition-colors"
                  >
                    {section.title}
                  </Link>
                </span>
              ))}
            </nav>
          </FadeIn>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, si) => {
        const Icon = ICONS[section.icon];
        return (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-24 relative py-20 md:py-28 ${
              si % 2 === 1 ? "bg-linen-soft" : "bg-background"
            }`}
          >
            <div className="mx-auto max-w-5xl px-6 md:px-8">
              <FadeIn>
                <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-end mb-10 md:mb-14">
                  <div className="relative w-full md:w-56 aspect-[4/5] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${img(section.image)})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-linen">
                      <Icon className="w-5 h-5 text-ochre mb-1.5" />
                      <p className="text-[0.6rem] uppercase tracking-[0.25em] text-ochre/90">
                        {section.kicker}
                      </p>
                    </div>
                    {section.signature && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-terracotta text-linen text-[0.55rem] uppercase tracking-[0.25em]">
                        {locale === "es" ? "Casa" : "House"}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <span className="block w-16 h-px bg-ochre mb-5" aria-hidden />
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-olive-deep leading-[1.02] tracking-tight">
                      {section.title}
                    </h2>
                    {section.subtitle && (
                      <p className="font-display italic text-ochre/90 text-lg md:text-xl mt-2">
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </FadeIn>

              {section.subsections ? (
                <div className="space-y-14">
                  {section.subsections.map((sub) => (
                    <FadeIn key={sub.title}>
                      <h3 className="font-display italic text-olive-deep text-2xl md:text-3xl mb-4 tracking-tight">
                        <span className="text-terracotta mr-2">·</span>
                        {sub.title}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-x-10">
                        {sub.items.map((item) => (
                          <ItemRow key={item.name} item={item} />
                        ))}
                      </div>
                    </FadeIn>
                  ))}
                </div>
              ) : (
                <Stagger className="grid md:grid-cols-2 gap-x-10" gap={0.02}>
                  {section.items.map((item) => (
                    <StaggerItem key={item.name} y={8}>
                      <ItemRow item={item} />
                    </StaggerItem>
                  ))}
                </Stagger>
              )}
            </div>
          </section>
        );
      })}

      {/* Closing quote */}
      <section className="relative py-20 bg-olive-deep text-linen overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url(${img("bg1.jpg")})` }}
        />
        <div className="relative mx-auto max-w-3xl px-6 md:px-8 text-center">
          <StarMark className="mb-6 w-32 h-4 mx-auto text-ochre/70" />
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
