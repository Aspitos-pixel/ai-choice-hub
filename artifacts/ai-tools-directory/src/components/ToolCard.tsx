import { useState } from 'react';
import { Tool } from '@/data/tools';
import { useLanguage } from '@/context/LanguageContext';

export function ToolCard({ tool }: { tool: Tool }) {
  const { language } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const initials = tool.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

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
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{
          width: 52, height: 52, borderRadius: 12, overflow: 'hidden', flexShrink: 0,
          background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {!imgError ? (
            <img
              src={tool.logoUrl}
              alt={`${tool.name} logo`}
              width={52}
              height={52}
              style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }}
              onError={() => setImgError(true)}
            />
          ) : (
            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: tool.categoryColor.text }}>
              {initials}
            </span>
          )}
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', color: 'white', fontWeight: 700, margin: 0 }}>
            {tool.name}
          </h3>
          <span style={{
            display: 'inline-block',
            background: tool.categoryColor.bg,
            color: tool.categoryColor.text,
            padding: '2px 10px',
            borderRadius: 20,
            fontSize: '.78rem',
            fontWeight: 600,
            marginTop: 4,
          }}>
            {tool.categoryId.charAt(0).toUpperCase() + tool.categoryId.slice(1)}
          </span>
        </div>
      </div>

      <p style={{ color: '#b8bfd9', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6, fontSize: '.95rem' }}>
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
          padding: '11px 20px',
          background: '#10b981',
          color: '#011e0d',
          borderRadius: 12,
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '.9rem',
          alignSelf: 'flex-start',
        }}
      >
        {tool.visitLabel[language]}
      </a>
    </div>
  );
}
