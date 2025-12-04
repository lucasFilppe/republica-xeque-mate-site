// app/experiencias/DepoimentosList.tsx
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query, Timestamp } from "firebase/firestore";
import { unstable_noStore as noStore } from "next/cache";
import { User, MessageSquare, Star } from 'lucide-react';
import React from 'react';
import Image from "next/image";

// Interface para o objeto de depoimento final (limpo)
interface Depoimento {
  id: string;
  autor: string;
  autorImagem?: string;
  periodo: string;
  texto: string;
  createdAt: string;
}

// Interface para os dados brutos vindos do Firestore
interface FirestoreDepoimentoData {
  autorNome: string;
  autorImagem?: string;
  texto: string;
  rating?: number;
  createdAt?: Timestamp; // 👈 Corrigido: tipagem correta
}

const DepoimentoCard: React.FC<Depoimento> = ({ autor, autorImagem, periodo, texto, createdAt }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#D44700]">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-xl font-bold text-[#1A1A1A] flex items-center">
        {autorImagem ? (
          <Image
            src={autorImagem}
            alt={autor}
            width={32}
            height={32}
            className="w-10 h-10 rounded-full mr-2 object-cover"
            unoptimized
          />

        ) : (
          <User className="w-5 h-5 mr-2 text-gray-500" />
        )}
        <span className="text-sm font-medium text-gray-700">{autor}</span>
      </h3>

      <span className="text-xs text-gray-700">{createdAt}</span>

    </div>
    <p className="text-sm text-gray-500 italic mb-3">{periodo}</p>
    <p className="text-gray-700 leading-relaxed">{texto}</p>
  </div>
);

async function getDepoimentos(): Promise<Depoimento[]> {
  noStore();

  const q = query(collection(db, "depoimentos"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => {
    const data = doc.data() as FirestoreDepoimentoData;

    return {
      id: doc.id,
      autor: data.autorNome || "Usuário Rebu",
      autorImagem: data.autorImagem || undefined,
      periodo: "Membro da Comunidade",
      texto: data.texto,
      createdAt: data.createdAt
        ? data.createdAt.toDate().toLocaleString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
        : "Data desconhecida",
    };
  });
}

export default async function DepoimentosList() {
  const depoimentosData = await getDepoimentos();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-12 flex items-center justify-center">
          <MessageSquare className="w-8 h-8 mr-3 text-[#D44700]" /> O que Dizem sobre a Rebu
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {depoimentosData.length > 0 ? (
            depoimentosData.map((dep) => <DepoimentoCard key={dep.id} {...dep} />)
          ) : (
            <p className="col-span-2 text-center text-lg text-gray-500">
              Seja a primeira a deixar um depoimento!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
