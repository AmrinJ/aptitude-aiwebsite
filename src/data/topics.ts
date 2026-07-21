import { topicContentDict } from './topicContentDict';
import { generateQuestionsForTopic } from './questionGenerator';

export interface Question {
  id: string;
  type: 'text' | 'drag-drop' | 'sequence' | 'clickable' | 'simulation' | 'three-d';
  questionText: { [lang: string]: string };
  options?: { [lang: string]: string[] };
  correctAnswer: string; // index or value
  dragItems?: { [lang: string]: string[] }; // For drag-drop
  correctSequence?: string[]; // For sequence arranging
  hint: { [lang: string]: string };
  solvingSteps: {
    title: { [lang: string]: string };
    desc: { [lang: string]: string };
    formula?: string;
  }[];
  visualParams?: any;
}

export interface Chapter {
  chapterIndex: number;
  id: string;
  title: { [lang: string]: string };
  subtitle: { [lang: string]: string };
  what: { [lang: string]: string };
  howItWorks: { [lang: string]: string };
  commonMistakes: { [lang: string]: string };
  tricks: { [lang: string]: string };
  visualType: 'none' | 'number-line' | 'vedic' | 'flashcards' | 'formula' | 'flowchart';
  questions?: Question[];
  inDepthTheory?: string;
}

export interface Topic {
  id: string;
  name: string;
  iconName: string;
  subject: 'quant' | 'logical';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estTime: string;
  prerequisites: string;
  simulationType?: 'train' | 'boat' | 'pipes' | 'probability' | 'geometry' | 'mirror-folding' | 'none';
  chapters: Chapter[];
  questions: Question[]; // Chapter 13 Topic Test uses these
}

