import Link from 'next/link';
import { ManifestItem } from '@/types/manifest';
import { Calendar, Tag, ArrowUpRight } from 'lucide-react';

interface PageCardProps {
  page: ManifestItem;
}

export default function PageCard({ page }: PageCardProps) {
  return (
    <Link
      href={`/${page.slug}`}
      className="group relative flex flex-col h-full bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 p-6 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
        <ArrowUpRight className="w-5 h-5 text-blue-500" />
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
          {page.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-3 line-clamp-2 transition-colors">
        {page.title}
      </h3>
      
      <div className="mt-auto pt-4 space-y-4">
        <div className="flex flex-wrap gap-2">
          {page.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="inline-flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-700 px-2.5 py-1 rounded-md">
              <Tag className="w-3 h-3 mr-1.5 opacity-70" />
              {tag}
            </span>
          ))}
          {page.tags.length > 3 && (
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500 px-2 py-1">+{page.tags.length - 3} more</span>
          )}
        </div>
        
        <div className="pt-4 border-t border-gray-50 dark:border-slate-700 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1.5" />
            Updated {new Date(page.last_modified).toLocaleDateString()}
          </div>
          <span className="group-hover:text-blue-500 transition-colors font-medium">Read Guide</span>
        </div>
      </div>
    </Link>
  );
}
