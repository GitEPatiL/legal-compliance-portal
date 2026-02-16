"use client";
import { useState, useMemo } from 'react';
import { ManifestItem } from '@/types/manifest';
import HeroSearch from './HeroSearch';
import CategoryGrid from './CategoryGrid';
import PopularPages from './PopularPages';
import FilterExplorer from './FilterExplorer';
import AlphabetIndex from './AlphabetIndex';
import PageList from './PageList';

interface HomePageProps {
  initialItems: ManifestItem[];
}

export default function HomePage({ initialItems }: HomePageProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    let res = initialItems;

    if (selectedCategories.length > 0) {
      res = res.filter(item => selectedCategories.includes(item.category));
    }

    if (selectedTags.length > 0) {
      res = res.filter(item => item.tags.some(tag => selectedTags.includes(tag)));
    }

    if (activeLetter) {
      if (activeLetter === '#') {
        res = res.filter(item => /^[^a-zA-Z]/.test(item.title));
      } else {
        res = res.filter(item => item.title.toUpperCase().startsWith(activeLetter));
      }
    }

    return res;
  }, [initialItems, selectedCategories, selectedTags, activeLetter]);

  const isFiltering = selectedCategories.length > 0 || selectedTags.length > 0 || activeLetter !== null;

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-700 to-violet-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Discover Knowledge</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our collection of {initialItems.length}+ curated pages.
          </p>
          <HeroSearch items={initialItems} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {isFiltering ? (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <aside className="w-full lg:w-64 flex-shrink-0">
              <FilterExplorer
                items={initialItems}
                selectedCategories={selectedCategories}
                selectedTags={selectedTags}
                toggleCategory={toggleCategory}
                toggleTag={toggleTag}
                clearFilters={() => { setSelectedCategories([]); setSelectedTags([]); setActiveLetter(null); }}
              />
            </aside>
            <main className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Search Results ({filteredItems.length})</h2>
                <AlphabetIndex activeLetter={activeLetter} onSelect={setActiveLetter} />
              </div>
              <PageList items={filteredItems} />
            </main>
          </div>
        ) : (
          <div className="space-y-16">
            <section>
              <div className="flex justify-between items-end mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
                <button 
                  onClick={() => setActiveLetter('A')}
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  View All Pages
                </button>
              </div>
              <CategoryGrid items={initialItems} />
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Pages</h2>
              <PopularPages items={initialItems} />
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
