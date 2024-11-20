import React from 'react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export default function BlogCard({ title, excerpt, date, category, readTime }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
    >
      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <span>{date}</span>
        <span>•</span>
        <span>{category}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
      <motion.h2 
        className="text-2xl font-serif font-bold mb-4"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h2>
      <p className="text-gray-600 dark:text-gray-300">{excerpt}</p>
      <motion.button
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
        className="mt-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
      >
        Read more →
      </motion.button>
    </motion.article>
  );
}