// app/contato/page.tsx

"use client"; // Mantido para a funcionalidade do formulário

import { Header } from "../../components/shared/Header";
import { Footer } from "../../components/shared/Footer";
import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

// --- DADOS DE CONTATO ---
const contatoInfo = [
  {
    icon: Mail,
    label: "E-mail Principal",
    value: "repxequemate@gmail.com",
    href: "mailto:repxequemate@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone/WhatsApp",
    value: "Lucas Filipe",
    href: "https://wa.me/5531971527535",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value:
      "Campus Universitário - R. Quatorze, 7A - Morro do Cruzeiro, Ouro Preto",
    href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.641869509713!2d-43.5145662!3d-20.397650900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa40ae1a50abd6b%3A0x2af823ef73ae3ced!2sRep%C3%BAblica%20Xeque-Mate!5e0!3m2!1spt-BR!2sbr!4v1768002702539!5m2!1spt-BR!2sbr",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://www.instagram.com/republicarebu/",
    color: "text-pink-600 hover:text-pink-700",
  },
  {
    icon: Facebook,
    name: "Facebook",
    href: "https://www.facebook.com/rebuouropreto/photos?locale=pt_BR",
    color: "text-blue-600 hover:text-blue-700",
  },
];

// O BLOCO 'metadata' FOI REMOVIDO DAQUI E MOVIDO PARA 'app/contato/layout.tsx'

export default function Contato() {
  return (
    <>
      <Header />

      {/* Seção 1: Hero - Chamada */}

      {/* Seção 2: Formulário e Informações */}
      <main className="flex-grow">
        {/* Seção 3: Galeria/Grid de Ex-Moradoras */}
        <section id="veteranas" className="py-5 bg-rebu-acento">
          {/* Coluna 2: Informações de Contato Direto */}

          <h2 className="text-3xl font-extrabold text-center text-rebu-secondary mb-12">
            Canais de Comunicação
          </h2>
          <p className="text-center m-8 text-rebu-secondary mb-8">
            Quer conhecer a casa, tirar dúvidas sobre a UFOP ou entender como
            funciona nosso processo de moradia? Mande uma mensagem ou venha
            tomar um café conosco. Vai ser um prazer te receber!
          </p>
          {/* Grid Centralizado */}
          <div className="flex flex-col items-center mx-auto space-y-6 px-4">
            {/* O px-4 garante que em telas muito pequenas o card não encoste na borda do celular */}

            {contatoInfo.map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-6 
                 w-full max-w-md p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 mx-auto"
              >
                {/* w-full + max-w-md: 
         O card tentará ter a largura de um dispositivo mobile (full), 
         mas nunca passará de ~448px (md), mantendo-se elegante no desktop.
      */}

                <div className="flex-shrink-0 w-14 h-14 bg-rebu-primary rounded-full flex items-center justify-center shadow-lg shadow-rebu-primary/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <div className="flex-grow">
                  <p className="font-bold text-xs text-rebu-primary uppercase tracking-[0.2em] mb-1">
                    {item.label}
                  </p>
                  <Link
                    href={item.href}
                    className="text-lg font-bold text-rebu-secondary hover:text-rebu-primary transition break-all leading-tight"
                  >
                    {item.value}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Redes Sociais
          <div className="mt-10 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
              Siga a Rebu
            </h3>
            <div className="flex space-x-6 text-4xl">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition duration-300 ${item.color}`}
                  aria-label={item.name}
                >
                  <item.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div> */}
        </section>

        {/* Seção 3: Mapa (Opcional) */}
        <section className="bg-rebu-acento py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center text-rebu-secondary mb-12">
              Onde Estamos Localizados
            </h2>
            {/* Placeholder para o iframe do Google Maps */}
            <div className="w-full h-96 bg-gray-300 rounded-xl overflow-hidden shadow-lg">
              <div className="flex items-center justify-center w-full h-full text-gray-700 font-semibold">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.641869509713!2d-43.5145662!3d-20.397650900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa40ae1a50abd6b%3A0x2af823ef73ae3ced!2sRep%C3%BAblica%20Xeque-Mate!5e0!3m2!1spt-BR!2sbr!4v1768002702539!5m2!1spt-BR!2sbr"
                  loading="lazy"
                  height="100%"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
