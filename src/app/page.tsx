'use client';

import React, { useState } from 'react';
import { useGameState } from '@/context/GameStateContext';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { LANGUAGES } from '@/data/translations';
import {
  Shield, BookOpen, Compass, Globe, Moon, Sun,
  CheckCircle2, ArrowRight, Zap, Award, HelpCircle,
  Flame, BarChart2, Brain, Clock, Users, Star,
  ChevronDown, Menu, X
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { prepMode, setPrepMode, theme, toggleTheme } = useGameState();
  const { language, setLanguage } = useLanguage();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div className="flex flex-col gap-7">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 self-start bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            India's #1 Aptitude Platform
          </span>

          {/* Heading */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[3.25rem] md:text-[4rem] font-black leading-[1.05] tracking-tight text-slate-900">
              {user ? (
                <>
                  Hi {user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1)}<br />
                  <span className="text-blue-600">Welcome to Aptitude Ai</span>
                </>
              ) : (
                <>
                  Hi Guys<br />
                  <span className="text-blue-600">Welcome to Aptitude Ai</span>
                </>
              )}
            </h1>
            <p className="text-slate-500 text-base leading-[1.75] max-w-md">
              Interactive simulations, Vedic math shortcuts & a multilingual AI voice tutor — designed specifically for Banking, IT & Campus placements.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href={user ? "/dashboard" : "/login"}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all shadow-sm hover:shadow-blue-200 hover:shadow-lg"
            >
              Start Free Learning <ArrowRight size={16} />
            </Link>
            <Link
              href={user ? "/learn/number-system/topic-test" : "/login"}
              className="flex items-center gap-2 px-6 py-3 border-2 border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-bold rounded-xl text-sm transition-all"
            >
              Take Free Test
            </Link>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-5">
            {[
              { icon: <CheckCircle2 size={14} className="text-emerald-500" />, label: '18 Chapters' },
              { icon: <CheckCircle2 size={14} className="text-emerald-500" />, label: 'Vedic Shortcuts' },
              { icon: <CheckCircle2 size={14} className="text-emerald-500" />, label: '10+ Languages' },
              { icon: <CheckCircle2 size={14} className="text-emerald-500" />, label: 'Free to Start' },
            ].map(b => (
              <div key={b.label} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                {b.icon} {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Illustration card */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[420px] bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
            <img
              src="/images/hero_vector.png"
              alt="Student solving math equations visually"
              className="w-full h-auto"
            />
            {/* Floating stat cards */}
            <div className="absolute -left-4 top-10 bg-white border border-slate-100 shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-bold text-slate-700">
              <Flame size={15} className="text-orange-500" /> 5 Day Streak 🔥
            </div>
            <div className="absolute -right-4 bottom-16 bg-blue-600 text-white rounded-xl px-3 py-2 text-xs font-bold shadow-lg">
              +150 XP earned today!
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '50,000+', label: 'Students Prepared', icon: <Users size={20} className="text-blue-600" /> },
            { value: '18', label: 'Interactive Chapters', icon: <BookOpen size={20} className="text-blue-600" /> },
            { value: '500+', label: 'Practice Questions', icon: <Brain size={20} className="text-blue-600" /> },
            { value: '4.9 ★', label: 'Student Rating', icon: <Star size={20} className="text-blue-600" /> },
          ].map(stat => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">{stat.icon}</div>
              <span className="text-2xl font-black text-slate-900">{stat.value}</span>
              <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CURRICULUM TRACKS ──────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Choose Your Track</span>
          <h2 className="text-3xl font-black text-slate-900 mt-2">Tailored for Your Goal</h2>
          <p className="text-slate-400 text-sm mt-2">Pick a preparation track and we'll customize your learning path.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              id: 'general',
              icon: <BookOpen size={22} className="text-blue-600" />,
              tag: 'Aptitude Core',
              title: 'General Curriculum',
              desc: 'Standard syllabus for college placements, campus drives, and arithmetic tests.',
              color: 'blue',
              image: '/images/track_general.png',
            },
            {
              id: 'banking',
              icon: <Shield size={22} className="text-emerald-600" />,
              tag: 'SBI · IBPS · RBI',
              title: 'Banking Exams',
              desc: 'Speed drills, timed sectional tests, and past year banking PO question matrices.',
              color: 'emerald',
              image: '/images/track_banking.png',
            },
            {
              id: 'it',
              icon: <Compass size={22} className="text-violet-600" />,
              tag: 'TCS · Zoho · Infosys',
              title: 'IT Placements',
              desc: 'Company-specific filters focused on coding aptitude, number patterns & logic.',
              color: 'violet',
              image: '/images/track_it.png',
            },
          ].map(track => (
            <div
              key={track.id}
              onClick={() => setPrepMode(track.id as any)}
              className={`cursor-pointer rounded-2xl border-2 overflow-hidden flex flex-col transition-all group ${
                prepMode === track.id
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              <div className="h-40 w-full overflow-hidden bg-slate-100 relative border-b border-slate-100">
                <img 
                  src={track.image} 
                  alt={track.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm bg-white border border-slate-100`}>
                  {track.icon}
                </div>
                {prepMode === track.id && (
                  <span className="absolute top-4 right-4 text-[10px] font-black text-blue-600 bg-white border border-blue-100 shadow-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Active
                  </span>
                )}
              </div>
              
              <div className="p-6 flex flex-col gap-2">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{track.tag}</p>
                  <h3 className="font-black text-slate-900 text-lg mb-1">{track.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{track.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────── */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">How It Works</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">Your Learning Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200" />
            {[
              { n: '1', title: 'Visual Explore', desc: 'Interactive sliders, number lines, and animated 3D shapes.', image: '/images/step_visual_1782920561856.png' },
              { n: '2', title: 'Vedic Shortcuts', desc: 'Side-by-side comparison of speed tricks vs traditional methods.', image: '/images/step_vedic_1782920573608.png' },
              { n: '3', title: 'Ask the Sensei', desc: 'Multilingual AI teacher explains doubts on a live whiteboard.', image: '/images/step_ai_1782920583323.png' },
              { n: '4', title: 'Unlock & Advance', desc: 'Score 70%+ to unlock the next topic in the skill tree.', image: '/images/step_unlock_1782920593502.png' },
            ].map(step => (
              <div key={step.n} className="flex flex-col items-center text-center gap-4 relative group">
                <div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden z-10 p-1 mb-2">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-slate-100">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-blue-200">
                    {step.n}
                  </div>
                </div>
                <h4 className="font-bold text-base text-slate-800">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[180px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECRUITER MARQUEE ──────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 py-12">
        <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-6">Our students crack these companies</p>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="animate-marquee flex gap-16 whitespace-nowrap">
            {['TCS NQT', 'ZOHO CORP', 'INFOSYS', 'SBI PO', 'IBPS CLERK', 'AMAZON', 'WIPRO ELITE', 'COGNIZANT', 'ACCENTURE',
              'TCS NQT', 'ZOHO CORP', 'INFOSYS', 'SBI PO', 'IBPS CLERK', 'AMAZON', 'WIPRO ELITE', 'COGNIZANT', 'ACCENTURE'].map((name, i) => (
              <span key={i} className="text-slate-300 text-xs font-black uppercase tracking-widest shrink-0">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-5 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="w-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Common Questions</h2>
            <img src="/images/faq_illustration.png" alt="Frequently Asked Questions" className="max-w-[280px] md:max-w-md drop-shadow-xl" />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { q: 'How do I unlock advanced chapters?', a: 'Score 70% or above on the Topic Test to unlock the next chapter in your skill tree path.' },
              { q: 'Is it free to use?', a: 'Yes! The core curriculum is completely free. Start learning without creating an account.' },
              { q: 'What languages does the voice tutor support?', a: 'Tamil, Hindi, Telugu, Malayalam, Kannada, Bengali, Gujarati, Marathi, and English.' },
              { q: 'Which exams is this best for?', a: 'SBI PO, IBPS Clerk, TCS NQT, Zoho, Infosys, and all major campus placement drives.' },
            ].map(faq => (
              <div key={faq.q} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-3 items-start">
                  <HelpCircle size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-1">{faq.q}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center text-white font-black text-[10px]">A</div>
            <span className="font-bold text-slate-600">AptitudeAI</span>
            <span>— Built for Banking & IT placement prep.</span>
          </div>
          <span>© {new Date().getFullYear()} AptitudeAI. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
