import React from 'react';
import { ExternalLink, Github, Youtube, Info, CheckCircle2, Clock, Lightbulb, PauseCircle } from 'lucide-react';

const ProjectCard = ({ project, onOpenModal }) => {
  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Configuración de estados con iconos y colores
  const statusConfig = {
    'Completo': { 
      icon: CheckCircle2, 
      color: 'text-emerald-400', 
      bg: 'bg-emerald-500/20',
      border: 'border-emerald-500/30',
      label: 'Completo' 
    },
    'En desarrollo': { 
      icon: Clock, 
      color: 'text-amber-400', 
      bg: 'bg-amber-500/20',
      border: 'border-amber-500/30',
      label: 'En desarrollo' 
    },
    'Demo técnica': { 
      icon: Lightbulb, 
      color: 'text-blue-400', 
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/30',
      label: 'Demo técnica' 
    },
    'En pausa': { 
      icon: PauseCircle, 
      color: 'text-slate-400', 
      bg: 'bg-slate-500/20',
      border: 'border-slate-500/30',
      label: 'En pausa' 
    }
  };

  const status = statusConfig[project.status] || statusConfig['En pausa'];
  const StatusIcon = status.icon;

  return (
    <div 
      className="glass-effect rounded-2xl overflow-hidden card-hover cursor-pointer group"
      onClick={() => onOpenModal(project)}
    >
      {/* Image section */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status badge con icono */}
        <div className="absolute top-4 right-4">
          <span className={`${status.bg} ${status.color} ${status.border} border px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1.5 backdrop-blur-sm`}>
            <StatusIcon size={14} />
            {status.label}
          </span>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
            {project.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Technology tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex justify-between items-center pt-2 border-t border-border/50">
          <div className="flex space-x-2">
            {project.demoUrl && (
              <button
                onClick={(e) => handleLinkClick(e, project.demoUrl)}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200 group/btn"
                title="Ver Demo"
                aria-label="Ver demo del proyecto"
              >
                <ExternalLink size={16} className="text-muted-foreground group-hover/btn:text-primary transition-colors duration-200" />
              </button>
            )}
            
            {project.repoUrl && (
              <button
                onClick={(e) => handleLinkClick(e, project.repoUrl)}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200 group/btn"
                title="Ver Repositorio"
                aria-label="Ver repositorio en GitHub"
              >
                <Github size={16} className="text-muted-foreground group-hover/btn:text-primary transition-colors duration-200" />
              </button>
            )}
            
            {project.youtubeUrl && (
              <button
                onClick={(e) => handleLinkClick(e, project.youtubeUrl)}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200 group/btn"
                title="Ver en YouTube"
                aria-label="Ver video en YouTube"
              >
                <Youtube size={16} className="text-muted-foreground group-hover/btn:text-primary transition-colors duration-200" />
              </button>
            )}
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(project);
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-200 group/info hover:scale-105"
          >
            <Info size={14} className="group-hover/info:rotate-12 transition-transform duration-200" />
            <span className="text-sm font-medium">Más info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;