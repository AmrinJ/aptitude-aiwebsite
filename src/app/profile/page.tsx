'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useGameState } from '@/context/GameStateContext';
import { User, Settings, Medal, Shield, Save } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const { user } = useAuth();
  const { achievements, xp, coins } = useGameState();
  
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetch('/api/user/profile')
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setDisplayName(data.user.displayName || '');
        }
      });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    const body: any = {};
    if (displayName) body.displayName = displayName;
    if (password) body.password = password;

    try {
      const res = await fetch('/api/user/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setMessage('Profile updated successfully!');
        setPassword('');
      } else {
        setMessage('Failed to update profile.');
      }
    } catch (err) {
      setMessage('An error occurred.');
    } finally {
      setSaving(false);
    }
  };

  if (!user) return null;

  return (
    <div className="flex-1 flex flex-col w-full max-w-[1000px] mx-auto px-4 py-8 gap-8">
      
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl md:text-3xl font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
          <User className="text-blue-600" /> Student Profile
        </h1>
        <p className="text-slate-500 font-medium">Manage your account settings and view your achievements.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Settings Form */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-6">
              <Settings size={18} className="text-slate-400" /> Account Settings
            </h2>
            
            {message && (
              <div className="mb-4 p-3 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-100">
                {message}
              </div>
            )}

            <form onSubmit={handleSave} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase">Email Address (Read-Only)</label>
                <input type="text" value={user.email} disabled className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-500 cursor-not-allowed" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase">Display Name</label>
                <input 
                  type="text" 
                  value={displayName} 
                  onChange={e => setDisplayName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:border-blue-500 focus:outline-none" 
                  placeholder="e.g. MathWizard99"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase">New Password</label>
                <input 
                  type="password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:border-blue-500 focus:outline-none" 
                  placeholder="Leave blank to keep current"
                />
              </div>

              <button disabled={saving} className="mt-2 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
                <Save size={16} /> {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Badges and Stats */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex items-center justify-around">
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-slate-400 uppercase">Total XP</span>
              <span className="text-3xl font-black text-indigo-600">{xp}</span>
            </div>
            <div className="w-px h-12 bg-slate-100"></div>
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-slate-400 uppercase">Total Coins</span>
              <span className="text-3xl font-black text-yellow-500">{coins}</span>
            </div>
            <div className="w-px h-12 bg-slate-100"></div>
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-slate-400 uppercase">Badges Earned</span>
              <span className="text-3xl font-black text-emerald-500">{achievements.length}</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-6">
              <Medal size={18} className="text-amber-500" /> Earned Badges
            </h2>
            
            {achievements.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-sm font-medium">
                You haven't earned any badges yet. Start practicing to unlock them!
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {achievements.map(a => (
                  <div key={a.id} className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow">
                    <span className="text-4xl drop-shadow-md">{a.icon}</span>
                    <h3 className="font-bold text-sm text-slate-800 mt-1">{a.title}</h3>
                    <p className="text-[10px] text-slate-500 leading-tight">{a.desc}</p>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full mt-1">Unlocked</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
