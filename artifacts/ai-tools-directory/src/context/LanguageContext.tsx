import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.title': 'AI Tools Directory',
    'nav.toggle': 'ES',
    'hero.badge': 'Constantly Updated',
    'hero.title': 'Discover the Best AI Tools',
    'hero.subtitle': 'A curated directory of artificial intelligence software to supercharge your workflow, creativity, and productivity.',
    'search.placeholder': 'Search tools by name or description...',
    'filter.all': 'All Categories',
    'card.visit': 'Visit Tool',
    'footer.copyright': '© 2025 AI Tools Directory. Built for the future.',
    'empty.title': 'No tools found',
    'empty.subtitle': 'Try adjusting your search or filters to find what you are looking for.',
    // Categories
    'cat.chat': 'Chat',
    'cat.writing': 'Writing',
    'cat.image': 'Image',
    'cat.video': 'Video',
    'cat.audio': 'Audio',
    'cat.code': 'Code',
    'cat.productivity': 'Productivity',
    'cat.research': 'Research',
  },
  es: {
    'nav.title': 'Directorio de IA',
    'nav.toggle': 'EN',
    'hero.badge': 'Actualizado Constantemente',
    'hero.title': 'Descubre las Mejores Herramientas de IA',
    'hero.subtitle': 'Un directorio curado de software de inteligencia artificial para potenciar tu flujo de trabajo, creatividad y productividad.',
    'search.placeholder': 'Buscar por nombre o descripción...',
    'filter.all': 'Todas las Categorías',
    'card.visit': 'Visitar',
    'footer.copyright': '© 2025 Directorio de Herramientas IA. Construido para el futuro.',
    'empty.title': 'No se encontraron herramientas',
    'empty.subtitle': 'Intenta ajustar tu búsqueda o filtros para encontrar lo que buscas.',
    // Categories
    'cat.chat': 'Chat',
    'cat.writing': 'Escritura',
    'cat.image': 'Imagen',
    'cat.video': 'Video',
    'cat.audio': 'Audio',
    'cat.code': 'Código',
    'cat.productivity': 'Productividad',
    'cat.research': 'Investigación',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
