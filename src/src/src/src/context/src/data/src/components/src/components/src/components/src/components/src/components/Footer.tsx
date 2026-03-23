import { Link } from 'wouter';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const linkStyle: React.CSSProperties = { color: '#b8bfd9', margin: '0 1rem', textDecoration: 'none' };

  return (
    <footer style={{ padding: '3rem 0 2rem', borderTop: '1px solid rgba(255,255,255,.1)', textAlign: 'center', color: '#b8bfd9', marginTop: '4rem' }}>
      <p>{t('footer.copy')}</p>
      <nav style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        <Link href="/privacy" style={linkStyle}>{t('footer.privacy')}</Link>
        <Link href="/legal" style={linkStyle}>{t('footer.legal')}</Link>
        <Link href="/contact" style={linkStyle}>{t('footer.contact')}</Link>
      </nav>
    </footer>
  );
}
