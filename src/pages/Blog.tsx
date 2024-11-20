import React from 'react';
import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';

export default function Blog() {
  const posts = [
    {
      title: "The Dance of Algorithms",
      excerpt: "Exploring the poetic nature of computational thinking and how algorithms mirror the rhythms of natural language.",
      date: "March 15, 2024",
      category: "Tech & Poetry",
      readTime: "5 min read"
    },
    {
      title: "वैज्ञानिक काव्य (Scientific Poetry)",
      excerpt: "A collection of Hindi poems inspired by quantum mechanics and the uncertainty principle.",
      date: "March 10, 2024",
      category: "Poetry",
      readTime: "4 min read"
    },
    {
      title: "Machine Learning: A Writer's Perspective",
      excerpt: "How natural language processing is reshaping our understanding of literary creation.",
      date: "March 5, 2024",
      category: "Technology",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <PageHeader 
        title="Blog"
        subtitle="Thoughts on technology, poetry, and everything in between"
      />
      
      <div className="space-y-8">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}