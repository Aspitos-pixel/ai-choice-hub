import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.logo': '🤖 AI Choice Hub',
    'hero.title': 'Best AI Tools\nfor Every Task',
    'hero.subtitle': 'Find the perfect AI for writing, coding, images, video, design, voice & automation. Direct links to official sites with expert comparisons.',
    'hero.cta': 'Explore All Tools',
    'section.title': 'AI Tools by Category',
    'card.visit': '→ Visit',
    'filter.all': 'All',
    'search.placeholder': 'Search tools...',
    'comparison.title': 'Quick Comparison',
    'comparison.task': 'Task',
    'comparison.best': 'Best Choice',
    'comparison.alt': 'Alternative',
    'comparison.pro': 'Pro Option',
    'comparison.writing': 'Writing',
    'comparison.coding': 'Coding',
    'comparison.images': 'Images',
    'comparison.video': 'Video',
    'comparison.design': 'Design',
    'comparison.voice': 'Voice',
    'footer.copy': '© 2026 AI Choice Hub. Curated by AI experts for AI users.',
    'footer.privacy': 'Privacy',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact',
    'cat.writing': 'Writing & Chat',
    'cat.coding': 'Coding',
    'cat.images': 'Images',
    'cat.video': 'Video',
    'cat.design': 'Design',
    'cat.voice': 'Voice',
    'cat.automation': 'Automation',
    'cat.research': 'Research',
  },
  es: {
    'nav.logo': '🤖 AI Choice Hub',
    'hero.title': 'Las Mejores\nHerramientas de IA',
    'hero.subtitle': 'Encuentra la IA perfecta para escritura, código, imágenes, video, diseño, voz y automatización. Links directos a sitios oficiales con comparaciones expertas.',
    'hero.cta': 'Explorar Herramientas',
    'section.title': 'Herramientas de IA por Categoría',
    'card.visit': '→ Visitar',
    'filter.all': 'Todas',
    'search.placeholder': 'Buscar herramientas...',
    'comparison.title': 'Comparación Rápida',
    'comparison.task': 'Tarea',
    'comparison.best': 'Mejor Opción',
    'comparison.alt': 'Alternativa',
    'comparison.pro': 'Opción Pro',
    'comparison.writing': 'Escritura',
    'comparison.coding': 'Código',
    'comparison.images': 'Imágenes',
    'comparison.video': 'Video',
    'comparison.design': 'Diseño',
    'comparison.voice': 'Voz',
    'footer.copy': '© 2026 AI Choice Hub. Curado por expertos en IA para usuarios de IA.',
    'footer.privacy': 'Privacidad',
    'footer.legal': 'Legal',
    'footer.contact': 'Contacto',
    'cat.writing': 'Escritura y Chat',
    'cat.coding': 'Código',
    'cat.images': 'Imágenes',
    'cat.video': 'Video',
    'cat.design': 'Diseño',
    'cat.voice': 'Voz',
    'cat.automation': 'Automatización',
    'cat.research': 'Investigación',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => translations[language][key] ?? key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
