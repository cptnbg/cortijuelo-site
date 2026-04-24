import Link from "next/link";
import { Cake, Sparkles, Users } from "lucide-react";
import { content, img, localizedPath, t, type Locale } from "@/lib/content";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

export function Events({ locale }: { locale: Locale }) {
  const events = content.home.events;

  const occasions = [
    {
      icon: Users,
      title: locale === "es" ? "Comidas de empresa" : "Corporate lunches",
      desc:
        locale === "es"
          ? "Menús cerrados a partir de 10 comensales, con espacio reservado."
          : "Set menus from 10 guests, with reserved space.",
    },
    {
      icon: Cake,
      title: locale === "es" ? "Cumpleaños y bautizos" : "Birthdays & christenings",
      desc:
        locale === "es"
          ? "Mesa corrida en el salón o terraza, tarta de la casa incluida."
          : "Long table in the dining room or terrace, house cake included.",
    },
    {
      icon: Sparkles,
      title: locale === "es" ? "Celebraciones" : "Celebrations",
      desc:
        locale === "es"
          ? "Comuniones, aniversarios, reencuentros. Menús a medida."
          : "Communions, anniversaries, reunions. Bespoke menus.",
    },
  ];

  return (
    <section className="relative py-24 md:py-36 text-linen overflow-hidden">
      {/* Layered bg — no fixed attachment (breaks on mobile) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img(events.background)})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/75 to-charcoal/95" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,_rgba(200,155,75,0.18),_transparent_65%)]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn className="text-center mb-14 md:mb-20">
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-ochre mb-4">
            {t(events.kicker, locale)}
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.02]">
            {t(events.heading, locale)}
          </h2>
          <p className="font-display italic text-2xl md:text-3xl text-ochre/90 mt-3">
            {t(events.subheading, locale)}
          </p>
          <p className="mt-8 max-w-2xl mx-auto text-linen/85 leading-relaxed">
            {t(events.body, locale)}
          </p>
        </FadeIn>

        <Stagger className="grid md:grid-cols-3 gap-5 md:gap-6 mb-14">
          {occasions.map(({ icon: Icon, title, desc }) => (
            <StaggerItem
              key={title}
              className="bg-charcoal/40 backdrop-blur-sm border border-linen/10 p-7 hover:border-ochre/40 transition-colors"
            >
              <Icon className="w-6 h-6 text-ochre mb-4" />
              <h3 className="font-display text-2xl leading-tight mb-2">{title}</h3>
              <p className="text-linen/75 text-sm leading-relaxed">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={localizedPath(events.cta.href, locale)}
              className="bg-ochre text-charcoal hover:bg-linen transition-colors px-8 py-3.5 font-medium tracking-wide text-sm uppercase"
            >
              {t(events.cta, locale)} →
            </Link>
            <a
              href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
              className="border border-linen/40 hover:border-ochre hover:text-ochre transition-colors px-8 py-3.5 font-medium text-sm tabular-nums"
            >
              {content.contact.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
