'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Play, Pause, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface Step {
  title: { [lang: string]: string };
  desc: { [lang: string]: string };
  formula?: string;
}

interface StepSolverProps {
  steps: Step[];
}

export const StepSolver: React.FC<StepSolverProps> = ({ steps }) => {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(false);
  }, [steps]);

  useEffect(() => {
    let timer: number;
    if (isPlaying) {
      timer = window.setInterval(() => {
        setCurrentStep(prev => {
          if (prev < steps.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 3000); // 3 seconds per step
    }
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="glass-panel p-6 rounded-2xl glow-hover flex flex-col gap-4 border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400">
          Step-by-Step Animated Solver
        </h4>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 disabled:opacity-40 text-slate-700 dark:text-slate-200"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-xs font-mono">
            {currentStep + 1} / {steps.length}
          </span>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 disabled:opacity-40 text-slate-700 dark:text-slate-200"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Main stepper content */}
      <div className="relative min-h-[120px] bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 flex flex-col justify-center gap-2 transition-all">
        <h5 className="font-bold text-base text-indigo-500 dark:text-indigo-400">
          {steps[currentStep]?.title[language] || steps[currentStep]?.title['en'] || ''}
        </h5>
        <p className="text-sm opacity-80 leading-relaxed">
          {steps[currentStep]?.desc[language] || steps[currentStep]?.desc['en'] || ''}
        </p>

        {steps[currentStep]?.formula && (
          <div className="mt-2 bg-indigo-950/40 border border-indigo-900/60 p-2 rounded-lg text-xs font-mono text-emerald-400 text-center select-all">
            {steps[currentStep].formula}
          </div>
        )}
      </div>

      {/* Step dots */}
      <div className="flex gap-1.5 justify-center">
        {steps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentStep(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              idx === currentStep
                ? 'bg-indigo-600 w-6'
                : 'bg-slate-300 dark:bg-slate-800'
            }`}
          />
        ))}
      </div>

      {/* Stepper Controls */}
      <div className="flex gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-xs font-bold text-white transition-all w-full shadow-md ${
            isPlaying ? 'bg-amber-600 hover:bg-amber-700' : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          {isPlaying ? 'Pause Auto' : 'Auto Play Steps'}
        </button>
        <button
          onClick={handleReset}
          className="flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs font-semibold rounded-xl text-slate-800 dark:text-slate-200 transition-all border border-slate-300 dark:border-slate-850"
        >
          <RotateCcw size={14} />
        </button>
      </div>
    </div>
  );
};
