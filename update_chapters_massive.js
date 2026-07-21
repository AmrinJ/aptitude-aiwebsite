const fs = require('fs');

const massiveChapters = {
  'number-system': {
    formulas: `
# Formulas & Shortcuts for Number System

## 1. Sum of Series
Instead of adding numbers one by one, use these algebraic formulas:
*   **Sum of first N natural numbers:** $S = \\frac{N(N+1)}{2}$
    *   *Example:* Sum of 1 to 100 = $\\frac{100 \\times 101}{2} = 5050$
*   **Sum of squares of first N natural numbers:** $S = \\frac{N(N+1)(2N+1)}{6}$
*   **Sum of cubes of first N natural numbers:** $S = (\\frac{N(N+1)}{2})^2$

## 2. Finding the Number of Factors
If you need to know how many numbers divide evenly into a large number (like 360):
1.  **Prime Factorize:** Break it down into prime powers. $360 = 2^3 \\times 3^2 \\times 5^1$.
2.  **Add 1 to all powers:** $(3+1), (2+1), (1+1)$
3.  **Multiply them:** $4 \\times 3 \\times 2 = 24$.
4.  *Result:* 360 has exactly 24 factors!

## 3. The Unit Digit Cyclicity Trick
To find the last digit of $X^Y$:
*   Numbers ending in **0, 1, 5, 6** ALWAYS end in 0, 1, 5, 6 respectively, no matter the power!
*   Numbers ending in **4 or 9**:
    *   $4^{\\text{odd}}$ ends in 4, $4^{\\text{even}}$ ends in 6.
    *   $9^{\\text{odd}}$ ends in 9, $9^{\\text{even}}$ ends in 1.
*   Numbers ending in **2, 3, 7, 8**: They have a cycle of 4. Divide the power by 4 and use the remainder.
`,
    mistakes: `
# Common Pitfalls in Number System

## 1. The "1 is Prime" Trap
*   **The Trap:** In exams, you might be asked "What is the average of the first 5 prime numbers?" Many students start with 1, 2, 3, 5, 7.
*   **The Reality:** 1 is a unique number. It is NEITHER prime nor composite. The first five primes are actually 2, 3, 5, 7, 11!

## 2. Confusing "Whole Numbers" with "Natural Numbers"
*   **The Trap:** "Find the sum of the first 10 whole numbers." Students often use the formula $N(N+1)/2$ with $N=10$, giving 55.
*   **The Reality:** Whole numbers start at 0! The first 10 whole numbers are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. The sum is actually 45.

## 3. Applying Divisibility Rules Incorrectly
*   **The Trap:** Thinking that a number divisible by 3 and 6 is definitely divisible by 18.
*   **The Reality:** This only works if the two divisors are **co-prime** (share no common factors). 3 and 6 share a factor of 3. For example, 12 is divisible by 3 and 6, but it is NOT divisible by 18! Always test with co-prime pairs (like 2 and 9 for 18).
`
  },
  'default': {
    formulas: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   $(a + b)^2 = a^2 + b^2 + 2ab$
*   $(a - b)^2 = a^2 + b^2 - 2ab$
*   $a^2 - b^2 = (a + b)(a - b)$ (The most frequently used identity in exams!)
*   $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   $1/2 = 50\\%$
*   $1/3 = 33.33\\%$
*   $1/4 = 25\\%$
*   $1/5 = 20\\%$
*   $1/6 = 16.66\\%$
*   $1/8 = 12.5\\%$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is $142 \\times 233$, the answer MUST end in 6 ($2 \\times 3$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakes: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: $a + b + (ab/100)$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by $5/18$ to convert to m/s first!
`
  }
};

let fsStr = fs.readFileSync('./src/data/topicContentDict.ts', 'utf8');

// We will inject formulasInDepth and mistakesInDepth into all topics
const topics = [
  'number-system', 'simplification', 'percentage', 'profit-loss', 'simple-interest', 
  'compound-interest', 'average', 'train-problems', 'boats-streams', 'pipes-cisterns', 
  'probability', 'geometry-3d', 'coding-decoding', 'blood-relations', 'direction-sense', 
  'seating-arrangement', 'syllogism', 'clock-problems', 'cube-dice'
];

for (const topic of topics) {
  const content = massiveChapters[topic] || massiveChapters['default'];
  
  const safeFormulas = content.formulas.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\\$/g, '$$$$');
  const safeMistakes = content.mistakes.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\\$/g, '$$$$');
  
  // Find the end of the object for this topic (look for mistakes: ..., formulas: ... )
  // Actually, the easiest way is to inject it right before inDepthTheory
  const regex = new RegExp("('" + topic + "'\\s*:\\s*{[\\s\\S]*?)(inDepthTheory\\s*:\\s*\\`)", "g");
  
  if (regex.test(fsStr)) {
    fsStr = fsStr.replace(regex, "$1formulasInDepth: `" + safeFormulas + "`,\n    mistakesInDepth: `" + safeMistakes + "`,\n    $2");
  }
}

fs.writeFileSync('./src/data/topicContentDict.ts', fsStr);
console.log('Successfully added formulasInDepth and mistakesInDepth to all topics!');
