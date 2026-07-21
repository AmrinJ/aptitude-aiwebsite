'use client';

import React from 'react';
import { useGameState } from '@/context/GameStateContext';
import { useLanguage } from '@/context/LanguageContext';
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, RadarChart, 
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar 
} from 'recharts';
import { ArrowLeft, Brain, TrendingUp, Zap, Clock, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function Analytics() {
  const { stats, xp } = useGameState();
  const { t } = useLanguage();

  // Mock data fallbacks if user hasn't solved questions yet
  const accuracyData = stats.accuracyHistory.length > 0
    ? stats.accuracyHistory.map((acc, idx) => ({ name: `Q${idx+1}`, Accuracy: acc }))
    : [
        { name: 'Start', Accuracy: 40 },
        { name: 'Day 2', Accuracy: 55 },
        { name: 'Day 3', Accuracy: 70 },
        { name: 'Today', Accuracy: 85 }
      ];

  const speedData = stats.speedHistory.length > 0
    ? stats.speedHistory.map((speed, idx) => ({ name: `Q${idx+1}`, Time: speed }))
    : [
        { name: 'Q1', Time: 45 },
        { name: 'Q2', Time: 32 },
        { name: 'Q3', Time: 28 },
        { name: 'Q4', Time: 15 }
      ];

  // Cognitive Radar details
  const radarData = [
    { subject: 'Speed (m/s)', A: Math.min(100, 40 + (stats.solvedCount * 4)), fullMark: 100 },
    { subject: 'Accuracy', A: stats.solvedCount > 0 ? Math.round((stats.correctCount / stats.solvedCount) * 100) : 75, fullMark: 100 },
    { subject: 'Geometry 3D', A: xp > 150 ? 80 : 50, fullMark: 100 },
    { subject: 'Relative Motion', A: stats.solvedCount > 2 ? 85 : 60, fullMark: 100 },
    { subject: 'Probability', A: xp > 300 ? 90 : 45, fullMark: 100 },
    { subject: 'Spatial Logic', A: 70, fullMark: 100 }
  ];

  // Exam projections
  const sbiPoScore = Math.min(99, Math.round(65 + (xp / 45)));
  const tcsNqtScore = Math.min(99, Math.round(70 + (xp / 35)));

  return (
    <div className="flex-1 flex flex-col w-full max-w-6xl mx-auto px-4 py-6 md:py-10 gap-8 z-10">
      
      {/* Header */}
      <header className="flex flex-col gap-1">
        <Link
          href="/dashboard"
          className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-400 font-semibold mb-1"
        >
          <ArrowLeft size={14} /> Back to Dashboard
        </Link>
        <h1 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-2">
          <Brain className="text-indigo-500" /> AI Performance Analytics
        </h1>
      </header>

      {/* Overview Stats Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-slate-850">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold block">Total Solved</span>
          <span className="text-2xl font-black text-slate-800 dark:text-white">{stats.solvedCount || 4} Drill Questions</span>
        </div>
        <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-slate-850">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold block">Avg. Accuracy</span>
          <span className="text-2xl font-black text-emerald-400">
            {stats.solvedCount > 0 ? Math.round((stats.correctCount / stats.solvedCount) * 100) : 80}%
          </span>
        </div>
        <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-slate-850">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold block">Total Time spent</span>
          <span className="text-2xl font-black text-indigo-400">{Math.round(stats.totalTimeSpent / 60) || 3} mins</span>
        </div>
        <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-slate-850">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold block">Confidence Level</span>
          <span className="text-2xl font-black text-cyan-400">{xp > 300 ? 'Expert' : xp > 150 ? 'Intermediate' : 'Beginner'}</span>
        </div>
      </section>

      {/* Grid containing charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left: Accuracy & Speed Overviews */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Accuracy area chart */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 border border-slate-200 dark:border-slate-850 bg-slate-900/10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <TrendingUp size={14} className="text-emerald-400" /> Accuracy Growth Curve (%)
            </h3>
            <div className="w-full h-[200px] text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={accuracyData}>
                  <defs>
                    <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" domain={[0, 100]} />
                  <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }} />
                  <Area type="monotone" dataKey="Accuracy" stroke="#10b981" fillOpacity={1} fill="url(#colorAcc)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Speed Histograms */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 border border-slate-200 dark:border-slate-850 bg-slate-900/10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Clock size={14} className="text-indigo-400" /> Average Solving Speed (Seconds)
            </h3>
            <div className="w-full h-[200px] text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={speedData}>
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }} />
                  <Bar dataKey="Time" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Right: Cognitive Radar & Exam Predictor */}
        <div className="flex flex-col gap-6">
          
          {/* Radar Chart */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 border border-slate-200 dark:border-slate-850 bg-slate-900/10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Zap size={14} className="text-yellow-400" /> Cognitive Skills Radar
            </h3>
            <div className="w-full h-[220px] text-xs flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.08)" />
                  <PolarAngleAxis dataKey="subject" stroke="#64748b" style={{ fontSize: '9px' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="rgba(255,255,255,0.08)" style={{ fontSize: '8px' }} />
                  <Radar name="Student" dataKey="A" stroke="#818cf8" fill="#6366f1" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Predicted Exam Scores */}
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 border border-slate-200 dark:border-slate-850">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              🔮 Exam Performance Projections
            </h3>

            <div className="flex flex-col gap-3">
              {/* SBI PO */}
              <div className="flex flex-col gap-1 bg-black/10 dark:bg-black/30 p-3 rounded-xl border border-slate-350 dark:border-slate-850">
                <div className="flex justify-between text-xs font-bold">
                  <span>SBI Bank PO Percentile</span>
                  <span className="text-indigo-400 font-mono">{sbiPoScore}%</span>
                </div>
                <div className="w-full bg-slate-300 dark:bg-slate-850 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full transition-all" style={{ width: `${sbiPoScore}%` }} />
                </div>
                <span className="text-[9px] text-slate-400 mt-1">Based on quantitative speed limits. Target: 90%</span>
              </div>

              {/* TCS NQT */}
              <div className="flex flex-col gap-1 bg-black/10 dark:bg-black/30 p-3 rounded-xl border border-slate-350 dark:border-slate-850">
                <div className="flex justify-between text-xs font-bold">
                  <span>TCS NQT Placement Probability</span>
                  <span className="text-cyan-400 font-mono">{tcsNqtScore}%</span>
                </div>
                <div className="w-full bg-slate-300 dark:bg-slate-850 h-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full transition-all" style={{ width: `${tcsNqtScore}%` }} />
                </div>
                <span className="text-[9px] text-slate-400 mt-1">Based on logical puzzles and speed drills. Target: 85%</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
