import React, { useState } from 'react';
import { projects } from '../data/mockData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Filter, Search } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Filter projects based on status and search term
  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.status.toLowerCase().includes(filter);
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  const filterOptions = [
    { value: 'all', label: 'Todos los proyectos', count: projects.length },
    { value: 'completo', label: 'Completados', count: projects.filter(p => p.status === 'Completo').length },
    { value: 'desarrollo', label: 'En desarrollo', count: projects.filter(p => p.status === 'En desarrollo').length },
    { value: 'próximamente', label: 'Próximamente', count: projects.filter(p => p.status === 'Próximamente').length }
  ];

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Algunos de los proyectos que he desarrollado, demostrando mis habilidades en diferentes tecnologías y arquitecturas. 
            Haz clic en cualquier proyecto para ver más detalles técnicos.
          </p>

          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 justify-center">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilter(option.value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    filter === option.value
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-card hover:bg-accent text-muted-foreground hover:text-foreground border border-border/50'
                  }`}
                >
                  <Filter size={14} />
                  <span className="text-sm">{option.label}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    filter === option.value 
                      ? 'bg-primary-foreground/20 text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {option.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search bar */}
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar proyectos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-card border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 w-64"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No se encontraron proyectos que coincidan con tu búsqueda.
            </p>
            <button 
              onClick={() => {
                setFilter('all');
                setSearchTerm('');
              }}
              className="mt-4 px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium transition-colors duration-200"
            >
              Mostrar todos los proyectos
            </button>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 glass-effect rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
            <div className="text-muted-foreground text-sm">Proyectos totales</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">
              {[...new Set(projects.flatMap(p => p.technologies))].length}
            </div>
            <div className="text-muted-foreground text-sm">Tecnologías utilizadas</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">1.5+</div>
            <div className="text-muted-foreground text-sm">Años de experiencia</div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectsSection;