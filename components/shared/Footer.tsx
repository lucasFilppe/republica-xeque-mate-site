import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#D44700] text-white mt-auto"> {/* Fundo Preto Carvão */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between items-start border-b border-gray-700 pb-6 mb-6">

          {/* Informação da República */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-3 text-[#D44700]">República Rebu</h4> {/* Título Laranja Intenso */}
            <p className="text-white font-bold text-sm">
              <Link href="https://www.google.com/maps/dir//R.+do+Pilar,+61+-+Ouro+Preto,+MG,+35402-036/@-20.3866675,-43.5888749,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xa40ae10da5f051:0x33312d8b7f3cd363!2m2!1d-43.5064694!2d-20.3866913?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank"  className="hover:text-[#FF8C00] transition">
                Primeira República Federal Feminina de Ouro Preto.
                <br />
                Rua do Pilar, 61, Ouro Preto - MG
                
              </Link>
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-3 text-[#D44700]">Navegação</h4> {/* Título Laranja Intenso */}
            <ul className="space-y-2 font-bold text-sm">
              <li><Link href="/processo-seletivo" className="hover:text-[#FF8C00] transition">Processo Seletivo</Link></li> {/* Hover Laranja Chama */}
              <li><Link href="/memorial" className="hover:text-[#FF8C00] transition">Memorial das Ex-Moradoras e homenageados</Link></li>
              <li><Link href="/contato" className="hover:text-[#FF8C00] transition">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-3">Siga a Rebu</h4> {/* Título Laranja Intenso */}
            <div className="flex space-x-4 font-bold">
              <a href="https://www.instagram.com/republicarebu/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF8C00]transition">Instagram</a> {/* Hover Laranja Chama */}
              <a href="https://www.facebook.com/rebuouropreto/photos?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF8C00] transition">Facebook</a>
            </div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="text-center text-white text-sm pt-4 font-bold">
          &copy; {currentYear} República Rebu. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};