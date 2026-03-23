import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const section: React.CSSProperties = { marginBottom: '2rem' };
const h2Style: React.CSSProperties = { fontSize: '1.3rem', fontWeight: 700, color: 'white', marginBottom: '.75rem' };
const pStyle: React.CSSProperties = { color: '#b8bfd9', lineHeight: 1.8 };

export function Legal() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0a0f23 0%,#1a1b41 100%)', color: '#f0f4ff', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <Navbar />
        <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 0 4rem' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'white', marginBottom: '2.5rem' }}>Legal Notice</h1>

          <div style={section}>
            <h2 style={h2Style}>Owner</h2>
            <p style={pStyle}>
              AI Choice Hub<br />
              Owner: AI Tools Directory<br />
              Email: hello@choicehub.ai
            </p>
          </div>

          <div style={section}>
            <h2 style={h2Style}>Content</h2>
            <p style={pStyle}>All content is for informational purposes. We may earn commissions from affiliate links.</p>
          </div>

          <div style={section}>
            <h2 style={h2Style}>Liability</h2>
            <p style={pStyle}>We are not responsible for third-party tools or services linked from this site.</p>
          </div>

          <div style={section}>
            <h2 style={h2Style}>Copyright</h2>
            <p style={pStyle}>© 2026 AI Choice Hub. All rights reserved.</p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
