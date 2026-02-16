"use client";
import { useState, useMemo } from 'react';
import { ManifestItem } from '@/types/manifest';
import PageCard from './PageCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PageListProps {
  items: ManifestItem[];
}

const ITEMS_PER_PAGE = 20;

export default function PageList({ items }: PageListProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  }, [items, page]);

  if (items.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
        <p className="text-gray-500">No pages found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {currentItems.map((item) => (
          <PageCard key={item.slug} page={item} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium text-gray-700">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
