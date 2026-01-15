import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Youtube, Code, Database, Server, Zap, CheckCircle, CheckCircle2, Clock, Rocket, PauseCircle, Lightbulb } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
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

  const statusConfig = {
    'Completo': { 
      icon: CheckCircle2, 
      color: 'text-emerald-500 dark:text-emerald-400', 
      bg: 'bg-emerald-500/20 dark:bg-emerald-500/10',
      border: 'border-emerald-500/50 dark:border-emerald-500/30',
      label: 'Completo' 
    },
    'En desarrollo': { 
      icon: Clock, 
      color: 'text-amber-500 dark:text-amber-400', 
      bg: 'bg-amber-500/20 dark:bg-amber-500/10',
      border: 'border-amber-500/50 dark:border-amber-500/30',
      label: 'En desarrollo' 
    },
    'Demo técnica': { 
      icon: Lightbulb, 
      color: 'text-blue-500 dark:text-blue-400', 
      bg: 'bg-blue-500/20 dark:bg-blue-500/10',
      border: 'border-blue-500/50 dark:border-blue-500/30',
      label: 'Demo técnica' 
    },
    'En pausa': { 
      icon: PauseCircle, 
      color: 'text-slate-500 dark:text-slate-400', 
      bg: 'bg-slate-500/20 dark:bg-slate-500/10',
      border: 'border-slate-500/50 dark:border-slate-500/30',
      label: 'En pausa' 
    }
  };

  const status = statusConfig[project.status] || statusConfig['En pausa'];
  const StatusIcon = status.icon;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 dark:bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl">
        {/* Header with image */}
        <div className="relative h-72 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-red-600 dark:bg-slate-800/90 dark:hover:bg-red-600 rounded-lg transition-all duration-300 backdrop-blur-sm z-10 group"
            aria-label="Cerrar modal"
          >
            <X size={20} className="text-slate-700 group-hover:text-white dark:text-slate-400 dark:group-hover:text-white transition-colors" />
          </button>

          {/* Project title and status */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                  {project.name}
                </h2>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed drop-shadow-md">
                  {project.shortDescription}
                </p>
              </div>
              <span className={`${status.bg} ${status.color} ${status.border} border px-4 py-2 text-sm font-semibold rounded-full flex items-center gap-2 backdrop-blur-md w-fit shadow-lg`}>
                <StatusIcon size={16} />
                {status.label}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 max-h-[calc(90vh-18rem)] overflow-y-auto custom-scrollbar">
          {/* Description */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <Code size={20} className="text-primary" />
              <span>Descripción del proyecto</span>
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <Database size={20} className="text-primary" />
              <span>Tecnologías utilizadas</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-primary/10 dark:bg-primary/10 text-primary font-medium rounded-lg border border-primary/20 dark:border-primary/30 hover:bg-primary/20 dark:hover:bg-primary/20 hover:border-primary/40 dark:hover:border-primary/50 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <CheckCircle size={20} className="text-primary" />
              <span>Características principales</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 transition-colors duration-200 border border-slate-200 dark:border-slate-700/50"
                >
                  <span className="text-primary mt-0.5 text-lg">▪</span>
                  <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <Server size={20} className="text-primary" />
              <span>Arquitectura técnica</span>
            </h3>
            <div className="p-4 bg-slate-100 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700/50">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                {project.architecture}
              </p>
            </div>
          </div>

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                <Zap size={20} className="text-primary" />
                <span>Retos técnicos superados</span>
              </h3>
              <div className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50"
                  >
                    <span className="text-primary mt-0.5 font-bold text-sm">{index + 1}.</span>
                    <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
            {project.demoUrl && (
              <button
                onClick={() => handleLinkClick(project.demoUrl)}
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <ExternalLink size={18} />
                <span>Ver Demo</span>
              </button>
            )}
            
            {project.repoUrl && (
              <button
                onClick={() => handleLinkClick(project.repoUrl)}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-primary px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                <Github size={18} />
                <span>Ver Código</span>
              </button>
            )}
            
            {project.youtubeUrl && (
              <button
                onClick={() => handleLinkClick(project.youtubeUrl)}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-red-500/50 hover:border-red-500 hover:bg-red-500/10 text-red-500 dark:text-red-400 px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                <Youtube size={18} />
                <span>Ver Video</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgb(203 213 225 / 0.3);
        }
        .dark .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgb(139 92 246 / 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgb(139 92 246 / 0.8);
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.8);
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;