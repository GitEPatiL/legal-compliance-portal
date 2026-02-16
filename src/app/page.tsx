import { promises as fs } from 'fs';
import path from 'path';
import NavBar from '@/components/NavBar';
import HeroSearch from '@/components/HeroSearch';
import CategoryGrid from '@/components/CategoryGrid';
import PopularPagesComponent from '@/components/PopularPages';
import FooterSitemap from '@/components/FooterSitemap';
import { ManifestItem } from '@/types/manifest';
import { ArrowRight } from 'lucide-react';

export default async function Page() {
  let items: ManifestItem[] = [];
  try {
    const filePath = path.join(process.cwd(), 'data', 'pages_manifest.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    items = JSON.parse(fileContents);
  } catch (error) {
    console.error('Failed to load manifest:', error);
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900 z-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-sm font-medium backdrop-blur-sm shadow-lg shadow-blue-500/5">
             <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse shadow-[0_0_10px_#60a5fa]"></span>
             Trusted by 10,000+ Businesses Across India
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-sm">
            Simplify Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-300">Legal Journey</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Access over <span className="text-white font-medium">1000+</span> expert-verified guides, registration services, and compliance checklists. Fast, affordable, and 100% online.
          </p>
          
          <div className="pt-8 pb-4 max-w-2xl mx-auto">
            <HeroSearch items={items} />
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-400">
            <span className="text-slate-500">Popular:</span>
            {['Private Limited', 'GST Registration', 'Trademark', 'FSSAI License'].map(term => (
              <a href={`/${term.toLowerCase().replace(/ /g, '-')}`} key={term} className="hover:text-blue-300 transition-colors border-b border-transparent hover:border-blue-300/50 pb-0.5">
                {term}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50 dark:bg-slate-950">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">Explore Services</h2>
            <p className="text-gray-500 dark:text-slate-400 text-lg leading-relaxed">Everything you need to start, manage, and grow your business in India. Categorized for easy access.</p>
          </div>
          <a href="/services" className="group px-6 py-3 bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all flex items-center shadow-sm hover:shadow-md">
            View All Categories <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <CategoryGrid items={items} />
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">How It Works</h2>
             <p className="text-gray-500 dark:text-gray-400 text-lg">Get your business compliant in 3 simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
             {[
               { title: "Select Service", desc: "Choose from 1000+ legal and compliance services tailored for you." },
               { title: "Submit Details", desc: "Upload documents securely to our encrypted online portal." },
               { title: "Get Delivered", desc: "Receive your registration or license digitally in record time." }
             ].map((step, i) => (
               <div key={i} className="relative p-10 rounded-3xl bg-gray-50 dark:bg-slate-800/50 border border-transparent hover:border-blue-100 dark:hover:border-slate-700 transition-colors group">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Trending Now</h2>
           <p className="text-gray-500 dark:text-gray-400">Most requested services by businesses this week</p>
        </div>
        <PopularPagesComponent items={items} />
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-900/30 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to start your business?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Talk to our experts today and get a free consultation on the best legal structure for your startup.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">Get Free Consultation</button>
              <button className="px-8 py-4 bg-blue-700/50 text-white border border-blue-400/30 rounded-xl font-bold hover:bg-blue-700 transition-colors backdrop-blur-sm">View all Services</button>
            </div>
          </div>
        </div>
      </section>

      <FooterSitemap />
    </main>
  );
}
