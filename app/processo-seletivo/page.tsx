// app/processo-seletivo/page.tsx

import { Header } from '../../components/shared/Header'; 
import { Footer } from '../../components/shared/Footer'; 
import Link from 'next/link';
import { CalendarCheck, UserCheck, MessageSquare, Briefcase } from 'lucide-react'; 

// Componente para um card de Etapa da Timeline
const EtapaCard = ({ step, title, description, icon: Icon, colorClass }: { step: number, title: string, description: string, icon: React.ElementType, colorClass: string }) => (
  <div className="flex items-start space-x-4 mb-8">
    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${colorClass} shadow-lg`}>
      {step}
    </div>
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {/* Ícone de detalhe */}
      <Icon className="w-5 h-5 mt-2 text-[#D44700]" /> 
    </div>
  </div>
);


// 🎯 Metadados para SEO no App Router
export const metadata = {
  title: 'Processo Seletivo | Como Morar na República Rebu',
  description: 'Conheça as etapas e requisitos para participar da Rodada da República Rebu, a primeira república federal feminina de Ouro Preto.',
};


export default function ProcessoSeletivo() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        
        {/* Seção 1: Hero - Chamada e Inscrição */}
        <section className="py-20 bg-[#1A1A1A] text-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#FF8C00]">
              Faça Parte da Família Rebu
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
              O Processo Seletivo da Rebu,  ocorre semestralmente (ou por demanda). Prepare-se para conhecer a história e a rotina da primeira federal feminina!
            </p>
            
            {/* Botão de Inscrição Principal */}
            <Link 
              href="#etapas" 
              className="inline-block bg-[#D44700] text-white font-bold py-3 px-10 rounded-lg text-xl shadow-lg shadow-[#D44700]/50 hover:bg-[#FF8C00] transition duration-300 transform hover:scale-105"
            >
              Ver Etapas e Requisitos &darr;
            </Link>
          </div>
        </section>

        {/* Seção 2: Requisitos e Informações Essenciais */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8 border-l-4 border-[#D44700] pl-4">
              Requisitos e Documentação
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-700">
                <div>
                    <h3 className="font-bold text-2xl text-[#D44700] mb-3 flex items-center"><UserCheck className="mr-2 w-5 h-5"/> Quem pode participar?</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Ser estudante universitária da UFOP.</li>
                        <li>Identificar-se com os princípios de autogestão e federal.</li>
                        <li>Disponibilidade para cumprir as tarefas e participar das assembleias.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-2xl text-[#D44700] mb-3 flex items-center"><Briefcase className="mr-2 w-5 h-5"/> Documentos Necessários</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Comprovante de Matrícula (UFOP).</li>
                        <li>Documento de Identidade.</li>
                        <li>Opcional: Carta de apresentação/Motivação.</li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-10 p-6 bg-[#F8F8F8] border-l-4 border-[#FF8C00]">
                 <p className="font-semibold text-[#1A1A1A]">Atenção:</p>
                 <p className="text-gray-700">O processo seletivo não é apenas sobre a vaga, mas sobre a integração à cultura federal. Priorizamos candidatas que demonstrem interesse em construir e manter a república.</p>
            </div>
          </div>
        </section>

        {/* Seção 3: Etapas do Processo Seletivo (Timeline) */}
        <section id="etapas" className="py-20 bg-[#F8F8F8]">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-12">
              Etapas
            </h2>
            
            <div className="relative border-l-4 border-[#D44700] pl-6"> 
              
              {/* Linha divisória implícita por margem do EtapaCard */}
              <EtapaCard 
                step={1} 
                title="Entrevista e Conversa" 
                description="As moradoras entrarão em contato para um bate-papo presencial ou online, focando em suas expectativas e visão de república."
                icon={MessageSquare} 
                colorClass="bg-[#D44700]"
              />
              <EtapaCard 
                step={2} 
                title="Conhecendo a Casa (Visita/Período Teste)" 
                description="Você será convidada a visitar a casa e passar um breve período para conhecer a rotina, as regras e a convivência. ESSENCIAL."
                icon={CalendarCheck}  
                colorClass="bg-[#D44700]"
              />
              
            </div>
            
            {/* CTA Final para Dúvidas ou Documentos */}
            <div className="text-center mt-12">
                 <Link 
                    href="/contato" 
                    className="inline-block border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold py-3 px-8 rounded-full hover:bg-[#1A1A1A] hover:text-white transition duration-300"
                  >
                    Tire Suas Dúvidas no Contato &rarr;
                  </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}