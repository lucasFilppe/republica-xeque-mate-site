import type { Config } from 'tailwindcss';

const config: Config = {
  // Configuração padrão do Next.js App Router (ou pages, se for o caso)
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      // 1. PALETA DE CORES PERSONALIZADA
      colors: {
        // Agora você usará text-rebu-primary, bg-rebu-secondary, etc.
        'rebu-primary': '#D44700', // Laranja Intenso (Fogo) - Ação e Destaque
        'rebu-secondary': '#1A1A1A', // Preto Carvão - Estrutura e Fundo Escuro
        'rebu-acento': '#FF8C00', // Laranja Chama - Efeitos de Hover
        'rebu-soft': '#F8F8F8', // Fundo Suave - Fundo de Conteúdo
      },
      
      // 2. FONTES PERSONALIZADAS
      fontFamily: {
        // Fonte padrão para o corpo do texto (legível, vamos usar 'Inter' como fallback)
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        
        // Fonte para títulos grandes (você precisa importar a fonte 'Oswald' no _document.tsx ou _app.tsx)
        titulo: ['Oswald', 'sans-serif'], 
      },
    },
  },
  
  plugins: [],
}

export default config;