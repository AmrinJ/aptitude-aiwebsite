'use client';

import React, { use, useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useGameState } from '@/context/GameStateContext';
import { TOPICS } from '@/data/topics';
import { NumberLine } from '@/components/simulations/NumberLine';
import { FlashCards } from '@/components/simulations/FlashCards';
import { VedicTricks } from '@/components/simulations/VedicTricks';
import ReactMarkdown from 'react-markdown';
import { AiTeacher } from '@/components/ai/AiTeacher';
import { StepSolver } from '@/components/solver/StepSolver';
import { QuestionVisualizer } from '@/components/visualizers/QuestionVisualizer';
import { 
  ArrowLeft, ArrowRight, Award, Compass, Clock, Check, X,
  HelpCircle, ShieldAlert, Sparkles, BookOpen, Download
} from 'lucide-react';
import Link from 'next/link';

interface ChapterPageProps {
  params: Promise<{ topic: string; chapter: string }>;
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const { topic: topicId, chapter: chapterId } = use(params);
  const { language, t } = useLanguage();
  const { 
    unlockedTopics, completedQuizzes, completeQuiz, recordQuestionAttempt, addCoins, addXp
  } = useGameState();

  const [topic, setTopic] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Fetch dynamic topic data from DB, fallback to hardcoded if not migrated
  useEffect(() => {
    fetch(`/api/topics/${topicId}`, { cache: 'no-store' })
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        if (data.topic) {
          setTopic(data.topic);
        } else {
          setTopic(TOPICS.find(t => t.id === topicId));
        }
      })
      .catch(() => {
        setTopic(TOPICS.find(t => t.id === topicId));
      })
      .finally(() => setLoading(false));
  }, [topicId]);

  // Quiz states (for practice/test chapters)
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [qStartTime, setQStartTime] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [currentQIdx, setCurrentQIdx] = useState(0);

  useEffect(() => {
    setQStartTime(Date.now());
  }, [currentQIdx, chapterId]);

  useEffect(() => {
    // Reset quiz state when shifting chapters
    setSelectedOpt(null);
    setIsSubmitted(false);
    setQuizFinished(false);
    setQuizScore(0);
    setCurrentQIdx(0);
  }, [chapterId]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  const chapter = topic?.chapters?.find((c: any) => c.id === chapterId);

  if (!topic || !chapter) {
    return (
      <div className="glass-panel p-8 rounded-xl text-center border border-slate-200 dark:border-slate-800">
        <p className="text-sm text-slate-400">Chapter not found in curriculum roadmap.</p>
        <Link href="/dashboard" className="text-blue-500 underline mt-2 text-xs block">Back to Dashboard</Link>
      </div>
    );
  }

  // Next / Prev Chapter navigation calculation
  const chaptersList = topic.chapters;
  const currentChapterIndex = chaptersList.findIndex((c: any) => c.id === chapterId);
  const prevChapter = currentChapterIndex > 0 ? chaptersList[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < chaptersList.length - 1 ? chaptersList[currentChapterIndex + 1] : null;

  // Verify lock state
  const testScore = completedQuizzes[topicId] || 0;
  const nextIsLocked = chapter.id === 'topic-test' && testScore < 50;

  // Custom visual playground selection
  const renderVisualPlayground = () => {
    switch (chapter.visualType) {
      case 'number-line':
        return <NumberLine />;
      case 'vedic':
        return <VedicTricks topicId={topicId} />;
      case 'flashcards':
        return <FlashCards topicId={topicId} />;
      case 'flowchart':
        return (
          <div className="glass-panel p-5 rounded-xl flex flex-col gap-4 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-xs uppercase text-blue-600 dark:text-blue-400">Number System Hierarchy Map</h4>
            <div className="flex flex-col gap-3 font-mono text-[11px] leading-relaxed">
              <div className="p-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                <span className="text-slate-800 dark:text-slate-200 font-bold">Real Numbers</span> — Any number that can be plotted on a number line.
                <div className="ml-4 mt-2 pl-3 border-l border-slate-350 dark:border-slate-800 flex flex-col gap-1.5">
                  <div>➔ <span className="text-blue-600 dark:text-blue-400 font-bold">Rational</span> (3/4, 0.25, 5) — Expressed as p/q.</div>
                  <div>➔ <span className="text-slate-500 dark:text-slate-400 font-bold">Irrational</span> (√2, π) — Cannot be written as simple fractions.</div>
                </div>
              </div>
              <div className="p-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                <span className="text-slate-800 dark:text-slate-200 font-bold">Integers</span> — Whole numbers (..., -2, -1, 0, 1, 2, ...).
                <div className="ml-4 mt-2 pl-3 border-l border-slate-350 dark:border-slate-800 flex flex-col gap-1.5">
                  <div>➔ <span className="text-slate-650 dark:text-slate-400 font-bold">Whole Numbers</span> (0, 1, 2, ...)</div>
                  <div>➔ <span className="text-slate-650 dark:text-slate-400 font-bold">Natural Numbers</span> (1, 2, 3, ...)</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'formula':
        return (
          <div className="glass-panel p-5 rounded-xl flex flex-col gap-4 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/10">
            <h4 className="font-bold text-xs uppercase text-blue-600 dark:text-blue-400">Essential Equations Sheets</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="text-slate-800 dark:text-slate-200 font-bold">Arithmetic Series</span>
                <p className="mt-1">Sum of first N natural: $N(N+1)/2$</p>
                <p>Sum of squares: $N(N+1)(2N+1)/6$</p>
              </div>
              <div className="bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <span className="text-slate-800 dark:text-slate-200 font-bold">Factors & Powers</span>
                <p className="mt-1">Total Factors: $(a+1)(b+1)(c+1)$</p>
                <p>{"Sum of Factors: $(p^{a+1}-1)/(p-1) \\times ...$"}</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Quiz Handling
  const handleQuizSubmit = () => {
    if (isSubmitted) return;

    const quizQuestions = topic.questions;
    if (quizQuestions.length === 0) return;

    const q = quizQuestions[currentQIdx];
    const correct = selectedOpt === q.correctAnswer;
    const timeSpent = Math.max(1, Math.round((Date.now() - qStartTime) / 1000));

    setIsCorrect(correct);
    setIsSubmitted(true);
    if (correct) {
      setQuizScore(prev => prev + 1);
    }

    recordQuestionAttempt(topic.id, correct, timeSpent);
  };

  const handleQuizNext = () => {
    const quizQuestions = topic.questions;
    setIsSubmitted(false);
    setSelectedOpt(null);

    if (currentQIdx < quizQuestions.length - 1) {
      setCurrentQIdx(prev => prev + 1);
    } else {
      const finalPct = Math.round(((quizScore + (isCorrect ? 1 : 0)) / quizQuestions.length) * 100);
      completeQuiz(topic.id, finalPct);
      setQuizFinished(true);
      if (finalPct >= 50) {
        addCoins(100);
        addXp(500);
      } else {
        addCoins(15);
        addXp(50);
      }
    }
  };

  const quizQuestions = topic.questions;

  return (
    <div className="flex flex-col gap-5 w-full animate-fade-in text-slate-800 dark:text-slate-200">
      {/* Chapter header */}
      <div className="flex flex-col gap-1 pb-3 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
          {chapter.title[language] || chapter.title['en']}
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
          {chapter.subtitle[language] || chapter.subtitle['en']}
        </p>
      </div>

      {/* Main split content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left 2 columns: Visual Lesson Details */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          
          {/* Main text cards */}
          {chapter.id !== 'topic-test' && (
            <div className="glass-panel p-5 rounded-xl flex flex-col gap-4 border border-slate-200 dark:border-slate-800 overflow-y-auto max-h-[70vh]">
              {chapter.inDepthTheory ? (
                <div className="text-xs">
                  <ReactMarkdown
                    components={{
                      h1: ({node, ...props}) => <h1 className="text-lg font-bold mt-4 mb-2 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-1" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-base font-bold mt-4 mb-2 text-slate-800 dark:text-slate-100" {...props} />,
                      h3: ({node, ...props}) => <h3 className="text-sm font-bold mt-2 text-slate-800 dark:text-slate-100" {...props} />,
                      p: ({node, ...props}) => <p className="mb-3 leading-relaxed text-slate-700 dark:text-slate-300" {...props} />,
                      ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-3 space-y-1 text-slate-700 dark:text-slate-300" {...props} />,
                      ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-3 space-y-1 text-slate-700 dark:text-slate-300" {...props} />,
                      li: ({node, ...props}) => <li className="" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-bold text-slate-900 dark:text-white" {...props} />,
                      em: ({node, ...props}) => <em className="italic text-slate-600 dark:text-slate-400" {...props} />,
                      code: ({node, ...props}) => <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono text-[11px]" {...props} />,
                    }}
                  >
                    {chapter.inDepthTheory}
                  </ReactMarkdown>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400">Core Lesson Explanation</span>
                    <p className="text-xs opacity-90 leading-relaxed">
                      {chapter.what[language] || chapter.what['en']}
                    </p>
                  </div>

                  <hr className="border-slate-100 dark:border-slate-800" />

                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400">Fast Calculation Concept</span>
                    <p className="text-xs opacity-90 leading-relaxed">
                      {chapter.howItWorks[language] || chapter.howItWorks['en']}
                    </p>
                  </div>

                  <hr className="border-slate-100 dark:border-slate-800" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 rounded-lg flex flex-col gap-1">
                      <span className="text-[9px] uppercase font-bold text-red-600 dark:text-red-400 flex items-center gap-1">
                        <ShieldAlert size={12} /> Common Mistake
                      </span>
                      <p className="opacity-80">
                        {chapter.commonMistakes[language] || chapter.commonMistakes['en']}
                      </p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 rounded-lg flex flex-col gap-1">
                      <span className="text-[9px] uppercase font-bold text-yellow-600 dark:text-yellow-450 flex items-center gap-1">
                        <Sparkles size={12} /> Memory Trick
                      </span>
                      <p className="opacity-80">
                        {chapter.tricks[language] || chapter.tricks['en']}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Visual Simulation sandboxes */}
          {renderVisualPlayground()}

          {/* Quiz Gating interface */}
          {chapter.id === 'topic-test' && (
            <div className="glass-panel p-5 rounded-xl flex flex-col gap-5 border border-slate-200 dark:border-slate-800">
              {!quizFinished ? (
                quizQuestions.length > 0 ? (
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-500 uppercase tracking-widest text-[9px]">Topic Assessment Quiz</span>
                      <span className="font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded">Q {currentQIdx + 1} of {quizQuestions.length}</span>
                    </div>

                    {quizQuestions[currentQIdx].visualParams && (() => {
                      const ansIdx = Number(quizQuestions[currentQIdx].correctAnswer);
                      const answerValue = quizQuestions[currentQIdx].options?.[language]?.[ansIdx] || quizQuestions[currentQIdx].options?.['en']?.[ansIdx];
                      return (
                        <QuestionVisualizer 
                          params={quizQuestions[currentQIdx].visualParams} 
                          answerValue={answerValue}
                        />
                      );
                    })()}

                    <p className="text-sm font-semibold leading-relaxed">
                      {quizQuestions[currentQIdx].questionText[language] || quizQuestions[currentQIdx].questionText['en']}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {quizQuestions[currentQIdx].options?.[language]?.map((opt: string, idx: number) => {
                        const isSelected = selectedOpt === String(idx);
                        return (
                          <button
                            key={idx}
                            onClick={() => { if (!isSubmitted) setSelectedOpt(String(idx)); }}
                            disabled={isSubmitted}
                            className={`p-3 rounded-lg text-left text-xs font-semibold border-2 transition-all flex items-center justify-between cursor-pointer ${
                              isSubmitted
                                ? String(idx) === quizQuestions[currentQIdx].correctAnswer
                                  ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-400 text-emerald-600 dark:text-emerald-300'
                                  : isSelected
                                    ? 'bg-red-50 dark:bg-red-950/20 border-red-400 text-red-650 dark:text-red-300'
                                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60'
                                : isSelected
                                  ? 'bg-blue-50 dark:bg-blue-950/20 border-blue-600 text-blue-600 dark:text-blue-300'
                                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-350 dark:hover:border-slate-700'
                            }`}
                          >
                            <span>{opt}</span>
                            {isSubmitted && String(idx) === quizQuestions[currentQIdx].correctAnswer && <Check size={13} className="text-emerald-500" />}
                            {isSubmitted && isSelected && String(idx) !== quizQuestions[currentQIdx].correctAnswer && <X size={13} className="text-red-500" />}
                          </button>
                        );
                      })}
                    </div>

                    {isSubmitted && (
                      <StepSolver steps={quizQuestions[currentQIdx].solvingSteps} />
                    )}

                    <div className="flex gap-3">
                      {!isSubmitted ? (
                        <button
                          onClick={handleQuizSubmit}
                          disabled={selectedOpt === null}
                          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-all cursor-pointer"
                        >
                          Submit Answer
                        </button>
                      ) : (
                        <button
                          onClick={handleQuizNext}
                          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                        >
                          Next Question <ArrowRight size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-450 italic">No questions defined for this test.</p>
                )
              ) : (
                <div className="flex flex-col items-center text-center gap-5">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Topic Test Results</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">Syllabus locks updated</p>
                  </div>
                  <div className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-xs font-bold grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[9px] text-slate-450 uppercase tracking-widest font-semibold block">Score</span>
                      <span className="text-slate-800 dark:text-slate-200">{quizScore} / {quizQuestions.length}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-455 uppercase tracking-widest font-semibold block">Status</span>
                      <span className={testScore >= 50 ? 'text-blue-600 dark:text-blue-400' : 'text-amber-600 dark:text-amber-400'}>
                        {testScore >= 50 ? 'Passed (Unlocked)' : 'Failed (Retry)'}
                      </span>
                    </div>
                  </div>

                  {testScore >= 50 ? (
                    <div className="text-xs text-slate-700 dark:text-slate-300 font-medium p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl w-full">
                      🎉 Congratulations! You passed the Number System module, and the subsequent path nodes have been unlocked.
                    </div>
                  ) : (
                    <div className="text-xs text-slate-700 dark:text-slate-300 font-medium p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 rounded-xl w-full">
                      ⚠️ You scored less than 50%. We recommend reviewing the Vedic shortcuts and prime factors before retrying.
                    </div>
                  )}

                  <button
                    onClick={() => {
                      setQuizFinished(false);
                      setQuizScore(0);
                      setCurrentQIdx(0);
                      setSelectedOpt(null);
                      setIsSubmitted(false);
                    }}
                    className="py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all w-full shadow-sm cursor-pointer"
                  >
                    Retry Assessment
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Footer Chapter navigators */}
          <div className="flex justify-between items-center pt-3.5 border-t border-slate-200 dark:border-slate-800">
            {prevChapter ? (
              <Link
                href={`/learn/${topicId}/${prevChapter.id}`}
                className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors"
              >
                <ArrowLeft size={13} /> Previous Chapter
              </Link>
            ) : (
              <div />
            )}

            {nextChapter ? (
              nextIsLocked ? (
                <button
                  onClick={() => alert('Unlock limit active: You must score at least 50% in the Topic Test quiz to proceed!')}
                  className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-600 cursor-not-allowed font-bold"
                >
                  Next Chapter (Locked) <ArrowRight size={13} />
                </button>
              ) : (
                <Link
                  href={`/learn/${topicId}/${nextChapter.id}`}
                  onClick={() => {
                    addCoins(10);
                    addXp(50);
                  }}
                  className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors"
                >
                  Next Chapter <ArrowRight size={13} />
                </Link>
              )
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* Right 1 column: AI Whiteboard Classroom Teacher */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] uppercase font-bold tracking-widest text-slate-450 px-1">
              AI Classroom Sensei
            </span>
            <AiTeacher topicId={topicId} />
          </div>

          <div className="glass-panel p-4 rounded-xl flex flex-col gap-2 border border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-750 dark:text-slate-250 flex items-center gap-1.5">
              💡 Classroom Tip
            </h4>
            <p className="text-[11px] opacity-85 leading-relaxed">
              Vedic mathematics rules and modular cyclicity checks save precious seconds during IT placement and banking exams, where the sectional timer ticks constantly. Remember: <strong>Practice is core to speed.</strong>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
