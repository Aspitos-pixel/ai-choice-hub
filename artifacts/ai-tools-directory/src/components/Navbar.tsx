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
      <div />
      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#8b5cf6', textAlign: 'center' }}>
        {t('nav.logo')}
      </div>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <button onClick={() => setLanguage('es')} style={btnStyle(language === 'es')}>ES</button>
        <button onClick={() => setLanguage('en')} style={btnStyle(language === 'en')}>EN</button>
      </div>
    </nav>
  );
}
