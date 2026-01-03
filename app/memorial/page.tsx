// app/memorial/page.tsx

import { Header } from '../../components/shared/Header'; 
import { Footer } from '../../components/shared/Footer'; 
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, MapPin, Calendar } from 'lucide-react'; 

// --- SEUS DADOS FICTÍCIOS ORIGINAIS ---
// OBS: Mantenha estes dados, mas saiba que a repetição de nomes/períodos/fotos pode gerar erros no console.
const exMoradorasData = [
  { name: '', periodo: '', curso: '', apelido: 'Renzo', foto: '/EX-Alunos/01-Renzo.png' },
  { name: '', periodo: '', curso: '', apelido: 'Bené', foto: '/EX-Alunos/02-Bené.png' },
  { name: '', periodo: '', curso: '', apelido: 'Sericita', foto: '/EX-Alunos/03-Sericita.png' },
  { name: '', periodo: '', curso: '', apelido: 'Sula', foto: '/EX-Alunos/04-Sula.png' },
  { name: '', periodo: '', curso: '', apelido: 'Xulispa', foto: '/EX-Alunos/05-Xulispa.png' },
  { name: '', periodo: '', curso: '', apelido: 'Heron', foto: '/EX-Alunos/06-Heron.png' },
  { name: '', periodo: '', curso: '', apelido: 'Nhack', foto: '/EX-Alunos/07-Nhack.png' },
  { name: '', periodo: '', curso: '', apelido: 'Aldo', foto: '/EX-Alunos/08-Aldo.png' },
  { name: '', periodo: '', curso: '', apelido: 'Ildeu', foto: '/EX-Alunos/09-Ildeu.png' },
  { name: '', periodo: '', curso: '', apelido: 'Marcão', foto: '/EX-Alunos/10-Marcão.png' },
 // name: '', periodo: '', curso: '', apelido: 'João do Pulo', foto: '/EX-Alunos/11-JoãodoPulo.png' },
 // name: '', periodo: '', curso: '', apelido: 'Kata', foto: '/EX-Alunos/12-Kata.png' },
 // name: '', periodo: '', curso: '', apelido: 'Ebert', foto: '/EX-Alunos/13-Ebert.png' },/*
 /* name: '', periodo: '', curso: '', apelido: 'Wainer', foto: '/EX-Alunos/14 -Wainer.png' },
  { name: '', periodo: '', curso: '', apelido: 'Matuto', foto: '/EX-Alunos/15 - Matuto.png' },
  { name: '', periodo: '', curso: '', apelido: 'Emílio', foto: '/EX-Alunos/16 - Emílio.png' },
  { name: '', periodo: '', curso: '', apelido: 'Belixe', foto: '/EX-Alunos/45 - Belixe.png' },
  { name: '', periodo: '', curso: '', apelido: 'Difundu', foto: '/EX-Alunos/46 - Difundu.png' },
  { name: '', periodo: '', curso: '', apelido: 'Tiqtita', foto: '/EX-Alunos/47 - Tiqtita.png' },
  { name: '', periodo: '', curso: '', apelido: 'Birigui', foto: '/EX-Alunos/48 - Birigui.png' },
  { name: '', periodo: '', curso: '', apelido: 'Diblush', foto: '/EX-Alunos/49 - Diblush.png' },
  { name: '', periodo: '', curso: '', apelido: 'Calma-Débi', foto: '/EX-Alunos/50 - Calma-Débi.png' },
  { name: '', periodo: '', curso: '', apelido: 'Bem Dormido', foto: '/EX-Alunos/51 - Bem Dormido.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Cabeça de Bigorna', foto: '/EX-Alunos/52 - Cabeça de Bigorna.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Azarão', foto: '/EX-Alunos/53 - Azarão.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Madruguinha', foto: '/EX-Alunos/54 - Madruguinha.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'São Nunca', foto: '/EX-Alunos/55 - São Nunca.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Xitara', foto: '/EX-Alunos/56 - Xitara.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Fraldinha', foto: '/EX-Alunos/57 - Fraldinha.png' },
  { name: '', periodo: '', curso: '', apelido: 'Suspeito', foto: '/EX-Alunos/58 - Suspeito.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Diuretico', foto: '/EX-Alunos/59 - Diuretico.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Gonzo', foto: '/EX-Alunos/60 - Gonzo.jpg' },*/
];

// OBS: Você precisará de 19 imagens diferentes na sua pasta public/memorial/ para que não haja erro de chave duplicada ou imagem repetida.

// 🎯 Metadados para SEO no App Router
export const metadata = {
  title: 'Memorial da Rebu | Homenagem às Ex-Moradoras',
  description: 'Conheça o legado das veteranas e homenageados que construíram a história da República Rebu, a primeira república federal feminina de Ouro Preto, desde 1975.',
};


// Componente Card da Moradora
const MoradoraCard = ({ name, periodo, curso, apelido, foto }: typeof exMoradorasData[0]) => (
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

    <div className="p-5">
      <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{name}</h3>
      <p className="text-[#D44700] font-semibold text-sm mb-3">
        {periodo}
      </p>
      <div className="text-gray-600 text-sm space-y-1">
        <p className='flex items-center'><BookOpen className="w-4 h-4 mr-2 text-gray-500" /> {curso}</p>
        <p className='flex items-center'><MapPin className="w-4 h-4 mr-2 text-gray-500" /> Veterana(o) Rebu</p>
      </div>
    </div>
  </div>
);


export default function Memorial() {
  return (
    <>
      <Header />

      <main className="flex-grow">

        {/* Seção 3: Galeria/Grid de Ex-Moradoras */}
        <section id="veteranas" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-12">
              Todas os nossos ex alunos e homenageados
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

      </main>

      <Footer />
    </>
  );
}