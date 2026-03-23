import { Tool } from '@/data/tools';
import { useLanguage } from '@/context/LanguageContext';

export function ToolCard({ tool }: { tool: Tool }) {
  const { language } = useLanguage();

  return (
    <div
      style={{
        background: 'linear-gradient(145deg,rgba(17,27,53,.95),rgba(10,15,35,.95))',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 20,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform .3s,box-shadow .3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 25px 50px rgba(0,0,0,.3)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'none';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      <span style={{
        display: 'inline-block',
        background: tool.categoryColor.bg,
        color: tool.categoryColor.text,
        padding: '4px 12px',
        borderRadius: 20,
        fontSize: '.85rem',
        fontWeight: 600,
        marginBottom: '0.75rem',
        alignSelf: 'flex-start',
      }}>
        {tool.categoryId.charAt(0).toUpperCase() + tool.categoryId.slice(1)}
      </span>
      <h3 style={{ fontSize: '1.4rem', margin: '.25rem 0 1rem', color: 'white', fontWeight: 700 }}>
        {tool.name}
      </h3>
      <p style={{ color: '#b8bfd9', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
        {tool.description[language]}
      </p>
      <a
        href={tool.url}
        target="_blank"
        rel="noopener nofollow noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '.5rem',
          padding: '12px 20px',
          background: '#10b981',
          color: '#011e0d',
          borderRadius: 12,
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '.95rem',
          alignSelf: 'flex-start',
        }}
      >
        {tool.visitLabel[language]}
      </a>
    </div>
  );
}
