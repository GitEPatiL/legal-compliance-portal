"use client";
import { ManifestItem } from '@/types/manifest';
import { useMemo } from 'react';
import { X } from 'lucide-react';

interface FilterExplorerProps {
  items: ManifestItem[];
  selectedCategories: string[];
  selectedTags: string[];
  toggleCategory: (cat: string) => void;
  toggleTag: (tag: string) => void;
  clearFilters: () => void;
}

export default function FilterExplorer({ 
  items, 
  selectedCategories, 
  selectedTags, 
  toggleCategory, 
  toggleTag,
  clearFilters 
}: FilterExplorerProps) {
  
  const stats = useMemo(() => {
    const cats = new Map<string, number>();
    const tags = new Map<string, number>();
    
    items.forEach(item => {
      const c = item.category || 'Other';
      cats.set(c, (cats.get(c) || 0) + 1);
      item.tags.forEach(t => tags.set(t, (tags.get(t) || 0) + 1));
    });

    return {
      categories: Array.from(cats.entries()).sort((a,b) => b[1] - a[1]),
      tags: Array.from(tags.entries()).sort((a,b) => b[1] - a[1]).slice(0, 20) // Top 20 tags
    };
  }, [items]);

  const hasFilters = selectedCategories.length > 0 || selectedTags.length > 0;

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 h-fit sticky top-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-900">Filters</h3>
        {hasFilters && (
          <button onClick={clearFilters} className="text-xs text-red-600 hover:underline flex items-center">
            <X className="w-3 h-3 mr-1" /> Clear
          </button>
        )}
      </div>

      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Categories</h4>
        <div className="space-y-2">
          {stats.categories.map(([cat, count]) => (
            <label key={cat} className="flex items-center group cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600 group-hover:text-blue-600 flex-1 truncate">{cat}</span>
              <span className="text-xs text-gray-400 font-mono">{count}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Popular Tags</h4>
        <div className="flex flex-wrap gap-2">
          {stats.tags.map(([tag, count]) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`text-xs px-2 py-1 rounded-full border transition-colors ${selectedTags.includes(tag) ? 'bg-blue-100 border-blue-200 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300'}`}
            >
              {tag} <span className="opacity-50 ml-0.5">({count})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
