'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { LANGUAGES } from '@/data/translations';
import { Globe, ChevronDown, ArrowRight, Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b border-slate-100 shadow-sm w-full">
      <div className="max-w-[1400px] mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href={user ? "/dashboard" : "/"} className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm">A</div>
          <span className="font-black text-base text-slate-900 tracking-tight">AptitudeAI</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-bold text-slate-500 ml-8 flex-1">
          {user && <Link href="/" className={`transition-colors ${pathname === '/' ? 'text-blue-600' : 'hover:text-blue-600'}`}>Home</Link>}
          {user && <Link href="/dashboard" className={`transition-colors ${pathname === '/dashboard' ? 'text-blue-600' : 'hover:text-blue-600'}`}>Dashboard</Link>}
          {user && <Link href="/learn/number-system/intro" className={`transition-colors ${pathname.includes('/learn') ? 'text-blue-600' : 'hover:text-blue-600'}`}>Courses</Link>}
          {user && <Link href="/leaderboard" className={`transition-colors flex items-center gap-1 ${pathname === '/leaderboard' ? 'text-blue-600' : 'hover:text-amber-500'}`}>Leaderboard</Link>}
          {user && <Link href="/analytics" className={`transition-colors ${pathname === '/analytics' ? 'text-blue-600' : 'hover:text-blue-600'}`}>Analytics</Link>}
          {user?.role === 'admin' && <Link href="/admin" className={`transition-colors ${pathname === '/admin' ? 'text-blue-600' : 'hover:text-blue-600'}`}>Admin Panel</Link>}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Language dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              <Globe size={14} />
              <span className="uppercase">{language}</span>
              <ChevronDown size={12} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-10 w-44 bg-white border border-slate-200 rounded-xl shadow-xl p-1.5 flex flex-col gap-0.5 z-50 max-h-56 overflow-y-auto">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code as any); setLangOpen(false); }}
                    className={`px-3 py-2 text-left text-xs rounded-lg transition-colors font-bold ${language === lang.code ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Auth Controls */}
          <div className="hidden md:flex items-center gap-2">
            {!user ? (
              <>
                <Link href="/login" className="px-4 py-2 text-slate-600 hover:text-blue-600 text-xs font-bold transition-colors">Sign In</Link>
                <Link href="/register" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm shadow-blue-200">Register</Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/profile" className="text-xs font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <UserIcon size={14} /> {user.role === 'admin' ? 'Admin' : 'Profile'}
                </Link>
                <button onClick={logout} className="p-2 text-slate-400 hover:text-red-500 transition-colors" title="Sign Out">
                  <LogOut size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden w-8 h-8 flex items-center justify-center text-slate-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 px-5 py-4 flex flex-col gap-3 text-sm font-bold text-slate-600 bg-white">
          {user && <Link href="/" onClick={() => setMenuOpen(false)} className={`transition-colors ${pathname === '/' ? 'text-blue-600' : 'hover:text-blue-600'}`}>Home</Link>}
          {user && <Link href="/dashboard" onClick={() => setMenuOpen(false)} className={`transition-colors ${pathname === '/dashboard' ? 'text-blue-600' : 'hover:text-blue-600'}`}>Dashboard</Link>}
          {user && <Link href="/learn/number-system/intro" onClick={() => setMenuOpen(false)} className={`transition-colors ${pathname.includes('/learn') ? 'text-blue-600' : 'hover:text-blue-600'}`}>Courses</Link>}
          {user && <Link href="/leaderboard" onClick={() => setMenuOpen(false)} className={`transition-colors ${pathname === '/leaderboard' ? 'text-blue-600' : 'hover:text-amber-500'}`}>Leaderboard</Link>}
          {user && <Link href="/analytics" onClick={() => setMenuOpen(false)} className={`transition-colors ${pathname === '/analytics' ? 'text-blue-600' : 'hover:text-blue-600'}`}>Analytics</Link>}
          {user?.role === 'admin' && <Link href="/admin" onClick={() => setMenuOpen(false)} className={`transition-colors ${pathname === '/admin' ? 'text-blue-600' : 'hover:text-blue-600'}`}>Admin Panel</Link>}
          
          <div className="border-t border-slate-100 mt-2 pt-3 flex flex-col gap-2">
            {!user ? (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)} className="text-slate-600 py-2">Sign In</Link>
                <Link href="/register" onClick={() => setMenuOpen(false)} className="px-4 py-2.5 bg-blue-600 text-white rounded-lg text-center font-bold shadow-sm">Register</Link>
              </>
            ) : (
              <>
                <Link href="/profile" onClick={() => setMenuOpen(false)} className="text-slate-600 py-2 flex items-center gap-2">
                  <UserIcon size={16} /> Profile Settings
                </Link>
                <button onClick={() => { logout(); setMenuOpen(false); }} className="text-red-500 py-2 text-left flex items-center gap-2">
                  <LogOut size={16} /> Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
