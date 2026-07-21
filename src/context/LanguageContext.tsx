'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, TranslationKey } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, variables?: { [key: string]: string | number }) => string;
  speakText: (text: string) => void;
  stopSpeaking: () => void;
  isSpeaking: boolean;
  voiceRate: number;
  setVoiceRate: (rate: number) => void;
  voiceGender: 'male' | 'female';
  setVoiceGender: (gender: 'male' | 'female') => void;
  speechLanguage: Language;
  setSpeechLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const localeMap: Record<Language, string> = {
  en: 'en-US',
  ta: 'ta-IN',
  hi: 'hi-IN',
  te: 'te-IN',
  ml: 'ml-IN',
  kn: 'kn-IN',
  bn: 'bn-IN',
  mr: 'mr-IN',
  gu: 'gu-IN',
  pa: 'pa-IN',
  ur: 'ur-PK',
  or: 'or-IN',
  as: 'as-IN'
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceRate, setVoiceRate] = useState<number>(1.0);
  const [voiceGender, setVoiceGender] = useState<'male' | 'female'>('female');
  const [speechLanguage, setSpeechLanguage] = useState<Language>('en');
  const [voicesList, setVoicesList] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const savedLang = localStorage.getItem('aptitude_lang');
    if (savedLang) {
      setLanguageState(savedLang as Language);
      setSpeechLanguage(savedLang as Language);
    }
    const savedRate = localStorage.getItem('aptitude_voice_rate');
    if (savedRate) {
      setVoiceRate(Number(savedRate));
    }
    const savedGender = localStorage.getItem('aptitude_voice_gender');
    if (savedGender) {
      setVoiceGender(savedGender as 'male' | 'female');
    }
    const savedSpeechLang = localStorage.getItem('aptitude_speech_lang');
    if (savedSpeechLang) {
      setSpeechLanguage(savedSpeechLang as Language);
    }
  }, []);

  // Preload and monitor speech voices (async Chrome/Windows compatibility)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const loadVoices = () => {
      setVoicesList(window.speechSynthesis.getVoices());
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setSpeechLanguage(lang); // Sync speech language by default
    localStorage.setItem('aptitude_lang', lang);
    localStorage.setItem('aptitude_speech_lang', lang);
  };

  const updateSpeechLanguage = (lang: Language) => {
    setSpeechLanguage(lang);
    localStorage.setItem('aptitude_speech_lang', lang);
  };

  const updateVoiceRate = (rate: number) => {
    setVoiceRate(rate);
    localStorage.setItem('aptitude_voice_rate', String(rate));
  };

  const updateVoiceGender = (gender: 'male' | 'female') => {
    setVoiceGender(gender);
    localStorage.setItem('aptitude_voice_gender', gender);
  };

  const t = (key: TranslationKey, variables?: { [key: string]: string | number }): string => {
    const dictionary = translations[language] || translations['en'];
    let text = (dictionary as any)[key] || (translations['en'] as any)[key] || String(key);
    
    if (variables) {
      Object.entries(variables).forEach(([k, v]) => {
        text = text.replace(`{{${k}}}`, String(v));
      });
    }
    return text;
  };

  const speakText = (text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Stop any current speaking
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Auto-detect script character sets
    const hasTamil = /[\u0b80-\u0bff]/.test(text);
    const hasHindi = /[\u0900-\u097f]/.test(text);
    const hasTelugu = /[\u0c00-\u0c7f]/.test(text);
    const hasMalayalam = /[\u0d00-\u0d7f]/.test(text);
    const hasKannada = /[\u0c80-\u0cff]/.test(text);
    const hasBengali = /[\u0980-\u09ff]/.test(text);

    let targetLang = 'en-US';

    if (hasTamil) {
      targetLang = 'ta-IN';
    } else if (hasHindi) {
      targetLang = 'hi-IN';
    } else if (hasTelugu) {
      targetLang = 'te-IN';
    } else if (hasMalayalam) {
      targetLang = 'ml-IN';
    } else if (hasKannada) {
      targetLang = 'kn-IN';
    } else if (hasBengali) {
      targetLang = 'bn-IN';
    } else {
      // If the text contains only ASCII (Latin characters), use user speechLanguage option only if it is English.
      // This prevents the browser from reading English text in a regional language accent.
      if (speechLanguage === 'en') {
        targetLang = 'en-US';
      } else {
        // Fallback to English for purely Latin strings
        targetLang = 'en-US';
      }
    }

    utterance.lang = targetLang;
    utterance.rate = voiceRate; // Apply custom speed rate
    
    // Filter voices based on language locale and gender name heuristic
    const matchedVoices = voicesList.filter(v => v.lang.startsWith(targetLang) || v.lang.includes(targetLang));

    if (matchedVoices.length > 0) {
      // Attempt to select gender based on name strings
      let selectedVoice = matchedVoices.find(v => {
        const nameLower = v.name.toLowerCase();
        if (voiceGender === 'female') {
          return nameLower.includes('female') || nameLower.includes('zira') || nameLower.includes('hazel') || nameLower.includes('susan') || nameLower.includes('google') || nameLower.includes('natural');
        } else {
          return nameLower.includes('male') || nameLower.includes('david') || nameLower.includes('ravi') || nameLower.includes('mark') || nameLower.includes('guy');
        }
      });

      // Fallback to first matched voice
      if (!selectedVoice) {
        selectedVoice = matchedVoices[0];
      }

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, setLanguage, t, speakText, stopSpeaking, isSpeaking,
      voiceRate, setVoiceRate: updateVoiceRate, voiceGender, setVoiceGender: updateVoiceGender,
      speechLanguage, setSpeechLanguage: updateSpeechLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
