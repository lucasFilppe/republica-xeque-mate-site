import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

import { Inter, Oswald } from 'next/font/google';
import AuthProvider from '../components/shared/SessionProvider'; 
import { Footer } from '@/components/shared/Footer';

const oswald = Oswald({ 
  subsets: ['latin'], 
  variable: '--font-titulo',
  display: 'swap' 
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap' 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://republicaxequemate.com.br"),

  title: {
    default: "República Xeque Mate | Moradia Estudantil em Ouro Preto - UFOP",
    template: "%s | República Xeque Mate",
  },

  description:
    "A República Xeque Mate é uma moradia estudantil tradicional em Ouro Preto, próxima à UFOP.",

  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/favicon.ico?v=2",
  },

  keywords: [
    "república estudantil em Ouro Preto",
    "moradia universitária UFOP",
    "república masculina Ouro Preto",
    "república Xeque Mate",
  ],

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://republicaxequemate.com.br",
    siteName: "República Xeque Mate",
    title: "República Xeque Mate | Moradia Estudantil em Ouro Preto",
    description:
      "Conheça a República Xeque Mate, uma tradicional república estudantil em Ouro Preto.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "República Xeque Mate em Ouro Preto",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
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
        <Footer/>
      </body>
    </html>
  );
}

