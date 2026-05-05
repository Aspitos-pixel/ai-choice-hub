import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.logo': 'AI Choice Hub',
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
    'no.results': 'No tools match your search.',
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last updated: March 20, 2026',
    'privacy.intro': 'AI Choice Hub ("we", "us", "our") operates https://choicehub.ai and values your privacy.',
    'privacy.collect.title': 'What We Collect',
    'privacy.collect.1': 'Analytics data (Google Analytics)',
    'privacy.collect.2': 'Cookies for site functionality',
    'privacy.collect.3': 'No personal data collection',
    'privacy.use.title': 'How We Use Data',
    'privacy.use.text': 'We use analytics to improve user experience and site performance. No data is sold to third parties.',
    'privacy.cookies.title': 'Cookies',
    'privacy.cookies.text': 'This site uses functional cookies. You can manage preferences in your browser settings.',
    'privacy.third.title': 'Third Parties',
    'privacy.third.1': 'Google Analytics (anonymized)',
    'privacy.third.2': 'Affiliate links to AI tools',
    'privacy.contact.label': 'Contact:',
    'legal.title': 'Legal Notice',
    'legal.owner.title': 'Owner',
    'legal.owner.line2': 'Owner: AI Tools Directory',
    'legal.content.title': 'Content',
    'legal.content.text': 'All content is for informational purposes. We may earn commissions from affiliate links.',
    'legal.liability.title': 'Liability',
    'legal.liability.text': 'We are not responsible for third-party tools or services linked from this site.',
    'legal.copyright.title': 'Copyright',
    'legal.copyright.text': '© 2026 AI Choice Hub. All rights reserved.',
    'contact.title': 'Contact Us',
    'contact.email.label': 'Email:',
    'contact.message': 'Feature requests and tool suggestions welcome!',
  },
  es: {
    'nav.logo': 'AI Choice Hub',
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
    'no.results': 'Ninguna herramienta coincide con tu búsqueda.',
    'privacy.title': 'Política de Privacidad',
    'privacy.updated': 'Última actualización: 20 de marzo de 2026',
    'privacy.intro': 'AI Choice Hub ("nosotros") opera https://choicehub.ai y valora tu privacidad.',
    'privacy.collect.title': 'Qué Recopilamos',
    'privacy.collect.1': 'Datos analíticos (Google Analytics)',
    'privacy.collect.2': 'Cookies para la funcionalidad del sitio',
    'privacy.collect.3': 'Sin recopilación de datos personales',
    'privacy.use.title': 'Cómo Usamos los Datos',
    'privacy.use.text': 'Usamos análisis para mejorar la experiencia del usuario y el rendimiento del sitio. No se venden datos a terceros.',
    'privacy.cookies.title': 'Cookies',
    'privacy.cookies.text': 'Este sitio usa cookies funcionales. Puedes gestionar las preferencias en la configuración de tu navegador.',
    'privacy.third.title': 'Terceros',
    'privacy.third.1': 'Google Analytics (anonimizado)',
    'privacy.third.2': 'Enlaces de afiliados a herramientas de IA',
    'privacy.contact.label': 'Contacto:',
    'legal.title': 'Aviso Legal',
    'legal.owner.title': 'Propietario',
    'legal.owner.line2': 'Propietario: Directorio de Herramientas de IA',
    'legal.content.title': 'Contenido',
    'legal.content.text': 'Todo el contenido es informativo. Podemos ganar comisiones de los enlaces de afiliados.',
    'legal.liability.title': 'Responsabilidad',
    'legal.liability.text': 'No somos responsables de herramientas o servicios de terceros enlazados desde este sitio.',
    'legal.copyright.title': 'Derechos de Autor',
    'legal.copyright.text': '© 2026 AI Choice Hub. Todos los derechos reservados.',
    'contact.title': 'Contáctanos',
    'contact.email.label': 'Correo:',
    'contact.message': '¡Solicitudes de funciones y sugerencias de herramientas son bienvenidas!',
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
