export type CategoryId = 'writing' | 'coding' | 'images' | 'video' | 'design' | 'voice' | 'automation' | 'research';

export interface Tool {
  id: string;
  name: string;
  url: string;
  logoUrl: string;
  categoryId: CategoryId;
  categoryColor: { bg: string; text: string };
  description: { en: string; es: string };
  visitLabel: { en: string; es: string };
}

const COLORS: Record<CategoryId, { bg: string; text: string }> = {
  writing:    { bg: 'rgba(16,185,129,.2)',  text: '#10b981' },
  coding:     { bg: 'rgba(16,185,129,.2)',  text: '#10b981' },
  images:     { bg: 'rgba(59,130,246,.2)',  text: '#3b82f6' },
  video:      { bg: 'rgba(245,158,11,.2)',  text: '#d97706' },
  design:     { bg: 'rgba(245,158,11,.2)',  text: '#d97706' },
  voice:      { bg: 'rgba(139,92,246,.2)',  text: '#8b5cf6' },
  automation: { bg: 'rgba(16,185,129,.2)',  text: '#10b981' },
  research:   { bg: 'rgba(99,102,241,.2)',  text: '#818cf8' },
};

export const CATEGORIES: { id: CategoryId; labelKey: string }[] = [
  { id: 'writing',    labelKey: 'cat.writing'    },
  { id: 'coding',     labelKey: 'cat.coding'     },
  { id: 'images',     labelKey: 'cat.images'     },
  { id: 'video',      labelKey: 'cat.video'      },
  { id: 'design',     labelKey: 'cat.design'     },
  { id: 'voice',      labelKey: 'cat.voice'      },
  { id: 'automation', labelKey: 'cat.automation' },
  { id: 'research',   labelKey: 'cat.research'   },
];

