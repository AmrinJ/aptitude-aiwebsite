'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

export interface Achievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
  unlockedAt: string;
}

export interface SessionStats {
  solvedCount: number;
  correctCount: number;
  totalTimeSpent: number; // in seconds
  speedHistory: number[]; // response time in seconds
  accuracyHistory: number[]; // percentage correct
  weakTopics: string[];
  strongTopics: string[];
}

export type PrepMode = 'general' | 'banking' | 'it';
export type ColorBlindMode = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';

interface GameStateContextType {
  xp: number;
  coins: number;
  streak: number;
  unlockedTopics: string[];
  completedQuizzes: Record<string, number>; // topicId -> maxScore
  prepMode: PrepMode;
  achievements: Achievement[];
  stats: SessionStats;
  theme: 'light' | 'dark';
  largeText: boolean;
  colorBlindMode: ColorBlindMode;
  addXp: (amount: number) => void;
  addCoins: (amount: number) => void;
  unlockTopic: (topicId: string) => void;
  completeQuiz: (topicId: string, scorePercent: number) => void;
  setPrepMode: (mode: PrepMode) => void;
  toggleTheme: () => void;
  setLargeText: (enabled: boolean) => void;
  setColorBlindMode: (mode: ColorBlindMode) => void;
  recordQuestionAttempt: (topicId: string, isCorrect: boolean, timeSeconds: number) => void;
  resetProgress: () => void;
  unlockAllTopics: () => void;
}

const defaultStats: SessionStats = {
  solvedCount: 0,
  correctCount: 0,
  totalTimeSpent: 0,
  speedHistory: [],
  accuracyHistory: [],
  weakTopics: [],
  strongTopics: []
};

const GameStateContext = createContext<GameStateContextType | undefined>(undefined);

