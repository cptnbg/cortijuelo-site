import { FadeIn } from "./motion";
import { StarMark } from "./ornaments";
import { img } from "@/lib/content";

export function PageHeader({
  kicker,
  title,
  background,
}: {
  kicker?: string;
  title: string;
  background: string;
}) {
  return (
    <section
      className="relative pt-40 pb-28 md:pt-48 md:pb-36 text-linen"
      style={{
        backgroundImage: `linear-gradient(rgba(30,28,22,0.55), rgba(30,28,22,0.8)), url(${img(background)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8 text-center">
        <FadeIn>
          {kicker && (
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-ochre mb-4">
              {kicker}
            </p>
          )}
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight">
            {title}
          </h1>
          <StarMark className="mt-8 w-32 h-4 mx-auto" />
        </FadeIn>
      </div>
    </section>
  );
}
