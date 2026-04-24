import Link from "next/link";
import { content, img, localizedPath, t, type Locale } from "@/lib/content";
import { Stagger, StaggerItem } from "@/components/motion";

const FALLBACK_IMAGES = ["restaurante1.jpg", "carta3.jpg", "eventos.jpg"];

export function SpacesGrid({ locale }: { locale: Locale }) {
  const spaces = content.home.spaces;
  return (
    <section className="relative py-24 md:py-32 bg-linen-soft">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-olive mb-2">
            {t(content.home.sectionTitle.kicker, locale)}
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl text-olive-deep leading-tight">
            {t(content.home.sectionTitle.heading, locale)}
          </h2>
        </div>

        <Stagger className="grid md:grid-cols-3 gap-6 md:gap-8">
          {spaces.map((space, i) => {
            const image = FALLBACK_IMAGES[i] || "bg1.jpg";
            return (
              <StaggerItem key={i} className="group">
                <Link
                  href={localizedPath(space.cta.href, locale)}
                  className="block relative aspect-[3/4] overflow-hidden bg-charcoal"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${img(image)})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/20 to-charcoal/90" />
                  <div className="relative h-full flex flex-col justify-end p-7 text-linen">
                    <p className="text-[0.65rem] uppercase tracking-[0.25em] text-ochre mb-2">
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl leading-tight">
                      {t(space.name, locale)}
                    </h3>
                    <p className="mt-3 text-sm text-linen/85 leading-relaxed">
                      {t(space.description, locale)}
                    </p>
                    <span className="mt-5 text-xs uppercase tracking-wider border-b border-ochre/70 pb-0.5 self-start">
                      {t(space.cta, locale)} →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
