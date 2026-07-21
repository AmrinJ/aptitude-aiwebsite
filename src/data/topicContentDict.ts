// Dictionary containing actual educational content for all 19 topics
export const topicContentDict: Record<string, any> = {
  'number-system': {
    concepts: "Detailed concept for Number System. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Number System.",
    mistakes: "Common mistake in Number System: skipping the fundamentals.",
    formulas: "Formulas for Number System: Always double check your units.",
    formulasInDepth: `
# Formulas & Shortcuts for Number System

## 1. Sum of Series
Instead of adding numbers one by one, use these algebraic formulas:
*   **Sum of first N natural numbers:** \$S = \\frac{N(N+1)}{2}\$
    *   *Example:* Sum of 1 to 100 = \$\\frac{100 \\times 101}{2} = 5050\$
*   **Sum of squares of first N natural numbers:** \$S = \\frac{N(N+1)(2N+1)}{6}\$
*   **Sum of cubes of first N natural numbers:** \$S = (\\frac{N(N+1)}{2})^2\$

## 2. Finding the Number of Factors
If you need to know how many numbers divide evenly into a large number (like 360):
1.  **Prime Factorize:** Break it down into prime powers. \$360 = 2^3 \\times 3^2 \\times 5^1\$.
2.  **Add 1 to all powers:** \$(3+1), (2+1), (1+1)\$
3.  **Multiply them:** \$4 \\times 3 \\times 2 = 24\$.
4.  *Result:* 360 has exactly 24 factors!

## 3. The Unit Digit Cyclicity Trick
To find the last digit of \$X^Y\$:
*   Numbers ending in **0, 1, 5, 6** ALWAYS end in 0, 1, 5, 6 respectively, no matter the power!
*   Numbers ending in **4 or 9**:
    *   \$4^{\\text{odd}}\$ ends in 4, \$4^{\\text{even}}\$ ends in 6.
    *   \$9^{\\text{odd}}\$ ends in 9, \$9^{\\text{even}}\$ ends in 1.
*   Numbers ending in **2, 3, 7, 8**: They have a cycle of 4. Divide the power by 4 and use the remainder.
`,
    mistakesInDepth: `
# Common Pitfalls in Number System

## 1. The "1 is Prime" Trap
*   **The Trap:** In exams, you might be asked "What is the average of the first 5 prime numbers?" Many students start with 1, 2, 3, 5, 7.
*   **The Reality:** 1 is a unique number. It is NEITHER prime nor composite. The first five primes are actually 2, 3, 5, 7, 11!

## 2. Confusing "Whole Numbers" with "Natural Numbers"
*   **The Trap:** "Find the sum of the first 10 whole numbers." Students often use the formula \$N(N+1)/2\$ with \$N=10\$, giving 55.
*   **The Reality:** Whole numbers start at 0! The first 10 whole numbers are 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. The sum is actually 45.

## 3. Applying Divisibility Rules Incorrectly
*   **The Trap:** Thinking that a number divisible by 3 and 6 is definitely divisible by 18.
*   **The Reality:** This only works if the two divisors are **co-prime** (share no common factors). 3 and 6 share a factor of 3. For example, 12 is divisible by 3 and 6, but it is NOT divisible by 18! Always test with co-prime pairs (like 2 and 9 for 18).
`,
    inDepthTheory: `
# The Ultimate Guide to the Number System

Welcome to the Number System! This is the absolute foundation of all quantitative aptitude. Without understanding numbers, solving complex math problems is impossible. Let's break it down step-by-step so that even if you haven't touched math in years, you will understand it perfectly.

## Step 1: The Family of Numbers
Imagine numbers as a big family tree.
1.  **Natural Numbers (N):** Think of these as "counting numbers". When you count apples, you start at 1, 2, 3... You never start at zero. So, \$N = \\{1, 2, 3, 4, ...\\}\$.
2.  **Whole Numbers (W):** If we take the Natural Numbers and just add a **Zero (0)** to the beginning, we get Whole Numbers. \$W = \\{0, 1, 2, 3, ...\\}\$.
3.  **Integers (Z):** Now, let's add negative numbers. Think of temperature dropping below zero. Integers include negatives, zero, and positives. \$Z = \\{... -3, -2, -1, 0, 1, 2, 3 ...\\}\$.
4.  **Rational Numbers (Q):** Any number that you can write as a fraction (\$p/q\$) where the bottom number (\$q\$) is NOT zero. Examples: \$1/2, 3/4, -5/6\$. Even the number \$5\$ is rational because you can write it as \$5/1\$.
5.  **Irrational Numbers:** These are the rebellious numbers. They *cannot* be written as simple fractions. Their decimals go on forever without repeating. The most famous examples are \$\\pi\$ (3.14159...) and \$\\sqrt{2}\$.

## Step 2: Primes vs. Composites
This is a favorite topic in exams!
*   **Prime Numbers:** A prime number is a lonely number. It can ONLY be divided perfectly by **1** and **itself**. 
    *   *Examples:* 2, 3, 5, 7, 11, 13...
    *   **GOLDEN RULE 1:** The number **1** is neither prime nor composite. It is a unique number.
    *   **GOLDEN RULE 2:** The number **2** is the *only* even prime number in existence. All other prime numbers are odd!
*   **Composite Numbers:** These numbers have more than two factors. They can be divided by other numbers.
    *   *Examples:* 4 (divisible by 1, 2, 4), 6 (divisible by 1, 2, 3, 6).
*   **Co-Prime Numbers:** Two numbers are "co-prime" if they do not share any common factors other than 1. For example, 8 and 15. Neither is prime, but together, they don't share any divisors.

## Step 3: The Magic of Divisibility Rules
Why divide a huge number when you can just look at it and know? Memorize these rules to save precious minutes in exams:
*   **Divisibility by 2:** Look at the last digit. Is it 0, 2, 4, 6, or 8? If yes, it's divisible by 2. (e.g., 459**8**)
*   **Divisibility by 3:** Add up all the digits. If the sum is divisible by 3, the whole number is. (e.g., 123 \$\\rightarrow\$ 1+2+3 = 6. Since 6 is divisible by 3, 123 is too).
*   **Divisibility by 4:** Look at the **last two digits**. If they form a number divisible by 4, the whole number is. (e.g., 57**24** \$\\rightarrow\$ 24 is divisible by 4).
*   **Divisibility by 5:** The last digit MUST be a 0 or a 5. (e.g., 100**5**)
*   **Divisibility by 9:** Just like the rule for 3, add up all the digits. If the sum is divisible by 9, the number is divisible by 9.
*   **Divisibility by 11:** This one is tricky but important! Sum the digits in the odd positions, then sum the digits in the even positions. Subtract the two sums. If the result is 0 or a multiple of 11, the number is divisible by 11. (e.g., 1331 \$\\rightarrow\$ (1+3) - (3+1) = 4 - 4 = 0).

## Step 4: Step-by-Step Example Problem
**Question:** What is the unit digit (the last digit) of the number \$(2467)^{153}\$?

**How a beginner solves it:** They might try to calculate \$2467 \\times 2467...\$ and give up.
**How an expert solves it:**
1.  **Ignore everything except the last digit.** We only care about the \$7\$ in \$2467\$. So the problem becomes finding the unit digit of \$7^{153}\$.
2.  **Find the pattern (Cyclicity).** Let's multiply 7 by itself and look at the last digits:
    *   \$7^1 = 7\$ (ends in 7)
    *   \$7^2 = 49\$ (ends in 9)
    *   \$7^3 = 343\$ (ends in 3)
    *   \$7^4 = 2401\$ (ends in 1)
    *   \$7^5 = ...7\$ (The pattern repeats! 7, 9, 3, 1... 7, 9, 3, 1...)
3.  **Divide the power by the pattern length.** The pattern repeats every 4 steps. So divide the power (153) by 4.
    *   \$153 \\div 4 = 38\$ with a **remainder of 1**.
4.  **Use the remainder.** A remainder of 1 means the answer is the 1st number in our pattern. The 1st number in our pattern (7, 9, 3, 1) is **7**.
5.  **Final Answer:** The unit digit is 7!
`
  },
  'simplification': {
    concepts: "Detailed concept for Simplification. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Simplification.",
    mistakes: "Common mistake in Simplification: skipping the fundamentals.",
    formulas: "Formulas for Simplification: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Simplification

Simplification is all about taking a scary, messy math equation and turning it into a single, clean number. It tests your ability to follow rules and calculate accurately without panicking.

## Step 1: The Golden Rule - BODMAS
If you try to solve an equation from left to right like reading a book, you will get the wrong answer 99% of the time. You **must** follow the BODMAS rule. It tells you the exact order in which to solve things.

*   **B - Brackets (Parentheses):** Always solve what is inside brackets first. If there are brackets inside brackets, start from the innermost one!
    *   Order of brackets: 1st (), 2nd {}, 3rd [].
*   **O - Of (or Orders/Powers):** This means solving powers like \$2^3\$ or square roots like \$\\sqrt{16}\$. "Of" also means multiply (e.g., "half OF 50" means \$1/2 \\times 50\$).
*   **D - Division (\$\\div\$)**
*   **M - Multiplication (\$\\times\$)**
    *   *Note: Division and Multiplication are best friends. They have the same priority. Solve them from left to right as they appear.*
*   **A - Addition (\$+\$)**
*   **S - Subtraction (\$-\$)**
    *   *Note: Addition and Subtraction also have the same priority. Solve them from left to right.*

## Step 2: Essential Algebraic Formulas (Identities)
Sometimes, an equation is too big to calculate normally. Exam creators hide secret patterns in them. If you memorize these formulas, you can spot the pattern and solve the equation in 5 seconds instead of 5 minutes.

1.  **\$(a + b)^2 = a^2 + 2ab + b^2\$**
2.  **\$(a - b)^2 = a^2 - 2ab + b^2\$**
3.  **\$a^2 - b^2 = (a + b)(a - b)\$** (This is the most important one! If you see two squares being subtracted, use this immediately).
4.  **\$a^3 + b^3 = (a + b)(a^2 - ab + b^2)\$**
5.  **\$a^3 - b^3 = (a - b)(a^2 + ab + b^2)\$**

## Step 3: Step-by-Step Example Problem (Applying BODMAS)
**Question:** Solve: \$15 + 24 \\div 3 - 1 \\times 6\$

**How to solve it:**
1.  **Check for Brackets (B):** None.
2.  **Check for Of/Powers (O):** None.
3.  **Check for Division (D):** We have \$24 \\div 3\$. Let's solve that first. \$24 \\div 3 = 8\$.
    *   *The equation is now: \$15 + 8 - 1 \\times 6\$*
4.  **Check for Multiplication (M):** We have \$1 \\times 6\$. Let's solve that. \$1 \\times 6 = 6\$.
    *   *The equation is now: \$15 + 8 - 6\$*
5.  **Check for Addition (A) and Subtraction (S):** We have both. Since they have equal priority, we solve from left to right.
    *   First, add: \$15 + 8 = 23\$.
    *   *The equation is now: \$23 - 6\$*
    *   Finally, subtract: \$23 - 6 = 17\$.
6.  **Final Answer: 17**

## Step 4: Step-by-Step Example Problem (Applying Formulas)
**Question:** Find the value of: \$\\frac{103 \\times 103 - 97 \\times 97}{103 - 97}\$

**How a beginner solves it:** They will try to multiply 103 by 103... it will take forever.
**How an expert solves it:**
1.  **Spot the pattern:** Let \$a = 103\$ and \$b = 97\$.
2.  Rewrite the equation using letters: \$\\frac{a \\times a - b \\times b}{a - b}\$ which is exactly \$\\frac{a^2 - b^2}{a - b}\$.
3.  **Use the secret formula:** We know that \$a^2 - b^2 = (a+b)(a-b)\$.
4.  Substitute the formula into the top part: \$\\frac{(a+b)(a-b)}{(a-b)}\$.
5.  **Cancel it out:** The \$(a-b)\$ on the top and the \$(a-b)\$ on the bottom cancel each other out completely!
6.  We are left with just: \$(a + b)\$.
7.  Put the numbers back in: \$103 + 97 = 200\$.
8.  **Final Answer: 200** (Solved in 5 seconds without heavy multiplication!)
`
  },
  'percentage': {
    concepts: "Detailed concept for Percentage. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Percentage.",
    mistakes: "Common mistake in Percentage: skipping the fundamentals.",
    formulas: "Formulas for Percentage: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Percentages

"Percent" literally means "Per Centum" in Latin, which translates to "For every 100". It is simply a way of comparing a number to 100. If you score 45 out of 100 on a test, you scored 45%.

## Step 1: Translating Percentages to Fractions
The biggest secret to solving percentage problems instantly is to stop using percentages and start using fractions. Memorize this table, it is your best weapon:
*   \$50\\% = 1/2\$
*   \$33.33\\% = 1/3\$
*   \$25\\% = 1/4\$
*   \$20\\% = 1/5\$
*   \$16.66\\% = 1/6\$
*   \$14.28\\% = 1/7\$
*   \$12.5\\% = 1/8\$
*   \$11.11\\% = 1/9\$
*   \$10\\% = 1/10\$

*Why do this?* If a question asks you to find "12.5% of 800", calculating \$(12.5 / 100) \\times 800\$ is annoying. But if you know \$12.5\\% = 1/8\$, you just calculate \$1/8 \\times 800 = 100\$. Done in 1 second!

## Step 2: The Multiplier Method (Increasing and Decreasing)
Never calculate the percentage and then add it later. Do it in one step using multipliers.
*   **To INCREASE a number by R%:** Multiply the number by \$(1 + R/100)\$.
    *   *Example:* Increase a salary of \$500 by 20%. The multiplier is \$1 + 0.20 = 1.20\$. So, \$500 \\times 1.20 = 600\$.
*   **To DECREASE a number by R%:** Multiply the number by \$(1 - R/100)\$.
    *   *Example:* A \$500 TV is discounted by 20%. The multiplier is \$1 - 0.20 = 0.80\$. So, \$500 \\times 0.80 = 400\$.

## Step 3: Successive Percentages (Changes happening back-to-back)
If the price of a phone is increased by 20%, and then next month it is decreased by 10%, what is the total change?
**Warning:** It is NOT \$20 - 10 = +10\\%\$. You cannot add percentages linearly!
Use the Successive Formula: **Net Change = \$a + b + \\frac{ab}{100}\$**
*   Increase = positive (+). Decrease = negative (-).
*   Let \$a = +20\$ and \$b = -10\$.
*   Net Change = \$20 - 10 + \\frac{(20)(-10)}{100}\$
*   Net Change = \$10 - 2 = +8\\%\$.
*   The final price is actually 8% higher, not 10% higher!

## Step 4: Step-by-Step Example Problem (Product Constancy)
**Question:** The price of petrol increases by 25%. By what percentage must a person reduce their driving (consumption) so that their monthly petrol bill (expenditure) remains exactly the same?

**How to solve it:**
1.  **Understand the relationship:** Price \$\\times\$ Consumption = Expenditure. If the price goes up, you must consume less to keep the bill the same.
2.  **Use the Shortcut Formula:** When Price increases by \$R\\%\$, the required Reduction % is: \$\\frac{R}{100 + R} \\times 100\$.
3.  **Plug in the numbers:** \$R = 25\$.
4.  Required Reduction = \$\\frac{25}{100 + 25} \\times 100\$
5.  Required Reduction = \$\\frac{25}{125} \\times 100\$
6.  Simplify the fraction: \$25/125 = 1/5\$.
7.  We know \$1/5 = 20\\%\$.
8.  **Final Answer:** The person must reduce their driving by 20%.
`
  },
  'profit-loss': {
    concepts: "Detailed concept for Profit & Loss. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Profit & Loss.",
    mistakes: "Common mistake in Profit & Loss: skipping the fundamentals.",
    formulas: "Formulas for Profit & Loss: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Profit & Loss

Profit and Loss is just "Percentages" applied to real-world buying and selling. If you understand percentages, you already know 90% of Profit and Loss.

## Step 1: The Three Pillars
You must understand these three terms perfectly:
1.  **Cost Price (CP):** The amount of money the shopkeeper paid to buy the item from the factory. **GOLDEN RULE: Profit and Loss are ALWAYS calculated based on the Cost Price!** Think of CP as your "100%" baseline.
2.  **Selling Price (SP):** The amount of money the customer pays to take the item home.
    *   If SP is bigger than CP, the shopkeeper made a **Profit**. (\$Profit = SP - CP\$).
    *   If SP is smaller than CP, the shopkeeper suffered a **Loss**. (\$Loss = CP - SP\$).
3.  **Marked Price (MP) / MRP:** The price tag printed on the box. **GOLDEN RULE: Discounts are ALWAYS calculated based on the Marked Price!**

## Step 2: The Core Formulas
*   **Profit %** = \$\\frac{\\text{Profit}}{\\text{Cost Price (CP)}} \\times 100\$
*   **Loss %** = \$\\frac{\\text{Loss}}{\\text{Cost Price (CP)}} \\times 100\$
*   **Selling Price (from Profit)** = \$CP \\times (1 + \\frac{\\text{Profit \\%}}{100})\$
*   **Selling Price (from Discount)** = \$MP \\times (1 - \\frac{\\text{Discount \\%}}{100})\$

## Step 3: The "Ratio Method" Shortcut
Formulas are slow. Ratios are fast.
**Example:** A shopkeeper sells a watch at a profit of 20%.
1.  Convert the percentage to a fraction: \$20\\% = 1/5\$.
2.  Because profit is calculated on CP, the bottom number (denominator) is the CP. The top number (numerator) is the Profit.
3.  So, **CP = 5 units**, and **Profit = 1 unit**.
4.  Since \$SP = CP + Profit\$, we know **SP = 6 units**.
5.  Now, if the question says "The selling price is \$1200", you know that 6 units = \$1200. Therefore, 1 unit = \$200.
6.  You can instantly find the Cost Price: CP = 5 units = \$5 \\times 200 = 1000\$.

## Step 4: Step-by-Step Example Problem (Mark-up and Discount)
**Question:** A dealer marks his goods 30% above the Cost Price. He then allows a discount of 10% to the customer. What is his actual profit percentage?

**How to solve it:**
1.  **Assume CP is 100.** Whenever you don't have real dollar values, start with 100. Let Cost Price (CP) = 100.
2.  **Apply the Mark-up:** He marks the price 30% above CP.
    *   Marked Price (MP) = 100 + 30% of 100 = 130.
3.  **Apply the Discount:** He gives a 10% discount. *Remember, discount is always on the Marked Price!*
    *   Discount = 10% of 130 = 13.
4.  **Find the Selling Price:**
    *   Selling Price (SP) = MP - Discount = 130 - 13 = 117.
5.  **Calculate the Profit:**
    *   He bought it for 100 (CP). He sold it for 117 (SP).
    *   Profit = \$117 - 100 = 17\$.
6.  **Convert to Percentage:** Since our base CP was 100, the profit of 17 is exactly 17%.
7.  **Final Answer: 17% Profit.**
`
  },
  'simple-interest': {
    concepts: "Detailed concept for Simple Interest. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Simple Interest.",
    mistakes: "Common mistake in Simple Interest: skipping the fundamentals.",
    formulas: "Formulas for Simple Interest: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Simple Interest

Simple interest is the easiest type of interest to understand. It is called "simple" because the interest is ONLY calculated on the original amount of money you borrowed or invested. The interest amount stays exactly the same every single year.

## Step 1: The Three Variables
To calculate interest, you need to know three things:
1.  **Principal (P):** The original sum of money borrowed or invested. This is your starting point.
2.  **Rate (R):** The percentage of interest charged per year (per annum). E.g., 5% per year.
3.  **Time (T):** The duration for which the money is borrowed. **GOLDEN RULE: Time MUST always be in Years in the formula!**

## Step 2: The Core Formulas
*   **Simple Interest (SI) = \$\\frac{P \\times R \\times T}{100}\$**
*   **Amount (A) = Principal + Simple Interest**
    *   The "Amount" is the total money you have to pay back at the end. (The original loan PLUS the extra interest fee).
    *   \$A = P + \\frac{PRT}{100} = P(1 + \\frac{RT}{100})\$

## Step 3: Crucial Conversions for Time (T)
Examiners love to trick you by giving time in months or days. You must convert it to years before using the formula!
*   **Months to Years:** Divide by 12. (e.g., 8 months = \$8/12\$ years = \$2/3\$ of a year).
*   **Days to Years:** Divide by 365. (e.g., 73 days = \$73/365\$ years = \$1/5\$ of a year). *Note: They almost always use multiples of 73 because \$73 \\times 5 = 365\$.*

## Step 4: Step-by-Step Example Problem ("Becomes N times")
**Question:** A sum of money placed at simple interest doubles itself in 5 years. What is the rate of interest per annum?

**How to solve it:**
1.  **Understand "Doubles itself":** This means the final Amount (A) is twice the Principal (P). So, \$A = 2P\$.
2.  **Find the Interest earned:** If Amount = Principal + Interest, then Interest = Amount - Principal.
    *   Interest = \$2P - P = P\$.
    *   This means the Simple Interest earned is exactly equal to the original Principal!
3.  **Plug everything into the main formula:**
    *   \$SI = \\frac{P \\times R \\times T}{100}\$
    *   Substitute \$SI = P\$ and \$T = 5\$:
    *   \$P = \\frac{P \\times R \\times 5}{100}\$
4.  **Solve for R:**
    *   Cancel out P on both sides: \$1 = \\frac{R \\times 5}{100}\$
    *   \$100 = 5R\$
    *   \$R = 100 / 5 = 20\$.
5.  **Final Answer: 20%**
`
  },
  'compound-interest': {
    concepts: "Detailed concept for Compound Interest. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Compound Interest.",
    mistakes: "Common mistake in Compound Interest: skipping the fundamentals.",
    formulas: "Formulas for Compound Interest: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Compound Interest

Albert Einstein reportedly called compound interest the "eighth wonder of the world." Unlike Simple Interest, Compound Interest means you earn **"Interest on your Interest."**

## Step 1: Understanding the Concept
Let's say you invest \$100 at 10% interest for 2 years.
*   **Simple Interest Way:** Year 1 interest is \$10. Year 2 interest is \$10. Total = \$120. The principal always stays \$100.
*   **Compound Interest Way:** Year 1 interest is \$10. Your new principal for Year 2 becomes \$110! Now, Year 2 interest is 10% of \$110, which is \$11. Total = \$121. Your money grows much faster because the pile keeps getting bigger.

## Step 2: The Core Formula
Instead of calculating the interest directly, the Compound Interest formula calculates the final **Amount** first.
*   **Amount (A) = \$P(1 + \\frac{R}{100})^T\$**
*   **Compound Interest (CI) = Amount - Principal**

## Step 3: Different Compounding Frequencies
Banks don't always calculate interest once a year. Sometimes they do it every 6 months (half-yearly) or every 3 months (quarterly). When this happens, you must adjust the Rate (R) and Time (T)!
*   **Half-Yearly (Semi-Annually):** The year is split into 2 parts.
    *   New Rate = \$R / 2\$
    *   New Time = \$T \\times 2\$ (because 1 year has two 6-month periods).
*   **Quarterly:** The year is split into 4 parts.
    *   New Rate = \$R / 4\$
    *   New Time = \$T \\times 4\$.

## Step 4: Step-by-Step Example Problem (The Effective Rate Shortcut)
**Question:** What is the compound interest on \$5000 at 10% per annum for 2 years?

**How a beginner solves it:** They use the heavy formula: \$5000 \\times (1 + 10/100)^2\$... lots of fraction math.
**How an expert solves it (Effective Rate):**
1.  Use the successive percentage formula to find the total "effective" rate for 2 years: \$a + b + \\frac{ab}{100}\$.
2.  Here, \$a = 10\$ and \$b = 10\$.
3.  Effective Rate = \$10 + 10 + \\frac{10 \\times 10}{100} = 20 + 1 = 21\\%\$.
4.  This means the total compound interest for 2 years is exactly 21% of the principal!
5.  Now just calculate 21% of \$5000.
    *   \$10\\% = 500\$, so \$20\\% = 1000\$.
    *   \$1\\% = 50\$.
    *   Total = \$1000 + 50 = 1050\$.
6.  **Final Answer: \$1050**
`
  },
  'average': {
    concepts: "Detailed concept for Average. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Average.",
    mistakes: "Common mistake in Average: skipping the fundamentals.",
    formulas: "Formulas for Average: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Averages

The average (also known as the arithmetic mean) is a way to find a single "central" or "representative" value for a whole group of numbers. Think of it as flattening out a bumpy road so it's perfectly level.

## Step 1: The Golden Triangle Formula
The entire topic of averages relies on three variables connected in a triangle:
1.  **Sum of all items**
2.  **Number of items (Count)**
3.  **Average**

*   **Average = \$\\frac{\\text{Sum of Items}}{\\text{Number of Items}}\$**
*   **Sum = \$\\text{Average} \\times \\text{Number of Items}\$** *(This is the most frequently used trick in exams! Always find the Sum first!)*

## Step 2: Properties of Averages (Instant Solve Tricks)
If you know these rules, you can solve many questions in 2 seconds without a pen:
*   If you **add** the same number \$X\$ to every single item in a list, the new average simply increases by \$X\$.
*   If you **multiply** every single item in a list by \$X\$, the new average is multiplied by \$X\$.
*   The average of consecutive numbers (like 4, 5, 6, 7, 8) is ALWAYS the exact middle number (here, it's 6).
*   Average of the first \$n\$ natural numbers = \$\\frac{n + 1}{2}\$.

## Step 3: Average Speed (The Biggest Trap!)
**WARNING:** If you travel to a city at 40 km/hr and drive back at 60 km/hr, your average speed is **NOT** 50 km/hr! You cannot just add them and divide by 2! Why? Because you spent more *time* driving at the slower speed.

**The Correct Formula for Average Speed (when distances are equal):**
*   **Average Speed = \$\\frac{2xy}{x + y}\$** (where x and y are the two speeds).

## Step 4: Step-by-Step Example Problem (The "Included/Excluded" Type)
**Question:** The average age of 30 students in a class is 15 years. If the teacher's age is included, the average increases by 1 year. What is the teacher's age?

**How to solve it:**
1.  **Always find the SUM first!**
    *   Initial Sum of students' ages = Average \$\\times\$ Count = \$15 \\times 30 = 450\$.
2.  **Find the NEW SUM after the change.**
    *   The teacher joins, so the new count is 31 people.
    *   The average increases by 1, so the new average is 16.
    *   New Sum = New Average \$\\times\$ New Count = \$16 \\times 31\$.
    *   Calculation: \$16 \\times 30 = 480\$, plus \$16 = 496\$.
3.  **Find the difference.** The only reason the sum increased from 450 to 496 is because the teacher was added.
    *   Teacher's Age = New Sum - Old Sum
    *   Teacher's Age = \$496 - 450 = 46\$.
4.  **Final Answer: 46 years old.**
`
  },
  'train-problems': {
    concepts: "Detailed concept for Train Problems. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Train Problems.",
    mistakes: "Common mistake in Train Problems: skipping the fundamentals.",
    formulas: "Formulas for Train Problems: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Train Problems

Train problems are a very specific flavor of "Time, Speed, and Distance" questions. The only difference is that a train is very long! When a car passes a pole, it happens instantly. When a 500-meter train passes a pole, it takes time for the whole train to clear it. We must account for this length.

## Step 1: The Core Formula and the Golden Conversion
Everything relies on one formula: **Distance = Speed \$\\times\$ Time**

**THE GOLDEN CONVERSION RULE:**
In train problems, length is almost always given in meters, and time in seconds. But speed is usually given in km/hr! You MUST convert speeds to m/s before doing anything else, or you will fail.
*   **To convert km/hr to m/s:** Multiply by **5/18**. (Example: 72 km/hr = \$72 \\times (5/18) = 20\$ m/s).
*   **To convert m/s to km/hr:** Multiply by **18/5**.

## Step 2: What is the "Distance"?
In train problems, "Distance" is not just the gap between two cities. It is the total length the train must travel to completely clear an object.
*   **Scenario A (Crossing a thin object):** Man, Pole, Tree, Signal.
    *   These objects have zero width.
    *   **Distance to travel = Length of the Train only.**
*   **Scenario B (Crossing a wide object):** Platform, Bridge, Tunnel, Another Train.
    *   The engine hits the platform, and the train isn't finished crossing until the caboose leaves the platform.
    *   **Distance to travel = Length of Train + Length of Object.**

## Step 3: Relative Speed (When two things are moving)
If two trains are moving at the same time, we combine their speeds to find the "Relative Speed".
*   **Moving in OPPOSITE directions (towards each other):** They approach very fast.
    *   **Relative Speed = Add their speeds (\$S_1 + S_2\$)**
*   **Moving in the SAME direction (one chasing the other):** It takes a long time to overtake.
    *   **Relative Speed = Subtract their speeds (\$|S_1 - S_2|\$)**

## Step 4: Step-by-Step Example Problem
**Question:** A train 150 meters long is running at 72 km/hr. How much time will it take to cross a platform 250 meters long?

**How to solve it:**
1.  **Convert the speed!** This is always step 1.
    *   Speed = 72 km/hr.
    *   Speed in m/s = \$72 \\times \\frac{5}{18} = 4 \\times 5 = 20\$ m/s.
2.  **Calculate the total distance.** The object is a platform (a wide object).
    *   Distance = Length of Train + Length of Platform
    *   Distance = \$150 + 250 = 400\$ meters.
3.  **Apply the formula to find Time.**
    *   Time = Distance / Speed
    *   Time = \$400 / 20 = 20\$ seconds.
4.  **Final Answer: 20 seconds.**
`
  },
  'boats-streams': {
    concepts: "Detailed concept for Boats & Streams. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Boats & Streams.",
    mistakes: "Common mistake in Boats & Streams: skipping the fundamentals.",
    formulas: "Formulas for Boats & Streams: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Boats & Streams

Imagine walking on a moving airport walkway. If you walk in the same direction it's moving, you travel super fast. If you try to walk backward against it, you struggle. This is exactly how Boats and Streams work! The water (stream) has its own speed.

## Step 1: The Four Key Terms
You must understand these four specific terms perfectly:
1.  **Speed of the Boat in Still Water (B):** How fast the boat's engine can go on a perfectly calm, flat lake. This is the boat's true capability.
2.  **Speed of the Stream (S):** How fast the river current is flowing.
3.  **Downstream Speed (D):** The boat is traveling WITH the flow of the river. The water pushes the boat from behind.
    *   **Formula: Downstream Speed (D) = B + S**
4.  **Upstream Speed (U):** The boat is traveling AGAINST the flow of the river. The water fights the boat.
    *   **Formula: Upstream Speed (U) = B - S**

## Step 2: The Magic Reversal Formulas
Often, questions won't tell you the Boat speed (B) or Stream speed (S). Instead, they will give you the Downstream (D) and Upstream (U) speeds. You can instantly find B and S using these two magic formulas:
*   **Speed of Boat (B) = \$\\frac{D + U}{2}\$**
*   **Speed of Stream (S) = \$\\frac{D - U}{2}\$**

*Example:* A boat goes downstream at 20 km/hr and upstream at 10 km/hr.
Boat speed (B) = (20 + 10) / 2 = 15 km/hr.
Stream speed (S) = (20 - 10) / 2 = 5 km/hr.

## Step 3: Step-by-Step Example Problem
**Question:** A man can row 18 km/h in still water. It takes him 3 times as long to row up as to row down the river. Find the rate of the stream.

**How to solve it:**
1.  **Identify what you know:**
    *   Boat speed in still water (B) = 18 km/h.
    *   Let the Stream speed be S.
2.  **Set up the Downstream and Upstream speeds:**
    *   Downstream Speed (D) = \$18 + S\$
    *   Upstream Speed (U) = \$18 - S\$
3.  **Use the time relationship given in the question:**
    *   The question says: Time taken Upstream = \$3 \\times\$ Time taken Downstream.
    *   We know Time = Distance / Speed. Since he is rowing up and down the *same* river, the Distance is the same (let's call it \$X\$).
    *   Time Upstream = \$\\frac{X}{18 - S}\$
    *   Time Downstream = \$\\frac{X}{18 + S}\$
4.  **Build the equation:**
    *   \$\\frac{X}{18 - S} = 3 \\times \\frac{X}{18 + S}\$
5.  **Solve the equation:**
    *   Cancel \$X\$ from both sides: \$\\frac{1}{18 - S} = \\frac{3}{18 + S}\$
    *   Cross-multiply: \$1 \\times (18 + S) = 3 \\times (18 - S)\$
    *   \$18 + S = 54 - 3S\$
    *   Move S to one side: \$S + 3S = 54 - 18\$
    *   \$4S = 36\$
    *   \$S = 9\$
6.  **Final Answer: The rate of the stream is 9 km/h.**
`
  },
  'pipes-cisterns': {
    concepts: "Detailed concept for Pipes & Cisterns. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Pipes & Cisterns.",
    mistakes: "Common mistake in Pipes & Cisterns: skipping the fundamentals.",
    formulas: "Formulas for Pipes & Cisterns: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Pipes & Cisterns

If you know how to solve "Time and Work" problems, you already know 95% of Pipes and Cisterns! A pipe filling a tank is exactly like a worker building a wall. The only new concept is a "Leak", which acts like a bad worker tearing the wall down!

## Step 1: Positive and Negative Work (Efficiency)
*   **Inlet Pipes (The Builders):** These pipes fill the tank with water. Their work is positive. If Pipe A fills a tank in 10 hours, its efficiency is \$+1/10\$ of the tank per hour.
*   **Outlet Pipes / Leaks (The Destroyers):** These pipes drain water out of the tank. Their work is negative. If a leak drains a tank in 20 hours, its efficiency is \$-1/20\$ of the tank per hour.

## Step 2: The LCM Method (The Best Way to Solve)
Instead of dealing with confusing fractions like \$1/10 + 1/15 - 1/20\$, we will invent a physical size for the tank using LCM (Least Common Multiple).

1.  **Find the Capacity:** Take the LCM of all the hours given in the question. Call this number the "Total Capacity" of the tank in liters.
2.  **Find the Efficiency:** Divide the Total Capacity by the hours for each pipe. This tells you how many liters that specific pipe moves in 1 hour.
3.  **Find the Net Efficiency:** Add the filling efficiencies and subtract the emptying efficiencies to see what happens when all pipes are open together.
4.  **Find the Time:** Total Time = Total Capacity / Net Efficiency.

## Step 3: Step-by-Step Example Problem
**Question:** Pipe A can fill a tank in 12 hours. Pipe B can fill it in 15 hours. However, a third pipe C is an outlet pipe and can empty the full tank in 20 hours. If all three pipes are opened together, how long will it take to fill the tank?

**How to solve it using the LCM Method:**
1.  **Find Total Capacity:** We have numbers 12, 15, and 20. The LCM of (12, 15, 20) is 60. Let's pretend the tank holds exactly **60 liters**.
2.  **Find Efficiency of each pipe:**
    *   Pipe A: Fills 60 liters in 12 hours. Efficiency = \$60 / 12 =\$ **+5 liters/hour**.
    *   Pipe B: Fills 60 liters in 15 hours. Efficiency = \$60 / 15 =\$ **+4 liters/hour**.
    *   Pipe C: Drains 60 liters in 20 hours. Efficiency = \$60 / 20 =\$ **-3 liters/hour**. (Notice the negative sign!).
3.  **Find Net Efficiency (All open together):**
    *   Net flow in 1 hour = \$(+5) + (+4) + (-3) = 9 - 3 =\$ **+6 liters/hour**.
    *   This means every hour, the tank gains 6 liters of water.
4.  **Calculate Total Time:**
    *   Total Time = Total Capacity / Net Efficiency
    *   Total Time = \$60 \\text{ liters} / 6 \\text{ liters/hour}\$ = 10 hours.
5.  **Final Answer: 10 hours.** (No messy fractions needed!)
`
  },
  'probability': {
    concepts: "Detailed concept for Probability. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Probability.",
    mistakes: "Common mistake in Probability: skipping the fundamentals.",
    formulas: "Formulas for Probability: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Probability

Probability is just the mathematical way of expressing how likely something is to happen. It is always a fraction between 0 and 1. A probability of 0 means it is impossible. A probability of 1 means it is 100% guaranteed.

## Step 1: The One Master Formula
Every single basic probability question uses this exact formula:

**Probability = \$\\frac{\\text{Number of Favorable Outcomes}}{\\text{Total Number of Possible Outcomes}}\$**

*   *Favorable Outcomes:* What you WANT to happen (e.g., getting a red card).
*   *Possible Outcomes:* Everything that COULD possibly happen (e.g., all the cards in the deck).

## Step 2: The AND & OR Rules
When a question asks for multiple things to happen, look for the words AND / OR.
*   **The "AND" Rule (Multiplication):** If you want Event A to happen **AND** Event B to happen, you MULTIPLY their probabilities.
    *   *Example:* Flipping a coin AND rolling a die.
*   **The "OR" Rule (Addition):** If you want Event A to happen **OR** Event B to happen, you ADD their probabilities.
    *   *Example:* Pulling a King OR a Queen from a deck of cards.

## Step 3: Knowing Your Decks and Dice
You cannot solve these questions if you don't know the tools!
*   **A Standard Deck of Cards:** 52 cards total. 26 Red, 26 Black. 4 Suits (Hearts, Diamonds, Clubs, Spades) with 13 cards each. There are 12 "Face Cards" (Jacks, Queens, Kings).
*   **Dice:** One die has 6 sides. Two dice have \$6 \\times 6 = 36\$ possible combinations. Three dice have \$6 \\times 6 \\times 6 = 216\$ combinations.
*   **Coins:** One coin has 2 sides. Two coins have \$2 \\times 2 = 4\$ combinations. Three coins have \$2^3 = 8\$ combinations.

## Step 4: Step-by-Step Example Problem
**Question:** A bag contains 4 red balls, 5 blue balls, and 3 green balls. If you reach in and pick ONE ball at random, what is the probability that it is NOT a green ball?

**How to solve it:**
1.  **Find the Total Possible Outcomes:** How many balls are in the bag in total?
    *   \$4 \\text{ (red)} + 5 \\text{ (blue)} + 3 \\text{ (green)} = 12\$ total balls.
2.  **Define the "Favorable" Outcome:** The question asks for a ball that is NOT green. What colors are not green? Red and Blue.
3.  **Count the Favorable Outcomes:** How many balls are Red or Blue?
    *   \$4 \\text{ (red)} + 5 \\text{ (blue)} = 9\$ non-green balls.
4.  **Apply the Master Formula:**
    *   Probability = Favorable / Total
    *   Probability = \$9 / 12\$
5.  **Simplify the fraction:** Divide top and bottom by 3.
    *   Probability = \$3 / 4\$
6.  **Final Answer: 3/4** (or 75%).
`
  },
  'geometry-3d': {
    concepts: "Detailed concept for Geometry 3D. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Geometry 3D.",
    mistakes: "Common mistake in Geometry 3D: skipping the fundamentals.",
    formulas: "Formulas for Geometry 3D: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to 3D Geometry (Mensuration)

Mensuration in 3D deals with solid objects—things you can hold in your hand, like a box, a ball, or a can. We care about two main things:
1.  **Volume:** How much water can fit inside the object? (Measured in cubic units like \$cm^3\$).
2.  **Surface Area:** How much wrapping paper is needed to perfectly cover the outside of the object? (Measured in square units like \$cm^2\$).

## Step 1: The Core Shapes and Their DNA
You must memorize the formulas, but it helps to see the logic behind them!

**1. The Cuboid (A rectangular box, like a brick)**
*   It has Length (\$l\$), Breadth (\$b\$), and Height (\$h\$).
*   **Volume = \$l \\times b \\times h\$** (Just multiply all 3 dimensions).
*   **Total Surface Area (TSA) = \$2(lb + bh + hl)\$** (Because there are 6 faces, and opposite faces are identical pairs).

**2. The Cube (A perfect box, like a Rubik's cube)**
*   All sides are exactly the same length (\$a\$).
*   **Volume = \$a \\times a \\times a = a^3\$**
*   **Total Surface Area (TSA) = \$6a^2\$** (It has 6 identical square faces, and one square's area is \$a^2\$).

**3. The Cylinder (Like a soup can or a pipe)**
*   It has a circular base with a Radius (\$r\$) and a Height (\$h\$).
*   **Volume = \$\\pi r^2 h\$** (Area of the bottom circle \$\\times\$ the height).
*   **Curved Surface Area (CSA) = \$2\\pi rh\$** (This is just the area of the curved tube part, ignoring the top and bottom lids).
*   **Total Surface Area (TSA) = \$2\\pi r(r + h)\$** (This includes the tube PLUS the two circular lids).

**4. The Cone (Radius=r, Height=h, Slant Height=l)**
*   \$l = \\sqrt{r^2 + h^2}\$
*   **Volume = \$\\frac{1}{3} \\pi r^2 h\$**
*   **CSA = \$\\pi rl\$**

**5. The Sphere (A perfect ball, like a basketball)**
*   It only has a Radius (\$r\$).
*   **Volume = \$\\frac{4}{3} \\pi r^3\$**
*   **Surface Area = \$4\\pi r^2\$** (A sphere doesn't have "curved" vs "total", it's all one continuous surface).

## Step 2: The "Melting and Recasting" Rule
A very common exam question involves melting a big shape (like a sphere) and pouring the liquid metal to form many small shapes (like small cones).
**THE GOLDEN RULE:** The material doesn't disappear! **Total Volume Before = Total Volume After.**
If you melt one big sphere to make \$N\$ small cones, the equation is: Volume of Sphere = \$N \\times\$ (Volume of one Cone).

## Step 3: Step-by-Step Example Problem
**Question:** A solid metallic sphere of radius 8 cm is melted and recast into smaller solid cones, each of radius 2 cm and height 4 cm. How many cones can be formed?

**How to solve it:**
1.  **Recognize the rule:** This is a melting question. So, Volume of big sphere = \$N \\times\$ Volume of small cone.
2.  **Write the formula for the Sphere Volume:**
    *   Radius (\$R\$) = 8 cm.
    *   Vol (Sphere) = \$\\frac{4}{3} \\pi R^3 = \\frac{4}{3} \\pi (8^3) = \\frac{4}{3} \\pi (512)\$.
3.  **Write the formula for the Cone Volume:**
    *   Radius (\$r\$) = 2 cm, Height (\$h\$) = 4 cm.
    *   Vol (Cone) = \$\\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi (2^2) (4) = \\frac{1}{3} \\pi (4)(4) = \\frac{16}{3} \\pi\$.
4.  **Set up the equation:**
    *   \$\\frac{4}{3} \\pi (512) = N \\times (\\frac{16}{3} \\pi)\$
5.  **Simplify and solve for N:**
    *   Cancel out \$\\pi\$ from both sides!
    *   Cancel out the \$\\frac{1}{3}\$ from the bottom of both sides!
    *   You are left with: \$4 \\times 512 = N \\times 16\$.
    *   \$2048 = 16N\$.
    *   \$N = 2048 / 16 = 128\$.
6.  **Final Answer: 128 cones.**
`
  },
  'coding-decoding': {
    concepts: "Detailed concept for Coding Decoding. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Coding Decoding.",
    mistakes: "Common mistake in Coding Decoding: skipping the fundamentals.",
    formulas: "Formulas for Coding Decoding: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Coding and Decoding

Coding and Decoding is a test of your pattern-recognition skills. The examiner creates a secret rule to change a word into a gibberish "code". Your job is to figure out what that secret rule is, and then apply it to a new word.

## Step 1: The Essential Toolkit (EJOTY)
To solve these quickly, you MUST know the numerical position of every letter in the alphabet (A=1, B=2, Z=26). Writing down the whole alphabet takes too long. Memorize the **EJOTY** shortcut:
*   **E** = 5
*   **J** = 10
*   **O** = 15
*   **T** = 20
*   **Y** = 25
If you need to find the letter "M", you know "J" is 10, so K=11, L=12, M=13. It gives you anchor points!

## Step 2: The "Opposite Letter" Trick
Sometimes the code relies on reversing the alphabet. A pairs with Z, B pairs with Y.
**The Trick:** Two letters are opposites if their numerical values add up to exactly 27!
*   A(1) + Z(26) = 27
*   G(7) + T(20) = 27
*   M(13) + N(14) = 27

## Step 3: Common Secret Rules to Look For
When you look at a coded word, test these patterns in your head in this order:
1.  **Direct Letter Shift:** Every letter is shifted forward (+2) or backward (-1).
2.  **Alternating Shift:** The first letter is +1, the second is -1, the third is +1...
3.  **Positional Reversal:** The letters stay the same, but the word is spelled backward (APPLE becomes ELPPA).
4.  **Cross Coding:** The first letter of the real word becomes the LAST letter of the coded word.

## Step 4: Step-by-Step Example Problem
**Question:** If in a certain language, "WATER" is coded as "YCVGT", how is "HKTG" decoded in that language?

**How to solve it:**
1.  **Write the words clearly one above the other to spot the pattern:**
    W A T E R
    Y C V G T
2.  **Find the numerical value of the letters:**
    W(23) \$\\rightarrow\$ Y(25) ... The shift is +2!
    A(1) \$\\rightarrow\$ C(3) ... The shift is +2!
    T(20) \$\\rightarrow\$ V(22) ... The shift is +2!
    The secret rule is simply: Add 2 to every letter.
3.  **Read the question VERY carefully!** It asks how is "HKTG" **decoded**. This means "HKTG" is already the coded gibberish word, and we need to find the original word!
4.  **Reverse the secret rule:** If coding means adding 2, decoding means subtracting 2 (-2).
5.  **Apply the reversed rule to HKTG:**
    H(8) - 2 = 6 (F)
    K(11) - 2 = 9 (I)
    T(20) - 2 = 18 (R)
    G(7) - 2 = 5 (E)
6.  **Final Answer: FIRE**
`
  },
  'blood-relations': {
    concepts: "Detailed concept for Blood Relations. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Blood Relations.",
    mistakes: "Common mistake in Blood Relations: skipping the fundamentals.",
    formulas: "Formulas for Blood Relations: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Blood Relations

Blood relation puzzles are designed to confuse you by using convoluted language to describe simple family trees. The secret to never getting confused is to completely ignore the words and draw a map.

## Step 1: Learn the Symbols (The Family Tree)
Never try to solve a complex blood relation puzzle in your head. Always draw it on paper using standard symbols:
*   **Square [ ]:** Represents a MALE.
*   **Circle ( ):** Represents a FEMALE.
*   **Horizontal Line ( --- ):** Represents siblings (Brother/Sister).
*   **Double Line ( === ):** Represents a married couple (Husband/Wife).
*   **Vertical Line ( | ):** Represents a generational gap (Parent down to Child).

**CRITICAL RULE:** Never assume someone's gender just because of their name! If a problem mentions "Sam" or "Alex", do NOT draw a square or a circle until the problem specifically says "He" or "She" or "Brother" or "Daughter".

## Step 2: Vocabulary Cheat Sheet
Some terms can be tricky:
*   **Maternal:** Related through the Mother. (Maternal Uncle = Mother's brother).
*   **Paternal:** Related through the Father. (Paternal Grandfather = Father's father).
*   **Nephew:** The son of your brother or sister.
*   **Niece:** The daughter of your brother or sister.
*   **Sibling:** Simply means a brother or sister (gender neutral).

## Step 3: The "Pointing to a Photograph" Strategy
These are the most common and confusing questions. 
*Example statement:* "He is the only son of my mother's mother."
**The Strategy:** Work backward from the word "My".
1.  Who is speaking? The speaker is the anchor ("My").
2.  "My mother's mother" = My Grandmother.
3.  "Only son of my grandmother" = My Mother's only brother.
4.  "Mother's brother" = My Maternal Uncle.

## Step 4: Step-by-Step Example Problem
**Question:** Pointing to a photograph of a boy, Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?

**How to solve it:**
1.  **Start at the anchor word "My".** The speaker is Suresh.
2.  **Break it down backward:**
    *   Part 1: "...my mother" \$\\rightarrow\$ Suresh's mother.
    *   Part 2: "...the ONLY son of my mother" \$\\rightarrow\$ Who is the ONLY son of Suresh's mother? Since Suresh is a male (usually implied by the name in these specific backward chains, but let's verify: if Suresh has no brothers, Suresh IS the only son!).
    *   Part 3: "He is the son of [Suresh]." \$\\rightarrow\$ The boy in the photo is the son of Suresh.
3.  **Check the question:** "How is Suresh related to that boy?"
4.  If the boy is the son of Suresh, then Suresh is the father of the boy.
5.  **Final Answer: Father.**
`
  },
  'direction-sense': {
    concepts: "Detailed concept for Direction Sense. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Direction Sense.",
    mistakes: "Common mistake in Direction Sense: skipping the fundamentals.",
    formulas: "Formulas for Direction Sense: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Direction Sense

Direction Sense problems test your spatial awareness. They ask you to trace a path on an imaginary map. The biggest mistake students make is losing track of Left and Right after making a few turns.

## Step 1: Draw the Compass Cross
Before you read the first word of the question, draw a small plus sign (+) on your paper.
*   **Top:** North (N)
*   **Bottom:** South (S)
*   **Right:** East (E)
*   **Left:** West (W)
(Mnemonic: **N**ever **E**at **S**oggy **W**affles, reading clockwise starting from the top).

## Step 2: The Secret to Left and Right Turns
When you are moving North, your Left and Right match the paper's Left and Right. But when you turn around, everything flips!
*   **Facing North:** Left is West. Right is East.
*   **Facing South:** Left is East. Right is West. *(This is where 90% of students fail!)*
*   **Facing East:** Left is North. Right is South.
*   **Facing West:** Left is South. Right is North.

**THE BEST TRICK:** Instead of trying to imagine yourself turning, just remember this rule:
*   A **RIGHT TURN** is always a 90-degree movement **CLOCKWISE** (the way a clock's hands move).
*   A **LEFT TURN** is always a 90-degree movement **ANTI-CLOCKWISE**.

## Step 3: The Pythagorean Theorem (Shortest Distance)
Often, the question will ask: "What is the shortest distance between the starting point and the ending point?"
If your path forms a right-angled triangle (e.g., you went North, then East), you cannot just add the distances. You must draw a straight diagonal line connecting Start to End.
To find the length of this diagonal line (the Hypotenuse), use the magic formula:
**\$Hypotenuse^2 = Base^2 + Height^2\$**
(So, \$Hypotenuse = \\sqrt{Base^2 + Height^2}\$).

## Step 4: Step-by-Step Example Problem
**Question:** Rahul walks 10 km towards North. From there he walks 6 km towards South. Then, he walks 3 km towards East. How far and in which direction is he with reference to his starting point?

**How to solve it:**
1.  **Draw the start point (A).**
2.  "Walks 10 km North." Draw a line straight UP to point (B). The length is 10.
3.  "From there he walks 6 km South." He turns around and walks straight DOWN along the exact same line! Stop at point (C). 
    *   Since he went up 10 and down 6, point C is exactly **4 km North** of the start point A. (10 - 6 = 4).
4.  "Then, he walks 3 km East." From point C, draw a line to the RIGHT to reach the final point (D). The length is 3.
5.  **Find the distance:** Connect start point A to end point D. This forms a right triangle!
    *   Base = 3 km. Height = 4 km.
    *   Distance = \$\\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\$ km.
6.  **Find the direction:** Look at point D from the start point A. It is UP and to the RIGHT. Therefore, it is North-East.
7.  **Final Answer: 5 km, North-East.**
`
  },
  'seating-arrangement': {
    concepts: "Detailed concept for Seating Arrangement. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Seating Arrangement.",
    mistakes: "Common mistake in Seating Arrangement: skipping the fundamentals.",
    formulas: "Formulas for Seating Arrangement: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Seating Arrangements

Seating arrangement puzzles are pure logic games. You are given a group of people and a list of confusing clues about where they sit. If you try to guess their positions randomly, you will fail. You must build the arrangement methodically.

## Step 1: Types of Arrangements
1.  **Linear Arrangement (A straight line):** Usually people sitting on a bench facing North. If facing North, your left is their left. If facing South, it's mirrored!
2.  **Circular Arrangement (A round table):** This is the most common exam question.
    *   **Facing the Center:** Left means moving Clockwise. Right means moving Anti-Clockwise.
    *   **Facing Outside:** Left means Anti-Clockwise. Right means Clockwise.

## Step 2: The Golden Rules of Solving
*   **Rule 1: Draw the Placeholders First.** If the problem says "8 people sit around a circle", immediately draw a circle with 8 dashes equally spaced. Do NOT try to place people before drawing the seats.
*   **Rule 2: Never start with a Negative Clue.** A clue like "A does not sit next to B" is useless at the beginning. It doesn't tell you where A *is*, only where A *isn't*. Save negative clues for the end to eliminate bad options.
*   **Rule 3: Always start with a Definite Clue.** Look for a clue that gives an exact position. For example: "P sits 3rd to the right of Q". You can place Q anywhere on the circle, and immediately lock in P's position. This forms your anchor!
*   **Rule 4: Look for Connecting Clues.** Once P and Q are on the board, scan the rest of the clues for any mention of P or Q. If a clue says "R sits opposite to P", you can instantly place R.

## Step 3: Understanding "And" vs "Who"
This is a massive trap that catches thousands of students.
*   **"AND / BUT":** Refers to the FIRST person in the sentence.
    *   *Example:* "A sits second to the right of B, **and** is sitting next to C." \$\\rightarrow\$ This means **A** is sitting next to C.
*   **"WHO / WHOM / WHOSE":** Refers to the SECOND person (the one immediately preceding the word).
    *   *Example:* "A sits second to the right of B, **who** is sitting next to C." \$\\rightarrow\$ This means **B** is sitting next to C.

## Step 4: Step-by-Step Example Walkthrough
**Clues:** 5 friends A, B, C, D, E sit in a line facing North. 
1. C is exactly in the middle. 
2. A is sitting to the immediate left of C. 
3. E is not sitting at any extreme end.

**How to solve it:**
1.  Draw 5 placeholders: _ _ _ _ _
2.  Use the most definite clue: "C is exactly in the middle".
    *   Arrangement: _ _ C _ _
3.  Use the next connecting clue: "A is sitting to the immediate left of C".
    *   Arrangement: _ A C _ _
4.  Use the negative clue: "E is not sitting at any extreme end".
    *   The open spots are 1, 4, and 5. Spots 1 and 5 are extreme ends. Therefore, E MUST sit in spot 4!
    *   Arrangement: _ A C E _
5.  Now B and D are left, and they must occupy the ends (spots 1 and 5). Since we have no more clues, their exact positions are interchangeable based on the specific questions asked later.
`
  },
  'syllogism': {
    concepts: "Detailed concept for Syllogism. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Syllogism.",
    mistakes: "Common mistake in Syllogism: skipping the fundamentals.",
    formulas: "Formulas for Syllogism: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Syllogism (Venn Diagrams)

Syllogism questions test deductive logic. You are given Statements (premises) which you must assume are 100% true, even if they sound crazy (e.g., "All apples are cars"). Then you are given Conclusions, and you must decide if they are definitively true based *only* on the statements.

## Step 1: Throw Reality Out the Window
If a statement says "Some dogs are birds", do not argue with it. Accept it as absolute mathematical truth for the duration of the problem.

## Step 2: The Master Tool - Venn Diagrams
The safest and most visual way to solve these is by drawing overlapping circles. There are 4 basic types of statements:

1.  **"ALL A are B"**
    *   *How to draw:* Draw a small circle for A, and put it completely INSIDE a larger circle for B.
2.  **"SOME A are B"**
    *   *How to draw:* Draw circle A and circle B so that they overlap in the middle, like a Venn diagram of two sets.
3.  **"NO A is B"**
    *   *How to draw:* Draw circle A and circle B completely separate from each other. Draw a line between them and put a big "X" on the line to show they can never touch.
4.  **"SOME A are NOT B"**
    *   *How to draw:* Draw overlapping circles A and B. Then, put a dot in the part of A that does not overlap with B, and draw a line with an "X" to circle B.

## Step 3: The "Definite" vs "Possibility" Rule
This is how you get the right answer:
*   **Definite Conclusions:** If a conclusion says "All A are C", it MUST be visually true in your drawing. If there is even one way to draw the diagram where it isn't true, the conclusion is FALSE.
*   **Possibility Conclusions:** If a conclusion says "Some A being C is a possibility", it is TRUE as long as you *can* draw a valid diagram where it happens without breaking the original statements.

## Step 4: Step-by-Step Example Problem
**Statements:**
1. All Cats are Dogs.
2. Some Dogs are Rats.

**Conclusions:**
I. Some Cats are Rats.
II. Some Dogs are Cats.

**How to solve it:**
1.  **Draw Statement 1:** Draw a circle for Cats (C). Put it completely inside a larger circle for Dogs (D).
2.  **Draw Statement 2:** Draw a circle for Rats (R). Make it overlap with the Dogs (D) circle.
    *   *Crucial thought:* Does the Rats circle overlap with the Cats circle? Maybe, maybe not! The statement didn't say. So we draw the basic diagram where they DO NOT overlap, just to be safe.
3.  **Test Conclusion I (Some Cats are Rats):** Look at your drawing. Are the Cat circle and Rat circle touching? No. Could they touch? Yes, but a definite conclusion must be 100% true in the basic drawing. Since they don't have to touch, Conclusion I does not logically follow.
4.  **Test Conclusion II (Some Dogs are Cats):** Look at your drawing. Is part of the Dog circle occupied by Cats? Yes, the whole Cat circle is inside the Dog circle! So definitely, some of those dogs are actually cats. Conclusion II logically follows.
5.  **Final Answer: Only Conclusion II follows.**
`
  },
  'clock-problems': {
    concepts: "Detailed concept for Clock Problems. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Clock Problems.",
    mistakes: "Common mistake in Clock Problems: skipping the fundamentals.",
    formulas: "Formulas for Clock Problems: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Clock Problems

Clock problems might seem like geometry, but they are actually "Time, Speed, and Distance" problems disguised as a circle! The "runners" are the hour hand and the minute hand, running on a circular track of 360 degrees.

## Step 1: The Speed of the Hands
You must memorize exactly how fast the hands move on a clock face.
*   The entire clock is a circle, which equals **360 degrees**.
*   There are 60 minutes on the clock face. So, one minute space = \$360 / 60 =\$ **6 degrees**.
*   **The Minute Hand's Speed:** It travels the full 360 degrees in 60 minutes. Therefore, its speed is \$360 / 60 =\$ **6° per minute**.
*   **The Hour Hand's Speed:** It travels only from the 12 to the 1 (which is 30 degrees) in 60 minutes. Therefore, its speed is \$30 / 60 =\$ **0.5° per minute**.

## Step 2: The Master Formula
Most questions ask: "What is the exact angle between the hour hand and the minute hand at time H:M?"
You could draw it and calculate it step-by-step, but there is a magical formula that solves it instantly:

**Angle \$\\theta = |30H - 5.5M|\$**

*   \$H\$ is the Hour (e.g., if the time is 4:20, H is 4).
*   \$M\$ is the Minutes (e.g., if the time is 4:20, M is 20).
*   The \$| |\$ absolute value bars mean the answer is always positive.
*   *Note: If the formula gives you an answer greater than 180°, and the options don't have it, simply subtract your answer from 360° to find the reflex angle on the other side!*

## Step 3: Important Coincidences (Memorize These)
Examiners love asking how many times hands overlap in a day. Don't try to calculate it in the exam, memorize the facts:
*   **Coincide (0° overlap):** The hands overlap exactly 11 times every 12 hours (They skip the 12:00 to 1:00 hour because they only meet exactly at 12:00). So, **22 times in a 24-hour day**.
*   **Straight Line Opposite (180°):** 11 times in 12 hours. So, **22 times in a day**.
*   **Right Angles (90°):** This happens twice every hour (mostly). So, **44 times in a day**.

## Step 4: Step-by-Step Example Problem
**Question:** What is the angle between the hands of a clock at 3:40?

**How a beginner solves it:** They picture a clock. The minute hand is on the 8. The hour hand is on the 3. They count the spaces: 4, 5, 6, 7, 8. That's 5 spaces of 30 degrees = 150 degrees. BUT they forget that the hour hand moved while 40 minutes passed! They get it wrong.

**How an expert solves it:**
1.  **Use the Master Formula:** \$\\theta = |30H - 5.5M|\$
2.  **Plug in the values:** For 3:40, \$H = 3\$ and \$M = 40\$.
3.  **Calculate:**
    *   \$30(3) = 90\$
    *   \$5.5(40) = 220\$
4.  **Subtract inside the absolute value:**
    *   \$|90 - 220| = |-130|\$
5.  **Make it positive:** 130 degrees.
6.  **Final Answer: 130°** (Solved in 10 seconds perfectly).
`
  },
  'cube-dice': {
    concepts: "Detailed concept for Cube & Dice. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for Cube & Dice.",
    mistakes: "Common mistake in Cube & Dice: skipping the fundamentals.",
    formulas: "Formulas for Cube & Dice: Always double check your units.",
    formulasInDepth: `
# Core Formulas & Shortcuts

## 1. Master the Algebraic Identities
Almost every quantitative topic relies on these fundamental identities. Memorizing them saves minutes per question:
*   \$(a + b)^2 = a^2 + b^2 + 2ab\$
*   \$(a - b)^2 = a^2 + b^2 - 2ab\$
*   \$a^2 - b^2 = (a + b)(a - b)\$ (The most frequently used identity in exams!)
*   \$(a + b)^3 = a^3 + b^3 + 3ab(a + b)\$

## 2. Percentage-Fraction Equivalents
Stop calculating percentages manually. Convert them to fractions instantly:
*   \$1/2 = 50\\%\$
*   \$1/3 = 33.33\\%\$
*   \$1/4 = 25\\%\$
*   \$1/5 = 20\\%\$
*   \$1/6 = 16.66\\%\$
*   \$1/8 = 12.5\\%\$

## 3. The Options Elimination Trick
Before solving a complex formula, look at the options. 
*   **Use Unit Digits:** If the calculation is \$142 \\times 233\$, the answer MUST end in 6 (\$2 \\times 3\$). If only one option ends in 6, pick it and move on!
*   **Use Digital Roots:** The digital root of the question will match the digital root of the answer.
`,
    mistakesInDepth: `
# Common Pitfalls & How to Avoid Them

## 1. Falling for the "Linear" Trap in Percentages
*   **The Trap:** If a price goes up by 20%, and then goes down by 20%, you are back to the original price, right? WRONG!
*   **The Reality:** If you start at 100, a 20% increase takes you to 120. A 20% decrease on 120 takes away 24, leaving you at 96. You actually lost 4%! Never add or subtract percentages linearly. Use the successive formula: \$a + b + (ab/100)\$.

## 2. Misreading the Question's Final Ask
*   **The Trap:** You do 2 minutes of complex calculations to find the value of 'X', and you proudly select 'X' from the options.
*   **The Reality:** The question actually asked for the value of '2X + 5'. Examiners always put 'X' as option A to catch students who don't double-check the final sentence. ALWAYS re-read the last line of the question before clicking.

## 3. Ignoring Units of Measurement
*   **The Trap:** Calculating distance using speed in km/hr and time in seconds without converting.
*   **The Reality:** Your answer will be wildly incorrect. Always write the units down next to your numbers in your scratchpad. If you have km/hr and seconds, you MUST multiply by \$5/18\$ to convert to m/s first!
`,
    inDepthTheory: `
# The Ultimate Guide to Cubes & Dice

Dice problems test your 3D spatial visualization. The examiner will show you a few pictures of the same die rolled differently, or a flattened 2D cutout, and ask you to figure out what is on the hidden sides.

## Step 1: Standard vs. Non-Standard Dice
*   **Standard Die:** This is a casino die. There is a universal rule: **Opposite faces ALWAYS add up to 7.**
    *   1 is always opposite 6.
    *   2 is always opposite 5.
    *   3 is always opposite 4.
    *   *The Trap:* If a picture shows a die where you can see a 3 and a 4 right next to each other on adjacent faces, you immediately know it is NOT a standard die (because they should be on opposite sides where you can't see both at once).
*   **Non-Standard Die:** Symbols, letters, or random numbers where the "adds to 7" rule doesn't apply. You must use logic rules to solve these.

## Step 2: The "One Common Face" Rule (The best trick)
If the question shows you two different photos of the SAME die, and they have exactly **ONE face in common**, do this:
1.  Find the common face in both pictures.
2.  Start from that face and write down the numbers in a **Clockwise** circle for the first picture.
3.  Do the same clockwise circle for the second picture.
4.  Line the two lists up. The numbers that sit on top of each other are opposite faces!

*Example:* 
Pic 1 shows faces: 2, 4, 6. 
Pic 2 shows faces: 2, 3, 5. 
The common face is **2**.
Clockwise for Pic 1 (starting at 2): **2 \$\\rightarrow\$ 6 \$\\rightarrow\$ 4**
Clockwise for Pic 2 (starting at 2): **2 \$\\rightarrow\$ 5 \$\\rightarrow\$ 3**
Result: 6 is opposite 5. 4 is opposite 3. (And therefore 2 is opposite the unseen 1).

## Step 3: Unfolding a Cube (The Net)
Sometimes they show a flattened cardboard cutout (a "net") and ask what happens when you fold it into a box.
**The Alternate Rule:** In a flattened net, if you look at a straight line of squares, the squares that are separated by exactly one square in the middle will ALWAYS end up as opposite faces when folded.

## Step 4: Step-by-Step Example Problem
**Question:** Two positions of a die are shown below. When number '1' is on the top, what number will be at the bottom?
Position 1 shows faces: 1, 3, 5
Position 2 shows faces: 2, 3, 6

**How to solve it:**
1.  **Look for common faces.** Both pictures show the number **3**. They only share one common face.
2.  **Apply the "One Common Face" Clockwise Rule.**
3.  Look at Position 1. Start at 3 and go clockwise. Let's assume the faces are read as 3, then 1, then 5.
    *   List 1: 3 \$\\rightarrow\$ 1 \$\\rightarrow\$ 5
4.  Look at Position 2. Start at 3 and go clockwise. Let's assume it reads 3, then 2, then 6.
    *   List 2: 3 \$\\rightarrow\$ 2 \$\\rightarrow\$ 6
5.  **Match them up:**
    *   1 matches with 2.
    *   5 matches with 6.
6.  The question asks what is opposite to 1 (if 1 is on top, what is on bottom).
7.  **Final Answer: 2 is on the bottom.**
`
  },
};
