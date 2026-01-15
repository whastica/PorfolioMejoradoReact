import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32"
    >
      <div className="text-center max-w-4xl mx-auto">

        {/* Profile Image */}
        <div className="mb-8 mt-8">
          <div className="relative group w-fit mx-auto">

            {/* Subtle glow effect */}
            <div
              className="
                absolute inset-0 rounded-full
                bg-gradient-to-br from-primary/40 via-primary/20 to-transparent
                opacity-0 group-hover:opacity-100
                blur-xl transition-opacity duration-700
              "
            />

            <img
              src="https://portfoliowhalensoft.netlify.app/Images/stivenfoto.jpg"
              alt="Stiven Caicedo"
              className="
                relative z-10
                w-32 h-32 sm:w-40 sm:h-40
                rounded-full mx-auto mb-6
                border-4 border-primary/20
                shadow-2xl
                transition-all duration-700 ease-out
                group-hover:scale-105
                group-hover:rotate-[0.5deg]
              "
            />
          </div>
        </div>

        {/* Headings */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          ¡Hola! Soy{' '}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Whalen Caicedo
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
          Ingeniero en Sistemas Full Stack
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Ingeniero de Sistemas{' '}
          <span className="text-primary font-semibold">Full Stack</span>{' '}
          especializado en el desarrollo de aplicaciones web modernas, escalables y orientadas al usuario.
          Combino{' '}
          <span className="text-primary font-semibold">frontend y backend</span>{' '}
          para construir soluciones sólidas, bien estructuradas y alineadas con objetivos de negocio.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://www.linkedin.com/in/whalen-stiven-caicedo/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-primary hover:bg-primary/90
              text-primary-foreground
              px-8 py-3 rounded-lg font-medium
              transition-all duration-200
              hover:scale-105
              shadow-lg hover:shadow-xl
            "
          >
            Disponible para Trabajar
          </a>

          <button
            onClick={scrollToProjects}
            className="
              border-2 border-primary/50
              hover:border-primary
              text-primary
              hover:bg-primary/10
              px-8 py-3 rounded-lg font-medium
              transition-all duration-200
              hover:scale-105
            "
          >
            Ver Proyectos
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            size={32}
            className="text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-200"
            onClick={scrollToProjects}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
