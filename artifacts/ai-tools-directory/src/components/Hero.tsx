import { useLanguage } from '@/context/LanguageContext';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  const { t } = useLanguage();
  const title = t('hero.title').split('\n');

  return (
    <div style={{ paddingBottom: '50px', background: 'linear-gradient(135deg,rgba(139,92,246,.1),rgba(16,185,129,.05))', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem', color: '#f0f4ff' }}>
        {title.map((line, i) => <span key={i}>{line}{i < title.length - 1 && <br />}</span>)}
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#b8bfd9', marginBottom: '2rem', maxWidth: 580 }}>
        {t('hero.subtitle')}
      </p>
      <a
        href="#tools"
        style={{
          display: 'inline-block', padding: '16px 32px', background: '#8b5cf6',
          color: 'white', borderRadius: '50px', fontWeight: 700, textDecoration: 'none',
          fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(139,92,246,.3)', marginBottom: '2.5rem'
        }}
      >
        {t('hero.cta')}
      </a>
      <div style={{ position: 'relative', width: '100%', maxWidth: 560 }}>
        <svg style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#b8bfd9', width: 18, height: 18 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={t('search.placeholder')}
          style={{
            width: '100%', padding: '14px 16px 14px 44px',
            borderRadius: 50, border: '1px solid rgba(255,255,255,.15)',
            background: 'rgba(255,255,255,.07)', color: '#f0f4ff',
            fontSize: '1rem', outline: 'none',
          }}
        />
      </div>
    </div>
  );
}
