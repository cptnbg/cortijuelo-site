import { MapPin, Phone, Clock } from "lucide-react";
import { content, t, type Locale } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/motion";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";

const ICONS = {
  "map-icon.png": MapPin,
  "phone-icon.png": Phone,
  "clock-icon.png": Clock,
} as const;

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const c = content.contact_page;

  return (
    <>
      <PageHeader
        title={t(c.pageTitle, locale) as string}
        background={c.pageTitleBackground}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-8 grid md:grid-cols-3 gap-8">
          {c.blocks.map((block, i) => {
            const Icon = ICONS[block.icon as keyof typeof ICONS] ?? MapPin;
            const value = t(block.value, locale) as string;
            const isPhone = block.icon === "phone-icon.png";
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-card border border-olive/15 p-8 text-center h-full flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-olive-deep text-linen flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl text-olive-deep mb-3">
                    {t(block.label, locale)}
                  </h3>
                  {isPhone ? (
                    <a
                      href={`tel:${value.replace(/\s/g, "")}`}
                      className="text-charcoal hover:text-terracotta transition-colors tabular-nums text-lg"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-charcoal/85 leading-relaxed whitespace-pre-line">
                      {value}
                    </p>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="bg-linen-soft py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <FadeIn>
            <p className="font-display italic text-ochre text-sm tracking-[0.3em] uppercase mb-4">
              {locale === "es" ? "Ven a visitarnos" : "Come visit us"}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-olive-deep leading-tight mb-6">
              {locale === "es" ? "Entre olivares y sierras" : "Among olive groves and sierras"}
            </h2>
            <p className="text-charcoal/85 leading-relaxed mb-8">
              {locale === "es"
                ? "Estamos en Los Alazores, a 2,5 km de Villanueva del Trabuco, cerca del nacimiento de Los Cien Caños. Llama para reservar, o simplemente pásate: casi siempre hay sitio."
                : "We're in Los Alazores, 2.5 km from Villanueva del Trabuco, near the springs of Los Cien Caños. Call ahead to book, or just drop in — there's almost always room."}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={content.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full border border-olive/30 text-olive-deep flex items-center justify-center hover:bg-olive-deep hover:text-linen transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={content.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full border border-olive/30 text-olive-deep flex items-center justify-center hover:bg-olive-deep hover:text-linen transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="aspect-[4/3] overflow-hidden border border-olive/20">
              <iframe
                src={c.mapEmbed}
                title="Location map"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
