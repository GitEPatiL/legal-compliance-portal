'use client';
import { ManifestItem } from '@/types/manifest';
import { useMemo } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { transitions } from '@/config/animations';

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
  clearFilters,
}: FilterExplorerProps) {
  const stats = useMemo(() => {
    const cats = new Map<string, number>();
    const tags = new Map<string, number>();

    items.forEach((item) => {
      const c = item.category || 'Other';
      cats.set(c, (cats.get(c) || 0) + 1);
      item.tags.forEach((t) => tags.set(t, (tags.get(t) || 0) + 1));
    });

    return {
      categories: Array.from(cats.entries()).sort((a, b) => b[1] - a[1]),
      tags: Array.from(tags.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20), // Top 20 tags
    };
  }, [items]);

  const hasFilters = selectedCategories.length > 0 || selectedTags.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={transitions.smooth}
      className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-200 dark:border-slate-700 h-fit sticky top-4 shadow-sm"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-900 dark:text-white">Filters</h3>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-red-600 hover:text-red-700 hover:underline flex items-center transition-colors"
          >
            <X className="w-3 h-3 mr-1" /> Clear
          </button>
        )}
      </div>

      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
          Categories
        </h4>
        <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-slate-700">
          {stats.categories.map(([cat, count]) => (
            <label
              key={cat}
              className="flex items-center group cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700/50 p-1 rounded transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 dark:border-slate-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-1 truncate transition-colors">
                {cat}
              </span>
              <span className="text-xs text-gray-400 font-mono">{count}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
          Popular Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {stats.tags.map(([tag, count]) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleTag(tag)}
              className={`text-xs px-2 py-1 rounded-full border transition-all ${selectedTags.includes(tag) ? 'bg-blue-100 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-400' : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300 dark:bg-slate-700/50 dark:border-slate-600 dark:text-gray-400 dark:hover:border-slate-500'}`}
            >
              {tag} <span className="opacity-50 ml-0.5">({count})</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
