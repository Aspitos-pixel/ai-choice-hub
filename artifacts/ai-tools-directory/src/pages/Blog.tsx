import { Link } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { BLOG_POSTS } from '@/data/blog';

export function Blog() {
  const { language, t } = useLanguage();

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0a0f23 0%,#1a1b41 100%)', color: '#f0f4ff', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <Navbar />
        <main style={{ maxWidth: 860, margin: '0 auto', padding: '2rem 0 4rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '.5rem', textAlign: 'center' }}>
            {t('blog.title')}
          </h1>
          <p style={{ color: '#8b9dc3', textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem' }}>
            {t('blog.subtitle')}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {BLOG_POSTS.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article
                  style={{
                    background: 'linear-gradient(145deg,rgba(17,27,53,.95),rgba(10,15,35,.95))',
                    border: '1px solid rgba(255,255,255,.1)',
                    borderRadius: 20,
                    padding: '2rem 2.5rem',
                    cursor: 'pointer',
                    transition: 'transform .25s, box-shadow .25s, border-color .25s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = 'translateY(-4px)';
                    el.style.boxShadow = '0 20px 40px rgba(0,0,0,.3)';
                    el.style.borderColor = 'rgba(139,92,246,.4)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = 'none';
                    el.style.boxShadow = 'none';
                    el.style.borderColor = 'rgba(255,255,255,.1)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ background: 'rgba(139,92,246,.2)', color: '#8b5cf6', padding: '3px 12px', borderRadius: 20, fontSize: '.78rem', fontWeight: 600 }}>
                      Blog
                    </span>
                    <span style={{ color: '#8b9dc3', fontSize: '.85rem' }}>{formatDate(post.date)}</span>
                    <span style={{ color: '#8b9dc3', fontSize: '.85rem' }}>{post.readTime[language]}</span>
                  </div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', margin: '0 0 .75rem' }}>
                    {post.title[language]}
                  </h2>
                  <p style={{ color: '#b8bfd9', lineHeight: 1.7, margin: '0 0 1.25rem', fontSize: '.97rem' }}>
                    {post.excerpt[language]}
                  </p>
                  <span style={{ color: '#8b5cf6', fontWeight: 600, fontSize: '.9rem' }}>
                    {t('blog.readMore')} →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
