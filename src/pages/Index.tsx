import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import VitrineSection from '@/components/VitrineSection';
import InstagramSection from '@/components/InstagramSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';

export default function Index() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Products />
          <VitrineSection />
          <InstagramSection />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
}
