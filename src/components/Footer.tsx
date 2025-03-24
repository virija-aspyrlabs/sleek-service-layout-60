
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img 
                src="/lovable-uploads/b24e8bd2-03e8-4c5e-accd-1884c4cd7339.png" 
                alt="Aspyr Technology Labs Logo" 
                className="h-10 w-auto mr-2"
              />
            </a>
            <p className="mt-2 text-sm text-gray-600 max-w-md">
              Transforming businesses through innovative technology solutions and data-driven insights.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="#" 
                className="text-gray-500 hover:text-aspyr-green transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-aspyr-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-aspyr-green transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600">
              © {currentYear} Aspyr Technology Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
