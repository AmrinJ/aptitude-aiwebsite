'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft, ArrowRight, RefreshCw, Bookmark } from 'lucide-react';

interface FlashCardData {
  term: { [lang: string]: string };
  def: { [lang: string]: string };
  example: { [lang: string]: string };
}

import { topicFlashcards, defaultFlashcards } from '@/data/flashcards';

interface FlashCardsProps {
  topicId?: string;
}

export const FlashCards: React.FC<FlashCardsProps> = ({ topicId = 'number-system' }) => {
  const { language } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const CARDS = topicFlashcards[topicId] || topicFlashcards['number-system'] || defaultFlashcards;

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIdx(prev => (prev < CARDS.length - 1 ? prev + 1 : 0));
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIdx(prev => (prev > 0 ? prev - 1 : CARDS.length - 1));
    }, 150);
  };

  const card = CARDS[currentIdx] || defaultFlashcards[0];

  return (
    <div className="flex flex-col items-center gap-6 max-w-sm mx-auto">
      {/* 3D Flip Card Container */}
      <div 
        className="w-full h-56 cursor-pointer relative group"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: '1000px' }}
      >
        <div 
          className="w-full h-full relative transition-transform duration-500 transform-style-3d"
          style={{ 
            transform: isFlipped ? 'rotateY(180deg)' : 'none',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Front Side */}
          <div className="absolute inset-0 w-full h-full bg-indigo-950/80 border-2 border-indigo-500 rounded-2xl p-6 flex flex-col justify-between backface-hidden shadow-xl">
            <div className="flex justify-between items-center text-xs text-indigo-400 font-bold uppercase tracking-widest">
              <span>Card {currentIdx + 1} of {CARDS.length}</span>
              <Bookmark size={14} className="cursor-pointer hover:text-white" />
            </div>
            <div className="text-center">
              <h4 className="text-xl font-black text-white tracking-wide">
                {card.term[language] || card.term['en']}
              </h4>
              <p className="text-[10px] text-slate-400 mt-2 flex items-center justify-center gap-1">
                <RefreshCw size={10} /> Click to Flip and Reveal Definition
              </p>
            </div>
            <div className="text-[9px] text-slate-500 text-center uppercase tracking-widest font-semibold">
              Aptitude Core Definition
            </div>
          </div>

          {/* Back Side */}
          <div 
            className="absolute inset-0 w-full h-full bg-[#0d1527] border-2 border-emerald-500 rounded-2xl p-6 flex flex-col justify-between backface-hidden shadow-xl"
            style={{ 
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden'
            }}
          >
            <div className="flex justify-between items-center text-xs text-emerald-400 font-bold uppercase tracking-widest">
              <span>Definition</span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30">HACK</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                {card.def[language] || card.def['en']}
              </p>
              <p className="text-[11px] text-emerald-400 font-mono italic">
                {card.example[language] || card.example['en']}
              </p>
            </div>
            <div className="text-[9px] text-slate-500 text-center uppercase tracking-widest font-semibold">
              Click to Flip back
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-350 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all shadow-md"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md"
        >
          Flip Card
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-350 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all shadow-md"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
