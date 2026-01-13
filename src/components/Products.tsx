import { Gift } from 'lucide-react';
import productMugs from '@/assets/product-mugs.jpg';
import productKeychains from '@/assets/product-keychains.jpg';
import productShirts from '@/assets/product-shirts.jpg';
import productFrames from '@/assets/product-frames.jpg';

const products = [
  {
    name: 'Canecas personalizadas',
    description: 'Canecas de porcelana e polímero com impressão de alta qualidade. Perfeitas para presentes, brindes corporativos e uso pessoal.',
    image: productMugs,
  },
  {
    name: 'Chaveiros',
    description: 'Diversos modelos personalizados em formatos variados. Ideais para lembranças, eventos e promoções.',
    image: productKeychains,
  },
  {
    name: 'Camisas e vestuário',
    description: 'Vestuário personalizado para eventos, empresas e uso pessoal. Alta qualidade de impressão e tecido.',
    image: productShirts,
  },
  {
    name: 'Quadros e decoração',
    description: 'Quadros personalizados com fotos e artes. Transforme suas memórias em decoração elegante.',
    image: productFrames,
  },
];

const additionalProducts = [
  'Sandálias personalizadas',
  'Copos e garrafas térmicas',
  'Azulejos decorativos',
  'Almofadas personalizadas',
  'Mousepad',
  'Agendas e cadernos',
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

        {/* Products Grid with Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-card transition-all duration-300 hover:shadow-xl hover:border-primary/30"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-gold/0 group-hover:bg-gradient-gold/5 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Additional Products */}
        <div className="bg-card rounded-2xl border border-border p-8 shadow-soft">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-gold rounded-xl">
              <Gift className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground">
              E muito mais produtos disponíveis
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {additionalProducts.map((product) => (
              <span
                key={product}
                className="px-4 py-2 bg-secondary rounded-full text-foreground text-sm font-medium"
              >
                {product}
              </span>
            ))}
          </div>

          <p className="mt-6 text-muted-foreground">
            Entre em contato para conhecer nosso catálogo completo e solicitar um orçamento personalizado.
          </p>
        </div>
      </div>
    </section>
  );
}
