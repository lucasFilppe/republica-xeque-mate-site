// components/shared/Header.tsx

'use client'; // 1. Torna o componente interativo (permite usar useState)

import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react'; // 2. Importa o hook useState
import { Menu, X } from 'lucide-react'; // Ícones para abrir e fechar o menu

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'A República', href: '/a-republica' },
  { name: 'A Casa', href: '/a-casa' },
  { name: 'Processo Seletivo', href: '/processo-seletivo' },
  { name: 'Memorial', href: '/memorial' },
  { name: 'Experiências', href: '/experiencias' },
  { name: 'Contato', href: '/contato' },
];

export const Header = () => {
  // 3. Estado para controlar se o menu mobile está aberto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 4. Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#1A1A1A] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo da República */}
        <Link href="/" className="flex items-center p-1">
          <div className="relative w-15 h-15 sm:w-32 sm:h-32 md:w-28 md:h-28 lg:w-24 lg:h-24 
                  rounded-full overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo-rebu.jpg"
              alt="Logo REBU - República Estudantil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>


        {/* Navegação Desktop - visível em telas maiores */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-white text-2xl hover:text-[#FF8C00] font-medium transition duration-300">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Botão de Menu para mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu} // 5. Adiciona o evento de clique
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {/* Alterna entre ícone X (fechar) e Menu (abrir) */}
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 6. Menu Dropdown Mobile - Visível apenas quando isMenuOpen é true */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden bg-[#2C2C2C] flex-col space-y-2 py-3 px-4 shadow-xl`}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={toggleMenu} // Fecha o menu ao clicar em um link
            className="text-white text-lg block py-2 px-3 hover:bg-[#3A3A3A] hover:text-[#FF8C00] transition duration-200 rounded-md"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};