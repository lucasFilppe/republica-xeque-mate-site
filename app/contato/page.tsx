// app/contato/page.tsx

'use client'; // Mantido para a funcionalidade do formulário

import { Header } from '../../components/shared/Header'; 
import { Footer } from '../../components/shared/Footer'; 
import Link from 'next/link';
import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react'; 

// --- DADOS DE CONTATO ---
const contatoInfo = [
    { icon: Mail, label: 'E-mail Principal', value: 'reprebu@gmail.com', href: 'mailto:reprebu@gmail.com' },
    { icon: Phone, label: 'Telefone/WhatsApp', value: 'Laura Martins', href: 'https://wa.me/553198135259' },
    { icon: MapPin, label: 'Endereço', value: 'Rua do Pilar, 61, Ouro Preto - MG', href: 'https://www.google.com/maps/dir//R.+do+Pilar,+61+-+Ouro+Preto,+MG,+35402-036/@-20.3866675,-43.5888749,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xa40ae10da5f051:0x33312d8b7f3cd363!2m2!1d-43.5064694!2d-20.3866913?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D'},
];

const socialLinks = [
    { icon: Instagram, name: 'Instagram', href: 'https://www.instagram.com/republicarebu/', color: 'text-pink-600 hover:text-pink-700' },
    { icon: Facebook, name: 'Facebook', href: 'https://www.facebook.com/rebuouropreto/photos?locale=pt_BR', color: 'text-blue-600 hover:text-blue-700' },
];

// O BLOCO 'metadata' FOI REMOVIDO DAQUI E MOVIDO PARA 'app/contato/layout.tsx'

export default function Contato() {

    // Simples função de submissão 
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Mensagem enviada! A República Rebu entrará em contato em breve.');
        // Lógica de envio real (API, Formspree, etc.) viria aqui
    };

    return (
        <>
            <Header />

            <main className="flex-grow">
                
                {/* Seção 1: Hero - Chamada */}
                <section className="py-20 bg-[#1A1A1A] text-white">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#FF8C00]">
                            Fale Conosco
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 font-light">
                            Tire suas dúvidas sobre o processo seletivo, moradia e a vida em Ouro Preto.
                        </p>
                    </div>
                </section>

                {/* Seção 2: Formulário e Informações */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            
                            {/* Coluna 1: Formulário de Contato */}
                            <div>
                                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 border-l-4 border-[#D44700] pl-4">
                                    Envie sua Mensagem
                                </h2>
                                
                                {/** 
                                <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-[#F8F8F8] rounded-xl shadow-lg">
                                    
                                    <input 
                                        type="text" 
                                        placeholder="Seu Nome Completo" 
                                        required 
                                        className="text-gray-600 w-full p-3 border border-gray-300 rounded-lg focus:ring-[#D44700] focus:border-[#D44700] transition"
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="Seu Melhor E-mail" 
                                        required 
                                        className="text-gray-600 w-full p-3 border border-gray-300 rounded-lg focus:ring-[#D44700] focus:border-[#D44700] transition"
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Assunto (Ex: Dúvidas)" 
                                        required 
                                        className="text-gray-600 w-full p-3 border border-gray-300 rounded-lg focus:ring-[#D44700] focus:border-[#D44700] transition"
                                    />
                                    <textarea 
                                        placeholder="Sua Mensagem..." 
                                        rows={4} 
                                        required 
                                        className="text-gray-600 w-full p-3 border border-gray-300 rounded-lg focus:ring-[#D44700] focus:border-[#D44700] transition resize-none"
                                    ></textarea>
                                    
                                    <button 
                                        type="submit" 
                                        className="w-full bg-[#D44700] text-white font-bold py-3 rounded-lg text-lg hover:bg-[#FF8C00] transition duration-300 transform hover:scale-[1.01]"
                                    >
                                        Enviar Agora
                                    </button>
                                </form>*/}

                            </div>

                            {/* Coluna 2: Informações de Contato Direto */}
                            <div>
                                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 border-l-4 border-[#D44700] pl-4">
                                    Canais de Comunicação
                                </h2>
                                
                                <div className="space-y-8">
                                    {contatoInfo.map((item) => (
                                        <div key={item.label} className="flex items-center space-x-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-[#D44700] rounded-full flex items-center justify-center">
                                                <item.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-lg text-[#1A1A1A]">{item.label}</p>
                                                <Link href={item.href} className="text-gray-600 hover:text-[#D44700] transition">
                                                    {item.value}
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Redes Sociais */}
                                <div className="mt-10 pt-6 border-t border-gray-200">
                                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Siga a Rebu</h3>
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
                                                <item.icon className="w-8 h-8"/>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                
                {/* Seção 3: Mapa (Opcional) */}
                <section className="bg-[#F8F8F8] py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-[#1A1A1A] mb-8">
                            Onde Estamos Localizadas
                        </h2>
                        {/* Placeholder para o iframe do Google Maps */}
                        <div className="w-full h-96 bg-gray-300 rounded-xl overflow-hidden shadow-lg">
                            <div className="flex items-center justify-center w-full h-full text-gray-700 font-semibold">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.3076733554835!2d-43.50849310465773!3d-20.385762281076982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa40ae10da5f051%3A0x33312d8b7f3cd363!2sRepublica%20Rebu!5e0!3m2!1spt-BR!2sbr!4v1759364825041!5m2!1spt-BR!2sbr" 
                                height="100%" 
                                width="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe> 
                        
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}