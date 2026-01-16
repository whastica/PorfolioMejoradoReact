
import React from 'react';
import { personalInfo } from '../data/mockData';

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Sobre <span className="gradient-text">mí</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Personal info */}
          <div className="space-y-6 fade-in-section">
            <div className="glass-effect px-8 py-8 rounded-lg border-animate hover-glow">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Mi trayectoria</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border/50 transition-smooth hover:border-primary/30">
                  <span className="font-semibold text-foreground">Formación:</span>
                  <span className="text-muted-foreground">{personalInfo.education}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border/50 transition-smooth hover:border-primary/30">
                  <span className="font-semibold text-foreground">Experiencia:</span>
                  <span className="text-muted-foreground">{personalInfo.experience}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border/50 transition-smooth hover:border-primary/30">
                  <span className="font-semibold text-foreground">Ubicación:</span>
                  <span className="text-muted-foreground">{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-semibold text-foreground">Estado:</span>
                  <span className="text-primary font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Disponible para trabajar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Professional Focus */}
          <div className="space-y-8 slide-in-left">
            <div className="glass-effect px-8 py-8 rounded-lg border-animate hover-glow">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Enfoque profesional</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3 transition-smooth hover:translate-x-2">
                  <span className="text-primary mt-1 text-lg">▪</span>
                  <span className="text-base leading-relaxed">
                    Desarrollo de aplicaciones web escalables, mantenibles y bien estructuradas
                  </span>
                </li>
                <li className="flex items-start gap-3 transition-smooth hover:translate-x-2">
                  <span className="text-primary mt-1 text-lg">▪</span>
                  <span className="text-base leading-relaxed">
                    Diseño de soluciones centradas en el usuario y alineadas con objetivos de negocio
                  </span>
                </li>
                <li className="flex items-start gap-3 transition-smooth hover:translate-x-2">
                  <span className="text-primary mt-1 text-lg">▪</span>
                  <span className="text-base leading-relaxed">
                    Aplicación de buenas prácticas de ingeniería y arquitectura de software
                  </span>
                </li>
                <li className="flex items-start gap-3 transition-smooth hover:translate-x-2">
                  <span className="text-primary mt-1 text-lg">▪</span>
                  <span className="text-base leading-relaxed">
                    Optimización de rendimiento, experiencia de usuario y calidad del código
                  </span>
                </li>
                <li className="flex items-start gap-3 transition-smooth hover:translate-x-2">
                  <span className="text-primary mt-1 text-lg">▪</span>
                  <span className="text-base leading-relaxed">
                    Aprendizaje continuo y adopción estratégica de nuevas tecnologías
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;