'use client';

import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Sobre', href: '/' },
  { name: 'História', href: '/a-republica' },
  { name: 'Ex Alunos', href: '/memorial' },
  
  { name: 'A Casa', href: '/a-casa' },
  { name: 'Vagas', href: '/processo-seletivo' },
  { name: 'Experiências', href: '/experiencias' },
  { name: 'Contato', href: '/contato' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-rebu-secondary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center p-1">
          <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-20 lg:h-20 
              rounded-full overflow-hidden  border-rebu-primary">
            <Image
              src="/logo-xeque.jpg"
              alt="Logo xeque-mate - República Estudantil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-rebu-soft text-xl hover:text-rebu-primary font-medium transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-rebu-soft focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`${isMenuOpen ? 'flex' : 'hidden'} 
        md:hidden bg-rebu-secondary flex-col space-y-2 py-3 px-4 shadow-xl border-t border-rebu-primary`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={toggleMenu}
            className="text-rebu-soft text-lg block py-2 px-3 
              hover:bg-rebu-primary hover:text-black transition duration-200 rounded-md"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

