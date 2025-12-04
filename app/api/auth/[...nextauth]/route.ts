// app/api/auth/[...nextauth]/route.ts (CORRIGIDO)

import NextAuth from "next-auth";
// 🎯 Importa as opções do arquivo recém-criado
import { authOptions } from "../auth.config"; 

// A função NextAuth recebe as opções importadas
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };