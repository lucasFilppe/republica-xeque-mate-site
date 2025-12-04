// app/a-casa/page.tsx

import { Header } from '../../components/shared/Header'; 
import { Footer } from '../../components/shared/Footer'; 
import Image from 'next/image';
import Link from 'next/link';
import { Bed, Utensils, Zap, Home, Gavel, Heart } from 'lucide-react'; // Importados todos os ícones necessários

// 🎯 Metadados para SEO no App Router
export const metadata = {
  title: 'A Casa Rebu | Estrutura, Rotina e Galeria de Fotos',
  description: 'Conheça a estrutura da República Rebu em Ouro Preto, incluindo quartos, áreas comuns, e a organização da rotina de convivência.',
};


// Componente para um card de Rotina Reutilizável
const RotinaCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-[#D44700] hover:shadow-xl transition duration-300">
    <Icon className="w-10 h-10 text-[#1A1A1A] mx-auto mb-3" />
    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

// Componente para um item da galeria (Importante: Adicione as imagens na pasta public)
const GalleryItem = ({ src, alt }: { src: string, alt: string }) => (
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
      <Header />

      <main className="flex-grow">
        
        {/* Seção 1: Hero - Estrutura */}
        <section className="py-20 bg-[#1A1A1A] text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#FF8C00]">
              A Estrutura da Casa
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
              Seu novo lar em Ouro Preto: conforto, organização e um espaço projetado para o estudo e a convivência.
            </p>
          </div>
        </section>

        {/* Seção 2: Detalhes da Casa e Acomodações */}
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
        
        {/* Seção 3: Rotina e Organização */}
        <section className="py-16 bg-[#F8F8F8]">
             <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-12">
                    Nossa Rotina de Convivência
                </h2>
                
                <div className="grid md:grid-cols-4 gap-8">
                    <RotinaCard 
                        icon={Gavel} 
                        title="Assembleias" 
                        description="Reuniões semanais para discutir e votar todas as decisões da casa, mantendo a autogestão federal."
                    />
                    <RotinaCard 
                        icon={Zap} 
                        title="Divisão de Tarefas" 
                        description="Escalas justas e rodízios para limpeza e manutenção das áreas comuns, garantindo a organização."
                    />
                    <RotinaCard 
                        icon={Utensils} 
                        title="Caixa Comum" 
                        description="Sistema financeiro transparente para contas fixas e compras coletivas, gerido por uma moradora responsável."
                    />
                    <RotinaCard 
                        icon={Heart} 
                        title="Cuidado Mútuo" 
                        description="Priorizamos o apoio acadêmico e emocional, criando um ambiente de irmandade e suporte entre as moradoras."
                    />
                </div>
            </div>
        </section>


        {/* Seção 4: Galeria de Fotos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-12">
              Veja a Rebu por Dentro
            </h2>
            
            {/* Galeria de 6 Itens com Grid Responsivo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Lembre-se de adicionar estas imagens na sua pasta 'public' */}
                <GalleryItem src="/casa/cozinha.jpg" alt="Cozinha ampla e organizada da República Rebu." />
                <GalleryItem src="/casa/sala.jpg" alt="Sala de convivência com TV e sofás confortáveis." />
                <GalleryItem src="/casa/quarto-2.jpg" alt="Quarto individual com mesa de estudo e armários." />
                <GalleryItem src="/casa/quarto.jpg" alt="Quarto duplo com mesas de estudo e armários." />
                <GalleryItem src="/casa/sala-estudos.jpg" alt="Sala de estudos." />
                <GalleryItem src="/casa/escada.jpg" alt="Escada para segundo andar." />
                <GalleryItem src="/casa/corredor.jpg" alt="Corredor andar de baixo." />
                <GalleryItem src="/casa/area-externa-2.jpg" alt="Área externa com jardim e espaço para churrasco." />
                <GalleryItem src="/casa/area-externa.jpg" alt="Área externa com jardim e espaço para churrasco." />
                <GalleryItem src="/casa/area-externa-3.jpg" alt="Área externa com jardim e espaço para churrasco." />
                <GalleryItem src="/casa/area-externa-4.jpg" alt="Área externa com jardim e espaço para churrasco." />
            </div>

            {/* Chamada para o Processo Seletivo (CTA Final) */}
            <div className="text-center mt-12 bg-[#1A1A1A] p-8 rounded-xl">
                 <h3 className="text-3xl font-bold text-[#FF8C00] mb-3">Gostou da Casa?</h3>
                 <p className="text-lg text-gray-300 mb-6">Saiba como se candidatar a uma vaga e vir morar conosco.</p>
                 <Link 
                    href="/processo-seletivo" 
                    className="inline-block bg-[#D44700] text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-[#FF8C00] transition duration-300 transform hover:scale-105"
                  >
                    Acesse o Processo Seletivo &rarr;
                  </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}