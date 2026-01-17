export const projects = [
  {
    id: '1',
    name: 'ZeroXP - Plataforma de empleo para talento sin experiencia',
    shortDescription: 'Portal de empleos exclusivo para personas del sector tech sin experiencia laboral previa, donde empresas publican ofertas verificadas y candidatos aplican con un solo clic y de manera breve.',
    fullDescription: 'ZeroXP es una plataforma que resuelve el problema de los recién graduados en tecnología que aplican a ofertas "junior" pero que requieren años de experiencia. La plataforma conecta empresas que verdaderamente buscan talento sin experiencia con candidatos junior, ofreciendo un sistema transparente de aplicaciones con seguimiento en tiempo real. Las empresas reciben candidatos pre-filtrados y los candidatos obtienen feedback claro sobre el estado de sus aplicaciones.',
    image: '/images/ZeroXP.webp',
    technologies: ['Spring Boot', 'Spring Security', 'JPA', 'MySQL', 'React', 'JS', 'Tailwind CSS', 'JWT'],
    features: [
      'Autenticación JWT con roles diferenciados (Candidato y Empresa)',
      'Sistema de publicación y gestión de ofertas laborales',
      'Aplicaciones con un solo clic y carga de CV en PDF',
      'Dashboard para empresas con visualización de aplicaciones',
      'Panel de candidatos para seguimiento de postulaciones',
      'Notificaciones por email sobre cambios de estado'
    ],
    architecture: 'Arquitectura Hexágonal con API REST para comunicación frontend-backend. Spring Boot en el backend con JPA para persistencia en MySQL. Frontend en React con JavaScript y gestión de estado mediante Context API. Autenticación con JWT y Spring Security.',
    challenges: [
      'Diseño de sistema de roles y permisos que permita funcionalidades diferenciadas por tipo de usuario',
      'Publicacion y aplicacion de ofertas',
      'Optimización de queries para filtrado de ofertas',
      'Gestión de estados de aplicación con workflow claro (Pendiente → Revisado → Rechazado/Contratado)'
    ],
    demoUrl: 'https://github.com/whastica/ZeroXP',
    repoUrl: 'https://github.com/whastica/ZeroXP',
    youtubeUrl: 'https://www.youtube.com',
    status: 'En desarrollo'
  },
  {
    id: '2',
    name: 'QuickBuy - Plataforma de pagos contraentrega',
    shortDescription: 'Demostración técnica de sistema pedidos con pago contraentrega para Colombia, permitiendo a usuarios comprar productos de Amazon pagando al recibir.',
    fullDescription: 'QuickBuy es un proyecto demostrativo que simula un servicio de intermediación para compras en Amazon con pago contraentrega en Colombia. Los usuarios pueden pegar el link de cualquier producto Amazon, ver el precio real en COP (incluyendo envío internacional y comisión), y simular un pedido. El proyecto demuestra capacidades de scraping web, integración con APIs externas, cálculos financieros complejos y diseño de flujos de e-commerce. Nota importante: es un proyecto técnico personal que NO procesa transacciones reales.',
    image: '/images/QuickBuy.webp',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Springboot','JPA', 'JWT', 'Api Amazon'],
    features: [
      'Parser y validación de URLs de productos Amazon',
      'Scraping de información de productos (título, precio, imagen)',
      'Calculadora automática de costos (producto + envío + comisión)',
      'Formulario de pedido con validaciones',
      'Interfaz responsive optimizada para mobile',
      'Flujo completo de checkout sin procesamiento real de pagos'
    ],
    architecture: 'Aplicación frontend con React y JavaScript. Consumo de APIs REST externas para datos en tiempo real. Arquitectura basada en componentes reutilizables con separación clara entre lógica de presentación y lógica de negocio. Backend planeado con Spring Boot para gestión de pedidos y usuarios.',
    challenges: [
      'Manejo de diferentes formatos de URLs y productos de Amazon',
      'Cálculo preciso de costos considerando múltiples variables',
      'Experiencia de usuario intuitiva para convertir precio USD a COP de forma transparente',
      'Validación de direcciones colombianas y estimación de costos de envío local'
    ],
    demoUrl: 'https://github.com/whastica/EasyCod',
    repoUrl: 'https://github.com/whastica/EasyCod',
    youtubeUrl: 'https://www.youtube.com',
    status: 'Demo técnica'
  },
  {
    id: '3',
    name: 'E-commerce Freelance',
    shortDescription: 'Proyecto real desarrollado como trabajo freelance. Plataforma e-commerce personalizada para tienda de productos gaming, desarrollada como proyecto freelance para migración desde CMS y reducción de costos operativos. Actualmente en pausa por decisiones del cliente',
    fullDescription: 'GamerStore es un proyecto freelance real para una tienda de productos gaming en Colombia que operaba en una plataforma CMS. La solución custom permite control total de funcionalidades, ahorro significativo en costos operativos y personalización ilimitada. El sistema incluye catálogo completo de productos, carrito de compras, sistema de órdenes y preparación para integración con pasarelas de pago colombianas.',
    image: '/images/GamerStore.webp',
    technologies: ['Spring Boot', 'Spring Security', 'JPA', 'Hibernate', 'MySQL', 'React', 'TypeScript', 'Tailwind CSS', 'JWT'],
    features: [
      'Catálogo de productos con categorías y filtros avanzados',
      'Sistema de carrito de compras con persistencia',
      'Panel administrativo completo (productos, categorías, órdenes)',
      'Sistema de órdenes con tracking de estados',
      'Autenticación y autorización para administradores',
      'Preparación para integración con Wompi/PayU (pasarelas Colombia)'
    ],
    architecture: 'Arquitectura MVC tradicional con API REST. Backend con una arquitectura hexagonal y basada en DDD utilizando Spring Boot con Spring Data JPA para persistencia en MySQL. Frontend React con TypeScript y Tailwind CSS. Sistema de autenticación JWT con roles diferenciados. Arquitectura preparada para escalabilidad con separación clara entre capa de presentación, lógica de negocio y acceso a datos.',
    challenges: [
      'Optimización de carga de imágenes de productos (lazy loading, WebP, CDN)',
      'Implementación de carrito persistente que funcione con y sin autenticación',
      'Sistema de gestión de órdenes con múltiples estados y transiciones válidas',
      'Balance entre features del CMS original y desarrollo en tiempo razonable',
      'Cumplimiento de requisitos específicos del negocio (pre-órdenes, productos gaming)'
    ],
    demoUrl: '',
    repoUrl: '',
    youtubeUrl: 'https://www.youtube.com/',
    status: 'En pausa'
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
  name: 'Whalen Caicedo',
  title: 'Desarrollador Web Full Stack',
  email: 'whalensoft@gmail.com',
  linkedin: 'https://www.linkedin.com/in/whalen-stiven-caicedo/',
  github: 'https://github.com/whastica',
  location: 'Popayán, Colombia',
  education: 'Ingeniería de Sistemas',
  experience: '1.5 años',
  bio: 'Desarrollador web fullstack con experiencia en el desarrollo de aplicaciones web completas, desde interfaces modernas y responsivas hasta backends robustos y bien diseñados. Disfruto participar en todo el ciclo de desarrollo, comprender el problema, diseñar la solución y llevarla a producción con estándares profesionales. Actualmente enfoco mi crecimiento en consolidar un perfil sólido como ingeniero, fortaleciendo mis habilidades en desarrollo fullstack, arquitectura de software y construcción de productos digitales de calidad.'
};