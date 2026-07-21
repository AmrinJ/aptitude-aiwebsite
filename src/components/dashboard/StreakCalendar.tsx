'use client';

import React from 'react';
import { useGameState } from '@/context/GameStateContext';
import { useLanguage } from '@/context/LanguageContext';
import { Flame, Calendar, Award, Zap } from 'lucide-react';
import Link from 'next/link';

export const StreakCalendar: React.FC = () => {
  const { streak, xp, coins } = useGameState();
  const { t } = useLanguage();

  // Create fake last 7 days activity layout (with today active, and some previous days active)
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const activityData = [true, true, false, true, true, true, true]; // Mock activity matches the streak

  return (
    <div className="bg-white p-5 rounded-2xl flex flex-col gap-5 border border-slate-200 shadow-sm transition-all hover:border-blue-200">
      <div className="flex justify-between items-center">
        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
          <Calendar size={16} className="text-blue-600" /> Daily Activity & Challenge
        </h4>
        <div className="flex items-center gap-1.5 text-orange-600 font-bold animate-pulse text-sm">
          <Flame size={18} /> {streak} Day Streak
        </div>
      </div>

      {/* Days grid */}
      <div className="flex justify-between gap-1 bg-slate-50 border border-slate-100 p-4 rounded-xl shadow-inner">
        {daysOfWeek.map((day, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-slate-500 font-bold">{day}</span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              activityData[idx]
                ? 'bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md shadow-orange-200'
                : 'bg-white border border-slate-200 text-slate-400'
            }`}>
              {activityData[idx] ? <Flame size={14} /> : idx + 15}
            </div>
          </div>
        ))}
      </div>

      {/* Daily challenge card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-4 rounded-xl flex items-center justify-between gap-4 shadow-sm">
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] uppercase tracking-widest text-blue-700 font-black flex items-center gap-1.5">
            <Zap size={12} className="text-amber-500" /> Daily Quest active
          </span>
          <h5 className="font-black text-sm text-slate-900">Relative Speed Sprint</h5>
          <p className="text-xs font-medium text-slate-600">
            Solve 3 Train Problems in under 2 minutes.
          </p>
          <div className="flex gap-2 mt-1">
            <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
              +50 XP
            </span>
            <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded border border-amber-200">
              +10 Coins
            </span>
          </div>
        </div>
        <Link
          href="/learn/train-problems"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black rounded-xl transition-all shadow-md shadow-blue-200 tracking-wide uppercase"
        >
          Solve
        </Link>
      </div>
    </div>
  );
};
