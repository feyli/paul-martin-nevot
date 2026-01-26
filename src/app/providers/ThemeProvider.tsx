"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children, initialTheme = 'light' }: { children: ReactNode; initialTheme?: Theme }) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  // Initialize theme from localStorage on client mount
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored && (stored === 'light' || stored === 'dark')) {
      setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    } else {
      // Apply initial theme from server
      document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }
  }, [initialTheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Update localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update cookie with 1 year expiration
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Update DOM
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
