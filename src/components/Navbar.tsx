
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'glass-effect shadow-2xl shadow-sky-200/50 backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Code2 className="h-10 w-10 text-sky-600 group-hover:rotate-12 transition-transform duration-500 group-hover:scale-110" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-blue-400 animate-pulse" />
            </div>
            <span className="font-playfair text-2xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
              Flagestrators Global
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-3 text-lg font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-sky-600'
                    : 'text-gray-700 hover:text-sky-600'
                } group`}
              >
                {item.name}
                <span className={`absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-blue-600 transform origin-left transition-transform duration-300 rounded-full ${
                  location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
                <span className={`absolute inset-0 bg-sky-100 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 -z-10`} />
              </Link>
            ))}
            <Button className="ml-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-8 py-3 button-hover glow-effect font-semibold text-lg">
              Get Started
              <Sparkles className="ml-2 h-5 w-5 animate-pulse" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-sky-600 hover:bg-sky-100 rounded-xl p-3"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-4 pt-4 pb-6 space-y-2 glass-effect rounded-2xl mt-4 shadow-2xl shadow-sky-200/50">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-sky-600 bg-sky-100'
                      : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl py-3 button-hover glow-effect font-semibold text-lg">
                Get Started
                <Sparkles className="ml-2 h-5 w-5 animate-pulse" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
