// app/memorial/page.tsx

import { Header } from '../../components/shared/Header'; 
import { Footer } from '../../components/shared/Footer'; 
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, MapPin, Calendar } from 'lucide-react'; 

// --- SEUS DADOS FICTÍCIOS ORIGINAIS ---
// OBS: Mantenha estes dados, mas saiba que a repetição de nomes/períodos/fotos pode gerar erros no console.
const exMoradorasData = [

  { name: 'Evagelina Maria Apparício da Silva', periodo: '1978', curso: 'Eng. de Minas', apelido: 'Vanja', foto: '/memorial/vanja.jpg' },
  { name: 'Maria Auxiliadora Neves Nogueira', periodo: '1978', curso: 'Eng. Metalúrgica ', apelido: 'Chilin', foto: '/memorial/chilin.jpg' },
  { name: 'Maria do Carmo de Carvalho', periodo: '1979', curso: 'Eng. Civil', apelido: 'Maria Do Carmo', foto: '/memorial/maria-do-carmo.jpg' },
  { name: 'Maria Martha de Migalhães Garmeiro', periodo: '1979', curso: 'Eng. de Minas ', apelido: 'Mississipi', foto: '/memorial/mississipi.jpg' },
  { name: 'Angela Maria Pimenta', periodo: '1979', curso: 'Eng. Geológica ', apelido: 'Angela', foto: '/memorial/angela.jpg' },
  { name: 'Maria do Socorro de Souza', periodo: '1980.2', curso: 'Eng. Geológica', apelido: 'Help', foto: '/memorial/help.jpg' },
  { name: 'Maria Thelma da Silva', periodo: '1980', curso: 'Eng. de Minas', apelido: 'Telminha', foto: '/memorial/telminha.jpg' },
  { name: 'Lívia Lara Reis', periodo: '1980.2', curso: 'Eng. Metalúrgica ', apelido: 'Livia', foto: '/memorial/livia.jpg' },
  { name: 'Rosângela Maria Alves da Cunha e Costa ', periodo: '1980', curso: 'Eng. Metalúrgica', apelido: 'Tirinha', foto: '/memorial/tirinha.jpg' },
  { name: 'Gilda Carneiro Ferreira ', periodo: '1981.2', curso: 'Eng. Minas', apelido: 'Bem', foto: '/memorial/bem.jpg' },
  { name: 'Léa da Rocha', periodo: '1981.1', curso: 'Eng. Civil ', apelido: 'Esquelética', foto: '/memorial/esqueletica.jpg' },
  { name: 'Maria Cristina Ozi Caetano de Almeida', periodo: '1984.1', curso: 'Eng. Geológica', apelido: 'Cris', foto: '/memorial/cris.jpg' },
  { name: 'Efigênia Soares Almeida', periodo: '1984.2', curso: 'Eng. Geológica ', apelido: 'Fifi', foto: '/memorial/fifi.jpg' },
  { name: 'Wanda Aparecido Machado Holfmann', periodo: '1985.1', curso: 'Eng. Metalúrgica ', apelido: 'Coisinha do Pai', foto: '/memorial/coisinha.jpg' },
  { name: 'Madara Vieira Lessa Tyler', periodo: '1985.2', curso: 'Eng. de Minas ', apelido: 'Madara', foto: '/memorial/madara.jpg' },
  { name: 'Rita Giusti', periodo: '1985.2', curso: 'Eng. de Minas ', apelido: 'Rita', foto: '/memorial/rita.jpg' },
  { name: 'Itza Esilda Diaz Guillén', periodo: '1985', curso: 'Eng. Geológica', apelido: 'Iltza', foto: '/memorial/iltza.jpg' },
  { name: 'Rosângela Buzanelli Torres ', periodo: '1986', curso: 'Eng. Geológica', apelido: 'Maria mingau', foto: '/memorial/mingau.jpg' },
  { name: 'Leila Isa Vilaça', periodo: '1988.1', curso: 'Eng. Geológica', apelido: 'Leila', foto: '/memorial/leila.jpg' },
  { name: 'Nereide Bosso de Souza ', periodo: '1989', curso: 'Eng. Geológica', apelido: 'Nil', foto: '/memorial/nil.jpg' },
  { name: 'Mary Carmen Gonzales Barbon ', periodo: '1990', curso: 'Eng. Civil', apelido: 'Meire', foto: '/memorial/meire.jpg' },
  { name: 'Solange Aparecida Fernandes', periodo: '1990.1', curso: 'Eng. Civil', apelido: 'Solange', foto: '/memorial/solange.jpg' },
  { name: 'Flávia M. F. Nascimento', periodo: '1991.2', curso: 'Eng. Geológica', apelido: 'Flávia', foto: '/memorial/flavia.jpg' },
  { name: 'vaneesa Vieira', periodo: '1995.1', curso: 'Eng. Geológica ', apelido: 'Vavi', foto: '/memorial/vavi.jpg' },
  { name: 'Anete Antunes Rocha Nunes ', periodo: '1996', curso: 'Eng. Civil', apelido: 'Baiana', foto: '/memorial/baiana.jpg' },
  { name: 'Marcela Paula Grobério', periodo: '1996.1', curso: 'Eng. Civil', apelido: 'Marcela', foto: '/memorial/marcela.jpg' },
  { name: 'Marúzia Coelho Ferreira', periodo: '1998', curso: 'Eng. Geológica', apelido: 'Marúzia', foto: '/memorial/maruzia.jpg' },
  { name: 'Monique Toledo Salgado', periodo: '1998', curso: 'Eng. Civil', apelido: 'Monique', foto: '/memorial/monique.jpg' },
  { name: 'Makeliny Oliveira S. Gomes', periodo: '1999', curso: 'Filosofia', apelido: 'Mak-Laren', foto: '/memorial/maklaren.jpg' },
  { name: 'Irene Amorim knupp mirande', periodo: '2000.1', curso: 'Direito', apelido: 'Nana', foto: '/memorial/nana.jpg' },
  { name: 'Wanusa Costa Araújo Rocha', periodo: '2000', curso: 'Eng. Geológica', apelido: 'Wanusa', foto: '/memorial/wanusa.jpg' },
  { name: 'Flávia Guimarães Zola ', periodo: '2002', curso: 'Nutrição', apelido: 'Tá tá tá', foto: '/memorial/tata.jpg' },
  { name: 'Makênia Olveira S. Gomes', periodo: '2004.2', curso: 'Ciências Biológicas', apelido: 'Makênia', foto: '/memorial/makenia.jpg' },
  { name: 'Soraya Martins Malacarne', periodo: '2005.1', curso: 'Eng. Geológica', apelido: 'Coxão', foto: '/memorial/coxao.jpg' },
  { name: 'Thaís Helena Rossi de Souza ', periodo: '2006', curso: 'Artes Cênicas', apelido: 'Thc', foto: '/memorial/thc.jpg' },
  { name: 'Danielle Gusmão', periodo: '2006.2', curso: 'Nutrição', apelido: 'Dane', foto: '/memorial/dane.jpg' },
  { name: 'Marina Macêdo', periodo: '2008', curso: 'Direito ', apelido: 'Marina', foto: '/memorial/marina.jpg' },
  { name: 'Angélica Freitas ', periodo: '2008.2', curso: 'Direito', apelido: 'Angel', foto: '/memorial/angel.jpg' },
  { name: 'Ellen Delgado Fernandes', periodo: '2009.2', curso: 'Eng. Geológica', apelido: 'Ellen', foto: '/memorial/ellen.jpg' },
  { name: 'Carla Trindade Valio', periodo: '2009.2', curso: 'Eng. Ambiental', apelido: 'Carla', foto: '/memorial/carla.jpg' },
  { name: 'Renata Gouveia da Silva', periodo: '2010.2', curso: 'Turismo', apelido: 'Kta-flan', foto: '/memorial/ktaflan.jpg' },
  { name: 'Isabela Barreto Hildebrand Madureira', periodo: '2010.2', curso: 'Turismo', apelido: 'Isabela', foto: '/memorial/isabela.jpg' },
  { name: 'Juliana Ferreira Victor Tófoli ', periodo: '2011.2', curso: 'Ciências Biológicas ', apelido: 'Jú', foto: '/memorial/ju.jpg' },
  { name: 'Alice Leite', periodo: '2012.1', curso: 'Ciência Biológica', apelido: 'Alice', foto: '/memorial/alice.jpg' },
  { name: 'Isabela Vasconcelos Piva ', periodo: '2013.2', curso: 'letras', apelido: 'Pira', foto: '/memorial/pira.jpg' },
  { name: 'Paula Nobre dos Reis', periodo: '2014.1', curso: 'Turismo', apelido: 'Paula', foto: '/memorial/paula.jpg' },
  { name: 'Bruna Gonçalves', periodo: '2014.1', curso: 'História', apelido: 'Virtual', foto: '/memorial/virtual.jpg' },
  { name: 'Flávia Martinez Gobato', periodo: '2016.1', curso: 'Jornalismo', apelido: 'Kátia Frávia', foto: '/memorial/katiaflavia.jpg' },
  { name: 'Bárbara Zambelli Azevedo', periodo: '2016.2', curso: 'Eng. Geológica ', apelido: 'Tumé', foto: '/memorial/tume.jpg' },
  { name: 'Fernanda Rodrigues Bertão', periodo: '2017.1', curso: 'Arquitetura e Urbanismo', apelido: 'Franga', foto: '/memorial/franga.jpg' },
  { name: 'Marcelle Henrique de Ávila ', periodo: '2018.1', curso: 'Arquitetura e Urbanismo', apelido: 'Lag', foto: '/memorial/lag.jpg' },
  { name: 'Sara Pinheiro Câmara ', periodo: '2018.2', curso: 'Eng. de Controle de Automação', apelido: 'Da Seda', foto: '/memorial/daseda.jpg' },
  { name: 'Thais Alves Rosa Matos ', periodo: '2019.2', curso: 'Ciências Biológicas ', apelido: 'Slow', foto: '/memorial/slow.jpg' },
  { name: 'Carolina Fávero', periodo: '', curso: 'Eng. Geológica', apelido: '', foto: '/memorial/carol.jpg' },
  { name: 'Vera', periodo: '', curso: '', apelido: 'Vera', foto: '/memorial/vera.jpg' },
  { name: 'Lizandra', periodo: '', curso: '', apelido: 'Lizandra', foto: '/memorial/lizandra.jpg' },
  { name: 'Maximiza', periodo: '', curso: '', apelido: 'Maximiza', foto: '/memorial/maximiza.jpg' },
  { name: '', periodo: '', curso: '', apelido: '', foto: '/memorial/rebuhomenageada.jpg' },
  { name: 'Ines', periodo: '', curso: '', apelido: 'Ines', foto: '/memorial/ines.jpg' },
  { name: 'Maria Inês de Moura', periodo: '', curso: '', apelido: 'Maria Ines', foto: '/memorial/mariaines.jpg' },
  { name: 'Maria Aparecida Aquino', periodo: '', curso: '', apelido: 'Maria Aparecida', foto: '/memorial/mariaaparecida.jpg' },
  { name: '', periodo: '', curso: '', apelido: 'Alemão', foto: '/memorial/alemao.jpg' },
  { name: 'Valéria', periodo: '', curso: '', apelido: 'Valéria', foto: '/memorial/valeria.jpg' },
  { name: 'Lúcia Cardoso Paixão', periodo: '1981', curso: 'Eng. Metalúrgica', apelido: 'Lucia', foto: '/memorial/lucia.jpg' },
  { name: 'Maria Telma da Silva', periodo: '1980', curso: 'Eng. de Minas ', apelido: '', foto: '/memorial/mariatelma.jpg' },
  { name: 'Sandra', periodo: '', curso: '', apelido: '', foto: '/memorial/sandra.jpg' },
  { name: 'Ladario de Calais Júnior', periodo: '2000', curso: 'Eng. Metalúrgica ', apelido: 'Batrákio', foto: '/memorial/ladario.jpg' },
  { name: 'Helena Ribeiro de Andrade Previato ', periodo: '2007', curso: 'Nutrição', apelido: 'Helinita', foto: '/memorial/helenita.jpg' },
  { name: 'Thiago Diniz', periodo: '2007.2', curso: 'Eng. de Produção ', apelido: 'Javardo', foto: '/memorial/javardo.jpg' },
  { name: 'Mariela de Oliveira Jesus Catarino', periodo: '2005.20', curso: 'Eng. Geológica ', apelido: '', foto: '/memorial/mariela.jpg' },
  { name: 'Paulo Simões', periodo: '2008 - 2011', curso: 'História', apelido: 'Garfield', foto: '/memorial/garfield.jpg' },
  { name: 'Milena Matos de Souza', periodo: '2002', curso: 'Serviço Social', apelido: '', foto: '/memorial/milena.jpg' },
  { name: 'Guilherme Leão', periodo: '', curso: '', apelido: 'Zina', foto: '/memorial/zina.jpg' },
  { name: 'Raquel Scares', periodo: '2000', curso: '', apelido: '', foto: '/memorial/raquel.jpg' },
  { name: 'Marcos Lins Coelho', periodo: '', curso: '', apelido: 'marcola', foto: '/memorial/marcola.jpg' },
  { name: '', periodo: '', curso: '', apelido: '', foto: '/memorial/semnome.jpg' },
  { name: 'Elza D Aquino Alves Marinho', periodo: '1990', curso: 'Eng. Química', apelido: 'Fofoneca', foto: '/memorial/fofoneca.jpg' },
  { name: 'Victor Wander da Silva Varandas ', periodo: '2004.2', curso: 'Eng. Metalúrgica', apelido: 'Conversado', foto: '/memorial/conversado.jpg' },

  //{ name: '', periodo: '', curso: '', apelido: '', foto: '/memorial/.jpg' },
  //, 
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
        
        {/* Seção 1: Hero - Destaque Principal */}
        <section className="py-20 bg-[#1A1A1A] text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#FF8C00]">
              Nosso Memorial de Ex Alunas e Homenageados
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
              Uma homenagem à força e ao legado de todas as mulheres e homenageados que construíram a história da República Rebu ao longo das décadas.
            </p>
          </div>
        </section>

        {/* Seção 2: Linha do Tempo e Contexto */}
        <section className="py-16 bg-[#F8F8F8]">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 border-l-4 border-[#D44700] pl-4 flex items-center">
                    <Calendar className="w-6 h-6 mr-2 text-[#D44700]" /> Linha do Tempo da Rebu
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    A história da Rebu é contada em gestões. Cada período marcou uma época, desde a fundação em 1975 até os dias atuais. O memorial é um arquivo vivo das gerações, tradições e conquistas que definiram a nossa república.
                </p>
                
                {/* CTA para a Galeria de Ex-Moradoras (Próxima Seção) */}
                <div className="text-center mt-12">
                   <Link 
                      href="#veteranas" // Link âncora para a próxima seção
                      className="inline-block border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold py-3 px-8 rounded-full hover:bg-[#1A1A1A] hover:text-white transition duration-300"
                    >
                      Ver Todas(os)&darr;
                    </Link>
                </div>
            </div>
        </section>

        {/* Seção 3: Galeria/Grid de Ex-Moradoras */}
        <section id="veteranas" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-12">
              Todas as Nossas Veteranas e homenageados
            </h2>
            
            {/* CORREÇÃO: Grid ajustado para no MÁXIMO 3 colunas em telas grandes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {exMoradorasData.map((moradora, index) => (
                    // Uso do index como key, já que os dados são repetidos
                    <MoradoraCard key={index} {...moradora} />
                ))}
            </div>

            {/* CTA para Contato/Envio de Dados */}
            <div className="text-center mt-16 bg-[#F8F8F8] p-8 rounded-xl border border-gray-200">
                 <h3 className="text-3xl font-bold text-[#D44700] mb-3">Você é uma Ex-Moradora?</h3>
                 <p className="text-lg text-gray-700 mb-6">Ajude-nos a manter nosso memorial atualizado. Entre em contato para incluir ou corrigir seus dados!</p>
                 <Link 
                    href="/contato" 
                    className="inline-block bg-[#D44700] text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:bg-[#FF8C00] transition duration-300 transform hover:scale-105"
                  >
                    Enviar Dados &rarr;
                  </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}