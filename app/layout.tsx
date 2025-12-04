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
  title: 'República Rebu - Ouro Preto | Primeira Federal Feminina',
  description: 'O site oficial da República Rebu de Ouro Preto. Conheça a história, a rotina e o processo seletivo da primeira república federal feminina.',
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
