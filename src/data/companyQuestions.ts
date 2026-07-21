export interface CompanyQuestion {
  id: string;
  company: string;
  topicId: string;
  questionText: { [lang: string]: string };
  options: { [lang: string]: string[] };
  correctAnswer: string;
  explanation: { [lang: string]: string };
}

export const COMPANY_QUESTIONS: CompanyQuestion[] = [
  {
    id: 'tcs-train-1',
    company: 'TCS',
    topicId: 'train-problems',
    questionText: {
      en: '[TCS NQT] Two trains of equal lengths take 10 seconds and 15 seconds respectively to cross a telegraph post. If the length of each train is 120m, in what time will they cross each other traveling in opposite directions?',
      ta: '[TCS NQT] சம நீளமுள்ள இரு ரயில்கள் தந்தி கம்பத்தை கடக்க முறையே 10 மற்றும் 15 வினாடிகள் எடுக்கின்றன. ரயில்களின் நீளம் 120மீ எனில், எதிர் திசையில் செல்லும்போது அவை ஒன்றை ஒன்று கடக்க ஆகும் நேரம் என்ன?',
      hi: '[TCS NQT] समान लंबाई की दो ट्रेनें एक टेलीग्राफ पोस्ट को पार करने में क्रमशः 10 और 15 सेकंड का समय लेती हैं। यदि प्रत्येक ट्रेन की लंबाई 120 मीटर है, तो विपरीत दिशाओं में चलते समय वे एक-दूसरे को कितने समय में पार करेंगी?'
    },
    options: {
      en: ['12 seconds', '12.5 seconds', '13 seconds', '14 seconds'],
      ta: ['12 வினாடிகள்', '12.5 வினாடிகள்', '13 வினாடிகள்', '14 வினாடிகள்'],
      hi: ['12 सेकंड', '12.5 सेकंड', '13 सेकंड', '14 सेकंड']
    },
    correctAnswer: '0', // 12 seconds
    explanation: {
      en: 'Speed of Train 1 = 120/10 = 12 m/s. Speed of Train 2 = 120/15 = 8 m/s. Relative Speed in opposite directions = 12 + 8 = 20 m/s. Total distance to cover = 120 + 120 = 240m. Time = 240 / 20 = 12 seconds.',
      ta: 'ரயில் 1 வேகம் = 120/10 = 12 மீ/வி. ரயில் 2 வேகம் = 120/15 = 8 மீ/வி. சார்பு வேகம் = 12 + 8 = 20 மீ/வி. மொத்த தூரம் = 120 + 120 = 240மீ. நேரம் = 240 / 20 = 12 வினாடிகள்.',
      hi: 'ट्रेन 1 की गति = 120/10 = 12 मी/से। ट्रेन 2 की गति = 120/15 = 8 मी/से। विपरीत दिशाओं में सापेक्ष गति = 12 + 8 = 20 मी/से। कुल दूरी = 120 + 120 = 240 मी। समय = 240 / 20 = 12 सेकंड।'
    }
  },
  {
    id: 'zoho-boat-1',
    company: 'Zoho',
    topicId: 'boats-streams',
    questionText: {
      en: '[Zoho Advanced] A man can row downstream at 18 km/hr and upstream at 12 km/hr. Find the speed of the stream.',
      ta: '[Zoho Advanced] ஒரு மனிதன் நீரோட்ட திசையில் 18 கி.மீ/மணி வேகத்திலும், எதிர் திசையில் 12 கி.மீ/மணி வேகத்திலும் படகோட்ட முடியும். நீரோட்ட வேகத்தைக் காண்க.',
      hi: '[Zoho Advanced] एक व्यक्ति धारा के अनुकूल 18 किमी/घंटा और धारा के प्रतिकूल 12 किमी/घंटा की गति से नाव चला सकता है। धारा की गति ज्ञात कीजिए।'
    },
    options: {
      en: ['2 km/hr', '2.5 km/hr', '3 km/hr', '4 km/hr'],
      ta: ['2 கி.மீ/மணி', '2.5 கி.மீ/மணி', '3 கி.மீ/மணி', '4 கி.மீ/மணி'],
      hi: ['2 किमी/घंटा', '2.5 किमी/घंटा', '3 किमी/घंटा', '4 किमी/घंटा']
    },
    correctAnswer: '2', // 3 km/hr
    explanation: {
      en: 'Speed of stream = (Downstream Speed - Upstream Speed) / 2 = (18 - 12) / 2 = 6 / 2 = 3 km/hr.',
      ta: 'நீரோட்ட வேகம் = (D - U) / 2 = (18 - 12) / 2 = 6 / 2 = 3 கி.மீ/மணி.',
      hi: 'धारा की गति = (अनुप्रवाह गति - उर्ध्वप्रवाह गति) / 2 = (18 - 12) / 2 = 6 / 2 = 3 किमी/घंटा।'
    }
  },
  {
    id: 'amazon-geometry-1',
    company: 'Amazon',
    topicId: 'geometry-3d',
    questionText: {
      en: '[Amazon Coding] 64 small identical cubes are put together to form a large solid cube. How many small cubes have zero faces painted if the outer faces of the large cube are painted red?',
      ta: '[Amazon Coding] 64 சிறிய ஒத்த கனசதுரங்கள் ஒன்றாகச் சேர்க்கப்பட்டு ஒரு பெரிய கனசதுரம் உருவாக்கப்படுகிறது. பெரிய கனசதுரத்தின் வெளிப்பக்கங்கள் சிவப்பாக பூசப்பட்டால், எத்தனை சிறிய கனசதுரங்கள் வண்ணம் பூசப்படாமல் இருக்கும்?',
      hi: '[Amazon Coding] 64 छोटे समान घनों को मिलाकर एक बड़ा ठोस घन बनाया जाता है। यदि बड़े घन के बाहरी फलकों को लाल रंग से रंगा गया है, तो कितने छोटे घनों के किसी भी फलक पर रंग नहीं लगा होगा?'
    },
    options: {
      en: ['8 cubes', '16 cubes', '27 cubes', '0 cubes'],
      ta: ['8 கனசதுரங்கள்', '16 கனசதுரங்கள்', '27 கனசதுரங்கள்', '0 கனசதுரங்கள்'],
      hi: ['8 घन', '16 घन', '27 घन', '0 घन']
    },
    correctAnswer: '0', // 8 cubes = (n-2)^3 = (4-2)^3 = 8
    explanation: {
      en: 'Number of cubes per side is n = cuberoot(64) = 4. Cubes with 0 faces painted = (n - 2)³ = (4 - 2)³ = 2³ = 8.',
      ta: 'பக்கவாட்டு கனசதுரங்களின் எண்ணிக்கை n = cuberoot(64) = 4. வண்ணம் பூசப்படாத கனசதுரங்கள் = (n - 2)³ = (4 - 2)³ = 8.',
      hi: 'प्रति भुजा घनों की संख्या n = cuberoot(64) = 4 है। 0 फलक रंगे हुए घन = (n - 2)³ = (4 - 2)³ = 2³ = 8।'
    }
  }
];
