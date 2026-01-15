// app/a-republica/page.tsx

import { Header } from "../../components/shared/Header"; // Ajuste o caminho conforme sua estrutura
import { Footer } from "../../components/shared/Footer"; // Ajuste o caminho conforme sua estrutura
import Link from "next/link";
import React from 'react';
import { FaCalendarAlt, FaHome, FaGraduationCap, FaMusic, FaDog } from 'react-icons/fa'; // Importando ícones
import type { Metadata } from "next";

// 🎯 Metadados SEO — Página "A República"
export const metadata: Metadata = {
  title: {
    absolute: "A República Xeque Mate | Tradição, Valores e História em Ouro Preto",
  },

  description:
    "Conheça a história da República Xeque Mate em Ouro Preto. Tradição universitária desde 1982, valores, organização interna e vida estudantil próxima à UFOP.",

  keywords: [
    "república estudantil em Ouro Preto",
    "república Xeque Mate",
    "república universitária UFOP",
    "tradição universitária Ouro Preto",
    "república federal masculina",
    "vida estudantil UFOP",
  ],

  openGraph: {
    title: "A República Xeque Mate | Tradição Universitária em Ouro Preto",
    description:
      "Descubra a história, os valores e a tradição da República Xeque Mate em Ouro Preto. Uma república estudantil com identidade, organização e espírito universitário.",
    url: "https://republicaxequemate.com.br/a-republica",
    images: [
      {
        url: "/og-republica.jpg",
        width: 1200,
        height: 630,
        alt: "República Xeque Mate em Ouro Preto",
      },
    ],
  },

  alternates: {
    canonical: "https://republicaxequemate.com.br/a-republica",
  },
};



// 1. DEFINIÇÃO DA INTERFACE PARA O EVENTO
interface TimelineEvent {
  year: string;
  icon: React.ReactNode;
  title: string;
  content: string;
}

// --- COMPONENTE DA LINHA DO TEMPO (INÍCIO) ---

/**
 * Componente para um item da Linha do Tempo
 * Tipagem aplicada através da interface TimelineEvent
 */
const TimelineItem: React.FC<TimelineEvent> = ({ year, icon, title, content }) => (
  <div className="flex mb-12 relative">
    {/* Ponto da Linha do Tempo e Ícone */}
    <div className="flex flex-col items-center mr-6">
      <div className="flex-shrink-0 w-12 h-12 bg-rebu-primary rounded-full flex items-center justify-center text-white z-10 shadow-lg">
        {icon}
      </div>
      {/* Linha Vertical */}
      <div className="flex-grow w-1 bg-rebu-primary my-[-1px] opacity-50"></div>
    </div>

    {/* Conteúdo do Evento */}
    <div className="flex-grow bg-rebu-soft p-6 rounded-xl shadow-2xl transition duration-300 hover:shadow-orange-500/30 border-b-4 border-rebu-primary">
      <div className="text-sm font-semibold text-rebu-primary mb-1">{year}</div>
      <h4 className="text-xl font-bold text-rebu-secondary mb-2">{title}</h4>
      <p className="text-rebu-secondary">{content}</p>
    </div>
  </div>
);

/**
 * Seção completa da Cronologia da República Xeque-Mate
 */
