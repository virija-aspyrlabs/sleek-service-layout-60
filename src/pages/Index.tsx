
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stories from '@/components/Stories';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden no-scrollbar">
      <Header />
      <Hero />
      <Services />
      <Stories />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
