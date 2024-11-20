import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  const projects = [
    {
      title: "Emotion AI Poetry Generator",
      description: "An AI system that generates poetry based on emotional context using advanced NLP techniques.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80",
      tags: ["Python", "PyTorch", "NLP", "Poetry"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "Literary Analysis Platform",
      description: "Web platform for computational analysis of poetry and prose, featuring sentiment analysis and style detection.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80",
      tags: ["React", "TypeScript", "ML", "API"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "Multilingual Poetry Database",
      description: "Comprehensive database of poems in Hindi and English with advanced search capabilities.",
      image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&q=80",
      tags: ["MongoDB", "Express", "React", "Node"],
      githubUrl: "https://github.com"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <PageHeader 
        title="Portfolio"
        subtitle="Selected projects combining technology and literature"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}