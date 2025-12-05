'use client'; 


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



  return (
    <>
        
      
        {/* Seção 2: Formulário de Comentário */}
        <section className="py-16 bg-rebu-acento">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-extrabold text-center text-rebu-secondary mb-12">
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
                            className={`w-full bg-rebu-primary text-white font-bold py-3 rounded-lg text-lg transition duration-300 transform 
                                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#FF8C00] hover:scale-[1.01]'}`}
                        >
                            {isSubmitting ? 'Enviando...' : (<><Send className="w-5 h-5 mr-2" /> Enviar Depoimento</>)}
                        </button>
                    </form>
                </div>
            ) : (
                // 🔓 Usuário Deslogado: Botão para Login
                <div className="p-8 bg-white rounded-xl shadow-lg text-center border-b-4 border-rebu-primary">
                    <p className="text-xl text-rebu-secundary mb-4">
                        Faça login para deixar seu comentário!
                    </p>
                    <button 
                        onClick={handleLoginGoogle}
                        className="mt-8 inline-block bg-rebu-primary text-rebu-secondary font-bold py-3 px-8 rounded-lg text-lg shadow-lg shadow-rebu-primary/50 hover:bg-rebu-secondary hover:text-rebu-soft hover:shadow-rebu-primary/60 transition duration-300 transform hover:scale-105"
                    >
                        Entrar com Google
                    </button>
                </div>
            )}
          </div>
        </section>

        {/* 🚨 SEÇÃO 3: Renderiza o Server Component (DepoimentosList) que foi passado aqui! */}
        {children} 
    </>
  );
}
