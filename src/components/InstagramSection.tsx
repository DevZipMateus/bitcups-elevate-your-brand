import { Instagram, Heart, MessageCircle, Users } from 'lucide-react';

export default function InstagramSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-white rounded-full blur-3xl" />
      </div>

      {/* Floating Instagram icons */}
      <div className="absolute top-16 left-16 text-white/10 animate-float">
        <Heart className="w-12 h-12" />
      </div>
      <div className="absolute bottom-16 right-16 text-white/10 animate-float" style={{ animationDelay: '0.5s' }}>
        <MessageCircle className="w-10 h-10" />
      </div>
      <div className="absolute top-1/2 right-32 text-white/10 animate-float" style={{ animationDelay: '1s' }}>
        <Instagram className="w-8 h-8" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Instagram icon badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 animate-fade-up">
            <Instagram className="w-10 h-10 text-white" />
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Siga a gente no{' '}
            <span className="underline decoration-white/50 decoration-4 underline-offset-4">Instagram</span>
          </h2>

          {/* Handle */}
          <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-6 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            @debitcups
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Acompanhe nossos bastidores, novidades, promoções exclusivas e inspire-se com nossos produtos personalizados!
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 text-white">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">Novidades diárias</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Comunidade ativa</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Atendimento rápido</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://www.instagram.com/debitcups/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#E1306C] font-bold text-xl rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)]"
            >
              <Instagram className="w-6 h-6" />
              <span>Seguir @debitcups</span>
            </a>
          </div>

          {/* Trust text */}
          <p className="text-white/60 text-sm mt-6 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            Fique por dentro de tudo • Promoções exclusivas • Conteúdo inspirador
          </p>
        </div>
      </div>
    </section>
  );
}
