// app/a-casa/page.tsx

import { Header } from "../../components/shared/Header";
import { Footer } from "../../components/shared/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Bed, Utensils, Zap, Home, Gavel, Heart } from "lucide-react"; // Importados todos os ícones necessários

// 🎯 Metadados para SEO no App Router
export const metadata: Metadata = {
  title: {
    absolute: "A Casa da República Xeque Mate | Ouro Preto - UFOP",
  },

  description:
    "Conheça a casa da República Xeque Mate em Ouro Preto. Estrutura completa, quartos, áreas comuns e localização privilegiada próxima à UFOP.",

  keywords: [
    "república estudantil em Ouro Preto",
    "república Xeque Mate",
    "moradia universitária UFOP",
    "república próxima à UFOP",
  ],

  openGraph: {
    title: "A Casa da República Xeque Mate | Ouro Preto - UFOP",
    description:
      "Veja como é a casa da República Xeque Mate em Ouro Preto: estrutura, quartos e áreas comuns.",
    url: "https://republicaxequemate.com.br/a-casa",
    images: [
      {
        url: "/og-casa.jpg",
        width: 1200,
        height: 630,
        alt: "Casa da República Xeque Mate em Ouro Preto",
      },
    ],
  },

  alternates: {
    canonical: "https://republicaxequemate.com.br/a-casa",
  },
};

// Componente para um card de Rotina Reutilizável
const RotinaCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="text-center p-6 bg-rebu-soft rounded-lg shadow-lg hover:shadow-xl transition border-b-4 border-rebu-primary hover:border-[#FF8C00">
    <Icon className="w-12 h-12 text-rebu-primary mx-auto mb-4" />
    <h3 className="text-xl font-bold text-rebu-secondary mb-3">{title}</h3>
    <p className="text-rebu-secondary">{description}</p>
  </div>
);

// Componente para um item da galeria (Importante: Adicione as imagens na pasta public)
const GalleryItem = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-xl group cursor-pointer">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition duration-500 group-hover:scale-105"
      // Otimização de tamanhos para performance
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-[#1A1A1A] bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
      <p className="text-white text-lg font-bold p-4 text-center">{alt}</p>
    </div>
  </div>
);

export default function ACasa() {
  return (
    <>
      {/**/}
      <Header />

      <main className="flex-grow">
        {/* Seção 2: Detalhes da Casa e Acomodações 
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 border-l-4 border-[#D44700] pl-4">
              Acomodações e Áreas Comuns
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-700">
                <div>
                    <h3 className="font-bold text-2xl text-[#D44700] mb-3 flex items-center"><Bed className="mr-2 w-5 h-5"/> Quartos</h3>
                    <p className="mb-4">Disponibilizamos quartos individuais e duplos , todos equipados com camas, armários  e mesas de estudo. Priorizamos a organização e o conforto para garantir o descanso necessário.</p>
                    
                    <h3 className="font-bold text-2xl text-[#D44700] mb-3 flex items-center"><Utensils className="mr-2 w-5 h-5"/> Cozinha Completa</h3>
                    <p className="mb-4">Nossa cozinha é o coração da casa! Totalmente equipada com fogão, geladeira, micro-ondas e utensílios. A organização é coletiva, garantindo que todos tenham seu espaço.</p>
                </div>
                <div>
                    <h3 className="font-bold text-2xl text-[#D44700] mb-3 flex items-center"><Home className="mr-2 w-5 h-5"/> Áreas de Convivência</h3>
                    <p className="mb-4">Contamos com sala de estudos silenciosa e amplos espaços externos para momentos de lazer e confraternização. Perfeito para relaxar ou receber visitas.</p>
                    
                    <h3 className="font-bold text-2xl text-[#D44700] mb-3 flex items-center"><Zap className="mr-2 w-5 h-5"/> Estrutura de Apoio</h3>
                    <p className="mb-4">Lavanderia completa com máquina de lavar e tanques, internet e um sistema de gerenciamento de contas coletivo transparente.</p>
                </div>
            </div>

          </div>
        </section>
        */}
        {/* Seção 3: Rotina e Organização */}

        {/* Seção 4: Galeria de Fotos */}
        <section className="py-5 bg-rebu-acento">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center text-rebu-secondary mb-4">
              Descubra sua futura casa em Ouro Preto
            </h2>
            <p className="text-center text-rebu-secondary mb-8">
              Experimente o ambiente acolhedor da República Xeque Mate, faça
              amigos, e viva a experiência universitária completa.
            </p>

            {/* Galeria de 6 Itens com Grid Responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Lembre-se de adicionar estas imagens na sua pasta 'public' */}
              <GalleryItem
                src="/casa/cozinha.jpg"
                alt="Cozinha ampla e organizada da República Rebu."
              />
              <GalleryItem
                src="/casa/sala.jpg"
                alt="Sala de convivência com TV e sofás confortáveis."
              />
              <GalleryItem
                src="/casa/quarto-1.jpg"
                alt="Quarto duplo com mesa de estudo e armários."
              />
              <GalleryItem
                src="/casa/quarto-2.jpg"
                alt="Quarto duplo com mesas de estudo e armários."
              />
              <GalleryItem
                src="/casa/quarto-3.jpg"
                alt="Quarto duplo com mesas de estudo e armários."
              />
              <GalleryItem src="/casa/vestiario.jpg" alt="Vestiário" />
              <GalleryItem
                src="/casa/banheiro-individual.jpg"
                alt="banheiro individual"
              />
              <GalleryItem
                src="/casa/lavanderia.jpg"
                alt="Corredor andar de baixo."
              />
            </div>

            {/* Chamada para o Processo Seletivo (CTA Final) */}
            <div className="text-center mt-12 p-6 bg-rebu-soft rounded-lg shadow-lg hover:shadow-xl transition border-b-4 border-rebu-primary hover:border-[#FF8C00]">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Quer sentir a energia da Xeque Mate de perto?
              </h3>
              <p className="text-rebu-secoundary mb-3 max-w-xl mx-auto">
                As fotos não mostram tudo. Venha tomar um café conosco, conhecer
                os moradores e tirar suas dúvidas sobre a UFOP e a vida em Ouro
                Preto.
              </p>
              <Link
                href="https://wa.me/31971527535" // Link direto para o Zap converte mais que página de contato
                className="inline-flex items-center gap-2 bg-rebu-primary text-rebu-secondary font-bold py-4 px-10 rounded-full text-lg transition duration-300 hover:bg-white hover:scale-105"
              >
                Agendar visita pelo WhatsApp &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