const BASE_TOPICS: Topic[] = [
  {
    id: 'number-system',
    name: 'Number System',
    iconName: 'Hash',
    subject: 'quant',
    difficulty: 'Beginner',
    estTime: '2 hours',
    prerequisites: 'Basic Arithmetic',
    simulationType: 'none',
    questions: [
      {
        id: 'ns-t1',
        type: 'text',
        questionText: {
          en: 'What is the digital root of 987654321?',
          ta: '987654321 இன் இலக்கங்களின் கூடுதல் (Digital Root) என்ன?',
          hi: '987654321 का बीजांक (डिजिटल रूट) क्या है?'
        },
        options: {
          en: ['9', '1', '5', '0'],
          ta: ['9', '1', '5', '0'],
          hi: ['9', '1', '5', '0']
        },
        correctAnswer: '0', // 9
        hint: {
          en: 'Sum the digits. Alternatively, cast out 9s: any multiple of 9 has a digital root of 9.',
          ta: 'இலக்கங்களைக் கூட்டவும். 9-ஐத் தவிர்க்கலாம்: 9-இன் மடங்குகளுக்கு கூடுதல் எப்போதும் 9 ஆகும்.',
          hi: 'अंकों को जोड़ें। वैकल्पिक रूप से, 9 को हटा दें: 9 के किसी भी गुणज का डिजिटल रूट 9 होता है।'
        },
        solvingSteps: [
          {
            title: { en: 'Step 1: Sum all digits', ta: 'படி 1: அனைத்து இலக்கங்களையும் கூட்டவும்', hi: 'चरण 1: सभी अंकों को जोड़ें' },
            desc: { en: '9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45.', ta: '9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45.', hi: '9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45।' }
          },
          {
            title: { en: 'Step 2: Reduce to single digit', ta: 'படி 2: ஒற்றை இலக்கமாக சுருக்கவும்', hi: 'चरण 2: एकल अंक में बदलें' },
            desc: { en: '4 + 5 = 9. So digital root is 9.', ta: '4 + 5 = 9. எனவே கூடுதல் 9 ஆகும்.', hi: '4 + 5 = 9। इसलिए डिजिटल रूट 9 है।' }
          }
        ]
      }
    ],
    chapters: [
      {
        chapterIndex: 1,
        id: 'introduction',
        title: { en: 'Chapter 1: Introduction', ta: 'அத்தியாயம் 1: அறிமுகம்', hi: 'अध्याय 1: परिचय' },
        subtitle: { en: 'What is Number System & Why study it?', ta: 'எண் முறை என்றால் என்ன & ஏன் படிக்க வேண்டும்?', hi: 'संख्या प्रणाली क्या है और इसका अध्ययन क्यों करें?' },
        what: {
          en: 'A Number System is a mathematical system of writing to express numbers. It provides a unique representation of every number and defines the arithmetic operations on them.',
          ta: 'எண் முறை என்பது எண்களை எழுதுவதற்கான கணித அமைப்பாகும். இது ஒவ்வொரு எண்ணிற்கும் ஒரு தனித்துவமான பிரதிநிதித்துவத்தை வழங்குகிறது.',
          hi: 'संख्या प्रणाली संख्याओं को व्यक्त करने के लिए लिखने की एक गणितीय प्रणाली है। यह प्रत्येक संख्या का एक अनूठा प्रतिनिधित्व प्रदान करती है।'
        },
        howItWorks: {
          en: 'In competitive aptitude tests (SBI, IBPS PO, TCS NQT, Zoho placements), number system forms the foundation of all quantitative calculations. Knowing base properties makes calculations 10x faster.',
          ta: 'வங்கித் தேர்வுகள் மற்றும் ஐடி வேலைவாய்ப்புத் தேர்வுகளில், எண் முறை என்பது அனைத்து கணக்கீடுகளின் அடித்தளமாகும்.',
          hi: 'प्रतियोगी परीक्षाओं में संख्या प्रणाली सभी गणितीय गणनाओं की नींव बनाती है।'
        },
        commonMistakes: {
          en: 'Mistaking 1 as a prime number. Confusing rational numbers with integers.',
          ta: '1-ஐப் பகா எண் எனத் தவறாகக் கருதுதல். விகிதமுறு எண்களை முழு எண்களுடன் குழப்புதல்.',
          hi: '1 को अभाज्य संख्या समझना। परिमेय संख्याओं को पूर्णांकों के साथ भ्रमित करना।'
        },
        tricks: {
          en: 'Always analyze the unit digit cyclicity to solve powers instantly.',
          ta: 'அடுக்குகளின் மதிப்பை நொடிக் கணக்கில் தீர்க்க கடைசி இலக்க சுழற்சியைப் பயன்படுத்தவும்.',
          hi: 'घातों को तुरंत हल करने के लिए हमेशा इकाई अंक की चक्रीयता का विश्लेषण करें।'
        },
        visualType: 'none',
        inDepthTheory: topicContentDict['number-system'].inDepthTheory
      },
      {
        chapterIndex: 2,
        id: 'basic-concepts',
        title: { en: 'Chapter 2: Basic Concepts', ta: 'அத்தியாயம் 2: அடிப்படை கருத்துக்கள்', hi: 'अध्याय 2: बुनियादी अवधारणाएं' },
        subtitle: { en: 'The Core Building Blocks', ta: 'முக்கிய கட்டுமான தொகுதிகள்', hi: 'मुख्य घटक' },
        what: {
          en: 'Numbers represent values. Place values and face values are the core principles. Face value of 5 in 582 is 5, but place value is 500.',
          ta: 'இட மதிப்பு மற்றும் முக மதிப்பு ஆகியவை முக்கிய கோட்பாடுகளாகும். 582-இல் 5-இன் முக மதிப்பு 5, ஆனால் இட மதிப்பு 500.',
          hi: 'संख्याएं मानों का प्रतिनिधित्व करती हैं। स्थानीय मान और अंकित मान इसके मुख्य सिद्धांत हैं।'
        },
        howItWorks: {
          en: 'Write any number algebraically. A 3-digit number xyz can be written as 100x + 10y + z.',
          ta: 'ஒரு 3-இலக்க எண் xyz-ஐ 100x + 10y + z என எழுதலாம்.',
          hi: 'किसी भी 3-अंकीय संख्या xyz को 100x + 10y + z के रूप में लिखा जा सकता है।'
        },
        commonMistakes: {
          en: 'Swapping place value and face value definitions during exams.',
          ta: 'தேர்வுகளில் இட மதிப்பு மற்றும் முக மதிப்பை மாற்றி எழுதுதல்.',
          hi: 'परीक्षा के दौरान स्थानीय मान और अंकित मान की परिभाषाओं को आपस में बदलना।'
        },
        tricks: {
          en: 'Place value differences are always multiples of 9 (e.g. 10x+y - (10y+x) = 9(x-y)).',
          ta: 'இட மதிப்புகளின் வேறுபாடு எப்போதும் 9-இன் மடங்காகவே இருக்கும்.',
          hi: 'स्थानिक मानों का अंतर हमेशा 9 का गुणज होता है।'
        },
        visualType: 'flowchart',
        inDepthTheory: topicContentDict['number-system'].inDepthTheory
      },
      {
        chapterIndex: 3,
        id: 'types-of-numbers',
        title: { en: 'Chapter 3: Types of Numbers', ta: 'அத்தியாயம் 3: எண்களின் வகைகள்', hi: 'अध्याय 3: संख्याओं के प्रकार' },
        subtitle: { en: 'Real, Integer, Prime, Coprime & Twins', ta: 'மெய், முழு, பகா, சார்பகா & இரட்டைப் பகா எண்கள்', hi: 'वास्तविक, पूर्णांक, अभाज्य, सह-अभाज्य' },
        what: {
          en: 'Numbers are classified into Real, Imaginary, Rational, Irrational, Integers, Fractions, Natural, Prime, and Composite.',
          ta: 'எண்கள் மெய், கற்பனை, விகிதமுறு, விகிதமுறா, முழு எண்கள், பகா மற்றும் பகு எண்களாக வகைப்படுத்தப்படுகின்றன.',
          hi: 'संख्याओं को वास्तविक, काल्पनिक, परिमेय, अपरिमेय, पूर्णांक, प्राकृतिक और अभाज्य में वर्गीकृत किया गया है।'
        },
        howItWorks: {
          en: 'Drag the slider on our interactive number line below to see where each number category lands.',
          ta: 'கீழே உள்ள எண்கோட்டு சிமுலேட்டரை நகர்த்தி எண்களின் வகைகளை ஆராயுங்கள்.',
          hi: 'प्रत्येक संख्या श्रेणी को देखने के लिए नीचे दिए गए हमारे संख्या रेखा सिम्युलेटर का उपयोग करें।'
        },
        commonMistakes: {
          en: 'Assuming all odd numbers are prime. (e.g., 9 is odd but composite).',
          ta: 'அனைத்து ஒற்றை எண்களும் பகா எண்கள் என்று நினைப்பது தவறு (எ.கா: 9 பகு எண்).',
          hi: 'यह मान लेना कि सभी विषम संख्याएँ अभाज्य हैं। (जैसे, 9 विषम है लेकिन भाज्य है)।'
        },
        tricks: {
          en: '2 is the only EVEN prime number. All other prime numbers > 3 can be written in the form 6k ± 1.',
          ta: '2 மட்டுமே இரட்டைப் பகா எண். பிற அனைத்து பகா எண்களையும் 6k ± 1 வடிவில் எழுதலாம்.',
          hi: '2 एकमात्र सम अभाज्य संख्या है। 3 से बड़ी अन्य सभी अभाज्य संख्याओं को 6k ± 1 के रूप में लिखा जा सकता है।'
        },
        visualType: 'number-line'
      },
      {
        chapterIndex: 4,
        id: 'number-properties',
        title: { en: 'Chapter 4: Number Properties', ta: 'அத்தியாயம் 4: எண்களின் பண்புகள்', hi: 'अध्याय 4: संख्याओं के गुण' },
        subtitle: { en: 'Factors, Multiples & Trailing Zeros', ta: 'காரணிகள், மடங்குகள் & பூஜ்ஜியங்களின் எண்ணிக்கை', hi: 'गुणनखंड, गुणज और अनुगामी शून्य' },
        what: {
          en: 'Properties look at how numbers behave. Finding factors of N: express N = p^a * q^b * r^c. Total factors = (a+1)(b+1)(c+1).',
          ta: 'எண்களின் காரணிகளைக் காண காரணிப் படுத்தல் முறை: N = p^a * q^b. மொத்த காரணிகள் = (a+1)(b+1).',
          hi: 'गुणनखंडों की संख्या ज्ञात करना: N = p^a * q^b * r^c। कुल गुणनखंड = (a+1)(b+1)(c+1)।'
        },
        howItWorks: {
          en: 'Trailing zeros are formed by combinations of prime factors 2 and 5. The number of trailing zeros in N! is given by Legendre\'s Formula: [N/5] + [N/25] + [N/125]...',
          ta: 'கடைசி பூஜ்ஜியங்கள் 2 மற்றும் 5 ஆகியவற்றின் சேர்க்கையால் உருவாகின்றன. Legendre சூத்திரத்தைப் பயன்படுத்தவும்.',
          hi: 'अनुगामी शून्य अभाज्य गुणनखंडों 2 और 5 के संयोजनों से बनते हैं। N! में शून्य की संख्या लेजेंड्रे के सूत्र से ज्ञात होती है।'
        },
        commonMistakes: {
          en: 'Counting only factors of 5 and forgetting to add factors of 2 in complex products.',
          ta: 'பூஜ்ஜியங்களைக் கணக்கிடும்போது 5-ஐ மட்டும் கணக்கில் கொண்டு 2-ஐ மறந்துவிடுதல்.',
          hi: 'जटिल गुणनफलों में केवल 5 के गुणनखंडों की गणना करना और 2 के गुणनखंडों को भूल जाना।'
        },
        tricks: {
          en: 'To find factors quickly, resolve the number to prime powers first.',
          ta: 'காரணிகளை விரைவாகக் கண்டறிய எண்களை பகா அடுக்காக மாற்றவும்.',
          hi: 'गुणनखंड जल्दी खोजने के लिए, पहले संख्या को अभाज्य घातों में बदलें।'
        },
        visualType: 'none'
      },
      {
        chapterIndex: 5,
        id: 'rules',
        title: { en: 'Chapter 5: Divisibility Rules', ta: 'அத்தியாயம் 5: வகுபடும் தன்மைகள்', hi: 'अध्याय 5: विभाज्यता के नियम' },
        subtitle: { en: 'Rules for 2 to 20 & Modular Arithmetic', ta: '2 முதல் 20 வரையிலான வகுபடும் முறைகள்', hi: '2 से 20 के नियम और मापांक अंकगणित' },
        what: {
          en: 'Divisibility rules allow check if a number divides another without performing full division. e.g. Divisibility of 3: Sum of digits must be divisible by 3.',
          ta: 'ஒரு எண் மற்றொரு எண்ணால் வகுபடுமா என்பதை வகுக்காமலே அறியும் விதிகள். எ.கா: 3-ஆல் வகுபட இலக்கங்களின் கூடுதல் 3-ஆல் வகுபட வேண்டும்.',
          hi: 'विभाज्यता के नियम यह जांचने की अनुमति देते हैं कि कोई संख्या दूसरी संख्या से विभाजित होती है या नहीं।'
        },
        howItWorks: {
          en: 'Modular Arithmetic deals with remainders. $A \\equiv B \\pmod N$ means A and B leave the same remainder when divided by N.',
          ta: 'மட்டு கணிதம் (Modular Arithmetic) மீதிகளைக் கையாள்கிறது. A ≡ B (mod N).',
          hi: 'मापांक अंकगणित (Modular Arithmetic) शेषफल से संबंधित है।'
        },
        commonMistakes: {
          en: 'Using the divisibility rule of 4 (last 2 digits) for divisibility check of 8 (which needs last 3 digits).',
          ta: '8-ஆல் வகுபடுவதற்கு கடைசி 2 இலக்கங்களை மட்டும் சோதிப்பது தவறு (3 இலக்கங்கள் தேவை).',
          hi: '8 की विभाज्यता जांच के लिए 4 के विभाज्यता नियम (अंतिम 2 अंक) का उपयोग करना (जबकि इसके लिए अंतिम 3 अंक चाहिए)।'
        },
        tricks: {
          en: 'Divisibility of 11: Difference between sum of odd position digits and even position digits must be 0 or a multiple of 11.',
          ta: '11-ஆல் வகுபட: ஒற்றை மற்றும் இரட்டை இட இலக்கங்களின் கூடுதலின் வேறுபாடு 0 அல்லது 11-இன் மடங்காக இருக்க வேண்டும்.',
          hi: '11 की विभाज्यता: विषम और सम स्थानों के अंकों के योग का अंतर 0 या 11 का गुणज होना चाहिए।'
        },
        visualType: 'none'
      },
      {
        chapterIndex: 6,
        id: 'shortcuts',
        title: { en: 'Chapter 6: Vedic Math Shortcuts', ta: 'அத்தியாயம் 6: வேத கணித குறுக்குவழிகள்', hi: 'अध्याय 6: वैदिक गणित शॉर्टकट' },
        subtitle: { en: 'Double and Dot Hacks', ta: 'வேகக் கணக்கீட்டு முறைகள்', hi: 'गणना की गति बढ़ाने के गुर' },
        what: {
          en: 'Vedic mathematics shortcuts double your speed. Double-and-dot, Ekadhikena methods bypass long division and multiplication.',
          ta: 'வேத கணித சூத்திரங்கள் கணக்கிடும் வேகத்தை இருமடங்காக உயர்த்தும்.',
          hi: 'वैदिक गणित के शॉर्टकट आपकी गति को दोगुना कर देते हैं।'
        },
        howItWorks: {
          en: 'Review the comparison slides below to see the traditional steps next to the Vedic mental speed hacks.',
          ta: 'வேத கணித குறுக்குவழிகளை பாரம்பரிய முறைகளுடன் ஒப்பிட்டுப் பாருங்கள்.',
          hi: 'वैदिक मानसिक शॉर्टकट के बगल में पारंपरिक चरणों को देखने के लिए नीचे दिए गए तुलनात्मक बोर्ड का उपयोग करें।'
        },
        commonMistakes: {
          en: 'Applying short tricks without verifying if the prerequisite conditions are met (e.g., squaring tricks only work if numbers end in 5).',
          ta: 'நிபந்தனைகளைச் சரிபார்க்காமல் குறுக்குவழிகளைப் பயன்படுத்துவது பிழையைத் தரும்.',
          hi: 'शर्तों की पुष्टि किए बिना शॉर्टकट ट्रिक्स लागू करना (जैसे, वर्ग ट्रिक केवल तभी काम करती है जब संख्या 5 पर समाप्त हो)।'
        },
        tricks: {
          en: 'Vedic formulas work by splitting computations into independent digits.',
          ta: 'வேத சூத்திரங்கள் கணக்கீடுகளை எளிய பகுதிகளாகப் பிரித்து தீர்க்கின்றன.',
          hi: 'वैदिक सूत्र गणनाओं को स्वतंत्र अंकों में विभाजित करके कार्य करते हैं।'
        },
        visualType: 'vedic'
      },
      {
        chapterIndex: 7,
        id: 'examples',
        title: { en: 'Chapter 7: Worked Examples', ta: 'அத்தியாயம் 7: தீர்க்கப்பட்ட எடுத்துக்காட்டுகள்', hi: 'अध्याय 7: हल किए गए उदाहरण' },
        subtitle: { en: 'Step-by-step Visual Calculations', ta: 'படிபடியான கணக்கீட்டு விளக்கம்', hi: 'चरण-दर-चरण गणना' },
        what: {
          en: 'Worked examples solidify learning. We walk through remainder theorems, trailing zero limits, and prime check steps.',
          ta: 'தீர்க்கப்பட்ட எடுத்துக்காட்டுகள் கற்றலை வலுப்படுத்துகின்றன. மீதி தேற்றம் மற்றும் பூஜ்ஜியங்களை கணக்கிடும் வழிகளைப் பார்ப்போம்.',
          hi: 'हल किए गए उदाहरण सीख को मजबूत करते हैं। हम शेषफल प्रमेय और शून्यों की संख्या निकालने के प्रश्नों को हल करेंगे।'
        },
        howItWorks: {
          en: 'Example: Find the remainder of $2^{33} \\div 9$. Step 1: Write $2^{33}$ as $(2^3)^{11} = 8^{11}$. Step 2: $8 \\equiv -1 \\pmod 9$. Step 3: $(-1)^{11} = -1 \\equiv 8 \\pmod 9$. Remainder is 8.',
          ta: 'எடுத்துக்காட்டு: $2^{33} \\div 9$-இன் மீதியைக் காண்க. $2^{33} = (2^3)^{11} = 8^{11}$. $8 \\equiv -1 \\pmod 9$. $(-1)^{11} = -1 \\equiv 8$. விடை: 8.',
          hi: 'उदाहरण: $2^{33} \\div 9$ का शेषफल ज्ञात कीजिए। $2^{33} = (2^3)^{11} = 8^{11}$। $8 \\equiv -1 \\pmod 9$। $(-1)^{11} = -1 \\equiv 8$। शेषफल 8 है।'
        },
        commonMistakes: {
          en: 'Writing negative remainders as final answers without adding the divisor.',
          ta: 'எதிர்மறை மீதிகளை இறுதி விடையாக எழுதுவது தவறு. அதனுடன் வகுபடும் எண்ணைக் கூட்ட வேண்டும்.',
          hi: 'भाजक को जोड़े बिना नकारात्मक शेषफल को अंतिम उत्तर के रूप में लिखना।'
        },
        tricks: {
          en: 'Always search for bases close to the divisor (difference of +1 or -1) to simplify powers.',
          ta: 'அடுக்கைக் குறைக்க வகுக்கும் எண்ணிற்கு மிக நெருக்கமான மதிப்பை (+1 அல்லது -1 வேறுபாடு) கண்டறியவும்.',
          hi: 'घातों को सरल बनाने के लिए हमेशा भाजक के करीब (+1 या -1 का अंतर) वाली संख्या खोजें।'
        },
        visualType: 'none'
      },
      {
        chapterIndex: 8,
        id: 'practice',
        title: { en: 'Chapter 8: Practice Questions', ta: 'அத்தியாயம் 8: பயிற்சி வினாக்கள்', hi: 'अध्याय 8: अभ्यास प्रश्न' },
        subtitle: { en: 'Drills from Easy to Expert', ta: 'எளிய நிலை முதல் கடின நிலை வரை', hi: 'आसान से कठिन स्तर के प्रश्न' },
        what: {
          en: 'Practice makes perfect. Over 100+ questions classified by difficulty: Easy, Medium, Hard, and Expert.',
          ta: 'தொடர் பயிற்சி சிறந்த வெற்றியைத் தரும். எளிது, நடுத்தரம், கடினம் என வகைப்படுத்தப்பட்ட வினாக்கள்.',
          hi: 'लगातार अभ्यास सफलता की कुंजी है। कठिनाई स्तर के अनुसार वर्गीकृत प्रश्न।'
        },
        howItWorks: {
          en: 'Select your target category and test your skills. Press Hint if you get stuck.',
          ta: 'உங்களுக்குத் தேவையான பிரிவைத் தேர்ந்தெடுத்துப் பயிற்சி செய்யுங்கள். சந்தேகம் எனில் குறிப்பை (Hint) பார்க்கவும்.',
          hi: 'अपनी लक्षित श्रेणी चुनें और अपने कौशल का परीक्षण करें। अटक जाने पर हिंट बटन दबाएं।'
        },
        commonMistakes: {
          en: 'Solving without a timer. Speed is key in placement exams.',
          ta: 'நேரக் கட்டுப்பாடு இல்லாமல் கணக்கிடுவது. வேலைவாய்ப்பு தேர்வுகளில் வேகம் மிகவும் முக்கியம்.',
          hi: 'बिना टाइमर के प्रश्नों को हल करना। प्लेसमेंट परीक्षाओं में गति महत्वपूर्ण है।'
        },
        tricks: {
          en: 'Use option elimination: verify divisibility on the choices to skip solving entirely.',
          ta: 'விடைகளிலிருந்து தகுதியற்றவற்றை நீக்கும் முறையைப் பயன்படுத்தவும்.',
          hi: 'विकल्पों को हटाने की विधि का उपयोग करें: गणना से बचने के लिए विकल्पों की विभाज्यता की जांच करें।'
        },
        visualType: 'none'
      },
      {
        chapterIndex: 9,
        id: 'advanced-problems',
        title: { en: 'Chapter 9: Advanced Problems', ta: 'அத்தியாயம் 9: கடின வினாக்கள்', hi: 'अध्याय 9: उन्नत समस्याएं' },
        subtitle: { en: 'Indices, Surds & Logs', ta: 'அடுக்குக் குறி, முரடுகள் & மடக்கைகள்', hi: 'घातांक, करणी और लघुगणक' },
        what: {
          en: 'Advanced concepts include indices laws ($a^m \\times a^n = a^{m+n}$), surds simplification, and logarithm properties.',
          ta: 'அடுக்குக்குறி விதிகள் ($a^m \\times a^n = a^{m+n}$), மடக்கை விதிகள் மற்றும் முரடுகள் சுருக்குதல்.',
          hi: 'उन्नत अवधारणाओं में घातांक के नियम, करणी का सरलीकरण और लघुगणक के गुण शामिल हैं।'
        },
        howItWorks: {
          en: 'Solve logarithm equations: $\\log_b(xy) = \\log_b(x) + \\log_b(y)$. Surds conjugate multiplication eliminates roots from denominators.',
          ta: 'மடக்கை சமன்பாடுகளைத் தீர்த்தல்: $\\log(xy) = \\log(x) + \\log(y)$.',
          hi: 'लघुगणक समीकरणों को हल करें: $\\log_b(xy) = \\log_b(x) + \\log_b(y)$।'
        },
        commonMistakes: {
          en: 'Confusing $\\log(x+y)$ with $\\log(x) + \\log(y)$ (this is incorrect!).',
          ta: '$\\log(x+y)$ மற்றும் $\\log(x) + \\log(y)$ இரண்டையும் ஒன்றாகக் கருதுவது தவறு.',
          hi: '$\\log(x+y)$ को $\\log(x) + \\log(y)$ समझने की भूल (यह गलत है!)।'
        },
        tricks: {
          en: 'Express large bases as prime factor powers before applying log laws.',
          ta: 'மடக்கை விதிகளைப் பயன்படுத்துவதற்கு முன் பெரிய எண்களை பகா எண்களின் அடுக்காக மாற்றவும்.',
          hi: 'लॉग नियम लागू करने से पहले बड़ी संख्याओं को अभाज्य गुणनखंडों की घातों में बदलें।'
        },
        visualType: 'none'
      },
      {
        chapterIndex: 10,
        id: 'pyq',
        title: { en: 'Chapter 10: Previous Year Questions', ta: 'அத்தியாயம் 10: முந்தைய ஆண்டு வினாக்கள்', hi: 'अध्याय 10: पिछले वर्ष के प्रश्न' },
        subtitle: { en: 'CAT, CSAT & SSC Exam Paper Highlights', ta: 'CAT, CSAT & SSC தேர்வு வினாக்கள்', hi: 'कैट, सीसैट और एसएससी परीक्षाओं के प्रश्न' },
        what: {
          en: 'Real exam questions from previous years. Highlights trends in questions from competitive boards.',
          ta: 'முந்தைய ஆண்டுகளில் அரசுத் தேர்வுகளில் கேட்கப்பட்ட உண்மையான வினாக்கள்.',
          hi: 'पिछले वर्षों की परीक्षाओं के वास्तविक प्रश्न।'
        },
        howItWorks: {
          en: 'Solve classic questions: e.g. finding remainder when a 100-digit number is divided by 16.',
          ta: 'ஒரு 100-இலக்க எண்ணை 16-ஆல் வகுக்கும்போது கிடைக்கும் மீதியைக் காண்க.',
          hi: 'क्लासिक प्रश्नों को हल करें: जैसे जब 100-अंकीय संख्या को 16 से विभाजित किया जाता है तो शेषफल ज्ञात करना।'
        },
        commonMistakes: {
          en: 'Forgetting that competitive exams often merge multiple concepts (e.g. A.P. series with prime check).',
          ta: 'அரசுத் தேர்வுகள் பல கருத்துக்களை இணைத்துக் கேட்கும் என்பதை மறந்துவிடுதல்.',
          hi: 'यह भूल जाना कि प्रतियोगी परीक्षाओं में अक्सर कई अवधारणाओं को मिला दिया जाता है।'
        },
        tricks: {
          en: 'Always search for pattern repetitions. Modular cyclicity repeats every 4 or 6 steps.',
          ta: 'சுழற்சி முறைகளைக் கண்டறியுங்கள். மட்டு சுழற்சி பொதுவாக 4 அல்லது 6 படிகளுக்குப் பின் மீண்டும் வரும்.',
          hi: 'हमेशा पैटर्न की पुनरावृत्ति खोजें। मापांक चक्रीयता प्रत्येक 4 या 6 चरणों के बाद दोहराती है।'
        },
        visualType: 'none'
      },
      {
        chapterIndex: 11,
        id: 'company-questions',
        title: { en: 'Chapter 11: Company Placement Questions', ta: 'அத்தியாயம் 11: நிறுவன வேலைவாய்ப்பு வினாக்கள்', hi: 'अध्याय 11: कंपनी प्लेसमेंट प्रश्न' },
        subtitle: { en: 'TCS NQT, Zoho, Wipro & Amazon Models', ta: 'TCS, Zoho, Infosys மாதிரி வினாக்கள்', hi: 'TCS NQT, Zoho, Wipro और Amazon मॉडल' },
        what: {
          en: 'IT recruitment processes place high weightage on number patterns and modular arithmetic.',
          ta: 'மென்பொருள் நிறுவனங்களின் தேர்வுகள் எண் தொடர்கள் மற்றும் மட்டு கணிதத்திற்கு முக்கியத்துவம் தருகின்றன.',
          hi: 'आईटी कंपनियों की भर्ती परीक्षाओं में नंबर पैटर्न और मापांक अंकगणित पर अधिक जोर दिया जाता है।'
        },
        howItWorks: {
          en: 'Solve: TCS pattern questions, Wipro factor counts, and Zoho coding logic mockups.',
          ta: 'TCS, Wipro, Zoho நிறுவனங்களின் மாதிரி வினாக்களைத் தீர்த்துப் பழகுங்கள்.',
          hi: 'TCS पैटर्न के प्रश्न, विप्रो गुणनखंड गणना और जोहो कोडिंग लॉजिक मॉडल हल करें।'
        },
        commonMistakes: {
          en: 'Using slow methods. Coding placement rounds have strict sectional time limits.',
          ta: 'மெதுவான முறைகளைப் பயன்படுத்துவது. ஐடி தேர்வுகளில் கடுமையான நேரக் கட்டுப்பாடு இருக்கும்.',
          hi: 'धीमी विधियों का उपयोग करना। प्लेसमेंट परीक्षाओं में सख्त समय सीमा होती है।'
        },
        tricks: {
          en: 'Use digital roots to verify large multiplications in under 3 seconds.',
          ta: 'பெரிய பெருக்கல்களைச் சரிபார்க்க இலக்கங்களின் கூடுதல் (Digital Root) முறையைப் பயன்படுத்தவும்.',
          hi: '3 सेकंड से कम समय में बड़े गुणनफलों को सत्यापित करने के लिए डिजिटल रूट का उपयोग करें।'
        },
        visualType: 'none'
      },
      {
        chapterIndex: 12,
        id: 'bank-questions',
        title: { en: 'Chapter 12: Bank Questions', ta: 'அத்தியாயம் 12: வங்கித் தேர்வு வினாக்கள்', hi: 'अध्याय 12: बैंक परीक्षा प्रश्न' },
        subtitle: { en: 'SBI PO & IBPS Clerk Speed Drills', ta: 'SBI PO & IBPS கிளார்க் வேகப் பயிற்சிகள்', hi: 'एसबीआई पीओ और आईबीपीएस क्लर्क स्पीड ड्रिल' },
        what: {
          en: 'Banking exams focus on approximations and simplification speeds. You must solve 35 questions in 20 minutes.',
          ta: 'வங்கித் தேர்வுகள் சுருக்குதல் மற்றும் தோராய மதிப்புகளுக்கு முக்கியத்துவம் தருகின்றன.',
          hi: 'बैंक परीक्षाओं में सरलीकरण की गति पर ध्यान केंद्रित किया जाता है।'
        },
        howItWorks: {
          en: 'Drill: Solve 10 simplification questions sequentially. A countdown timer will tick in the practice area.',
          ta: 'வேகப் பயிற்சி: 10 வினாடிகளை டைமருடன் தீர்க்கவும்.',
          hi: 'स्पीड ड्रिल: टाइमर के साथ सरलीकरण के 10 प्रश्नों को हल करें।'
        },
        commonMistakes: {
          en: 'Solving exact calculations when approximation values are requested.',
          ta: 'தோராய மதிப்பு கேட்கப்படும்போது துல்லியமான கணக்கீடுகளைச் செய்து நேரத்தை வீணடித்தல்.',
          hi: 'अनुमानित मान पूछे जाने पर सटीक गणना करने में समय गंवाना।'
        },
        tricks: {
          en: 'Round decimal terms to nearest integers immediately before applying BODMAS rules.',
          ta: 'BODMAS விதிகளைப் பயன்படுத்துவதற்கு முன் தசமங்களை முழு எண்ணாக மாற்றவும்.',
          hi: 'BODMAS नियम लागू करने से पहले दशमलव पदों को तुरंत निकटतम पूर्णांकों में बदलें।'
        },
        visualType: 'none'
      },
      {
        chapterIndex: 13,
        id: 'topic-test',
        title: { en: 'Chapter 13: Topic Test', ta: 'அத்தியாயம் 13: பாடத் தேர்வு', hi: 'अध्याय 13: विषय परीक्षण' },
        subtitle: { en: 'Syllabus Quiz Gate', ta: 'பாடத்திட்ட தேர்வு நுழைவாயில்', hi: 'पाठ्यक्रम परीक्षण गेट' },
        what: {
          en: 'The ultimate checkpoint quiz. You must score at least 70% to unlock the next dashboard chapter on the tree.',
          ta: 'முக்கிய இறுதி வினாடி வினா. அடுத்த பாடத்தைத் திறக்க குறைந்தது 70% மதிப்பெண் பெற வேண்டும்.',
          hi: 'अंतिम परीक्षण क्विज़। अगले अध्याय को अनलॉक करने के लिए आपको कम से कम 70% स्कोर करना होगा।'
        },
        howItWorks: {
          en: 'Start the assessment. Timer is active. Check all results after finishing.',
          ta: 'தேர்வைத் தொடங்குங்கள். டைமர் இயங்கும். முடிந்ததும் முடிவுகளைச் சரிபார்க்கவும்.',
          hi: 'परीक्षण शुरू करें। टाइमर सक्रिय है। समाप्त होने के बाद परिणामों की जांच करें।'
        },
        commonMistakes: {
          en: 'Spending more than 2 minutes on a single hard question. Skip and move forward!',
          ta: 'ஒரே கடினமான கேள்வியில் 2 நிமிடங்களுக்கு மேல் செலவிடுவது. அதைத் தவிர்த்துவிட்டு முன்னேறுங்கள்!',
          hi: 'एक ही कठिन प्रश्न पर 2 मिनट से अधिक समय बिताना। उसे छोड़ें और आगे बढ़ें!'
        },
        tricks: {
          en: 'Pace yourself: 60 seconds per question maximum.',
          ta: 'நேர மேலாண்மை: ஒரு கேள்விக்கு அதிகபட்சம் 60 வினாடிகள் மட்டுமே.',
          hi: 'समय प्रबंधन: प्रति प्रश्न अधिकतम 60 सेकंड का समय लें।'
        },
        visualType: 'none'
      },
      {
        chapterIndex: 14,
        id: 'summary',
        title: { en: 'Chapter 14: Summary & Mind Map', ta: 'அத்தியாயம் 14: சுருக்கம் & மன வரைபடம்', hi: 'अध्याय 14: सारांश और माइंड मैप' },
        subtitle: { en: 'Visual Recap of Chapter Core', ta: 'பாடத்தின் முக்கிய புள்ளிகளின் சுருக்கம்', hi: 'अध्याय के मुख्य बिंदुओं का सारांश' },
        what: {
          en: 'A quick summary of everything learned in the Number System module.',
          ta: 'எண் முறை பாடத்தில் கற்ற அனைத்தின் விரைவான தொகுப்பு.',
          hi: 'संख्या प्रणाली मॉड्यूल में सीखी गई सभी चीज़ों का एक त्वरित सारांश।'
        },
        howItWorks: {
          en: 'Review the visual classification map detailing Prime, Composite, Integers, and Real divisions.',
          ta: 'பகா, பகு, முழு எண்களின் வகைப்பாட்டு வரைபடத்தை மீள்பார்வை செய்யவும்.',
          hi: 'अभाज्य, भाज्य, पूर्णांक और वास्तविक वर्गीकरण मानचित्र की समीक्षा करें।'
        },
        commonMistakes: {
          en: 'Skipping summary revisions before sitting for real placement exams.',
          ta: 'தேர்வுகளுக்குச் செல்லும் முன் சுருக்கப் பகுதிகளைப் படிக்காமல் தவிர்ப்பது.',
          hi: 'वास्तविक परीक्षाओं में बैठने से पहले सारांश दोहराना छोड़ देना।'
        },
        tricks: {
          en: 'Review mind maps weekly to lock definitions into long-term memory.',
          ta: 'மன வரைபடங்களை வாரந்தோறும் திருப்புதல் செய்வது நினைவாற்றலை அதிகரிக்கும்.',
          hi: 'लंबे समय तक याद रखने के लिए साप्ताहिक रूप से माइंड मैप्स की समीक्षा करें।'
        },
        visualType: 'none'
      },
      {
        chapterIndex: 15,
        id: 'formula-sheet',
        title: { en: 'Chapter 15: Formula Sheet', ta: 'அத்தியாயம் 15: சூத்திரத் தாள்', hi: 'अध्याय 15: सूत्र पत्रक' },
        subtitle: { en: 'Key Equations at a Glance', ta: 'முக்கிய சூத்திரங்கள் ஒரு பார்வையில்', hi: 'मुख्य सूत्र एक नज़र में' },
        what: {
          en: 'A collection of essential formulas from Number System: sum of first N natural numbers, divisibility tests, and factor indices.',
          ta: 'எண் முறையின் முக்கிய சூத்திரங்களின் தொகுப்பு: முதல் N எண்களின் கூடுதல், காரணி குறியீடுகள்.',
          hi: 'संख्या प्रणाली के आवश्यक सूत्रों का संग्रह।'
        },
        howItWorks: {
          en: 'Formula: Sum of first N natural numbers = $N(N+1)/2$. Sum of squares = $N(N+1)(2N+1)/6$. Sum of cubes = $[N(N+1)/2]^2$.',
          ta: 'சூத்திரம்: முதல் N எண்களின் கூடுதல் = $N(N+1)/2$. வர்க்கங்களின் கூடுதல் = $N(N+1)(2N+1)/6$.',
          hi: 'सूत्र: प्रथम N प्राकृतिक संख्याओं का योग = $N(N+1)/2$। वर्गों का योग = $N(N+1)(2N+1)/6$।'
        },
        commonMistakes: {
          en: 'Mixing up the denominator in sum of squares (should be 6) with sum of cubes (should be 4 when squared).',
          ta: 'வர்க்கங்களின் கூடுதல் சூத்திரத்தில் வகுக்கும் எண் 6-ஐ மாற்றி எழுதுதல்.',
          hi: 'वर्गों के योग के सूत्र में हर (जो 6 होना चाहिए) को भ्रमित करना।'
        },
        tricks: {
          en: 'Bookmark this sheet to load equations instantly before practice sessions.',
          ta: 'இந்த சூத்திர பக்கத்தை புக்மார்க் செய்து எளிதாகப் படியுங்கள்.',
          hi: 'अभ्यास सत्र से पहले सूत्रों को तुरंत देखने के लिए इस पत्रक को बुकमार्क करें।'
        },
        visualType: 'formula'
      },
      {
        chapterIndex: 16,
        id: 'interview-questions',
        title: { en: 'Chapter 16: Interview Questions', ta: 'அத்தியாயம் 16: நேர்காணல் வினாக்கள்', hi: 'अध्याय 16: साक्षात्कार प्रश्न' },
        subtitle: { en: 'IT Placement & Banking Viva models', ta: 'வேலைவாய்ப்பு நேர்காணல் மாதிரி வினாக்கள்', hi: 'आईटी प्लेसमेंट साक्षात्कार प्रश्न' },
        what: {
          en: 'Technical interviews often test mathematical reasoning: prime checking codes, digital roots logic in programs.',
          ta: 'தொழில்நுட்ப நேர்காணல்களில் கேட்கப்படும் கணித தர்க்கங்கள் மற்றும் குறியீட்டு முறைகள்.',
          hi: 'तकनीकी साक्षात्कारों में अक्सर गणितीय तर्क और कोडिंग लॉजिक का परीक्षण किया जाता है।'
        },
        howItWorks: {
          en: 'Common Question: Explain the prime checking algorithm in O(sqrt(N)) complexity. Explain why we only check factors up to square root of N.',
          ta: 'பொதுவான கேள்வி: பகா எண்ணைச் சரிபார்க்கும் O(sqrt(N)) அல்காரிதத்தை விளக்குக.',
          hi: 'सामान्य प्रश्न: O(sqrt(N)) जटिलता में अभाज्य संख्या की जाँच करने वाले एल्गोरिथम को समझाएं।'
        },
        commonMistakes: {
          en: 'Explaining a naive O(N) prime check loop instead of optimized O(sqrt(N)) loop.',
          ta: 'நேர்காணலில் எளிய O(N) முறையை மட்டும் கூறுவது (O(sqrt(N)) முறை சிறந்தது).',
          hi: 'अनुकूलित O(sqrt(N)) लूप के बजाय साधारण O(N) लूप की व्याख्या करना।'
        },
        tricks: {
          en: 'Explain that factors exist in pairs (if a divides N, then N/a also divides N). One factor must be <= sqrt(N).',
          ta: 'காரணிகள் எப்போதும் இணையாகவே இருக்கும் என்பதை விளக்குங்கள். ஒரு காரணி <= sqrt(N) ஆக இருக்க வேண்டும்.',
          hi: 'समझाएं कि गुणनखंड हमेशा जोड़ों में होते हैं। एक गुणनखंड <= sqrt(N) होना चाहिए।'
        },
        visualType: 'none'
      },
      {
        chapterIndex: 17,
        id: 'flash-cards',
        title: { en: 'Chapter 17: Flash Cards', ta: 'அத்தியாயம் 17: அட்டைப் பயிற்சிகள்', hi: 'अध्याय 17: फ्लैश कार्ड' },
        subtitle: { en: 'Terminology Drills', ta: 'கலைச்சொல் பயிற்சிகள்', hi: 'शब्दावली अभ्यास' },
        what: {
          en: 'Quick term drills using interactive flipping cards. Test yourself on Prime vs Composite, Coprimes, and Twin Primes.',
          ta: 'அட்டைகளைத் திருப்பி கலைச்சொற்களை விரைவாகக் கற்கும் பயிற்சி.',
          hi: 'इंटरैक्टिव फ्लैश कार्ड का उपयोग करके शब्दावली का त्वरित अभ्यास।'
        },
        howItWorks: {
          en: 'Click on a card below to flip it and inspect the definition and shortcuts.',
          ta: 'கீழே உள்ள கார்டை கிளிக் செய்து அதன் விளக்கம் மற்றும் உதாரணங்களைப் படியுங்கள்.',
          hi: 'फ्लैश कार्ड को पलटने और उसकी परिभाषा देखने के लिए उस पर क्लिक करें।'
        },
        commonMistakes: {
          en: 'Skipping flashcards. Verbal definitions are often tested in initial placement test rounds.',
          ta: 'அட்டைப் பயிற்சிகளைத் தவிர்ப்பது. கோட்பாட்டு வினாக்கள் வேலைவாய்ப்புத் தேர்வுகளில் கேட்கப்படலாம்.',
          hi: 'फ्लैश कार्ड को छोड़ना। सैद्धांतिक परिभाषाएं अक्सर प्लेसमेंट परीक्षाओं के पहले दौर में पूछी जाती हैं।'
        },
        tricks: {
          en: 'Flipping cards reinforces active recall memory mechanics.',
          ta: 'அட்டைகளைத் திருப்பிப் படிப்பது மூளையின் நினைவாற்றலை (Active Recall) தூண்டுகிறது.',
          hi: 'कार्डों को पलटना सक्रिय स्मरण क्षमता (Active Recall) को मजबूत करता है।'
        },
        visualType: 'flashcards'
      },
      {
        chapterIndex: 18,
        id: 'cheat-sheet',
        title: { en: 'Chapter 18: Cheat Sheet', ta: 'அத்தியாயம் 18: நினைவுக் குறிப்புகள்', hi: 'अध्याय 18: चीट शीट' },
        subtitle: { en: 'Vedic and Traditional Summary Sheet', ta: 'முக்கியக் குறிப்புகள் மற்றும் பதிவிறக்கங்கள்', hi: 'त्वरित पुनरीक्षण पत्रক' },
        what: {
          en: 'The ultimate quick review cheat sheet. Contains decimal conversion guides, cyclicity tables, and Vedic tricks.',
          ta: 'தேர்வுக்கு முந்தைய விரைவான திருப்புதலுக்கான சீட் ஷீட்.',
          hi: 'अंतिम त्वरित पुनरीक्षण पत्रक। इसमें चक्रीयता सारणी और वैदिक ट्रिक्स शामिल हैं।'
        },
        howItWorks: {
          en: 'Review the base conversion tables and short formulas before entering a practice session.',
          ta: 'பயிற்சியைத் தொடங்குவதற்கு முன் மாற்று அட்டவணைகள் மற்றும் எளிய சூத்திரங்களை மீள்பார்வை செய்யவும்.',
          hi: 'अभ्यास शुरू करने से पहले आधार परिवर्तन सारणी और लघु सूत्रों की समीक्षा करें।'
        },
        commonMistakes: {
          en: 'Relying solely on the cheat sheet without solving practice problems.',
          ta: 'பயிற்சி வினாக்களைத் தீர்க்காமல் சீட் ஷீட்டை மட்டும் நம்பியிருப்பது தவறு.',
          hi: 'अभ्यास प्रश्नों को हल किए बिना केवल चीट शीट पर निर्भर रहना।'
        },
        tricks: {
          en: 'Keep this open in a side tab during timed sectional drills.',
          ta: 'நேரப் பயிற்சிகளின் போது இதைத் பக்கவாட்டில் திறந்து வைத்துக் கொள்ளலாம்.',
          hi: 'समयबद्ध अभ्यासों के दौरान इसे साइड टैब में खुला रखें।'
        },
        visualType: 'none'
      }
    ]
  },
  {
    id: 'train-problems',
    name: 'Train Problems',
    iconName: 'Train',
    subject: 'quant',
    difficulty: 'Intermediate',
    estTime: '30 mins',
    prerequisites: 'Speed Distance Time',
    simulationType: 'train',
    questions: [],
    chapters: []
  }
];

