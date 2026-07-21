'use client';

import React from 'react';
import { GameStateProvider, useGameState } from '@/context/GameStateContext';
import { LanguageProvider } from '@/context/LanguageContext';

const ThemeApplier: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, largeText, colorBlindMode } = useGameState();

  const colorBlindClass = 
    colorBlindMode === 'protanopia' ? 'cb-protanopia' :
    colorBlindMode === 'deuteranopia' ? 'cb-deuteranopia' :
    colorBlindMode === 'tritanopia' ? 'cb-tritanopia' : '';

  const sizeClass = largeText ? 'text-lg md:text-xl font-large' : 'text-sm md:text-base';

  return (
    <div className={`light ${colorBlindClass} ${sizeClass} min-h-screen bg-white text-slate-900 transition-colors duration-300 h-full flex flex-col`}>
      {children}
    </div>
  );
};

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <GameStateProvider>
      <LanguageProvider>
        <ThemeApplier>{children}</ThemeApplier>
      </LanguageProvider>
    </GameStateProvider>
  );
};
