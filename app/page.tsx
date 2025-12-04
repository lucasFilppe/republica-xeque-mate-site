import { Header } from '../components/shared/Header';
import { Footer } from '../components/shared/Footer';
import Image from 'next/image';
import Link from 'next/link';

// Componente para um Card de Destaque Reutilizável
const HighlightCard = ({ title, description, linkHref, linkText }: { title: string, description: string, linkHref: string, linkText: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 border-t-4 border-[#D44700]">
    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      href={linkHref}
      className="font-semibold  text-[#D44700] hover:text-[#FF8C00] transition duration-300"
    >
      {linkText} &rarr;
    </Link>
  </div>
);


export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-grow">

        {/* Seção 1: Hero - Destaque Principal (Preto Carvão/Fogo) */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center bg-[#1A1A1A] overflow-hidden">
          {/* Imagem de Fundo para dar textura - deve ser escura para contraste */}
          <Image
            src="/rebu-fachada.jpg"
            alt="Fachada da República Rebu em Ouro Preto"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-40" // Sutilmente transparente para o fundo preto se destacar
            priority
          />

          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-lg">
              República Rebu
            </h1>
            <p className="mt-4 text-xl md:text-3xl text-[#D44700] font-semibold italic drop-shadow-md">
              A Primeira Federal Feminina <span className="text-white">desde 1975</span>.
            </p>

            {/* Botão de Ação: Laranja Intenso, com Sombra/Hover Laranja Chama */}
            <Link
              href="/processo-seletivo"
              className="mt-8 inline-block bg-[#D44700]  text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg shadow-[#D44700] /50 hover:bg-[#FF8C00] hover:shadow-rebu-[#FF8C00]/60 transition duration-300 transform hover:scale-105"
            >
              Agende uma visita &rarr;
            </Link>
          </div>
        </section>

        {/* Seção 2: Destaques de Conteúdo (Fundo Suave) */}
        <section className="py-20 bg-[#F8F8F8]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center text-[#1A1A1A]  mb-12">
              Explore o Mundo Rebu
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <HighlightCard
                title="Nossa História"
                description="Conheça a trajetória da pioneira e os valores que nos guiam desde 1975."
                linkHref="/a-republica"
                linkText="Linha do Tempo Completa"
              />
              <HighlightCard
                title="Vida na Casa"
                description="Veja fotos da nossa estrutura e entenda a rotina de convivência e a divisão de tarefas."
                linkHref="/a-casa"
                linkText="Ver Galeria e Estrutura"
              />
              <HighlightCard
                title="Memorial"
                description="Homenageamos todas as ex-moradoras que construíram o legado da Rebu."
                linkHref="/memorial"
                linkText="Reencontre as Ex-Moradoras"
              />
            </div>
          </div>
        </section>

        {/* Seção 3: Chamada para Festas (Fundo Preto com Destaque Laranja) 
        <section className="py-16 bg-[#1A1A1A]  text-center text-white">
          <h2 className="text-3xl font-bold mb-4 text-[#FF8C00]">
            Festas, Tradição e Carnaval!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            O dia a dia da Rebu é intenso. Conheça as festas que mantêm a cultura ouro-pretana viva.
          </p>
          <Link
            href="/dia-a-dia"
            className="inline-block border-2 border-[#D44700] text-[#D44700] font-bold py-3 px-8 rounded-full hover:bg-[#D44700] hover:text-white transition duration-300"
          >
            Veja a Rotina e Eventos &rarr;
          </Link>
        </section>*/}

      </main>

      <Footer />
    </>
  );
}