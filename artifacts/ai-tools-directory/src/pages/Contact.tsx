import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function Contact() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0a0f23 0%,#1a1b41 100%)', color: '#f0f4ff', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <Navbar />
        <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 0 4rem' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'white', marginBottom: '2rem' }}>Contact Us</h1>

          <div style={{ background: 'linear-gradient(145deg,rgba(17,27,53,.95),rgba(10,15,35,.95))', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ color: '#b8bfd9', lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: 'white' }}>Email:</strong>{' '}
              <a href="mailto:hello@choicehub.ai" style={{ color: '#8b5cf6', textDecoration: 'none' }}>hello@choicehub.ai</a>
            </p>
            <p style={{ color: '#b8bfd9', lineHeight: 1.8, margin: 0 }}>
              Feature requests and tool suggestions welcome!
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
