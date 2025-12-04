'use client'; 

import { Header } from '../../components/shared/Header'; 
import { Footer } from '../../components/shared/Footer'; 
import { useState } from 'react';
import { Send } from 'lucide-react'; 
import { useSession, signIn, signOut } from 'next-auth/react'; 
import { submitComment } from './actions'; 

// 🚨 O componente aceita React.ReactNode (que será o DepoimentosList)
export default function ClientExperiencias({ children }: { children: React.ReactNode }) {
  
    const { data: session, status } = useSession(); 
  
    const [comentario, setComentario] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); 
    
    const isAuthenticated = status === 'authenticated';
  
    const handleLoginGoogle = () => {
      signIn('google'); 
    };
    
    const handleLogoutGoogle = () => {
      signOut();
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (comentario.length < 10) {
            alert("O comentário deve ter pelo menos 10 caracteres.");
            return;
        }
        
        setIsSubmitting(true); 
        
        // Chamada da Server Action, que salva no Firestore e revalida o cache
        const result = await submitComment(comentario); 

        if (result.success) {
            alert("Comentário enviado com sucesso! A página será atualizada.");
            setComentario(''); 
        } else {
            alert(`Erro ao enviar: ${result.message}`);
        }
        
        setIsSubmitting(false); 
    };
  
    if (status === 'loading') {
      return (
          <>
              <Header />
              <main className="flex-grow py-32 text-center text-[#1A1A1A]">
                  <p className="text-xl font-semibold">Carregando status de autenticação...</p>
              </main>
              <Footer />
          </>
      );
    }


  return (
    <>
      <Header />

      <main className="flex-grow">
        
        {/* Seção 1: Hero - Chamada */}
        <section className="py-20 bg-[#1A1A1A] text-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#FF8C00]">
              Experiências e Depoimentos
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Leia o que ex-moradoras e visitantes dizem sobre o legado da Rebu.
            </p>
          </div>
        </section>
        
        {/* Seção 2: Formulário de Comentário */}
        <section className="py-16 bg-[#F8F8F8]">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-[#1A1A1A] mb-8">
              Compartilhe sua Experiência
            </h2>

            {/* FORMULÁRIO CONDICIONAL */}
            {isAuthenticated ? (
                // 🔐 Usuário Logado: Mostra o formulário
                <div className='p-6 bg-white rounded-xl shadow-lg space-y-4'>
                    <p className='text-md text-left text-gray-700 font-semibold'>
                        Olá, {session?.user?.name || 'Usuária'}! Deixe seu depoimento:
                        <button onClick={handleLogoutGoogle} className='ml-4 text-sm text-[#D44700] hover:text-[#FF8C00] font-medium'>(Sair da conta)</button>
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4 text-gray-600">
                        <textarea 
                            placeholder="Escreva seu depoimento sobre a Rebu..." 
                            rows={5} 
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value)}
                            required 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#D44700] focus:border-[#D44700] transition resize-none"
                        ></textarea>
                        
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`w-full bg-[#D44700] text-white font-bold py-3 rounded-lg text-lg transition duration-300 transform 
                                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FF8C00] hover:scale-[1.01]'}`}
                        >
                            {isSubmitting ? 'Enviando...' : (<><Send className="w-5 h-5 mr-2" /> Enviar Depoimento</>)}
                        </button>
                    </form>
                </div>
            ) : (
                // 🔓 Usuário Deslogado: Botão para Login
                <div className="p-8 bg-white rounded-xl shadow-lg text-center border-t-4 border-[#FF8C00]">
                    <p className="text-xl text-[#1A1A1A] mb-4">
                        Faça login para deixar seu comentário!
                    </p>
                    <button 
                        onClick={handleLoginGoogle}
                        className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition duration-300 shadow-md"
                    >
                        Entrar com Google
                    </button>
                </div>
            )}
          </div>
        </section>

        {/* 🚨 SEÇÃO 3: Renderiza o Server Component (DepoimentosList) que foi passado aqui! */}
        {children} 

      </main>

      <Footer />
    </>
  );
}
