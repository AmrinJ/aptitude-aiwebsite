'use client';

import React from 'react';
import { useGameState } from '@/context/GameStateContext';
import { useLanguage } from '@/context/LanguageContext';
import { SkillTree } from '@/components/dashboard/SkillTree';
import { StreakCalendar } from '@/components/dashboard/StreakCalendar';
import { 
  Flame, Award, Settings, User, BarChart2, ShieldAlert,
  Globe, Shield, BookOpen, Compass, RotateCcw, Target, AlertTriangle, Bookmark, BookOpenCheck, ChevronRight, Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const { 
    xp, coins, streak, prepMode, setPrepMode, achievements,
    theme, toggleTheme, largeText, setLargeText,
    colorBlindMode, setColorBlindMode, resetProgress, unlockedTopics, stats
  } = useGameState();

  const { language, t } = useLanguage();

  // Mock Bookmarks and Wrong Answers
  const mockBookmarks = [
    { id: 'train-q1', title: 'Speed calculation of train crossing telegraph post' }
  ];

  const mockWrongAnswers = [
    { id: 'ns-t1', topicId: 'number-system', title: 'Digital root of 987654321' }
  ];

  return (
    <div className="flex-1 flex flex-col w-full max-w-6xl mx-auto px-5 py-8 gap-8 animate-fade-in text-slate-900 bg-white">
      
      {/* Top Header stats bar */}
      <header className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col md:flex-row gap-4 justify-between items-center shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm">A</div>
          <span className="font-black text-lg text-slate-900 tracking-tight">AptitudeAI</span>
        </Link>

        {/* Game stats */}
        <div className="flex flex-wrap justify-center items-center gap-3 text-xs font-semibold">
          <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wide">XP</span>
            <span className="text-blue-600 font-bold">{xp}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wide">Coins</span>
            <span className="text-amber-500 font-bold">🪙 {coins}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-2 rounded-lg border border-orange-200">
            <Flame size={14} />
            <span className="text-[10px] uppercase font-bold tracking-wide">Streak</span>
            <span>{streak} Days</span>
          </div>
          <Link
            href="/analytics"
            className="flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-slate-700 font-bold transition-colors"
          >
            <BarChart2 size={14} /> Stats
          </Link>
          <Link
            href="/admin"
            className="flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-slate-700 font-bold transition-colors"
          >
            <ShieldAlert size={14} /> Admin
          </Link>
        </div>
      </header>

      {/* Mode Filter Bar */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-200">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-bold text-slate-500 uppercase tracking-widest text-[11px]">Active Track:</span>
            <span className="font-black text-blue-600 uppercase text-xs">
              {prepMode === 'banking' ? t('bankingMode') : prepMode === 'it' ? t('itMode') : t('generalMode')}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium">
            {prepMode === 'banking' && 'Focuses heavily on Data Interpretation, Speed Math, and Advanced Reasoning.'}
            {prepMode === 'it' && 'Prioritizes Logical Puzzles, Coding-based Quant, and Core Aptitude.'}
            {prepMode === 'general' && 'A balanced curriculum covering all foundational Quant and Logic topics.'}
          </p>
        </div>

        <div className="flex bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
          <button
            onClick={() => setPrepMode('general')}
            className={`px-4 py-1.5 text-xs font-bold rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
              prepMode === 'general' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <BookOpen size={13} /> General
          </button>
          <button
            onClick={() => setPrepMode('banking')}
            className={`px-4 py-1.5 text-xs font-bold rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
              prepMode === 'banking' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Shield size={13} /> Banking
          </button>
          <button
            onClick={() => setPrepMode('it')}
            className={`px-4 py-1.5 text-xs font-bold rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
              prepMode === 'it' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Compass size={13} /> IT Placement
          </button>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left 2 cols: Skill Tree */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest">
              Learning Journey Path
            </h2>
            <div className="text-[10px] text-blue-700 font-bold bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Unlocked: {unlockedTopics.length} / 19 Topics
            </div>
          </div>
          <SkillTree />
        </div>

        {/* Right 1 col: Streak, goals, wrong answers, and settings */}
        <div className="flex flex-col gap-6">

          {/* Daily Quiz CTA */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-5 rounded-xl flex flex-col gap-4 border border-blue-800 shadow-lg text-white">
            <h4 className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-blue-100">
              <Sparkles size={16} className="text-amber-300" /> Daily Quest Active
            </h4>
            <div>
              <h3 className="font-black text-xl mb-1">1-Day Mastery Quiz</h3>
              <p className="text-xs text-blue-200 font-medium leading-relaxed">
                A 30-question rapid drill covering all your unlocked topics. Test your retention!
              </p>
            </div>
            <Link 
              href="/daily-quiz" 
              className="bg-white text-indigo-700 font-black text-xs uppercase tracking-wider py-3 rounded-lg text-center hover:bg-blue-50 transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              Start 30-Q Drill <ChevronRight size={14} />
            </Link>
          </div>
          
          {/* Today's Goal */}
          <div className="bg-white p-5 rounded-xl flex flex-col gap-4 border border-slate-200 shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
              <Target size={16} className="text-blue-600" /> Today's Goal
            </h4>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col gap-3 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-blue-600 rounded" />
                <span className="line-through text-slate-400">Complete Number System Intro</span>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 accent-blue-600 rounded" />
                <span>Explore Interactive Number Line</span>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 accent-blue-600 rounded" />
                <span>Score 70%+ on divisibility test</span>
              </div>
            </div>
          </div>

          {/* Streak Calendar */}
          <StreakCalendar />

          {/* Recommended Revisions */}
          <div className="bg-white p-5 rounded-xl flex flex-col gap-4 border border-slate-200 shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
              💡 Recommended Revision
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Based on your speed/accuracy vectors, review the following formulas:
            </p>
            <div className="flex flex-col gap-2 text-xs">
              <Link href="/learn/number-system/rules" className="text-blue-600 hover:text-blue-700 hover:underline font-bold flex items-center gap-1.5">
                <ChevronRight size={14} /> Chapter 5: Divisibility Rules & Remainders
              </Link>
              <Link href="/learn/number-system/shortcuts" className="text-blue-600 hover:text-blue-700 hover:underline font-bold flex items-center gap-1.5">
                <ChevronRight size={14} /> Chapter 6: Vedic Math Shortcuts
              </Link>
            </div>
          </div>

          {/* Bookmarks & Wrong Answers */}
          <div className="bg-white p-5 rounded-xl flex flex-col gap-5 border border-slate-200 shadow-sm">
            {/* Bookmarks */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                <Bookmark size={14} className="text-blue-600" /> Bookmarks ({mockBookmarks.length})
              </h4>
              {mockBookmarks.map(b => (
                <div key={b.id} className="text-xs bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <Link href={`/learn/train-problems`} className="text-slate-700 hover:text-blue-600 font-bold transition-colors">
                    {b.title}
                  </Link>
                </div>
              ))}
            </div>

            {/* Wrong Answers Log */}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                <AlertTriangle size={14} className="text-red-500" /> Incorrect Attempts ({mockWrongAnswers.length})
              </h4>
              {mockWrongAnswers.map(w => (
                <div key={w.id} className="flex justify-between items-center text-xs bg-red-50 p-3 rounded-lg border border-red-100">
                  <span className="truncate font-bold text-red-900 w-2/3">{w.title}</span>
                  <Link href={`/learn/${w.topicId}/topic-test`} className="text-[10px] uppercase tracking-wider bg-red-600 text-white px-2 py-1 rounded font-bold hover:bg-red-700 transition-colors">
                    Retry
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white p-5 rounded-xl flex flex-col gap-4 border border-slate-200 shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
              <Award size={16} className="text-amber-500" /> Badges Unlocked ({achievements.length})
            </h4>
            {achievements.length > 0 ? (
              <div className="grid grid-cols-4 gap-3">
                {achievements.map(ach => (
                  <div key={ach.id} className="flex flex-col items-center gap-1 text-center group relative cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-xl hover:scale-105 transition-all shadow-sm">
                      {ach.icon}
                    </div>
                    <div className="absolute bottom-14 w-36 bg-slate-900 border border-slate-800 rounded-lg p-2.5 hidden group-hover:block z-20 text-[10px] text-white shadow-xl">
                      <p className="font-bold text-xs">{ach.title}</p>
                      <p className="text-slate-400 mt-1">{ach.desc}</p>
                      <span className="text-emerald-400 font-mono block mt-1.5 font-bold">{ach.unlockedAt}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">No badges unlocked yet. Score 70% in tests to claim rewards.</p>
            )}
          </div>

          {/* Accessibility Settings */}
          <div className="bg-white p-5 rounded-xl flex flex-col gap-4 border border-slate-200 shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
              <Settings size={16} className="text-slate-500" /> Accessibility Settings
            </h4>

            <div className="flex justify-between items-center text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span>Enlarge Lesson Fonts</span>
              <input
                type="checkbox"
                checked={largeText}
                onChange={e => setLargeText(e.target.checked)}
                className="w-4 h-4 accent-blue-600 cursor-pointer"
              />
            </div>

            <div className="flex flex-col gap-2 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <span>Color Blind Correction</span>
              <select
                value={colorBlindMode}
                onChange={e => setColorBlindMode(e.target.value as any)}
                className="bg-white border border-slate-200 text-sm px-3 py-2 rounded-lg text-slate-900 font-bold focus:outline-none focus:border-blue-500 w-full mt-1 shadow-sm"
              >
                <option value="normal">Normal Colors</option>
                <option value="protanopia">Protanopia (Red Weakness)</option>
                <option value="deuteranopia">Deuteranopia (Green Weakness)</option>
                <option value="tritanopia">Tritanopia (Blue Weakness)</option>
              </select>
            </div>

            <div className="pt-3">
              <button
                onClick={() => { if (confirm('Are you sure you want to reset all your XP, streaks, and lessons?')) resetProgress(); }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border-2 border-slate-200 hover:border-red-200 hover:bg-red-50 text-slate-600 hover:text-red-600 text-xs font-bold rounded-xl transition-all cursor-pointer uppercase tracking-wider"
              >
                <RotateCcw size={14} /> Reset Study Progress
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
