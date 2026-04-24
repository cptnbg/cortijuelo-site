import { Star, Quote } from "lucide-react";
import { content, img, t, type Locale } from "@/lib/content";
import { Stagger, StaggerItem } from "@/components/motion";
import { Rule } from "@/components/ornaments";

export function Testimonials({ locale }: { locale: Locale }) {
  const items = content.home.testimonials;
  return (
    <section className="relative py-24 md:py-32 bg-linen-soft">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="text-center mb-16">
          <Rule
            label={t(content.home.testimonialsHeading.kicker, locale) as string}
            className="mb-6"
          />
          <h2 className="font-display text-4xl md:text-5xl text-olive-deep">
            {t(content.home.testimonialsHeading.heading, locale)}
          </h2>
        </div>

        <Stagger className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((testimonial, i) => (
            <StaggerItem
              key={i}
              className="relative bg-card border border-olive/15 p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-ochre/60 mb-4" />
              <p className="text-charcoal/85 leading-relaxed flex-1 italic font-display text-lg">
                “{t(testimonial.quote, locale)}”
              </p>
              <div className="mt-6 pt-6 border-t border-olive/15 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${img(testimonial.avatar)})` }}
                />
                <div>
                  <p className="font-medium text-olive-deep">{testimonial.name}</p>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-3 h-3 fill-ochre text-ochre"
                      />
                    ))}
                    <span className="text-[0.65rem] uppercase tracking-wider text-charcoal/50 ml-1.5">
                      {testimonial.source}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
