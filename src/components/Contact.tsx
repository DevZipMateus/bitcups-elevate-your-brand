import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-gradient-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-32 sm:w-44 md:w-56 h-32 sm:h-44 md:h-56 bg-orange/5 rounded-full blur-3xl" />
      
      {/* Floating crown elements - hidden on mobile */}
      <div className="hidden sm:block absolute top-20 left-1/4 w-8 h-8 opacity-5">
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-primary">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>
      <div className="hidden sm:block absolute bottom-20 right-1/3 w-6 h-6 opacity-5">
        <svg viewBox="0 0 100 80" fill="currentColor" className="text-primary">
          <path d="M50 0L65 30L100 40L75 60L80 100H20L25 60L0 40L35 30L50 0Z" />
        </svg>
      </div>

      <div className="section-container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-secondary text-primary font-semibold text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
              Fale conosco
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Entre em <span className="text-gradient">contato</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Solicite um orçamento ou tire suas dúvidas. Estamos prontos para atendê-lo!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-4 sm:space-y-6">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-2.5 bg-gradient-gold rounded-lg sm:rounded-xl flex-shrink-0">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground font-medium hover:text-primary transition-colors text-xs sm:text-sm break-words"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium text-xs sm:text-sm break-words">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-card border border-border">
                <h3 className="text-base sm:text-lg font-display font-bold text-foreground mb-3 sm:mb-4">
                  Siga-nos nas redes sociais
                </h3>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-card rounded-lg sm:rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft"
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="text-foreground font-medium text-xs sm:text-sm">{social.username}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/5571982602013"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 sm:gap-3 w-full p-3 sm:p-4 bg-gradient-gold text-primary-foreground font-bold text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl shadow-gold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chamar no WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal direction="right">
            <div className="h-[280px] sm:h-[350px] md:h-[400px] lg:h-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] rounded-xl sm:rounded-2xl overflow-hidden border border-border shadow-card">
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