export const ALL_SYLLABUS_TOPICS = [
  { id: 'number-system', name: 'Number System', subject: 'quant', difficulty: 'Beginner' },
  { id: 'simplification', name: 'Simplification', subject: 'quant', difficulty: 'Beginner' },
  { id: 'percentage', name: 'Percentage', subject: 'quant', difficulty: 'Beginner' },
  { id: 'profit-loss', name: 'Profit & Loss', subject: 'quant', difficulty: 'Intermediate' },
  { id: 'simple-interest', name: 'Simple Interest', subject: 'quant', difficulty: 'Intermediate' },
  { id: 'compound-interest', name: 'Compound Interest', subject: 'quant', difficulty: 'Intermediate' },
  { id: 'average', name: 'Average', subject: 'quant', difficulty: 'Beginner' },
  { id: 'train-problems', name: 'Train Problems', subject: 'quant', difficulty: 'Intermediate' },
  { id: 'boats-streams', name: 'Boats & Streams', subject: 'quant', difficulty: 'Intermediate' },
  { id: 'pipes-cisterns', name: 'Pipes & Cisterns', subject: 'quant', difficulty: 'Intermediate' },
  { id: 'probability', name: 'Probability', subject: 'quant', difficulty: 'Advanced' },
  { id: 'geometry-3d', name: 'Geometry 3D', subject: 'quant', difficulty: 'Advanced' },
  
  // Logical
  { id: 'coding-decoding', name: 'Coding Decoding', subject: 'logical', difficulty: 'Beginner' },
  { id: 'blood-relations', name: 'Blood Relations', subject: 'logical', difficulty: 'Beginner' },
  { id: 'direction-sense', name: 'Direction Sense', subject: 'logical', difficulty: 'Beginner' },
  { id: 'seating-arrangement', name: 'Seating Arrangement', subject: 'logical', difficulty: 'Intermediate' },
  { id: 'syllogism', name: 'Syllogism', subject: 'logical', difficulty: 'Intermediate' },
  { id: 'clock-problems', name: 'Clock Problems', subject: 'logical', difficulty: 'Intermediate' },
  { id: 'cube-dice', name: 'Cube & Dice', subject: 'logical', difficulty: 'Intermediate' }
] as const;

