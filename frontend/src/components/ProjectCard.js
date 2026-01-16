import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Lightbulb, PauseCircle } from 'lucide-react';

const ProjectCard = ({ project, onOpenModal }) => {
  const statusConfig = {
    'Completo': { 
      icon: CheckCircle2, 
      color: 'text-emerald-400', 
      bg: 'bg-emerald-500/90',
      label: 'Completo' 
    },
    'En desarrollo': { 
      icon: Clock, 
      color: 'text-amber-400', 
      bg: 'bg-amber-500/90',
      label: 'En desarrollo' 
    },
    'Demo técnica': { 
      icon: Lightbulb, 
      color: 'text-blue-400', 
      bg: 'bg-blue-500/90',
      label: 'Demo técnica' 
    },
    'En pausa': { 
      icon: PauseCircle, 
      color: 'text-slate-400', 
      bg: 'bg-slate-500/90',
      label: 'En pausa' 
    }
  };

  const status = statusConfig[project.status] || statusConfig['En pausa'];
  const StatusIcon = status.icon;
  const topTechnologies = project.technologies.slice(0, 4);

  return (
    <div 
      className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 shadow-md hover:shadow-xl cursor-pointer hover-glow border-animate"
      onClick={() => onOpenModal(project)}
    >
      {/* Image section */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay permanente */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <div className={`${status.bg} backdrop-blur-md px-3 py-2 rounded-sm flex items-center gap-2 shadow-lg`}>
            <StatusIcon size={14} className="text-white" />
            <span className="text-white text-xs font-semibold hidden sm:inline">
              {status.label}
            </span>
          </div>
        </div>

        {/* Tech badges sobre la imagen */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          {topTechnologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-background/90 backdrop-blur-md text-foreground text-xs font-medium rounded-sm border border-border/50 shadow-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-semibold rounded-sm shadow-sm">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Content section */}
      <div className="px-6 py-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* CTA Principal */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(project);
          }}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover-scale shadow-lg hover:shadow-xl group/btn btn-ripple"
        >
          <span>Ver proyecto</span>
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Info adicional */}
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>{project.technologies.length} tecnologías</span>
          <span>•</span>
          <span>{project.features?.length || 0} características</span>
        </div>
      </div>

      {/* Efecto glow en hover */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;