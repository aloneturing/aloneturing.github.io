import React, { useState, useEffect } from 'react';
import { Quote, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  { text: "Find what you love and let it kill you", author: "Charles Bukowski", type: "literary" },
  { text: "The universe is under no obligation to make sense to you", author: "Richard Feynman", type: "tech" }
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => quotes.find(q => q.type !== prev.type) || quotes[0]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-serif font-bold">
              Poetry & Prose
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Exploring emotions and existence through poetry and prose in Hindi and English.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4"
            >
              <Quote className="w-8 h-8 text-gray-400" />
              <span className="text-lg font-serif">Literary Haven</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-serif font-bold">
              Technology & Research
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don't bend; don't water it down; don't try to make it logical; don't edit your soul according to the fashion. Rather, follow your most intense obsessions mercilessly.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4"
            >
              <Code className="w-8 h-8 text-gray-400" />
              <span className="text-lg font-serif">Digital Craftsman</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={currentQuote.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-serif text-center italic"
            >
              "{currentQuote.text}"
              <footer className="mt-4 text-gray-500 dark:text-gray-400">
                — {currentQuote.author}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Latest Writing', 'Research', 'Projects'].map((title, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {index === 0 && "Explore my recent poems and prose pieces..."}
                {index === 1 && "Current focus on machine learning and AI..."}
                {index === 2 && "Featured technical projects and experiments..."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}