import rawContent from "@/content/content.json";

export type Locale = "es" | "en";
export const LOCALES: readonly Locale[] = ["es", "en"] as const;
export const DEFAULT_LOCALE: Locale = "es";

export type Bilingual<T = string> = { es: T; en: T };

export const content = rawContent as typeof rawContent;

export function t<T = string>(value: Bilingual<T> | T | null | undefined, locale: Locale): T | "" {
  if (value === null || value === undefined) return "" as T;
  if (typeof value === "object" && value !== null && "es" in (value as object) && "en" in (value as object)) {
    return (value as Bilingual<T>)[locale];
  }
  return value as T;
}

export function img(filename: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}/images/${filename}`;
}

export function localizedPath(path: string, locale: Locale): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (path === "/") return `${base}/${locale}/`;
  if (path.startsWith("tel:") || path.startsWith("mailto:") || path.startsWith("http")) return path;
  return `${base}/${locale}${path.startsWith("/") ? path : `/${path}`}/`;
}
