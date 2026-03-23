import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ padding: '3rem 0 2rem', borderTop: '1px solid rgba(255,255,255,.1)', textAlign: 'center', color: '#b8bfd9', marginTop: '4rem' }}>
      <p>{t('footer.copy')}</p>
      <nav style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        <a href="/privacy.html" style={{ color: '#b8bfd9', margin: '0 1rem', textDecoration: 'none' }}>{t('footer.privacy')}</a>
        <a href="/legal.html" style={{ color: '#b8bfd9', margin: '0 1rem', textDecoration: 'none' }}>{t('footer.legal')}</a>
        <a href="/contact.html" style={{ color: '#b8bfd9', margin: '0 1rem', textDecoration: 'none' }}>{t('footer.contact')}</a>
      </nav>
    </footer>
  );
}
