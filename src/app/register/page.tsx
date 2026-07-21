'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.user);
        router.push('/dashboard');
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-4rem)] bg-slate-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl mx-auto mb-4 shadow-sm shadow-indigo-200">A</div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Create Account</h1>
          <p className="text-sm text-slate-500 mt-2">Join AptitudeAI as a student today</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100 mb-5 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              required 
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              minLength={6}
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-2 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white rounded-xl text-sm font-bold transition-all shadow-sm shadow-indigo-200 flex justify-center items-center h-12"
          >
            {loading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : 'Register Now'}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6 font-medium">
          Already have an account? <Link href="/login" className="text-indigo-600 hover:text-indigo-700 font-bold">Sign In here</Link>
        </p>
      </div>
    </div>
  );
}
