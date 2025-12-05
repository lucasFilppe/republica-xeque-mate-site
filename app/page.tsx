import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";
import Image from "next/image";
import Link from "next/link";
import DepoimentosList from './/experiencias/DepoimentosList';
import ClientExperiencias from './/experiencias/ClientExperiencias';
import { Briefcase, Gavel, Users, Heart } from "lucide-react";
import ExperienciasPage from "./experiencias/page";

// Componente Reutilizável para destacar um pilar da República
// Componente Reutilizável para destacar um pilar da República
const PilarCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="text-center p-6 bg-rebu-soft rounded-lg shadow-lg hover:shadow-xl transition border-b-4 border-rebu-primary hover:border-[#FF8C00]">
    <Icon className="w-12 h-12 text-rebu-primary mx-auto mb-4" />
    <h3 className="text-xl font-bold text-rebu-secondary mb-3">{title}</h3>
    <p className="text-rebu-secondary">{description}</p>
  </div>
);

// O restante do seu código HomePage...

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center bg-rebu-secondary overflow-hidden">
          <Image
            src="/principal.jpeg"
            alt="Fachada da República Rebu em Ouro Preto"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-40"
            priority
          />

          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-rebu-soft leading-tight drop-shadow-lg">
              REPÚBLICA XEQUE-MATE
            </h1>

            <p className="mt-4 text-xl md:text-3xl text-rebu-primary font-semibold italic drop-shadow-md">
              A PRIMEIRA FEDERAL MASCULINA CONSTRUÍDA POR EX ALUNOS
              <span className="text-rebu-soft"> DESDE 1982</span>
            </p>

            <Link
              href="/processo-seletivo"
              className="mt-8 inline-block bg-rebu-primary text-rebu-secondary font-bold py-3 px-8 rounded-lg text-lg shadow-lg shadow-rebu-primary/50 hover:bg-rebu-secondary hover:text-rebu-soft hover:shadow-rebu-primary/60 transition duration-300 transform hover:scale-105"
            >
              Conheça a casa &rarr;
            </Link>
          </div>
        </section>

        {/* Seção 3: Pilares da República (Grid de Cards) */}
        <section className="py-16 bg-rebu-acento">
          {" "}
          {/* Mantendo o cinza claro, que é a cor de fundo */}
          <div className="container mx-auto px-6">
            {/* Título da Seção (Ajustando a cor do texto para ser a principal/escura) */}
            <h2 className="text-3xl font-extrabold text-center text-rebu-secondary mb-12">
              Os Valores que nos Movem
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {/* O PilarCard será ajustado para usar as variáveis */}
              <PilarCard
                icon={Gavel}
                title="Autonomia e Organização"
                description="Somos uma república autogerida. Todas as decisões são tomadas em assembleia, promovendo responsabilidade e liderança."
              />
              <PilarCard
                icon={Users}
                title="Convivência e Respeito"
                description="Valorizamos a diversidade e o respeito mútuo. Nossas regras garantem um ambiente de apoio e crescimento coletivo."
              />
              <PilarCard
                icon={Briefcase}
                title="Compromisso Federal"
                description="Mantemos a tradição federal em nosso DNA, focando no apoio mútuo, na vida acadêmica e na representatividade estudantil."
              />
              <PilarCard
                icon={Heart}
                title="Cultura e Tradição"
                description="Participamos ativamente da vida cultural de Ouro Preto, com festas tradicionais e o famoso Carnaval Ouro-Pretano."
              />
            </div>

      
          </div>
        </section>

        {/* NOVO: Seção 4 - Depoimentos (A Voz dos Moradores) */}
        <section className="py-16 bg-rebu-acento">
            <div className="container mx-auto ">
                

                {/* REPLICAÇÃO DA LÓGICA DE EXPERIÊNCIAS:
                  O DepoimentosList (async) busca os dados e os renderiza.
                  O ClientExperiencias (use client) o envolve para adicionar interatividade (se houver).
                */}
                <ClientExperiencias>
                    <DepoimentosList /> 
                </ClientExperiencias>
                
          
            </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
