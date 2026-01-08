// app/memorial/page.tsx

import { Header } from "../../components/shared/Header";
import { Footer } from "../../components/shared/Footer";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, MapPin, Calendar } from "lucide-react";

// --- SEUS DADOS FICTÍCIOS ORIGINAIS ---
// OBS: Mantenha estes dados, mas saiba que a repetição de nomes/períodos/fotos pode gerar erros no console.
const exMoradorasData = [
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Renzo",
    foto: "/EX-Alunos/01-Renzo.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Bené",
    foto: "/EX-Alunos/02-Bené.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Sericita",
    foto: "/EX-Alunos/03-Sericita.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Sula",
    foto: "/EX-Alunos/04-Sula.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Xulispa",
    foto: "/EX-Alunos/05-Xulispa.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Heron",
    foto: "/EX-Alunos/06-Heron.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Nhack",
    foto: "/EX-Alunos/07-Nhack.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Aldo",
    foto: "/EX-Alunos/08-Aldo.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Ildeu",
    foto: "/EX-Alunos/09-Ildeu.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Marcão",
    foto: "/EX-Alunos/10-Marcão.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "João do Pulo",
    foto: "/EX-Alunos/11-JoaodoPulo.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Kata",
    foto: "/EX-Alunos/12-Kata.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Ebert",
    foto: "/EX-Alunos/13-Ebert.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Wainer",
    foto: "/EX-Alunos/14-Wainer.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Matuto",
    foto: "/EX-Alunos/15-Matuto.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Emílio",
    foto: "/EX-Alunos/16-Emílio.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "DT",
    foto: "/EX-Alunos/17-DT.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Roger",
    foto: "/EX-Alunos/18-Roger.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Xupado",
    foto: "/EX-Alunos/19-Xupado.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Biuty",
    foto: "/EX-Alunos/20-Biuty.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Rabugento",
    foto: "/EX-Alunos/21-Rabugento.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Pinto",
    foto: "/EX-Alunos/22-Pinto.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Guano",
    foto: "/EX-Alunos/23-Guano.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Baby",
    foto: "/EX-Alunos/24-Baby.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Barata",
    foto: "/EX-Alunos/25-Barata.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Pudim",
    foto: "/EX-Alunos/26-Pudim.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Rascunho",
    foto: "/EX-Alunos/27-Rascunho.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Gazela",
    foto: "/EX-Alunos/28-Gazela.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Topêra",
    foto: "/EX-Alunos/29-Topera.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Norma",
    foto: "/EX-Alunos/30-Norma.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Bitoka",
    foto: "/EX-Alunos/31-Bitoka.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "K-tarro",
    foto: "/EX-Alunos/32-K-tarro.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Kud-Kbryto",
    foto: "/EX-Alunos/33-Kud-Kbryto.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Byu-Goyaba",
    foto: "/EX-Alunos/34-Byu-Goyaba.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "0x0",
    foto: "/EX-Alunos/35-0x0.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Pinguim",
    foto: "/EX-Alunos/36-Pinguim.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Panguá",
    foto: "/EX-Alunos/37-Panguá.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Ricoxete",
    foto: "/EX-Alunos/38-Ricoxete.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Fuinha",
    foto: "/EX-Alunos/39-Fuinha.png",
  },

  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Mãozinha",
    foto: "/EX-Alunos/40-Mãozinha.png",
  },
  
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Xistose",
    foto: "/EX-Alunos/41-Xistose.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Bussunda",
    foto: "/EX-Alunos/42-Bussunda.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Alfinete",
    foto: "/EX-Alunos/43-Alfinete.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Berin",
    foto: "/EX-Alunos/44-Berin.png",
  },

  { name: '', periodo: '', curso: '', apelido: 'Belixe', foto: '/EX-Alunos/45-Belixe.png' },
  { name: '', periodo: '', curso: '', apelido: 'Difundu', foto: '/EX-Alunos/46-Difundu.png' },
  { name: '', periodo: '', curso: '', apelido: 'Tiqtita', foto: '/EX-Alunos/47-Tiqtita.png' },
  { name: '', periodo: '', curso: '', apelido: 'Birigui', foto: '/EX-Alunos/48-Birigui.png' },
  { name: '', periodo: '', curso: '', apelido: 'Diblush', foto: '/EX-Alunos/49-Diblush.png' },
  { name: '', periodo: '', curso: '', apelido: 'Calma-Débi', foto: '/EX-Alunos/50-Calma-Débi.png' },
  { name: '', periodo: '', curso: '', apelido: 'Bem Dormido', foto: '/EX-Alunos/51-BemDormido.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Cabeça de Bigorna', foto: '/EX-Alunos/52-CabeçadeBigorna.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Azarão', foto: '/EX-Alunos/53-Azarão.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Madruguinha', foto: '/EX-Alunos/54-Madruguinha.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'São Nunca', foto: '/EX-Alunos/55-SãoNunca.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Xitara', foto: '/EX-Alunos/56-Xitara.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Fraldinha', foto: '/EX-Alunos/57-Fraldinha.png' },
  { name: '', periodo: '', curso: '', apelido: 'Suspeito', foto: '/EX-Alunos/58-Suspeito.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Diuretico', foto: '/EX-Alunos/59-Diuretico.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Gonzo', foto: '/EX-Alunos/60-Gonzo.jpg' },
];


