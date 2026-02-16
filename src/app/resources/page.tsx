import NavBar from '@/components/NavBar';
import FooterSitemap from '@/components/FooterSitemap';
import { Search, BookOpen, FileText, PlayCircle, Download, Tag } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'Complete Guide to Private Limited Company Registration',
    type: 'Guide',
    category: 'Start Business',
    icon: BookOpen,
    readTime: '10 min read',
  },
  {
    id: 2,
    title: 'GST Compliance Calendar 2026',
    type: 'Template',
    category: 'Tax & GST',
    icon: Download,
    readTime: 'PDF Download',
  },
  {
    id: 3,
    title: 'Understanding Founders Agreements: Key Clauses',
    type: 'Article',
    category: 'Legal Contracts',
    icon: FileText,
    readTime: '5 min read',
  },
  {
    id: 4,
    title: 'How to file Trademark Objection Reply?',
    type: 'Video',
    category: 'Intellectual Property',
    icon: PlayCircle,
    readTime: '15 min watch',
  },
  {
    id: 5,
    title: 'Startup India Registration: Benefits & Process',
    type: 'Guide',
    category: 'Start Business',
    icon: BookOpen,
    readTime: '8 min read',
  },
  {
    id: 6,
    title: 'Employee Offer Letter Template',
    type: 'Template',
    category: 'HR & Payroll',
    icon: Download,
    readTime: 'DOCX Download',
  },
];

const categories = [
  'All Resources',
  'Start Business',
  'Tax & GST',
  'Intellectual Property',
  'Legal Contracts',
  'HR & Payroll',
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <NavBar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-2 block">
            Knowledge Base
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Resources & Guides
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Everything you need to know about legal compliance, tax, and business growth.
          </p>

          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search guides, templates, videos..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
            />
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat, i) => (
                  <li key={cat}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${i === 0 ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-slate-800'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-indigo-50 dark:bg-slate-800 rounded-xl">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">
                Subscribe to Newsletter
              </h4>
              <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-4">
                Get the latest legal updates delivered to your inbox.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-lg border-none mb-3 text-sm"
              />
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="p-6 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400`}
                      >
                        {resource.type}
                      </span>
                      <resource.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-auto pt-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Tag className="w-3 h-3" /> {resource.category}
                      </div>
                      <span>•</span>
                      <span>{resource.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="px-6 py-2 border border-gray-300 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                Load More Resources
              </button>
            </div>
          </div>
        </div>
      </section>

      <FooterSitemap />
    </main>
  );
}
