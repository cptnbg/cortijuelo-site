import Link from "next/link";
import { content, img, localizedPath, t, type Locale } from "@/lib/content";
import { FadeIn } from "@/components/motion";

export function Events({ locale }: { locale: Locale }) {
  const events = content.home.events;
  return (
    <section
      className="relative py-28 md:py-40 overflow-hidden text-linen"
      style={{
        backgroundImage: `linear-gradient(rgba(30,28,22,0.72), rgba(30,28,22,0.82)), url(${img(events.background)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8 text-center">
        <FadeIn>
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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
