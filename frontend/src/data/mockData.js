export const projects = [
  {
    id: '1',
    name: 'Watchdog',
    shortDescription: 'Plataforma ciudadana para reportar problemas urbanos en Popayán como baches, fallos en alumbrado público y acumulación de basura.',
    fullDescription: 'Watchdog es una aplicación web completa diseñada para conectar a los ciudadanos de Popayán con las autoridades municipales. Los usuarios pueden reportar problemas urbanos mediante geolocalización precisa, subir imágenes como evidencia y hacer seguimiento al estado de sus reportes. El sistema incluye un panel de administración municipal para gestionar y dar seguimiento a todos los reportes ciudadanos.',
    image: 'https://portfoliowhalensoft.netlify.app/Images/watchdog.webp',
    technologies: ['Spring Boot', 'Spring Security', 'JPA', 'MongoDB', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Geolocalización precisa para ubicar problemas',
      'Sistema de carga y gestión de imágenes',
      'Panel de administración municipal completo',
      'Seguimiento en tiempo real del estado de reportes',
      'Autenticación y autorización de usuarios',
      'API REST para integración con otras plataformas'
    ],
    architecture: 'Arquitectura de microservicios con enfoque hexagonal, implementando Domain Driven Design (DDD) y CQRS para separación de responsabilidades y escalabilidad.',
    challenges: [
      'Implementación de microservicios con comunicación asíncrona',
      'Gestión eficiente de archivos multimedia',
      'Sistema de geolocalización precisa',
      'Optimización de consultas en base de datos distribuida'
    ],
    demoUrl: 'https://github.com/whastica/whatchdog',
    repoUrl: 'https://github.com/whastica/whatchdog',
    youtubeUrl: 'https://www.youtube.com/watch?v=taskmanager',
    status: 'Próximamente'
  },
  {
    id: '2',
    name: 'Sistema de Gestión Supermarket',
    shortDescription: 'Plataforma completa para administrar supermercados, con gestión de productos, órdenes, compras y control detallado de inventario en tiempo real.',
    fullDescription: 'Sistema integral de gestión para supermercados que automatiza todos los procesos operativos. Incluye módulos para gestión de inventarios, procesamiento de ventas, control de proveedores, reportes analíticos y manejo de roles de usuario. La plataforma permite un control detallado del flujo de productos desde la compra hasta la venta final.',
    image: 'https://portfoliowhalensoft.netlify.app/Images/superMarket.webp',
    technologies: ['Spring Boot', 'JPA', 'Lombok', 'Hibernate', 'MongoDB', 'MySQL', 'React', 'Bootstrap'],
    features: [
      'Gestión completa de inventarios con alertas de stock',
      'Procesamiento de ventas y facturación',
      'Control de proveedores y compras',
      'Reportes analíticos y dashboard ejecutivo',
      'Sistema de roles y permisos granular',
      'Integración con sistemas de pago'
    ],
    architecture: 'Arquitectura por capas con separación clara entre presentación, lógica de negocio y acceso a datos. API REST para comunicación frontend-backend.',
    challenges: [
      'Optimización de consultas complejas para reportes',
      'Manejo de concurrencia en operaciones de inventario',
      'Implementación de sistema de cache distribuido',
      'Sincronización en tiempo real de datos críticos'
    ],
    demoUrl: 'https://github.com/whastica/backendMarket',
    repoUrl: 'https://github.com/whastica/backendMarket',
    youtubeUrl: 'https://www.youtube.com/watch?v=taskmanager',
    status: 'Próximamente'
  },
  {
    id: '3',
    name: 'Sistema de Gestión Pizzería',
    shortDescription: 'Solución integral para pizzerías que facilita la gestión de productos, inventario y órdenes, optimizando el control interno y la experiencia del cliente.',
    fullDescription: 'Plataforma web especializada para pizzerías que centraliza todos los aspectos operativos del negocio. Permite gestionar el menú dinámicamente, procesar pedidos tanto presenciales como en línea, controlar inventario de ingredientes, generar reportes de ventas y administrar el personal. Incluye funcionalidades específicas para el negocio de comidas como gestión de combos, personalización de productos y sistema de delivery.',
    image: 'https://portfoliowhalensoft.netlify.app/Images/pizzeria.webp',
    technologies: ['Spring Boot', 'Spring Security', 'JPA', 'Lombok', 'Hibernate', 'MySQL', 'Thymeleaf', 'jQuery'],
    features: [
      'Gestión dinámica de menú y precios',
      'Procesamiento de pedidos online y presenciales',
      'Control de inventario de ingredientes',
      'Sistema de personalización de productos',
      'Módulo de delivery y seguimiento de pedidos',
      'Reportes de ventas y análisis de productos más vendidos'
    ],
    architecture: 'Arquitectura por capas con modelo REST y base de datos relacional MySQL. Implementación de Spring Security para manejo seguro de autenticación y autorización.',
    challenges: [
      'Optimización de queries para combinaciones de ingredientes',
      'Sistema de cache para mejora de performance',
      'Implementación de WebSockets para actualizaciones en tiempo real',
      'Manejo eficiente de transacciones concurrentes'
    ],
    demoUrl: 'https://github.com/whastica/BackPizzeriaSecurity',
    repoUrl: 'https://github.com/whastica/BackPizzeriaSecurity',
    youtubeUrl: 'https://www.youtube.com/watch?v=taskmanager',
    status: 'Próximamente'
  },
  {
    id: '4',
    name: 'E-Commerce Moderno',
    shortDescription: 'Plataforma de comercio electrónico con React, Node.js y MongoDB, incluyendo carrito de compras, pagos y panel de administración.',
    fullDescription: 'E-commerce completo desarrollado con tecnologías modernas que ofrece una experiencia de compra fluida y segura. Incluye catálogo de productos con filtros avanzados, carrito de compras persistente, integración con pasarelas de pago, sistema de reseñas y calificaciones, y un panel administrativo completo para gestión de productos, pedidos y usuarios.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe', 'JWT', 'Cloudinary'],
    features: [
      'Catálogo de productos con búsqueda y filtros avanzados',
      'Carrito de compras con persistencia local y en base de datos',
      'Integración completa con Stripe para pagos seguros',
      'Sistema de reseñas y calificaciones de productos',
      'Panel administrativo para gestión completa',
      'Notificaciones por email y sistema de seguimiento de pedidos'
    ],
    architecture: 'Arquitectura de SPA (Single Page Application) con API REST. Implementación de Redux para manejo de estado global y JWT para autenticación segura.',
    challenges: [
      'Optimización de SEO en aplicación SPA',
      'Implementación de carrito persistente offline',
      'Integración segura con múltiples pasarelas de pago',
      'Sistema de notificaciones en tiempo real'
    ],
    demoUrl: 'https://ecommerce-demo.netlify.app',
    repoUrl: 'https://github.com/stiven-caicedo/ecommerce-app',
    youtubeUrl: 'https://www.youtube.com/watch?v=demo',
    status: 'Completo'
  },
  {
    id: '5',
    name: 'Task Management Dashboard',
    shortDescription: 'Dashboard de gestión de tareas con funcionalidades avanzadas como drag & drop, colaboración en tiempo real y reportes de productividad.',
    fullDescription: 'Aplicación web de gestión de proyectos y tareas diseñada para equipos de trabajo. Ofrece tableros Kanban interactivos, asignación de tareas, seguimiento de tiempo, colaboración en tiempo real, reportes de productividad y notificaciones inteligentes. La plataforma es ideal para equipos ágiles que necesitan una herramienta completa y visual para organizar su trabajo.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io', 'Chart.js', 'Material-UI'],
    features: [
      'Tableros Kanban con drag & drop avanzado',
      'Colaboración en tiempo real con WebSockets',
      'Sistema de comentarios y notificaciones',
      'Reportes detallados de productividad y tiempos',
      'Gestión de equipos y permisos granulares',
      'Integración con calendarios y herramientas externas'
    ],
    architecture: 'Arquitectura de microservicios con comunicación en tiempo real. PostgreSQL para persistencia y Redis para cache y sesiones.',
    challenges: [
      'Sincronización de estado en tiempo real entre múltiples usuarios',
      'Optimización de renderizado para tableros con muchas tareas',
      'Implementación eficiente de sistema de permisos',
      'Manejo de conflictos en edición colaborativa'
    ],
    demoUrl: 'https://taskmanager-demo.herokuapp.com',
    repoUrl: 'https://github.com/stiven-caicedo/task-manager',
    youtubeUrl: 'https://www.youtube.com/watch?v=taskmanager',
    status: 'En desarrollo'
  }
];

export const skills = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'Spring Boot', level: 92, category: 'Backend' },
  { name: 'MongoDB', level: 85, category: 'Database' },
  { name: 'MySQL', level: 90, category: 'Database' },
  { name: 'PostgreSQL', level: 80, category: 'Database' },
  { name: 'Docker', level: 75, category: 'DevOps' },
  { name: 'AWS', level: 70, category: 'Cloud' },
  { name: 'Git', level: 95, category: 'Tools' }
];

export const personalInfo = {
  name: 'Stiven Caicedo',
  title: 'Desarrollador Web Full Stack',
  email: 'stiven.caicedo@example.com',
  linkedin: 'https://www.linkedin.com/in/whalen-stiven-caicedo/',
  github: 'https://github.com/whastica',
  location: 'Popayán, Colombia',
  education: 'Ingeniería de Sistemas',
  experience: '3+ años',
  bio: 'Desarrollador Web con experiencia en frontend y backend apasionado por crear aplicaciones web intuitivas y funcionales. He desarrollado varios proyectos independientes que demuestran mis habilidades técnicas y creatividad. Con una sólida formación en Ingeniería de Sistemas, estoy preparado para contribuir con soluciones innovadoras y centradas en el usuario.'
};