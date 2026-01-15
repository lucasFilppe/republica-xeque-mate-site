import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";
import Image from "next/image";
import Link from "next/link";
import DepoimentosList from "./depoimentos/DepoimentosList";
import ClientExperiencias from "./depoimentos/ClientExperiencias";
import { Briefcase, Gavel, Users, Heart } from "lucide-react";
import ExperienciasPage from "./depoimentos/page";

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
        <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center bg-rebu-secondary overflow-hidden">
          <Image
            src="/principal.jpeg"
            alt="Fachada da República Xeque Mate em Ouro Preto"
            fill
            fetchPriority="high"
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

          <div className="relative z-10 text-center px-4 max-w-xl">
            <h1 className="text-3xl md:text-6xl font-black text-rebu-soft leading-tight drop-shadow-lg">
              Mais que uma república. <br />
              Uma história vivida em Ouro Preto.
            </h1>

            <p className="mt-4 text-base md:text-2xl text-rebu-primary font-semibold drop-shadow-md">
              República estudantil masculina próxima à UFOP
              <span className="text-rebu-soft"> desde 1982</span>
            </p>

            <Link
              href="/a-casa"
              className="mt-8 inline-flex items-center justify-center bg-rebu-primary text-rebu-secondary font-bold h-12 px-8 rounded-xl text-base shadow-lg shadow-rebu-primary/40 hover:bg-rebu-secondary hover:text-rebu-soft transition-all duration-300 active:scale-95"
            >
              Conheça a casa →
            </Link>
          </div>

          {/* Scroll indicator mobile */}
          <div className="absolute bottom-4 text-rebu-soft text-xs opacity-80 animate-bounce">
            ↓ Role para conhecer
          </div>
        </section>

        {/* Seção 3: Pilares da República (Grid de Cards) */}
        <section className="py-16 bg-rebu-acento">
          {" "}
          {/* Mantendo o cinza claro, que é a cor de fundo */}
          <div className="container mx-auto px-6">
            {/* Título da Seção (Ajustando a cor do texto para ser a principal/escura) */}
            <h2 className="text-2xl font-extrabold text-center text-rebu-secondary mb-12">
              Valores da República Xeque Mate em Ouro Preto
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
        <section className="bg-rebu-acento">
          

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
    </>
  );
}
