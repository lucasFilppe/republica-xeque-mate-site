import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { Inter, Oswald } from "next/font/google";
import AuthProvider from "../components/shared/SessionProvider";
import { Footer } from "@/components/shared/Footer";
import WhatsAppFloatingButton from "@/components/shared/WhatsAppFloatingButton";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-titulo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://republicaxequemate.com.br"),

  verification: {
    // ATUALIZE COM O NOVO CÓDIGO AQUI:
    google: "Mkbb_BD_2m7tAacm9xXnRd9CV2cNR56caX1B7FXdKGc", 
  },

  title: {
    default: "República Xeque Mate | Moradia Estudantil em Ouro Preto - UFOP",
    template: "%s | República Xeque Mate",
  },

  description:
    "A República Xeque Mate oferece moradia estudantil tradicional em Ouro Preto, com localização privilegiada para alunos da UFOP. Venha conhecer nossa história!",

  // Adicionando Robots para garantir indexação
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png", // Geralmente Apple usa um ícone PNG de 180x180
  },

  keywords: [
    "república estudantil em Ouro Preto",
    "moradia universitária UFOP",
    "república masculina Ouro Preto",
    "vagas em república Ouro Preto",
    "República Xeque Mate",
  ],

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://republicaxequemate.com.br",
    siteName: "República Xeque Mate",
    title: "República Xeque Mate | Moradia Estudantil em Ouro Preto",
    description:
      "Tradição, estudo e irmandade em Ouro Preto. Conheça a Xeque Mate e more perto da UFOP.",
    images: [
      {
        url: "/og-image.png", // O Next.js resolverá para a URL absoluta usando o metadataBase
        width: 1200,
        height: 630,
        alt: "Fachada da República Xeque Mate em Ouro Preto",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "República Xeque Mate | Moradia Estudantil",
    description: "Vagas disponíveis para estudantes da UFOP em Ouro Preto.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased bg-gray-50 min-h-screen flex flex-col">
        <AuthProvider>
          {children}
          <Analytics />
        </AuthProvider>
        <WhatsAppFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
