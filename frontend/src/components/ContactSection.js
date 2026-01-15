import React, { useState } from 'react';
import { personalInfo } from '../data/mockData';
import {
  MapPin,
  Briefcase,
  Code2,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Copy,
  CheckCircle2,
  Send,
  Mail,
  Linkedin
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
      borderColor: 'border-red-500/20 dark:border-red-500/30',
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
      borderColor: 'border-blue-500/20 dark:border-blue-500/30',
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
      borderColor: 'border-slate-500/20 dark:border-slate-500/30',
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
      color: 'text-violet-500'
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
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8
      bg-gradient-to-br from-slate-50 via-white to-slate-50
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-violet-600/10 border border-violet-500/30 rounded-full">
            <MessageCircle size={20} className="text-violet-400" />
            <span className="text-violet-600 dark:text-violet-300 font-medium text-sm">
              Hablemos
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
            ¡Conectemos y creemos algo{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
              increíble!
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Estoy disponible para nuevos proyectos, colaboraciones y oportunidades laborales.
            Si tienes una idea o proyecto en mente, me encantaría escucharte.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-slate-900/50
              rounded-2xl p-6 border ${method.borderColor} ${method.hoverColor}
              transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
            >
              {/* Hover gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.color}
                opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />

              <div className="relative space-y-4">

                {/* Header without icon */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">
                    {method.label}
                  </span>
                  <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${method.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-1 pt-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {method.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {method.description}
                  </p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {method.value}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <a
                    href={method.action}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5
                    bg-gradient-to-r ${method.color} text-white
                    rounded-lg font-semibold text-sm
                    transition-all duration-200 hover:shadow-lg hover:scale-[1.03]`}
                  >
                    {method.buttonText}
                    {method.external ? (
                      <ExternalLink size={14} />
                    ) : (
                      <ArrowRight size={14} />
                    )}
                  </a>

                  {method.copyable && (
                    <button
                      onClick={handleCopyEmail}
                      className={`p-2.5 border-2 ${method.borderColor} ${method.hoverColor}
                      rounded-lg transition-all duration-200 hover:scale-105`}
                      title="Copiar email"
                      aria-label="Copiar email al portapapeles"
                    >
                      {copiedEmail ? (
                        <CheckCircle2 size={18} className="text-green-500" />
                      ) : (
                        <Copy size={18} className="text-slate-600 dark:text-slate-400" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Info */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {quickInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900/50 rounded-xl p-6
                border border-slate-200 dark:border-slate-700/50
                hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800/50 rounded-lg">
                    <Icon size={24} className={info.color} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                      {info.label}
                    </p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {info.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="relative bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl p-8 md:p-12 overflow-hidden shadow-2xl">
          <div className="relative text-center space-y-6">
            <div className="inline-block p-3 bg-white/10 rounded-full">
              <Send size={32} className="text-white" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              ¿Listo para empezar tu proyecto?
            </h3>

            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Ya sea que tengas un proyecto definido o solo una idea inicial,
              estoy aquí para ayudarte a hacerla realidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-2 bg-white
                text-violet-600 px-8 py-4 rounded-xl font-semibold
                transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                <Mail size={20} />
                Enviar un correo
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10
                border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold
                transition-all duration-200 hover:bg-white/20 hover:scale-105"
              >
                <Linkedin size={20} />
                Conectar en LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} {personalInfo.name}. Desarrollado con React y Tailwind CSS.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
