import type { Metadata } from "next";
import Link from "next/link";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const target = `${BASE}/es/`;

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  other: { refresh: `0; url=${target}` },
};

export default function RootPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <Link href="/es" className="text-olive-deep underline font-display text-xl">
        Continuar / Continue
      </Link>
    </main>
  );
}
