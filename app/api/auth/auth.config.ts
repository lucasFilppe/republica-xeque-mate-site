// app/api/auth/auth.config.ts

import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// 🎯 Exportamos o objeto de opções.
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  // Opcional: Aqui você pode adicionar callbacks ou páginas personalizadas
};