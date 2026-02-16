"use client";
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) setIsDark(true);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-muted" />}
    </button>
  );
}
