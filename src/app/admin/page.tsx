'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Shield, Users, BookOpen, Star, Activity, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface StudentData {
  id: string;
  email: string;
  createdAt: string;
  xp: number;
  coins: number;
  unlockedTopicsCount: number;
  completedQuizzesCount: number;
  weakTopics: string[];
  strongTopics: string[];
}

export default function AdminPanel() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [students, setStudents] = useState<StudentData[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.push('/dashboard');
      return;
    }

    if (user && user.role === 'admin') {
      fetch('/api/admin/students')
        .then(res => res.json())
        .then(data => {
          if (data.students) setStudents(data.students);
        })
        .catch(console.error)
        .finally(() => setFetching(false));
    }
  }, [user, loading, router]);

  if (loading || fetching) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user || user.role !== 'admin') return null;

  return (
    <div className="flex-1 flex flex-col w-full max-w-[1400px] mx-auto px-4 py-8 gap-8">
      
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <Shield className="text-indigo-600" /> Admin Dashboard
          </h1>
          <p className="text-slate-500 font-medium">Monitor student progress and analytics across the platform.</p>
        </div>
        
        <Link 
          href="/admin/cms" 
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-lg shadow-sm transition-colors flex items-center gap-2 w-fit"
        >
          Go to Content Engine (CMS) &rarr;
        </Link>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 p-5 rounded-2xl flex flex-col gap-2 shadow-sm">
          <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider">
            <Users size={16} className="text-blue-500" /> Total Students
          </div>
          <div className="text-3xl font-black text-slate-900">{students.length}</div>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-2xl flex flex-col gap-2 shadow-sm">
          <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider">
            <BookOpen size={16} className="text-emerald-500" /> Total Quizzes Passed
          </div>
          <div className="text-3xl font-black text-slate-900">
            {students.reduce((acc, s) => acc + s.completedQuizzesCount, 0)}
          </div>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-2xl flex flex-col gap-2 shadow-sm">
          <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider">
            <Star size={16} className="text-amber-500" /> Total XP Earned
          </div>
          <div className="text-3xl font-black text-slate-900">
            {students.reduce((acc, s) => acc + s.xp, 0)}
          </div>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-2xl flex flex-col gap-2 shadow-sm">
          <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider">
            <Activity size={16} className="text-rose-500" /> Active Topics
          </div>
          <div className="text-3xl font-black text-slate-900">
            {students.reduce((acc, s) => acc + s.unlockedTopicsCount, 0)}
          </div>
        </div>
      </div>

      {/* Student Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <h2 className="font-bold text-slate-800 flex items-center gap-2">
            <Users size={18} className="text-indigo-600" /> Student Directory
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="p-4 font-bold">Student Email</th>
                <th className="p-4 font-bold">Joined</th>
                <th className="p-4 font-bold text-center">XP</th>
                <th className="p-4 font-bold text-center">Topics Unlocked</th>
                <th className="p-4 font-bold text-center">Quizzes Passed</th>
                <th className="p-4 font-bold">Analysis (Weak/Strong)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {students.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-500 font-medium">No students registered yet.</td>
                </tr>
              ) : students.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-800">{student.email}</td>
                  <td className="p-4 text-slate-500">{new Date(student.createdAt).toLocaleDateString()}</td>
                  <td className="p-4 text-center font-bold text-indigo-600">{student.xp}</td>
                  <td className="p-4 text-center font-bold text-slate-700">{student.unlockedTopicsCount}</td>
                  <td className="p-4 text-center font-bold text-emerald-600">{student.completedQuizzesCount}</td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1.5">
                      {student.weakTopics.length > 0 && (
                        <div className="flex items-center gap-1.5 text-xs">
                          <span className="text-rose-500 font-bold bg-rose-50 px-2 py-0.5 rounded">Needs Work</span>
                          <span className="text-slate-600 truncate max-w-[150px]" title={student.weakTopics.join(', ')}>
                            {student.weakTopics.slice(0, 2).join(', ')} {student.weakTopics.length > 2 && '...'}
                          </span>
                        </div>
                      )}
                      {student.strongTopics.length > 0 && (
                        <div className="flex items-center gap-1.5 text-xs">
                          <span className="text-emerald-500 font-bold bg-emerald-50 px-2 py-0.5 rounded">Mastered</span>
                          <span className="text-slate-600 truncate max-w-[150px]" title={student.strongTopics.join(', ')}>
                            {student.strongTopics.slice(0, 2).join(', ')} {student.strongTopics.length > 2 && '...'}
                          </span>
                        </div>
                      )}
                      {student.weakTopics.length === 0 && student.strongTopics.length === 0 && (
                        <span className="text-xs text-slate-400 italic">Not enough data</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
