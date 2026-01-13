import Header from '@/components/Header';

export default function Vitrine() {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px */}
      <Header />
      
      {/* Spacer para o header fixo */}
      <div className="h-20 flex-shrink-0" />
      
      {/* Iframe ocupando o espaço restante: 100vh - 80px (header) - 63px (badge) */}
      <main className="flex-1 w-full" style={{ height: 'calc(100vh - 80px - 63px)' }}>
        <iframe 
          src="https://bitcups.egestor.com.br/vitrine/" 
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </main>
    </div>
  );
}
