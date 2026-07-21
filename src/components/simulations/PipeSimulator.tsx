'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Play, Pause, RotateCcw, Droplets } from 'lucide-react';

export const PipeSimulator: React.FC = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Flow parameters
  const [inletA, setInletA] = useState(15); // L/min
  const [inletAOpen, setInletAOpen] = useState(true);

  const [inletB, setInletB] = useState(25); // L/min
  const [inletBOpen, setInletBOpen] = useState(false);

  const [leakC, setLeakC] = useState(10); // L/min
  const [leakCOpen, setLeakCOpen] = useState(true);

  const [capacity, setCapacity] = useState(300); // Liters
  const [waterLevel, setWaterLevel] = useState(50); // Start volume (Liters)

  // Simulation controls
  const [isRunning, setIsRunning] = useState(false);
  const [history, setHistory] = useState<number[]>([50]); // Log of water level for graph
  const [simTime, setSimTime] = useState(0); // mins

  // Net rate
  const rateA = inletAOpen ? inletA : 0;
  const rateB = inletBOpen ? inletB : 0;
  const rateC = leakCOpen ? leakC : 0;
  const netRate = rateA + rateB - rateC;

  useEffect(() => {
    setIsRunning(false);
    setWaterLevel(50);
    setHistory([50]);
    setSimTime(0);
  }, [inletA, inletB, leakC, capacity, inletAOpen, inletBOpen, leakCOpen]);

  // Simulation Tick
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const update = (time: number) => {
      if (isRunning) {
        const delta = (time - lastTime) / 1000; // real seconds
        // Scale: 1 real second = 0.5 simulation minutes
        const scaleMin = 0.25;
        const elapsedMins = delta * scaleMin;

        setSimTime(prev => prev + elapsedMins);
        setWaterLevel(prev => {
          let next = prev + netRate * elapsedMins;
          if (next >= capacity) {
            next = capacity;
            setIsRunning(false); // full
          } else if (next <= 0) {
            next = 0;
            setIsRunning(false); // empty
          }
          
          // Append to history for graph occasionally
          setHistory(h => {
            const last = h[h.length - 1];
            if (Math.abs(last - next) > 1 || h.length < 2) {
              return [...h, next].slice(-50);
            }
            return h;
          });
          return next;
        });
      }
      lastTime = time;
      draw();
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning, waterLevel, netRate, capacity, history]);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // 1. Draw Water Tank Container
    const tankW = 140;
    const tankH = 150;
    const tankX = W / 3 - tankW / 2;
    const tankY = H / 2 - tankH / 2;

    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 6;
    ctx.lineCap = 'square';
    ctx.beginPath();
    // Glass cylinder look (open top)
    ctx.moveTo(tankX, tankY);
    ctx.lineTo(tankX, tankY + tankH);
    ctx.lineTo(tankX + tankW, tankY + tankH);
    ctx.lineTo(tankX + tankW, tankY);
    ctx.stroke();

    // 2. Fill Water level
    const fillRatio = waterLevel / capacity;
    const fillH = tankH * fillRatio;
    if (fillH > 0) {
      ctx.fillStyle = 'rgba(14, 165, 233, 0.7)';
      ctx.fillRect(tankX + 3, tankY + tankH - fillH, tankW - 6, fillH);
    }

    // 3. Draw Inlet Pipes
    ctx.fillStyle = '#475569';
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#475569';

    // Pipe A (Top Left)
    ctx.fillRect(tankX - 40, tankY + 20, 45, 12); // horizontal
    ctx.fillRect(tankX - 8, tankY + 20, 12, 15);  // vertical spout
    if (inletAOpen && isRunning) {
      ctx.fillStyle = 'rgba(14, 165, 233, 0.9)';
      // Running water stream
      ctx.fillRect(tankX - 5, tankY + 35, 6, tankH - 35 - fillH);
    }

    // Pipe B (Top Right)
    ctx.fillStyle = '#475569';
    ctx.fillRect(tankX + tankW - 5, tankY + 20, 45, 12); // horizontal
    ctx.fillRect(tankX + tankW - 4, tankY + 20, 12, 15);  // vertical spout
    if (inletBOpen && isRunning) {
      ctx.fillStyle = 'rgba(14, 165, 233, 0.9)';
      ctx.fillRect(tankX + tankW - 1, tankY + 35, 6, tankH - 35 - fillH);
    }

    // Leak C (Bottom Right)
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(tankX + tankW - 4, tankY + tankH - 25, 15, 8);
    if (leakCOpen && waterLevel > 0 && isRunning) {
      ctx.fillStyle = 'rgba(14, 165, 233, 0.8)';
      // Drip particles
      const offset = (simTime * 50) % 20;
      ctx.beginPath();
      ctx.arc(tankX + tankW + 8, tankY + tankH - 10 + offset, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Label inside tank
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText(`${Math.round(waterLevel)} L`, tankX + tankW / 2 - 18, tankY + tankH - 10);
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(`Cap: ${capacity}L`, tankX + tankW / 2 - 24, tankY - 10);

    // 4. Draw Real-time Chart (Right hand side of canvas)
    const chartX = W / 2 + 30;
    const chartY = H / 2 - 70;
    const chartW = W / 2 - 60;
    const chartH = 140;

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let i = 0; i <= 4; i++) {
      const gy = chartY + (chartH / 4) * i;
      ctx.moveTo(chartX, gy);
      ctx.lineTo(chartX + chartW, gy);
      
      const gx = chartX + (chartW / 4) * i;
      ctx.moveTo(gx, chartY);
      ctx.lineTo(gx, chartY + chartH);
    }
    ctx.stroke();

    // Chart Borders
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.strokeRect(chartX, chartY, chartW, chartH);

    // Plot line
    if (history.length > 1) {
      ctx.strokeStyle = '#0ea5e9';
      ctx.lineWidth = 3;
      ctx.beginPath();
      history.forEach((val, idx) => {
        const hx = chartX + (idx / (history.length - 1)) * chartW;
        const hy = chartY + chartH - (val / capacity) * chartH;
        if (idx === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      });
      ctx.stroke();
    }

    // Chart titles
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px monospace';
    ctx.fillText(`Water Level Graph`, chartX, chartY - 10);
    ctx.fillText(`Full (${capacity}L)`, chartX + chartW - 75, chartY + 12);
    ctx.fillText(`0L`, chartX + chartW - 20, chartY + chartH - 5);
  };

  const handleStart = () => {
    if (waterLevel >= capacity && netRate > 0) return;
    if (waterLevel <= 0 && netRate < 0) return;
    setIsRunning(true);
  };

  return (
    <div className="glass-panel p-6 rounded-2xl glow-hover flex flex-col gap-6 text-slate-900 dark:text-slate-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            🚰 {t('pipes')} Simulation
          </h3>
          <p className="text-sm opacity-70">
            Configure Inlet and Outlet pipes. See how fractions combine to calculate net tank filling rates.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls */}
        <div className="flex flex-col gap-4 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl">
          <h4 className="font-bold text-sm text-indigo-500">Pipe Switches</h4>

          {/* Pipe A */}
          <div className="flex flex-col gap-2 p-2 rounded-lg bg-black/10 dark:bg-black/30">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-sky-400">Inlet Pipe A</span>
              <input
                type="checkbox"
                checked={inletAOpen}
                onChange={e => setInletAOpen(e.target.checked)}
                className="accent-indigo-500 w-4 h-4 cursor-pointer"
              />
            </div>
            <label className="text-[10px] text-slate-500 flex justify-between">
              <span>Flow Rate</span>
              <span>{inletA} L/min</span>
            </label>
            <input
              type="range"
              min="5"
              max="30"
              value={inletA}
              onChange={e => setInletA(Number(e.target.value))}
              disabled={!inletAOpen}
              className="accent-indigo-500"
            />
          </div>

          {/* Pipe B */}
          <div className="flex flex-col gap-2 p-2 rounded-lg bg-black/10 dark:bg-black/30">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-400">Inlet Pipe B</span>
              <input
                type="checkbox"
                checked={inletBOpen}
                onChange={e => setInletBOpen(e.target.checked)}
                className="accent-indigo-500 w-4 h-4 cursor-pointer"
              />
            </div>
            <label className="text-[10px] text-slate-500 flex justify-between">
              <span>Flow Rate</span>
              <span>{inletB} L/min</span>
            </label>
            <input
              type="range"
              min="5"
              max="35"
              value={inletB}
              onChange={e => setInletB(Number(e.target.value))}
              disabled={!inletBOpen}
              className="accent-indigo-500"
            />
          </div>

          {/* Leak C */}
          <div className="flex flex-col gap-2 p-2 rounded-lg bg-black/10 dark:bg-black/30">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-red-400">Outlet Leak C</span>
              <input
                type="checkbox"
                checked={leakCOpen}
                onChange={e => setLeakCOpen(e.target.checked)}
                className="accent-indigo-500 w-4 h-4 cursor-pointer"
              />
            </div>
            <label className="text-[10px] text-slate-500 flex justify-between">
              <span>Leak Rate</span>
              <span>-{leakC} L/min</span>
            </label>
            <input
              type="range"
              min="5"
              max="25"
              value={leakC}
              onChange={e => setLeakC(Number(e.target.value))}
              disabled={!leakCOpen}
              className="accent-indigo-500"
            />
          </div>
        </div>

        {/* Animation */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#070b13]">
            <canvas
              ref={canvasRef}
              width={600}
              height={200}
              className="w-full aspect-[3/1] block"
            />
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono text-emerald-400 border border-slate-800">
              Time: {simTime.toFixed(1)} mins
            </div>
          </div>

          {/* Rate analytics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Net Rate</span>
              <span className={`text-base font-bold ${netRate >= 0 ? 'text-sky-500' : 'text-red-400'}`}>
                {netRate > 0 ? `+${netRate}` : netRate} L/min
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Capacity</span>
              <span className="text-base font-bold text-slate-600 dark:text-slate-300">{capacity} L</span>
            </div>
            <div className="flex flex-col col-span-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Time Formula</span>
              <span className="text-xs font-mono font-bold text-indigo-400">
                {netRate > 0 
                  ? `Time = (Capacity - Current) / NetRate = ${Math.round((capacity - waterLevel) / netRate)} mins`
                  : netRate < 0 
                    ? `Time to empty = Current / |NetRate| = ${Math.round(waterLevel / Math.abs(netRate))} mins`
                    : 'Equilibrium reached. Tank level will stay constant.'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleStart}
              disabled={isRunning || netRate === 0}
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
              onClick={() => { setWaterLevel(50); setHistory([50]); setIsRunning(false); setSimTime(0); }}
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
