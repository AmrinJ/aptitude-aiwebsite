"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MathMotionVisualizer({ params, answerValue }: { params: any, answerValue?: string }) {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState(0); 

  useEffect(() => {
    setMounted(true);
    const t1 = setTimeout(() => setPhase(1), 2000);
    const t2 = setTimeout(() => setPhase(2), 6000);
    const t3 = setTimeout(() => setPhase(0), 8000); // Loop
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [phase]);

  if (!mounted) return <div className="w-full h-[400px] bg-slate-900 rounded-2xl animate-pulse" />;

  const type = params?.type || 'generic';
  const vars = params?.variables || {};
  
  // Expanded Mappings for all syllabus topics
  const isFinance = ['profit-loss', 'percentage', 'interest', 'average', 'data-interpretation'].some(t => type.includes(t));
  const isGeometry = ['geometry', 'probability', 'cube-dice', 'mensuration'].some(t => type.includes(t));
  const isPipes = type.includes('pipes');
  const isCoding = ['coding', 'syllogism', 'series', 'analogy'].some(t => type.includes(t));
  const isClock = type.includes('clock');

  // Parallax background variants
  const bgVariants = {
    animate: { backgroundPosition: ['0px 0px', '-2000px 0px'], transition: { repeat: Infinity, duration: 15, ease: "linear" as const } }
  };

  // ---------------------------------------------------------
  // 1. TRAIN SCENE
  // ---------------------------------------------------------
  if (type.includes('train')) {
    const isDual = type === 'train-dual';
    return (
      <div className="relative w-full h-[400px] bg-[#0b0f19] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
        <motion.div variants={bgVariants} animate="animate" className="absolute inset-0 opacity-40"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'800\' height=\'400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 400L50 250L150 300L250 150L350 250L450 100L550 200L650 50L750 150L800 100V400H0Z\' fill=\'%231e293b\'/%3E%3C/svg%3E")', backgroundSize: '800px 400px', backgroundRepeat: 'repeat-x' }} />
        <motion.div variants={{ animate: { backgroundPosition: ['0px 0px', '-2000px 0px'], transition: { repeat: Infinity, duration: 8, ease: "linear" } } }} animate="animate" className="absolute inset-x-0 bottom-0 top-1/4 opacity-60"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'400\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'20\' y=\'100\' width=\'40\' height=\'100\' fill=\'%23334155\'/%3E%3Crect x=\'80\' y=\'60\' width=\'60\' height=\'140\' fill=\'%23334155\'/%3E%3Crect x=\'180\' y=\'120\' width=\'30\' height=\'80\' fill=\'%23334155\'/%3E%3Crect x=\'250\' y=\'40\' width=\'70\' height=\'160\' fill=\'%23334155\'/%3E%3C/svg%3E")', backgroundSize: '400px 200px', backgroundRepeat: 'repeat-x', backgroundPosition: 'bottom' }} />
        
        <div className="absolute bottom-0 w-full h-24 bg-[#0f172a] border-t-4 border-slate-600">
          <motion.div variants={{ animate: { backgroundPosition: ['0px 0px', '-100px 0px'], transition: { repeat: Infinity, duration: 0.5, ease: "linear" } } }} animate="animate" className="w-full h-2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mt-2" style={{ backgroundSize: '100px 100%' }} />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/90 pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ x: -800, scale: 0.9 }} animate={{ x: phase === 0 ? -300 : phase === 1 ? 0 : 800, scale: phase === 1 ? 1 : 0.9 }} transition={{ duration: phase === 1 ? 4 : 2, ease: "easeInOut" }} className="absolute bottom-24 flex items-center shadow-2xl drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] z-10">
            <div className="w-64 h-16 bg-slate-200 rounded-l-[40px] rounded-r-lg relative overflow-hidden border-b-4 border-slate-400">
              <div className="absolute top-4 left-16 right-4 h-6 bg-black rounded-sm flex gap-2 p-1">
                 {[...Array(6)].map((_, i) => <div key={i} className="h-full flex-1 bg-[#0ea5e9]/20 rounded-sm" />)}
              </div>
              <div className="absolute top-6 left-2 w-4 h-4 bg-yellow-300 rounded-full shadow-[0_0_20px_10px_rgba(253,224,71,0.6)]" />
              <div className="absolute bottom-2 left-0 right-0 h-2 bg-[#0ea5e9]" />
            </div>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-sky-500/50 text-sky-300 text-sm font-bold">
              TRAIN {vars.trainLen || vars.train1Len || 0}m | {vars.speedKm || vars.speed1 || 0}km/h
            </div>
          </motion.div>

          {isDual ? (
             <motion.div initial={{ x: 800, scale: 0.8 }} animate={{ x: phase === 0 ? 300 : phase === 1 ? 0 : -800, scale: phase === 1 ? 0.9 : 0.8 }} transition={{ duration: phase === 1 ? 4 : 2, ease: "easeInOut" }} className="absolute bottom-16 flex items-center shadow-2xl drop-shadow-[0_0_15px_rgba(244,63,94,0.5)] z-0">
               <div className="w-56 h-14 bg-slate-300 rounded-r-[40px] rounded-l-lg relative overflow-hidden border-b-4 border-slate-500">
                 <div className="absolute top-3 left-4 right-12 h-5 bg-black rounded-sm flex gap-2 p-1">
                    {[...Array(5)].map((_, i) => <div key={i} className="h-full flex-1 bg-rose-500/20 rounded-sm" />)}
                 </div>
                 <div className="absolute top-5 right-2 w-3 h-3 bg-red-400 rounded-full shadow-[0_0_20px_10px_rgba(248,113,113,0.6)]" />
                 <div className="absolute bottom-2 left-0 right-0 h-1.5 bg-rose-500" />
               </div>
               <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-black/60 backdrop-blur-md rounded border border-rose-500/50 text-rose-300 text-sm font-bold">
                 TRAIN 2 {vars.train2Len || 0}m | {vars.speed2 || 0}km/h
               </div>
             </motion.div>
          ) : (
            (vars.platformLen > 0) && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96 h-12 bg-slate-600 rounded-t-lg border-t-8 border-yellow-500 flex justify-center items-center shadow-xl">
                <div className="px-4 py-1 bg-black/50 rounded border border-white/20 text-white font-mono text-sm">
                  PLATFORM {vars.platformLen}m
                </div>
              </div>
            )
          )}
        </div>
        <OverlayData vars={vars} type="Train AI Video" color="blue" answerValue={answerValue} />
      </div>
    );
  }

  // ---------------------------------------------------------
  // 2. BOAT SCENE
  // ---------------------------------------------------------
  if (type.includes('boat')) {
    return (
      <div className="relative w-full h-[400px] bg-gradient-to-b from-sky-300 to-sky-700 rounded-2xl overflow-hidden shadow-2xl border border-sky-400">
        <motion.div variants={{ animate: { backgroundPosition: ['0px 0px', '2000px 0px'], transition: { repeat: Infinity, duration: 40, ease: "linear" } } }} animate="animate" className="absolute top-0 w-full h-40 opacity-80"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'400\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 100 Q80 70 120 100 Q150 80 180 110 Q210 90 250 120\' stroke=\'white\' stroke-width=\'40\' stroke-linecap=\'round\' fill=\'none\' opacity=\'0.8\'/%3E%3C/svg%3E")', backgroundSize: '400px 200px', backgroundRepeat: 'repeat-x' }} />
        <motion.div variants={{ animate: { backgroundPosition: ['0px 0px', '-1000px 0px'], transition: { repeat: Infinity, duration: 10, ease: "linear" } } }} animate="animate" className="absolute bottom-0 w-full h-48 bg-blue-600 opacity-90"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 20 Q50 0 100 20 T200 20\' stroke=\'%2360a5fa\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E")', backgroundSize: '200px 40px', backgroundRepeat: 'repeat' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ x: -800, y: 0 }} 
            animate={{ x: phase === 0 ? -300 : phase === 1 ? 0 : 800, y: [0, -10, 0, 10, 0] }} 
            transition={{ x: { duration: phase === 1 ? 5 : 2, ease: "easeInOut" }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }} 
            className="absolute bottom-32 flex items-center shadow-2xl z-10"
          >
            <div className="w-48 h-12 bg-white rounded-l-[60px] rounded-r-sm relative overflow-hidden shadow-lg border-b-4 border-slate-300">
               <div className="absolute top-2 left-16 w-16 h-6 bg-sky-900 rounded-t-xl opacity-80" />
               <div className="absolute bottom-2 left-0 right-0 h-2 bg-red-500" />
            </div>
            <motion.div animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ repeat: Infinity, duration: 0.5 }} className="absolute -bottom-4 -left-10 w-24 h-8 bg-white/60 blur-md rounded-full" />
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 bg-black/40 backdrop-blur-md rounded border border-white/50 text-white text-sm font-bold shadow-lg">
              BOAT {vars.speedBoat || 0}km/h | STREAM {vars.speedStream || 0}km/h
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent pointer-events-none" />
        <OverlayData vars={vars} type="Boat AI Video" color="sky" answerValue={answerValue} />
      </div>
    );
  }

  // ---------------------------------------------------------
  // 3. FINANCE / PERCENTAGE SCENE
  // ---------------------------------------------------------
  if (isFinance) {
    return (
      <div className="relative w-full h-[400px] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/30">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.1 }} />
        <div className="absolute inset-0 flex items-end">
          <svg className="w-full h-full" preserveAspectRatio="none">
             <motion.path 
               d="M 0 350 L 200 250 L 400 280 L 600 150 L 800 50" 
               stroke="#10b981" strokeWidth="4" fill="none" 
               initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} 
             />
             <motion.path 
               d="M 0 350 L 200 250 L 400 280 L 600 150 L 800 50 L 800 400 L 0 400 Z" 
               fill="url(#gradFinance)" opacity="0.2"
               initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ duration: 2, delay: 1 }}
             />
             <defs>
               <linearGradient id="gradFinance" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="#10b981" />
                 <stop offset="100%" stopColor="transparent" />
               </linearGradient>
             </defs>
          </svg>
        </div>
        <div className="absolute inset-0 flex justify-around items-end px-10 pb-10">
          {[120, 200, 160, 280, 210, 320].map((h, i) => (
             <motion.div key={i} initial={{ height: 0 }} animate={{ height: h }} transition={{ duration: 1, delay: i * 0.2 }} className="w-8 bg-emerald-500/80 rounded-t shadow-[0_0_15px_rgba(16,185,129,0.5)] relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-20 bg-emerald-400/50 -z-10" />
             </motion.div>
          ))}
        </div>
        <OverlayData vars={vars} type="Finance AI Video" color="emerald" answerValue={answerValue} />
      </div>
    );
  }

  // ---------------------------------------------------------
  // 4. PIPES SCENE
  // ---------------------------------------------------------
  if (isPipes) {
    return (
      <div className="relative w-full h-[400px] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30">
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-64 h-64 border-4 border-cyan-700/50 rounded-b-xl relative overflow-hidden bg-slate-800 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
              <motion.div 
                initial={{ y: '100%' }} 
                animate={{ y: phase === 0 ? '100%' : '20%' }} 
                transition={{ duration: 4, ease: "easeInOut" }} 
                className="absolute inset-x-0 bottom-0 top-0 bg-cyan-500/60 shadow-[0_0_40px_rgba(6,182,212,0.5)]"
              >
                 <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="w-[200%] h-4 bg-cyan-400/80 rounded-t-[50%]" />
              </motion.div>
           </div>
           <div className="absolute top-10 left-10 w-48 h-8 bg-slate-700 rounded-r border-y-2 border-r-2 border-slate-500 shadow-lg flex items-center justify-end pr-2">
              <motion.div animate={{ opacity: phase === 1 ? [0.5, 1, 0.5] : 0 }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-4 h-16 bg-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.8)] absolute -right-2 top-4 rounded-b-full" />
           </div>
        </div>
        <OverlayData vars={vars} type="Pipes AI Video" color="cyan" answerValue={answerValue} />
      </div>
    );
  }

  // ---------------------------------------------------------
  // 5. GEOMETRY SCENE
  // ---------------------------------------------------------
  if (isGeometry) {
    return (
      <div className="relative w-full h-[400px] bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-fuchsia-500/30 flex items-center justify-center" style={{ perspective: '800px' }}>
         <motion.div 
           animate={{ rotateX: [0, 360], rotateY: [0, 360] }} 
           transition={{ repeat: Infinity, duration: 10, ease: "linear" }} 
           className="w-48 h-48 relative"
           style={{ transformStyle: 'preserve-3d' }}
         >
            <div className="absolute inset-0 border-2 border-fuchsia-500/80 shadow-[0_0_20px_rgba(217,70,239,0.5)] bg-fuchsia-500/10" style={{ transform: 'translateZ(96px)' }} />
            <div className="absolute inset-0 border-2 border-fuchsia-500/80 shadow-[0_0_20px_rgba(217,70,239,0.5)] bg-fuchsia-500/10" style={{ transform: 'translateZ(-96px)' }} />
            <div className="absolute inset-0 border-2 border-fuchsia-500/80 shadow-[0_0_20px_rgba(217,70,239,0.5)] bg-fuchsia-500/10" style={{ transform: 'rotateY(90deg) translateZ(96px)' }} />
            <div className="absolute inset-0 border-2 border-fuchsia-500/80 shadow-[0_0_20px_rgba(217,70,239,0.5)] bg-fuchsia-500/10" style={{ transform: 'rotateY(90deg) translateZ(-96px)' }} />
            <div className="absolute inset-0 border-2 border-fuchsia-500/80 shadow-[0_0_20px_rgba(217,70,239,0.5)] bg-fuchsia-500/10" style={{ transform: 'rotateX(90deg) translateZ(96px)' }} />
            <div className="absolute inset-0 border-2 border-fuchsia-500/80 shadow-[0_0_20px_rgba(217,70,239,0.5)] bg-fuchsia-500/10" style={{ transform: 'rotateX(90deg) translateZ(-96px)' }} />
         </motion.div>
         <OverlayData vars={vars} type="Geometry AI Video" color="fuchsia" answerValue={answerValue} />
      </div>
    );
  }

  // ---------------------------------------------------------
  // 6. CODING / LOGICAL SCENE
  // ---------------------------------------------------------
  if (isCoding) {
    return (
      <div className="relative w-full h-[400px] bg-black rounded-2xl overflow-hidden shadow-2xl border border-green-500/30">
        <div className="absolute inset-0 overflow-hidden opacity-50 font-mono text-green-500 text-xs tracking-widest break-all px-4 py-2">
           {[...Array(20)].map((_, i) => (
             <motion.div key={i} animate={{ y: ['-100%', '100%'] }} transition={{ repeat: Infinity, duration: 5 + Math.random() * 5, ease: "linear", delay: Math.random() * 5 }} className="inline-block w-8 opacity-70">
                10101100<br/>01101011<br/>11100010<br/>10101011<br/>00101011
             </motion.div>
           ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
           <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="px-8 py-4 bg-green-900/40 border-2 border-green-500 text-green-400 font-mono text-2xl font-bold shadow-[0_0_40px_rgba(34,197,94,0.4)] backdrop-blur-sm rounded">
             DECRYPTING...
           </motion.div>
        </div>
        <OverlayData vars={vars} type="Logic AI Video" color="green" answerValue={answerValue} />
      </div>
    );
  }

  // ---------------------------------------------------------
  // 7A. DIRECTION SENSE (Road Moving)
  // ---------------------------------------------------------
  if (type === 'direction-sense') {
    return (
      <div className="relative w-full h-[400px] bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900 to-slate-950" />
        <div className="absolute top-[30%] left-0 right-0 h-1 bg-emerald-900 shadow-[0_0_15px_#064e3b]" />
        
        {/* Perspective Road Container */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[70%]" style={{ perspective: '800px' }}>
           <div className="w-full h-full bg-slate-800 border-x-4 border-slate-500" style={{ transform: 'rotateX(60deg)', transformOrigin: 'top center' }}>
              <motion.div 
                 animate={{ backgroundPosition: ['0px 0px', '0px 200px'] }} 
                 transition={{ repeat: Infinity, duration: 0.5, ease: 'linear' }}
                 className="w-full h-full"
                 style={{ 
                   backgroundImage: 'linear-gradient(to bottom, transparent 50%, #facc15 50%)', 
                   backgroundSize: '10px 100px',
                   backgroundRepeat: 'repeat-y',
                   backgroundPositionX: 'center'
                 }}
              />
           </div>
        </div>

        {/* Car / Object */}
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 w-12 h-20 bg-rose-500 rounded-lg shadow-2xl border-2 border-rose-300">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-900 rounded-t-lg flex gap-1 justify-center p-1">
             <div className="w-2 h-2 bg-yellow-200 rounded-full shadow-[0_0_10px_#fef08a]" />
             <div className="w-2 h-2 bg-yellow-200 rounded-full shadow-[0_0_10px_#fef08a]" />
          </div>
        </motion.div>
        
        <OverlayData vars={vars} type="Direction Road AI Video" color="slate" answerValue={answerValue} />
      </div>
    );
  }

  // ---------------------------------------------------------
  // 7B. SEATING ARRANGEMENT (Seat View)
  // ---------------------------------------------------------
  if (type === 'seating-arrangement') {
    return (
      <div className="relative w-full h-[400px] bg-[#1e1b4b] rounded-2xl overflow-hidden shadow-2xl border border-indigo-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-indigo-950 to-black pointer-events-none" />
        
        <div className="absolute inset-0 flex items-center justify-center">
           {/* Table */}
           <div className="relative w-48 h-48 rounded-full bg-amber-900/80 border-4 border-amber-700 shadow-[0_0_30px_rgba(180,83,9,0.5)] z-10 flex items-center justify-center">
             <div className="w-32 h-32 rounded-full border-2 border-dashed border-amber-600/50" />
           </div>

           {/* Chairs (Top, Bottom, Left, Right) */}
           {[
             { top: '10%', left: '50%' }, // Top
             { top: '90%', left: '50%' }, // Bottom
             { top: '50%', left: '10%' }, // Left
             { top: '50%', left: '90%' }  // Right
           ].map((pos, i) => (
             <motion.div 
               key={i}
               animate={{ scale: [1, 1.1, 1] }} 
               transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
               className="absolute w-12 h-12 bg-indigo-600 rounded-lg shadow-xl border-2 border-indigo-400 z-20 flex items-center justify-center"
               style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
             >
                <div className="w-6 h-6 bg-indigo-300 rounded-full" />
             </motion.div>
           ))}
        </div>
        <OverlayData vars={vars} type="Seating View AI Video" color="indigo" answerValue={answerValue} />
      </div>
    );
  }

  // ---------------------------------------------------------
  // 7C. BLOOD RELATIONS (Person Family Tree)
  // ---------------------------------------------------------
  if (type === 'blood-relations') {
    return (
      <div className="relative w-full h-[400px] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-teal-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/40 to-slate-900 pointer-events-none" />
        
        <div className="absolute inset-0 flex items-center justify-center">
           <svg className="absolute inset-0 w-full h-full pointer-events-none">
             {/* Lines connecting the tree */}
             <motion.path d="M 400 120 L 400 180 L 250 180 L 250 250" fill="transparent" stroke="#14b8a6" strokeWidth="3" strokeDasharray="5 5" animate={{ strokeDashoffset: [0, 20] }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} />
             <motion.path d="M 400 180 L 550 180 L 550 250" fill="transparent" stroke="#14b8a6" strokeWidth="3" strokeDasharray="5 5" animate={{ strokeDashoffset: [0, 20] }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} />
           </svg>

           {/* Parent Node */}
           <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-[80px] left-1/2 -translate-x-1/2 w-16 h-16 bg-teal-800 rounded-full border-2 border-teal-400 flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.6)]">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
           </motion.div>

           {/* Child Node 1 */}
           <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="absolute top-[250px] left-[250px] -translate-x-1/2 w-14 h-14 bg-emerald-800 rounded-full border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.6)]">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
           </motion.div>

           {/* Child Node 2 */}
           <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} className="absolute top-[250px] left-[550px] -translate-x-1/2 w-14 h-14 bg-cyan-800 rounded-full border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.6)]">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#67e8f9" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
           </motion.div>
        </div>
        <OverlayData vars={vars} type="Blood Relation Person AI Video" color="teal" answerValue={answerValue} />
      </div>
    );
  }

  // ---------------------------------------------------------
  // 8. CLOCK SCENE
  // ---------------------------------------------------------
  if (isClock) {
    return (
      <div className="relative w-full h-[400px] bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-amber-500/30">
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border-4 border-amber-600/50 bg-slate-900 shadow-[0_0_50px_rgba(217,119,6,0.3)] relative flex items-center justify-center">
               <div className="absolute inset-2 border-2 border-dashed border-amber-700/30 rounded-full" />
               <div className="w-4 h-4 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,1)] z-10" />
               <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} className="absolute w-2 h-20 bg-amber-600 rounded-full origin-bottom" style={{ bottom: '50%' }} />
               <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} className="absolute w-1.5 h-28 bg-amber-400 rounded-full origin-bottom" style={{ bottom: '50%' }} />
               <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="absolute w-0.5 h-32 bg-rose-500 rounded-full origin-bottom" style={{ bottom: '50%' }} />
               {[...Array(12)].map((_, i) => (
                 <div key={i} className="absolute w-full h-full flex justify-center" style={{ transform: `rotate(${i * 30}deg)` }}>
                    <div className="w-1.5 h-4 bg-amber-700 mt-2" />
                 </div>
               ))}
            </div>
         </div>
         <OverlayData vars={vars} type="Clock AI Video" color="amber" answerValue={answerValue} />
      </div>
    );
  }

  // ---------------------------------------------------------
  // 9. GENERIC / MATH / NUMBER SYSTEM SCENE
  // ---------------------------------------------------------
  return (
    <div className="relative w-full h-[400px] bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-indigo-500/30">
      <motion.div 
        variants={{ animate: { backgroundPosition: ['0px 0px', '0px 100px'], transition: { repeat: Infinity, duration: 2, ease: "linear" } } }} 
        animate="animate" 
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '50px 50px', transform: 'perspective(500px) rotateX(60deg) scale(2)', transformOrigin: 'top' }}
      />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: -100, opacity: [0, 1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 4 + Math.random() * 4, delay: Math.random() * 5, ease: "linear" }}
            className="absolute text-indigo-400/40 font-mono font-bold text-2xl"
            style={{ left: `${Math.random() * 100}%` }}
          >
            {Math.floor(Math.random() * 9999)}
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.8, 1, 0.8] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-64 h-64 rounded-full border border-indigo-500/30 bg-indigo-500/5 flex items-center justify-center backdrop-blur-sm shadow-[0_0_50px_rgba(79,70,229,0.2)]"
        >
          <div className="text-center">
            <div className="text-indigo-400 text-sm tracking-widest uppercase font-bold mb-2">Analyzing</div>
            <div className="text-white text-3xl font-mono font-bold">DATA</div>
          </div>
        </motion.div>
      </div>
      <OverlayData vars={vars} type="Math AI Video" color="indigo" answerValue={answerValue} />
    </div>
  );
}

