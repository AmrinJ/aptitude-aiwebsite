'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Info } from 'lucide-react';

export const NumberLine: React.FC = () => {
  const { t } = useLanguage();
  const [val, setVal] = useState(3);

  // Classification Helpers
  const isInteger = Number.isInteger(val);
  const isNatural = isInteger && val >= 1;
  const isWhole = isInteger && val >= 0;
  const isEven = isInteger && val % 2 === 0;
  const isOdd = isInteger && Math.abs(val % 2) === 1;

  const isPrime = (num: number): boolean => {
    if (!Number.isInteger(num) || num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const isComposite = (num: number): boolean => {
    return isInteger && num > 1 && !isPrime(num);
  };

  const activePrime = isPrime(val);
  const activeComposite = isComposite(val);

  const getClassificationExplanation = () => {
    if (!isInteger) {
      return `This is a Rational decimal value (${val}). It can be written as the fraction ${Math.round(val * 10)}/10. It is a Real number, but NOT an Integer.`;
    }
    if (val === 0) {
      return `0 is a Whole number, Integer, and an Even number. It is NEITHER Positive nor Negative.`;
    }
    if (val < 0) {
      return `${val} is a Negative Integer. It is NOT a Whole or Natural number because it is less than 0.`;
    }
    if (val === 1) {
      return `1 is a Natural, Odd, and Whole number. Note: 1 is NEITHER Prime nor Composite (it has only one divisor: 1).`;
    }
    if (activePrime) {
      return `${val} is a Prime Number! It is only divisible by 1 and itself. It is also a Natural, Whole, and Odd number ${val === 2 ? '(2 is the ONLY even prime!)' : ''}.`;
    }
    if (activeComposite) {
      return `${val} is a Composite Number. It has more than two factors. Factors of ${val}: ${getFactors(val).join(', ')}.`;
    }
    return '';
  };

  const getFactors = (num: number): number[] => {
    const list: number[] = [];
    const abs = Math.abs(num);
    for (let i = 1; i <= abs; i++) {
      if (abs % i === 0) list.push(i);
    }
    return list;
  };

  return (
    <div className="glass-panel p-5 rounded-xl flex flex-col gap-5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          📍 Interactive Number Line Explorer
        </h3>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Drag the slider to choose any integer or decimal. Observe the classifications below update in real-time.
        </p>
      </div>

      {/* Visual Slider */}
      <div className="flex flex-col gap-6 bg-slate-50 dark:bg-slate-900/60 p-5 rounded-lg relative border border-slate-200 dark:border-slate-800/80">
        <div className="relative w-full h-8 flex items-center">
          <div className="absolute left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800" />
          {Array.from({ length: 21 }).map((_, idx) => {
            const num = idx - 10;
            const leftPct = `${(idx / 20) * 100}%`;
            return (
              <div 
                key={num} 
                className="absolute flex flex-col items-center -translate-x-1/2 animate-fade-in"
                style={{ left: leftPct }}
              >
                <div className={`h-2.5 w-0.5 ${num === 0 ? 'bg-blue-600 dark:bg-blue-400 h-4 w-1' : 'bg-slate-300 dark:bg-slate-700'}`} />
                <span className={`text-[9px] font-mono mt-1 ${num === 0 ? 'font-bold text-blue-600 dark:text-blue-450' : 'text-slate-400'}`}>
                  {num}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="range"
            min="-10"
            max="10"
            step="0.5"
            value={val}
            onChange={e => setVal(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>-10</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold text-xs">Selected: {val}</span>
            <span>+10</span>
          </div>
        </div>
      </div>

      {/* Classifications Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-medium">
        <div className={`p-2.5 rounded-lg border text-center ${
          isInteger ? 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/30 text-blue-600 dark:text-blue-300' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60'
        }`}>
          <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Integer</span>
          <span>{isInteger ? 'Yes' : 'No'}</span>
        </div>

        <div className={`p-2.5 rounded-lg border text-center ${
          isNatural ? 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/30 text-blue-600 dark:text-blue-300' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60'
        }`}>
          <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Natural (1+)</span>
          <span>{isNatural ? 'Yes' : 'No'}</span>
        </div>

        <div className={`p-2.5 rounded-lg border text-center ${
          activePrime ? 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/30 text-blue-600 dark:text-blue-300' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60'
        }`}>
          <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Prime</span>
          <span>{activePrime ? 'Yes' : 'No'}</span>
        </div>

        <div className={`p-2.5 rounded-lg border text-center ${
          activeComposite ? 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/30 text-blue-600 dark:text-blue-300' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60'
        }`}>
          <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Composite</span>
          <span>{activeComposite ? 'Yes' : 'No'}</span>
        </div>
      </div>

      {/* Explanation notes */}
      <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 rounded-lg flex items-start gap-2 text-xs">
        <Info size={14} className="text-blue-650 dark:text-blue-400 shrink-0 mt-0.5" />
        <div className="flex flex-col gap-0.5">
          <span className="font-bold text-slate-800 dark:text-slate-200">Mathematical Classification</span>
          <p className="text-slate-500 leading-relaxed">
            {getClassificationExplanation()}
          </p>
        </div>
      </div>

    </div>
  );
};
