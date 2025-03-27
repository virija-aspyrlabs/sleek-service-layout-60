import { useEffect, useRef, useState } from 'react';

const products = [
  {
    title: 'Automation',
    description: 'Streamline your operations with intelligent automation solutions that reduce manual tasks and boost efficiency.',
    imageUrl: './ai.png'
  },
  {
    title: 'Data and AI',
    description: 'Harness the power of your data with advanced analytics and AI-driven insights that fuel better decision-making.',
    imageUrl: '/data.png'
  },
  {
    title: 'Enterprise Solutions & Modern Architecture',
    description: 'Future-proof your business with scalable for the digital age.',
    // description: 'Future-proof your business with scalable, resilient enterprise architecture designed for the digital age.',
    imageUrl: '/enterprise.png'
  },
  {
    title: 'Legacy System Modernization',
    description: 'Transform outdated systems into agile, cloud-native applications without disrupting your core business.',
    // description: 'Transform outdated systems into agile, cloud-native applications without disrupting your core business.',
    imageUrl: '/legacy.png'
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-blue-50 relative">
      <div className="mx-auto max-w-7xl">
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Technology Products
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We deliver end-to-end solutions tailored to your unique business challenges,
            helping you stay ahead in the rapidly evolving technology landscape.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-16 ">
          {products.map((product, index) => (
            <div
              key={product.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0 transition-all duration-300"
            >
              <div
                className="relative w-80 h-[420px] bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="w-full h-3/4 bg-cover bg-center rounded-t-2xl"
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                />
                <div
                  className={`absolute bottom-0 w-full bg-white rounded-b-2xl transition-transform duration-300 ease-in-out ${hoveredIndex === index ? '-translate-y-12' : ''
                    }`}
                >
                  <div className="p-5 pb-0">
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </div>
                  <div
                    className={`flex justify-between p-5 transition-opacity duration-300 mt-2 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    <button
                      className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg text-sm flex items-center gap-2 hover:bg-blue-600 transition-colors"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Know More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button className="px-5 py-2 border border-blue-500 text-blue-500 font-semibold rounded-lg text-sm hover:bg-blue-500 hover:text-white transition-colors">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900/60">
            <div className="bg-white rounded-2xl shadow-lg w-[700px] h-[400px] flex overflow-hidden relative animate-fade-in-up">
              {/* Image Left */}
              <div
                className="w-1/2 h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedProduct.imageUrl})` }}
              ></div>

              {/* Content Right */}
              <div className="w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedProduct.title}</h3>
                  <p className="text-gray-700 text-sm">{selectedProduct.description}</p>
                </div>
                <div className="mt-6 text-right">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Services;