// ---------------------------------------------------------
// REUSABLE HUD OVERLAY
// ---------------------------------------------------------
function OverlayData({ vars, type, color, answerValue }: { vars: any, type: string, color: string, answerValue?: string }) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-600/20 border-blue-500/50 text-blue-300 bg-blue-400',
    sky: 'bg-sky-600/20 border-sky-500/50 text-sky-100 bg-sky-400',
    indigo: 'bg-indigo-600/20 border-indigo-500/50 text-indigo-300 bg-indigo-400',
    emerald: 'bg-emerald-600/20 border-emerald-500/50 text-emerald-300 bg-emerald-400',
    cyan: 'bg-cyan-600/20 border-cyan-500/50 text-cyan-300 bg-cyan-400',
    fuchsia: 'bg-fuchsia-600/20 border-fuchsia-500/50 text-fuchsia-300 bg-fuchsia-400',
    green: 'bg-green-600/20 border-green-500/50 text-green-300 bg-green-400',
    rose: 'bg-rose-600/20 border-rose-500/50 text-rose-300 bg-rose-400',
    amber: 'bg-amber-600/20 border-amber-500/50 text-amber-300 bg-amber-400'
  };
  const c = colorMap[color] || colorMap.blue;
  const classes = c.split(' ');
  
  // Block common answer keys just in case
  const blocklist = ['answer', 'sum', 'result', 'total', 'difference', 'product'];

  return (
    <>
      <div className="absolute top-6 right-6 flex flex-col gap-3 z-20">
        {Object.entries(vars).map(([key, value]: [string, any], idx) => {
          if (answerValue && String(value).trim() === String(answerValue).trim()) return null;
          if (blocklist.includes(key.toLowerCase())) return null;
          const label = key.replace(/([A-Z])/g, ' $1').toUpperCase();
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-lg flex items-center justify-between gap-4 shadow-lg"
            >
              <span className="text-xs text-slate-400 font-bold tracking-wider">{label}</span>
              <span className="text-lg text-white font-mono">{value}</span>
            </motion.div>
          );
        })}
      </div>
      <div className="absolute top-6 left-6 z-20">
        <div className={`px-3 py-1.5 ${classes[0]} backdrop-blur-md border ${classes[1]} rounded-full flex items-center gap-2 shadow-lg`}>
          <div className={`w-2 h-2 rounded-full ${classes[3]} animate-pulse`} />
          <span className={`text-xs ${classes[2]} font-bold tracking-widest uppercase`}>{type}</span>
        </div>
      </div>
    </>
  );
}
