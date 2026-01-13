import { Gift } from 'lucide-react';
import productMugs from '@/assets/product-mugs.jpg';
import productPolymerMug from '@/assets/product-polymer-mug.jpg';
import productKeychains from '@/assets/product-keychains.jpg';
import productShirts from '@/assets/product-shirts.jpg';
import productFrames from '@/assets/product-frames.jpg';
import productSandals from '@/assets/product-sandals.jpg';
import productCups from '@/assets/product-cups.jpg';
import productBottles from '@/assets/product-bottles.jpg';
import { useParallax } from '@/hooks/useParallax';

const products = [
  {
    name: 'Canecas de porcelana',
    description: 'Alta qualidade e durabilidade para seu café especial. Impressão vibrante que não desbota.',
    image: productMugs,
  },
  {
    name: 'Canecas de polímero',
    description: 'Leves, resistentes e perfeitas para sublimação. Cores vibrantes e duradouras.',
    image: productPolymerMug,
  },
  {
    name: 'Chaveiros',
    description: 'Diversos modelos personalizados em formatos variados. Ideais para lembranças e eventos.',
    image: productKeychains,
  },
  {
    name: 'Quadros e decoração',
    description: 'Quadros personalizados com fotos e artes. Transforme memórias em decoração elegante.',
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
  const parallaxOffset = useParallax(0.08);

  return (
    <section id="produtos" className="py-20 lg:py-28 bg-secondary/50 relative overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute -top-20 left-1/4 w-96 h-96 bg-gradient-gold/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset * 3}px)` }}
      />
      <div 
        className="absolute -bottom-20 right-1/4 w-80 h-80 bg-orange/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset * -2}px)` }}
      />
      
      {/* Floating decorative elements */}
      <div 
        className="absolute top-32 right-20 w-6 h-6 opacity-10"
        style={{ transform: `translateY(${parallaxOffset * 4}px) rotate(${parallaxOffset * 0.2}deg)` }}
      >
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-primary">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>
      <div 
        className="absolute bottom-32 left-20 w-10 h-10 opacity-10"
        style={{ transform: `translateY(${parallaxOffset * -3}px) rotate(${parallaxOffset * -0.15}deg)` }}
      >
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-primary">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-gold text-primary-foreground font-semibold text-sm rounded-full mb-4">
            Catálogo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Nossos <span className="text-gradient">produtos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Todos os produtos são personalizados com artes exclusivas e alto padrão de qualidade
          </p>
        </div>

        {/* Products Grid with Images and Parallax */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-card transition-all duration-300 hover:shadow-xl hover:border-primary/30"
              style={{ transform: `translateY(${parallaxOffset * (0.3 + (index % 4) * 0.2)}px)` }}
            >
              {/* Image with parallax effect inside */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ transform: `scale(1.05) translateY(${parallaxOffset * 0.1}px)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Title overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-display font-bold text-white">
                    {product.name}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-gold/0 group-hover:bg-gradient-gold/5 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className="bg-card rounded-2xl border border-border p-8 shadow-soft text-center"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-gold rounded-xl">
              <Gift className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground">
              E muito mais!
            </h3>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Trabalhamos também com azulejos, almofadas, mousepads, agendas e diversos outros produtos personalizados.
            Entre em contato para conhecer nosso catálogo completo.
          </p>

          <a
            href="https://wa.me/5571982602013"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-lg shadow-gold transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
