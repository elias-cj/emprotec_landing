'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check saved local storage or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-full bg-[#4295DC]/10 border border-[#4295DC]/40 text-[#4295DC] hover:text-white hover:bg-[#4295DC] dark:hover:bg-[#4295DC] transition-all duration-300 shadow-md group"
      title={isDark ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
