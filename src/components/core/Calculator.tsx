'use client';

import React, { useState } from 'react';
import { Calculator as CalcIcon, X } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handlePress = (val: string) => {
    if (result !== null) {
      setDisplay(val);
      setResult(null);
    } else {
      setDisplay(prev => prev + val);
    }
  };

  const handleClear = () => {
    setDisplay('');
    setResult(null);
  };

  const handleBackspace = () => {
    if (result !== null) {
      handleClear();
    } else {
      setDisplay(prev => prev.slice(0, -1));
    }
  };

  const handleCalculate = () => {
    try {
      // Evaluate expression safely
      // Replace symbols for evaluation
      let expr = display
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/mod/g, '%')
        .replace(/√\(/g, 'Math.sqrt(')
        .replace(/log\(/g, 'Math.log10(');
      
      // Balance parentheses if needed
      const openCount = (expr.match(/\(/g) || []).length;
      const closeCount = (expr.match(/\)/g) || []).length;
      if (openCount > closeCount) {
        expr += ')'.repeat(openCount - closeCount);
      }

      // Safe evaluation using Function
      const evalResult = new Function(`return (${expr})`)();
      setResult(String(evalResult));
      setDisplay(String(evalResult));
    } catch (err) {
      setResult('Error');
      setDisplay('Error');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="w-64 bg-white p-4 rounded-2xl shadow-2xl border border-slate-200 text-slate-900 flex flex-col gap-3 animate-in slide-in-from-bottom-5">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 flex items-center gap-1.5">
              <CalcIcon size={12} className="text-blue-600" /> Calculator
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={14} />
            </button>
          </div>

          {/* Display */}
          <div className="bg-slate-50 px-3 py-3 rounded-xl border border-slate-100 shadow-inner text-right min-h-[50px] flex flex-col justify-center">
            <span className="text-sm text-slate-700 font-mono font-bold block overflow-hidden truncate">
              {display || '0'}
            </span>
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-4 gap-2 text-xs font-mono font-bold">
            {/* Row 1 */}
            <button onClick={() => handlePress('mod')} className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100">mod</button>
            <button onClick={() => handlePress('√(')} className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100">√</button>
            <button onClick={() => handlePress('log(')} className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100">log</button>
            <button onClick={handleBackspace} className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100">⌫</button>

            {/* Row 2 */}
            <button onClick={handleClear} className="p-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100">C</button>
            <button onClick={() => handlePress('(')} className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200">(</button>
            <button onClick={() => handlePress(')')} className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200">)</button>
            <button onClick={() => handlePress('÷')} className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-200">÷</button>

            {/* Row 3 */}
            <button onClick={() => handlePress('7')} className="p-2 rounded-lg bg-white border border-slate-100 hover:bg-slate-50 shadow-sm">7</button>
            <button onClick={() => handlePress('8')} className="p-2 rounded-lg bg-white border border-slate-100 hover:bg-slate-50 shadow-sm">8</button>
            <button onClick={() => handlePress('9')} className="p-2 rounded-lg bg-white border border-slate-100 hover:bg-slate-50 shadow-sm">9</button>
            <button onClick={() => handlePress('×')} className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-200">×</button>

            {/* Row 4 */}
            <button onClick={() => handlePress('4')} className="p-2 rounded-lg bg-white border border-slate-100 hover:bg-slate-50 shadow-sm">4</button>
            <button onClick={() => handlePress('5')} className="p-2 rounded-lg bg-white border border-slate-100 hover:bg-slate-50 shadow-sm">5</button>
            <button onClick={() => handlePress('6')} className="p-2 rounded-lg bg-white border border-slate-100 hover:bg-slate-50 shadow-sm">6</button>
            <button onClick={() => handlePress('-')} className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-200">-</button>

            {/* Row 5 */}
            <button onClick={() => handlePress('1')} className="p-2 rounded-lg bg-white border border-slate-100 hover:bg-slate-50 shadow-sm">1</button>
            <button onClick={() => handlePress('2')} className="p-2 rounded-lg bg-white border border-slate-100 hover:bg-slate-50 shadow-sm">2</button>
            <button onClick={() => handlePress('3')} className="p-2 rounded-lg bg-white border border-slate-100 hover:bg-slate-50 shadow-sm">3</button>
            <button onClick={() => handlePress('+')} className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-200">+</button>

            {/* Row 6 */}
            <button onClick={() => handlePress('0')} className="p-2 rounded-lg bg-white border border-slate-100 hover:bg-slate-50 shadow-sm col-span-2">0</button>
            <button onClick={() => handlePress('.')} className="p-2 rounded-lg bg-white border border-slate-100 hover:bg-slate-50 shadow-sm">.</button>
            <button onClick={handleCalculate} className="p-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm shadow-emerald-200">=</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 border border-blue-500 shadow-blue-200"
          title="Open Calculator"
        >
          <CalcIcon size={22} />
        </button>
      )}
    </div>
  );
};
