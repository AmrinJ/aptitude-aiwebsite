'use client';

import React, { useState, useEffect } from 'react';
import { useGameState } from '@/context/GameStateContext';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft, Clock, CheckCircle, XCircle, Trophy } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ALL_SYLLABUS_TOPICS } from '@/data/topics';

// We fetch the dynamic topics from the API
export default function DailyQuizPage() {
  const { unlockedTopics, recordQuestionAttempt, addXp, addCoins } = useGameState();
  const { language, t } = useLanguage();
  const router = useRouter();

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [startTime, setStartTime] = useState<number>(0);

  useEffect(() => {
    // Fetch topics to get questions
    fetch('/api/topics?includeQuestions=true')
      .then(res => res.json())
      .then(data => {
        if (data.topics) {
          let pool: any[] = [];
          
          // Only pull questions from topics the user has unlocked or completed
          const availableTopics = data.topics.filter((top: any) => unlockedTopics.includes(top.id));
          
          availableTopics.forEach((top: any) => {
            if (top.questions && top.questions.length > 0) {
              // Add a topicId reference to each question for stats recording
              const qs = top.questions.map((q: any) => ({ ...q, topicId: top.id }));
              pool = [...pool, ...qs];
            }
          });

          // Create a seed based on today's date (YYYY-MM-DD)
          const today = new Date();
          const dateString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
          let hash = 0;
          for (let i = 0; i < dateString.length; i++) {
            hash = Math.imul(31, hash) + dateString.charCodeAt(i) | 0;
          }
          let seed = hash;
          
          // Simple seeded PRNG
          const seededRandom = () => {
            const x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
          };

          // Fisher-Yates shuffle using seeded random
          const shuffled = [...pool];
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          
          // Pick 30
          const selected = shuffled.slice(0, 30);
          
          setQuestions(selected);
        }
        setLoading(false);
        setStartTime(Date.now());
      })
      .catch(console.error);
  }, [unlockedTopics]);

  if (loading) {
    return <div className="flex-1 flex items-center justify-center min-h-screen text-slate-500 font-bold">Loading your daily challenge...</div>;
  }

  if (questions.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-screen gap-4">
        <h2 className="text-xl font-black text-slate-800">No Questions Available</h2>
        <p className="text-slate-500">You need to unlock some topics first to play the Daily Quiz.</p>
        <Link href="/dashboard" className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">Back to Dashboard</Link>
      </div>
    );
  }

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6">
        <div className="bg-white max-w-md w-full p-8 rounded-2xl border border-slate-200 shadow-xl text-center flex flex-col items-center gap-6 animate-fade-in-up">
          <div className="w-20 h-20 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mb-2">
            <Trophy size={40} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 mb-2">Daily Quiz Complete!</h1>
            <p className="text-slate-500 font-medium">You scored {score} out of {questions.length}</p>
          </div>
          
          <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden my-4">
            <div 
              className={`h-full rounded-full ${percentage >= 70 ? 'bg-emerald-500' : 'bg-amber-500'}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-3xl font-black text-slate-800">{percentage}%</p>
          
          <div className="w-full flex flex-col gap-3 mt-4">
            <button 
              onClick={() => {
                addXp(score * 2);
                addCoins(Math.floor(score / 5));
                router.push('/dashboard');
              }}
              className="w-full py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              Claim Rewards & Return
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIdx];
  const qText = currentQ.questionText[language] || currentQ.questionText.en;
  const options = currentQ.options[language] || currentQ.options.en;
  
  const handleSelect = (idxStr: string) => {
    if (isAnswered) return;
    setSelectedOption(idxStr);
    setIsAnswered(true);
    
    const isCorrect = idxStr === currentQ.correctAnswer;
    if (isCorrect) setScore(s => s + 1);
    
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    recordQuestionAttempt(currentQ.topicId, isCorrect, timeSpent);
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setStartTime(Date.now());
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/dashboard')} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="font-black text-slate-900">1-Day Mastery Quiz</h1>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Question {currentIdx + 1} of {questions.length}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl w-full mx-auto p-6 md:p-8 flex flex-col gap-8 animate-fade-in">
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-blue-600 h-full transition-all duration-300"
            style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question Area */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
          <h2 className="text-lg md:text-xl font-bold text-slate-800 leading-relaxed">
            {qText}
          </h2>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {options.map((opt: string, idx: number) => {
            const idxStr = idx.toString();
            const isSelected = selectedOption === idxStr;
            const isCorrectAnswer = idxStr === currentQ.correctAnswer;
            
            let btnClass = "w-full p-4 md:p-5 rounded-xl border-2 text-left font-semibold text-sm md:text-base transition-all flex justify-between items-center ";
            
            if (!isAnswered) {
              btnClass += "bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50 cursor-pointer";
            } else {
              btnClass += "cursor-default ";
              if (isCorrectAnswer) {
                btnClass += "bg-emerald-50 border-emerald-500 text-emerald-900";
              } else if (isSelected && !isCorrectAnswer) {
                btnClass += "bg-red-50 border-red-500 text-red-900";
              } else {
                btnClass += "bg-white border-slate-200 text-slate-400 opacity-60";
              }
            }

            return (
              <button 
                key={idx}
                onClick={() => handleSelect(idxStr)}
                disabled={isAnswered}
                className={btnClass}
              >
                <span>{opt}</span>
                {isAnswered && isCorrectAnswer && <CheckCircle className="text-emerald-500" size={20} />}
                {isAnswered && isSelected && !isCorrectAnswer && <XCircle className="text-red-500" size={20} />}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        {isAnswered && (
          <div className="mt-4 flex justify-end animate-fade-in-up">
            <button 
              onClick={handleNext}
              className="px-8 py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              {currentIdx < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
