import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoBitcups from '@/assets/logo-bitcups.png';

const navLinks = [{
  href: '#inicio',
  label: 'Início'
}, {
  href: '#sobre',
  label: 'Sobre'
}, {
  href: '#produtos',
  label: 'Produtos'
}, {
  href: '#contato',
  label: 'Contato'
}, {
  href: '/vitrine',
  label: 'Vitrine',
  isPage: true
}];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage?: boolean) => {
    setIsMobileMenuOpen(false);
    if (isPage) {
      e.preventDefault();
      navigate(href);
      return;
    }

    // If we're on a different page and clicking an anchor, navigate to home first
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/' + href);
      return;
    }
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }
    const element = document.querySelector('#inicio');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  const isTransparent = !isScrolled && location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'}`}>
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center">
            <img src={logoBitcups} alt="Bitcups - Artigos Personalizados" className="h-20 sm:h-28 md:h-36 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <li key={link.href}>
                {'isPage' in link && link.isPage ? (
                  <Link 
                    to={link.href} 
                    className={`font-medium transition-colors duration-200 ${location.pathname === link.href ? 'text-primary' : isTransparent ? 'text-white hover:text-gold' : 'text-foreground hover:text-primary'}`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    onClick={e => handleNavClick(e, link.href)} 
                    className={`font-medium transition-colors duration-200 ${isTransparent ? 'text-white hover:text-gold' : 'text-foreground hover:text-primary'}`}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a 
                href="https://wa.me/5571982602013" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 bg-gradient-gold text-primary-foreground font-semibold text-sm lg:text-base rounded-lg shadow-gold transition-transform duration-200 hover:scale-105"
              >
                Fale conosco
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className={`md:hidden p-2 ${isTransparent ? 'text-white' : 'text-foreground'}`} 
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 sm:top-20 left-0 right-0 bg-background shadow-lg animate-fade-in border-t border-border">
            <ul className="flex flex-col py-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  {'isPage' in link && link.isPage ? (
                    <Link 
                      to={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className={`block px-6 py-3 font-medium hover:bg-secondary hover:text-primary transition-colors ${location.pathname === link.href ? 'text-primary' : 'text-foreground'}`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      onClick={e => handleNavClick(e, link.href)} 
                      className="block px-6 py-3 font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="px-6 py-3">
                <a 
                  href="https://wa.me/5571982602013" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 bg-gradient-gold text-primary-foreground font-semibold rounded-lg shadow-gold"
                >
                  Fale conosco
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
