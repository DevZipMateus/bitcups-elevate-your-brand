import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Sparkles, Crown } from 'lucide-react';

export default function VitrineSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary-dark">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-light rounded-full blur-3xl opacity-20" />
      </div>

      {/* Floating icons */}
      <div className="absolute top-20 right-20 text-gold/20 animate-float">
        <Crown className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 left-20 text-orange/20 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-12 h-12" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-gold-light text-sm font-medium mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span>Catálogo Online</span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Explore Nossa{' '}
            <span className="text-gradient">Vitrine Virtual</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Descubra nossa coleção exclusiva de produtos personalizados. 
            Navegue por centenas de opções e encontre a peça perfeita para você ou sua empresa.
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-white font-semibold mb-2">+500 Produtos</h3>
              <p className="text-white/60 text-sm">Grande variedade para todos os gostos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Crown className="w-6 h-6 text-orange" />
              </div>
              <h3 className="text-white font-semibold mb-2">Qualidade Premium</h3>
              <p className="text-white/60 text-sm">Materiais selecionados com cuidado</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gold-light/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-gold-light" />
              </div>
              <h3 className="text-white font-semibold mb-2">Personalização</h3>
              <p className="text-white/60 text-sm">Deixe sua marca em cada peça</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/vitrine"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-gold text-primary-foreground font-bold text-xl rounded-xl shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <ShoppingBag className="w-6 h-6" />
              <span>Acessar Vitrine</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust text */}
          <p className="text-white/50 text-sm mt-6 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            Navegue sem compromisso • Orçamento grátis • Entrega para todo Brasil
          </p>
        </div>
      </div>
    </section>
  );
}
