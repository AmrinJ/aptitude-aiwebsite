'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Play, Pause, RotateCcw, Info } from 'lucide-react';

export const TrainSimulator: React.FC = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Settings
  const [mode, setMode] = useState<'post' | 'bridge' | 'opposite' | 'same'>('opposite');
  const [speedA, setSpeedA] = useState(20); // m/s
  const [lengthA, setLengthA] = useState(100); // m
  const [speedB, setSpeedB] = useState(15); // m/s
  const [lengthB, setLengthB] = useState(80); // m
  const [bridgeLen, setBridgeLen] = useState(150); // m

  // Playback state
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0); // simulation time (s)
  const [collisionAlert, setCollisionAlert] = useState(false);

  // Derived values
  const relativeSpeed = mode === 'opposite' ? (speedA + speedB) : mode === 'same' ? Math.abs(speedA - speedB) : speedA;
  const totalDistance = 
    mode === 'post' ? lengthA :
    mode === 'bridge' ? (lengthA + bridgeLen) :
    (lengthA + lengthB);

  const crossoverTime = relativeSpeed > 0 ? (totalDistance / relativeSpeed) : Infinity;

  useEffect(() => {
    setProgress(0);
    setIsRunning(false);
    setCollisionAlert(false);
  }, [mode, speedA, lengthA, speedB, lengthB, bridgeLen]);

  // RequestAnimationFrame Simulation Loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const update = (time: number) => {
      if (isRunning) {
        const delta = (time - lastTime) / 1000; // in seconds
        setProgress(prev => {
          const next = prev + delta;
          if (next >= crossoverTime) {
            setIsRunning(false);
            if (mode === 'opposite') setCollisionAlert(true);
            return crossoverTime;
          }
          return next;
        });
      }
      lastTime = time;
      draw();
      animationFrameId = requestAnimationFrame(update);
    };

    if (isRunning) {
      animationFrameId = requestAnimationFrame(update);
    } else {
      draw();
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning, progress, mode, speedA, lengthA, speedB, lengthB, bridgeLen, crossoverTime]);

  // Canvas drawing function
  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear and set sizing
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const W = canvas.width;
    const H = canvas.height;

    // Draw background tracks
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 4;
    
    // Tracks for A
    ctx.beginPath();
    ctx.moveTo(20, H / 3);
    ctx.lineTo(W - 20, H / 3);
    ctx.stroke();

    // Secondary Track if opposite or same direction
    if (mode === 'opposite' || mode === 'same') {
      ctx.beginPath();
      ctx.moveTo(20, (2 * H) / 3);
      ctx.lineTo(W - 20, (2 * H) / 3);
      ctx.stroke();
    }

    // Scaling factor (meters to pixels). Say 1 meter = 2.5 pixels
    const scale = 2.0;

    // Draw Post
    if (mode === 'post') {
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(W / 2 - 4, H / 3 - 60, 8, 60);
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px sans-serif';
      ctx.fillText('POST', W / 2 - 15, H / 3 - 70);
    }

    // Draw Bridge
    if (mode === 'bridge') {
      const bridgeX = W / 2 - (bridgeLen * scale) / 2;
      const bridgeW = bridgeLen * scale;
      ctx.fillStyle = '#64748b';
      ctx.fillRect(bridgeX, H / 3 - 10, bridgeW, 20);
      
      // Bridge Archs
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(bridgeX + bridgeW / 4, H / 3 + 10, bridgeW / 6, Math.PI, 0);
      ctx.arc(bridgeX + (3 * bridgeW) / 4, H / 3 + 10, bridgeW / 6, Math.PI, 0);
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = '12px sans-serif';
      ctx.fillText(`BRIDGE (${bridgeLen}m)`, W / 2 - 40, H / 3 - 20);
    }

    // Draw Train A (Blue Bullet)
    // Starting position of Train A
    let trainAX = 0;
    if (mode === 'post') {
      // Train starts left, crosses the post in the center
      const postX = W / 2;
      const startX = postX - lengthA * scale;
      trainAX = startX + progress * speedA * scale;
    } else if (mode === 'bridge') {
      const bridgeX = W / 2 - (bridgeLen * scale) / 2;
      const startX = bridgeX - lengthA * scale;
      trainAX = startX + progress * speedA * scale;
    } else if (mode === 'opposite') {
      // Train A starts from left, Train B from right
      trainAX = 50 + progress * speedA * scale;
    } else if (mode === 'same') {
      // Train A starts behind Train B
      trainAX = 30 + progress * speedA * scale;
    }

    const trainAW = lengthA * scale;
    const trainY1 = H / 3 - 25;

    // Train A Body
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.roundRect(trainAX, trainY1, trainAW, 20, [4, 12, 12, 4]);
    ctx.fill();

    // Windows for A
    ctx.fillStyle = '#93c5fd';
    for (let i = 10; i < trainAW - 15; i += 15) {
      ctx.fillRect(trainAX + i, trainY1 + 5, 8, 6);
    }
    // Cabin Text
    ctx.fillStyle = '#ffffff';
    ctx.font = '10px sans-serif';
    ctx.fillText(`Train A`, trainAX + 10, trainY1 + 32);

    // Draw Train B (Purple passenger)
    if (mode === 'opposite' || mode === 'same') {
      let trainBX = 0;
      const trainY2 = (2 * H) / 3 - 25;
      const trainBW = lengthB * scale;

      if (mode === 'opposite') {
        // Starts right, moves left
        const startBX = W - 50 - trainBW;
        trainBX = startBX - progress * speedB * scale;
      } else {
        // Starts ahead
        const startBX = 150;
        trainBX = startBX + progress * speedB * scale;
      }

      ctx.fillStyle = '#a855f7';
      ctx.beginPath();
      if (mode === 'opposite') {
        ctx.roundRect(trainBX, trainY2, trainBW, 20, [12, 4, 4, 12]);
      } else {
        ctx.roundRect(trainBX, trainY2, trainBW, 20, [4, 12, 12, 4]);
      }
      ctx.fill();

      // Windows for B
      ctx.fillStyle = '#e9d5ff';
      for (let i = 10; i < trainBW - 15; i += 15) {
        ctx.fillRect(trainBX + i, trainY2 + 5, 8, 6);
      }

      ctx.fillStyle = '#ffffff';
      ctx.fillText(`Train B`, trainBX + 10, trainY2 + 32);
    }
  };

  const handleStart = () => {
    if (progress >= crossoverTime) {
      setProgress(0);
      setCollisionAlert(false);
    }
    setIsRunning(true);
  };

  return (
    <div className="glass-panel p-6 rounded-2xl glow-hover flex flex-col gap-6 text-slate-900 dark:text-slate-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            🚆 {t('relativeSpeed')} Simulation
          </h3>
          <p className="text-sm opacity-70">
            Simulating train crossings dynamically to visually explain relative speed formulas.
          </p>
        </div>
        <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
          {(['opposite', 'same', 'bridge', 'post'] as const).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg capitalize transition-all ${
                mode === m
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {m === 'post' ? 'Stationary Post' : m === 'bridge' ? 'Bridge / Platform' : m}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls Panel */}
        <div className="flex flex-col gap-4 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl">
          <h4 className="font-bold text-sm text-indigo-500 flex items-center gap-2">
            <Info size={16} /> Parameters Slider
          </h4>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold flex justify-between">
              <span>Train A Length</span>
              <span className="text-indigo-400">{lengthA} m</span>
            </label>
            <input
              type="range"
              min="50"
              max="200"
              value={lengthA}
              onChange={e => setLengthA(Number(e.target.value))}
              className="accent-indigo-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold flex justify-between">
              <span>Train A Speed</span>
              <span className="text-indigo-400">{speedA} m/s ({Math.round(speedA * 3.6)} km/h)</span>
            </label>
            <input
              type="range"
              min="5"
              max="40"
              value={speedA}
              onChange={e => setSpeedA(Number(e.target.value))}
              className="accent-indigo-500"
            />
          </div>

          {(mode === 'opposite' || mode === 'same') && (
            <>
              <hr className="border-slate-300 dark:border-slate-800" />
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold flex justify-between">
                  <span>Train B Length</span>
                  <span className="text-indigo-400">{lengthB} m</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="150"
                  value={lengthB}
                  onChange={e => setLengthB(Number(e.target.value))}
                  className="accent-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold flex justify-between">
                  <span>Train B Speed</span>
                  <span className="text-indigo-400">{speedB} m/s ({Math.round(speedB * 3.6)} km/h)</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={speedB}
                  onChange={e => setSpeedB(Number(e.target.value))}
                  className="accent-indigo-500"
                />
              </div>
            </>
          )}

          {mode === 'bridge' && (
            <>
              <hr className="border-slate-300 dark:border-slate-800" />
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold flex justify-between">
                  <span>Bridge Length</span>
                  <span className="text-indigo-400">{bridgeLen} m</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="250"
                  value={bridgeLen}
                  onChange={e => setBridgeLen(Number(e.target.value))}
                  className="accent-indigo-500"
                />
              </div>
            </>
          )}
        </div>

        {/* Animation Canvas */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="relative bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
            <canvas
              ref={canvasRef}
              width={600}
              height={200}
              className="w-full aspect-[3/1] block"
            />
            {collisionAlert && (
              <div className="absolute inset-0 bg-red-950/40 backdrop-blur-xs flex items-center justify-center animate-pulse">
                <span className="text-red-400 font-bold tracking-widest text-lg bg-red-950/80 px-4 py-2 rounded-lg border border-red-800">
                  TRAINS CROSSED!
                </span>
              </div>
            )}
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono text-emerald-400 border border-slate-800">
              Time: {progress.toFixed(2)}s / {crossoverTime.toFixed(2)}s
            </div>
          </div>

          {/* Calculations & Controls Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Rel. Speed</span>
              <span className="text-base font-bold text-indigo-500">{relativeSpeed} m/s</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Total Dist</span>
              <span className="text-base font-bold text-indigo-500">{totalDistance} m</span>
            </div>
            <div className="flex flex-col col-span-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Cross Time Formula</span>
              <span className="text-xs font-mono font-bold text-emerald-500">
                {mode === 'opposite' && 'Time = (L_A + L_B) / (S_A + S_B)'}
                {mode === 'same' && 'Time = (L_A + L_B) / |S_A - S_B|'}
                {mode === 'bridge' && 'Time = (L_A + L_Bridge) / S_A'}
                {mode === 'post' && 'Time = L_A / S_A'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleStart}
              disabled={isRunning && progress >= crossoverTime}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-indigo-500/20"
            >
              <Play size={16} /> {t('play')}
            </button>
            <button
              onClick={() => setIsRunning(false)}
              disabled={!isRunning}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-500 hover:bg-slate-600 disabled:opacity-50 text-white rounded-xl text-sm font-semibold transition-all"
            >
              <Pause size={16} /> {t('pause')}
            </button>
            <button
              onClick={() => { setProgress(0); setIsRunning(false); setCollisionAlert(false); }}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-sm font-semibold transition-all"
            >
              <RotateCcw size={16} /> {t('reset')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
