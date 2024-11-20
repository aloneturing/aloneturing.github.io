import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-xl text-gray-600 dark:text-gray-300">{subtitle}</p>}
    </div>
  );
}