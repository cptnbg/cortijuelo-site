import { Phone } from "lucide-react";
import { content, type Locale } from "@/lib/content";
import { FadeIn } from "@/components/motion";
import { StarMark } from "@/components/ornaments";

export function Callout({ locale }: { locale: Locale }) {
  return (
    <section className="relative py-20 bg-olive-deep text-linen">
      <div className="mx-auto max-w-4xl px-6 md:px-8 text-center">
        <FadeIn>
          <StarMark className="w-32 h-4 mx-auto mb-6 text-ochre/80" />
          <p className="font-display italic text-3xl md:text-4xl leading-[1.15] mb-6">
            {locale === "es"
              ? "Reserva tu mesa, o tu celebración."
              : "Book your table, or your celebration."}
          </p>
          <a
            href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 bg-ochre text-charcoal hover:bg-linen transition-colors px-8 py-4 font-medium tracking-wide text-base tabular-nums"
          >
            <Phone className="w-4 h-4" />
            {content.contact.phone}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