const exMoradorasDatah = [
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Renzo",
    foto: "/EX-Alunos/01-Renzo.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Bené",
    foto: "/EX-Alunos/02-Bené.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Sericita",
    foto: "/EX-Alunos/03-Sericita.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Sula",
    foto: "/EX-Alunos/04-Sula.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Xulispa",
    foto: "/EX-Alunos/05-Xulispa.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Heron",
    foto: "/EX-Alunos/06-Heron.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Nhack",
    foto: "/EX-Alunos/07-Nhack.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Aldo",
    foto: "/EX-Alunos/08-Aldo.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Ildeu",
    foto: "/EX-Alunos/09-Ildeu.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Marcão",
    foto: "/EX-Alunos/10-Marcão.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "João do Pulo",
    foto: "/EX-Alunos/11-JoaodoPulo.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Kata",
    foto: "/EX-Alunos/12-Kata.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Ebert",
    foto: "/EX-Alunos/13-Ebert.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Wainer",
    foto: "/EX-Alunos/14-Wainer.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Matuto",
    foto: "/EX-Alunos/15-Matuto.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "Emílio",
    foto: "/EX-Alunos/16-Emílio.png",
  },
  {
    name: "",
    periodo: "",
    curso: "",
    apelido: "DT",
    foto: "/EX-Alunos/17-DT.png",
  },
]
// OBS: Você precisará de 19 imagens diferentes na sua pasta public/memorial/ para que não haja erro de chave duplicada ou imagem repetida.

// 🎯 Metadados para SEO no App Router
export const metadata = {
  title: "Memorial da Rebu | Homenagem às Ex-Moradoras",
  description:
    "Conheça o legado das veteranas e homenageados que construíram a história da República Rebu, a primeira república federal feminina de Ouro Preto, desde 1975.",
};

// Componente Card da Moradora
const MoradoraCard = ({
  name,
  periodo,
  curso,
  apelido,
  foto,
}: (typeof exMoradorasData)[0]) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 overflow-hidden">
    {/* CORREÇÃO: A altura da imagem foi aumentada para h-72 */}
    <div className="relative w-full h-100">
      <Image
        src={foto}
        alt={`Foto de ${name}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* Apelido em destaque */}
      <span className="absolute bottom-0 right-0 bg-[#D44700] text-white text-sm font-bold px-3 py-1 rounded-tl-lg">
        {apelido}
      </span>
    </div>
  </div>
);

const Homenageados = ({
  name,
  periodo,
  curso,
  apelido,
  foto,
}: (typeof exMoradorasDatah)[0]) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 overflow-hidden">
    {/* CORREÇÃO: A altura da imagem foi aumentada para h-72 */}
    <div className="relative w-full h-100">
      <Image
        src={foto}
        alt={`Foto de ${name}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* Apelido em destaque */}
      <span className="absolute bottom-0 right-0 bg-[#D44700] text-white text-sm font-bold px-3 py-1 rounded-tl-lg">
        {apelido}
      </span>
    </div>
  </div>
);

export default function Memorial() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* Seção 3: Galeria/Grid de Ex-Moradoras */}
        <section id="veteranas" className="py-5 bg-rebu-acento">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center text-rebu-secondary mb-12">
              Todas os nossos ex alunos
            </h2>

            {/* CORREÇÃO: Grid ajustado para no MÁXIMO 3 colunas em telas grandes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {exMoradorasData.map((moradora, index) => (
                // Uso do index como key, já que os dados são repetidos
                <MoradoraCard key={index} {...moradora} />
              ))}
            </div>
          </div>
        </section>

        {/* Seção 3: Galeria/Grid de Ex-Moradoras */}
        <section id="veteranas" className="py-5 bg-rebu-acento">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center text-rebu-secondary mb-12">
              Todos nossos homenageados
            </h2>

            {/* CORREÇÃO: Grid ajustado para no MÁXIMO 3 colunas em telas grandes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {exMoradorasDatah.map((moradora, index) => (
                // Uso do index como key, já que os dados são repetidos
                <MoradoraCard key={index} {...moradora} />
              ))}
            </div>
          </div>
        </section>

        
      </main>

      <Footer />
    </>
  );
}
