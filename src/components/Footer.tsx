import logoBitcups from '@/assets/logo-bitcups.png';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="section-container py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Logo & Slogan */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <img
              src={logoBitcups}
              alt="Bitcups"
              className="h-28 sm:h-32 md:h-36 lg:h-40 w-auto mx-auto sm:mx-0"
            />
            <p className="text-white/70 text-xs sm:text-sm italic max-w-xs mx-auto sm:mx-0">
              "Outro rei não existirá, porque um raio não cai duas vezes no mesmo lugar."
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-display font-bold mb-3 sm:mb-4 text-gold-light">
              Links rápidos
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Produtos', href: '#produtos' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold-light transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-display font-bold mb-3 sm:mb-4 text-gold-light">
              Contato
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="https://wa.me/5571982602013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-white/70 hover:text-gold-light transition-colors text-xs sm:text-sm"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  (71) 98260-2013
                </a>
              </li>
              <li>
                <a
                  href="mailto:debitcups@gmail.com"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-white/70 hover:text-gold-light transition-colors text-xs sm:text-sm"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  debitcups@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex justify-center sm:justify-start gap-3 mt-3 sm:mt-4">
              <a
                href="https://instagram.com/debitcups"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 bg-white/10 rounded-lg hover:bg-gold/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://facebook.com/Bitcups"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 bg-white/10 rounded-lg hover:bg-gold/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left">
            <p className="text-white/50 text-xs sm:text-sm">
              © {currentYear} Bitcups - Artigos Personalizados. Todos os direitos reservados.
            </p>
            <p className="text-white/50 text-xs sm:text-sm">
              CNPJ: 64.116.260/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
