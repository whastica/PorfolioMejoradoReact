import React, { useState } from 'react';
import { personalInfo } from '../data/mockData';
import { 
  MapPin, 
  Briefcase, 
  Code2, 
  MessageCircle, 
  ExternalLink,
  Copy,
  CheckCircle2
} from 'lucide-react';

const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Error al copiar email:', err);
    }
  };

  const contactMethods = [
    {
      label: 'EMAIL',
      title: 'Email',
      description: 'La mejor forma de contactarme',
      value: personalInfo.email,
      action: `mailto:${personalInfo.email}`,
      buttonText: 'Enviar correo',
      color: 'from-red-500 to-orange-500',
      borderColor: 'border-red-500/20',
      hoverColor: 'hover:border-red-500/50',
      copyable: true
    },
    {
      label: 'LINKEDIN',
      title: 'LinkedIn',
      description: 'Conectemos profesionalmente',
      value: 'Perfil profesional',
      action: personalInfo.linkedin,
      buttonText: 'Ver perfil',
      color: 'from-blue-600 to-blue-400',
      borderColor: 'border-blue-500/20',
      hoverColor: 'hover:border-blue-500/50',
      external: true
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
      hoverColor: 'hover:border-slate-500/50',
      external: true
    }
  ];

  const quickInfo = [
    {
      icon: MapPin,
      label: 'Ubicación',
      value: personalInfo.location,
      color: 'text-emerald-500'
    },
    {
      icon: Briefcase,
      label: 'Disponibilidad',
      value: 'Disponible para proyectos',
      color: 'text-primary'
    },
    {
      icon: Code2,
      label: 'Especialización',
      value: 'Full Stack Development',
      color: 'text-blue-500'
    }
  ];

  return (
    <section
      id="contacto"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <MessageCircle size={20} className="text-primary" />
            <span className="text-primary font-medium text-sm">
              Hablemos
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            ¡Conectemos y creemos algo{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              increíble!
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estoy disponible para nuevos proyectos, colaboraciones y oportunidades laborales.
            Si tienes una idea o proyecto en mente, me encantaría escucharte.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group relative bg-card
                rounded-2xl p-6 border ${method.borderColor} ${method.hoverColor}
                transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
            >
              {/* Hover gradient effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.color}
                  opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />
              
              <div className="relative space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest text-muted-foreground">
                    {method.label}
                  </span>
                  <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${method.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-1 pt-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                  <p className="text-sm font-medium text-foreground/80">
                    {method.value}
                  </p>
                </div>

                {/* Actions - Estilo Hero Section */}
                <div className="flex gap-2 pt-2">
                  <a
                    href={method.action}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="flex-1 flex items-center justify-center gap-2
                      bg-primary hover:bg-primary/90
                      text-primary-foreground
                      px-4 py-2.5 rounded-lg font-medium
                      transition-all duration-200
                      hover:scale-105
                      shadow-lg hover:shadow-xl
                      text-sm"
                  >
                    {method.buttonText}
                    {method.external && <ExternalLink size={14} />}
                  </a>

                  {method.copyable && (
                    <button
                      onClick={handleCopyEmail}
                      className="p-2.5 
                        border-2 border-primary/50
                        hover:border-primary
                        hover:bg-primary/10
                        rounded-lg 
                        transition-all duration-200 
                        hover:scale-105"
                      title="Copiar email"
                      aria-label="Copiar email al portapapeles"
                    >
                      {copiedEmail ? (
                        <CheckCircle2 size={18} className="text-green-500" />
                      ) : (
                        <Copy size={18} className="text-muted-foreground" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Info */}
        <div className="grid sm:grid-cols-3 gap-6">
          {quickInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6
                  border border-border
                  hover:border-primary/50 
                  transition-all duration-300
                  hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <Icon size={24} className={info.color} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="font-semibold text-foreground">
                      {info.value}
                    </p>
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