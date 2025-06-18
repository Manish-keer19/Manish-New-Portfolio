import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ['about', 'tech', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveLink(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'tech', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/5 backdrop-blur-lg py-2 shadow-lg' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo and Title */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveLink('');
            }}
          >
            <img 
              src="https://res.cloudinary.com/manish19/image/upload/v1749885126/IMG_20250525_221411_sptfql.jpg" 
              alt="Logo" 
              className="h-10 w-10 rounded-full object-cover border-2 border-primary group-hover:border-secondary transition-all duration-300"
            />
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all duration-500">
              Full Stack Dev
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-1 border border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeLink === item.id 
                    ? 'text-white bg-gradient-to-r from-primary/30 to-secondary/30'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeLink === item.id && (
                  <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-6 relative transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
              <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-1/2' : 'top-0'}`} />
              <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'}`} />
              <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-1/2' : 'bottom-0'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-lg"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className={`relative z-10 h-full flex flex-col items-center justify-center space-y-8 transition-all duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-10'}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-3xl font-medium relative overflow-hidden py-2 px-4 transition-all duration-500 ${
                activeLink === item.id
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
              {activeLink === item.id && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;