const CronologiaSection: React.FC = () => {
  const initialLocation = "Fundada na Rua Antônio de Paula Ribas, n° 161, bairro Água Limpa.";

  // 2. APLICANDO A TIPAGEM À LISTA DE EVENTOS
  const timelineEvents: TimelineEvent[] = [
    {
      year: '1979',
      icon: <FaHome />,
      title: 'Fundação e Primeira Sede',
      content: `Fundação da República Socialista Xeque-Mate. Sede inicial: ${initialLocation}`,
    },
    {
      year: '1982',
      icon: <FaGraduationCap />,
      title: 'A Expansão',
      content: 'Fundação da UPA (União das Repúblicas) e o retorno dos "Xequemateanos" à vida ativa. Esta data se tornou a comemorativa.',
    },
    {
      year: '1984 - 1996',
      icon: <FaCalendarAlt />,
      title: 'A Era da Farmácia',
      content: 'Período em que a república foi habitada **somente por estudantes de Farmácia**. Marcado pela "Festa do Esfrega-Esfrega" e o Primeiro Encontro dos Filhos da Puta da Escola de Farmácia.',
    },
    {
      year: '1995',
      icon: <FaMusic />,
      title: 'O Hino',
      content: 'Escolha do **Hino da República**: "A Filha da Chiquita Bacana". Reforma e ampliação da sede com recursos próprios.',
    },
    {
      year: '1997',
      icon: <FaHome />,
      title: 'A Grande Enxurrada e a 2ª Sede',
      content: 'Perda total da primeira sede devido a fortes chuvas. Mudança forçada para a **Rua Dr. Cláudio de Lima** (via Vila São José).',
    },
    {
      year: '1998 - 1999',
      icon: <FaHome />,
      title: 'Anos de Itinerância',
      content: 'Novas mudanças de sede: em 1998, para a **Rua Direita**; em 1999, para a **Rua Paraná**. Período de grandes festas (Carnaval e Festa do 12).',
    },
    {
      year: '2002',
      icon: <FaCalendarAlt />,
      title: 'O Sonho da Sede Própria',
      content: 'Realização de assembleia entre moradores e ex-alunos para pautar a aquisição da sede própria.',
    },
    {
      year: '2010',
      icon: <FaGraduationCap />,
      title: 'Parceria Institucional (Sede Própria)',
      content: 'Acordo inédito entre a Associação de Moradores e Ex-alunos e a UFOP, que doaria um terreno para a construção da sede própria.',
    },
    {
      year: '2012',
      icon: <FaDog />,
      title: 'Chegada da Buneka e Nova Sede Temporária',
      content: 'Chegada da icônica moradora canina, **a Buneka** 🐕. Mudança para a **Rua Getúlio Vargas**.',
    },
    {
      year: '2013',
      icon: <FaCalendarAlt />,
      title: 'O Título',
      content: '**Campeã do Campeonato de Repúblicas**.',
    },
    {
      year: '2014',
      icon: <FaHome />,
      title: 'A Última Parada Antes',
      content: 'Mudança para a **Rua Conselheiro Quintiliano**. Realização da histórica **Festa Junina Xeque-Mate e Aquarius**.',
    },
    {
      year: '2015',
      icon: <FaHome />,
      title: 'A Sede Definitiva',
      content: 'Mudança (Setembro) e **Inauguração Oficial (11 de Outubro)** da sede própria no Campus Universitário. Resgate aprofundado da história.',
    },
  ];

  return (
    <section className="py-5 bg-rebu-acento text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Título e Subtítulo */}
        <header className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-3 text-rebu-secondary">
            ♟️ Cronologia Xeque-Mate
          </h2>
          <p className="text-xl text-rebu-secondary max-w-2xl mx-auto">
            Mais de quatro décadas de história, mudanças e tradições.
          </p>
        </header>

        {/* Linha do Tempo */}
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} {...event} />
          ))}
        </div>

        {/* Call to Action (Reforçado) */}
        <div className="mt-20 text-center">
          <p className="text-lg text-rebu-secondary mb-6 max-w-3xl mx-auto">
            Cada ano é uma peça fundamental. Para conhecer os nomes, fotos e detalhes de cada era, visite nosso memorial.
          </p>
          <Link
            href="/memorial"
            className="mt-8 inline-block bg-rebu-primary text-rebu-secondary font-bold py-3 px-8 rounded-lg text-lg shadow-lg shadow-rebu-primary/50 hover:bg-rebu-secondary hover:text-rebu-soft hover:shadow-rebu-primary/60 transition duration-300 transform hover:scale-105"
          >
            Explorar o Memorial Completo &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE DA LINHA DO TEMPO (FIM) ---


