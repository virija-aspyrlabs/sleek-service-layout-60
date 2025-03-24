
import { useEffect, useRef } from 'react';
import { Database, Brain, Building, History } from 'lucide-react';

const services = [
  {
    title: 'Automation',
    description: 'Streamline your operations with intelligent automation solutions that reduce manual tasks and boost efficiency.',
    icon: Database,
    delay: 'animate-delay-100'
  },
  {
    title: 'Data and AI',
    description: 'Harness the power of your data with advanced analytics and AI-driven insights that fuel better decision-making.',
    icon: Brain,
    delay: 'animate-delay-200'
  },
  {
    title: 'Enterprise Solutions & Modern Architecture',
    description: 'Future-proof your business with scalable, resilient enterprise architecture designed for the digital age.',
    icon: Building,
    delay: 'animate-delay-300'
  },
  {
    title: 'Legacy System Modernization',
    description: 'Transform outdated systems into agile, cloud-native applications without disrupting your core business.',
    icon: History,
    delay: 'animate-delay-400'
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
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
    <section id="services" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Technology Services
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We deliver end-to-end solutions tailored to your unique business challenges,
            helping you stay ahead in the rapidly evolving technology landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="glass-card rounded-xl p-6 opacity-0 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
