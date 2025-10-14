import React from 'react';
import { ExternalLink, Github, Youtube, Info } from 'lucide-react';

const ProjectCard = ({ project, onOpenModal }) => {
  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="glass-effect rounded-2xl overflow-hidden card-hover cursor-pointer group"
      onClick={() => onOpenModal(project)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            project.status === 'Completo' 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : project.status === 'En desarrollo'
              ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
          }`}>
            {project.status}
          </span>
        </div>
      </div>

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
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
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
        <div className="flex justify-between items-center pt-2">
          <div className="flex space-x-2">
            {project.demoUrl && (
              <button
                onClick={(e) => handleLinkClick(e, project.demoUrl)}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200 group/btn"
                title="Ver Demo"
              >
                <ExternalLink size={16} className="text-muted-foreground group-hover/btn:text-primary transition-colors duration-200" />
              </button>
            )}
            
            {project.repoUrl && (
              <button
                onClick={(e) => handleLinkClick(e, project.repoUrl)}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200 group/btn"
                title="Ver Repositorio"
              >
                <Github size={16} className="text-muted-foreground group-hover/btn:text-primary transition-colors duration-200" />
              </button>
            )}
            
            {project.youtubeUrl && (
              <button
                onClick={(e) => handleLinkClick(e, project.youtubeUrl)}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200 group/btn"
                title="Ver en YouTube"
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
            className="flex items-center space-x-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200 group/info"
          >
            <Info size={14} />
            <span className="text-sm font-medium">Más info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;