"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Verified YouTube IDs that allow embedding
const VIDEO_MAP: Record<string, string> = {
  'train': 'WJ_p-tEw3nI',       // Nordland Line Norway Train Cab Ride (Very stable)
  'train-dual': '8PvsbsNKguQ',  // Shinkansen / Japan high speed
  'boat': 'j_f4-2fG81Y',        // Speedboat
  'boat-river': 'o_C5u7QYgS0',  // River boat
  'speed': '5Peo-ivmupE',       // Tokyo Night Drive 4K
  'interest': '7z_86D2F8w8',    // Coins
  'work': 'Y8JFSd3q5iA',        // Time lapse
  'default': 'jfKfPfyJRdk',     // Lofi girl (always live/embeddable fallback)
};

interface MathVideoVisualizerProps {
  params: any;
}

export default function MathVideoVisualizer({ params }: MathVideoVisualizerProps) {
  const [mounted, setMounted] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Delay showing the data overlay slightly for a dramatic entrance
    const timer = setTimeout(() => setShowData(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <div className="w-full h-full bg-slate-900 animate-pulse rounded-2xl" />;

  const videoId = VIDEO_MAP[params.type] || VIDEO_MAP['default'];
  const variables = params.variables || {};

  return (
    <div className="relative w-full h-[400px] bg-black rounded-2xl overflow-hidden shadow-2xl group border border-slate-800">
      
      {/* YouTube Background Video Player */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-1000">
        <iframe
          className="w-[300%] h-[300%] -ml-[100%] -mt-[100%] pointer-events-none" 
          /* The 300% trick hides YouTube controls and edges */
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
          allow="autoplay; encrypted-media"
          style={{ border: 'none' }}
        />
      </div>

      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

      {/* Live Data Overlay HUD */}
      <AnimatePresence>
        {showData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4"
          >
            {Object.entries(variables).map(([key, value]: [string, any], index) => {
              // Format labels beautifully (e.g. trainLen -> Train Length)
              const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
              
              // Guess units based on key name
              let unit = '';
              if (key.toLowerCase().includes('speed')) unit = ' km/h';
              else if (key.toLowerCase().includes('len')) unit = ' m';
              else if (key.toLowerCase().includes('time')) unit = ' s';
              else if (key.toLowerCase().includes('rate')) unit = ' %';
              else if (key.toLowerCase().includes('amount') || key.toLowerCase().includes('principal')) unit = ' ₹';

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.5, type: "spring" }}
                  className="px-5 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
                >
                  <div className="text-xs text-blue-300 font-semibold uppercase tracking-wider mb-1">
                    {label}
                  </div>
                  <div className="text-2xl font-bold text-white flex items-baseline gap-1">
                    {value}
                    <span className="text-sm text-slate-300 font-medium">{unit}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Left Badge */}
      <div className="absolute top-4 left-4">
        <div className="px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-sm border border-blue-400/50 flex items-center gap-2 shadow-lg">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-bold text-white uppercase tracking-wider shadow-sm">
            Live Simulation
          </span>
        </div>
      </div>
    </div>
  );
}
