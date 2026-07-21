const fs = require('fs');

const inDepthTheories = {
  'simple-interest': `
# Comprehensive Guide to Simple Interest

Simple Interest (SI) is the most basic way of calculating interest. It is calculated only on the principal amount, or on that portion of the principal amount which remains unpaid.

## 1. The Core Formula
*   **Principal (P):** The initial amount borrowed or invested.
*   **Rate (R):** The interest rate per annum (per year).
*   **Time (T):** The duration for which the money is borrowed/invested, **in years**.
*   **SI = (P × R × T) / 100**

## 2. Amount
The total money paid back is the Amount (A).
*   **Amount = Principal + Simple Interest**
*   **A = P(1 + RT/100)**

## 3. Important Concepts & Shortcuts
*   **Time conversion:** If time is given in months, divide by 12 (e.g., 8 months = 8/12 years). If given in days, divide by 365.
*   **Constant Principal:** The interest earned each year remains constant. If SI for 1 year is ₹100, SI for 3 years is ₹300.
*   **"Sum becomes N times":** If a sum of money becomes $N$ times itself in $T$ years at simple interest, the rate of interest $R$ is:
    **$R = 100(N-1) / T$**
`,

  'compound-interest': `
# Mastering Compound Interest

Compound interest is the addition of interest to the principal sum of a loan or deposit, or in other words, interest on interest.

## 1. The Core Formula
*   **Amount (A) = P(1 + R/100)^T**
*   **Compound Interest (CI) = Amount - Principal = P[(1 + R/100)^T - 1]**

## 2. Compounding Frequencies
The standard formula assumes annual compounding. If the compounding frequency changes:
*   **Half-Yearly (Semi-Annually):** Rate becomes R/2, Time becomes 2T.
*   **Quarterly:** Rate becomes R/4, Time becomes 4T.

## 3. Difference between CI and SI
This is one of the most frequently asked question types:
*   **For 2 years:** Difference = $P(R/100)^2$
*   **For 3 years:** Difference = $P(R/100)^2 (3 + R/100)$

## 4. The Effective Rate Shortcut
For 2 years at R%, the effective compound interest rate is:
**Effective Rate = $R + R + (R×R)/100$**
Example: 10% for 2 years = $10 + 10 + 100/100 = 21\\%$. So CI is 21% of Principal.
`,

  'average': `
# Master Guide to Averages

Average (or arithmetic mean) represents the central value of a set of numbers.

## 1. Basic Formula
*   **Average = Sum of Observations / Number of Observations**
*   **Sum = Average × Number of Observations**

## 2. The Deviation Method (Shortcut)
Instead of adding all large numbers, choose a base number close to the values.
1.  Assume a base (e.g., 50).
2.  Find the difference (deviation) of each number from 50.
3.  Calculate the average of these deviations.
4.  Add this to your assumed base.

## 3. Properties of Average
*   If every observation is increased by $x$, the average increases by $x$.
*   If every observation is multiplied by $x$, the average is multiplied by $x$.
*   The average of the first $n$ natural numbers = $(n+1)/2$

## 4. Average Speed
*   If a person travels distance D at speed X and returns the same distance D at speed Y, the average speed is NOT (X+Y)/2.
*   **Average Speed = $2XY / (X + Y)$**
`,

  'train-problems': `
# Train Problems & Relative Speed

Train problems are a specific application of Time, Speed, and Distance where the length of the moving object (the train) must be factored in.

## 1. Fundamental Formula
*   **Speed = Distance / Time**
*   *Crucial Conversion:* To convert km/hr to m/s, multiply by **5/18**. To convert m/s to km/hr, multiply by **18/5**.

## 2. Distance Rules
The "Distance" covered by a train depends on what it is crossing:
*   **Point Object (Man, Pole, Tree):** Distance = Length of Train.
*   **Long Object (Platform, Bridge, Another Train):** Distance = Length of Train + Length of Object.

## 3. Relative Speed Rules
When two bodies are moving, their relative speed depends on their direction:
*   **Opposite Directions:** Speeds are added. Relative Speed = $S_1 + S_2$
*   **Same Direction:** Speeds are subtracted. Relative Speed = $|S_1 - S_2|$

## 4. Crossing Two Trains
*   Time taken by two trains (lengths L1, L2) to cross each other = $(L_1 + L_2) / Relative Speed$.
`,

  'boats-streams': `
# Boats & Streams

In these problems, the medium (water) itself has a velocity, which aids or opposes the boat's speed.

## 1. Terminology
*   **Speed of Boat in Still Water (B):** The boat's actual capability.
*   **Speed of Stream (S):** The speed of the water current.
*   **Downstream Speed (D):** Moving with the flow. **D = B + S**
*   **Upstream Speed (U):** Moving against the flow. **U = B - S**

## 2. Deriving B and S
If you know the Downstream and Upstream speeds, you can instantly find the boat and stream speeds:
*   **Speed of Boat (B) = $(D + U) / 2$**
*   **Speed of Stream (S) = $(D - U) / 2$**

## 3. Common Problem Types
*   A man can row $x$ km/h in still water. If the stream is flowing at $y$ km/h, it takes him $T$ hours to row to a place and back.
*   **Distance = $T \\times \\frac{x^2 - y^2}{2x}$**
`,

  'pipes-cisterns': `
# Pipes & Cisterns

This topic is conceptually identical to Time & Work, with one major difference: Pipes can do "negative work" by emptying the tank.

## 1. Concept of Efficiency
If a pipe can fill a tank in $x$ hours, the part of the tank filled in 1 hour is $1/x$. This is its efficiency.
*   **Inlet Pipe:** Positive Efficiency (+).
*   **Outlet Pipe (Leak):** Negative Efficiency (-).

## 2. The LCM Method (Best Shortcut)
1.  Take the LCM of the times taken by all pipes. This LCM represents the **Total Capacity** of the tank in "units".
2.  Calculate the 1-hour work (efficiency) of each pipe by dividing Total Capacity by their respective times.
3.  Add the efficiencies (remembering to subtract for outlet pipes).
4.  Total Time = Total Capacity / Net Efficiency.

## Example
Pipe A fills in 10 hours, Pipe B fills in 15 hours. A leak C empties in 30 hours.
*   Capacity (LCM of 10, 15, 30) = 30 units.
*   Eff A = +3 units/hr. Eff B = +2 units/hr. Eff C = -1 unit/hr.
*   Net Eff = 3 + 2 - 1 = 4 units/hr.
*   Time to fill = 30 / 4 = 7.5 hours.
`,

  'probability': `
# Fundamentals of Probability

Probability mathematically measures the chance of an event occurring. It always lies between 0 (impossible) and 1 (certain).

## 1. Basic Formula
*   **P(Event) = Number of Favorable Outcomes / Total Number of Possible Outcomes**

## 2. The AND & OR Rules
*   **AND (Intersection):** If you want Event A *and* Event B to happen independently, you **multiply** their probabilities. $P(A \\text{ and } B) = P(A) \\times P(B)$.
*   **OR (Union):** If you want Event A *or* Event B to happen (mutually exclusive), you **add** their probabilities. $P(A \\text{ or } B) = P(A) + P(B)$.

## 3. Important Contexts
*   **Coins:** Flipping $n$ coins creates $2^n$ possible outcomes.
*   **Dice:** Rolling $n$ standard 6-sided dice creates $6^n$ possible outcomes.
*   **Cards:** A standard deck has 52 cards, 4 suits (Hearts, Diamonds, Clubs, Spades) of 13 cards each. 26 are red, 26 are black. Face cards are J, Q, K (12 total).
`,

  'geometry-3d': `
# 3D Geometry (Mensuration)

Mensuration deals with calculating the length, area, and volume of different geometric shapes. 3D geometry focuses on solid objects.

## 1. Core Shapes & Formulas

*   **Cube (Side = a)**
    *   Volume = $a^3$
    *   Total Surface Area (TSA) = $6a^2$
    *   Diagonal = $a\\sqrt{3}$

*   **Cuboid (Length=l, Breadth=b, Height=h)**
    *   Volume = $l \\times b \\times h$
    *   TSA = $2(lb + bh + hl)$
    *   Diagonal = $\\sqrt{l^2 + b^2 + h^2}$

*   **Cylinder (Radius=r, Height=h)**
    *   Volume = $\\pi r^2 h$
    *   Curved Surface Area (CSA) = $2\\pi rh$
    *   TSA = $2\\pi r(r + h)$

*   **Cone (Radius=r, Height=h, Slant Height=l)**
    *   $l = \\sqrt{r^2 + h^2}$
    *   Volume = $\\frac{1}{3} \\pi r^2 h$
    *   CSA = $\\pi rl$

*   **Sphere (Radius=r)**
    *   Volume = $\\frac{4}{3} \\pi r^3$
    *   Surface Area = $4\\pi r^2$
`,

  'coding-decoding': `
# Coding & Decoding Strategies

Coding is a process used to encrypt a word or number, while Decoding is the process of decrypting it back to its original form.

## 1. Positional Values
You must memorize the numerical position of the English alphabet (A=1, B=2 ... Z=26).
*   **Shortcut (EJOTY):** E=5, J=10, O=15, T=20, Y=25. Use this as a framework to find surrounding letters quickly.

## 2. Opposite Letters
Letters that sum to 27 are opposites.
*   A-Z (1+26=27)
*   B-Y (Boy)
*   C-X (Crux)
*   D-W (Dew)
*   E-V (Even)

## 3. Common Coding Patterns
*   **Forward Shift:** Adding a constant number (+2, +3) to each letter.
*   **Backward Shift:** Subtracting a constant number.
*   **Alternating Series:** +1, -2, +3, -4, etc.
*   **Reverse Order:** Reversing the entire word before applying a shift.
*   **Cross Coding:** The first letter maps to the last letter, second maps to second-to-last, etc.
`,

  'blood-relations': `
# Blood Relations & Family Trees

Blood relations test your analytical skills to decipher familial relationships from convoluted statements.

## 1. Standard Representations (Family Tree)
Creating a visual diagram is the fastest way to solve these without confusion.
*   **Square / Box:** Male
*   **Circle:** Female
*   **Horizontal Line (-):** Sibling relationship (Brother-Sister)
*   **Double Line (=):** Married couple (Husband-Wife)
*   **Vertical Line (|):** Generational gap (Parent-Child)

## 2. Important Terminology
*   **Maternal:** Related to the mother's side (e.g., Maternal Uncle = Mother's brother).
*   **Paternal:** Related to the father's side.
*   **Nephew:** Brother's or Sister's son.
*   **Niece:** Brother's or Sister's daughter.
*   **Sibling:** Brother or sister.
*   **Spouse:** Husband or wife.

## 3. The "Pointing to a Photograph" Type
*   *Statement:* Pointing to a man, a woman said, "He is the only son of my mother's mother."
*   *Solution:* Break it down backwards. "My mother's mother" = Grandmother. "Only son of grandmother" = Maternal Uncle. So, the man is her maternal uncle.
`,

  'direction-sense': `
# Direction Sense & Path Tracing

Direction sense questions require you to trace a path based on a series of instructions regarding direction and distance.

## 1. The Compass
Always draw a small compass on your paper before starting:
*   **North (N):** Up
*   **South (S):** Down
*   **East (E):** Right
*   **West (W):** Left

## 2. Left/Right Turns
The most common mistake is misinterpreting left and right based on the current heading.
*   If facing **North**: Left is West, Right is East.
*   If facing **South**: Left is East, Right is West. (Opposite of North!)
*   If facing **East**: Left is North, Right is South.
*   If facing **West**: Left is South, Right is North.
*   *Shortcut:* A "Right turn" is always a 90° Clockwise rotation. A "Left turn" is a 90° Anti-Clockwise rotation.

## 3. Pythagorean Theorem
Often, you are asked for the shortest distance between the start and end points. If the path forms a right-angled triangle:
*   **Shortest Distance (Hypotenuse) = $\\sqrt{Base^2 + Perpendicular^2}$**
`,

  'seating-arrangement': `
# Seating Arrangement Logic

These puzzles require arranging individuals in a line, circle, or matrix based on a set of conditional statements.

## 1. Linear Seating
*   **North Facing:** 'Left' means your left, 'Right' means your right.
*   **South Facing:** 'Left' means your right, 'Right' means your left.

## 2. Circular Seating
*   **Facing the Center:**
    *   Left = Clockwise direction.
    *   Right = Anti-clockwise direction.
*   **Facing Outside:**
    *   Left = Anti-clockwise direction.
    *   Right = Clockwise direction.

## 3. Strategic Steps
1.  **Draw Placeholders:** First, draw the circle/line and mark the exact number of seats (e.g., 8 dashes).
2.  **Definite Information First:** Only place individuals on the diagram if the statement is absolute (e.g., "A sits 3rd to the right of B").
3.  **Hold Negative Info:** Statements like "C is not an immediate neighbor of D" should be written on the side and applied later to eliminate possibilities.
4.  **Connecting Links:** Look for the next statement that mentions individuals you have already placed on the board.
`,

  'syllogism': `
# Syllogism & Venn Diagrams

Syllogism questions consist of logical premises followed by conclusions. You must determine which conclusions logically follow, regardless of real-world facts.

## 1. The Venn Diagram Method
This is the safest and most visual method to solve syllogisms.
*   **"All A are B"**: Draw circle A completely inside circle B.
*   **"Some A are B"**: Draw circle A overlapping with circle B.
*   **"No A is B"**: Draw circle A and circle B completely separate, with a line and an 'X' between them.
*   **"Some A are not B"**: Draw an overlap, but shade a portion of A and mark that it cannot enter B.

## 2. The Golden Rule of Possibility
If a conclusion states a definitive fact (e.g., "All cats are dogs"), it MUST be true in **every single possible** Venn diagram you can draw. If there is even one valid diagram where it is false, the conclusion does not follow.

If a conclusion uses the word "Possibility" (e.g., "Some cats being dogs is a possibility"), it is true as long as you can draw **at least one** valid diagram where it happens.

## 3. "Either/Or" Cases
If two conclusions are individually false, they might form an "Either/Or" pair if:
1.  They have the same subjects and predicates.
2.  One is positive (Some/All) and the other is negative (No/Some not).
`,

  'clock-problems': `
# Clock Angles and Alignments

Clock problems test your understanding of the relative movement between the hour and minute hands of a standard analog clock.

## 1. Angular Speeds
The face of a clock is a circle of 360°, divided into 60 minute spaces (each space is 6°) and 12 hour spaces (each space is 30°).
*   **Minute Hand:** Moves 360° in 60 mins = **6° per minute**.
*   **Hour Hand:** Moves 30° in 60 mins = **0.5° per minute**.

## 2. The Master Angle Formula
To find the angle $\\theta$ between the hour hand and minute hand at any given time $H:M$:
*   **$\\theta = |30H - 5.5M|$**
*   *(If the result is greater than 180°, subtract it from 360° to find the interior angle).*

## 3. Important Coincidences
In every 12 hours, the hands of a clock:
*   **Coincide (0°):** 11 times (They skip the 12:00 to 1:00 hour because they coincide exactly at 12:00).
*   **Are Opposite (180°):** 11 times.
*   **Are at Right Angles (90°):** 22 times.
*   Therefore, in a full 24-hour day, they coincide 22 times, are opposite 22 times, and form right angles 44 times.
`,

  'cube-dice': `
# Cubes, Dice, and Spatial Reasoning

This topic tests your 3D spatial visualization, particularly regarding standard dice and unfolded cube nets.

## 1. Standard Dice Rules
A standard die is numbered 1 through 6 such that the sum of opposite faces is always 7.
*   1 is opposite 6
*   2 is opposite 5
*   3 is opposite 4
*   *Shortcut:* If a diagram shows a die where visible adjacent faces sum to 7 (e.g., you can see both 3 and 4), it is **not** a standard die.

## 2. Finding Opposites (Two Positions Given)
*   **One Common Face Rule:** If two positions of a die have exactly one face in common, start at that face and read the numbers in a **clockwise** direction for both dice. The numbers that appear in the same sequence are opposites.
*   **Two Common Faces Rule:** If two positions have two faces in common, the remaining third faces are definitively opposite to each other.

## 3. Unfolding Cubes (Nets)
When a cube is unfolded into a 2D cross or T-shape:
*   **Alternate Rule:** Faces that are in a straight line and separated by exactly one face are always opposites.
*   **Z-Shape Rule:** The ends of a "Z" shape drawn across the net are opposite faces.
`
};

const fsStr = fs.readFileSync('./src/data/topicContentDict.ts', 'utf8');

// We will inject the theories into the string.
// Let's use regex to find the topic object and insert inDepthTheory.

let updatedStr = fsStr;

for (const [topic, theory] of Object.entries(inDepthTheories)) {
  const safeTheory = theory.replace(/\`/g, '\\`'); // Escape backticks
  
  // Find where the topic definition ends. 
  // e.g. 'topic-name': { ... }
  // We'll look for formulas: "..."
  const regex = new RegExp("('" + topic + "'\\s*:\\s*{[\\s\\S]*?formulas\\s*:\\s*\"[^\"]*\")(\\s*})");
  
  updatedStr = updatedStr.replace(regex, "$1,\n    inDepthTheory: `" + safeTheory + "`$2");
}

fs.writeFileSync('./src/data/topicContentDict.ts', updatedStr);
console.log('Successfully added inDepthTheories to topicContentDict.ts');
