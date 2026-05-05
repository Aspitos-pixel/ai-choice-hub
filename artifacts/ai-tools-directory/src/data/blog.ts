export interface BlogPost {
  id: string;
  slug: string;
  title: { en: string; es: string };
  excerpt: { en: string; es: string };
  content: { en: string; es: string };
  date: string;
  readTime: { en: string; es: string };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'como-elegir-la-mejor-ia',
    title: {
      en: 'How to Choose the Best AI for Your Work',
      es: 'Cómo elegir la mejor IA para tu trabajo',
    },
    excerpt: {
      en: 'In 2026, the range of AI tools is overwhelming. Learn how to choose the right one for your specific goals.',
      es: 'En 2026, la oferta de herramientas de IA es abrumadora. Aprende a elegir la correcta para tu objetivo.',
    },
    content: {
      en: 'In 2026, the range of Artificial Intelligence tools is overwhelming. To choose the right one, first define your goal: are you looking for text generation, image editing, or data analysis? Tools like ChatGPT excel at writing, while Midjourney leads in visual arts. In our directory, we classify each one so you can save time and find the efficiency your project needs.',
      es: 'En 2026, la oferta de herramientas de Inteligencia Artificial es abrumadora. Para elegir la correcta, primero define tu objetivo: ¿Buscas generación de texto, edición de imagen o análisis de datos? Herramientas como ChatGPT destacan en redacción, mientras que Midjourney lidera en artes visuales. En nuestro buscador, clasificamos cada una para que ahorres tiempo y encuentres la eficiencia que tu proyecto necesita.',
    },
    date: '2026-03-15',
    readTime: { en: '3 min read', es: '3 min de lectura' },
  },
  {
    id: '2',
    slug: 'el-futuro-de-la-ia-en-la-educacion',
    title: {
      en: 'The Future of AI in Education',
      es: 'El futuro de la IA en la educación',
    },
    excerpt: {
      en: 'AI has not come to replace teachers, but to enhance personalized learning for every student.',
      es: 'La IA no ha llegado para reemplazar a los profesores, sino para potenciar el aprendizaje personalizado.',
    },
    content: {
      en: 'AI has not come to replace teachers, but to enhance personalized learning. Thanks to intelligent tutors, each student can advance at their own pace. At AI Choice Hub, we compile the most innovative educational platforms that are transforming classrooms this year, facilitating access to specialized knowledge for free or by subscription.',
      es: 'La IA no ha llegado para reemplazar a los profesores, sino para potenciar el aprendizaje personalizado. Gracias a los tutores inteligentes, cada estudiante puede avanzar a su propio ritmo. En AI Choice Hub, recopilamos las plataformas educativas más innovadoras que están transformando las aulas este año, facilitando el acceso a conocimiento especializado de forma gratuita o bajo suscripción.',
    },
    date: '2026-04-02',
    readTime: { en: '4 min read', es: '4 min de lectura' },
  },
  {
    id: '3',
    slug: '5-consejos-para-escribir-mejores-prompts',
    title: {
      en: "5 Tips for Writing Better Prompts",
      es: "5 Consejos para escribir mejores 'Prompts'",
    },
    excerpt: {
      en: 'A good result depends on a good instruction. Learn the 5 key tips to communicate effectively with AI.',
      es: 'Un buen resultado depende de una buena instrucción. Aprende los 5 consejos clave para comunicarte con la IA.',
    },
    content: {
      en: "A good result depends on a good instruction. 1. Be specific. 2. Give context (act as an expert). 3. Define the output format. 4. Avoid ambiguities. 5. Iterate on the response. Learning to communicate with AI is the most in-demand skill of the decade. Check our 'Productivity' category to find tools that help you perfect your commands.",
      es: "Un buen resultado depende de una buena instrucción. 1. Sé específico. 2. Da contexto (actúa como un experto). 3. Define el formato de salida. 4. Evita ambigüedades. 5. Itera sobre la respuesta. Aprender a comunicarte con la IA es la habilidad más demandada de la década. Revisa nuestra categoría de 'Productividad' para encontrar herramientas que te ayuden a perfeccionar tus comandos.",
    },
    date: '2026-04-20',
    readTime: { en: '5 min read', es: '5 min de lectura' },
  },
];
