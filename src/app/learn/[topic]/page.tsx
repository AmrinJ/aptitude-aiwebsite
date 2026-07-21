'use client';

import { use, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface LearnIndexProps {
  params: Promise<{ topic: string }>;
}

export default function LearnIndexPage({ params }: LearnIndexProps) {
  const { topic: topicId } = use(params);
  const router = useRouter();

  useEffect(() => {
    // Number System starts with ns-t1, everything else starts with concepts
    const firstChapter = topicId === 'number-system' ? 'ns-t1' : 'concepts';
    router.replace(`/learn/${topicId}/${firstChapter}`);
  }, [topicId, router]);

  return (
    <div className="flex items-center justify-center p-12 text-slate-400 text-xs">
      Loading syllabus roadmap...
    </div>
  );
}
