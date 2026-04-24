import type { Locale } from "@/lib/content";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { SpacesGrid } from "@/components/sections/spaces-grid";
import { Gastronomy } from "@/components/sections/gastronomy";
import { Events } from "@/components/sections/events";
import { Testimonials } from "@/components/sections/testimonials";
import { Callout } from "@/components/sections/callout";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <>
      <Hero locale={locale} />
      <Intro locale={locale} />
      <SpacesGrid locale={locale} />
      <Gastronomy locale={locale} />
      <Events locale={locale} />
      <Testimonials locale={locale} />
      <Callout locale={locale} />
    </>
  );
}
