/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // ===================================
      // SISTEMA DE ESPACIADO CONSISTENTE
      // Escala de 4px: 4, 8, 12, 16, 24, 32, 48, 64
      // ===================================
      spacing: {
        '1': '4px',    // 0.25rem
        '2': '8px',    // 0.5rem
        '3': '12px',   // 0.75rem
        '4': '16px',   // 1rem
        '6': '24px',   // 1.5rem
        '8': '32px',   // 2rem
        '12': '48px',  // 3rem
        '16': '64px',  // 4rem
        '20': '80px',  // 5rem
        '24': '96px',  // 6rem
      },

      // ===================================
      // SISTEMA TIPOGRÁFICO CONSISTENTE
      // ===================================
      fontSize: {
        // Cuerpo
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        
        // Títulos
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
      },

      // ===================================
      // BORDER RADIUS UNIFICADO
      // Solo 3 niveles: sm, md, lg
      // ===================================
      borderRadius: {
        'none': '0',
        'sm': '0.5rem',   // 8px - Para elementos pequeños (badges, inputs)
        'md': '0.75rem',  // 12px - Por defecto (buttons, cards pequeñas)
        'lg': '1rem',     // 16px - Cards grandes, modales
        'xl': '1.5rem',   // 24px - Hero sections, containers especiales
        'full': '9999px', // Círculos
      },

      // ===================================
      // SOMBRAS UNIFICADAS
      // Solo 3 niveles: sm, md, lg
      // ===================================
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(139, 92, 246, 0.05)',
        'md': '0 4px 6px -1px rgba(139, 92, 246, 0.1), 0 2px 4px -1px rgba(139, 92, 246, 0.06)',
        'lg': '0 10px 15px -3px rgba(139, 92, 246, 0.15), 0 4px 6px -2px rgba(139, 92, 246, 0.05)',
        'xl': '0 20px 25px -5px rgba(139, 92, 246, 0.2), 0 10px 10px -5px rgba(139, 92, 246, 0.04)',
        '2xl': '0 25px 50px -12px rgba(139, 92, 246, 0.25)',
        'none': '0 0 #0000',
      },

      // ===================================
      // COLORES (Sin cambios - ya están bien)
      // ===================================
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },

      // ===================================
      // ANIMACIONES
      // ===================================
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in': 'slide-in 0.3s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};