export const GameStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  
  const [xp, setXp] = useState(0);
  const [coins, setCoins] = useState(0);
  const [streak, setStreak] = useState(1);
  const [unlockedTopics, setUnlockedTopics] = useState<string[]>(['number-system', 'train-problems']);
  const [completedQuizzes, setCompletedQuizzes] = useState<Record<string, number>>({});
  const [prepMode, setPrepModeState] = useState<PrepMode>('general');
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [stats, setStats] = useState<SessionStats>(defaultStats);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [largeText, setLargeTextState] = useState(false);
  const [colorBlindMode, setColorBlindModeState] = useState<ColorBlindMode>('normal');

  // Sync state to backend
  const syncState = (partialState: any) => {
    if (user) {
      fetch('/api/gamestate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(partialState)
      }).catch(err => console.error('Sync error:', err));
    }
  };

  // Load from MongoDB when user logs in
  useEffect(() => {
    if (user) {
      fetch('/api/gamestate')
        .then(res => res.json())
        .then(data => {
          if (data.state) {
            setXp(data.state.xp || 0);
            setCoins(data.state.coins || 0);
            setStreak(data.state.streak || 1);
            setPrepModeState(data.state.prepMode || 'general');
            setUnlockedTopics(data.state.unlockedTopics?.length ? data.state.unlockedTopics : ['number-system', 'train-problems']);
            setCompletedQuizzes(data.state.completedQuizzes || {});
            setAchievements(data.state.achievements || []);
            setStats(data.state.stats || defaultStats);
          }
        });
    }
  }, [user]);

  const addXp = (amount: number) => {
    setXp(prev => {
      const next = prev + amount;
      syncState({ xp: next });
      checkAchievements(next, coins, unlockedTopics.length);
      return next;
    });
  };

  const addCoins = (amount: number) => {
    setCoins(prev => {
      const next = prev + amount;
      syncState({ coins: next });
      checkAchievements(xp, next, unlockedTopics.length);
      return next;
    });
  };

  const unlockTopic = (topicId: string) => {
    setUnlockedTopics(prev => {
      if (prev.includes(topicId)) return prev;
      const next = [...prev, topicId];
      syncState({ unlockedTopics: next });
      return next;
    });
  };

  const completeQuiz = (topicId: string, scorePercent: number) => {
    setCompletedQuizzes(prev => {
      const next = { ...prev, [topicId]: Math.max(prev[topicId] || 0, scorePercent) };
      syncState({ completedQuizzes: next });
      
      if (scorePercent >= 70) {
        const flowList = [
          'number-system', 'simplification', 'percentage', 'profit-loss',
          'simple-interest', 'compound-interest', 'average', 'train-problems',
          'boats-streams', 'pipes-cisterns', 'probability', 'geometry-3d',
          'coding-decoding', 'blood-relations', 'direction-sense', 'seating-arrangement',
          'syllogism', 'clock-problems', 'cube-dice'
        ];
        const currentIndex = flowList.indexOf(topicId);
        if (currentIndex !== -1 && currentIndex < flowList.length - 1) {
          const nextTopicId = flowList[currentIndex + 1];
          unlockTopic(nextTopicId);
        }
      }
      return next;
    });
    addXp(Math.round(scorePercent * 1.5));
    addCoins(Math.round(scorePercent / 10));
  };

  const setPrepMode = (mode: PrepMode) => {
    setPrepModeState(mode);
    syncState({ prepMode: mode });
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  const setLargeText = (enabled: boolean) => {
    setLargeTextState(enabled);
  };

  const setColorBlindMode = (mode: ColorBlindMode) => {
    setColorBlindModeState(mode);
  };

  const recordQuestionAttempt = (topicId: string, isCorrect: boolean, timeSeconds: number) => {
    setStats(prev => {
      const nextSolved = prev.solvedCount + 1;
      const nextCorrect = prev.correctCount + (isCorrect ? 1 : 0);
      const nextTime = prev.totalTimeSpent + timeSeconds;
      
      const newSpeedHistory = [...prev.speedHistory, timeSeconds].slice(-20);
      const accuracy = Math.round((nextCorrect / nextSolved) * 100);
      const newAccuracyHistory = [...prev.accuracyHistory, accuracy].slice(-20);

      const currentWeak = new Set(prev.weakTopics);
      const currentStrong = new Set(prev.strongTopics);

      if (isCorrect && timeSeconds < 15) {
        currentStrong.add(topicId);
        currentWeak.delete(topicId);
      } else if (!isCorrect || timeSeconds > 45) {
        currentWeak.add(topicId);
        currentStrong.delete(topicId);
      }

      const nextStats = {
        solvedCount: nextSolved,
        correctCount: nextCorrect,
        totalTimeSpent: nextTime,
        speedHistory: newSpeedHistory,
        accuracyHistory: newAccuracyHistory,
        weakTopics: Array.from(currentWeak).slice(0, 5),
        strongTopics: Array.from(currentStrong).slice(0, 5)
      };

      syncState({ stats: nextStats });
      return nextStats;
    });
  };

  const resetProgress = () => {
    setXp(0);
    setCoins(0);
    setStreak(1);
    setUnlockedTopics(['number-system', 'train-problems']);
    setCompletedQuizzes({});
    setAchievements([]);
    setStats(defaultStats);
    
    syncState({
      xp: 0, coins: 0, streak: 1, unlockedTopics: ['number-system', 'train-problems'],
      completedQuizzes: {}, achievements: [], stats: defaultStats
    });
  };

  const unlockAllTopics = () => {
    const all = [
      'number-system', 'simplification', 'percentage', 'profit-loss',
      'simple-interest', 'compound-interest', 'average', 'train-problems',
      'boats-streams', 'pipes-cisterns', 'probability', 'geometry-3d',
      'coding-decoding', 'blood-relations', 'direction-sense', 'seating-arrangement',
      'syllogism', 'clock-problems', 'cube-dice'
    ];
    setUnlockedTopics(all);
    syncState({ unlockedTopics: all });
  };

  const checkAchievements = (currentXp: number, currentCoins: number, unlockedCount: number) => {
    const list = [...achievements];
    const triggerBadge = (id: string, title: string, desc: string, icon: string) => {
      if (!list.some(a => a.id === id)) {
        list.push({ id, title, desc, icon, unlockedAt: new Date().toLocaleDateString() });
      }
    };

    if (currentXp >= 150) triggerBadge('xp-novice', 'Aptitude Starter', 'Gain 150 XP on the platform', '⚡');
    if (currentXp >= 500) triggerBadge('xp-master', 'Aptitude Wizard', 'Gain 500 XP on the platform', '🎓');
    if (currentCoins >= 20) triggerBadge('coin-collector', 'Coin Hoarder', 'Earn 20 coins through quizzes', '🪙');
    if (unlockedCount >= 5) triggerBadge('explorer', 'Topic Explorer', 'Unlock 5 or more distinct subjects', '🗺️');

    if (list.length !== achievements.length) {
      setAchievements(list);
      syncState({ achievements: list });
    }
  };

  return (
    <GameStateContext.Provider value={{
      xp, coins, streak, unlockedTopics, completedQuizzes, prepMode, achievements, stats, theme, largeText, colorBlindMode,
      addXp, addCoins, unlockTopic, completeQuiz, setPrepMode, toggleTheme, setLargeText, setColorBlindMode,
      recordQuestionAttempt, resetProgress, unlockAllTopics
    }}>
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
};
