import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const section: React.CSSProperties = { marginBottom: '2rem' };
const h2Style: React.CSSProperties = { fontSize: '1.3rem', fontWeight: 700, color: 'white', marginBottom: '.75rem' };
const pStyle: React.CSSProperties = { color: '#b8bfd9', lineHeight: 1.8 };
const ulStyle: React.CSSProperties = { color: '#b8bfd9', lineHeight: 1.8, paddingLeft: '1.5rem' };

export function Privacy() {
  const { t } = useLanguage();

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0a0f23 0%,#1a1b41 100%)', color: '#f0f4ff', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <Navbar />
        <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 0 4rem' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'white', marginBottom: '.5rem' }}>{t('privacy.title')}</h1>
          <p style={{ color: '#8b9dc3', marginBottom: '2.5rem' }}>{t('privacy.updated')}</p>

          <div style={section}>
            <p style={pStyle}>{t('privacy.intro')}</p>
          </div>

          <div style={section}>
            <h2 style={h2Style}>{t('privacy.collect.title')}</h2>
            <ul style={ulStyle}>
              <li>{t('privacy.collect.1')}</li>
              <li>{t('privacy.collect.2')}</li>
              <li>{t('privacy.collect.3')}</li>
            </ul>
          </div>

          <div style={section}>
            <h2 style={h2Style}>{t('privacy.use.title')}</h2>
            <p style={pStyle}>{t('privacy.use.text')}</p>
          </div>

          <div style={section}>
            <h2 style={h2Style}>{t('privacy.cookies.title')}</h2>
            <p style={pStyle}>{t('privacy.cookies.text')}</p>
          </div>

          <div style={section}>
            <h2 style={h2Style}>{t('privacy.third.title')}</h2>
            <ul style={ulStyle}>
              <li>{t('privacy.third.1')}</li>
              <li>{t('privacy.third.2')}</li>
            </ul>
          </div>

          <div style={section}>
            <p style={pStyle}>
              <strong style={{ color: 'white' }}>{t('privacy.contact.label')}</strong>{' '}hello@choicehub.ai
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
