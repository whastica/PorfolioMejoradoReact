import React from 'react';
import { personalInfo } from '../data/mockData';

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Sobre <span className="gradient-text">mí</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal info */}
          <div className="space-y-6">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Mi trayectoria</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <span className="font-semibold">Formación:</span>
                  <span className="text-muted-foreground">{personalInfo.education}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <span className="font-semibold">Experiencia:</span>
                  <span className="text-muted-foreground">{personalInfo.experience}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border/50">
                  <span className="font-semibold">Ubicación:</span>
                  <span className="text-muted-foreground">{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-semibold">Estado:</span>
                  <span className="text-primary font-semibold">Disponible para trabajar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Professional Focus */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Enfoque profesional</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1">▪</span>
                  <span>Desarrollo de aplicaciones web escalables, mantenibles y bien estructuradas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1">▪</span>
                  <span>Diseño de soluciones centradas en el usuario y alineadas con objetivos de negocio</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1">▪</span>
                  <span>Aplicación de buenas prácticas de ingeniería y arquitectura de software</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1">▪</span>
                  <span>Optimización de rendimiento, experiencia de usuario y calidad del código</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1">▪</span>
                  <span>Aprendizaje continuo y adopción estratégica de nuevas tecnologías</span>
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