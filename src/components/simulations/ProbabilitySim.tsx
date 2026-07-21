'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Play, RotateCcw, HelpCircle } from 'lucide-react';

export const ProbabilitySim: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'coin' | 'dice' | 'spinner' | 'bag'>('coin');

  // 1. Coin State
  const [coinResult, setCoinResult] = useState<'Heads' | 'Tails' | null>(null);
  const [coinFlips, setCoinFlips] = useState({ H: 0, T: 0 });
  const [isFlipping, setIsFlipping] = useState(false);

  // 2. Dice State
  const [diceResult, setDiceResult] = useState<number | null>(null);
  const [diceRolls, setDiceRolls] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 });
  const [isRolling, setIsRolling] = useState(false);

  // 3. Spinner State
  const [spinnerAngle, setSpinnerAngle] = useState(0);
  const [spinnerResult, setSpinnerResult] = useState<string | null>(null);
  const [spinnerCounts, setSpinnerCounts] = useState<Record<string, number>>({ Red: 0, Green: 0, Blue: 0, Yellow: 0 });
  const [isSpinning, setIsSpinning] = useState(false);

  // 4. Bag State
  const [redCount, setRedCount] = useState(4);
  const [blueCount, setBlueCount] = useState(3);
  const [greenCount, setGreenCount] = useState(3);
  const [drawnBall, setDrawnBall] = useState<string | null>(null);
  const [drawCounts, setDrawCounts] = useState<Record<string, number>>({ Red: 0, Blue: 0, Green: 0 });
  const [isDrawing, setIsDrawing] = useState(false);

  // Coin Flip Trigger
  const flipCoin = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setCoinResult(null);
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setCoinResult(outcome);
      setCoinFlips(prev => ({
        ...prev,
        [outcome === 'Heads' ? 'H' : 'T']: prev[outcome === 'Heads' ? 'H' : 'T'] + 1
      }));
      setIsFlipping(false);
    }, 1000);
  };

  // Dice Roll Trigger
  const rollDice = () => {
    if (isRolling) return;
    setIsRolling(true);
    setDiceResult(null);
    setTimeout(() => {
      const outcome = Math.floor(Math.random() * 6) + 1;
      setDiceResult(outcome);
      setDiceRolls(prev => ({ ...prev, [outcome]: prev[outcome] + 1 }));
      setIsRolling(false);
    }, 1000);
  };

  // Spin Wheel Trigger
  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setSpinnerResult(null);
    const newAngle = spinnerAngle + 1440 + Math.random() * 360;
    setSpinnerAngle(newAngle);

    setTimeout(() => {
      // Determine sector based on angle (4 sectors: Red [0-90], Blue [90-180], Green [180-270], Yellow [270-360])
      const normalizedAngle = (newAngle % 360);
      let outcome = 'Red';
      if (normalizedAngle >= 0 && normalizedAngle < 90) outcome = 'Yellow';
      else if (normalizedAngle >= 90 && normalizedAngle < 180) outcome = 'Green';
      else if (normalizedAngle >= 180 && normalizedAngle < 270) outcome = 'Blue';
      else outcome = 'Red';

      setSpinnerResult(outcome);
      setSpinnerCounts(prev => ({ ...prev, [outcome]: prev[outcome] + 1 }));
      setIsSpinning(false);
    }, 1500);
  };

  // Draw Ball Trigger
  const drawBall = () => {
    if (isDrawing) return;
    const total = redCount + blueCount + greenCount;
    if (total === 0) return;

    setIsDrawing(true);
    setDrawnBall(null);

    setTimeout(() => {
      const rand = Math.random() * total;
      let outcome = 'Red';
      if (rand < redCount) outcome = 'Red';
      else if (rand < redCount + blueCount) outcome = 'Blue';
      else outcome = 'Green';

      setDrawnBall(outcome);
      setDrawCounts(prev => ({ ...prev, [outcome]: prev[outcome] + 1 }));
      setIsDrawing(false);
    }, 800);
  };

  // Reset counters
  const handleReset = () => {
    setCoinResult(null);
    setCoinFlips({ H: 0, T: 0 });
    setDiceResult(null);
    setDiceRolls({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 });
    setSpinnerResult(null);
    setSpinnerCounts({ Red: 0, Green: 0, Blue: 0, Yellow: 0 });
    setDrawnBall(null);
    setDrawCounts({ Red: 0, Blue: 0, Green: 0 });
  };

  // Coin totals
  const totalFlips = coinFlips.H + coinFlips.T;
  const expHeads = totalFlips > 0 ? (coinFlips.H / totalFlips).toFixed(3) : '0.000';

  // Dice totals
  const totalRolls = Object.values(diceRolls).reduce((a, b) => a + b, 0);

  // Spinner totals
  const totalSpins = Object.values(spinnerCounts).reduce((a, b) => a + b, 0);

  // Bag totals
  const totalDrawn = Object.values(drawCounts).reduce((a, b) => a + b, 0);
  const totalBalls = redCount + blueCount + greenCount;

  return (
    <div className="glass-panel p-6 rounded-2xl glow-hover flex flex-col gap-6 text-slate-900 dark:text-slate-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            🎲 {t('probability')} Sandbox
          </h3>
          <p className="text-sm opacity-70">
            Compare experimental frequency distributions against theoretical probabilities in real-time.
          </p>
        </div>
        <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl scrollbar-none overflow-x-auto max-w-full">
          {(['coin', 'dice', 'spinner', 'bag'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {tab === 'coin' ? 'Coin Flipper' : tab === 'dice' ? 'Dice Roller' : tab === 'spinner' ? 'Color Spinner' : 'Bag of Balls'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Play Area */}
        <div className="lg:col-span-2 bg-slate-100 dark:bg-slate-900/50 p-6 rounded-xl flex flex-col items-center justify-center min-h-[250px] relative border border-slate-200 dark:border-slate-800">
          
          {/* 1. COIN MODULE */}
          {activeTab === 'coin' && (
            <div className="flex flex-col items-center gap-6">
              <div 
                className={`w-28 h-28 rounded-full border-4 border-amber-500 bg-amber-400 shadow-xl flex items-center justify-center text-amber-950 font-bold text-2xl select-none cursor-pointer transition-all duration-[1000ms] ${
                  isFlipping ? 'animate-spin scale-110 shadow-2xl' : ''
                }`}
                style={{
                  transform: isFlipping ? 'rotateY(720deg) rotateX(720deg)' : 'none'
                }}
                onClick={flipCoin}
              >
                {coinResult ? coinResult[0] : '🪙'}
              </div>
              <div className="text-center">
                <p className="text-sm opacity-60">Click the coin to flip</p>
                <h4 className="text-lg font-bold mt-1">
                  {isFlipping ? 'Flipping...' : coinResult ? `Result: ${coinResult}` : 'Toss the coin!'}
                </h4>
              </div>
            </div>
          )}

          {/* 2. DICE MODULE */}
          {activeTab === 'dice' && (
            <div className="flex flex-col items-center gap-6">
              <div
                onClick={rollDice}
                className={`w-20 h-20 bg-slate-50 dark:bg-white text-slate-900 rounded-2xl shadow-xl flex items-center justify-center font-bold text-4xl border-2 border-slate-300 select-none cursor-pointer transition-all ${
                  isRolling ? 'animate-bounce rotate-180 scale-110' : ''
                }`}
              >
                {/* Dots based on roll */}
                {diceResult || '🎲'}
              </div>
              <div className="text-center">
                <p className="text-sm opacity-60">Click the die to roll</p>
                <h4 className="text-lg font-bold mt-1">
                  {isRolling ? 'Rolling...' : diceResult ? `Result: Face ${diceResult}` : 'Roll the die!'}
                </h4>
              </div>
            </div>
          )}

          {/* 3. SPINNER MODULE */}
          {activeTab === 'spinner' && (
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-44 h-44">
                {/* Pointer arrow */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[14px] border-t-indigo-500 z-10 drop-shadow" />
                
                {/* Wheel */}
                <div 
                  className="w-full h-full rounded-full border-4 border-slate-700 shadow-xl overflow-hidden relative transition-transform duration-[1500ms] ease-out"
                  style={{
                    transform: `rotate(${spinnerAngle}deg)`,
                    background: 'conic-gradient(#ef4444 0% 25%, #3b82f6 25% 50%, #10b981 50% 75%, #f59e0b 75% 100%)'
                  }}
                  onClick={spinWheel}
                />
              </div>
              <div className="text-center">
                <p className="text-sm opacity-60">Click the wheel to spin</p>
                <h4 className="text-lg font-bold mt-1">
                  {isSpinning ? 'Spinning...' : spinnerResult ? `Result: ${spinnerResult}` : 'Spin the wheel!'}
                </h4>
              </div>
            </div>
          )}

          {/* 4. BAG MODULE */}
          {activeTab === 'bag' && (
            <div className="flex flex-col items-center gap-6 w-full max-w-sm">
              <div className="flex gap-4 items-center justify-center">
                {/* Bag representation */}
                <div 
                  onClick={drawBall}
                  className="relative w-32 h-36 bg-amber-800/80 rounded-b-3xl rounded-t-lg border-2 border-amber-900 shadow-lg flex flex-wrap items-center justify-center p-3 gap-2 cursor-pointer hover:bg-amber-800 transition-colors"
                >
                  <div className="absolute top-0 w-24 h-4 bg-amber-950 rounded-full -translate-y-1/2" />
                  {/* Render balls inside bag */}
                  {Array.from({ length: redCount }).map((_, i) => <div key={`r-${i}`} className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-inner" />)}
                  {Array.from({ length: blueCount }).map((_, i) => <div key={`b-${i}`} className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-inner" />)}
                  {Array.from({ length: greenCount }).map((_, i) => <div key={`g-${i}`} className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-inner" />)}
                </div>

                {/* Drawn ball display */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs text-slate-400">Drawn Ball</span>
                  <div className={`w-14 h-14 rounded-full border-2 border-dashed border-slate-500 flex items-center justify-center transition-all ${isDrawing ? 'scale-110 rotate-45' : ''}`}>
                    {isDrawing ? (
                      <div className="w-6 h-6 rounded-full bg-slate-400 animate-ping" />
                    ) : drawnBall ? (
                      <div className={`w-10 h-10 rounded-full shadow-lg ${
                        drawnBall === 'Red' ? 'bg-red-500' : drawnBall === 'Blue' ? 'bg-blue-500' : 'bg-green-500'
                      }`} />
                    ) : '❓'}
                  </div>
                </div>
              </div>

              {/* Adjust bag components */}
              <div className="w-full flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-red-400">Red Balls: {redCount}</span>
                  <input
                    type="range"
                    min="0"
                    max="8"
                    value={redCount}
                    onChange={e => setRedCount(Number(e.target.value))}
                    className="w-2/3 accent-red-500"
                  />
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-blue-400">Blue Balls: {blueCount}</span>
                  <input
                    type="range"
                    min="0"
                    max="8"
                    value={blueCount}
                    onChange={e => setBlueCount(Number(e.target.value))}
                    className="w-2/3 accent-blue-500"
                  />
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-green-400">Green Balls: {greenCount}</span>
                  <input
                    type="range"
                    min="0"
                    max="8"
                    value={greenCount}
                    onChange={e => setGreenCount(Number(e.target.value))}
                    className="w-2/3 accent-green-500"
                  />
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Stats and Mathematical Comparison Panel */}
        <div className="flex flex-col gap-4 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl justify-between border border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="font-bold text-sm text-indigo-500 flex items-center gap-1.5 mb-2">
              📊 Experimental Statistics
            </h4>

            {/* 1. COIN STATS */}
            {activeTab === 'coin' && (
              <div className="flex flex-col gap-2 text-xs">
                <div className="flex justify-between border-b border-slate-300 dark:border-slate-800 py-1">
                  <span>Total Flips</span>
                  <span className="font-bold">{totalFlips}</span>
                </div>
                <div className="flex justify-between border-b border-slate-300 dark:border-slate-800 py-1">
                  <span className="text-amber-500 font-semibold">Heads (H)</span>
                  <span>{coinFlips.H} ({totalFlips > 0 ? Math.round((coinFlips.H/totalFlips)*100) : 0}%)</span>
                </div>
                <div className="flex justify-between border-b border-slate-300 dark:border-slate-800 py-1">
                  <span className="text-slate-400 font-semibold">Tails (T)</span>
                  <span>{coinFlips.T} ({totalFlips > 0 ? Math.round((coinFlips.T/totalFlips)*100) : 0}%)</span>
                </div>
                <div className="flex justify-between font-mono pt-3 text-indigo-400">
                  <span>Exp. P(Heads)</span>
                  <span>{expHeads}</span>
                </div>
                <div className="flex justify-between font-mono text-emerald-400">
                  <span>Theo. P(Heads)</span>
                  <span>0.500</span>
                </div>
              </div>
            )}

            {/* 2. DICE STATS */}
            {activeTab === 'dice' && (
              <div className="flex flex-col gap-2 text-xs">
                <div className="flex justify-between border-b border-slate-300 dark:border-slate-800 py-1 mb-2">
                  <span>Total Rolls</span>
                  <span className="font-bold">{totalRolls}</span>
                </div>
                {Object.entries(diceRolls).map(([face, count]) => {
                  const pct = totalRolls > 0 ? Math.round((count / totalRolls) * 100) : 0;
                  return (
                    <div key={face} className="flex flex-col gap-0.5">
                      <div className="flex justify-between text-[10px]">
                        <span>Face {face}</span>
                        <span>{count} ({pct}%)</span>
                      </div>
                      <div className="w-full bg-slate-300 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-full transition-all" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* 3. SPINNER STATS */}
            {activeTab === 'spinner' && (
              <div className="flex flex-col gap-2 text-xs">
                <div className="flex justify-between border-b border-slate-300 dark:border-slate-800 py-1 mb-2">
                  <span>Total Spins</span>
                  <span className="font-bold">{totalSpins}</span>
                </div>
                {Object.entries(spinnerCounts).map(([color, count]) => {
                  const pct = totalSpins > 0 ? Math.round((count / totalSpins) * 100) : 0;
                  const colorClass = 
                    color === 'Red' ? 'bg-red-500' :
                    color === 'Blue' ? 'bg-blue-500' :
                    color === 'Green' ? 'bg-green-500' : 'bg-yellow-500';

                  return (
                    <div key={color} className="flex flex-col gap-0.5">
                      <div className="flex justify-between text-[10px]">
                        <span>{color} (25% Theo.)</span>
                        <span>{count} ({pct}%)</span>
                      </div>
                      <div className="w-full bg-slate-300 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className={`${colorClass} h-full transition-all`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* 4. BAG STATS */}
            {activeTab === 'bag' && (
              <div className="flex flex-col gap-2 text-xs">
                <div className="flex justify-between border-b border-slate-300 dark:border-slate-800 py-1 mb-2">
                  <span>Total Draws</span>
                  <span className="font-bold">{totalDrawn}</span>
                </div>
                {Object.entries(drawCounts).map(([color, count]) => {
                  const pct = totalDrawn > 0 ? Math.round((count / totalDrawn) * 100) : 0;
                  const bagCount = color === 'Red' ? redCount : color === 'Blue' ? blueCount : greenCount;
                  const theoPct = totalBalls > 0 ? Math.round((bagCount / totalBalls) * 100) : 0;
                  const colorClass = color === 'Red' ? 'bg-red-500' : color === 'Blue' ? 'bg-blue-500' : 'bg-green-500';

                  return (
                    <div key={color} className="flex flex-col gap-0.5">
                      <div className="flex justify-between text-[10px]">
                        <span>{color} (Theo: {theoPct}%)</span>
                        <span>{count} ({pct}%)</span>
                      </div>
                      <div className="w-full bg-slate-300 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className={`${colorClass} h-full transition-all`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-300 dark:border-slate-800">
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-1.5 w-full py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs font-semibold rounded-lg transition-all"
            >
              <RotateCcw size={14} /> Clear Stats
            </button>
            <div className="relative group cursor-pointer text-slate-400 hover:text-slate-200">
              <HelpCircle size={16} />
              <div className="absolute right-0 bottom-6 w-48 bg-slate-900 border border-slate-800 rounded-lg p-2 text-[10px] hidden group-hover:block z-20 text-slate-300 shadow-xl leading-relaxed">
                As the number of trials increases, the experimental probability will converge to the theoretical value. This is the **Law of Large Numbers**.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
