'use client';

import React from 'react';
import { useGameState } from '@/context/GameStateContext';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { ALL_SYLLABUS_TOPICS } from '@/data/topics';
import { Lock, CheckCircle, Flame, Target, Award, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const SkillTree: React.FC = () => {
  const { unlockedTopics, completedQuizzes, prepMode } = useGameState();
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  const [dbTopics, setDbTopics] = React.useState<any[]>([...ALL_SYLLABUS_TOPICS]);

  React.useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => {
        if (data.topics && data.topics.length > 0) {
          setDbTopics(data.topics);
        }
      })
      .catch(console.error);
  }, []);

  // Filter topics based on subject or highlights
  const quantTopics = dbTopics.filter(t => t.subject === 'quant');
  const logicalTopics = dbTopics.filter(t => t.subject === 'logical');

  // Highlights based on prep modes
  const isHighlighted = (id: string) => {
    if (prepMode === 'banking') {
      return ['percentage', 'profit-loss', 'train-problems', 'boats-streams', 'pipes-cisterns', 'probability', 'geometry-3d'].includes(id);
    }
    if (prepMode === 'it') {
      return ['coding-decoding', 'blood-relations', 'seating-arrangement', 'syllogism', 'clock-problems', 'cube-dice', 'train-problems'].includes(id);
    }
    return false;
  };

  const renderTopicNode = (topic: typeof ALL_SYLLABUS_TOPICS[number], index: number) => {
    const isUnlocked = isAdmin || unlockedTopics.includes(topic.id);
    const score = completedQuizzes[topic.id] || 0;
    const isPassed = score >= 70;
    const highlight = isHighlighted(topic.id);

    // Zig-zag offset styling
    const offsetClass = 
      index % 3 === 1 ? 'translate-x-6 md:translate-x-12' :
      index % 3 === 2 ? '-translate-x-6 md:-translate-x-12' : '';

    return (
      <div 
        key={topic.id} 
        className={`flex flex-col items-center relative transition-all duration-300 ${offsetClass} my-4`}
      >
        {/* Connector Line (drawn except for first item) */}
        {index > 0 && (
          <div className="absolute -top-6 w-0.5 h-6 bg-slate-200" />
        )}

        <div className="relative group">
          {/* Highlight ring for mode matches */}
          {highlight && (
            <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 blur-md opacity-80 animate-pulse z-0" />
          )}

          {/* Node circle */}
          <Link
            href={isUnlocked ? `/learn/${topic.id}` : '#'}
            className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center relative z-10 shadow-sm border-2 transition-all ${
              isPassed 
                ? 'bg-emerald-500 hover:bg-emerald-600 border-emerald-400 text-white shadow-emerald-200'
                : isUnlocked
                  ? 'bg-blue-600 hover:bg-blue-700 border-blue-400 text-white shadow-blue-200'
                  : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {isPassed ? (
              <CheckCircle size={24} />
            ) : isUnlocked ? (
              <span className="font-bold text-sm font-mono">{topic.name.substring(0,2).toUpperCase()}</span>
            ) : (
              <Lock size={18} className="opacity-60" />
            )}
          </Link>

          {/* Tooltip info bubble */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-16 w-48 bg-white border border-slate-200 rounded-xl p-3 shadow-xl hidden group-hover:block z-30 text-slate-800 text-center text-[10px]">
            <p className="font-bold text-xs text-slate-900">{topic.name}</p>
            <p className="text-slate-500 mt-0.5">{topic.difficulty} • Quant</p>
            {isUnlocked ? (
              score > 0 ? (
               <p className="text-emerald-600 mt-1 font-bold bg-emerald-50 py-1 rounded">Best Score: {score}%</p>
              ) : (
                <p className="text-blue-600 mt-1 font-bold bg-blue-50 py-1 rounded">Ready to Learn</p>
              )
            ) : (
              <p className="text-red-500 mt-1 flex items-center justify-center gap-1 font-medium">
                <Lock size={10} /> Locked (Need 70%+ score prior)
              </p>
            )}
            {highlight && (
              <span className="inline-block mt-2 px-2 py-1 bg-amber-50 border border-amber-200 text-amber-700 rounded text-[9px] font-bold">
                ⭐ Highly Recommended for {prepMode === 'banking' ? 'Banking' : 'IT Placements'}
              </span>
            )}
          </div>
        </div>

        {/* Label */}
        <span className={`text-[11px] font-bold mt-2 px-2 py-0.5 rounded-full text-center max-w-[120px] truncate ${
          isUnlocked 
            ? 'text-slate-700' 
            : 'text-slate-400'
        }`}>
          {topic.name}
        </span>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      
      {/* 1. Quantitative Aptitude Tree */}
      <div className="bg-white p-6 rounded-2xl flex flex-col items-center border border-slate-200 shadow-sm">
        <h3 className="text-sm font-black flex items-center gap-2 mb-6 text-slate-900 uppercase tracking-widest">
          <Target size={18} className="text-blue-600" /> {t('quant')}
        </h3>
        <div className="flex flex-col items-center">
          {quantTopics.map((topic, index) => renderTopicNode(topic, index))}
        </div>
      </div>

      {/* 2. Logical Reasoning Tree */}
      <div className="bg-white p-6 rounded-2xl flex flex-col items-center border border-slate-200 shadow-sm">
        <h3 className="text-sm font-black flex items-center gap-2 mb-6 text-slate-900 uppercase tracking-widest">
          <Sparkles size={18} className="text-blue-600" /> {t('logical')}
        </h3>
        <div className="flex flex-col items-center">
          {logicalTopics.map((topic, index) => renderTopicNode(topic, index))}
        </div>
      </div>

    </div>
  );
};