const logo = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const TOOLS: Tool[] = [
  {
    id: 'chatgpt', name: 'ChatGPT', url: 'https://chatgpt.com/',
    logoUrl: logo('openai.com'),
    categoryId: 'writing', categoryColor: COLORS.writing,
    description: {
      en: 'Best for versatile writing, brainstorming, code assistance and content creation.',
      es: 'Ideal para escritura versátil, lluvia de ideas, asistencia de código y creación de contenido.'
    },
    visitLabel: { en: 'Try ChatGPT', es: 'Probar ChatGPT' }
  },
  {
    id: 'claude', name: 'Claude', url: 'https://claude.ai/',
    logoUrl: logo('anthropic.com'),
    categoryId: 'writing', categoryColor: COLORS.writing,
    description: {
      en: 'Perfect for long-form writing, analysis and complex reasoning tasks.',
      es: 'Perfecto para escritura larga, análisis y tareas de razonamiento complejo.'
    },
    visitLabel: { en: 'Try Claude', es: 'Probar Claude' }
  },
  {
    id: 'gemini', name: 'Gemini', url: 'https://gemini.google.com/',
    logoUrl: logo('google.com'),
    categoryId: 'research', categoryColor: COLORS.research,
    description: {
      en: "Google's most capable multimodal AI for research, writing and complex tasks.",
      es: 'La IA multimodal más capaz de Google para investigación, escritura y tareas complejas.'
    },
    visitLabel: { en: 'Try Gemini', es: 'Probar Gemini' }
  },
  {
    id: 'copilot', name: 'GitHub Copilot', url: 'https://github.com/features/copilot',
    logoUrl: logo('github.com'),
    categoryId: 'coding', categoryColor: COLORS.coding,
    description: {
      en: 'Best AI coding assistant integrated in your IDE for real-time code completion.',
      es: 'El mejor asistente de código de IA integrado en tu IDE para completado en tiempo real.'
    },
    visitLabel: { en: 'Try Copilot', es: 'Probar Copilot' }
  },
  {
    id: 'cursor', name: 'Cursor', url: 'https://cursor.sh/',
    logoUrl: logo('cursor.com'),
    categoryId: 'coding', categoryColor: COLORS.coding,
    description: {
      en: 'AI-first code editor built for pair programming with advanced AI models.',
      es: 'Editor de código centrado en IA construido para programar en pareja con modelos avanzados.'
    },
    visitLabel: { en: 'Try Cursor', es: 'Probar Cursor' }
  },
  {
    id: 'midjourney', name: 'Midjourney', url: 'https://www.midjourney.com/',
    logoUrl: logo('midjourney.com'),
    categoryId: 'images', categoryColor: COLORS.images,
    description: {
      en: 'Leading AI for artistic images, concepts and creative visuals via Discord.',
      es: 'IA líder para imágenes artísticas, conceptos y visuales creativos vía Discord.'
    },
    visitLabel: { en: 'Try Midjourney', es: 'Probar Midjourney' }
  },
  {
    id: 'dalle', name: 'DALL-E 3', url: 'https://openai.com/dall-e-3',
    logoUrl: logo('openai.com'),
    categoryId: 'images', categoryColor: COLORS.images,
    description: {
      en: 'Excellent for precise image generation from detailed text prompts by OpenAI.',
      es: 'Excelente para generación precisa de imágenes a partir de descripciones detalladas de OpenAI.'
    },
    visitLabel: { en: 'Try DALL-E', es: 'Probar DALL-E' }
  },
  {
    id: 'firefly', name: 'Adobe Firefly', url: 'https://firefly.adobe.com/',
    logoUrl: logo('adobe.com'),
    categoryId: 'images', categoryColor: COLORS.images,
    description: {
      en: 'Creative generative AI models by Adobe, designed safe for commercial use.',
      es: 'Modelos de IA generativa de Adobe diseñados para uso comercial seguro.'
    },
    visitLabel: { en: 'Try Firefly', es: 'Probar Firefly' }
  },
  {
    id: 'synthesia', name: 'Synthesia', url: 'https://www.synthesia.io/',
    logoUrl: logo('synthesia.io'),
    categoryId: 'video', categoryColor: COLORS.video,
    description: {
      en: 'Create professional avatar videos from text in 120+ languages.',
      es: 'Crea videos profesionales con avatares a partir de texto en más de 120 idiomas.'
    },
    visitLabel: { en: 'Try Synthesia', es: 'Probar Synthesia' }
  },
  {
    id: 'runway', name: 'Runway', url: 'https://runwayml.com/',
    logoUrl: logo('runwayml.com'),
    categoryId: 'video', categoryColor: COLORS.video,
    description: {
      en: 'Advancing creativity with AI. Offers generative video models and editing tools.',
      es: 'Impulsando la creatividad con IA. Ofrece modelos generativos de video y herramientas de edición.'
    },
    visitLabel: { en: 'Try Runway', es: 'Probar Runway' }
  },
  {
    id: 'canva', name: 'Canva Magic Studio', url: 'https://www.canva.com/magic/',
    logoUrl: logo('canva.com'),
    categoryId: 'design', categoryColor: COLORS.design,
    description: {
      en: 'AI-powered design tools for presentations, social media and marketing materials.',
      es: 'Herramientas de diseño con IA para presentaciones, redes sociales y materiales de marketing.'
    },
    visitLabel: { en: 'Try Canva', es: 'Probar Canva' }
  },
  {
    id: 'figma-ai', name: 'Figma AI', url: 'https://www.figma.com/ai/',
    logoUrl: logo('figma.com'),
    categoryId: 'design', categoryColor: COLORS.design,
    description: {
      en: 'AI features built into Figma to help you design faster and more creatively.',
      es: 'Funciones de IA integradas en Figma para diseñar más rápido y creativamente.'
    },
    visitLabel: { en: 'Try Figma AI', es: 'Probar Figma AI' }
  },
  {
    id: 'elevenlabs', name: 'ElevenLabs', url: 'https://elevenlabs.io/',
    logoUrl: logo('elevenlabs.io'),
    categoryId: 'voice', categoryColor: COLORS.voice,
    description: {
      en: 'Most realistic AI voice generation for voiceovers, dubbing and text-to-speech.',
      es: 'Generación de voz de IA más realista para locuciones, doblaje y texto a voz.'
    },
    visitLabel: { en: 'Try ElevenLabs', es: 'Probar ElevenLabs' }
  },
  {
    id: 'murf', name: 'Murf AI', url: 'https://murf.ai/',
    logoUrl: logo('murf.ai'),
    categoryId: 'voice', categoryColor: COLORS.voice,
    description: {
      en: 'Studio-quality AI voices for videos, podcasts, and professional presentations.',
      es: 'Voces de IA con calidad de estudio para videos, podcasts y presentaciones profesionales.'
    },
    visitLabel: { en: 'Try Murf', es: 'Probar Murf' }
  },
  {
    id: 'zapier', name: 'Zapier AI', url: 'https://zapier.com/ai',
    logoUrl: logo('zapier.com'),
    categoryId: 'automation', categoryColor: COLORS.automation,
    description: {
      en: 'AI-powered no-code automation connecting 6000+ apps and services.',
      es: 'Automatización sin código impulsada por IA que conecta más de 6000 aplicaciones y servicios.'
    },
    visitLabel: { en: 'Try Zapier', es: 'Probar Zapier' }
  },
  {
    id: 'perplexity', name: 'Perplexity', url: 'https://www.perplexity.ai/',
    logoUrl: logo('perplexity.ai'),
    categoryId: 'research', categoryColor: COLORS.research,
    description: {
      en: 'AI-powered search engine providing conversational answers with cited sources.',
      es: 'Motor de búsqueda con IA que proporciona respuestas conversacionales con fuentes citadas.'
    },
    visitLabel: { en: 'Try Perplexity', es: 'Probar Perplexity' }
  },
  {
    id: 'jasper', name: 'Jasper', url: 'https://www.jasper.ai/',
    logoUrl: logo('jasper.ai'),
    categoryId: 'writing', categoryColor: COLORS.writing,
    description: {
      en: 'Generative AI platform for business that helps creators produce marketing content fast.',
      es: 'Plataforma de IA generativa para empresas que ayuda a los creadores a producir contenido de marketing.'
    },
    visitLabel: { en: 'Try Jasper', es: 'Probar Jasper' }
  },
  {
    id: 'grammarly', name: 'Grammarly AI', url: 'https://www.grammarly.com/',
    logoUrl: logo('grammarly.com'),
    categoryId: 'writing', categoryColor: COLORS.writing,
    description: {
      en: 'AI writing assistance to help you communicate clearly, confidently, and effectively.',
      es: 'Asistencia de escritura con IA para comunicarte de forma clara, segura y efectiva.'
    },
    visitLabel: { en: 'Try Grammarly', es: 'Probar Grammarly' }
  },
];

export const COMPARISON_ROWS: { taskKey: string; best: string; alt: string; pro: string }[] = [
  { taskKey: 'comparison.writing', best: 'ChatGPT',    alt: 'Claude',       pro: 'Gemini'        },
  { taskKey: 'comparison.coding',  best: 'Copilot',    alt: 'ChatGPT',      pro: 'Cursor'        },
  { taskKey: 'comparison.images',  best: 'Midjourney', alt: 'DALL-E 3',     pro: 'Firefly'       },
  { taskKey: 'comparison.video',   best: 'Synthesia',  alt: 'Runway',       pro: 'HeyGen'        },
  { taskKey: 'comparison.design',  best: 'Canva',      alt: 'Figma AI',     pro: 'Adobe Express' },
  { taskKey: 'comparison.voice',   best: 'ElevenLabs', alt: 'Murf',         pro: 'Respeecher'    },
];