export default function ARepublica() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* Seção 2: Introdução e Contexto Histórico */}
        <section className="py-5 bg-rebu-acento">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-extrabold text-center text-rebu-secondary mb-12">
              Memórias da República Xeque Mate
            </h2>

            <p className="text-lg text-rebu-secondary mb-6 leading-relaxed">
              A República Socialista Xeque-Mate foi fundada em 1979 pelos
              moradores Renzo, Ibrain, Orcelino, Paulo e Odilon, na rua
              conhecida como rua da caixa d&apos;água, no bairro Água Limpa. Em 1982
              a UFOP iniciou a construção das casas destinadas às repúblicas no
              Campus Universitário, com isso, os então xequemateanos e os
              moradores da república Revertério se juntaram para fundar a
              república Unidos por Acaso (UPA), contudo logo após decidiram
              retornar e reiniciar a história da república. A história da
              fundação só foi descoberta de fato em 2015, entretanto, como a
              data até então utilizada era a 19 de abril de 1982, por
              conveniência esta ficou estabelecida como data comemorativa do
              aniversário da república.
            </p>
            <p className="text-lg text-rebu-secondary mb-6 leading-relaxed">
              O nome &ldquo;República Socialista Xeque-Mate&rdquo; foi dado pelo fundador
              Renzo pelo fato de na ocasião ter sido campeão brasileiro e
              bicampeão mineiro de xadrez. Com o decorrer do tempo a república
              passou a se chamar apenas &ldquo;Xeque-Mate&rdquo;. Renzo, já como
              xequemateano, foi campeão do 1º torneio de xadrez &ldquo;cidade do
              aleijadinho&rdquo; e campeão brasileiro universitário por equipe em
              1983. Duas senhoras se destacaram na história da Xeque-Mate. Uma
              delas D. Alice, proprietária da casa, resistiu às pressões
              familiares quanto a venda do imóvel lutando para que a república
              permanecesse lá enquanto ela fosse viva, sendo conhecida pelos
              moradores da época como seu &ldquo;anjo da guarda&rdquo; e D. Nadir, que era
              considerada como a **mãe** dos xequemateanos durante várias
              gerações. No período de 1984 a 1996 só podiam ingressar estudantes
              de farmácia, desta data em diante implantou a pluralidade de
              cursos que foi sadia e proveitosa para a república
            </p>
            <p className="text-lg text-rebu-secondary mb-6 leading-relaxed">
              Em 1995, utilizando recursos próprios ocorreu uma reforma da casa,
              bem como a ampliação do seu espaço físico e nessa mesma época
              ocorreu a escolha da música &ldquo;A Filha da Chiquita Bacana&rdquo; de
              Caetano Veloso como hino da República. Em 04 de janeiro 1997,
              devido a um represamento e consequente desmoronamento da Rua Padre
              Rolim causado pelas intensas chuvas que se sucederam no início
              deste ano, e que levou à destruição da maioria das casas da Rua
              Antônio de Paula Ribas, a Xeque-Mate teve perda total. Em
              consequência da destruição da antiga sede que ali residia há 15
              anos, os moradores se viram obrigados a procurar outra casa, e com
              a ajuda de ex alunos mudaram para a vila São José. Em busca de uma
              sede mais satisfatória, a república passou pelas ruas Dr. Cláudio
              de Lima (maio de 1997), Rua Direita (novembro de 1998), Rua Paraná
              (novembro de 1999), Rua Getúlio Vargas (outubro de 2012), Rua
              Conselheiro Quintiliano (abril de 2014) e finalmente Rua Campus
              Universitário (setembro de 2015).
            </p>
            <p className="text-lg text-rebu-secondary mb-6 leading-relaxed">
              Enquanto na Rua Paraná, a república ficou conhecida devido a
              realização de inúmeras festas e eventos, dentre essas festas
              destacaram-se o Carnaval e a Festa do 12. Em 2002 foi realizada
              uma assembléia entre os moradores e ex-alunos para tornar o sonho
              da sede própria realidade. O sonho começou a tomar corpo em julho
              de 2010 com um acordo entre a Associação de Moradores e Ex-alunos
              da República Xeque Mate e a UFOP, onde esta última, em situação
              inédita, doaria um terreno para que a Associação pudesse construir
              uma casa e se tornar uma república federal, fazendo história ao
              ser a primeira república a construir sua sede com recursos
              próprios. A inauguração da sede no Campus Universitário aconteceu
              no dia 11 de outubro de 2015.
            </p>
          </div>
        </section>

        {/* Seção 4: LINHA DO TEMPO DETALHADA */}
        <CronologiaSection />
        
      </main>
    </>
  );
}