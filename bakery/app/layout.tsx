import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  title: "La BoULANGeRie | Autentična Francuska Pekara u Beogradu",
  description:
    "La BoULANGeRie — svež hleb, kroasani, bagueti i kolači pečeni svakodnevno u srcu Beograda. Poseta nas na Kneza Miloša 50.",
  keywords: "pekara beograd, francuska pekara, kroasani, bagueti, pain au chocolat, artisan hleb",
  openGraph: {
    title: "La BoULANGeRie | Francuska Pekara Beograd",
    description: "Autentično francusko pekljenje u srcu Beograda. Svež hleb i peciva svaki dan.",
    type: "website",
    locale: "sr_RS",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "La BoULANGeRie kroasani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La BoULANGeRie | Francuska Pekara Beograd",
    description: "Autentično francusko pekljenje u srcu Beograda.",
    images: ["https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=85"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
