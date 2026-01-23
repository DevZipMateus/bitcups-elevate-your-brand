import { Gift } from 'lucide-react';
import productMugs from '@/assets/product-mugs.png';
import productPolymerMug from '@/assets/product-polymer-mug.png';
import productKeychains from '@/assets/product-keychains.png';
import productShirts from '@/assets/product-shirts.jpg';
import productFrames from '@/assets/product-frames.jpg';
import productSandals from '@/assets/product-sandals.jpg';
import productCups from '@/assets/product-cups.jpg';
import productBottles from '@/assets/product-bottles.jpg';
import ScrollReveal from './ScrollReveal';

const products = [
  {
    name: 'Canecas de porcelana',
    description: 'Alta qualidade e durabilidade para seu café especial. Impressão vibrante que não desbota.',
    image: productMugs,
  },
  {
    name: 'Canecas de polímero',
    description: 'Leves e resistentes. Cores vibrantes que não desbota.',
    image: productPolymerMug,
  },
  {
    name: 'Chaveiros',
    description: 'Diversos modelos em formatos variados. Ideais para lembranças e eventos.',
    image: productKeychains,
  },
  {
    name: 'Quadros e decoração',
    description: 'Quadros em diversos materiais, com estilos e artes únicas.',
    image: productFrames,
  },
  {
    name: 'Camisas e vestuário',
    description: 'Vestuário personalizado para eventos, empresas e uso pessoal. Alta qualidade de impressão.',
    image: productShirts,
  },
  {
    name: 'Sandálias',
    description: 'Conforto e estilo com sua marca estampada. Personalize com artes exclusivas.',
    image: productSandals,
  },
  {
    name: 'Copos',
    description: 'Variedade de modelos para todas as ocasiões. Perfeitos para presentes e brindes.',
    image: productCups,
  },
  {
    name: 'Garrafas térmicas',
    description: 'Garrafas térmicas personalizadas para o dia a dia. Mantenha sua bebida na temperatura ideal.',
    image: productBottles,
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-secondary/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-gold/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 right-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-orange/5 rounded-full blur-3xl" />
      
      {/* Floating decorative elements - hidden on mobile */}
      <div className="hidden sm:block absolute top-32 right-10 md:right-20 w-6 h-6 opacity-10">
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-primary">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>
      <div className="hidden sm:block absolute bottom-32 left-10 md:left-20 w-10 h-10 opacity-10">
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-primary">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>

      <div className="section-container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-gold text-primary-foreground font-semibold text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
              Catálogo
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Nossos <span className="text-gradient">produtos</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Todos os produtos são personalizados com artes exclusivas e alto padrão de qualidade
            </p>
          </div>
        </ScrollReveal>

        {/* Products Grid with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 0.05}>
              <div
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-card border border-border shadow-card transition-all duration-300 hover:shadow-xl hover:border-primary/30 h-full"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="text-base sm:text-lg font-display font-bold text-white">
                      {product.name}
                    </h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-3 sm:p-4">
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {product.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-gold/0 group-hover:bg-gradient-gold/5 transition-all duration-300 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="bg-card rounded-xl sm:rounded-2xl border border-border p-4 sm:p-6 md:p-8 shadow-soft text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-gradient-gold rounded-lg sm:rounded-xl">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-foreground">
                E muito mais!
              </h3>
            </div>
            
            <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 max-w-xl mx-auto px-2">
              A Bitcups cresce junto com suas ideias, trazendo constantemente novos produtos e soluções personalizadas.
              Novas atualizações serão realizadas de forma contínua.
            </p>

            <a
              href="https://wa.me/5571982602013"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-gold text-primary-foreground font-bold text-sm sm:text-base rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Solicitar orçamento
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
