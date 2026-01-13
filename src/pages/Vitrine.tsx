import { useEffect } from 'react';
import Header from '@/components/Header';

export default function Vitrine() {
  // Trava o scroll da página ao montar e restaura ao desmontar
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px */}
      <Header />
      
      {/* Spacer para o header fixo */}
      <div className="h-20 flex-shrink-0" />
      
      {/* Iframe ocupando o espaço restante: 100vh - 80px (header) - 63px (badge) */}
      <main 
        className="w-full overflow-hidden" 
        style={{ height: 'calc(100vh - 80px - 63px)' }}
      >
        <iframe 
          src="https://bitcups.egestor.com.br/vitrine/" 
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
          scrolling="auto"
        />
      </main>
    </div>
  );
}
