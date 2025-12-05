import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics"; // Analytics para o cliente
import { getFirestore } from "firebase/firestore"; // CRÍTICO para o Firestore

// Sua configuração do Firebase (valores fixos para garantir que o Server Component funcione)
// No ambiente de produção real, use process.env.NEXT_PUBLIC_...
const firebaseConfig = {
  apiKey: "AIzaSyA1JjQ1m7Lm0knch1G7VDbsU4co4ha6QPc",
  authDomain: "xeque-site-c35b2.firebaseapp.com",
  projectId: "xeque-site-c35b2",
  storageBucket: "xeque-site-c35b2.firebasestorage.app",
  messagingSenderId: "384790117484",
  appId: "1:384790117484:web:6e6240466251d594612c49",
  measurementId: "G-ZM5JPKLZ7H"
};

// 1. Inicializa o Firebase (evita reinicializar no Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 2. CRIA E EXPORTA a instância do Firestore (db)
// Este é o objeto que o collection() precisa como primeiro argumento.
export const db = getFirestore(app);

// 3. Inicialização CONDICIONAL do Analytics (CLIENT SIDE APENAS)
// Esta lógica evita o erro ReferenceError: window is not defined
let analytics;
// A verificação é assíncrona, mas o uso da função é síncrono aqui.
// Em um App Router, é melhor fazer o setup do Analytics em um "use client" wrapper.
// No entanto, para fins de Server Component, vamos apenas evitar a importação direta
// do getAnalytics fora da condição de isSupported se este arquivo for importado no servidor.

// Removendo a inicialização do Analytics daqui para evitar o erro,
// pois o arquivo é importado pelo Server Component DepoimentosList.tsx.
// A inicialização do Analytics deve ser feita em um arquivo "use client" separado.

// Exporta o app base
export { app };