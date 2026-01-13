import { Crown, Target, Heart, TrendingUp, Sparkles, Users } from 'lucide-react';
import aboutCraftsmanship from '@/assets/about-craftsmanship.jpg';

const values = [
  {
    icon: Crown,
    title: 'Qualidade sem concessões',
    description: 'Processos bem definidos, controle rigoroso e padrão elevado em cada produto.',
  },
  {
    icon: Users,
    title: 'Irmandade',
    description: 'Crescimento coletivo e parcerias baseadas em respeito e confiança.',
  },
  {
    icon: TrendingUp,
    title: 'Evolução constante',
    description: 'Aprimoramento contínuo em processos, tecnologia e design.',
  },
  {
    icon: Sparkles,
    title: 'Criatividade',
    description: 'Artes marcantes com impacto visual que elevam o posicionamento.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary text-primary font-semibold text-sm rounded-full mb-4">
            Nossa história
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Sobre a <span className="text-gradient">Bitcups</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma jornada de reconstrução, criatividade e conquistas
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutCraftsmanship}
                alt="Artesão trabalhando em caneca personalizada na oficina Bitcups"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-gold rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-xl -z-10" />
          </div>

          {/* Story Text */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-gold rounded-full" />
              <div className="pl-6">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Da ideia à realização
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Bitcups nasceu em um momento de dificuldade, quando parecia impossível prosperar. O nome surgiu inspirado na estética pixel art - pequenos fragmentos que se unem para formar algo completo.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Bit" representa o fragmento e carrega a sonoridade de "Beat" (batida e ritmo). "Cups" conecta a marca ao produto. A coroa quebrada simboliza a ruptura com a antiga realidade e a reconstrução de um novo caminho.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Hoje, operamos com mentalidade de fábrica de alta potência, processos bem definidos e foco em qualidade. Somos únicos, autênticos e não replicáveis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision/Mission Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-gradient-card shadow-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-gold rounded-lg">
                <Target className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Visão</h3>
            </div>
            <p className="text-muted-foreground">
              Ser uma das maiores referências em brindes e produtos personalizados no Brasil, reconhecida pela força do conceito e excelência operacional.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-card shadow-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-gold rounded-lg">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Missão</h3>
            </div>
            <p className="text-muted-foreground">
              Produzir e distribuir brindes personalizados com alto padrão de qualidade, oferecendo soluções criativas com processos industriais eficientes.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-secondary rounded-xl w-fit mb-4 group-hover:bg-gradient-gold transition-all duration-300">
                <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
