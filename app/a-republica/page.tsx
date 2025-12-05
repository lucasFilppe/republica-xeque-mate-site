// app/a-republica/page.tsx

import { Header } from '../../components/shared/Header'; // Ajuste o caminho conforme sua estrutura
import { Footer } from '../../components/shared/Footer'; // Ajuste o caminho conforme sua estrutura
import Link from 'next/link';
 // Ícones para os Pilares

// 🎯 Metadados para SEO no App Router
export const metadata = {
  title: 'A República Rebu | História, Valores e Fundação',
  description: 'Conheça a história da República Rebu, a primeira federal feminina de Ouro Preto, fundada em 1975, e seus pilares de convivência.',
};




export default function ARepublica() { // Nome da função mantido simples para o App Router
  return (
    <>
      <Header />

      <main className="flex-grow">
        
        {/* Seção 1: Hero com Destaque na Fundação */}
       

        {/* Seção 2: Introdução e Contexto Histórico */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 border-l-4 border-[#D44700] pl-4">
              O Legado da Primeira Federal Feminina
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            A República Rebu foi fundada em março de 1975, tornando-se um marco histórico por ser a primeira república federal feminina da Escola de Minas da UFOP. Sua origem está na luta e na persistência de alunas que, diante da falta de moradia estudantil para mulheres, conquistaram a tão sonhada casa na Rua do Pilar, nº 61, transformando um ideal em realidade.
            </p>

            <p  className="text-lg text-gray-700 mb-6 leading-relaxed">O nome “Rebu”, inspirado em uma novela da época, passou a representar muito mais que um título: simboliza coragem, pioneirismo e protagonismo feminino dentro do sistema republicano</p>

            <p className="text-lg text-gray-700 leading-relaxed italic">
              &quot;Ao longo de 50 anos de história, a Rebu construiu uma trajetória única, repleta de vivências, amizades e conquistas. Mais do que um lar estudantil, consolidou-se como espaço de acolhimento e pertencimento, atravessando gerações e mantendo viva a tradição republicana de Ouro Preto.&quot;
            </p>
          </div>
        </section>

      
        {/* Seção 4: Linha do Tempo (Call to Action para o Memorial) */}
         <section className="py-16 bg-[#1A1A1A] text-center text-white">
            <h2 className="text-3xl font-bold mb-4 text-[#FF8C00]">
                Veja Quem Construiu Nosso Legado
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Cada moradora que passou pela Rebu deixou sua marca. Visite nosso memorial e conheça a linha do tempo completa e a história de cada era.
            </p>
            <Link 
                href="/memorial" 
                className="inline-block border-2 border-[#D44700] text-[#D44700] font-bold py-3 px-8 rounded-full hover:bg-[#D44700] hover:text-white transition duration-300"
            >
                Visitar o Memorial &rarr;
            </Link>
        </section>

      </main>

      <Footer />
    </>
  );
}