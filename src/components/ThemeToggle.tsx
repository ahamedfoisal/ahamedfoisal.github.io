'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') return stored;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-full bg-gray-100 dark:bg-[#00A8FF]/20 hover:bg-gray-200 dark:hover:bg-[#00A8FF]/30 transition-colors focus-ring dark:border dark:border-[#00A8FF]/50"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-white" />}
    </button>
  );
} 