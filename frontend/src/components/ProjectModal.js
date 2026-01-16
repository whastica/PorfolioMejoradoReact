import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Youtube, 
  Code, 
  Database, 
  Server, 
  Zap, 
  CheckCircle2, 
  Clock, 
  Lightbulb, 
  PauseCircle,
  Layers,
  Target
} from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
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

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'architecture', label: 'Arquitectura', icon: Layers },
    { id: 'challenges', label: 'Retos', icon: Zap }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-card rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden border border-border shadow-2xl">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-card/95 backdrop-blur-md border-b border-border px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Title y Status */}
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-foreground truncate">
                {project.name}
              </h2>
              <div className={`${status.bg} backdrop-blur-md px-3 py-2 rounded-sm flex items-center gap-2 shadow-sm flex-shrink-0`}>
                <StatusIcon size={14} className="text-white" />
                <span className="text-white text-xs font-semibold hidden sm:inline">
                  {status.label}
                </span>
              </div>
            </div>

            {/* CTAs Principales */}
            <div className="flex items-center gap-2">
              {project.demoUrl && (
                <button
                  onClick={() => handleLinkClick(project.demoUrl)}
                  className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-all duration-200 hover-scale shadow-md btn-ripple"
                >
                  <ExternalLink size={16} />
                  <span className="hidden lg:inline">Demo</span>
                </button>
              )}
              
              {project.repoUrl && (
                <button
                  onClick={() => handleLinkClick(project.repoUrl)}
                  className="hidden sm:flex items-center gap-2 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-primary px-4 py-2 rounded-md font-medium transition-all duration-200"
                >
                  <Github size={16} />
                  <span className="hidden lg:inline">Código</span>
                </button>
              )}
              
              {project.youtubeUrl && (
                <button
                  onClick={() => handleLinkClick(project.youtubeUrl)}
                  className="hidden sm:flex items-center gap-2 border-2 border-red-500/50 hover:border-red-500 hover:bg-red-500/10 text-red-500 px-4 py-2 rounded-md font-medium transition-all duration-200"
                >
                  <Youtube size={16} />
                </button>
              )}

              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-md transition-colors group"
                aria-label="Cerrar modal"
              >
                <X size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content - 2 COLUMNAS */}
        <div className="grid lg:grid-cols-2 gap-6 px-6 py-6 max-h-[calc(90vh-80px)] overflow-y-auto custom-scrollbar">
          
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Image */}
            <div className="relative overflow-hidden rounded-md h-64 lg:h-80">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            </div>

            {/* Short Description */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground">
                Descripción
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Tecnologías */}
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-foreground">
                <Database size={18} className="text-primary" />
                <span>Tecnologías</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-2 bg-primary/10 text-primary text-xs font-medium rounded-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs Mobile */}
            <div className="flex sm:hidden flex-col gap-3 pt-4 border-t border-border">
              {project.demoUrl && (
                <button
                  onClick={() => handleLinkClick(project.demoUrl)}
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-all duration-200 btn-ripple"
                >
                  <ExternalLink size={18} />
                  <span>Ver Demo</span>
                </button>
              )}
              
              {project.repoUrl && (
                <button
                  onClick={() => handleLinkClick(project.repoUrl)}
                  className="flex items-center justify-center gap-2 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-primary px-6 py-3 rounded-md font-medium transition-all duration-200"
                >
                  <Github size={18} />
                  <span>Ver Código</span>
                </button>
              )}
              
              {project.youtubeUrl && (
                <button
                  onClick={() => handleLinkClick(project.youtubeUrl)}
                  className="flex items-center justify-center gap-2 border-2 border-red-500/50 hover:border-red-500 hover:bg-red-500/10 text-red-500 px-6 py-3 rounded-md font-medium transition-all duration-200"
                >
                  <Youtube size={18} />
                  <span>Ver Video</span>
                </button>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN - Tabs */}
          <div className="space-y-4">
            {/* Tabs Navigation */}
            <div className="flex gap-2 border-b border-border">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 font-medium text-sm transition-all duration-200 border-b-2 ${
                      activeTab === tab.id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              
              {/* TAB 1: Overview */}
              {activeTab === 'overview' && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h4 className="text-base font-semibold mb-2 text-foreground flex items-center gap-2">
                      <Code size={16} className="text-primary" />
                      Descripción completa
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold mb-3 text-foreground flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      Características principales
                    </h4>
                    <div className="space-y-2">
                      {project.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-3 px-3 py-3 rounded-sm bg-muted/50 hover:bg-muted transition-colors duration-200 border border-border/50"
                        >
                          <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Arquitectura */}
              {activeTab === 'architecture' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="px-4 py-4 bg-muted/50 rounded-md border border-border">
                    <h4 className="text-base font-semibold mb-3 text-foreground flex items-center gap-2">
                      <Server size={16} className="text-primary" />
                      Arquitectura técnica
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: Retos */}
              {activeTab === 'challenges' && project.challenges && project.challenges.length > 0 && (
                <div className="space-y-3 animate-fade-in">
                  <h4 className="text-base font-semibold text-foreground flex items-center gap-2">
                    <Zap size={16} className="text-primary" />
                    Retos técnicos superados
                  </h4>
                  {project.challenges.map((challenge, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 px-3 py-3 rounded-sm bg-muted/50 border border-border"
                    >
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-foreground text-sm leading-relaxed">{challenge}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: hsl(var(--muted) / 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--primary) / 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary) / 0.8);
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;