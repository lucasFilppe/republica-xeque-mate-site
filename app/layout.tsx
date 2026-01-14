import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css'; // Importa o CSS global e o Tailwind

// 1. Importa as duas fontes do Google
import { Inter, Oswald } from 'next/font/google';

// Importe o AuthProvider que você acabou de criar
import AuthProvider from '../components/shared/SessionProvider'; 

// 2. Cria as instâncias das fontes, adicionando 'variable'
//    Oswald será a fonte dos títulos
const oswald = Oswald({ 
  subsets: ['latin'], 
  variable: '--font-titulo', // Nome que usaremos no Tailwind
  display: 'swap' 
});

//    Inter será a fonte do corpo
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans', // Nome padrão para 'sans'
  display: 'swap' 
});

// Metadados para SEO da República Rebu

export const metadata: Metadata = {
  metadataBase: new URL("https://republicaxequemate.com.br"),

  title: {
    default: "República Xeque Mate | Moradia Estudantil em Ouro Preto - UFOP",
    template: "%s | República Xeque Mate",
  },

  description:
    "A República Xeque Mate é uma moradia estudantil tradicional em Ouro Preto, próxima à UFOP. Ambiente acolhedor, estrutura completa e história universitária.",

   icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  
  keywords: [
    "república estudantil em Ouro Preto",
    "moradia universitária UFOP",
    "república masculina Ouro Preto",
    "república Xeque Mate",
    "casa de estudante Ouro Preto",
    "república para universitários",
  ],

  authors: [{ name: "República Xeque Mate" }],
  creator: "República Xeque Mate",
  publisher: "República Xeque Mate",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://republicaxequemate.com.br",
    siteName: "República Xeque Mate",
    title: "República Xeque Mate | Moradia Estudantil em Ouro Preto",
    description:
      "Conheça a República Xeque Mate, uma tradicional república estudantil em Ouro Preto. Ideal para estudantes da UFOP.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "República Xeque Mate em Ouro Preto",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "República Xeque Mate | Moradia Estudantil em Ouro Preto",
    description:
      "Moradia estudantil tradicional em Ouro Preto para universitários da UFOP.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://republicaxequemate.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. Aplica as variáveis CSS das fontes ao elemento <html>
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable}`}>
      {/* 4. Aplica a fonte padrão 'sans' ao corpo */}

      <body className={`font-sans antialiased bg-gray-50 min-h-screen flex flex-col`}>
        {/* O children aqui é o conteúdo de cada página */}
        <AuthProvider>
        {children}
        <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
