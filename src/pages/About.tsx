import React from 'react';
import { BookOpen, Code, GraduationCap, Pen } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import TimelineItem from '../components/TimelineItem';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <PageHeader 
        title="About Me"
        subtitle="A journey through literature and technology"
      />
      
      <div className="space-y-16">
        <div className="prose dark:prose-invert">
          <p className="text-lg leading-relaxed">
            I'm Aditya Mishra, a writer and technologist exploring the intersection of human emotion and machine intelligence. 
            My work spans from crafting verses in Hindi and English to developing AI systems that push the boundaries of what's possible.
          </p>
        </div>

        <div className="space-y-12">
          <h2 className="text-3xl font-serif font-bold text-center">Journey</h2>
          <div className="space-y-8">
            <TimelineItem
              year="2024"
              title="Joined IIT-Palakkad for Masters"
              description="Joined IIT-Palakkad after getting 99.4 percentile in GATE for Masters in Computer Science"
              Icon={Code}
              side="left"
            />
            <TimelineItem
              year="2021-2024"
              title="Worked As Freelancer"
              description="Worked as Freelancer for Tech and Content with clients around the globe"
              Icon={BookOpen}
              side="right"
            />
            <TimelineItem
              year="2021"
              title="Bachelor's in Computer Science"
              description="Specialized in Machine Learning and Natural Language Processing"
              Icon={GraduationCap}
              side="left"
            />
            <TimelineItem
              year="2019"
              title="First Publication"
              description="Literary debut with a series of poems in national magazines"
              Icon={Pen}
              side="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
