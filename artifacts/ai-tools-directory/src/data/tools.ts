import { 
  MessageSquare, 
  PenTool, 
  Image as ImageIcon, 
  Video, 
  Headphones, 
  Code2, 
  Zap, 
  Search,
  Sparkles,
  Bot,
  BrainCircuit,
  Wand2,
  FileCode2,
  Mic,
  Camera,
  Layers
} from 'lucide-react';
import { ElementType } from 'react';

export type CategoryId = 'chat' | 'writing' | 'image' | 'video' | 'audio' | 'code' | 'productivity' | 'research';

export interface Category {
  id: CategoryId;
  icon: ElementType;
}

export const CATEGORIES: Category[] = [
  { id: 'chat', icon: MessageSquare },
  { id: 'writing', icon: PenTool },
  { id: 'image', icon: ImageIcon },
  { id: 'video', icon: Video },
  { id: 'audio', icon: Headphones },
  { id: 'code', icon: Code2 },
  { id: 'productivity', icon: Zap },
  { id: 'research', icon: Search },
];

export interface Tool {
  id: string;
  name: string;
  url: string;
  icon: ElementType;
  color: string;
  categories: CategoryId[];
  description: {
    en: string;
    es: string;
  };
}

export const TOOLS: Tool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    url: 'https://chat.openai.com',
    icon: Bot,
    color: 'bg-emerald-500',
    categories: ['chat', 'productivity'],
    description: {
      en: 'Advanced conversational AI model by OpenAI capable of answering questions, writing text, and more.',
      es: 'Modelo de IA conversacional avanzado de OpenAI capaz de responder preguntas, escribir texto y más.'
    }
  },
  {
    id: 'claude',
    name: 'Claude',
    url: 'https://claude.ai',
    icon: BrainCircuit,
    color: 'bg-orange-600',
    categories: ['chat', 'writing'],
    description: {
      en: 'A next-generation AI assistant by Anthropic, focused on safety, helpfulness, and large context windows.',
      es: 'Un asistente de IA de próxima generación de Anthropic, centrado en la seguridad y ventanas de contexto amplias.'
    }
  },
  {
    id: 'gemini',
    name: 'Gemini',
    url: 'https://gemini.google.com',
    icon: Sparkles,
    color: 'bg-blue-500',
    categories: ['chat', 'research'],
    description: {
      en: 'Google’s most capable and general AI model, designed to be multimodal from the ground up.',
      es: 'El modelo de IA más capaz de Google, diseñado para ser multimodal desde el principio.'
    }
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    url: 'https://midjourney.com',
    icon: Wand2,
    color: 'bg-indigo-600',
    categories: ['image'],
    description: {
      en: 'An independent research lab exploring new mediums of thought and generating stunning images from text prompts.',
      es: 'Laboratorio de investigación independiente que genera imágenes impresionantes a partir de texto.'
    }
  },
  {
    id: 'dalle',
    name: 'DALL-E 3',
    url: 'https://openai.com/dall-e-3',
    icon: ImageIcon,
    color: 'bg-teal-500',
    categories: ['image'],
    description: {
      en: 'OpenAI’s image generation model that understands significantly more nuance and detail.',
      es: 'Modelo de generación de imágenes de OpenAI que entiende muchos más matices y detalles.'
    }
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    url: 'https://stability.ai',
    icon: Layers,
    color: 'bg-purple-600',
    categories: ['image'],
    description: {
      en: 'Open-source latent text-to-image diffusion model capable of generating photorealistic images.',
      es: 'Modelo de código abierto capaz de generar imágenes fotorrealistas a partir de texto.'
    }
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    url: 'https://github.com/features/copilot',
    icon: FileCode2,
    color: 'bg-slate-800',
    categories: ['code'],
    description: {
      en: 'An AI pair programmer that offers autocomplete-style suggestions as you code.',
      es: 'Un programador en pareja de IA que ofrece sugerencias de autocompletado mientras codificas.'
    }
  },
  {
    id: 'cursor',
    name: 'Cursor',
    url: 'https://cursor.sh',
    icon: Code2,
    color: 'bg-gray-900',
    categories: ['code'],
    description: {
      en: 'The AI-first code editor built for pair programming with advanced AI models.',
      es: 'El editor de código centrado en IA construido para programar en pareja con modelos avanzados.'
    }
  },
  {
    id: 'jasper',
    name: 'Jasper',
    url: 'https://jasper.ai',
    icon: PenTool,
    color: 'bg-violet-600',
    categories: ['writing'],
    description: {
      en: 'Generative AI platform for business that helps creators break through writer’s block.',
      es: 'Plataforma de IA generativa para empresas que ayuda a los creadores a superar el bloqueo del escritor.'
    }
  },
  {
    id: 'copyai',
    name: 'Copy.ai',
    url: 'https://copy.ai',
    icon: PenTool,
    color: 'bg-zinc-800',
    categories: ['writing'],
    description: {
      en: 'An AI-powered copywriter that generates high-quality copy for your business.',
      es: 'Un redactor impulsado por IA que genera textos de alta calidad para tu negocio.'
    }
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    url: 'https://elevenlabs.io',
    icon: Mic,
    color: 'bg-slate-900',
    categories: ['audio'],
    description: {
      en: 'The most realistic and versatile AI speech software, ever. Creators use it to voice their content.',
      es: 'El software de voz de IA más realista y versátil. Los creadores lo usan para dar voz a su contenido.'
    }
  },
  {
    id: 'runway',
    name: 'Runway',
    url: 'https://runwayml.com',
    icon: Video,
    color: 'bg-cyan-600',
    categories: ['video'],
    description: {
      en: 'Advancing creativity with artificial intelligence. Offers generative video models like Gen-2.',
      es: 'Avanzando la creatividad con IA. Ofrece modelos generativos de video como Gen-2.'
    }
  },
  {
    id: 'sora',
    name: 'Sora',
    url: 'https://openai.com/sora',
    icon: Camera,
    color: 'bg-rose-500',
    categories: ['video'],
    description: {
      en: 'OpenAI’s text-to-video model that can create realistic and imaginative scenes from text instructions.',
      es: 'Modelo de texto a video de OpenAI que puede crear escenas realistas e imaginativas a partir de texto.'
    }
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    url: 'https://perplexity.ai',
    icon: Search,
    color: 'bg-cyan-800',
    categories: ['research', 'chat'],
    description: {
      en: 'An AI-powered search engine that provides conversational answers with cited sources.',
      es: 'Un motor de búsqueda impulsado por IA que proporciona respuestas conversacionales con fuentes citadas.'
    }
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    url: 'https://notion.so/product/ai',
    icon: Zap,
    color: 'bg-slate-800',
    categories: ['productivity', 'writing'],
    description: {
      en: 'A connected assistant that helps you think bigger, work faster, and write better inside Notion.',
      es: 'Un asistente conectado que te ayuda a pensar en grande, trabajar más rápido y escribir mejor.'
    }
  },
  {
    id: 'grammarly-ai',
    name: 'Grammarly AI',
    url: 'https://grammarly.com',
    icon: PenTool,
    color: 'bg-green-500',
    categories: ['writing'],
    description: {
      en: 'AI writing assistance to help you communicate clearly, confidently, and effectively.',
      es: 'Asistencia de escritura con IA para ayudarte a comunicarte de manera clara y efectiva.'
    }
  },
  {
    id: 'otter',
    name: 'Otter.ai',
    url: 'https://otter.ai',
    icon: Headphones,
    color: 'bg-blue-600',
    categories: ['productivity', 'audio'],
    description: {
      en: 'An AI meeting assistant that records audio, writes notes, automatically captures slides, and generates summaries.',
      es: 'Asistente de reuniones de IA que graba audio, toma notas y genera resúmenes automáticamente.'
    }
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    url: 'https://synthesia.io',
    icon: Video,
    color: 'bg-indigo-500',
    categories: ['video'],
    description: {
      en: 'Create professional videos with AI avatars and voiceovers in minutes.',
      es: 'Crea videos profesionales con avatares de IA y voces en off en minutos.'
    }
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    url: 'https://heygen.com',
    icon: Video,
    color: 'bg-purple-500',
    categories: ['video'],
    description: {
      en: 'Innovative AI video generation platform for creating engaging business videos.',
      es: 'Innovadora plataforma de generación de video con IA para crear videos empresariales.'
    }
  },
  {
    id: 'firefly',
    name: 'Adobe Firefly',
    url: 'https://adobe.com/sensei/generative-ai/firefly.html',
    icon: ImageIcon,
    color: 'bg-red-600',
    categories: ['image'],
    description: {
      en: 'Creative generative AI models designed to be safe for commercial use by Adobe.',
      es: 'Modelos creativos de IA generativa diseñados para ser seguros para uso comercial por Adobe.'
    }
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    url: 'https://canva.com',
    icon: ImageIcon,
    color: 'bg-cyan-500',
    categories: ['image', 'productivity'],
    description: {
      en: 'Magic Studio brings AI to your design workflow, making it easier than ever to create visuals.',
      es: 'Magic Studio lleva la IA a tu flujo de diseño, facilitando más que nunca la creación visual.'
    }
  },
  {
    id: 'framer-ai',
    name: 'Framer AI',
    url: 'https://framer.com/ai',
    icon: Code2,
    color: 'bg-blue-600',
    categories: ['code', 'productivity'],
    description: {
      en: 'Design and publish stunning sites with AI generated starting points.',
      es: 'Diseña y publica sitios impresionantes con puntos de partida generados por IA.'
    }
  },
  {
    id: 'v0',
    name: 'v0 by Vercel',
    url: 'https://v0.dev',
    icon: Code2,
    color: 'bg-black dark:bg-white',
    categories: ['code'],
    description: {
      en: 'Generative UI system by Vercel. Describe the interface you want, and it writes the code.',
      es: 'Sistema de UI generativa de Vercel. Describe la interfaz que deseas y escribirá el código.'
    }
  },
  {
    id: 'bolt',
    name: 'Bolt',
    url: 'https://bolt.new',
    icon: Zap,
    color: 'bg-yellow-500',
    categories: ['code'],
    description: {
      en: 'AI-powered web development platform that runs entire full-stack apps in the browser.',
      es: 'Plataforma de desarrollo web impulsada por IA que ejecuta aplicaciones full-stack en el navegador.'
    }
  },
  {
    id: 'replit',
    name: 'Replit',
    url: 'https://replit.com',
    icon: Code2,
    color: 'bg-orange-500',
    categories: ['code'],
    description: {
      en: 'Build software collaboratively with the power of Replit AI right in your workspace.',
      es: 'Construye software de forma colaborativa con el poder de Replit AI en tu espacio de trabajo.'
    }
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    url: 'https://tabnine.com',
    icon: Code2,
    color: 'bg-indigo-500',
    categories: ['code'],
    description: {
      en: 'AI assistant for software developers that speeds up delivery and keeps your code private.',
      es: 'Asistente de IA para desarrolladores que acelera la entrega y mantiene tu código privado.'
    }
  },
  {
    id: 'codeium',
    name: 'Codeium',
    url: 'https://codeium.com',
    icon: Code2,
    color: 'bg-emerald-600',
    categories: ['code'],
    description: {
      en: 'Free AI code completion and chat that integrates directly into your IDE.',
      es: 'Autocompletado de código de IA gratuito y chat que se integra directamente en tu IDE.'
    }
  },
];
