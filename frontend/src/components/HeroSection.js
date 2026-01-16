import React from 'react';
import { 
  ChevronDown, 
  Code2, 
  Database, 
  Server, 
  Shield,
  Sparkles,
  MapPin,
  Briefcase,
  Calendar
} from 'lucide-react';
import { personalInfo, projects } from '../data/mockData';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calcular métricas desde mockData
  const totalProjects = projects.length;
  const totalTechnologies = [...new Set(projects.flatMap(p => p.technologies))].length;

  // Tech stack principal con tecnologías reales de tus proyectos
  const techStack = [
    { name: 'Spring Boot', icon: Server, color: 'text-green-400' },
    { name: 'React', icon: Code2, color: 'text-cyan-400' },
    { name: 'MySQL', icon: Database, color: 'text-blue-400' },
    { name: 'Spring Security', icon: Shield, color: 'text-red-400' },
    { name: 'TypeScript', icon: Code2, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: Sparkles, color: 'text-teal-400' }
  ];

  // Métricas calculadas dinámicamente
  const metrics = [
    { label: 'Experiencia', value: personalInfo.experience, icon: Calendar },
    { label: 'Proyectos', value: `${totalProjects}`, icon: Code2 },
    { label: 'Tecnologías', value: `${totalTechnologies}+`, icon: Sparkles }
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 pb-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Visual (60%) */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Photo with decorative elements - CENTRADO */}
            <div className="relative max-w-md mx-auto">
              {/* Decorative blob background - ajustado al tamaño de imagen */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-[3rem] blur-2xl animate-pulse-slow" />
              
              {/* Main photo container */}
              <div className="relative group">
                {/* Decorative corner accent */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-primary rounded-tl-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-primary rounded-br-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Photo with aspect ratio 1120x928 */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                  <img
                    src="/images/whapage.jpg"
                    alt={personalInfo.name}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ aspectRatio: '1120/928' }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Available badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 bg-background/90 backdrop-blur-md border border-primary/30 rounded-xl px-4 py-3 shadow-lg">
                      <div className="relative">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        Disponible para proyectos
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Cards - 6 tecnologías - CENTRADO */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md mx-auto">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="group bg-card hover:bg-card/80 border border-border rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className={`${tech.color} mb-2 group-hover:scale-110 transition-transform duration-300`} size={24} />
                    <p className="text-xs font-semibold text-foreground">{tech.name}</p>
                  </div>
                );
              })}
            </div>

            {/* Quick Metrics - Datos reales del mockData - CENTRADO */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 transition-all duration-300"
                  >
                    <Icon className="text-primary mx-auto mb-2" size={20} />
                    <p className="text-2xl font-bold text-foreground mb-1">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Content (40%) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">{personalInfo.location}</span>
            </div>

            {/* Main heading - SIN underline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                ¡Hola! Soy{' '}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Whalen Caicedo
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                {personalInfo.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Especializado en el desarrollo de aplicaciones web{' '}
              <span className="text-primary font-semibold">modernas y escalables</span>.
              Combino frontend y backend para construir soluciones sólidas y alineadas con objetivos de negocio.
            </p>

            {/* CTAs - BOTONES DEL MISMO TAMAÑO */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                {/* Button shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Briefcase size={20} />
                <span>Disponible para Trabajar</span>
              </a>
              
              <button
                onClick={scrollToProjects}
                className="flex items-center justify-center gap-2 border-2 border-primary/50 hover:border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <Code2 size={20} />
                <span>Ver Proyectos</span>
              </button>
            </div>

            {/* Small info */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles size={16} className="text-primary" />
              <span>Actualmente trabajando en proyectos con Spring Boot y React</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown
          size={32}
          className="text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-200"
          onClick={scrollToProjects}
        />
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;