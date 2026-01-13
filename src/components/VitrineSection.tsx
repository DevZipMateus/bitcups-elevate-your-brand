import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Sparkles, Crown } from 'lucide-react';

export default function VitrineSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-orange rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gold-light rounded-full blur-3xl opacity-30" />
      </div>

      {/* Floating icons - hidden on mobile */}
      <div className="hidden sm:block absolute top-20 right-10 sm:right-20 text-gold/30 animate-float">
        <Crown className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16" />
      </div>
      <div className="hidden sm:block absolute bottom-20 left-10 sm:left-20 text-orange/30 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" />
      </div>

      <div className="section-container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gold/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-up">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
            <span>Catálogo Online</span>
          </div>

          {/* Main heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary mb-4 sm:mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Explore Nossa{' '}
            <span className="text-gradient">Vitrine Virtual</span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-up px-2" style={{ animationDelay: '0.2s' }}>
            Descubra nossa coleção exclusiva de produtos personalizados. 
            Navegue por centenas de opções e encontre a peça perfeita para você ou sua empresa.
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-primary/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-primary/10">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gold/20 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                <ShoppingBag className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-gold" />
              </div>
              <h3 className="text-primary font-semibold text-sm sm:text-base mb-1 sm:mb-2">+500 Produtos</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">Grande variedade para todos os gostos</p>
            </div>
            <div className="bg-primary/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-primary/10">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-orange/20 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                <Crown className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-orange" />
              </div>
              <h3 className="text-primary font-semibold text-sm sm:text-base mb-1 sm:mb-2">Qualidade Premium</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">Materiais selecionados com cuidado</p>
            </div>
            <div className="bg-primary/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-primary/10">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gold-light/20 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                <Sparkles className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-gold" />
              </div>
              <h3 className="text-primary font-semibold text-sm sm:text-base mb-1 sm:mb-2">Personalização</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">Deixe sua marca em cada peça</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/vitrine"
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-gold text-primary-foreground font-bold text-sm sm:text-base md:text-lg lg:text-xl rounded-lg sm:rounded-xl shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Acessar Vitrine</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust text */}
          <p className="text-muted-foreground/70 text-xs sm:text-sm mt-4 sm:mt-6 animate-fade-up px-2" style={{ animationDelay: '0.5s' }}>
            Navegue sem compromisso • Orçamento grátis • Entrega para todo Brasil
          </p>
        </div>
      </div>
    </section>
  );
}
