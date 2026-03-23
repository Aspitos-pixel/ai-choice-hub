import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const section: React.CSSProperties = { marginBottom: '2rem' };
const h2Style: React.CSSProperties = { fontSize: '1.3rem', fontWeight: 700, color: 'white', marginBottom: '.75rem' };
const pStyle: React.CSSProperties = { color: '#b8bfd9', lineHeight: 1.8 };
const ulStyle: React.CSSProperties = { color: '#b8bfd9', lineHeight: 1.8, paddingLeft: '1.5rem' };

export function Privacy() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0a0f23 0%,#1a1b41 100%)', color: '#f0f4ff', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <Navbar />
        <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 0 4rem' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'white', marginBottom: '.5rem' }}>Privacy Policy</h1>
          <p style={{ color: '#8b9dc3', marginBottom: '2.5rem' }}>Last updated: March 20, 2026</p>

          <div style={section}>
            <p style={pStyle}>AI Choice Hub ("we", "us", "our") operates https://choicehub.ai and values your privacy.</p>
          </div>

          <div style={section}>
            <h2 style={h2Style}>What We Collect</h2>
            <ul style={ulStyle}>
              <li>Analytics data (Google Analytics)</li>
              <li>Cookies for site functionality</li>
              <li>No personal data collection</li>
            </ul>
          </div>

          <div style={section}>
            <h2 style={h2Style}>How We Use Data</h2>
            <p style={pStyle}>We use analytics to improve user experience and site performance. No data is sold to third parties.</p>
          </div>

          <div style={section}>
            <h2 style={h2Style}>Cookies</h2>
            <p style={pStyle}>This site uses functional cookies. You can manage preferences in your browser settings.</p>
          </div>

          <div style={section}>
            <h2 style={h2Style}>Third Parties</h2>
            <ul style={ulStyle}>
              <li>Google Analytics (anonymized)</li>
              <li>Affiliate links to AI tools</li>
            </ul>
          </div>

          <div style={section}>
            <p style={pStyle}><strong style={{ color: 'white' }}>Contact:</strong> hello@choicehub.ai</p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
