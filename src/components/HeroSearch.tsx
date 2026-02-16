'use client';
import { Search, ArrowRight, Command } from 'lucide-react';
import { useSearchIndex } from '@/hooks/useSearchIndex';
import { ManifestItem } from '@/types/manifest';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSearch({ items }: { items: ManifestItem[] }) {
  const { query, setQuery, results } = useSearchIndex(items);
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={containerRef}>
      <motion.div
        layout
        className={`relative flex items-center h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-xl transition-all duration-300 ring-4 ${isFocused ? 'ring-blue-500/20 scale-[1.02]' : 'ring-transparent'}`}
      >
        <Search
          className={`absolute left-5 w-6 h-6 transition-colors ${isFocused ? 'text-blue-500' : 'text-gray-400'}`}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsFocused(true);
          }}
          onFocus={() => setIsFocused(true)}
          placeholder="Search for services, e.g., 'Company Registration'"
          className="w-full h-full pl-14 pr-12 bg-transparent rounded-2xl text-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
        />
        <div className="absolute right-4 hidden md:flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded text-xs font-medium text-gray-500 dark:text-gray-400">
          <Command className="w-3 h-3" /> K
        </div>
      </motion.div>

      {/* Dropdown Results */}
      <AnimatePresence>
        {isFocused && query.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 overflow-hidden z-20"
          >
            {results.length > 0 ? (
              <div>
                <div className="px-4 py-3 bg-gray-50/50 dark:bg-slate-900/50 border-b border-gray-100 dark:border-slate-700">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Top Matches
                  </p>
                </div>
                {results.slice(0, 5).map((item, i) => (
                  <motion.button
                    key={item.slug}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => router.push(`/${item.slug}`)}
                    className="w-full text-left flex items-center justify-between p-4 hover:bg-blue-50 dark:hover:bg-slate-700/50 border-b last:border-0 border-gray-100 dark:border-slate-700 group transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
                        {item.title.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {item.category} • {item.tags.slice(0, 2).join(', ')}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors" />
                  </motion.button>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  No results found for &quot;{query}&quot;
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
