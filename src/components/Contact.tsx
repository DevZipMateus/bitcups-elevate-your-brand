import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '(71) 98260-2013',
    href: 'https://wa.me/5571982602013',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'debitcups@gmail.com',
    href: 'mailto:debitcups@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Salvador - BA, CEP: 40310-595',
    href: 'https://www.google.com/maps/search/?api=1&query=40310-595+Salvador+BA',
  },
  {
    icon: Clock,
    label: 'Horário de funcionamento',
    value: 'Seg-Sex: 7:30 às 17:30 | Sáb: 7:30 às 12:00',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/debitcups',
    username: '@debitcups',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://facebook.com/Bitcups',
    username: 'Bitcups',
  },
];

export default function Contact() {
  const parallaxOffset = useParallax(0.06);

  return (
    <section id="contato" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute top-10 right-10 w-72 h-72 bg-gradient-gold/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset * 2.5}px)` }}
      />
      <div 
        className="absolute bottom-10 left-10 w-56 h-56 bg-orange/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset * -2}px)` }}
      />
      
      {/* Floating crown elements */}
      <div 
        className="absolute top-20 left-1/4 w-8 h-8 opacity-5"
        style={{ transform: `translateY(${parallaxOffset * 3.5}px) rotate(${parallaxOffset * 0.15}deg)` }}
      >
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-primary">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>
      <div 
        className="absolute bottom-20 right-1/3 w-6 h-6 opacity-5"
        style={{ transform: `translateY(${parallaxOffset * -2.5}px) rotate(${parallaxOffset * -0.1}deg)` }}
      >
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-primary">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary text-primary font-semibold text-sm rounded-full mb-4">
            Fale conosco
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Entre em <span className="text-gradient">contato</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Solicite um orçamento ou tire suas dúvidas. Estamos prontos para atendê-lo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards with parallax */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
                  style={{ transform: `translateY(${parallaxOffset * (0.3 + index * 0.15)}px)` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-gradient-gold rounded-xl">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground font-medium hover:text-primary transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links with parallax */}
            <div 
              className="p-6 rounded-2xl bg-gradient-card border border-border"
              style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-4">
                Siga-nos nas redes sociais
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft"
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium text-sm">{social.username}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button with parallax */}
            <a
              href="https://wa.me/5571982602013"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full p-4 bg-gradient-gold text-primary-foreground font-bold text-lg rounded-xl shadow-gold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              style={{ transform: `translateY(${parallaxOffset * 0.6}px)` }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chamar no WhatsApp
            </a>
          </div>

          {/* Map with parallax */}
          <div 
            className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-border shadow-card"
            style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d-38.5!3d-12.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzAwLjAiUyAzOMKwMzAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Bitcups - Salvador, BA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
