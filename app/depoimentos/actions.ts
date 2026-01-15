'use server';

import { authOptions } from "@/app/api/auth/auth.config";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { adminDB } from "@/lib/firebaseAdmin";

export async function submitComment(comentario: string) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return {
      success: false,
      message: "Usuário não autenticado. Faça login para comentar."
    };
  }

  if (comentario.length < 10) {
    return {
      success: false,
      message: "O comentário deve ter no mínimo 10 caracteres."
    };
  }

  try {
    const autorImagem =
      session.user.image ??
      `https://ui-avatars.com/api/?name=${encodeURIComponent(
        session.user.name ?? session.user.email
      )}&background=D44700&color=fff&rounded=true&size=128`;

    await adminDB.collection("depoimentos").add({
      autorNome: session.user.name ?? session.user.email,
      autorEmail: session.user.email,
      autorImagem,
      texto: comentario,
      createdAt: new Date(),
      aprovado: false,
    });

    revalidatePath("/experiencias");

    return { success: true, message: "Comentário enviado para aprovação!" };
  } catch (error) {
    console.error("Erro ao salvar no Firestore:", error);
    return { success: false, message: "Erro interno ao salvar o depoimento." };
  }
}


