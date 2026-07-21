'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mic, Send, Volume2, Sparkles, RefreshCw, Settings, User } from 'lucide-react';

interface AiTeacherProps {
  topicId: string;
}

export const AiTeacher: React.FC<AiTeacherProps> = ({ topicId }) => {
  const { 
    language, t, speakText, stopSpeaking, isSpeaking,
    voiceRate, setVoiceRate, voiceGender, setVoiceGender,
    speechLanguage, setSpeechLanguage 
  } = useLanguage();
  
  const whiteboardRef = useRef<HTMLCanvasElement | null>(null);

  // States
  const [activeTab, setActiveTab] = useState<'board' | 'chat'>('board');
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [showVoiceSettings, setShowVoiceSettings] = useState(false);

  // Initialize Dialogue
  useEffect(() => {
    stopSpeaking();
    setMessages([
      {
        sender: 'ai',
        text: `Hello! I am your Aptitude Sensei. Let's learn about ${topicId.replace('-', ' ')} today! Ask me any questions, or toggle Voice to hear my explanation.`
      }
    ]);
  }, [topicId, language]);

  useEffect(() => {
    if (activeTab === 'board') {
      setTimeout(drawWhiteboardFormula, 50);
    }
  }, [activeTab, topicId, language]);

  // Sketch a visual equation on the whiteboard canvas
  const drawWhiteboardFormula = () => {
    const canvas = whiteboardRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Grid Lines for math feel
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.lineWidth = 1;
    for (let i = 20; i < canvas.width; i += 20) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
    }
    for (let i = 20; i < canvas.height; i += 20) {
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
    }

    // Formulas
    ctx.fillStyle = '#2563eb'; // Blue header
    ctx.font = 'bold 16px Courier New';
    
    if (topicId === 'train-problems') {
      ctx.fillText('Relative Speed:', 20, 40);
      ctx.fillStyle = '#334155'; // Dark slate text
      ctx.font = '20px Courier New';
      ctx.fillText('S_rel = S_1 + S_2 (Opposite)', 30, 80);
      ctx.fillText('S_rel = |S_1 - S_2| (Same)', 30, 110);
      ctx.fillStyle = '#059669'; // Emerald
      ctx.font = '14px Courier New';
      ctx.fillText('Distance = Length_1 + Length_2', 30, 150);
    } else if (topicId === 'boats-streams') {
      ctx.fillText('Boats and Currents:', 20, 40);
      ctx.fillStyle = '#334155';
      ctx.font = '20px Courier New';
      ctx.fillText('Downstream: D = B + S', 30, 80);
      ctx.fillText('Upstream:   U = B - S', 30, 110);
      ctx.fillStyle = '#059669';
      ctx.font = '14px Courier New';
      ctx.fillText('Boat in still: B = (D + U)/2', 30, 150);
    } else if (topicId === 'pipes-cisterns') {
      ctx.fillText('Pipes & Cisterns:', 20, 40);
      ctx.fillStyle = '#334155';
      ctx.font = '20px Courier New';
      ctx.fillText('Rate: 1/T_net = 1/A + 1/B', 30, 80);
      ctx.fillText('Leakage: 1/T_net = 1/A - 1/C', 30, 110);
      ctx.fillStyle = '#059669';
      ctx.font = '14px Courier New';
      ctx.fillText('Work Done = Rate * Time', 30, 150);
    } else if (topicId === 'probability') {
      ctx.fillText('Probability Theory:', 20, 40);
      ctx.fillStyle = '#334155';
      ctx.font = '20px Courier New';
      ctx.fillText('P(E) = n(E) / n(S)', 30, 80);
      ctx.fillText('P(E\') = 1 - P(E)', 30, 110);
      ctx.fillStyle = '#059669';
      ctx.font = '14px Courier New';
      ctx.fillText('0 <= P(E) <= 1', 30, 150);
    } else if (topicId === 'geometry-3d') {
      ctx.fillText('3D Solids Volumes:', 20, 40);
      ctx.fillStyle = '#334155';
      ctx.font = '20px Courier New';
      ctx.fillText('Cube: V = a³', 30, 80);
      ctx.fillText('Cylinder: V = πr²h', 30, 110);
      ctx.fillText('Cone: V = 1/3 * πr²h', 30, 140);
    } else {
      ctx.fillText('Whiteboard Classroom:', 20, 40);
      ctx.fillStyle = '#334155';
      ctx.font = '20px Courier New';
      ctx.fillText('Aptitude Core Formula', 30, 90);
      ctx.fillStyle = '#059669';
      ctx.fillText('Step-by-step learning', 30, 130);
    }
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMsg = inputText.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInputText('');

    // Generate AI response
    setTimeout(() => {
      let aiText = '';
      const query = userMsg.toLowerCase();
      
      const isTamil = query.includes('tamil') || query.includes('தமிழ்') || language === 'ta';
      const isHindi = query.includes('hindi') || query.includes('हिंदी') || language === 'hi';

      if (isTamil) {
        if (topicId === 'number-system') {
          if (query.includes('prime') || query.includes('பகா')) {
            aiText = `பகா எண்கள் (Prime Numbers) என்பவை 1 மற்றும் அதே எண்ணால் மட்டுமே வகுபடும் எண்கள் ஆகும். எ.கா: 2, 3, 5, 7, 11... 2 மட்டுமே இரட்டைப்படை பகா எண் ஆகும்.`;
          } else if (query.includes('vedic') || query.includes('shortcut') || query.includes('குறுக்குவழி')) {
            aiText = `வேத கணித குறுக்குவழி: 5-இல் முடியும் எண்களை வர்க்கப்படுத்த, கடைசி இரு இலக்கங்கள் 25 ஆகும். முதல் இலக்கத்தை அதன் அடுத்த எண்ணால் பெருக்கவும். எ.கா: 65x65 = (6x7) || 25 = 4225.`;
          } else if (query.includes('divisibility') || query.includes('வகுபடும்')) {
            aiText = `வகுபடும் விதிகள்: 3-ஆல் வகுபட இலக்கங்களின் கூடுதல் 3-ஆல் வகுபட வேண்டும். 11-ஆல் வகுபட ஒற்றை மற்றும் இரட்டை இட இலக்க கூடுதலின் வேறுபாடு 0 அல்லது 11-இன் மடங்காக இருக்க வேண்டும்.`;
          } else {
            aiText = `வணக்கம்! எண் முறை (Number System) பாடத்தில் உங்களுக்கு என்ன சந்தேகம்? காரணிகள் (Factors), வகுபடும் தன்மைகள் (Divisibility rules) அல்லது மீதி தேற்றம் (Remainder Theorem) பற்றி கேட்கலாம்.`;
          }
        } else if (topicId === 'train-problems') {
          aiText = `ரயில் கணக்குகள் (Train Problems): சார்பு வேகம் (Relative Speed) என்பது எதிரெதிர் திசையில் கூட்டப்படும் (S1 + S2), ஒரே திசையில் கழிக்கப்படும் (|S1 - S2|). கிமீ/மணி என்பதை மீட்டர்/விநாடியாக மாற்ற 5/18 ஆல் பெருக்கவும்.`;
        } else {
          aiText = `வணக்கம்! இந்த பாடத்தைப் பற்றி உங்களுக்கு என்ன விளக்கம் வேண்டும்? கேள்விகளைக் கேளுங்கள், நான் விளக்குகிறேன்.`;
        }
      } else if (isHindi) {
        if (topicId === 'number-system') {
          if (query.includes('prime') || query.includes('अभाज्य')) {
            aiText = `अभाज्य संख्याएँ (Prime Numbers) वे संख्याएँ हैं जो केवल 1 और स्वयं से विभाजित होती हैं। जैसे: 2, 3, 5, 7, 11... 2 एकमात्र सम अभाज्य संख्या है।`;
          } else if (query.includes('vedic') || query.includes('शॉर्टकट')) {
            aiText = `वैदिक गणित शॉर्टकट: 5 पर समाप्त होने वाली संख्याओं का वर्ग करने के लिए, अंतिम दो अंक हमेशा 25 होंगे। दहाई के अंक को उसकी अगली संख्या से गुणा करें। जैसे: 65x65 = (6x7) || 25 = 4225।`;
          } else if (query.includes('divisibility') || query.includes('विभाज्य')) {
            aiText = `विभाज्यता नियम: 3 की विभाज्यता के लिए अंकों का योग 3 से विभाज्य होना चाहिए। 11 के लिए विषम और सम स्थानों के अंकों के योग का अंतर 0 या 11 होना चाहिए।`;
          } else {
            aiText = `नमस्ते! संख्या प्रणाली (Number System) में आपका क्या प्रश्न है? आप गुणनखंडों (Factors), विभाज्यता नियमों या शेषफल प्रमेय के बारे में पूछ सकते हैं।`;
          }
        } else if (topicId === 'train-problems') {
          aiText = `ट्रेन संबंधी प्रश्न: सापेक्ष गति (Relative Speed) विपरीत दिशा में जुड़ती है (S1 + S2) और समान दिशा में घटती है (|S1 - S2|)। किमी/घंटा को मीटर/सेकंड में बदलने के लिए 5/18 से गुणा करें।`;
        } else {
          aiText = `नमस्ते! इस विषय के बारे में आप क्या जानना चाहते हैं? कृपया अपना प्रश्न पूछें।`;
        }
      } else {
        // English responses
        if (topicId === 'number-system') {
          if (query.includes('prime')) {
            aiText = `Prime numbers are integers greater than 1 that have only two factors: 1 and themselves (e.g. 2, 3, 5, 7, 11). Note that 2 is the only EVEN prime number. All other primes > 3 are of the form 6k ± 1.`;
          } else if (query.includes('vedic') || query.includes('shortcut') || query.includes('trick')) {
            aiText = `Vedic Square Hack: To square any number ending in 5 (e.g. 75), the result ends in 25. Multiply the first digit (7) by its successor (7 + 1 = 8) -> 7 × 8 = 56. Result: 5625!`;
          } else if (query.includes('divisibility') || query.includes('rule')) {
            aiText = `Divisibility of 3/9: Sum of digits must be divisible by 3/9. Divisibility of 11: Absolute difference of sum of odd and even positioned digits must be 0 or a multiple of 11.`;
          } else if (query.includes('remainder')) {
            aiText = `To find remainders of large powers (e.g., 2^33 / 9), express the base close to the divisor: 2^33 = 8^11. Since 8 = -1 (mod 9), we get (-1)^11 = -1 = 8 (mod 9). Remainder is 8.`;
          } else if (query.includes('digital root')) {
            aiText = `Digital Root is the single digit sum of a number. Sum digits continuously until a single digit remains. Shortcut: cast out any 9s from the digits.`;
          } else {
            aiText = `I can help you with factors count, Legendre's trailing zeros formula, modular arithmetic, indices, surds, and logs. Ask a specific math question!`;
          }
        } else if (topicId === 'train-problems') {
          if (query.includes('relative') || query.includes('speed')) {
            aiText = `Relative Speed: When two objects move in opposite directions, add their speeds (S1 + S2). When moving in the same direction, subtract them (|S1 - S2|).`;
          } else if (query.includes('convert') || query.includes('unit') || query.includes('km/h')) {
            aiText = `Unit Conversion: To convert km/h to m/s, multiply by 5/18 (e.g. 72 km/h × 5/18 = 20 m/s). To convert m/s to km/h, multiply by 18/5.`;
          } else {
            aiText = `In Train problems, remember that distance is the sum of lengths of the train and the object crossed (platform, bridge, or another train). For poles or people, object length is 0.`;
          }
        } else {
          aiText = `Ask me anything about formulas, hints for practicing questions, or step-by-step shortcuts for ${topicId.replace('-', ' ')}.`;
        }
      }

      setMessages(prev => [...prev, { sender: 'ai', text: aiText }]);
      if (autoSpeak) {
        speakText(aiText);
      }
    }, 800);
  };

  // Web Speech STT Recognition (with browser support check)
  const startVoiceInput = () => {
    if (typeof window === 'undefined') return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech Recognition is not supported by your browser. Try Chrome.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language === 'hi' ? 'hi-IN' : language === 'ta' ? 'ta-IN' : 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const speechToText = event.results[0][0].transcript;
      setInputText(speechToText);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Tab Switcher */}
      <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setActiveTab('board')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'board'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          Chalkboard
        </button>
        <button
          onClick={() => setActiveTab('chat')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'chat'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          Doubt Chat
        </button>
      </div>

      {activeTab === 'board' ? (
        /* 1. Whiteboard Chalkboard */
        <div className="glass-panel p-4 rounded-xl flex flex-col gap-3 bg-white border border-slate-200 dark:border-slate-800 relative overflow-hidden w-full min-h-[300px]">
          <div className="flex justify-between items-center z-10 border-b border-slate-100 pb-2">
            <span className="text-xs font-bold text-blue-600 flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles size={13} /> Teacher Whiteboard
            </span>
            <button 
              onClick={drawWhiteboardFormula}
              className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors"
              title="Clean/Redraw Whiteboard"
            >
              <RefreshCw size={13} />
            </button>
          </div>
          <div className="relative flex-1 bg-slate-50 rounded-lg overflow-hidden border border-slate-200 min-h-[220px]">
            <canvas
              ref={whiteboardRef}
              width={350}
              height={200}
              className="w-full h-full block"
            />
          </div>
        </div>
      ) : (
        /* 2. Chat/Voice Teacher Panel */
        <div className="glass-panel p-4 rounded-xl flex flex-col gap-3 bg-white dark:bg-slate-900/10 border border-slate-200 dark:border-slate-800 w-full min-h-[360px]">
          {/* Header */}
          <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
              <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200">Aptitude Sensei</h4>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Voice Settings Gear Toggle */}
              <button
                onClick={() => setShowVoiceSettings(!showVoiceSettings)}
                className={`p-1.5 rounded-lg transition-all ${
                  showVoiceSettings ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400'
                }`}
                title="Voice Assistant Settings"
              >
                <Settings size={13} />
              </button>

              <button
                onClick={() => {
                  if (isSpeaking) stopSpeaking();
                  else speakText(messages[messages.length - 1]?.text || '');
                }}
                className={`p-1.5 rounded-lg transition-all ${
                  isSpeaking 
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400'
                }`}
                title={isSpeaking ? 'Mute' : 'Play Voice'}
              >
                <Volume2 size={13} />
              </button>
            </div>
          </div>

          {/* Voice Settings Panel */}
          {showVoiceSettings && (
            <div className="bg-slate-50 dark:bg-black/20 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-[10px] flex flex-col gap-2.5">
              {/* Voice Accent Selector */}
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Voice Language</span>
                <select
                  value={speechLanguage}
                  onChange={e => setSpeechLanguage(e.target.value as any)}
                  className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 text-[10px] px-2 py-0.5 rounded text-slate-800 dark:text-white font-semibold focus:outline-none"
                >
                  <option value="en">English (en-US)</option>
                  <option value="ta">Tamil (தமிழ்)</option>
                  <option value="hi">Hindi (हिंदी)</option>
                  <option value="te">Telugu (తెలుగు)</option>
                  <option value="ml">Malayalam (മലയാളം)</option>
                  <option value="kn">Kannada (ಕನ್ನಡ)</option>
                  <option value="bn">Bengali (বাংলা)</option>
                  <option value="mr">Marathi (मराठी)</option>
                  <option value="gu">Gujarati (ગુજરાતી)</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Voice Gender</span>
                <div className="flex bg-slate-100 dark:bg-slate-950 p-0.5 rounded border border-slate-200 dark:border-slate-850">
                  <button
                    onClick={() => setVoiceGender('female')}
                    className={`px-2 py-0.5 rounded font-semibold ${
                      voiceGender === 'female' ? 'bg-blue-600 text-white' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    Female
                  </button>
                  <button
                    onClick={() => setVoiceGender('male')}
                    className={`px-2 py-0.5 rounded font-semibold ${
                      voiceGender === 'male' ? 'bg-blue-600 text-white' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    Male
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Speech Rate</span>
                <div className="flex bg-slate-100 dark:bg-slate-950 p-0.5 rounded border border-slate-200 dark:border-slate-850">
                  <button
                    onClick={() => setVoiceRate(0.8)}
                    className={`px-2 py-0.5 rounded font-semibold ${
                      voiceRate === 0.8 ? 'bg-blue-600 text-white' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    Slow
                  </button>
                  <button
                    onClick={() => setVoiceRate(1.0)}
                    className={`px-2 py-0.5 rounded font-semibold ${
                      voiceRate === 1.0 ? 'bg-blue-600 text-white' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    Normal
                  </button>
                  <button
                    onClick={() => setVoiceRate(1.25)}
                    className={`px-2 py-0.5 rounded font-semibold ${
                      voiceRate === 1.25 ? 'bg-blue-600 text-white' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    Fast
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Auto Speak Replies</span>
                <input
                  type="checkbox"
                  checked={autoSpeak}
                  onChange={e => setAutoSpeak(e.target.checked)}
                  className="w-3.5 h-3.5 accent-blue-600 rounded cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* Chat log */}
          <div className="flex-1 overflow-y-auto h-[240px] flex flex-col gap-2 p-1.5 rounded bg-slate-50 dark:bg-black/20 border border-slate-150 dark:border-slate-850 scrollbar-thin">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-lg text-xs max-w-[90%] break-words leading-relaxed ${
                  m.sender === 'ai'
                    ? 'bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-850 dark:text-slate-200 self-start'
                    : 'bg-blue-600 text-white self-end shadow-sm'
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Action doubt input bar */}
          <div className="flex gap-1.5 items-center mt-1">
            <button
              onClick={startVoiceInput}
              className={`p-2 rounded-lg shrink-0 transition-all ${
                isListening 
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white border border-slate-200 dark:border-slate-700'
              }`}
              title="Ask via Voice"
            >
              <Mic size={14} />
            </button>
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
              placeholder={t('doubtPlaceholder')}
              className="flex-1 min-w-0 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-lg px-2.5 py-1.5 text-xs text-slate-850 dark:text-white focus:outline-none focus:border-blue-600"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shrink-0 transition-all cursor-pointer"
            >
              <Send size={13} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
