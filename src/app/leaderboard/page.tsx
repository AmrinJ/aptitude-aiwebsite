'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Star } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  id: string;
  displayName: string;
  role: string;
  xp: number;
  badgesCount: number;
}

export default function LeaderboardPage() {
  const [leaders, setLeaders] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/leaderboard')
      .then(res => res.json())
      .then(data => {
        if (data.leaderboard) setLeaders(data.leaderboard);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-8 h-8 border-4 border-amber-200 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return <div className="w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center text-white font-black shadow-lg shadow-yellow-200"><Trophy size={18} /></div>;
      case 2:
        return <div className="w-10 h-10 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full flex items-center justify-center text-white font-black shadow-lg shadow-slate-200"><Medal size={18} /></div>;
      case 3:
        return <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white font-black shadow-lg shadow-amber-200/50"><Medal size={18} /></div>;
      default:
        return <div className="w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center font-bold">{rank}</div>;
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full max-w-4xl mx-auto px-4 py-8 md:py-12 gap-8">
      
      <header className="flex flex-col items-center text-center gap-2">
        <div className="inline-flex items-center justify-center p-3 bg-amber-100 text-amber-600 rounded-2xl mb-2">
          <Trophy size={32} />
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Global Leaderboard</h1>
        <p className="text-slate-500 font-medium max-w-lg">
          Compete with students worldwide. Solve problems faster and more accurately to climb the ranks and earn your spot at the top.
        </p>
      </header>

      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
        {leaders.length === 0 ? (
          <div className="p-12 text-center text-slate-500 font-medium">No players on the leaderboard yet.</div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {leaders.map((entry) => (
              <li key={entry.id} className={`flex items-center gap-4 p-4 md:px-6 md:py-5 transition-colors ${entry.rank <= 3 ? 'bg-amber-50/30' : 'hover:bg-slate-50'}`}>
                
                {/* Rank */}
                <div className="flex-shrink-0 w-12 flex justify-center">
                  {getRankBadge(entry.rank)}
                </div>

                {/* Name */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900 truncate">
                      {entry.displayName}
                    </h3>
                    {entry.role === 'admin' && (
                      <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Staff</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-0.5 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1"><Star size={12} className="text-emerald-500" /> {entry.badgesCount} Badges</span>
                  </div>
                </div>

                {/* XP */}
                <div className="flex-shrink-0 text-right">
                  <div className="text-xl font-black text-amber-500">{entry.xp.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total XP</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}
