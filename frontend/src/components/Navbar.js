import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Stiven Caicedo
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('sobre-mi')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Sobre mí
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Contacto
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-accent transition-colors duration-200"
              aria-label="Cambiar tema"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md hover:bg-accent transition-colors duration-200"
                aria-label="Menú móvil"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-b-lg border-b border-border/50">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200 rounded-md"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('sobre-mi')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200 rounded-md"
              >
                Sobre mí
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200 rounded-md"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200 rounded-md"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;