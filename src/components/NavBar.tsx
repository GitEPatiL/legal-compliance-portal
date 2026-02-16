"use client";
import Link from 'next/link';
import { Search, ShieldCheck, ChevronDown, Rocket, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-slate-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg text-white shadow-lg group-hover:shadow-blue-500/30 transition-shadow">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
              Legal<span className="text-blue-400">Hub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-sm font-medium hover:text-blue-400 transition-colors ${scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-blue-50'}`}
            >
              Home
            </Link>
            <button 
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              className={`group flex items-center gap-1 text-sm font-medium hover:text-blue-400 transition-colors ${scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-blue-50'}`}
            >
              Services <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <Link 
              href="/compliance" 
              className={`text-sm font-medium hover:text-blue-400 transition-colors ${scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-blue-50'}`}
            >
              Compliance Hub
            </Link>
            <Link 
              href="/resources" 
              className={`text-sm font-medium hover:text-blue-400 transition-colors ${scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-blue-50'}`}
            >
              Resources
            </Link>
          </div>

          {/* Utilities */}
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <button className="md:hidden p-2 text-gray-500 dark:text-gray-300" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
            <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 text-sm font-semibold">
              Get Consultation <Rocket className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
            className="absolute top-20 left-0 w-full bg-white dark:bg-slate-900 shadow-2xl border-t border-gray-100 dark:border-slate-800 py-12"
          >
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-xs tracking-wider border-b pb-2 border-gray-100 dark:border-gray-800">Start Business</h3>
                <ul className="space-y-3">
                  {['Private Limited Company', 'LLP Registration', 'One Person Company', 'Partnership Firm'].map(item => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 mr-2 transition-colors"></span>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-xs tracking-wider border-b pb-2 border-gray-100 dark:border-gray-800">Tax & GST</h3>
                <ul className="space-y-3">
                  {['GST Registration', 'Income Tax Filing', 'TDS Return Filing', 'Professional Tax'].map(item => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 mr-2 transition-colors"></span>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-xs tracking-wider border-b pb-2 border-gray-100 dark:border-gray-800">Legal & IP</h3>
                <ul className="space-y-3">
                  {['Trademark Registration', 'Copyright Registration', 'Patent Registration', 'Legal Notice'].map(item => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 mr-2 transition-colors"></span>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-xl">
                 <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Need Expert Help?</h3>
                 <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">Talk to a legal expert today to get the right advice for your business.</p>
                 <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">Book Free Call</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 z-40 bg-white dark:bg-slate-900 pt-24 px-6 md:hidden"
          >
             <div className="flex flex-col gap-6 text-lg font-medium text-gray-900 dark:text-white">
                <Link href="/" onClick={toggleMobileMenu}>Home</Link>
                <Link href="/services" onClick={toggleMobileMenu}>Services</Link>
                <Link href="/compliance" onClick={toggleMobileMenu}>Compliance Hub</Link>
                <Link href="/resources" onClick={toggleMobileMenu}>Resources</Link>
                <hr className="border-gray-100 dark:border-gray-800" />
                <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold">Get Consultation</button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
