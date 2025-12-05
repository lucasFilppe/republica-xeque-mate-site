import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // Este é o domínio padrão para fotos de perfil do Google.
        hostname: 'lh3.googleusercontent.com', 
      },
      {
        protocol: 'https',
        // Incluindo este domínio também, caso a URL salva em seu Firestore 
        // use o domínio raiz, mas garantindo que o protocolo seja 'https'.
        hostname: 'googleusercontent.com', 
      },
      // Se você usa o Firebase Storage para imagens customizadas, adicione:
      /*
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com', 
      },
      */
    ],
  },
  /* outras config options aqui */
};

export default nextConfig;
