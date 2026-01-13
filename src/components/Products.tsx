import { Coffee, KeyRound, Frame, Shirt, Footprints, GlassWater, Wine, Gift } from 'lucide-react';

const products = [
  {
    icon: Coffee,
    name: 'Canecas de porcelana',
    description: 'Alta qualidade e durabilidade para seu café especial.',
  },
  {
    icon: Coffee,
    name: 'Canecas de polímero',
    description: 'Leves, resistentes e perfeitas para sublimação.',
  },
  {
    icon: KeyRound,
    name: 'Chaveiros',
    description: 'Diversos modelos personalizados para sua marca.',
  },
  {
    icon: Frame,
    name: 'Quadros',
    description: 'Arte e decoração com sua identidade visual.',
  },
  {
    icon: Shirt,
    name: 'Camisas',
    description: 'Vestuário personalizado para eventos e empresas.',
  },
  {
    icon: Footprints,
    name: 'Sandálias',
    description: 'Conforto e estilo com sua marca estampada.',
  },
  {
    icon: GlassWater,
    name: 'Copos',
    description: 'Variedade de modelos para todas as ocasiões.',
  },
  {
    icon: Wine,
    name: 'Garrafas',
    description: 'Térmicas e personalizadas para o dia a dia.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 lg:py-28 bg-secondary/50">
      <div className="section-container">
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

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative p-6 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-card hover:border-primary/30"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="p-4 bg-gradient-gold rounded-2xl w-fit mb-5 shadow-gold/30 shadow-lg">
                  <product.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 p-4 bg-card rounded-2xl border border-border shadow-soft">
            <Gift className="w-6 h-6 text-primary" />
            <span className="text-foreground font-medium">
              E muito mais! Entre em contato para conhecer todo o catálogo.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
