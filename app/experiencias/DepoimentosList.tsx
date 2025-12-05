import { adminDB } from "@/lib/firebaseAdmin";
import { unstable_noStore as noStore } from "next/cache";
import { Timestamp } from "firebase-admin/firestore";
import { MessageSquare, User } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Depoimento {
  id: string;
  autor: string;
  autorImagem?: string;
  periodo: string;
  texto: string;
  createdAt: string;
}

async function getDepoimentos(): Promise<Depoimento[]> {
  // Desativa o cache do Next.js para esta função
  noStore();

  const snapshot = await adminDB
    .collection("depoimentos")
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    let imagemURL = data.autorImagem as string | undefined; // Assume que pode ser string ou undefined

    // ⚠️ CORREÇÃO DE URL EXPLÍCITA ⚠️
    if (imagemURL) {
        // Verifica o placeholder INACESSÍVEL e protocolo HTTP
        const isInvalidPlaceholder = imagemURL.includes('/profile/picture/0');
        const isHttpProtocol = imagemURL.startsWith('http://');

        if (isInvalidPlaceholder || isHttpProtocol) {
            // Se for inválido ou inseguro, forçamos a URL a ser nula (undefined)
            // para que o ícone de fallback (<User/>) seja renderizado.
            imagemURL = undefined;
        } else {
            // Se for um URL válido, mas por acaso não tem HTTPS, forçamos para evitar mixed content
            imagemURL = imagemURL.replace('http://', 'https://');
        }
    }

    return {
      id: doc.id,
      autor: data.autorNome || "Usuário Rebu",
      autorImagem: imagemURL, // Usa o URL corrigido ou undefined (para fallback)
      periodo: "Membro da Comunidade",
      texto: data.texto,
      createdAt: data.createdAt
        ? data.createdAt.toDate().toLocaleString("pt-BR", {
          // ... formatação de data
        })
        : "Data desconhecida",
    };
  });
}

export default async function DepoimentosList() {
  const depoimentosData = await getDepoimentos();

  return (
    <section className="py-16 sm:py-20 bg-rebu-aceto">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-rebu-secondary mb-10 sm:mb-12 flex items-center justify-center">
          <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-rebu-primary" /> Depoimentos
        </h2>

        {/* Alteração principal aqui: Usando 'grid-cols-1' no mobile e 'md:grid-cols-2' para tablets e desktops. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {depoimentosData.length > 0 ? (
            depoimentosData.map((dep) => (
              <div
                key={dep.id}
                className="p-8 bg-white rounded-xl shadow-lg text-center border-b-4 border-rebu-primary"
              >
                <div className="flex items-center mb-3">
                  {dep.autorImagem ? (
                    // Trocamos o componente Image pelo elemento <img> padrão
                    <img
                      src={dep.autorImagem}
                      alt={dep.autor}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full mr-3 object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full mr-3 bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-rebu-secondary" />
                    </div>
                  )}
                  <div className="overflow-hidden">
                    <span className="text-base font-semibold text-rebu-secondary truncate block">
                      {dep.autor}
                    </span>
                    <p className="text-xs text-rebu-secondary italic truncate">
                      {dep.periodo}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-rebu-secondary mb-3 border-t pt-2 mt-2">
                  Postado em: {dep.createdAt}
                </p>
                {/* Garantir que o texto quebre corretamente para evitar overflow */}
                <p className="text-sm sm:text-base text-rebu-secondary leading-relaxed break-words">
                  {dep.texto}
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-1 md:col-span-2 text-center text-base sm:text-lg text-rebu-secondary p-5 border rounded-lg bg-gray-50">
              💌 Seja a primeira a deixar um depoimento! Compartilhe sua experiência.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

