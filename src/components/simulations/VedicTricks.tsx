'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Zap } from 'lucide-react';

import { topicVedicTricks, defaultTricks } from '@/data/vedicTricks';

interface VedicTricksProps {
  topicId?: string;
}

export const VedicTricks: React.FC<VedicTricksProps> = ({ topicId = 'number-system' }) => {
  const { language } = useLanguage();
  
  const TRICKS = topicVedicTricks[topicId] || defaultTricks;

  return (
    <div className="flex flex-col gap-8">
      <div className="text-left mb-2">
        <h3 className="text-xl font-bold flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-2">
          ⚡ Vedic Math & Shortcuts Board
        </h3>
        <p className="text-sm opacity-75 text-slate-600 dark:text-slate-400">
          Compare long traditional calculations side-by-side with Vedic math mental hacks. Scroll down to see all shortcuts for this topic!
        </p>
      </div>

      {TRICKS.map((trick, idx) => {
        const rawTitle = trick.title[language] || trick.title['en'];
        const cleanTitle = rawTitle.replace(/^#\d+:\s*/, '');

        return (
          <div key={idx} className="glass-panel p-6 rounded-2xl glow-hover flex flex-col gap-6 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm relative">
            <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-3">
              Trick {idx + 1}: {cleanTitle}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Traditional Panel */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-850 flex flex-col gap-2 relative">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Traditional Method (Slow)</span>
                <div className="flex-1 bg-black/10 dark:bg-black/40 p-4 rounded-lg font-mono text-xs flex flex-col justify-center gap-1 min-h-[140px]">
                  <p className="text-slate-500 font-bold mb-2">Equation: {trick.equation}</p>
                  {trick.traditional.map((line, i) => (
                    <pre key={i} className="whitespace-pre">{line}</pre>
                  ))}
                </div>
                <div className="text-[10px] text-red-600 dark:text-red-400 font-semibold mt-1">
                  ⚠️ Time taken: ~25 seconds. Susceptible to calculation errors.
                </div>
              </div>

              {/* Vedic Shortcut Panel */}
              <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-900/40 flex flex-col gap-2 relative">
                <span className="text-[10px] uppercase font-bold text-indigo-700 dark:text-indigo-400 tracking-wider flex items-center gap-1">
                  <Zap size={12} className="text-amber-500 dark:text-yellow-400" /> Vedic Speed Hack (Fast)
                </span>
                <div className="flex-1 bg-black/5 dark:bg-black/50 p-4 rounded-lg text-xs flex flex-col justify-center gap-2 min-h-[140px]">
                  <p className="text-emerald-700 dark:text-emerald-400 font-bold font-mono">Mental Step: {trick.equation}</p>
                  {trick.vedic.map((step, i) => (
                    <p key={i} className="opacity-90 leading-relaxed font-semibold">
                      {step}
                    </p>
                  ))}
                </div>
                <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold mt-1">
                  ✅ Time taken: ~2 seconds. Easy mental verification.
                </div>
              </div>
            </div>

            {/* Explanatory notes */}
            <div className="bg-indigo-950/20 border border-indigo-900/30 p-4 rounded-xl flex items-start gap-3">
              <Sparkles size={16} className="text-yellow-400 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200">How it works (Vedic Sutra)</span>
                <p className="opacity-80 leading-relaxed text-sm">
                  {trick.explanation[language] || trick.explanation['en']}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
