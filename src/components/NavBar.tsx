'use client';
import Link from 'next/link';
import { ShieldCheck, ChevronDown, Rocket, Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '@/hooks/useScrollUtils';
import { navbarVariants } from '@/config/animations';

export default function NavBar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollDirection, isScrolled } = useScrollDirection();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.nav
      variants={navbarVariants}
      initial="visible"
      animate={scrollDirection === 'down' ? 'hidden' : 'visible'}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-slate-800 h-16'
          : 'bg-transparent h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg text-white shadow-lg group-hover:shadow-blue-500/30 transition-shadow">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <span
              className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
            >
              Legal<span className="text-blue-600 dark:text-blue-400">Hub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-blue-50'}`}
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button
                className={`group flex items-center gap-1 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-blue-50'}`}
              >
                Services{' '}
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Mega Menu Overlay */}
              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-[600px] -ml-20 pt-4"
                  >
                    <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden">
                      <div className="grid grid-cols-2 gap-8 p-8">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase text-xs tracking-wider border-b border-gray-100 dark:border-gray-800 pb-2">
                            Start Business
                          </h3>
                          <ul className="space-y-3">
                            {[
                              'Private Limited Company',
                              'LLP Registration',
                              'One Person Company',
                              'Partnership Firm',
                            ].map((item) => (
                              <li key={item}>
                                <Link
                                  href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 mr-2 transition-colors"></span>
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase text-xs tracking-wider border-b border-gray-100 dark:border-gray-800 pb-2">
                            Tax & GST
                          </h3>
                          <ul className="space-y-3">
                            {[
                              'GST Registration',
                              'Income Tax Filing',
                              'TDS Return Filing',
                              'Professional Tax',
                            ].map((item) => (
                              <li key={item}>
                                <Link
                                  href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 mr-2 transition-colors"></span>
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-span-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                          <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase text-xs tracking-wider">
                            Legal & IP
                          </h3>
                          <ul className="grid grid-cols-2 gap-3">
                            {[
                              'Trademark Registration',
                              'Copyright Registration',
                              'Patent Registration',
                              'Legal Notice',
                            ].map((item) => (
                              <li key={item}>
                                <Link
                                  href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 mr-2 transition-colors"></span>
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-slate-800 p-4 border-t border-gray-100 dark:border-slate-700 text-center">
                        <Link
                          href="/services"
                          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                        >
                          View All 12+ Services →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/compliance"
              className={`text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-blue-50'}`}
            >
              Compliance Hub
            </Link>
            <Link
              href="/resources"
              className={`text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-blue-50'}`}
            >
              Resources
            </Link>
          </div>

          {/* Utilities */}
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <button
              className="md:hidden p-2 text-gray-500 dark:text-gray-300"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
            <button className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 text-sm font-bold">
              Get Consultation <Rocket className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 z-40 bg-white dark:bg-slate-900 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-medium text-gray-900 dark:text-white">
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={toggleMobileMenu}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/compliance"
                onClick={toggleMobileMenu}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Compliance Hub
              </Link>
              <Link
                href="/resources"
                onClick={toggleMobileMenu}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Resources
              </Link>
              <hr className="border-gray-100 dark:border-gray-800" />
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                Get Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
