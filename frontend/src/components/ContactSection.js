import React, { useState } from 'react';
import { personalInfo } from '../data/mockData';
import { 
  MapPin, 
  Briefcase, 
  Code2, 
  MessageCircle, 
  ExternalLink,
  Send,
  User,
  Mail,
  MessageSquare,
  Loader2,
  CheckCircle2
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Reemplazar con EmailJS o tu backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error al enviar:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      label: 'LINKEDIN',
      title: 'LinkedIn',
      description: 'Conectemos profesionalmente',
      value: 'Perfil profesional',
      action: personalInfo.linkedin,
      buttonText: 'Ver perfil',
      color: 'from-blue-600 to-blue-400',
      borderColor: 'border-blue-500/20',
      hoverColor: 'hover:border-blue-500/50'
    },
    {
      label: 'GITHUB',
      title: 'GitHub',
      description: 'Revisa mis proyectos',
      value: 'Repositorios públicos',
      action: personalInfo.github,
      buttonText: 'Ver GitHub',
      color: 'from-slate-600 to-slate-400',
      borderColor: 'border-slate-500/20',
      hoverColor: 'hover:border-slate-500/50'
    }
  ];

  const quickInfo = [
    { icon: MapPin, label: 'Ubicación', value: personalInfo.location, color: 'text-emerald-500' },
    { icon: Briefcase, label: 'Disponibilidad', value: 'Disponible para proyectos', color: 'text-primary' },
    { icon: Code2, label: 'Especialización', value: 'Full Stack Development', color: 'text-blue-500' }
  ];

  const techStack = [
    { name: 'Spring Boot', color: 'text-green-400' },
    { name: 'React', color: 'text-cyan-400' },
    { name: 'TypeScript', color: 'text-blue-500' },
    { name: 'Node.js', color: 'text-emerald-400' },
    { name: 'MySQL', color: 'text-blue-400' },
    { name: 'PostgreSQL', color: 'text-blue-600' },
    { name: 'MongoDB', color: 'text-green-500' },
    { name: 'Tailwind CSS', color: 'text-teal-400' },
    { name: 'Docker', color: 'text-blue-400' },
    { name: 'AWS', color: 'text-orange-400' }
  ];

  return (
    <section id="contacto" className="min-h-screen py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-6 fade-in-section">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <MessageCircle size={20} className="text-primary" />
            <span className="text-primary font-medium text-sm">Hablemos</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            ¡Conectemos y creemos algo{' '}
            <span className="gradient-text">increíble!</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estoy disponible para nuevos proyectos, colaboraciones y oportunidades laborales.
            Si tienes una idea o proyecto en mente, me encantaría escucharte.
          </p>
        </div>

        {/* Tech Stack Visual */}
        <div className="mb-16">
          <h3 className="text-center text-sm font-semibold text-muted-foreground mb-6 tracking-wider">
            TECNOLOGÍAS QUE DOMINO
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group px-4 py-2 bg-card border border-border rounded-sm hover:border-primary/50 transition-all duration-300 hover-scale cursor-default fade-in-section"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className={`text-sm font-medium ${tech.color} group-hover:text-primary transition-colors duration-300`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Contact Form */}
          <div className="bg-card rounded-lg px-8 py-8 border border-border shadow-md border-animate hover-glow">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Envíame un mensaje</h3>
              <p className="text-muted-foreground text-sm">Completa el formulario y te responderé lo antes posible</p>
            </div>

            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-foreground"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-foreground"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-3 top-3 text-muted-foreground" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none text-foreground"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover-scale disabled:scale-100 shadow-lg hover:shadow-xl disabled:cursor-not-allowed btn-ripple"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle2 size={20} />
                    <span>¡Enviado!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="px-4 py-4 bg-green-500/10 border border-green-500/30 rounded-md">
                  <p className="text-green-600 dark:text-green-400 text-sm text-center">
                    ¡Mensaje enviado! Te responderé pronto.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="px-4 py-4 bg-red-500/10 border border-red-500/30 rounded-md">
                  <p className="text-red-600 dark:text-red-400 text-sm text-center">
                    Error al enviar. Por favor, intenta nuevamente.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">O encuéntrame en</h3>
              <p className="text-muted-foreground text-sm mb-6">También puedes contactarme a través de mis redes</p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`group relative bg-card rounded-lg px-6 py-6 border ${method.borderColor} ${method.hoverColor} transition-all duration-300 shadow-md hover:shadow-xl hover-scale border-animate`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300`} />
                  
                  <div className="relative space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-widest text-muted-foreground">{method.label}</span>
                      <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${method.color}`} />
                    </div>

                    <div className="space-y-1 pt-2">
                      <h3 className="text-2xl font-bold text-foreground">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                      <p className="text-sm font-medium text-foreground/80">{method.value}</p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={method.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-md font-medium transition-all duration-200 hover-scale shadow-md hover:shadow-lg text-sm btn-ripple"
                      >
                        {method.buttonText}
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Email directo */}
            <div className="px-4 py-4 bg-muted/50 rounded-md border border-border">
              <p className="text-sm text-muted-foreground text-center">
                También puedes escribirme directamente a{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline font-medium">
                  {personalInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid sm:grid-cols-3 gap-6">
          {quickInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-md px-6 py-6 border border-border hover:border-primary/50 transition-all duration-300 hover-glow fade-in-section"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-muted rounded-md">
                    <Icon size={24} className={info.color} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. Desarrollado con React y Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;