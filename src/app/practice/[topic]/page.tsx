'use client';

import React, { use, useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useGameState } from '@/context/GameStateContext';
import { TOPICS } from '@/data/topics';
import { StepSolver } from '@/components/solver/StepSolver';
import { ArrowLeft, Check, X, Award, HelpCircle, ArrowRight, BookOpen, Clock } from 'lucide-react';
import Link from 'next/link';

interface PracticePageProps {
  params: Promise<{ topic: string }>;
}

export default function PracticePage({ params }: PracticePageProps) {
  const { topic: topicId } = use(params);
  const { t, language } = useLanguage();
  const { recordQuestionAttempt, completeQuiz } = useGameState();

  const topic = TOPICS.find(t => t.id === topicId);

  // States
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  // Scoring
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  
  // Timer tracking per question
  const [qStartTime, setQStartTime] = useState(0);
  const [showSolver, setShowSolver] = useState(false);

  useEffect(() => {
    setQStartTime(Date.now());
  }, [currentIdx]);

  if (!topic) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <p className="text-sm text-slate-400">Chapter not found.</p>
        <Link href="/dashboard" className="text-indigo-400 underline mt-2 text-xs">Back</Link>
      </div>
    );
  }

  const currentQuestion = topic.questions[currentIdx];

  const handleSubmit = () => {
    if (isSubmitted) return;

    let correct = false;
    const timeSpent = Math.max(1, Math.round((Date.now() - qStartTime) / 1000));

    if (currentQuestion.type === 'text') {
      correct = selectedOpt === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === 'simulation') {
      correct = typedAnswer.trim() === currentQuestion.correctAnswer;
    }

    setIsCorrect(correct);
    setIsSubmitted(true);
    if (correct) {
      setScore(prev => prev + 1);
    }

    // Log the answer to the AI Analytics engine
    recordQuestionAttempt(topic.id, correct, timeSpent);
  };

  const handleNext = () => {
    setIsSubmitted(false);
    setSelectedOpt(null);
    setTypedAnswer('');
    setShowSolver(false);

    if (currentIdx < topic.questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      // Calculate final score percent
      const pct = Math.round((score / topic.questions.length) * 100);
      completeQuiz(topic.id, pct);
      setQuizFinished(true);
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full max-w-4xl mx-auto px-4 py-6 md:py-10 gap-8 z-10">
      
      {/* Header */}
      <header className="flex justify-between items-center">
        <Link
          href={`/learn/${topic.id}`}
          className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-400 font-semibold"
        >
          <ArrowLeft size={14} /> Back to Classroom
        </Link>
        <div className="text-xs font-mono bg-black/20 px-3 py-1 rounded-full border border-slate-800">
          Question {currentIdx + 1} of {topic.questions.length}
        </div>
      </header>

      {/* Main quiz segment */}
      {!quizFinished ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left panel: The Question Card */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-2xl flex flex-col gap-6 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800">
              
              {/* Question Text */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 flex items-center gap-1">
                  <HelpCircle size={12} /> {currentQuestion.type === 'simulation' ? 'Simulation Drill' : 'Multiple Choice Question'}
                </span>
                <p className="text-sm font-semibold leading-relaxed">
                  {currentQuestion.questionText[language] || currentQuestion.questionText['en']}
                </p>
              </div>

              {/* Answers Input Area */}
              {currentQuestion.type === 'text' && currentQuestion.options && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQuestion.options[language]?.map((opt, idx) => {
                    const isSelected = selectedOpt === String(idx);
                    return (
                      <button
                        key={idx}
                        onClick={() => { if (!isSubmitted) setSelectedOpt(String(idx)); }}
                        disabled={isSubmitted}
                        className={`p-4 rounded-xl text-left text-xs font-semibold border-2 transition-all flex items-center justify-between ${
                          isSubmitted
                            ? String(idx) === currentQuestion.correctAnswer
                              ? 'bg-emerald-950/20 border-emerald-500 text-emerald-300'
                              : isSelected
                                ? 'bg-red-950/20 border-red-500 text-red-300'
                                : 'bg-slate-900/10 border-slate-800 opacity-55'
                            : isSelected
                              ? 'bg-indigo-500/10 border-indigo-500 text-indigo-300'
                              : 'bg-black/10 dark:bg-black/30 border-slate-200 dark:border-slate-850 hover:border-slate-350 dark:hover:border-slate-700'
                        }`}
                      >
                        <span>{opt}</span>
                        {isSubmitted && String(idx) === currentQuestion.correctAnswer && <Check size={14} className="text-emerald-400" />}
                        {isSubmitted && isSelected && String(idx) !== currentQuestion.correctAnswer && <X size={14} className="text-red-400" />}
                      </button>
                    );
                  })}
                </div>
              )}

              {currentQuestion.type === 'simulation' && (
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-slate-400">Input your calculated value:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={typedAnswer}
                      onChange={e => setTypedAnswer(e.target.value)}
                      disabled={isSubmitted}
                      placeholder="e.g. 12.5"
                      className="bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-600 w-full max-w-[200px]"
                    />
                    {isSubmitted && (
                      <div className="flex items-center gap-1.5 text-xs">
                        {isCorrect ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-1"><Check size={14} /> Correct</span>
                        ) : (
                          <span className="text-red-400 font-bold flex items-center gap-1">
                            <X size={14} /> Incorrect (Ans: {currentQuestion.correctAnswer})
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action trigger button */}
              <div className="flex gap-3 mt-2">
                {!isSubmitted ? (
                  <button
                    onClick={handleSubmit}
                    disabled={currentQuestion.type === 'text' ? selectedOpt === null : !typedAnswer.trim()}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    Next Question <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Step Solver (visible after submitting response) */}
            {isSubmitted && showSolver && (
              <StepSolver steps={currentQuestion.solvingSteps} />
            )}
          </div>

          {/* Right panel: Tutor tips and Step review trigger */}
          <div className="flex flex-col gap-6">
            <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-xs uppercase tracking-wider text-yellow-400">
                Sensei Tip
              </h4>
              <p className="text-xs opacity-80 leading-relaxed">
                {currentQuestion.hint[language] || currentQuestion.hint['en']}
              </p>

              {isSubmitted && (
                <button
                  onClick={() => setShowSolver(prev => !prev)}
                  className="py-2.5 px-3 bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all border border-indigo-500/20"
                >
                  <BookOpen size={14} /> {showSolver ? 'Close Solver steps' : 'Inspect Step Solver'}
                </button>
              )}
            </div>
          </div>

        </div>
      ) : (
        /* Final score card */
        <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center gap-6 max-w-lg mx-auto border border-slate-200 dark:border-slate-800">
          <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/30 rounded-full flex items-center justify-center text-indigo-400">
            <Award size={36} />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Quiz Completed!
            </h2>
            <p className="text-xs text-slate-400">
              You have completed the visual practice assessment drills.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full bg-black/10 dark:bg-black/30 p-4 rounded-xl">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Total Correct</span>
              <span className="text-xl font-bold text-emerald-400">{score} / {topic.questions.length}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Accuracy</span>
              <span className="text-xl font-bold text-indigo-400">
                {Math.round((score / topic.questions.length) * 100)}%
              </span>
            </div>
          </div>

          {/* Locked feedback */}
          {Math.round((score / topic.questions.length) * 100) >= 70 ? (
            <div className="text-xs text-emerald-400 font-bold p-3 bg-emerald-950/20 border border-emerald-900/30 rounded-xl w-full">
              🎉 Passed! The subsequent topic has been unlocked on your skill tree map.
            </div>
          ) : (
            <div className="text-xs text-amber-400 font-bold p-3 bg-amber-950/20 border border-amber-900/30 rounded-xl w-full">
              ⚠️ You scored less than 70%. We recommend revising the core lessons before retrying the quiz.
            </div>
          )}

          <div className="flex gap-3 w-full">
            <Link
              href="/dashboard"
              className="py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-center text-xs font-bold transition-all shadow-md w-full"
            >
              Back to Dashboard
            </Link>
            <button
              onClick={() => {
                setCurrentIdx(0);
                setScore(0);
                setSelectedOpt(null);
                setTypedAnswer('');
                setIsSubmitted(false);
                setQuizFinished(false);
                setShowSolver(false);
              }}
              className="py-3 px-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-350 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold transition-all w-full border border-slate-350 dark:border-slate-850"
            >
              Retry Quiz
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
