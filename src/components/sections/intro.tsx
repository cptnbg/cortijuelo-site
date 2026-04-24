import Link from "next/link";
import { content, img, localizedPath, t, type Locale } from "@/lib/content";
import { FadeIn } from "@/components/motion";
import { KickerLine } from "@/components/ornaments";

export function Intro({ locale }: { locale: Locale }) {
  const intro = content.home.intro;
  return (
    <section id="intro" className="relative py-24 md:py-32 overflow-hidden grain">
      <div className="mx-auto max-w-6xl px-6 md:px-8 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <FadeIn>
          <KickerLine className="mb-8">{t(intro.kicker, locale) as string}</KickerLine>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-olive-deep leading-[1.05]">
            {t(intro.heading, locale)}
            <span className="text-terracotta">.</span>
          </h2>
          <p className="mt-8 text-charcoal/85 leading-relaxed text-lg max-w-xl whitespace-pre-line">
            {t(intro.body, locale)}
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Link
              href={localizedPath(intro.cta.href, locale)}
              className="inline-flex items-center gap-3 text-olive-deep font-medium text-sm tracking-wider uppercase border-b-2 border-ochre pb-1 hover:gap-4 transition-all"
            >
              {t(intro.cta, locale)} →
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img("restaurante1.jpg")})` }}
            />
            <div className="absolute inset-0 ring-1 ring-olive/20" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-linen border border-olive/20 px-6 py-5 max-w-[60%]">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-olive">
              {locale === "es" ? "Abierta desde" : "Open since"}
            </p>
            <p className="font-display text-4xl text-olive-deep">1948</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
