import logoBitcups from '@/assets/logo-bitcups.png';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo & Slogan */}
          <div className="space-y-4">
            <img
              src={logoBitcups}
              alt="Bitcups"
              className="h-28 w-auto"
            />
            <p className="text-white/70 text-sm italic">
              "Outro rei não existirá, porque um raio não cai duas vezes no mesmo lugar."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4 text-gold-light">
              Links rápidos
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Produtos', href: '#produtos' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold-light transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4 text-gold-light">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5571982602013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-gold-light transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (71) 98260-2013
                </a>
              </li>
              <li>
                <a
                  href="mailto:debitcups@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-gold-light transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  debitcups@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://instagram.com/debitcups"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-gold/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/Bitcups"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-gold/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white/50 text-sm">
              © {currentYear} Bitcups - Artigos Personalizados. Todos os direitos reservados.
            </p>
            <p className="text-white/50 text-sm">
              CNPJ: 64.116.260/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
