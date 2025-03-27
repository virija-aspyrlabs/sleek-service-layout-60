
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 ",
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-xl font-semibold flex items-center">
              <span className="sr-only">Aspyr Technology Labs</span>
              <div className="h-10 mr-2 ml-16">
                <img
                  src="/lovable-uploads/logo.png"
                  alt="Aspyr Logo"
                  className="h-full"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 mr-16 ">
            {['Services', 'Stories', 'Contact Us'].map((item) => {
              const id = item.toLowerCase().replace(' ', '-');
              const isButton = item === 'Contact Us';

              return isButton ? (
                <a
                  key={item}
                  href={`#${id}`}
                  className="bg-blue-600  hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ) : (
                <a
                  key={item}
                  href={`#${id}`}
                  className="text-lg font-medium mt-2 text-gray-900 hover:text-aspyr-green transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-aspyr-green after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {item}
                </a>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out origin-top",
            mobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Services', 'Stories', 'Contact Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-aspyr-green"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
