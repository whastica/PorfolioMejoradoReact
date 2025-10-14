import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Youtube, Code, Database, Server, Zap, CheckCircle } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 modal-overlay flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="modal-content w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden">
        <div className="relative">
          {/* Header with image */}
          <div className="relative h-64 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200"
              aria-label="Cerrar modal"
            >
              <X size={20} className="text-white" />
            </button>

            {/* Project title and status */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{project.name}</h2>
                  <p className="text-white/80 text-lg">{project.shortDescription}</p>
                </div>
                <span className={`px-4 py-2 text-sm font-medium rounded-full ${
                  project.status === 'Completo' 
                    ? 'bg-green-500/30 text-green-300 border border-green-500/50' 
                    : project.status === 'En desarrollo'
                    ? 'bg-yellow-500/30 text-yellow-300 border border-yellow-500/50'
                    : 'bg-blue-500/30 text-blue-300 border border-blue-500/50'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8 max-h-[calc(90vh-16rem)] overflow-y-auto">
            {/* Description */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Code size={20} className="text-primary" />
                <span>Descripción del proyecto</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {project.fullDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Database size={20} className="text-primary" />
                <span>Tecnologías utilizadas</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <CheckCircle size={20} className="text-primary" />
                <span>Características principales</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200">
                    <span className="text-primary mt-0.5">▪</span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Server size={20} className="text-primary" />
                <span>Arquitectura técnica</span>
              </h3>
              <div className="p-4 bg-accent/30 rounded-lg border border-border/50">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {project.architecture}
                </p>
              </div>
            </div>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <Zap size={20} className="text-primary" />
                  <span>Retos técnicos superados</span>
                </h3>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-accent/20">
                      <span className="text-primary mt-0.5 font-bold">{index + 1}.</span>
                      <span className="text-muted-foreground text-sm leading-relaxed">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border/50">
              {project.demoUrl && (
                <button
                  onClick={() => handleLinkClick(project.demoUrl)}
                  className="flex-1 flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  <ExternalLink size={18} />
                  <span>Ver Demo</span>
                </button>
              )}
              
              {project.repoUrl && (
                <button
                  onClick={() => handleLinkClick(project.repoUrl)}
                  className="flex-1 flex items-center justify-center space-x-2 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-primary px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  <Github size={18} />
                  <span>Ver Código</span>
                </button>
              )}
              
              {project.youtubeUrl && (
                <button
                  onClick={() => handleLinkClick(project.youtubeUrl)}
                  className="flex-1 flex items-center justify-center space-x-2 border-2 border-red-500/50 hover:border-red-500 hover:bg-red-500/10 text-red-500 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  <Youtube size={18} />
                  <span>Ver Video</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;