'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { Shield, User as UserIcon } from 'lucide-react';

export default function LoginPage() {
  const [loginMode, setLoginMode] = useState<'student' | 'admin'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleModeSwitch = (mode: 'student' | 'admin') => {
    setLoginMode(mode);
    setError('');
    if (mode === 'admin') {
      setEmail('');
      setPassword('');
    } else {
      setEmail('');
      setPassword('');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.user);
        if (data.user.role === 'admin') {
          router.push('/admin');
        } else {
          router.push('/dashboard');
        }
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const isConfigAdmin = loginMode === 'admin';

  return (
    <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-4rem)] bg-slate-50 px-4 py-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md">
        
        {/* Toggle Header */}
        <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
          <button
            onClick={() => handleModeSwitch('student')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-bold rounded-lg transition-all ${
              !isConfigAdmin ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <UserIcon size={16} /> Student
          </button>
          <button
            onClick={() => handleModeSwitch('admin')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-bold rounded-lg transition-all ${
              isConfigAdmin ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Shield size={16} /> Admin
          </button>
        </div>

        <div className="text-center mb-8">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-xl mx-auto mb-4 shadow-sm ${isConfigAdmin ? 'bg-indigo-600 shadow-indigo-200' : 'bg-blue-600 shadow-blue-200'}`}>A</div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Welcome Back</h1>
          <p className="text-sm text-slate-500 mt-2">
            {isConfigAdmin ? 'Sign in to the Admin Dashboard' : 'Sign in to your AptitudeAI account'}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100 mb-5 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 transition-all ${isConfigAdmin ? 'focus:border-indigo-500 focus:ring-indigo-500' : 'focus:border-blue-500 focus:ring-blue-500'}`}
              required 
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 transition-all ${isConfigAdmin ? 'focus:border-indigo-500 focus:ring-indigo-500' : 'focus:border-blue-500 focus:ring-blue-500'}`}
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full mt-2 py-3 disabled:opacity-70 text-white rounded-xl text-sm font-bold transition-all flex justify-center items-center h-12 shadow-sm ${isConfigAdmin ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'}`}
          >
            {loading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : (isConfigAdmin ? 'Access Dashboard' : 'Sign In')}
          </button>
        </form>

        {!isConfigAdmin && (
          <p className="text-center text-sm text-slate-500 mt-6 font-medium">
            Don't have an account? <Link href="/register" className="text-blue-600 hover:text-blue-700 font-bold">Register here</Link>
          </p>
        )}
      </div>
    </div>
  );
}
