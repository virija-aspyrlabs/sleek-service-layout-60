
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Monolithic to Microservices Transformation',
    description: 'How we helped a global financial services company break down their legacy monolith into scalable microservices architecture.',
    category: 'Architecture Transformation',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    delay: 'animate-delay-100'
  },
  {
    title: 'Data Management Platform for a Pharmaceutical Group',
    description: 'Creating a centralized data platform that unified disparate data sources and enabled real-time analytics.',
    category: 'Data Solutions',
    image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
    delay: 'animate-delay-200'
  },
  {
    title: 'Data Auditing Platform for a Pharmaceutical Group',
    description: 'Building a secure, compliant audit system for handling sensitive pharmaceutical data with complete traceability.',
    category: 'Compliance & Security',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    delay: 'animate-delay-300'
  },
];

const Stories = () => {
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
    <section id="stories" className="py-24">
      <div className="section-container">
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <span className="inline-block py-1 px-3 rounded-full bg-aspyr-green/10 text-aspyr-green text-xs font-medium tracking-wide mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stories
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Real-world examples of how our technology solutions have helped businesses
            overcome challenges and achieve their strategic objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md opacity-0 transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <div className="absolute inset-0 bg-aspyr-green/50 transition-opacity group-hover:opacity-40 opacity-0 z-10"></div>
                <img
                  src={study.image}
                  alt={study.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-aspyr-green uppercase tracking-wider mb-2">
                  {study.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-aspyr-green transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {study.description}
                </p>
                <div className="flex items-center text-aspyr-green font-medium text-sm transition-all opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0">
                  Read case study <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
