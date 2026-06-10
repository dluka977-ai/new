import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La BoULANGeRie | Autentična Francuska Pekara u Beogradu",
  description:
    "La BoULANGeRie — svež hleb, kroasani, bagueti i kolači pečeni svakodnevno u srcu Beograda. Poseta nas na Kneza Miloša 50.",
  keywords: "pekara beograd, francuska pekara, kroasani, bagueti, pain au chocolat, artisan hleb",
  openGraph: {
    title: "La BoULANGeRie | Francuska Pekara Beograd",
    description: "Autentično francusko pekljenje u srcu Beograda. Svež hleb i peciva svaki dan.",
    type: "website",
    locale: "sr_RS",
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
