import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Hermanos Romero family monogram — the family's actual carta logo.
 * Served as a transparent PNG in two tinted variants:
 *   - "light": ochre (#c89b4b) fill with cream highlight — for dark backgrounds
 *   - "dark":  original dark-brown + cream — for light backgrounds
 *
 * The source SVG ships a PNG-in-SVG with C2PA metadata, so we decoded + tinted
 * the bitmap ahead of time. Both variants live in /public/images/.
 */
type Variant = "light" | "dark";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  variant?: Variant;
  alt?: string;
};

export function HRLogo({
  className,
  variant = "light",
  alt = "Hermanos Romero",
  ...rest
}: Props) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const src = `${base}/images/hr-logo-${variant}.png`;
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={cn("select-none", className)}
      {...rest}
    />
  );
}

/**
 * Alias — kept for existing call sites that import HRMark.
 * Identical image; size it smaller where needed via className.
 */
export const HRMark = HRLogo;
