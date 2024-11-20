import React from 'react';
import { Moon, Sun, Github, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className="fixed w-full backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <a href="/" className="font-serif text-xl">AM</a>
            <div className="flex space-x-8">
              <a href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">About</a>
              <a href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300">Blog</a>
              <a href="/portfolio" className="hover:text-gray-600 dark:hover:text-gray-300">Portfolio</a>
              <a href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300">Contact</a>
              <button onClick={toggleTheme} className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {children}
      </main>

      <footer className="py-8 mt-16 border-t dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Aditya Mishra
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
