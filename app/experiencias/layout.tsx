// app/experiencias/layout.tsx

export const metadata = {
  title: 'Experiências Rebu | Deixe seu Depoimento e Comentário',
  description: 'Leia os depoimentos de ex-moradoras e visitantes. Faça login com o Google para compartilhar sua própria experiência na República Rebu.',
};

export default function ExperienciasLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}