// Helper to generate missing topics based on ALL_SYLLABUS_TOPICS
const generatePopulatedTopics = (): Topic[] => {
  const populatedTopics: Topic[] = [];
  const ns = BASE_TOPICS.find(t => t.id === 'number-system');

  ALL_SYLLABUS_TOPICS.forEach(tInfo => {
    // If it's number-system and we already have it rich, keep it but maybe we want to use the dict for it too.
    // Let's just generate for all topics that aren't number-system, and for number-system we keep the base but we might append our algorithmic questions.
    const dictContent = topicContentDict[tInfo.id] || {
      concepts: `Learn the fundamentals of ${tInfo.name}.`,
      tricks: `Apply standard logical reasoning.`,
      mistakes: `Skipping step-by-step calculation.`,
      formulas: `Review standard math formulas.`
    };

    const generatedQuestions = generateQuestionsForTopic(tInfo.id, 110);

    if (tInfo.id === 'number-system' && ns) {
      populatedTopics.push({
        ...ns,
        questions: [...ns.questions, ...generatedQuestions]
      });
      return;
    }

    // 5-Chapter High-Impact Structure
    const chapters: Chapter[] = [
      {
        chapterIndex: 1,
        id: 'concepts',
        title: { en: 'Chapter 1: Core Concepts', ta: 'அத்தியாயம் 1: முக்கிய கருத்துக்கள்', hi: 'अध्याय 1: मुख्य अवधारणाएँ' },
        subtitle: { en: 'Introduction & Basics', ta: 'அறிமுகம்', hi: 'परिचय' },
        what: { en: dictContent.concepts, ta: dictContent.concepts, hi: dictContent.concepts },
        howItWorks: { en: `Understand the fundamental rules of ${tInfo.name}.`, ta: `விதிகளை புரிந்து கொள்ளுங்கள்.`, hi: `नियमों को समझें।` },
        commonMistakes: { en: 'Skipping the basics.', ta: 'அடிப்படைகளை தவிர்த்தல்.', hi: 'मूल बातें छोड़ना।' },
        tricks: { en: 'Master the basics first.', ta: 'முதலில் அடிப்படைகளை கற்கவும்.', hi: 'पहले मूल बातें सीखें।' },
        visualType: 'none',
        inDepthTheory: dictContent.inDepthTheory
      },
      {
        chapterIndex: 2,
        id: 'formulas-tricks',
        title: { en: 'Chapter 2: Formulas & Shortcuts', ta: 'அத்தியாயம் 2: சூத்திரங்கள்', hi: 'अध्याय 2: सूत्र' },
        subtitle: { en: 'Vedic Math & Quick Solves', ta: 'எளிய தீர்வுகள்', hi: 'त्वरित समाधान' },
        what: { en: 'Essential formulas and shortcuts to save time in exams.', ta: 'நேரத்தை மிச்சப்படுத்தும் சூத்திரங்கள்.', hi: 'समय बचाने वाले सूत्र।' },
        howItWorks: { en: dictContent.formulas, ta: dictContent.formulas, hi: dictContent.formulas },
        commonMistakes: { en: 'Memorizing without understanding.', ta: 'புரியாமல் மனப்பாடம் செய்தல்.', hi: 'बिना समझे रटना।' },
        tricks: { en: dictContent.tricks, ta: dictContent.tricks, hi: dictContent.tricks },
        visualType: 'formula',
        inDepthTheory: dictContent.formulasInDepth
      },
      {
        chapterIndex: 3,
        id: 'vedic-shortcuts',
        title: { en: 'Chapter 3: Vedic Speed Hacks', ta: 'அத்தியாயம் 3: வேத கணித குறுக்குவழிகள்', hi: 'अध्याय 3: वैदिक गणित शॉर्टकट' },
        subtitle: { en: 'Mental Calculation Tricks', ta: 'வேகக் கணக்கீட்டு முறைகள்', hi: 'गणना की गति बढ़ाने के गुर' },
        what: { en: 'Speed hacks specifically designed for this topic.', ta: 'வேத கணித சூத்திரங்கள் கணக்கிடும் வேகத்தை இருமடங்காக உயர்த்தும்.', hi: 'वैदिक गणित के शॉर्टकट आपकी गति को दोगुना कर देते हैं।' },
        howItWorks: { en: 'Compare traditional long methods vs 2-second visual tricks.', ta: 'பாரம்பரிய முறைகளுடன் ஒப்பிட்டுப் பாருங்கள்.', hi: 'वैदिक मानसिक शॉर्टकट के बगल में पारंपरिक चरणों को देखने के लिए नीचे दिए गए तुलनात्मक बोर्ड का उपयोग करें।' },
        commonMistakes: { en: 'Applying tricks without knowing the conditions.', ta: 'நிபந்தனைகளைச் சரிபார்க்காமல் குறுக்குவழிகளைப் பயன்படுத்துவது பிழையைத் தரும்.', hi: 'शर्तों की पुष्टि किए बिना शॉर्टकट ट्रिक्स लागू करना।' },
        tricks: { en: 'Learn to skip steps mentally.', ta: 'மனதிலேயே கணக்கிட கற்றுக்கொள்ளுங்கள்.', hi: 'मन में गणना करना सीखें।' },
        visualType: 'vedic'
      },
      {
        chapterIndex: 4,
        id: 'mistakes',
        title: { en: 'Chapter 4: Common Pitfalls', ta: 'அத்தியாயம் 4: தவறுகள்', hi: 'अध्याय 4: गलतियाँ' },
        subtitle: { en: 'What NOT to do', ta: 'செய்யக் கூடாதவை', hi: 'क्या नहीं करना है' },
        what: { en: 'Learn from the mistakes of thousands of other test takers.', ta: 'மற்றவர்களின் தவறுகளில் இருந்து கற்றுக்கொள்ளுங்கள்.', hi: 'दूसरों की गलतियों से सीखें।' },
        howItWorks: { en: 'Review the mistake and the correct approach.', ta: 'தவறுகளையும் சரியான முறையையும் சரிபார்க்கவும்.', hi: 'गलती और सही दृष्टिकोण की समीक्षा करें।' },
        commonMistakes: { en: dictContent.mistakes, ta: dictContent.mistakes, hi: dictContent.mistakes },
        tricks: { en: 'Always double check units and bases.', ta: 'அலகுகளை இருமுறை சரிபார்க்கவும்.', hi: 'इकाइयों की हमेशा दोहरी जांच करें।' },
        visualType: 'none',
        inDepthTheory: dictContent.mistakesInDepth
      },
      {
        chapterIndex: 5,
        id: 'flash-cards',
        title: { en: 'Chapter 5: Flash Cards', ta: 'அத்தியாயம் 5: அட்டைப் பயிற்சிகள்', hi: 'अध्याय 5: फ्लैश कार्ड' },
        subtitle: { en: 'Terminology Drills', ta: 'கலைச்சொல் பயிற்சிகள்', hi: 'शब्दावली अभ्यास' },
        what: { en: `Quick term drills using interactive flipping cards for ${tInfo.name}.`, ta: 'விரைவான பயிற்சிகள்.', hi: 'त्वरित अभ्यास।' },
        howItWorks: { en: 'Click on a card below to flip it.', ta: 'கார்டை கிளிக் செய்யவும்.', hi: 'कार्ड पर क्लिक करें।' },
        commonMistakes: { en: 'Skipping flashcards.', ta: 'அட்டைகளை தவிர்த்தல்.', hi: 'फ्लैशकार्ड छोड़ना।' },
        tricks: { en: 'Active recall is key.', ta: 'நினைவாற்றல் முக்கியம்.', hi: 'सक्रिय स्मरण कुंजी है।' },
        visualType: 'flashcards'
      },
      {
        chapterIndex: 6,
        id: 'topic-test',
        title: { en: 'Chapter 6: Topic Test', ta: 'அத்தியாயம் 6: பாடத் தேர்வு', hi: 'अध्याय 6: विषय परीक्षण' },
        subtitle: { en: 'Syllabus Quiz Gate', ta: 'தேர்வு நுழைவாயில்', hi: 'परीक्षण गेट' },
        what: { en: 'The ultimate checkpoint quiz. You must score at least 70% to unlock the next chapter.', ta: 'குறைந்தது 70% மதிப்பெண் பெற வேண்டும்.', hi: 'कम से कम 70% स्कोर करना होगा।' },
        howItWorks: { en: 'Start the assessment. Timer is active.', ta: 'தேர்வைத் தொடங்குங்கள்.', hi: 'परीक्षण शुरू करें।' },
        commonMistakes: { en: 'Spending more than 2 minutes on a single question.', ta: 'அதிக நேரம் செலவிடுதல்.', hi: 'अधिक समय बिताना।' },
        tricks: { en: 'Pace yourself: 60 seconds per question.', ta: 'நேர மேலாண்மை.', hi: 'समय प्रबंधन।' },
        visualType: 'none'
      }
    ];

    populatedTopics.push({
      id: tInfo.id,
      name: tInfo.name,
      iconName: tInfo.subject === 'quant' ? 'BookOpen' : 'Brain',
      subject: tInfo.subject,
      difficulty: tInfo.difficulty as 'Beginner'|'Intermediate'|'Advanced',
      estTime: '45 mins',
      prerequisites: 'None',
      simulationType: 'none',
      questions: generatedQuestions,
      chapters: chapters
    });
  });

  return populatedTopics;
};

export const TOPICS = generatePopulatedTopics();

