import React, { useState } from 'react';
import { personalInfo } from '../data/mockData';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (since it's frontend only)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.github,
      icon: Github,
      color: 'hover:text-gray-600 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            ¡<span className="gradient-text">Conectemos!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente o quieres colaborar? Me encantaría conocer tus ideas y 
            ver cómo podemos trabajar juntos para crear algo increíble.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 hover:bg-accent/50 rounded-lg transition-colors duration-200">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">{personalInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 hover:bg-accent/50 rounded-lg transition-colors duration-200">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ubicación</h4>
                    <p className="text-muted-foreground">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Redes sociales</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-accent/50 hover:bg-accent rounded-xl transition-all duration-200 hover:scale-110 ${social.color} group`}
                    title={social.name}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Sígueme en mis redes para mantente al día con mis últimos proyectos y contenido técnico.
              </p>
            </div>

            {/* Call to action */}
            <div className="glass-effect p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <h3 className="text-xl font-bold mb-3 gradient-text">¿Listo para comenzar?</h3>
              <p className="text-muted-foreground mb-4">
                Estoy disponible para nuevos proyectos y oportunidades laborales. 
                ¡Hablemos sobre cómo puedo ayudarte a materializar tus ideas!
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  <Linkedin size={16} />
                  <span>Conectar en LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center space-x-2 border border-primary/50 hover:border-primary hover:bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  <Mail size={16} />
                  <span>Enviar email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Envíame un mensaje</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle size={20} />
                  <span className="font-medium">¡Mensaje enviado correctamente!</span>
                </div>
                <p className="text-green-600/80 text-sm mt-1">
                  Gracias por tu mensaje. Te responderé lo antes posible.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                  placeholder="¿De qué se trata tu mensaje?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <Send size={18} />
                )}
                <span>{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}</span>
              </button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              * Los campos marcados son obligatorios. Tu información será tratada con total confidencialidad.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground">
            © 2024 {personalInfo.name}. Desarrollado con ❤️ usando React y Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;