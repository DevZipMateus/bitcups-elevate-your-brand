import { Crown, Target, Heart, TrendingUp, Sparkles, Users } from 'lucide-react';
import aboutCraftsmanship from '@/assets/about-craftsmanship.jpg';
import ScrollReveal from './ScrollReveal';

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
    <section id="sobre" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 -right-20 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-gradient-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-orange/5 rounded-full blur-3xl" />
      
      {/* Floating crown elements - hidden on mobile */}
      <div className="hidden sm:block absolute top-40 right-10 w-8 h-8 opacity-5">
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-primary">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>
      <div className="hidden sm:block absolute bottom-40 left-10 w-12 h-12 opacity-5">
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-primary">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>

      <div className="section-container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-secondary text-primary font-semibold text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
              Nossa história
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Sobre a <span className="text-gradient">Bitcups</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Uma jornada de reconstrução, criatividade e conquistas
            </p>
          </div>
        </ScrollReveal>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-10 sm:mb-14 md:mb-20">
          {/* Image */}
          <ScrollReveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutCraftsmanship}
                alt="Artesão trabalhando em caneca personalizada na oficina Bitcups"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Decorative elements - smaller on mobile */}
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-gold rounded-xl sm:rounded-2xl -z-10" />
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-secondary rounded-lg sm:rounded-xl -z-10" />
          </ScrollReveal>

          {/* Story Text */}
          <ScrollReveal direction="right" className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -left-2 sm:-left-4 top-0 bottom-0 w-1 bg-gradient-gold rounded-full" />
              <div className="pl-4 sm:pl-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3 sm:mb-4">
                  Da ideia à realização
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  A Bitcups nasceu em um momento de dificuldade, quando parecia impossível prosperar. O nome surgiu inspirado na estética pixel art - pequenos fragmentos que se unem para formar algo completo.
                </p>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                  "Bit" representa o fragmento e carrega a sonoridade de "Beat" (batida e ritmo). "Cups" conecta a marca ao produto. A coroa quebrada simboliza a ruptura com a antiga realidade e a reconstrução de um novo caminho.
                </p>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Hoje, operamos com mentalidade de fábrica de alta potência, processos bem definidos e foco em qualidade. Somos únicos, autênticos e não replicáveis.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Vision/Mission Cards */}
        <ScrollReveal delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-card shadow-card border border-border">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-1.5 sm:p-2 bg-gradient-gold rounded-lg">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-foreground">Visão</h3>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Ser uma das maiores referências em brindes e produtos personalizados no Brasil, reconhecida pela força do conceito e excelência operacional.
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-card shadow-card border border-border">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-1.5 sm:p-2 bg-gradient-gold rounded-lg">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-foreground">Missão</h3>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Produzir e distribuir brindes personalizados com alto padrão de qualidade, oferecendo soluções criativas com processos industriais eficientes.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Values Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 0.1}>
              <div
                className="group p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card h-full"
              >
                <div className="p-2 sm:p-3 bg-secondary rounded-lg sm:rounded-xl w-fit mb-2 sm:mb-3 md:mb-4 group-hover:bg-gradient-gold transition-all duration-300">
                  <value.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-display font-bold text-foreground mb-1 sm:mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
