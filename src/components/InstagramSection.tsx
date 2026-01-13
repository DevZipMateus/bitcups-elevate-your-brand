import { Instagram, Heart, MessageCircle, Users } from 'lucide-react';

export default function InstagramSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 sm:right-20 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 sm:left-20 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-white rounded-full blur-3xl" />
      </div>

      {/* Floating Instagram icons - hidden on mobile */}
      <div className="hidden sm:block absolute top-16 left-8 sm:left-16 text-white/10 animate-float">
        <Heart className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" />
      </div>
      <div className="hidden sm:block absolute bottom-16 right-8 sm:right-16 text-white/10 animate-float" style={{ animationDelay: '0.5s' }}>
        <MessageCircle className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10" />
      </div>
      <div className="hidden md:block absolute top-1/2 right-20 md:right-32 text-white/10 animate-float" style={{ animationDelay: '1s' }}>
        <Instagram className="w-6 md:w-8 h-6 md:h-8" />
      </div>

      <div className="section-container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Instagram icon badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl mb-4 sm:mb-6 animate-fade-up">
            <Instagram className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
          </div>

          {/* Main heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-3 sm:mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Siga a gente no{' '}
            <span className="underline decoration-white/50 decoration-2 sm:decoration-4 underline-offset-2 sm:underline-offset-4">Instagram</span>
          </h2>

          {/* Handle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-semibold mb-4 sm:mb-6 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            @debitcups
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 animate-fade-up px-2" style={{ animationDelay: '0.2s' }}>
            Acompanhe nossos bastidores, novidades, promoções exclusivas e inspire-se com nossos produtos personalizados!
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center gap-2 text-white">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-sm sm:text-base">Novidades diárias</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-sm sm:text-base">Comunidade ativa</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-sm sm:text-base">Atendimento rápido</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://www.instagram.com/debitcups/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-[#E1306C] font-bold text-sm sm:text-base md:text-lg lg:text-xl rounded-lg sm:rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)]"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Seguir @debitcups</span>
            </a>
          </div>

          {/* Trust text */}
          <p className="text-white/60 text-xs sm:text-sm mt-4 sm:mt-6 animate-fade-up px-2" style={{ animationDelay: '0.5s' }}>
            Fique por dentro de tudo • Promoções exclusivas • Conteúdo inspirador
          </p>
        </div>
      </div>
    </section>
  );
}
