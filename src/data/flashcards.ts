export interface FlashCardData {
  term: { [lang: string]: string };
  def: { [lang: string]: string };
  example: { [lang: string]: string };
}

export const topicFlashcards: Record<string, FlashCardData[]> = {
  'number-system': [
    {
      term: { en: 'Twin Primes', ta: 'இரட்டைப் பகா எண்கள்', hi: 'जुड़वां अभाज्य संख्याएं' },
      def: { en: 'A pair of prime numbers that differ by exactly 2.', ta: 'சரியாக 2 வேறுபாடு கொண்ட பகா எண்களின் இணை ஆகும்.', hi: 'अभाज्य संख्याओं का एक जोड़ा जिनके बीच का अंतर ठीक 2 हो।' },
      example: { en: 'Example: (3, 5), (5, 7), (11, 13)', ta: 'எடுத்துக்காட்டு: (3, 5), (11, 13)', hi: 'उदाहरण: (3, 5), (11, 13)' }
    },
    {
      term: { en: 'Co-prime Numbers', ta: 'சார்பகா எண்கள்', hi: 'सह-अभाज्य संख्याएं' },
      def: { en: 'Two numbers having only 1 as their common factor (HCF = 1).', ta: 'இரு எண்களின் பொதுவான காரணி 1 மட்டுமே.', hi: 'ऐसी दो संख्याएँ जिनका उभयनिष्ठ गुणनखंड केवल 1 हो।' },
      example: { en: 'Example: (8, 15) -> Common factor: 1.', ta: 'எடுத்துக்காட்டு: (8, 15)', hi: 'उदाहरण: (8, 15)' }
    },
    {
      term: { en: 'Rational Numbers', ta: 'விகிதமுறு எண்கள்', hi: 'परिमेय संख्याएं' },
      def: { en: 'Numbers that can be expressed as a fraction p/q, where p and q are integers and q ≠ 0.', ta: 'p/q வடிவில் எழுதக்கூடிய எண்கள்.', hi: 'ऐसी संख्याएँ जिन्हें p/q के रूप में व्यक्त किया जा सके।' },
      example: { en: 'Example: 3/4, -5/2, 6, 0.25', ta: 'எடுத்துக்காட்டு: 3/4, 6', hi: 'उदाहरण: 3/4, 6' }
    }
  ],
  'blood-relations': [
    {
      term: { en: 'Maternal', ta: 'தாய்வழி', hi: 'मातृक (Maternal)' },
      def: { en: 'Relatives on the mother\'s side of the family.', ta: 'தாயின் வழியிலான உறவுகள்.', hi: 'माँ की तरफ के रिश्तेदार।' },
      example: { en: 'Example: Mother\'s brother = Maternal Uncle', ta: 'எடுத்துக்காட்டு: தாய்மாமன்', hi: 'उदाहरण: मामा (Maternal Uncle)' }
    },
    {
      term: { en: 'Paternal', ta: 'தந்தைவழி', hi: 'पैतृक (Paternal)' },
      def: { en: 'Relatives on the father\'s side of the family.', ta: 'தந்தையின் வழியிலான உறவுகள்.', hi: 'पिता की तरफ के रिश्तेदार।' },
      example: { en: 'Example: Father\'s sister = Paternal Aunt', ta: 'எடுத்துக்காட்டு: அத்தை', hi: 'उदाहरण: बुआ (Paternal Aunt)' }
    },
    {
      term: { en: 'Sibling', ta: 'உடன்பிறப்பு', hi: 'सहोदर (Sibling)' },
      def: { en: 'A brother or a sister.', ta: 'சகோதரன் அல்லது சகோதரி.', hi: 'भाई या बहन।' },
      example: { en: 'Example: Same parents = Siblings', ta: 'எடுத்துக்காட்டு: சகோதரர்கள்', hi: 'उदाहरण: भाई-बहन' }
    }
  ],
  'direction-sense': [
    {
      term: { en: 'Cardinal Directions', ta: 'முக்கிய திசைகள்', hi: 'प्रमुख दिशाएं' },
      def: { en: 'The four main points of a compass: North, South, East, West.', ta: 'வடக்கு, தெற்கு, கிழக்கு, மேற்கு.', hi: 'उत्तर, दक्षिण, पूर्व, पश्चिम।' },
      example: { en: 'Example: N, S, E, W', ta: 'N, S, E, W', hi: 'N, S, E, W' }
    },
    {
      term: { en: 'Ordinal Directions', ta: 'இடைத் திசைகள்', hi: 'मध्यवर्ती दिशाएं' },
      def: { en: 'The directions halfway between cardinal points: NE, NW, SE, SW.', ta: 'வடகிழக்கு, வடமேற்கு, தென்கிழக்கு, தென்மேற்கு.', hi: 'उत्तर-पूर्व, उत्तर-पश्चिम, दक्षिण-पूर्व, दक्षिण-पश्चिम।' },
      example: { en: 'Example: NE is between North and East', ta: 'எ.கா: வடகிழக்கு', hi: 'उदाहरण: NE' }
    },
    {
      term: { en: 'Shadow Rules', ta: 'நிழல் விதிகள்', hi: 'छाया के नियम' },
      def: { en: 'In the morning, shadows point West. In the evening, shadows point East.', ta: 'காலையில் நிழல் மேற்கிலும், மாலையில் கிழக்கிலும் விழும்.', hi: 'सुबह छाया पश्चिम में और शाम को पूर्व में बनती है।' },
      example: { en: 'Example: At 8 AM, a person facing North has their shadow to the left (West).', ta: 'காலை 8 மணிக்கு நிழல் மேற்கில் விழும்.', hi: 'सुबह 8 बजे छाया पश्चिम में।' }
    }
  ],
  'seating-arrangement': [
    {
      term: { en: 'Linear Seating', ta: 'நேர்கோட்டு அமைப்பு', hi: 'रैखिक व्यवस्था' },
      def: { en: 'People sitting in a straight line, usually facing North or South.', ta: 'ஒரு நேர்கோட்டில் அமர்ந்திருக்கும் மக்கள்.', hi: 'एक सीधी रेखा में बैठे लोग।' },
      example: { en: 'Example: 5 friends sitting in a row facing North.', ta: 'எ.கா: 5 பேர் வடக்கே பார்த்து அமர்ந்துள்ளனர்.', hi: 'उदाहरण: 5 लोग उत्तर की ओर देख रहे हैं।' }
    },
    {
      term: { en: 'Circular Seating', ta: 'வட்ட அமைப்பு', hi: 'वृत्ताकार व्यवस्था' },
      def: { en: 'People sitting around a circular table, facing the center or away.', ta: 'வட்ட மேசையைச் சுற்றி அமர்ந்திருப்பவர்கள்.', hi: 'गोल मेज के चारो ओर बैठे लोग।' },
      example: { en: 'Example: 6 people sitting around a circle facing center.', ta: 'எ.கா: மையத்தைப் பார்த்து அமர்ந்தவர்கள்.', hi: 'उदाहरण: केंद्र की ओर देख रहे हैं।' }
    },
    {
      term: { en: 'Immediate Neighbor', ta: 'அடுத்திருப்பவர்', hi: 'निकटतम पड़ोसी' },
      def: { en: 'The person sitting exactly next to someone (left or right).', ta: 'ஒருவருக்கு மிக அருகில் அமர்ந்திருப்பவர்.', hi: 'किसी के ठीक बगल में (बाएं या दाएं) बैठा व्यक्ति।' },
      example: { en: 'Example: If A is next to B, they are immediate neighbors.', ta: 'A என்பவர் B-க்கு அருகில்.', hi: 'उदाहरण: A, B के बगल में है।' }
    }
  ],
  'syllogism': [
    {
      term: { en: 'Premise / Statement', ta: 'அறிக்கை', hi: 'कथन (Statement)' },
      def: { en: 'A declarative sentence given as fact in a syllogism problem.', ta: 'கொடுக்கப்பட்ட உண்மையான வாக்கியம்.', hi: 'एक वाक्य जिसे सत्य माना जाता है।' },
      example: { en: 'Example: "All cats are dogs."', ta: 'எ.கா: "அனைத்து பூனைகளும் நாய்கள்."', hi: 'उदाहरण: "सभी बिल्लियां कुत्ते हैं।"' }
    },
    {
      term: { en: 'Conclusion', ta: 'முடிவு', hi: 'निष्कर्ष (Conclusion)' },
      def: { en: 'A logical deduction that strictly follows from the premises.', ta: 'அறிக்கைகளிலிருந்து பெறப்படும் தர்க்கரீதியான முடிவு.', hi: 'एक तार्किक परिणाम जो कथनों से निकलता है।' },
      example: { en: 'Example: "Some dogs are cats." (If all cats are dogs)', ta: 'எ.கா: "சில நாய்கள் பூனைகள்."', hi: 'उदाहरण: "कुछ कुत्ते बिल्लियां हैं।"' }
    },
    {
      term: { en: 'Venn Diagram', ta: 'வென் வரைபடம்', hi: 'वेन आरेख' },
      def: { en: 'A visual method using overlapping circles to solve syllogisms.', ta: 'வட்டங்களைப் பயன்படுத்தி தர்க்கத்தைத் தீர்க்கும் முறை.', hi: 'वृत्तों का उपयोग करके सिलोजिज़्म को हल करने की एक विधि।' },
      example: { en: 'Example: Drawing a circle inside another for "All A are B".', ta: 'எ.கா: ஒன்றினுள் ஒன்று வரைவது.', hi: 'उदाहरण: "All A are B" के लिए।' }
    }
  ],
  'simplification': [
    {
      term: { en: 'BODMAS', ta: 'பாட்மாஸ்', hi: 'बोडमास (BODMAS)' },
      def: { en: 'Order of operations: Brackets, Of, Division, Multiplication, Addition, Subtraction.', ta: 'கணக்கீட்டு வரிசை.', hi: 'संक्रियाओं का क्रम।' },
      example: { en: 'Example: Do 5 * 2 before 5 + 2.', ta: 'எ.கா: கூட்டலுக்கு முன் பெருக்கல்.', hi: 'उदाहरण: जोड़ने से पहले गुणा करें।' }
    },
    {
      term: { en: 'Digital Root', ta: 'இலக்கங்களின் கூடுதல்', hi: 'बीजांक (Digital Root)' },
      def: { en: 'Single digit value obtained by continuously summing the digits.', ta: 'ஒரு எண்ணின் இலக்கங்களை ஒற்றை இலக்கம் வரும் வரை கூட்டுதல்.', hi: 'अंकों का योग।' },
      example: { en: 'Example: 456 -> 4+5+6=15 -> 1+5=6', ta: 'எ.கா: 456 -> 6', hi: 'उदाहरण: 456 -> 6' }
    }
  ]
};

export const defaultFlashcards: FlashCardData[] = [
  {
    term: { en: 'Aptitude Basics', ta: 'அடிப்படைகள்', hi: 'बुनियादी बातें' },
    def: { en: 'Core mathematical and logical principles used in exams.', ta: 'தேர்வுகளில் பயன்படுத்தப்படும் முக்கிய தத்துவங்கள்.', hi: 'परीक्षाओं में उपयोग किए जाने वाले मुख्य सिद्धांत।' },
    example: { en: 'Example: Percentages, Ratios, Logic', ta: 'எ.கா: சதவீதங்கள்', hi: 'उदाहरण: प्रतिशत' }
  },
  {
    term: { en: 'Time Management', ta: 'நேர மேலாண்மை', hi: 'समय प्रबंधन' },
    def: { en: 'Solving questions within 30-40 seconds using tricks.', ta: '30 வினாடிகளுக்குள் தீர்வுகாணுதல்.', hi: '30-40 सेकंड में हल करना।' },
    example: { en: 'Example: Skipping lengthy calculations.', ta: 'எ.கா: நீண்ட கணக்குகளைத் தவிர்த்தல்.', hi: 'उदाहरण: लंबी गणनाओं को छोड़ना।' }
  }
];
