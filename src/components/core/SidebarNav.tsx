'use client';

import React from 'react';
import { useGameState } from '@/context/GameStateContext';
import { useLanguage } from '@/context/LanguageContext';
import { LANGUAGES } from '@/data/translations';
import { 
  Flame, Award, Settings, User, BarChart2, ShieldAlert,
  Globe, Moon, Sun, BookOpen, Compass, ChevronRight, Calculator as CalcIcon, Home, BookOpenCheck
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarNavProps {
  topicId?: string;
  activeChapterId?: string;
  chapters?: Array<{ id: string; title: { [lang: string]: string } }>;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({ topicId, activeChapterId, chapters = [] }) => {
  const { 
    xp, coins, streak, theme, toggleTheme, prepMode 
  } = useGameState();
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-5 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
      {/* Brand Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs">A</div>
          <span className="font-black text-base text-slate-900 tracking-tight">AptitudeAI</span>
        </Link>
      </div>

      {/* Profile Overview */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col gap-3 text-xs shadow-inner">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mode</span>
          <span className="font-black text-slate-700 capitalize">{prepMode}</span>
        </div>
        <div className="flex justify-between items-center text-xs font-bold">
          <span className="text-orange-600 flex items-center gap-1 bg-orange-50 px-2 py-0.5 rounded border border-orange-100"><Flame size={14} /> {streak}</span>
          <span className="text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">🪙 {coins}</span>
          <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">⚡ {xp} XP</span>
        </div>
      </div>

      {/* Core Links */}
      <nav className="flex flex-col gap-1 text-xs">
        <Link 
          href="/dashboard"
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all ${
            pathname === '/dashboard' 
              ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
              : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
          }`}
        >
          <Home size={15} /> {t('dashboard')}
        </Link>
        <Link 
          href="/analytics"
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all ${
            pathname === '/analytics' 
              ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
              : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
          }`}
        >
          <BarChart2 size={15} /> AI Analytics
        </Link>
        <Link 
          href="/admin"
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all ${
            pathname === '/admin' 
              ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
              : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
          }`}
        >
          <ShieldAlert size={15} /> Admin Override
        </Link>
      </nav>

      {/* Chapters list navigation */}
      {topicId && chapters.length > 0 && (
        <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
          <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest px-2 flex items-center gap-1.5">
            <BookOpenCheck size={12} className="text-slate-400" /> Chapter Syllabus
          </span>
          <div className="flex flex-col gap-1 max-h-[240px] overflow-y-auto pr-2 scrollbar-thin">
            {chapters.map(ch => {
              const isActive = activeChapterId === ch.id;
              const chTitle = ch.title[language] || ch.title['en'] || ch.id;
              return (
                <Link
                  key={ch.id}
                  href={`/learn/${topicId}/${ch.id}`}
                  className={`px-3 py-2 rounded-lg text-xs font-bold text-left transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border border-blue-100 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  {chTitle}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Language Switch */}
      <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-2 text-xs">
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-black uppercase tracking-widest px-1">
          <Globe size={12} className="text-slate-400" /> Language
        </div>
        <select
          value={language}
          onChange={e => setLanguage(e.target.value as any)}
          className="bg-white border border-slate-200 text-xs px-3 py-2.5 rounded-xl text-slate-900 font-bold focus:outline-none focus:border-blue-500 w-full shadow-sm hover:border-blue-300 transition-colors"
        >
          {LANGUAGES.map(l => (
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>
      </div>
    </aside>
  );
};
