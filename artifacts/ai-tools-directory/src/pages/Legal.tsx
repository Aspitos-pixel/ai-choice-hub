import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const section: React.CSSProperties = { marginBottom: '2rem' };
const h2Style: React.CSSProperties = { fontSize: '1.3rem', fontWeight: 700, color: 'white', marginBottom: '.75rem' };
const pStyle: React.CSSProperties = { color: '#b8bfd9', lineHeight: 1.8 };

export function Legal() {
  const { t } = useLanguage();

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0a0f23 0%,#1a1b41 100%)', color: '#f0f4ff', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <Navbar />
        <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 0 4rem' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'white', marginBottom: '2.5rem' }}>{t('legal.title')}</h1>

          <div style={section}>
            <h2 style={h2Style}>{t('legal.owner.title')}</h2>
            <p style={pStyle}>
              AI Choice Hub<br />
              {t('legal.owner.line2')}<br />
              Email: hello@choicehub.ai
            </p>
          </div>

          <div style={section}>
            <h2 style={h2Style}>{t('legal.content.title')}</h2>
            <p style={pStyle}>{t('legal.content.text')}</p>
          </div>

          <div style={section}>
            <h2 style={h2Style}>{t('legal.liability.title')}</h2>
            <p style={pStyle}>{t('legal.liability.text')}</p>
          </div>

          <div style={section}>
            <h2 style={h2Style}>{t('legal.copyright.title')}</h2>
            <p style={pStyle}>{t('legal.copyright.text')}</p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
