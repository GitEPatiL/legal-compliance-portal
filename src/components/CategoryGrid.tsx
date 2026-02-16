"use client";
import { ManifestItem } from '@/types/manifest';
import Link from 'next/link';
import { Folder, ArrowRight, FileText, BarChart3, Globe, Briefcase, Scale, Shield, Rocket } from 'lucide-react';

// Explicitly define icon map keys as strings
const ICON_MAP: Record<string, any> = {
  'Legal': Scale,
  'Tax': BarChart3,
  'Compliance': Shield,
  'Services': Briefcase,
  'IP': FileText,
  'Trade': Globe,
  'Startup': Rocket
};

const getIcon = (category: string) => {
  const key = Object.keys(ICON_MAP).find(k => category.includes(k));
  return key ? ICON_MAP[key] : Folder;
};

export default function CategoryGrid({ items }: { items: ManifestItem[] }) {
  const categoryStats = items.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(categoryStats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map(([cat, count]) => {
        const Icon = getIcon(cat);
        return (
          <Link 
            key={cat} 
            href={`/category/${cat.toLowerCase().replace(/ /g, '-')}`} 
            className="group relative p-8 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
               <Icon className="w-32 h-32 text-blue-600" />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-blue-500/30">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cat}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">{count} Services Available</p>
              <div className="flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                Browse Services <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
