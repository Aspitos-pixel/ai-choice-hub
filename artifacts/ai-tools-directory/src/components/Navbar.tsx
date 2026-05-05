import { Link } from 'wouter';
import { useLanguage } from '@/context/LanguageContext';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const btnStyle = (active: boolean): React.CSSProperties => ({
    padding: '8px 16px',
    background: active ? '#8b5cf6' : 'rgba(139,92,246,.1)',
    border: '1px solid rgba(139,92,246,.3)',
    borderRadius: '25px',
    color: active ? 'white' : '#f0f4ff',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.2s',
  });

  return (
    <nav style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', marginBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Link href="/" style={{ color: '#b8bfd9', textDecoration: 'none', fontWeight: 600, fontSize: '.95rem', transition: 'color .2s' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'white'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#b8bfd9'}
        >
          {t('nav.tools')}
        </Link>
        <Link href="/blog" style={{ color: '#b8bfd9', textDecoration: 'none', fontWeight: 600, fontSize: '.95rem', transition: 'color .2s' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'white'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#b8bfd9'}
        >
          {t('nav.blog')}
        </Link>
      </div>

      <Link href="/" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#8b5cf6', textAlign: 'center', textDecoration: 'none' }}>
        {t('nav.logo')}
      </Link>

      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <button onClick={() => setLanguage('es')} style={btnStyle(language === 'es')}>ES</button>
        <button onClick={() => setLanguage('en')} style={btnStyle(language === 'en')}>EN</button>
      </div>
    </nav>
  );
}
