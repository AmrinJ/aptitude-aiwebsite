'use client';

import React, { use } from 'react';
import { SidebarNav } from '@/components/core/SidebarNav';
import { TOPICS } from '@/data/topics';
import { usePathname } from 'next/navigation';
import { Calculator } from '@/components/core/Calculator';

interface TopicLayoutProps {
  children: React.ReactNode;
  params: Promise<{ topic: string }>;
}

export default function TopicLayout({ children, params }: TopicLayoutProps) {
  const { topic: topicId } = use(params);
  const pathname = usePathname();

  const topic = TOPICS.find(t => t.id === topicId);

  // Extract current active chapter from path (e.g., /learn/number-system/introduction -> introduction)
  const segments = pathname.split('/');
  const activeChapterId = segments[segments.length - 1];

  return (
    <div className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 py-6 md:py-10 z-10">
      <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
        {/* Sidebar Nav */}
        <SidebarNav 
          topicId={topicId} 
          activeChapterId={activeChapterId} 
          chapters={topic?.chapters || []} 
        />
        
        {/* Main Content Area */}
        <main className="flex-1 w-full min-w-0">
          {children}
        </main>
      </div>

      {/* Floating scientific calculator */}
      <Calculator />
    </div>
  );
}
