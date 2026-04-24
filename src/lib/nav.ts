export const NAV_PATHS = [
  { key: "home", es: "Inicio", en: "Home", path: "/" },
  { key: "restaurant", es: "Restaurante", en: "Restaurant", path: "/restaurant" },
  { key: "menu", es: "La Carta", en: "The Menu", path: "/menu" },
  { key: "gallery", es: "Galería", en: "Gallery", path: "/gallery" },
  { key: "contact", es: "Contacto", en: "Contact", path: "/contact" },
] as const;

export type NavItem = (typeof NAV_PATHS)[number];
