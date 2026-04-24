import { Star, Award, Users, Leaf } from "lucide-react";
import { type Locale } from "@/lib/content";
import { FadeIn } from "@/components/motion";

export function Recognition({ locale }: { locale: Locale }) {
  const items = [
    {
      icon: Star,
      label: locale === "es" ? "5 estrellas" : "5 stars",
      value: "Tripadvisor",
    },
    {
      icon: Award,
      label: locale === "es" ? "Abierta desde" : "Open since",
      value: "1948",
    },
    {
      icon: Users,
      label: locale === "es" ? "Tres generaciones" : "Three generations",
      value: "Hnos. Romero",
    },
    {
      icon: Leaf,
      label: locale === "es" ? "Producto local" : "Local produce",
      value: locale === "es" ? "De la sierra" : "From the sierra",
    },
  ];

  return (
    <section className="relative py-10 md:py-14 bg-linen border-y border-olive/15">
      <FadeIn>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6 md:gap-8">
            {items.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 md:gap-4 md:justify-center min-w-0"
              >
                <span className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-background border border-olive/20 flex items-center justify-center text-olive-deep shrink-0">
                  <Icon className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.2em] md:tracking-[0.25em] text-olive mb-0.5 leading-tight">
                    {label}
                  </p>
                  <p className="font-display text-olive-deep text-sm md:text-base leading-tight truncate">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
