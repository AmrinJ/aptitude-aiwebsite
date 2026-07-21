'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Info, RotateCcw, Eye } from 'lucide-react';

interface Punch {
  x: number; // 0 to 1 relative
  y: number; // 0 to 1 relative
}

export const PaperFolder: React.FC = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // States
  const [foldDir, setFoldDir] = useState<'left-to-right' | 'top-to-bottom'>('left-to-right');
  const [isFolded, setIsFolded] = useState(false);
  const [punches, setPunches] = useState<Punch[]>([]);
  const [mirrorResult, setMirrorResult] = useState(false);

  useEffect(() => {
    setPunches([]);
    setIsFolded(false);
    setMirrorResult(false);
  }, [foldDir]);

  useEffect(() => {
    draw();
  }, [isFolded, punches, foldDir, mirrorResult]);

  // Compute all punch locations when paper is unfolded
  const getUnfoldedPunches = (): Punch[] => {
    const list: Punch[] = [];
    punches.forEach(p => {
      list.push(p); // Original punch

      if (mirrorResult || !isFolded) {
        if (foldDir === 'left-to-right') {
          // If folded left-to-right, punch is on the right half (x >= 0.5)
          // Mirroring reflects it across the vertical center line (x = 0.5)
          // Mirrored X = 1.0 - x
          list.push({ x: 1.0 - p.x, y: p.y });
        } else {
          // If folded top-to-bottom, punch is on the bottom half (y >= 0.5)
          // Mirroring reflects it across horizontal center (y = 0.5)
          // Mirrored Y = 1.0 - p.y
          list.push({ x: p.x, y: 1.0 - p.y });
        }
      }
    });
    return list;
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // Grid center lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H);
    ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2);
    ctx.stroke();

    // Crease line (dotted)
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    if (foldDir === 'left-to-right') {
      ctx.moveTo(W / 2, 20);
      ctx.lineTo(W / 2, H - 20);
    } else {
      ctx.moveTo(20, H / 2);
      ctx.lineTo(W - 20, H / 2);
    }
    ctx.stroke();
    ctx.setLineDash([]); // clear

    // Paper Bounds (Square)
    const pW = 200;
    const pH = 200;
    const pX = W / 2 - pW / 2;
    const pY = H / 2 - pH / 2;

    // Draw main sheet background
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.rect(pX, pY, pW, pH);
    ctx.fill();
    ctx.stroke();

    // If folded, cover the folded half with dark crosshatched background representing empty folded space
    if (isFolded) {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
      ctx.beginPath();
      if (foldDir === 'left-to-right') {
        // Left half is empty (folded over to right)
        ctx.fillRect(pX, pY, pW / 2, pH);
      } else {
        // Top half is empty (folded down to bottom)
        ctx.fillRect(pX, pY, pW, pH / 2);
      }
    }

    // Draw punches
    const activePunches = (isFolded && !mirrorResult) ? punches : getUnfoldedPunches();

    ctx.fillStyle = '#ef4444';
    ctx.strokeStyle = '#fca5a5';
    ctx.lineWidth = 2;

    activePunches.forEach(p => {
      // Map relative coordinates to paper rectangle
      const px = pX + p.x * pW;
      const py = pY + p.y * pH;

      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const W = canvas.width;
    const H = canvas.height;
    const pW = 200;
    const pH = 200;
    const pX = W / 2 - pW / 2;
    const pY = H / 2 - pH / 2;

    // Relative click on sheet
    const relX = (clickX - pX) / pW;
    const relY = (clickY - pY) / pH;

    // Check if inside paper sheet
    if (relX >= 0 && relX <= 1 && relY >= 0 && relY <= 1) {
      // If paper is folded, punches can only be placed on the active side
      if (isFolded) {
        if (foldDir === 'left-to-right' && relX < 0.5) return; // Locked half
        if (foldDir === 'top-to-bottom' && relY < 0.5) return; // Locked half
      }

      setPunches(prev => [...prev, { x: relX, y: relY }]);
    }
  };

  return (
    <div className="glass-panel p-6 rounded-2xl glow-hover flex flex-col gap-6 text-slate-900 dark:text-slate-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            📄 Paper Folding & Symmetry
          </h3>
          <p className="text-sm opacity-70">
            Fold the paper sheet, click to punch holes, then unfold or click Reveal to see the symmetrical mirror punches.
          </p>
        </div>
        <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setFoldDir('left-to-right')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              foldDir === 'left-to-right'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Vertical Fold (L ➔ R)
          </button>
          <button
            onClick={() => setFoldDir('top-to-bottom')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              foldDir === 'top-to-bottom'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Horizontal Fold (T ➔ B)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Controls */}
        <div className="flex flex-col gap-4 bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl justify-between border border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="font-bold text-sm text-indigo-500 flex items-center gap-1 mb-2">
              <Info size={16} /> Folding Controls
            </h4>
            <p className="text-xs opacity-75 leading-relaxed mb-4">
              1. Toggle between Vertical or Horizontal crease lines.
              <br />
              2. Click <strong>Fold Paper</strong> to simulate folding.
              <br />
              3. Click anywhere on the sheet to place a circular punch.
              <br />
              4. Click <strong>Unfold</strong> or <strong>Reveal Mirror</strong> to see the symmetry solution!
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => { setIsFolded(!isFolded); setMirrorResult(false); }}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all shadow-md ${
                  isFolded 
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}
              >
                {isFolded ? 'Unfold Paper' : 'Fold Paper'}
              </button>

              <button
                onClick={() => setMirrorResult(prev => !prev)}
                disabled={!isFolded}
                className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <Eye size={14} /> {mirrorResult ? 'Hide Mirrored Layout' : 'Reveal Mirror Symmetry'}
              </button>
            </div>
          </div>

          <button
            onClick={() => setPunches([])}
            className="flex items-center justify-center gap-1.5 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs font-semibold rounded-lg transition-all"
          >
            <RotateCcw size={14} /> Clear Punches
          </button>
        </div>

        {/* Paper Canvas */}
        <div className="lg:col-span-2 relative h-[250px] md:h-[300px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#070b13] flex items-center justify-center">
          <canvas
            ref={canvasRef}
            width={320}
            height={260}
            onClick={handleCanvasClick}
            className="cursor-crosshair block"
          />
        </div>

      </div>
    </div>
  );
};
