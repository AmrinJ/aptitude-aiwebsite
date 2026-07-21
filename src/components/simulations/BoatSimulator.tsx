'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Play, Pause, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';

export const BoatSimulator: React.FC = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Settings
  const [boatSpeed, setBoatSpeed] = useState(12); // km/h
  const [streamSpeed, setStreamSpeed] = useState(4); // km/h
  const [mode, setMode] = useState<'downstream' | 'upstream'>('downstream');
  const [distance, setDistance] = useState(40); // km

  // Playback state
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0); // simulation time (hours)
  const [waveOffset, setWaveOffset] = useState(0);

  // Calculations
  const effectiveSpeed = mode === 'downstream' ? (boatSpeed + streamSpeed) : Math.max(0.1, boatSpeed - streamSpeed);
  const totalTime = distance / effectiveSpeed; // hours

  useEffect(() => {
    setProgress(0);
    setIsRunning(false);
  }, [boatSpeed, streamSpeed, mode, distance]);

  // RequestAnimationFrame simulation loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const update = (time: number) => {
      // Animate wave offset
      setWaveOffset(prev => prev + 0.1);

      if (isRunning) {
        const delta = (time - lastTime) / 1000; // actual elapsed seconds
        // Map 1 real second to 0.1 simulation hours (or scaled appropriately)
        const scaleHour = 0.05;
        setProgress(prev => {
          const next = prev + delta * scaleHour;
          if (next >= totalTime) {
            setIsRunning(false);
            return totalTime;
          }
          return next;
        });
      }
      lastTime = time;
      draw();
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning, progress, waveOffset, boatSpeed, streamSpeed, mode, distance, totalTime]);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // Draw sky/ambient background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, W, H);

    // Draw current direction arrows in background
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    // Streams flow left to right (downstream is moving left to right)
    for (let y = 60; y < H; y += 40) {
      for (let x = 30; x < W; x += 100) {
        ctx.moveTo(x, y);
        ctx.lineTo(x + 30, y);
        ctx.lineTo(x + 23, y - 5);
        ctx.moveTo(x + 30, y);
        ctx.lineTo(x + 23, y + 5);
      }
    }
    ctx.stroke();

    // Draw Water Waves using animated sine waves
    ctx.fillStyle = 'rgba(30, 64, 175, 0.7)';
    ctx.beginPath();
    ctx.moveTo(0, H);
    for (let x = 0; x <= W; x += 10) {
      const y = H - 50 + Math.sin(x * 0.02 + waveOffset) * 8;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(W, H);
    ctx.fill();

    // Secondary wave for depth
    ctx.fillStyle = 'rgba(29, 78, 216, 0.4)';
    ctx.beginPath();
    ctx.moveTo(0, H);
    for (let x = 0; x <= W; x += 10) {
      const y = H - 35 + Math.sin(x * 0.015 - waveOffset * 0.8) * 10;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(W, H);
    ctx.fill();

    // Draw Boat
    // Boat starts left and moves right for downstream.
    // For upstream, boat starts right and moves left.
    let boatX = 0;
    const padding = 60;
    const travelW = W - padding * 2;
    const ratio = totalTime > 0 ? progress / totalTime : 0;

    if (mode === 'downstream') {
      boatX = padding + ratio * travelW;
    } else {
      boatX = W - padding - ratio * travelW;
    }

    const boatY = H - 55 + Math.sin(boatX * 0.02 + waveOffset) * 6;

    // Draw boat hull
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    if (mode === 'downstream') {
      ctx.moveTo(boatX - 30, boatY);
      ctx.lineTo(boatX + 25, boatY);
      ctx.lineTo(boatX + 35, boatY - 15);
      ctx.lineTo(boatX - 25, boatY - 15);
    } else {
      ctx.moveTo(boatX + 30, boatY);
      ctx.lineTo(boatX - 25, boatY);
      ctx.lineTo(boatX - 35, boatY - 15);
      ctx.lineTo(boatX + 25, boatY - 15);
    }
    ctx.closePath();
    ctx.fill();

    // Sail / Cabin
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(boatX - 5, boatY - 15);
    ctx.lineTo(boatX - 5, boatY - 45);
    if (mode === 'downstream') {
      ctx.lineTo(boatX + 15, boatY - 25);
    } else {
      ctx.lineTo(boatX - 25, boatY - 25);
    }
    ctx.closePath();
    ctx.fill();

    // Mast pole
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(boatX - 5, boatY - 15);
    ctx.lineTo(boatX - 5, boatY - 48);
    ctx.stroke();

    // Flag
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    if (mode === 'downstream') {
      ctx.moveTo(boatX - 5, boatY - 48);
      ctx.lineTo(boatX - 15, boatY - 43);
      ctx.lineTo(boatX - 5, boatY - 38);
    } else {
      ctx.moveTo(boatX - 5, boatY - 48);
      ctx.lineTo(boatX + 5, boatY - 43);
      ctx.lineTo(boatX - 5, boatY - 38);
    }
    ctx.closePath();
    ctx.fill();

    // Speed vector arrows overlay above boat
    const vectorY = boatY - 65;
    ctx.lineWidth = 4;

    // 1. Boat Speed Arrow (Green)
    ctx.strokeStyle = '#10b981';
    ctx.beginPath();
    if (mode === 'downstream') {
      ctx.moveTo(boatX - 15, vectorY);
      ctx.lineTo(boatX + 15, vectorY);
      ctx.lineTo(boatX + 9, vectorY - 4);
      ctx.moveTo(boatX + 15, vectorY);
      ctx.lineTo(boatX + 9, vectorY + 4);
    } else {
      ctx.moveTo(boatX + 15, vectorY);
      ctx.lineTo(boatX - 15, vectorY);
      ctx.lineTo(boatX - 9, vectorY - 4);
      ctx.moveTo(boatX - 15, vectorY);
      ctx.lineTo(boatX - 9, vectorY + 4);
    }
    ctx.stroke();
    ctx.fillStyle = '#10b981';
    ctx.font = '10px monospace';
    ctx.fillText(`v_boat: ${boatSpeed} km/h`, boatX - 35, vectorY - 10);

    // 2. Stream Speed Arrow (Cyan) - flows left to right
    ctx.strokeStyle = '#06b6d4';
    ctx.beginPath();
    ctx.moveTo(boatX - 25, vectorY + 20);
    ctx.lineTo(boatX + 5, vectorY + 20);
    ctx.lineTo(boatX - 1, vectorY + 16);
    ctx.moveTo(boatX + 5, vectorY + 20);
    ctx.lineTo(boatX - 1, vectorY + 24);
    ctx.stroke();
    ctx.fillStyle = '#06b6d4';
    ctx.fillText(`v_stream: ${streamSpeed} km/h`, boatX - 45, vectorY + 32);
  };

  const handleStart = () => {
    if (progress >= totalTime) {
      setProgress(0);
    }
    setIsRunning(true);
  };

  return (
    <div className="glass-panel p-6 rounded-2xl glow-hover flex flex-col gap-6 text-slate-900 dark:text-slate-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            ⛵ {t('upstream')} vs {t('downstream')} Simulation
          </h3>
          <p className="text-sm opacity-70">
            Adjust velocities to see the additive/subtractive effects of water current vectors on boat travel.
          </p>
        </div>
        <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setMode('downstream')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
              mode === 'downstream'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <ArrowRight size={14} /> Downstream (With Flow)
          </button>
          <button
            onClick={() => setMode('upstream')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
              mode === 'upstream'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <ArrowLeft size={14} /> Upstream (Against Flow)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sliders */}
        <div className="flex flex-col gap-4 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl">
          <h4 className="font-bold text-sm text-indigo-500">Vector Coefficients</h4>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold flex justify-between">
              <span>Boat Speed (Still Water)</span>
              <span className="text-emerald-400">{boatSpeed} km/h</span>
            </label>
            <input
              type="range"
              min="5"
              max="25"
              value={boatSpeed}
              onChange={e => setBoatSpeed(Number(e.target.value))}
              className="accent-emerald-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold flex justify-between">
              <span>Stream Speed (Current)</span>
              <span className="text-cyan-400">{streamSpeed} km/h</span>
            </label>
            <input
              type="range"
              min="0"
              max="15"
              value={streamSpeed}
              onChange={e => setStreamSpeed(Number(e.target.value))}
              className="accent-cyan-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold flex justify-between">
              <span>Distance to Cross</span>
              <span className="text-indigo-400">{distance} km</span>
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={distance}
              onChange={e => setDistance(Number(e.target.value))}
              className="accent-indigo-500"
            />
          </div>
        </div>

        {/* Animation Canvas */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="relative rounded-xl overflow-hidden border border-slate-800">
            <canvas
              ref={canvasRef}
              width={600}
              height={200}
              className="w-full aspect-[3/1] block"
            />
            {boatSpeed <= streamSpeed && mode === 'upstream' && (
              <div className="absolute inset-0 bg-red-950/60 backdrop-blur-xs flex items-center justify-center">
                <span className="text-red-400 text-xs font-bold text-center px-4 py-2 bg-slate-950 rounded-lg border border-red-900">
                  ⚠️ Boat speed ({boatSpeed} km/h) ≤ Stream speed ({streamSpeed} km/h). Upstream net movement is stalled!
                </span>
              </div>
            )}
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono text-emerald-400 border border-slate-800">
              Hours: {progress.toFixed(2)}h / {totalTime.toFixed(2)}h
            </div>
          </div>

          {/* Calcs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Net Speed</span>
              <span className="text-base font-bold text-emerald-500">{effectiveSpeed} km/h</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Total Distance</span>
              <span className="text-base font-bold text-indigo-500">{distance} km</span>
            </div>
            <div className="flex flex-col col-span-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Formula Used</span>
              <span className="text-xs font-mono font-bold text-yellow-500">
                {mode === 'downstream' ? 'Speed = Boat + Stream' : 'Speed = Boat - Stream'}
                <br />
                Time = {distance} / {effectiveSpeed} = {totalTime.toFixed(2)} hrs
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleStart}
              disabled={isRunning || (boatSpeed <= streamSpeed && mode === 'upstream')}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-sm font-semibold transition-all shadow-lg"
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
              onClick={() => { setProgress(0); setIsRunning(false); }}
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
