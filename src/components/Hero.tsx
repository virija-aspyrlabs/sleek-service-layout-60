
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        const translateY = scrollPosition * 0.3;
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden" id="hero">
      {/* Background image with parallax effect */}
      <div 
        ref={heroRef}
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/lovable-uploads/f052a7ef-8d72-4893-814c-f57966ab79f1.png)',
          transform: 'translateZ(0)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-aspyr-green/10 backdrop-blur-[2px]"></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-12 w-48 h-48 bg-aspyr-green/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float animate-delay-200"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/b24e8bd2-03e8-4c5e-accd-1884c4cd7339.png')] bg-center opacity-5"></div>

      {/* Floating technology elements */}
      <div className="absolute left-[15%] top-[25%] w-32 h-32 animate-float animate-delay-100 opacity-70">
        <div className="w-full h-full rounded-lg glass-card p-3 rotate-12">
          <div className="w-full h-full bg-contain bg-center bg-no-repeat" 
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500)' }}>
          </div>
        </div>
      </div>
      
      <div className="absolute right-[20%] top-[20%] w-28 h-28 animate-float animate-delay-300 opacity-70">
        <div className="w-full h-full rounded-lg glass-card p-3 -rotate-6">
          <div className="w-full h-full bg-contain bg-center bg-no-repeat" 
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=500)' }}>
          </div>
        </div>
      </div>
      
      <div className="absolute right-[30%] bottom-[20%] w-40 h-40 animate-float animate-delay-200 opacity-70">
        <div className="w-full h-full rounded-lg glass-card p-3 rotate-6">
          <div className="w-full h-full bg-contain bg-center bg-no-repeat" 
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=500)' }}>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-container relative z-10 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6">
            <span className="inline-block py-1 px-3 rounded-full bg-aspyr-green/10 text-aspyr-green text-xs font-medium tracking-wide opacity-0 animate-fade-in-up animate-delay-100">
              Future-Proof Technology
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight opacity-0 animate-fade-in-up animate-delay-200 text-balance">
              <span className="text-gray-900">Innovative solutions for the</span>
              <span className="text-gradient-aspyr"> modern enterprise</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-300 text-balance">
              We help businesses transform their operations through cutting-edge technology, 
              data-driven insights, and enterprise architecture excellence.
            </p>
            
            <div className="pt-6 opacity-0 animate-fade-in-up animate-delay-400">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 mr-4"
              >
                Explore Our Services
              </a>
              <a 
                href="#stories" 
                className="inline-flex items-center justify-center px-6 py-3 border border-aspyr-green text-base font-medium rounded-md text-aspyr-green bg-white shadow-sm hover:bg-aspyr-green/5 focus:outline-none focus:ring-2 focus:ring-aspyr-green focus:ring-offset-2 transition-all duration-200"
              >
                View Stories
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tech pattern overlays */}
      <div className="absolute left-0 bottom-0 w-64 h-64 opacity-10">
        <img 
          src="/lovable-uploads/b24e8bd2-03e8-4c5e-accd-1884c4cd7339.png" 
          alt="" 
          className="w-full h-full object-contain opacity-50 animate-float"
        />
      </div>
      <div className="absolute right-0 top-0 w-48 h-48 opacity-10 rotate-180">
        <img 
          src="/lovable-uploads/b24e8bd2-03e8-4c5e-accd-1884c4cd7339.png" 
          alt="" 
          className="w-full h-full object-contain opacity-50 animate-float animate-delay-200"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in animate-delay-500">
        <span className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-aspyr-green to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
