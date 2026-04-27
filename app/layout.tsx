import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://roofmaster.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RoofMaster - кровельные работы под ключ в Москве и области",
  description:
    "Монтаж, ремонт и замена кровли в Москве и области. Бесплатный выезд на замер в день обращения, договор, гарантия и фиксированная смета.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "кровельные работы Москва",
    "ремонт кровли",
    "монтаж кровли",
    "замена кровли",
    "кровля под ключ",
    "калькулятор кровли",
    "расчет стоимости кровли",
    "отзывы кровельные работы",
    "RoofMaster Яндекс Карты",
    "выезд на замер",
  ],
  openGraph: {
    title: "RoofMaster - кровельные работы под ключ",
    description:
      "Кровля без посредников: замер, смета, договор, монтаж и гарантия.",
    type: "website",
    locale: "ru_RU",
    siteName: "RoofMaster",
    url: "/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Кровельные работы RoofMaster",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1115",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
