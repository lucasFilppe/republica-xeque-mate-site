// components/shared/SessionProvider.tsx

'use client';

// O SessionProvider deve ser importado da biblioteca next-auth/react
import { SessionProvider } from 'next-auth/react'; 
import React from 'react';

// Componente que você vai usar para envolver o seu Root Layout
export default function AuthProvider({ children }: { children: React.ReactNode }) {
  // Passa as props da sessão, embora o Auth.js as encontre automaticamente
  return <SessionProvider>{children}</SessionProvider>;
}