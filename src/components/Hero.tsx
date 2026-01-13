import logoBitcups from '@/assets/logo-bitcups.png';
import heroBackground from '@/assets/hero-background.jpg';

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Produtos personalizados Bitcups - canecas, chaveiros, camisas e mais"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Floating Crown Elements */}
      <div 
        className="absolute top-1/4 left-10 w-20 h-20 opacity-10 animate-float"
        style={{ animationDelay: '0s' }}
      >
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-gold">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 opacity-5">
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-gold-light">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>
      <div 
        className="absolute bottom-1/4 right-10 w-16 h-16 opacity-10 animate-float"
        style={{ animationDelay: '1s' }}
      >
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-orange">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 left-1/4 w-10 h-10 opacity-5">
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-orange-light">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center pt-20">
        {/* Logo */}
        <div className="mb-8 animate-fade-up">
          <img
            src={logoBitcups}
            alt="Bitcups"
            className="h-40 md:h-56 lg:h-64 w-auto mx-auto drop-shadow-2xl"
          />
        </div>

        {/* H1 - Company Name (for SEO, visually hidden since logo shows it) */}
        <h1 className="sr-only">Bitcups</h1>

        {/* Slogan */}
        <p className="text-gold-light text-lg md:text-xl font-medium tracking-wide mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Artigos personalizados
        </p>

        {/* H2 - Description */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white max-w-4xl mx-auto leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Transformamos suas ideias em{' '}
          <span className="text-gradient">produtos únicos</span> e memoráveis
        </h2>

        {/* Tagline */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          "Outro rei não existirá, porque um raio não cai duas vezes no mesmo lugar."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://wa.me/5571982602013"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground font-bold text-lg rounded-lg shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Solicitar orçamento
          </a>
          <a
            href="#produtos"
            onClick={(e) => handleScroll(e, '#produtos')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold text-lg rounded-lg border border-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/50"
          >
            Ver produtos
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
