import { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ToolCard } from '@/components/ToolCard';
import { Footer } from '@/components/Footer';
import { TOOLS, COMPARISON_ROWS, CategoryId } from '@/data/tools';
import { useLanguage } from '@/context/LanguageContext';

const maxW: React.CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '0 20px' };

export function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const { language, t } = useLanguage();

  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      const matchesCategory = selectedCategory === 'all' || tool.categoryId === selectedCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        tool.name.toLowerCase().includes(searchLower) ||
        tool.description[language].toLowerCase().includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, language]);

  return (
    <div style={{ minHeight: '100vh', fontFamily: '-apple-system,BlinkMacSystemFont,\'Segoe UI\',sans-serif', color: '#f0f4ff', background: 'linear-gradient(135deg,#0a0f23 0%,#1a1b41 100%)' }}>

      {/* Header */}
      <header style={{ padding: '50px 0 40px', background: 'linear-gradient(135deg,rgba(139,92,246,.1),rgba(16,185,129,.05))' }}>
        <div style={maxW}>
          <Navbar />
          <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </header>

      {/* Tools Grid */}
      <main style={maxW}>
        <section id="tools">
          <h2 style={{ fontSize: '2.2rem', margin: '3rem 0 2rem', textAlign: 'center', fontWeight: 800 }}>
            {t('section.title')}
          </h2>

          <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

          <div style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
            marginBottom: '4rem',
          }}>
            {filteredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
            {filteredTools.length === 0 && (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#b8bfd9', padding: '4rem 0', fontSize: '1.1rem' }}>
                No tools match your search.
              </div>
            )}
          </div>
        </section>

        {/* Comparison Table */}
        <section>
          <div style={{
            overflowX: 'auto',
            margin: '0 0 4rem',
            borderRadius: 20,
            background: 'rgba(17,27,53,.8)',
            border: '1px solid rgba(255,255,255,.1)',
          }}>
            <h2 style={{ textAlign: 'center', margin: '2rem 0 1rem', fontSize: '1.8rem', fontWeight: 800 }}>
              {t('comparison.title')}
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {(['comparison.task', 'comparison.best', 'comparison.alt', 'comparison.pro'] as const).map(k => (
                    <th key={k} style={{ padding: '1rem 1.5rem', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,.1)', background: 'rgba(139,92,246,.2)', color: 'white', fontWeight: 600 }}>
                      {t(k)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i}>
                    <td style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,.1)', color: '#f0f4ff', fontWeight: 600 }}>{t(row.taskKey)}</td>
                    <td style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,.1)', color: '#10b981', fontWeight: 600 }}>{row.best}</td>
                    <td style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,.1)', color: '#b8bfd9' }}>{row.alt}</td>
                    <td style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,.1)', color: '#8b5cf6' }}>{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <div style={maxW}>
        <Footer />
      </div>
    </div>
  );
}
