
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
          backgroundImage: 'url(/lovable-uploads/Screenshot 2025-03-26 175707.png)',
          transform: 'translateZ(0)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-aspyr-green/10 backdrop-blur-[2px]"></div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 -left-12 w-56 h-56 bg-aspyr-green/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-12 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float animate-delay-200"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/Screenshot 2025-03-26 175707.png')] bg-center opacity-5"></div>

      {/* Feature cards */}
      <div className="absolute left-20 top-1/3 transform -translate-y-1/2 z-10 max-w-[280px] hidden lg:block animate-fade-in-up animate-delay-300">
        <Card className="bg-white/90 backdrop-blur border-aspyr-green/20 overflow-hidden shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-30 bg-aspyr-green/20 rounded flex items-center justify-center overflow-hidden">
                <img
                  src="/Screenshot 2025-03-27 171434.png"
                  alt="Data Icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Data-Driven Solutions</h4>
                <p className="text-sm text-gray-600">Modern analytics for informed decision-making</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="absolute right-20 top-2/3 transform -translate-y-1/2 z-10 max-w-[280px] hidden lg:block animate-fade-in-up animate-delay-400">
        <Card className="bg-white/90 backdrop-blur border-primary/20 overflow-hidden shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-36 bg-primary/20 rounded flex items-center justify-center overflow-hidden">
                <img
                  src="/Screenshot 2025-03-27 171754.png"
                  alt="Enterprise Icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Enterprise Excellence</h4>
                <p className="text-sm text-gray-600">Scalable architecture for growing businesses</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content */}
      <div className="section-container relative z-10 mt-6">
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
              {/* <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 mr-4"
              >
                Explore Our Services
              </a> */}
              <a href="#services">
                <div className="flex items-center justify-center p-4">
                  <button className="relative group inline-flex items-center 
      bg-blue-600 text-white font-semibold py-3 px-6 rounded-sm 
      shadow-md border border-blue-600 
      transition-all duration-300 ease-in-out
      hover:bg-blue-700
      transform hover:translate-x-0.5 w-[270px]">

                    {/* Button Text */}
                    <span className="z-10 relative pr-8">
                      Explore Our Services
                    </span>

                    {/* Green Slanted Strip (Slanting Right) */}
                    <div className="absolute right-[10%] top-[-10%] bottom-[-10%] 
        transform -skew-x-12 origin-right
        group-hover:translate-x-1
        transition-transform duration-300">
                      <div className="h-[100%] w-12 bg-green-500 
          flex items-center justify-center 
          relative -mr-2">
                        <span className="text-white text-2xl transform rotate-0">
                          ↓
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tech pattern overlays */}
      {/* <div className="absolute left-0 bottom-0 w-64 h-64 opacity-10">
        <img 
          src="/lovable-uploads/Screenshot 2025-03-26 175707.png" 
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
      </div> */}

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in animate-delay-500">
        <span className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-2">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-aspyr-green to-transparent"></div>
      </div> */}
    </section>
  );
};

export default Hero;
