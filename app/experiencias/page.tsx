// app/experiencias/page.tsx (NOVA VERSÃO - SERVER COMPONENT PADRÃO)

// Não tem 'use client'
import ClientExperiencias from './ClientExperiencias';
import DepoimentosList from './DepoimentosList';

// O Server Component Principal que junta tudo
export default function ExperienciasPage() {

    return (
        // O DepoimentosList (que é async) é renderizado aqui e passado
        // como children para o ClientExperiencias, resolvendo o problema de Promise.
        <ClientExperiencias>
            {/* O React aguarda a resolução do DepoimentosList (fetch do Firebase) antes de renderizar ClientExperiencias */}
            <DepoimentosList /> 
        </ClientExperiencias>
    );
}