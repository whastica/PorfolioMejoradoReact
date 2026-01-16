import { useState, useEffect } from 'react';

/**
 * Hook personalizado para detectar qué sección está activa usando IntersectionObserver
 * @param {Array<string>} sectionIds - Array de IDs de las secciones a observar
 * @param {number} offset - Offset en px desde el top (para compensar navbar)
 * @returns {string} - ID de la sección actualmente activa
 */
export const useActiveSection = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    // Configuración del IntersectionObserver
    const observerOptions = {
      root: null, // viewport
      rootMargin: `-${offset}px 0px -50% 0px`, // Offset desde arriba y detectar cuando está en el tercio superior
      threshold: [0, 0.25, 0.5, 0.75, 1] // Múltiples thresholds para mejor precisión
    };

    // Callback del observer
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // Si la sección está visible y pasó el threshold
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Crear el observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar cada sección
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, offset]);

  return activeSection;
};