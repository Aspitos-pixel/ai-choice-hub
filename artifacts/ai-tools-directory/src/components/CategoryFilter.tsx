import { CATEGORIES, CategoryId } from '@/data/tools';
import { useLanguage } from '@/context/LanguageContext';

interface CategoryFilterProps {
  selectedCategory: CategoryId | 'all';
  setSelectedCategory: (c: CategoryId | 'all') => void;
}

export function CategoryFilter({ selectedCategory, setSelectedCategory }: CategoryFilterProps) {
  const { t } = useLanguage();

  const pillStyle = (active: boolean): React.CSSProperties => ({
    padding: '8px 20px',
    borderRadius: 50,
    border: active ? '1px solid #8b5cf6' : '1px solid rgba(255,255,255,.12)',
    background: active ? '#8b5cf6' : 'rgba(255,255,255,.05)',
    color: active ? 'white' : '#b8bfd9',
    fontWeight: 600,
    fontSize: '.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap' as const,
  });

  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: '2.5rem' }}
      className="text-center">
      <button style={pillStyle(selectedCategory === 'all')} onClick={() => setSelectedCategory('all')}>
        {t('filter.all')}
      </button>
      {CATEGORIES.map(cat => (
        <button
          key={cat.id}
          style={pillStyle(selectedCategory === cat.id)}
          onClick={() => setSelectedCategory(cat.id)}
        >
          {t(cat.labelKey)}
        </button>
      ))}
    </div>
  );
}
