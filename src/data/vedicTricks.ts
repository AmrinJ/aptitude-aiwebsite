export interface TrickData {
  title: { [lang: string]: string };
  desc: { [lang: string]: string };
  equation: string;
  traditional: string[];
  vedic: string[];
  explanation: { [lang: string]: string };
}

export const topicVedicTricks: Record<string, TrickData[]> = {
  "number-system": [
    {
      "title": {
        "en": "#1: Percentage Swap",
        "ta": "#1: சதவீதத்தை மாற்று",
        "hi": "#1: प्रतिशत स्वैप करें"
      },
      "desc": {
        "en": "x% of y is exactly the same as y% of x.",
        "ta": "சதவீதத்தை மாற்றுக.",
        "hi": "प्रतिशत स्वैप करें।"
      },
      "equation": "16% of 50 = ?",
      "traditional": [
        "(16/100) * 50 = 8"
      ],
      "vedic": [
        "Swap it to 50% of 16",
        "Half of 16 is 8. Instant!"
      ],
      "explanation": {
        "en": "Multiplication is commutative. (x/100)*y = (y/100)*x.",
        "ta": "பெருக்கல் விதி.",
        "hi": "गुणा विनिमेय है।"
      }
    },
    {
      "title": {
        "en": "#2: Digital Root Validation",
        "ta": "#2: டிஜிட்டல் ரூட்",
        "hi": "#2: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    },
    {
      "title": {
        "en": "#3: Ratio Cross-Multiplication",
        "ta": "#3: விகித பெருக்கல்",
        "hi": "#3: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#4: Pascal's Ratio for CI",
        "ta": "#4: பாஸ்கல் விகிதம் (CI)",
        "hi": "#4: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#5: Division by 5 (Double & Dot)",
        "ta": "#5: 5-ஆல் வகுத்தல்",
        "hi": "#5: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#6: The 10% and 1% Rule",
        "ta": "#6: 10% மற்றும் 1% விதி",
        "hi": "#6: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#7: Alligation Cross Method",
        "ta": "#7: கலவை குறுக்கு முறை",
        "hi": "#7: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#8: Squaring numbers ending in 5",
        "ta": "#8: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#8: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#9: Base 100 Multiplication",
        "ta": "#9: அடிப்படை 100 பெருக்கல்",
        "hi": "#9: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#10: Multiplication by 11",
        "ta": "#10: 11-ஆல் பெருக்குதல்",
        "hi": "#10: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    }
  ],
  "simplification": [
    {
      "title": {
        "en": "#1: Ratio Cross-Multiplication",
        "ta": "#1: விகித பெருக்கல்",
        "hi": "#1: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#2: Squaring numbers ending in 5",
        "ta": "#2: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#2: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#3: Multiplication by 11",
        "ta": "#3: 11-ஆல் பெருக்குதல்",
        "hi": "#3: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    },
    {
      "title": {
        "en": "#4: Pascal's Ratio for CI",
        "ta": "#4: பாஸ்கல் விகிதம் (CI)",
        "hi": "#4: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#5: Percentage Swap",
        "ta": "#5: சதவீதத்தை மாற்று",
        "hi": "#5: प्रतिशत स्वैप करें"
      },
      "desc": {
        "en": "x% of y is exactly the same as y% of x.",
        "ta": "சதவீதத்தை மாற்றுக.",
        "hi": "प्रतिशत स्वैप करें।"
      },
      "equation": "16% of 50 = ?",
      "traditional": [
        "(16/100) * 50 = 8"
      ],
      "vedic": [
        "Swap it to 50% of 16",
        "Half of 16 is 8. Instant!"
      ],
      "explanation": {
        "en": "Multiplication is commutative. (x/100)*y = (y/100)*x.",
        "ta": "பெருக்கல் விதி.",
        "hi": "गुणा विनिमेय है।"
      }
    },
    {
      "title": {
        "en": "#6: Digital Root Validation",
        "ta": "#6: டிஜிட்டல் ரூட்",
        "hi": "#6: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    },
    {
      "title": {
        "en": "#7: Division by 5 (Double & Dot)",
        "ta": "#7: 5-ஆல் வகுத்தல்",
        "hi": "#7: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#8: Alligation Cross Method",
        "ta": "#8: கலவை குறுக்கு முறை",
        "hi": "#8: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#9: Successive Percentage Formula",
        "ta": "#9: தொடர்ச்சியான சதவீதம்",
        "hi": "#9: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    },
    {
      "title": {
        "en": "#10: Unit Digit Verification",
        "ta": "#10: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#10: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    }
  ],
  "percentage": [
    {
      "title": {
        "en": "#1: Alligation Cross Method",
        "ta": "#1: கலவை குறுக்கு முறை",
        "hi": "#1: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#2: Base 100 Multiplication",
        "ta": "#2: அடிப்படை 100 பெருக்கல்",
        "hi": "#2: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#3: Percentage Swap",
        "ta": "#3: சதவீதத்தை மாற்று",
        "hi": "#3: प्रतिशत स्वैप करें"
      },
      "desc": {
        "en": "x% of y is exactly the same as y% of x.",
        "ta": "சதவீதத்தை மாற்றுக.",
        "hi": "प्रतिशत स्वैप करें।"
      },
      "equation": "16% of 50 = ?",
      "traditional": [
        "(16/100) * 50 = 8"
      ],
      "vedic": [
        "Swap it to 50% of 16",
        "Half of 16 is 8. Instant!"
      ],
      "explanation": {
        "en": "Multiplication is commutative. (x/100)*y = (y/100)*x.",
        "ta": "பெருக்கல் விதி.",
        "hi": "गुणा विनिमेय है।"
      }
    },
    {
      "title": {
        "en": "#4: Pascal's Ratio for CI",
        "ta": "#4: பாஸ்கல் விகிதம் (CI)",
        "hi": "#4: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#5: Ratio Cross-Multiplication",
        "ta": "#5: விகித பெருக்கல்",
        "hi": "#5: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#6: Squaring numbers ending in 5",
        "ta": "#6: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#6: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#7: Division by 5 (Double & Dot)",
        "ta": "#7: 5-ஆல் வகுத்தல்",
        "hi": "#7: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#8: Unit Digit Verification",
        "ta": "#8: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#8: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    },
    {
      "title": {
        "en": "#9: The 10% and 1% Rule",
        "ta": "#9: 10% மற்றும் 1% விதி",
        "hi": "#9: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#10: Successive Percentage Formula",
        "ta": "#10: தொடர்ச்சியான சதவீதம்",
        "hi": "#10: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    }
  ],
  "profit-loss": [
    {
      "title": {
        "en": "#1: Base 100 Multiplication",
        "ta": "#1: அடிப்படை 100 பெருக்கல்",
        "hi": "#1: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#2: Ratio Cross-Multiplication",
        "ta": "#2: விகித பெருக்கல்",
        "hi": "#2: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#3: Alligation Cross Method",
        "ta": "#3: கலவை குறுக்கு முறை",
        "hi": "#3: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#4: Pascal's Ratio for CI",
        "ta": "#4: பாஸ்கல் விகிதம் (CI)",
        "hi": "#4: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#5: Percentage Swap",
        "ta": "#5: சதவீதத்தை மாற்று",
        "hi": "#5: प्रतिशत स्वैप करें"
      },
      "desc": {
        "en": "x% of y is exactly the same as y% of x.",
        "ta": "சதவீதத்தை மாற்றுக.",
        "hi": "प्रतिशत स्वैप करें।"
      },
      "equation": "16% of 50 = ?",
      "traditional": [
        "(16/100) * 50 = 8"
      ],
      "vedic": [
        "Swap it to 50% of 16",
        "Half of 16 is 8. Instant!"
      ],
      "explanation": {
        "en": "Multiplication is commutative. (x/100)*y = (y/100)*x.",
        "ta": "பெருக்கல் விதி.",
        "hi": "गुणा विनिमेय है।"
      }
    },
    {
      "title": {
        "en": "#6: Squaring numbers ending in 5",
        "ta": "#6: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#6: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#7: Division by 5 (Double & Dot)",
        "ta": "#7: 5-ஆல் வகுத்தல்",
        "hi": "#7: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#8: The 10% and 1% Rule",
        "ta": "#8: 10% மற்றும் 1% விதி",
        "hi": "#8: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#9: Unit Digit Verification",
        "ta": "#9: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#9: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    },
    {
      "title": {
        "en": "#10: Successive Percentage Formula",
        "ta": "#10: தொடர்ச்சியான சதவீதம்",
        "hi": "#10: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    }
  ],
  "simple-interest": [
    {
      "title": {
        "en": "#1: Pascal's Ratio for CI",
        "ta": "#1: பாஸ்கல் விகிதம் (CI)",
        "hi": "#1: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#2: Successive Percentage Formula",
        "ta": "#2: தொடர்ச்சியான சதவீதம்",
        "hi": "#2: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    },
    {
      "title": {
        "en": "#3: Squaring numbers ending in 5",
        "ta": "#3: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#3: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#4: Multiplication by 11",
        "ta": "#4: 11-ஆல் பெருக்குதல்",
        "hi": "#4: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    },
    {
      "title": {
        "en": "#5: Ratio Cross-Multiplication",
        "ta": "#5: விகித பெருக்கல்",
        "hi": "#5: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#6: Base 100 Multiplication",
        "ta": "#6: அடிப்படை 100 பெருக்கல்",
        "hi": "#6: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#7: Percentage Swap",
        "ta": "#7: சதவீதத்தை மாற்று",
        "hi": "#7: प्रतिशत स्वैप करें"
      },
      "desc": {
        "en": "x% of y is exactly the same as y% of x.",
        "ta": "சதவீதத்தை மாற்றுக.",
        "hi": "प्रतिशत स्वैप करें।"
      },
      "equation": "16% of 50 = ?",
      "traditional": [
        "(16/100) * 50 = 8"
      ],
      "vedic": [
        "Swap it to 50% of 16",
        "Half of 16 is 8. Instant!"
      ],
      "explanation": {
        "en": "Multiplication is commutative. (x/100)*y = (y/100)*x.",
        "ta": "பெருக்கல் விதி.",
        "hi": "गुणा विनिमेय है।"
      }
    },
    {
      "title": {
        "en": "#8: Division by 5 (Double & Dot)",
        "ta": "#8: 5-ஆல் வகுத்தல்",
        "hi": "#8: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#9: The 10% and 1% Rule",
        "ta": "#9: 10% மற்றும் 1% விதி",
        "hi": "#9: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#10: Digital Root Validation",
        "ta": "#10: டிஜிட்டல் ரூட்",
        "hi": "#10: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    }
  ],
  "compound-interest": [
    {
      "title": {
        "en": "#1: Successive Percentage Formula",
        "ta": "#1: தொடர்ச்சியான சதவீதம்",
        "hi": "#1: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    },
    {
      "title": {
        "en": "#2: Division by 5 (Double & Dot)",
        "ta": "#2: 5-ஆல் வகுத்தல்",
        "hi": "#2: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#3: Alligation Cross Method",
        "ta": "#3: கலவை குறுக்கு முறை",
        "hi": "#3: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#4: Multiplication by 11",
        "ta": "#4: 11-ஆல் பெருக்குதல்",
        "hi": "#4: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    },
    {
      "title": {
        "en": "#5: The 10% and 1% Rule",
        "ta": "#5: 10% மற்றும் 1% விதி",
        "hi": "#5: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#6: Base 100 Multiplication",
        "ta": "#6: அடிப்படை 100 பெருக்கல்",
        "hi": "#6: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#7: Ratio Cross-Multiplication",
        "ta": "#7: விகித பெருக்கல்",
        "hi": "#7: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#8: Pascal's Ratio for CI",
        "ta": "#8: பாஸ்கல் விகிதம் (CI)",
        "hi": "#8: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#9: Digital Root Validation",
        "ta": "#9: டிஜிட்டல் ரூட்",
        "hi": "#9: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    },
    {
      "title": {
        "en": "#10: Percentage Swap",
        "ta": "#10: சதவீதத்தை மாற்று",
        "hi": "#10: प्रतिशत स्वैप करें"
      },
      "desc": {
        "en": "x% of y is exactly the same as y% of x.",
        "ta": "சதவீதத்தை மாற்றுக.",
        "hi": "प्रतिशत स्वैप करें।"
      },
      "equation": "16% of 50 = ?",
      "traditional": [
        "(16/100) * 50 = 8"
      ],
      "vedic": [
        "Swap it to 50% of 16",
        "Half of 16 is 8. Instant!"
      ],
      "explanation": {
        "en": "Multiplication is commutative. (x/100)*y = (y/100)*x.",
        "ta": "பெருக்கல் விதி.",
        "hi": "गुणा विनिमेय है।"
      }
    }
  ],
  "average": [
    {
      "title": {
        "en": "#1: Pascal's Ratio for CI",
        "ta": "#1: பாஸ்கல் விகிதம் (CI)",
        "hi": "#1: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#2: Percentage Swap",
        "ta": "#2: சதவீதத்தை மாற்று",
        "hi": "#2: प्रतिशत स्वैप करें"
      },
      "desc": {
        "en": "x% of y is exactly the same as y% of x.",
        "ta": "சதவீதத்தை மாற்றுக.",
        "hi": "प्रतिशत स्वैप करें।"
      },
      "equation": "16% of 50 = ?",
      "traditional": [
        "(16/100) * 50 = 8"
      ],
      "vedic": [
        "Swap it to 50% of 16",
        "Half of 16 is 8. Instant!"
      ],
      "explanation": {
        "en": "Multiplication is commutative. (x/100)*y = (y/100)*x.",
        "ta": "பெருக்கல் விதி.",
        "hi": "गुणा विनिमेय है।"
      }
    },
    {
      "title": {
        "en": "#3: Base 100 Multiplication",
        "ta": "#3: அடிப்படை 100 பெருக்கல்",
        "hi": "#3: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#4: Digital Root Validation",
        "ta": "#4: டிஜிட்டல் ரூட்",
        "hi": "#4: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    },
    {
      "title": {
        "en": "#5: Alligation Cross Method",
        "ta": "#5: கலவை குறுக்கு முறை",
        "hi": "#5: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#6: Ratio Cross-Multiplication",
        "ta": "#6: விகித பெருக்கல்",
        "hi": "#6: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#7: Squaring numbers ending in 5",
        "ta": "#7: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#7: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#8: Unit Digit Verification",
        "ta": "#8: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#8: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    },
    {
      "title": {
        "en": "#9: Division by 5 (Double & Dot)",
        "ta": "#9: 5-ஆல் வகுத்தல்",
        "hi": "#9: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#10: Multiplication by 11",
        "ta": "#10: 11-ஆல் பெருக்குதல்",
        "hi": "#10: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    }
  ],
  "train-problems": [
    {
      "title": {
        "en": "#1: Pascal's Ratio for CI",
        "ta": "#1: பாஸ்கல் விகிதம் (CI)",
        "hi": "#1: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#2: Multiplication by 11",
        "ta": "#2: 11-ஆல் பெருக்குதல்",
        "hi": "#2: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    },
    {
      "title": {
        "en": "#3: Squaring numbers ending in 5",
        "ta": "#3: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#3: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#4: Digital Root Validation",
        "ta": "#4: டிஜிட்டல் ரூட்",
        "hi": "#4: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    },
    {
      "title": {
        "en": "#5: The 10% and 1% Rule",
        "ta": "#5: 10% மற்றும் 1% விதி",
        "hi": "#5: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#6: Base 100 Multiplication",
        "ta": "#6: அடிப்படை 100 பெருக்கல்",
        "hi": "#6: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#7: Division by 5 (Double & Dot)",
        "ta": "#7: 5-ஆல் வகுத்தல்",
        "hi": "#7: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#8: Alligation Cross Method",
        "ta": "#8: கலவை குறுக்கு முறை",
        "hi": "#8: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#9: Successive Percentage Formula",
        "ta": "#9: தொடர்ச்சியான சதவீதம்",
        "hi": "#9: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    },
    {
      "title": {
        "en": "#10: Ratio Cross-Multiplication",
        "ta": "#10: விகித பெருக்கல்",
        "hi": "#10: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    }
  ],
  "boats-streams": [
    {
      "title": {
        "en": "#1: Successive Percentage Formula",
        "ta": "#1: தொடர்ச்சியான சதவீதம்",
        "hi": "#1: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    },
    {
      "title": {
        "en": "#2: Unit Digit Verification",
        "ta": "#2: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#2: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    },
    {
      "title": {
        "en": "#3: Pascal's Ratio for CI",
        "ta": "#3: பாஸ்கல் விகிதம் (CI)",
        "hi": "#3: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#4: Base 100 Multiplication",
        "ta": "#4: அடிப்படை 100 பெருக்கல்",
        "hi": "#4: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#5: Percentage Swap",
        "ta": "#5: சதவீதத்தை மாற்று",
        "hi": "#5: प्रतिशत स्वैप करें"
      },
      "desc": {
        "en": "x% of y is exactly the same as y% of x.",
        "ta": "சதவீதத்தை மாற்றுக.",
        "hi": "प्रतिशत स्वैप करें।"
      },
      "equation": "16% of 50 = ?",
      "traditional": [
        "(16/100) * 50 = 8"
      ],
      "vedic": [
        "Swap it to 50% of 16",
        "Half of 16 is 8. Instant!"
      ],
      "explanation": {
        "en": "Multiplication is commutative. (x/100)*y = (y/100)*x.",
        "ta": "பெருக்கல் விதி.",
        "hi": "गुणा विनिमेय है।"
      }
    },
    {
      "title": {
        "en": "#6: Squaring numbers ending in 5",
        "ta": "#6: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#6: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#7: Multiplication by 11",
        "ta": "#7: 11-ஆல் பெருக்குதல்",
        "hi": "#7: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    },
    {
      "title": {
        "en": "#8: Ratio Cross-Multiplication",
        "ta": "#8: விகித பெருக்கல்",
        "hi": "#8: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#9: Digital Root Validation",
        "ta": "#9: டிஜிட்டல் ரூட்",
        "hi": "#9: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    },
    {
      "title": {
        "en": "#10: The 10% and 1% Rule",
        "ta": "#10: 10% மற்றும் 1% விதி",
        "hi": "#10: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    }
  ],
  "pipes-cisterns": [
    {
      "title": {
        "en": "#1: Pascal's Ratio for CI",
        "ta": "#1: பாஸ்கல் விகிதம் (CI)",
        "hi": "#1: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#2: Ratio Cross-Multiplication",
        "ta": "#2: விகித பெருக்கல்",
        "hi": "#2: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#3: Successive Percentage Formula",
        "ta": "#3: தொடர்ச்சியான சதவீதம்",
        "hi": "#3: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    },
    {
      "title": {
        "en": "#4: Squaring numbers ending in 5",
        "ta": "#4: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#4: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#5: Base 100 Multiplication",
        "ta": "#5: அடிப்படை 100 பெருக்கல்",
        "hi": "#5: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#6: The 10% and 1% Rule",
        "ta": "#6: 10% மற்றும் 1% விதி",
        "hi": "#6: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#7: Multiplication by 11",
        "ta": "#7: 11-ஆல் பெருக்குதல்",
        "hi": "#7: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    },
    {
      "title": {
        "en": "#8: Division by 5 (Double & Dot)",
        "ta": "#8: 5-ஆல் வகுத்தல்",
        "hi": "#8: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#9: Alligation Cross Method",
        "ta": "#9: கலவை குறுக்கு முறை",
        "hi": "#9: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#10: Digital Root Validation",
        "ta": "#10: டிஜிட்டல் ரூட்",
        "hi": "#10: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    }
  ],
  "probability": [
    {
      "title": {
        "en": "#1: Unit Digit Verification",
        "ta": "#1: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#1: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    },
    {
      "title": {
        "en": "#2: Base 100 Multiplication",
        "ta": "#2: அடிப்படை 100 பெருக்கல்",
        "hi": "#2: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#3: Alligation Cross Method",
        "ta": "#3: கலவை குறுக்கு முறை",
        "hi": "#3: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#4: Ratio Cross-Multiplication",
        "ta": "#4: விகித பெருக்கல்",
        "hi": "#4: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#5: Division by 5 (Double & Dot)",
        "ta": "#5: 5-ஆல் வகுத்தல்",
        "hi": "#5: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#6: Pascal's Ratio for CI",
        "ta": "#6: பாஸ்கல் விகிதம் (CI)",
        "hi": "#6: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#7: The 10% and 1% Rule",
        "ta": "#7: 10% மற்றும் 1% விதி",
        "hi": "#7: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#8: Squaring numbers ending in 5",
        "ta": "#8: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#8: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#9: Digital Root Validation",
        "ta": "#9: டிஜிட்டல் ரூட்",
        "hi": "#9: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    },
    {
      "title": {
        "en": "#10: Multiplication by 11",
        "ta": "#10: 11-ஆல் பெருக்குதல்",
        "hi": "#10: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    }
  ],
  "geometry-3d": [
    {
      "title": {
        "en": "#1: Multiplication by 11",
        "ta": "#1: 11-ஆல் பெருக்குதல்",
        "hi": "#1: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    },
    {
      "title": {
        "en": "#2: Unit Digit Verification",
        "ta": "#2: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#2: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    },
    {
      "title": {
        "en": "#3: Ratio Cross-Multiplication",
        "ta": "#3: விகித பெருக்கல்",
        "hi": "#3: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#4: Successive Percentage Formula",
        "ta": "#4: தொடர்ச்சியான சதவீதம்",
        "hi": "#4: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    },
    {
      "title": {
        "en": "#5: Base 100 Multiplication",
        "ta": "#5: அடிப்படை 100 பெருக்கல்",
        "hi": "#5: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#6: Squaring numbers ending in 5",
        "ta": "#6: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#6: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#7: The 10% and 1% Rule",
        "ta": "#7: 10% மற்றும் 1% விதி",
        "hi": "#7: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#8: Pascal's Ratio for CI",
        "ta": "#8: பாஸ்கல் விகிதம் (CI)",
        "hi": "#8: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#9: Division by 5 (Double & Dot)",
        "ta": "#9: 5-ஆல் வகுத்தல்",
        "hi": "#9: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#10: Alligation Cross Method",
        "ta": "#10: கலவை குறுக்கு முறை",
        "hi": "#10: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    }
  ],
  "coding-decoding": [
    {
      "title": {
        "en": "#1: Unit Digit Verification",
        "ta": "#1: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#1: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    },
    {
      "title": {
        "en": "#2: Successive Percentage Formula",
        "ta": "#2: தொடர்ச்சியான சதவீதம்",
        "hi": "#2: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    },
    {
      "title": {
        "en": "#3: Alligation Cross Method",
        "ta": "#3: கலவை குறுக்கு முறை",
        "hi": "#3: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#4: Pascal's Ratio for CI",
        "ta": "#4: பாஸ்கல் விகிதம் (CI)",
        "hi": "#4: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#5: Ratio Cross-Multiplication",
        "ta": "#5: விகித பெருக்கல்",
        "hi": "#5: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#6: Multiplication by 11",
        "ta": "#6: 11-ஆல் பெருக்குதல்",
        "hi": "#6: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    },
    {
      "title": {
        "en": "#7: Base 100 Multiplication",
        "ta": "#7: அடிப்படை 100 பெருக்கல்",
        "hi": "#7: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#8: Division by 5 (Double & Dot)",
        "ta": "#8: 5-ஆல் வகுத்தல்",
        "hi": "#8: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#9: The 10% and 1% Rule",
        "ta": "#9: 10% மற்றும் 1% விதி",
        "hi": "#9: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#10: Squaring numbers ending in 5",
        "ta": "#10: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#10: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    }
  ],
  "blood-relations": [
    {
      "title": {
        "en": "#1: Squaring numbers ending in 5",
        "ta": "#1: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#1: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#2: Division by 5 (Double & Dot)",
        "ta": "#2: 5-ஆல் வகுத்தல்",
        "hi": "#2: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#3: Ratio Cross-Multiplication",
        "ta": "#3: விகித பெருக்கல்",
        "hi": "#3: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#4: Pascal's Ratio for CI",
        "ta": "#4: பாஸ்கல் விகிதம் (CI)",
        "hi": "#4: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#5: Alligation Cross Method",
        "ta": "#5: கலவை குறுக்கு முறை",
        "hi": "#5: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#6: Unit Digit Verification",
        "ta": "#6: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#6: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    },
    {
      "title": {
        "en": "#7: The 10% and 1% Rule",
        "ta": "#7: 10% மற்றும் 1% விதி",
        "hi": "#7: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#8: Digital Root Validation",
        "ta": "#8: டிஜிட்டல் ரூட்",
        "hi": "#8: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    },
    {
      "title": {
        "en": "#9: Multiplication by 11",
        "ta": "#9: 11-ஆல் பெருக்குதல்",
        "hi": "#9: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    },
    {
      "title": {
        "en": "#10: Successive Percentage Formula",
        "ta": "#10: தொடர்ச்சியான சதவீதம்",
        "hi": "#10: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    }
  ],
  "direction-sense": [
    {
      "title": {
        "en": "#1: Unit Digit Verification",
        "ta": "#1: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#1: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    },
    {
      "title": {
        "en": "#2: Division by 5 (Double & Dot)",
        "ta": "#2: 5-ஆல் வகுத்தல்",
        "hi": "#2: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#3: Digital Root Validation",
        "ta": "#3: டிஜிட்டல் ரூட்",
        "hi": "#3: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    },
    {
      "title": {
        "en": "#4: The 10% and 1% Rule",
        "ta": "#4: 10% மற்றும் 1% விதி",
        "hi": "#4: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#5: Ratio Cross-Multiplication",
        "ta": "#5: விகித பெருக்கல்",
        "hi": "#5: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#6: Percentage Swap",
        "ta": "#6: சதவீதத்தை மாற்று",
        "hi": "#6: प्रतिशत स्वैप करें"
      },
      "desc": {
        "en": "x% of y is exactly the same as y% of x.",
        "ta": "சதவீதத்தை மாற்றுக.",
        "hi": "प्रतिशत स्वैप करें।"
      },
      "equation": "16% of 50 = ?",
      "traditional": [
        "(16/100) * 50 = 8"
      ],
      "vedic": [
        "Swap it to 50% of 16",
        "Half of 16 is 8. Instant!"
      ],
      "explanation": {
        "en": "Multiplication is commutative. (x/100)*y = (y/100)*x.",
        "ta": "பெருக்கல் விதி.",
        "hi": "गुणा विनिमेय है।"
      }
    },
    {
      "title": {
        "en": "#7: Alligation Cross Method",
        "ta": "#7: கலவை குறுக்கு முறை",
        "hi": "#7: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#8: Base 100 Multiplication",
        "ta": "#8: அடிப்படை 100 பெருக்கல்",
        "hi": "#8: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#9: Pascal's Ratio for CI",
        "ta": "#9: பாஸ்கல் விகிதம் (CI)",
        "hi": "#9: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#10: Successive Percentage Formula",
        "ta": "#10: தொடர்ச்சியான சதவீதம்",
        "hi": "#10: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    }
  ],
  "seating-arrangement": [
    {
      "title": {
        "en": "#1: Ratio Cross-Multiplication",
        "ta": "#1: விகித பெருக்கல்",
        "hi": "#1: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#2: Digital Root Validation",
        "ta": "#2: டிஜிட்டல் ரூட்",
        "hi": "#2: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    },
    {
      "title": {
        "en": "#3: The 10% and 1% Rule",
        "ta": "#3: 10% மற்றும் 1% விதி",
        "hi": "#3: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#4: Squaring numbers ending in 5",
        "ta": "#4: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#4: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#5: Base 100 Multiplication",
        "ta": "#5: அடிப்படை 100 பெருக்கல்",
        "hi": "#5: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#6: Alligation Cross Method",
        "ta": "#6: கலவை குறுக்கு முறை",
        "hi": "#6: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#7: Unit Digit Verification",
        "ta": "#7: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#7: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    },
    {
      "title": {
        "en": "#8: Successive Percentage Formula",
        "ta": "#8: தொடர்ச்சியான சதவீதம்",
        "hi": "#8: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    },
    {
      "title": {
        "en": "#9: Pascal's Ratio for CI",
        "ta": "#9: பாஸ்கல் விகிதம் (CI)",
        "hi": "#9: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#10: Division by 5 (Double & Dot)",
        "ta": "#10: 5-ஆல் வகுத்தல்",
        "hi": "#10: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    }
  ],
  "syllogism": [
    {
      "title": {
        "en": "#1: Multiplication by 11",
        "ta": "#1: 11-ஆல் பெருக்குதல்",
        "hi": "#1: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    },
    {
      "title": {
        "en": "#2: Successive Percentage Formula",
        "ta": "#2: தொடர்ச்சியான சதவீதம்",
        "hi": "#2: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    },
    {
      "title": {
        "en": "#3: Division by 5 (Double & Dot)",
        "ta": "#3: 5-ஆல் வகுத்தல்",
        "hi": "#3: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#4: Alligation Cross Method",
        "ta": "#4: கலவை குறுக்கு முறை",
        "hi": "#4: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#5: The 10% and 1% Rule",
        "ta": "#5: 10% மற்றும் 1% விதி",
        "hi": "#5: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#6: Unit Digit Verification",
        "ta": "#6: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#6: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    },
    {
      "title": {
        "en": "#7: Digital Root Validation",
        "ta": "#7: டிஜிட்டல் ரூட்",
        "hi": "#7: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    },
    {
      "title": {
        "en": "#8: Percentage Swap",
        "ta": "#8: சதவீதத்தை மாற்று",
        "hi": "#8: प्रतिशत स्वैप करें"
      },
      "desc": {
        "en": "x% of y is exactly the same as y% of x.",
        "ta": "சதவீதத்தை மாற்றுக.",
        "hi": "प्रतिशत स्वैप करें।"
      },
      "equation": "16% of 50 = ?",
      "traditional": [
        "(16/100) * 50 = 8"
      ],
      "vedic": [
        "Swap it to 50% of 16",
        "Half of 16 is 8. Instant!"
      ],
      "explanation": {
        "en": "Multiplication is commutative. (x/100)*y = (y/100)*x.",
        "ta": "பெருக்கல் விதி.",
        "hi": "गुणा विनिमेय है।"
      }
    },
    {
      "title": {
        "en": "#9: Ratio Cross-Multiplication",
        "ta": "#9: விகித பெருக்கல்",
        "hi": "#9: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#10: Squaring numbers ending in 5",
        "ta": "#10: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#10: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    }
  ],
  "clock-problems": [
    {
      "title": {
        "en": "#1: Squaring numbers ending in 5",
        "ta": "#1: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#1: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#2: Unit Digit Verification",
        "ta": "#2: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#2: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    },
    {
      "title": {
        "en": "#3: Multiplication by 11",
        "ta": "#3: 11-ஆல் பெருக்குதல்",
        "hi": "#3: 11 से गुणा"
      },
      "desc": {
        "en": "Sandwich addition rule for x11.",
        "ta": "இடையில் சொருகுதல்.",
        "hi": "बीच में रखना।"
      },
      "equation": "43 × 11",
      "traditional": [
        "43 × 10 = 430",
        "43 × 1 = 43",
        "430 + 43 = 473"
      ],
      "vedic": [
        "Write the outer digits: 4 [sum] 3",
        "Add 4+3 = 7",
        "Sandwich them: 473"
      ],
      "explanation": {
        "en": "Antyayoreva Sutra allows bypassing standard multiplication.",
        "ta": "ஆண்ட்யயோரேவா சூத்திரம்.",
        "hi": "अंत्ययोरेव सूत्र।"
      }
    },
    {
      "title": {
        "en": "#4: Successive Percentage Formula",
        "ta": "#4: தொடர்ச்சியான சதவீதம்",
        "hi": "#4: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    },
    {
      "title": {
        "en": "#5: Pascal's Ratio for CI",
        "ta": "#5: பாஸ்கல் விகிதம் (CI)",
        "hi": "#5: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    },
    {
      "title": {
        "en": "#6: Division by 5 (Double & Dot)",
        "ta": "#6: 5-ஆல் வகுத்தல்",
        "hi": "#6: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#7: Ratio Cross-Multiplication",
        "ta": "#7: விகித பெருக்கல்",
        "hi": "#7: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#8: The 10% and 1% Rule",
        "ta": "#8: 10% மற்றும் 1% விதி",
        "hi": "#8: 10% और 1% नियम"
      },
      "desc": {
        "en": "Break down percentages into 10s and 1s.",
        "ta": "பிரித்து கணக்கிடு.",
        "hi": "विभाजित करके प्रतिशत की गणना करें।"
      },
      "equation": "23% of 450",
      "traditional": [
        "(23/100) * 450 = 103.5"
      ],
      "vedic": [
        "10% is 45. So 20% is 90.",
        "1% is 4.5. So 3% is 13.5",
        "90 + 13.5 = 103.5"
      ],
      "explanation": {
        "en": "Decimal shifting allows mental addition instead of multiplication.",
        "ta": "தசமத்தை நகர்த்துவது எளிது.",
        "hi": "दशमलव को स्थानांतरित करना।"
      }
    },
    {
      "title": {
        "en": "#9: Percentage Swap",
        "ta": "#9: சதவீதத்தை மாற்று",
        "hi": "#9: प्रतिशत स्वैप करें"
      },
      "desc": {
        "en": "x% of y is exactly the same as y% of x.",
        "ta": "சதவீதத்தை மாற்றுக.",
        "hi": "प्रतिशत स्वैप करें।"
      },
      "equation": "16% of 50 = ?",
      "traditional": [
        "(16/100) * 50 = 8"
      ],
      "vedic": [
        "Swap it to 50% of 16",
        "Half of 16 is 8. Instant!"
      ],
      "explanation": {
        "en": "Multiplication is commutative. (x/100)*y = (y/100)*x.",
        "ta": "பெருக்கல் விதி.",
        "hi": "गुणा विनिमेय है।"
      }
    },
    {
      "title": {
        "en": "#10: Alligation Cross Method",
        "ta": "#10: கலவை குறுக்கு முறை",
        "hi": "#10: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    }
  ],
  "cube-dice": [
    {
      "title": {
        "en": "#1: Base 100 Multiplication",
        "ta": "#1: அடிப்படை 100 பெருக்கல்",
        "hi": "#1: बेस 100 गुणन"
      },
      "desc": {
        "en": "Multiply numbers near 100 fast.",
        "ta": "100 க்கு அருகிலுள்ள எண்களை பெருக்குதல்.",
        "hi": "100 के करीब की संख्याओं का गुणा।"
      },
      "equation": "96 × 97",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "96 is -4, 97 is -3",
        "Cross subtract: 96-3 = 93",
        "Multiply differences: -4 × -3 = 12",
        "Result: 9312"
      ],
      "explanation": {
        "en": "Nikhilam Sutra is highly efficient for powers of 10.",
        "ta": "நிகிலம் சூத்திரம்.",
        "hi": "निखिलम सूत्र।"
      }
    },
    {
      "title": {
        "en": "#2: Division by 5 (Double & Dot)",
        "ta": "#2: 5-ஆல் வகுத்தல்",
        "hi": "#2: 5 से भाग"
      },
      "desc": {
        "en": "Instead of dividing, multiply by 2.",
        "ta": "வகுப்பதற்குப் பதிலாக, இரட்டிப்பாக்கு.",
        "hi": "भाग देने के स्थान पर दुगुना करें।"
      },
      "equation": "243 ÷ 5 = ?",
      "traditional": [
        "Long division taking 30 seconds"
      ],
      "vedic": [
        "Double the number: 243 × 2 = 486",
        "Place a decimal one spot from right: 48.6"
      ],
      "explanation": {
        "en": "Dividing by 5 is the same as multiplying by 2/10.",
        "ta": "5-ஆல் வகுப்பது 2/10-ஆல் பெருக்குவதற்கு சமம்.",
        "hi": "5 से भाग देना 2/10 से गुणा करने के बराबर है।"
      }
    },
    {
      "title": {
        "en": "#3: Successive Percentage Formula",
        "ta": "#3: தொடர்ச்சியான சதவீதம்",
        "hi": "#3: क्रमिक प्रतिशत"
      },
      "desc": {
        "en": "Net change for two percentage changes.",
        "ta": "நிகர மாற்றம்.",
        "hi": "शुद्ध परिवर्तन।"
      },
      "equation": "+20% and -10%",
      "traditional": [
        "Assume 100",
        "100 -> 120 -> 108",
        "Net = +8%"
      ],
      "vedic": [
        "Net = x + y + xy/100",
        "20 - 10 + (20)(-10)/100",
        "10 - 2 = 8%"
      ],
      "explanation": {
        "en": "Direct formula eliminates the need for baseline assumptions.",
        "ta": "நேரடி சூத்திரம்.",
        "hi": "प्रत्यक्ष सूत्र।"
      }
    },
    {
      "title": {
        "en": "#4: Squaring numbers ending in 5",
        "ta": "#4: 5-இல் முடியும் எண்களின் வர்க்கம்",
        "hi": "#4: 5 पर समाप्त होने वाली संख्याओं का वर्ग"
      },
      "desc": {
        "en": "Instant square of any number ending in 5.",
        "ta": "நொடியில் காணுதல்.",
        "hi": "तुरंत ज्ञात करें।"
      },
      "equation": "65 × 65",
      "traditional": [
        "Long multiplication"
      ],
      "vedic": [
        "Answer always ends in 25.",
        "Multiply tens digit (6) by next number (7) = 42",
        "Combine: 4225"
      ],
      "explanation": {
        "en": "Ekadhikena Purvena Sutra.",
        "ta": "முந்தைய எண்ணை விட ஒன்று அதிகம்.",
        "hi": "एकाधिकेन पूर्वेण सूत्र।"
      }
    },
    {
      "title": {
        "en": "#5: Digital Root Validation",
        "ta": "#5: டிஜிட்டல் ரூட்",
        "hi": "#5: डिजिटल रूट"
      },
      "desc": {
        "en": "Verify answers without full calculation.",
        "ta": "முழுக்க கணக்கிடாமல் விடையைச் சரிபார்த்தல்.",
        "hi": "पूरी तरह से हल किए बिना गणना सत्यापित करें।"
      },
      "equation": "Verify: 123 × 456 = 56088",
      "traditional": [
        "Calculate completely and check against the options."
      ],
      "vedic": [
        "Sum digits of 123 -> 6",
        "Sum digits of 456 -> 15 -> 6",
        "6 × 6 = 36 -> 9",
        "Right side sum: 5+6+0+8+8 = 27 -> 9. Match!"
      ],
      "explanation": {
        "en": "The sum of digits (digital root) of LHS must match RHS.",
        "ta": "இடது, வலது பக்க எண்களின் கூட்டுத்தொகை சமம்.",
        "hi": "LHS के अंकों का योग RHS के बराबर होना चाहिए।"
      }
    },
    {
      "title": {
        "en": "#6: Ratio Cross-Multiplication",
        "ta": "#6: விகித பெருக்கல்",
        "hi": "#6: अनुपात क्रॉस-गुणन"
      },
      "desc": {
        "en": "Solve proportionality instantly.",
        "ta": "விகிதாச்சாரத்தை உடனடியாக தீர்க்கவும்.",
        "hi": "समानुपात को तुरंत हल करें।"
      },
      "equation": "A:B = 2:3, B:C = 4:5. Find A:B:C.",
      "traditional": [
        "Make B equal in both (LCM of 3 and 4 is 12)",
        "A:B = 8:12, B:C = 12:15"
      ],
      "vedic": [
        "Write them stacked.",
        "Multiply vertically for A: 2×4=8",
        "Multiply cross for B: 3×4=12",
        "Multiply vertically for C: 3×5=15. Result 8:12:15"
      ],
      "explanation": {
        "en": "The inverted-N multiplication pattern saves writing.",
        "ta": "தலைகீழ் N முறை.",
        "hi": "उलटा N पैटर्न।"
      }
    },
    {
      "title": {
        "en": "#7: Unit Digit Verification",
        "ta": "#7: கடைசி இலக்க சரிபார்ப்பு",
        "hi": "#7: अंतिम अंक सत्यापन"
      },
      "desc": {
        "en": "Eliminate options using just the last digit.",
        "ta": "கடைசி இலக்கத்தை வைத்து நீக்குதல்.",
        "hi": "अंतिम अंक का उपयोग करके हटा दें।"
      },
      "equation": "784 × 39 = ? (Options: 30576, 30578)",
      "traditional": [
        "Calculate full product"
      ],
      "vedic": [
        "Look at unit digits: 4 × 9 = 36.",
        "Answer MUST end in 6.",
        "Select 30576 instantly."
      ],
      "explanation": {
        "en": "Multiplication of unit digits always yields the unit digit of the final product.",
        "ta": "கடைசி இலக்கங்களின் பெருக்கல்.",
        "hi": "अंतिम अंकों का गुणन।"
      }
    },
    {
      "title": {
        "en": "#8: Percentage Swap",
        "ta": "#8: சதவீதத்தை மாற்று",
        "hi": "#8: प्रतिशत स्वैप करें"
      },
      "desc": {
        "en": "x% of y is exactly the same as y% of x.",
        "ta": "சதவீதத்தை மாற்றுக.",
        "hi": "प्रतिशत स्वैप करें।"
      },
      "equation": "16% of 50 = ?",
      "traditional": [
        "(16/100) * 50 = 8"
      ],
      "vedic": [
        "Swap it to 50% of 16",
        "Half of 16 is 8. Instant!"
      ],
      "explanation": {
        "en": "Multiplication is commutative. (x/100)*y = (y/100)*x.",
        "ta": "பெருக்கல் விதி.",
        "hi": "गुणा विनिमेय है।"
      }
    },
    {
      "title": {
        "en": "#9: Alligation Cross Method",
        "ta": "#9: கலவை குறுக்கு முறை",
        "hi": "#9: मिश्रण क्रॉस विधि"
      },
      "desc": {
        "en": "Find mix ratios of two groups.",
        "ta": "இரு குழுக்களின் கலவை விகிதம்.",
        "hi": "दो समूहों का मिश्रण अनुपात।"
      },
      "equation": "Mix Rs 20/kg and Rs 30/kg to get Rs 24/kg",
      "traditional": [
        "20x + 30y = 24(x+y)"
      ],
      "vedic": [
        "Write 20 and 30 on top, 24 in middle.",
        "Cross subtract: (30-24) = 6, (24-20) = 4.",
        "Ratio = 6:4 = 3:2"
      ],
      "explanation": {
        "en": "Visual representation of weighted averages.",
        "ta": "எடையுள்ள சராசரிகளின் காட்சி.",
        "hi": "भारित औसत का दृश्य प्रतिनिधित्व।"
      }
    },
    {
      "title": {
        "en": "#10: Pascal's Ratio for CI",
        "ta": "#10: பாஸ்கல் விகிதம் (CI)",
        "hi": "#10: पास्कल अनुपात (CI)"
      },
      "desc": {
        "en": "Find CI without powers.",
        "ta": "சூத்திரங்கள் இன்றி கூட்டு வட்டி.",
        "hi": "बिना भारी सूत्रों के CI।"
      },
      "equation": "CI for 2 years",
      "traditional": [
        "A = P(1+R/100)^2"
      ],
      "vedic": [
        "Use ratio 2:1",
        "Calculate R% of P = X",
        "Calculate R% of X = Y",
        "CI = 2X + 1Y"
      ],
      "explanation": {
        "en": "Derived from binomial theorem coefficients.",
        "ta": "ஈருறுப்பு விரிவாக்கம்.",
        "hi": "द्विपद विस्तार पर आधारित।"
      }
    }
  ]
};

export const defaultTricks: TrickData[] = topicVedicTricks['number-system'];