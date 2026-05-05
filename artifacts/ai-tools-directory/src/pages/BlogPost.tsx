import { Link, useParams } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { BLOG_POSTS } from '@/data/blog';
import NotFound from '@/pages/not-found';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();

  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return <NotFound />;

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0a0f23 0%,#1a1b41 100%)', color: '#f0f4ff', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <Navbar />
        <main style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 0 4rem' }}>

          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', color: '#8b5cf6', textDecoration: 'none', fontWeight: 600, fontSize: '.9rem', marginBottom: '2rem' }}>
            ← {t('blog.back')}
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(139,92,246,.2)', color: '#8b5cf6', padding: '3px 12px', borderRadius: 20, fontSize: '.78rem', fontWeight: 600 }}>
              Blog
            </span>
            <span style={{ color: '#8b9dc3', fontSize: '.85rem' }}>{formatDate(post.date)}</span>
            <span style={{ color: '#8b9dc3', fontSize: '.85rem' }}>{post.readTime[language]}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '2rem' }}>
            {post.title[language]}
          </h1>

          <div style={{
            background: 'linear-gradient(145deg,rgba(17,27,53,.95),rgba(10,15,35,.95))',
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: 20,
            padding: '2.5rem',
          }}>
            <p style={{ color: '#c8d0e8', lineHeight: 1.9, fontSize: '1.05rem', margin: 0, whiteSpace: 'pre-line' }}>
              {post.content[language]}
            </p>
          </div>

          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/blog" style={{ color: '#8b5cf6', textDecoration: 'none', fontWeight: 600, fontSize: '.9rem' }}>
              ← {t('blog.back')}
            </Link>
            <Link href="/" style={{ background: '#10b981', color: '#011e0d', padding: '10px 22px', borderRadius: 12, textDecoration: 'none', fontWeight: 600, fontSize: '.9rem' }}>
              {t('blog.exploreTools')}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
