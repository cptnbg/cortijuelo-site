import { content, img, t, type Locale } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/motion";
import { Testimonials } from "@/components/sections/testimonials";
import { Callout } from "@/components/sections/callout";

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const r = content.restaurant;

  return (
    <>
      <PageHeader
        title={t(r.pageTitle, locale) as string}
        kicker={t(r.intro.kicker, locale) as string}
        background={r.pageTitleBackground}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <FadeIn>
            <p className="font-display italic text-ochre text-sm tracking-[0.3em] uppercase mb-4">
              {locale === "es" ? "Tres generaciones · 1948" : "Three generations · 1948"}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-olive-deep leading-tight mb-8">
              {t(r.intro.heading, locale)}
            </h2>
            <div className="prose prose-lg max-w-none text-charcoal/85 leading-relaxed">
              <p className="whitespace-pre-line first-letter:font-display first-letter:text-6xl first-letter:text-terracotta first-letter:float-left first-letter:leading-[0.85] first-letter:pr-2 first-letter:pt-1">
                {t(r.intro.body, locale)}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-linen-soft">
        <div className="mx-auto max-w-6xl px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16">
          {r.spaces.map((space, i) => (
            <FadeIn key={i} delay={i * 0.1} className="group">
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${img(space.image)})` }}
                />
              </div>
              <p className="font-display italic text-ochre text-sm tracking-[0.25em] uppercase mb-2">
                {t(space.kicker, locale)}
              </p>
              <h3 className="font-display text-3xl md:text-4xl text-olive-deep leading-tight mb-4">
                {t(space.heading, locale)}
              </h3>
              <p className="text-charcoal/85 leading-relaxed">
                {t(space.body, locale)}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <Testimonials locale={locale} />
      <Callout locale={locale} />
    </>
  );
}
