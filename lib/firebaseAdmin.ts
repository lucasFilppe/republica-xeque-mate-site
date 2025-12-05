import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// ===================================================================
// Firebase Admin SDK (funciona localmente e no Vercel)
// ===================================================================
const rawPrivateKey = process.env.FIREBASE_PRIVATE_KEY;

// 1. Segurança: impede erro silencioso se a chave não estiver configurada.
if (!rawPrivateKey) {
  throw new Error("FIREBASE_PRIVATE_KEY não encontrada nas variáveis de ambiente.");
}

// 2. CORREÇÃO CRÍTICA: 
// A variável de ambiente armazena '\n' como caracteres literais. 
// O formato PEM (que a função cert espera) requer quebras de linha reais.
// Este método substitui o literal "\n" pela quebra de linha real.
const correctedPrivateKey = rawPrivateKey.replace(/\\n/g, '\n');

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // 3. Usa a chave corrigida
      privateKey: correctedPrivateKey, 
    }),
  });
}

// Exporta a instância do Firestore para uso em funções de backend
export const adminDB = getFirestore();



