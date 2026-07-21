'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Shield, Database, Plus, Edit, Trash2, CheckCircle, RefreshCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CMSDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [topics, setTopics] = useState<any[]>([]);
  const [fetching, setFetching] = useState(true);
  const [migrating, setMigrating] = useState(false);
  const [migrationStatus, setMigrationStatus] = useState('');

  const fetchTopics = () => {
    setFetching(true);
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => {
        if (data.topics) setTopics(data.topics);
      })
      .catch(console.error)
      .finally(() => setFetching(false));
  };

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.push('/dashboard');
      return;
    }

    if (user && user.role === 'admin') {
      fetchTopics();
    }
  }, [user, loading, router]);

  const handleMigrate = async () => {
    if (!confirm('Are you sure? This will delete any existing database topics and reset them to the hardcoded defaults.')) return;
    
    setMigrating(true);
    setMigrationStatus('Migrating...');
    try {
      const res = await fetch('/api/admin/migrate', { method: 'POST' });
      if (res.ok) {
        setMigrationStatus('Migration successful!');
        fetchTopics();
      } else {
        setMigrationStatus('Migration failed.');
      }
    } catch (e) {
      setMigrationStatus('Error occurred.');
    } finally {
      setMigrating(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this topic?')) return;
    try {
      const res = await fetch(`/api/admin/topics?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setTopics(topics.filter(t => t.id !== id));
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (loading || fetching) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user || user.role !== 'admin') return null;

  return (
    <div className="flex-1 flex flex-col w-full max-w-[1200px] mx-auto px-4 py-8 gap-8">
      
      {/* Header */}
      <header className="flex flex-col gap-1">
        <Link href="/admin" className="text-xs font-bold text-indigo-500 hover:text-indigo-600 mb-2">&larr; Back to Admin Dashboard</Link>
        <h1 className="text-2xl md:text-3xl font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
          <Database className="text-indigo-600" /> Content Management System (CMS)
        </h1>
        <p className="text-slate-500 font-medium">Manage course modules, chapters, and quiz questions.</p>
      </header>

      {/* Migration Tools */}
      <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-indigo-900">Database Migration</h3>
          <p className="text-sm text-indigo-700 mt-1">If your database is empty, run this to copy all hardcoded default courses into MongoDB.</p>
          {migrationStatus && (
            <p className="text-xs font-bold mt-2 flex items-center gap-1 text-emerald-600">
              <CheckCircle size={14} /> {migrationStatus}
            </p>
          )}
        </div>
        <button 
          onClick={handleMigrate} 
          disabled={migrating}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50 whitespace-nowrap"
        >
          {migrating ? <RefreshCcw size={16} className="animate-spin" /> : <Database size={16} />} 
          {migrating ? 'Migrating...' : 'Run Migration'}
        </button>
      </div>

      {/* Topics List */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <h2 className="font-bold text-slate-800">Available Course Modules ({topics.length})</h2>
          <button className="text-xs font-bold bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-emerald-200 transition-colors">
            <Plus size={14} /> New Module
          </button>
        </div>
        
        {topics.length === 0 ? (
          <div className="p-12 text-center text-slate-500 font-medium">No topics found in the database. Run the migration script above.</div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {topics.map(topic => (
              <li key={topic.id} className="p-4 md:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                <div>
                  <h3 className="font-bold text-slate-800">{topic.name} <span className="text-xs font-normal text-slate-400 bg-slate-100 px-2 py-0.5 rounded ml-2">{topic.id}</span></h3>
                  <div className="flex items-center gap-3 mt-1.5 text-xs font-medium text-slate-500">
                    <span className="capitalize text-indigo-600">{topic.subject}</span>
                    <span>&bull;</span>
                    <span>{topic.difficulty}</span>
                    <span>&bull;</span>
                    <span>{topic.estTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors bg-slate-100 rounded-lg hover:bg-blue-50" title="Edit">
                    <Edit size={16} />
                  </button>
                  <button onClick={() => handleDelete(topic.id)} className="p-2 text-slate-400 hover:text-red-600 transition-colors bg-slate-100 rounded-lg hover:bg-red-50" title="Delete">
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}
