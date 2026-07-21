import { Question } from './topics';

// Helper to generate a random int between min and max (inclusive)
const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generate specific algorithmic questions based on topic ID
export const generateQuestionsForTopic = (topicId: string, count: number = 15): Question[] => {
  const questions: Question[] = [];

  for (let i = 1; i <= count; i++) {
    let qText = '';
    let options: string[] = [];
    let correctAnswer = '';
    let hint = '';
    let stepDesc = '';
    let visualParams: any = { type: 'default', variables: {} };

    let maxQType = 2;
    if (topicId === 'train-problems') maxQType = 4;
    const qType = rand(1, maxQType);

    if (topicId === 'percentage') {
      if (qType === 1) {
        const p = rand(1, 9) * 10;
        const val = rand(5, 50) * 10;
        const ans = (p * val) / 100;
        qText = `What is ${p}% of ${val}?`;
        correctAnswer = `${ans}`;
        options = [`${ans}`, `${ans + 10}`, `${ans - 5}`, `${ans + 20}`].sort(() => 0.5 - Math.random());
        hint = `Multiply ${val} by 0.${p < 10 ? '0' + p : p}`;
        stepDesc = `${p}% = ${p}/100. So, (${p}/100) * ${val} = ${ans}.`;
        visualParams = { type: 'percentage', variables: { part: ans, total: val, percentage: p } };
      } else {
        const p = rand(1, 5) * 10;
        const total = rand(10, 50) * 10;
        const part = (p * total) / 100;
        qText = `${part} is what percentage of ${total}?`;
        correctAnswer = `${p}`;
        options = [`${p}`, `${p + 10}`, `${p - 5}`, `${p + 15}`].sort(() => 0.5 - Math.random());
        hint = `Percentage = (Part / Total) * 100`;
        stepDesc = `(${part} / ${total}) * 100 = ${p}%.`;
        visualParams = { type: 'percentage', variables: { part, total, percentage: p } };
      }
    } 
    else if (topicId === 'profit-loss') {
      if (qType === 1) {
        const cp = rand(10, 100) * 10;
        const profitPercent = rand(1, 5) * 5;
        const ans = cp + (cp * profitPercent) / 100;
        qText = `Cost Price of an item is ₹${cp}. It is sold at a profit of ${profitPercent}%. Find the Selling Price.`;
        correctAnswer = `${ans}`;
        options = [`${ans}`, `${ans + 50}`, `${ans - 20}`, `${ans + 100}`].sort(() => 0.5 - Math.random());
        hint = `SP = CP + Profit. Profit is ${profitPercent}% of CP.`;
        stepDesc = `Profit = (${profitPercent}/100) * ${cp} = ${ans - cp}. SP = ${cp} + ${ans - cp} = ${ans}.`;
        visualParams = { type: 'profit-loss', variables: { cp, sp: ans, profitPercent } };
      } else {
        const cp = rand(10, 50) * 10;
        const sp = cp + rand(1, 5) * 20;
        const ans = ((sp - cp) / cp) * 100;
        qText = `Cost Price is ₹${cp} and Selling Price is ₹${sp}. Find the Profit Percentage.`;
        correctAnswer = `${ans}`;
        options = [`${ans}`, `${ans + 10}`, `${ans - 5}`, `${ans + 15}`].sort(() => 0.5 - Math.random());
        hint = `Profit% = (Profit / CP) * 100`;
        stepDesc = `Profit = ${sp} - ${cp} = ${sp - cp}. Profit% = (${sp - cp} / ${cp}) * 100 = ${ans}%.`;
        visualParams = { type: 'profit-loss', variables: { cp, sp, profitPercent: ans } };
      }
    }
    else if (topicId === 'train-problems') {
      if (qType === 1) {
        const len = rand(10, 40) * 10;
        const speedKm = rand(3, 10) * 18;
        const speedM = speedKm * (5/18);
        const ansRaw = len / speedM;
        const ans = Math.round(ansRaw * 10) / 10;
        qText = `A train ${len}m long is running at ${speedKm} km/hr. How many seconds will it take to cross a telegraph post?`;
        correctAnswer = `${ans}`;
        options = [`${ans}`, `${Math.round((ansRaw + 2) * 10) / 10}`, `${Math.round((ansRaw - 1) * 10) / 10}`, `${Math.round((ansRaw + 5) * 10) / 10}`].sort(() => 0.5 - Math.random());
        hint = `Convert speed to m/s by multiplying by 5/18. Time = Distance / Speed.`;
        stepDesc = `Speed = ${speedKm} * (5/18) = ${speedM.toFixed(1)} m/s. Time = ${len} / ${speedM.toFixed(1)} = ${ans} seconds.`;
        visualParams = { type: 'train', variables: { trainLen: len, speedKm, platformLen: 0 } };
      } else if (qType === 2) {
        const len = rand(10, 30) * 10;
        const platLen = rand(10, 30) * 10;
        const speedKm = rand(3, 10) * 18;
        const speedM = speedKm * (5/18);
        const ansRaw = (len + platLen) / speedM;
        const ans = Math.round(ansRaw * 10) / 10;
        qText = `A train ${len}m long is running at ${speedKm} km/hr. How many seconds will it take to cross a platform of length ${platLen}m?`;
        correctAnswer = `${ans}`;
        options = [`${ans}`, `${Math.round((ansRaw + 4) * 10) / 10}`, `${Math.round((ansRaw - 2) * 10) / 10}`, `${Math.round((ansRaw + 8) * 10) / 10}`].sort(() => 0.5 - Math.random());
        hint = `Total Distance = Train Length + Platform Length.`;
        stepDesc = `Speed = ${speedM.toFixed(1)} m/s. Total Dist = ${len} + ${platLen} = ${len + platLen}m. Time = ${len + platLen} / ${speedM.toFixed(1)} = ${ans} seconds.`;
        visualParams = { type: 'train', variables: { trainLen: len, speedKm, platformLen: platLen } };
      } else if (qType === 3) {
        // Two trains opposite direction
        const len1 = rand(10, 20) * 10;
        const len2 = rand(10, 20) * 10;
        const s1 = rand(3, 6) * 18;
        const s2 = rand(3, 6) * 18;
        const relSpeedKm = s1 + s2;
        const relSpeedM = relSpeedKm * (5/18);
        const ansRaw = (len1 + len2) / relSpeedM;
        const ans = Math.round(ansRaw * 10) / 10;
        qText = `Two trains of length ${len1}m and ${len2}m are running in opposite directions on parallel tracks at ${s1} km/hr and ${s2} km/hr respectively. How many seconds will they take to cross each other?`;
        correctAnswer = `${ans}`;
        options = [`${ans}`, `${Math.round((ansRaw + 2) * 10) / 10}`, `${Math.round((ansRaw - 1) * 10) / 10}`, `${Math.round((ansRaw + 4) * 10) / 10}`].sort(() => 0.5 - Math.random());
        hint = `Opposite direction: Relative Speed = S1 + S2. Total Distance = L1 + L2.`;
        stepDesc = `Rel Speed = ${s1} + ${s2} = ${relSpeedKm} km/h = ${relSpeedM.toFixed(1)} m/s. Dist = ${len1} + ${len2} = ${len1 + len2}m. Time = ${len1 + len2} / ${relSpeedM.toFixed(1)} = ${ans} s.`;
        visualParams = { type: 'train-dual', variables: { train1Len: len1, speed1: s1, train2Len: len2, speed2: s2, direction: 'opposite' } };
      } else {
        // Two trains same direction
        const len1 = rand(10, 20) * 10;
        const len2 = rand(10, 20) * 10;
        const s1 = rand(7, 10) * 18; // Faster train
        const s2 = rand(3, 5) * 18;  // Slower train
        const relSpeedKm = s1 - s2;
        const relSpeedM = relSpeedKm * (5/18);
        const ansRaw = (len1 + len2) / relSpeedM;
        const ans = Math.round(ansRaw * 10) / 10;
        qText = `Two trains of length ${len1}m and ${len2}m are running in the same direction on parallel tracks at ${s1} km/hr and ${s2} km/hr respectively. How many seconds will the faster train take to completely cross the slower train?`;
        correctAnswer = `${ans}`;
        options = [`${ans}`, `${Math.round((ansRaw + 5) * 10) / 10}`, `${Math.round((ansRaw - 2) * 10) / 10}`, `${Math.round((ansRaw + 10) * 10) / 10}`].sort(() => 0.5 - Math.random());
        hint = `Same direction: Relative Speed = |S1 - S2|. Total Distance = L1 + L2.`;
        stepDesc = `Rel Speed = ${s1} - ${s2} = ${relSpeedKm} km/h = ${relSpeedM.toFixed(1)} m/s. Dist = ${len1} + ${len2} = ${len1 + len2}m. Time = ${len1 + len2} / ${relSpeedM.toFixed(1)} = ${ans} s.`;
        visualParams = { type: 'train-dual', variables: { train1Len: len1, speed1: s1, train2Len: len2, speed2: s2, direction: 'same' } };
      }
    }
    else if (topicId === 'simplification') {
      const a = rand(5, 20);
      const b = rand(2, 10);
      const c = rand(2, 5);
      const ans = qType === 1 ? a + b * c : (a + b) * c;
      qText = qType === 1 ? `Simplify using BODMAS: ${a} + ${b} × ${c}` : `Simplify using BODMAS: (${a} + ${b}) × ${c}`;
      correctAnswer = `${ans}`;
      options = [`${ans}`, `${qType === 1 ? (a + b) * c : a + b * c}`, `${ans + 5}`, `${ans - 2}`].sort(() => 0.5 - Math.random());
      hint = qType === 1 ? `Multiply before adding!` : `Solve brackets first!`;
      stepDesc = qType === 1 ? `BODMAS dictates multiplication first: ${b} × ${c} = ${b * c}. Then add ${a} = ${ans}.` : `Brackets first: ${a} + ${b} = ${a + b}. Then multiply by ${c} = ${ans}.`;
      visualParams = { type: 'math-blocks', variables: { a, b, c, op: qType === 1 ? 'add-mul' : 'bracket-mul' } };
    }
    else if (topicId === 'simple-interest') {
      const p = rand(10, 100) * 100;
      const r = rand(2, 12);
      const t = rand(2, 5);
      const ans = (p * r * t) / 100;
      qText = `Find the simple interest on ₹${p} at ${r}% per annum for ${t} years.`;
      correctAnswer = `${ans}`;
      options = [`${ans}`, `${ans + 100}`, `${ans - 50}`, `${ans * 2}`].sort(() => 0.5 - Math.random());
      hint = `Use the formula SI = (P × R × T) / 100`;
      stepDesc = `SI = (${p} × ${r} × ${t}) / 100 = ${ans}.`;
      visualParams = { type: 'interest', variables: { principal: p, rate: r, time: t, interest: ans } };
    }
    else if (topicId === 'compound-interest') {
      const p = rand(10, 50) * 100;
      const r = 10;
      const t = 2;
      const amount = p * Math.pow((1 + r/100), t);
      const ans = amount - p;
      qText = `Find the compound interest on ₹${p} at ${r}% per annum for ${t} years.`;
      correctAnswer = `${ans}`;
      options = [`${ans}`, `${ans + 100}`, `${ans - 50}`, `${(p * r * t) / 100}`].sort(() => 0.5 - Math.random());
      hint = `Amount = P(1 + R/100)^T. CI = Amount - P.`;
      stepDesc = `Amount = ${p}(1 + 10/100)² = ${amount}. CI = ${amount} - ${p} = ${ans}.`;
      visualParams = { type: 'interest', variables: { principal: p, rate: r, time: t, interest: ans, isCompound: true } };
    }
    else if (topicId === 'coding-decoding') {
      const shifts = [1, 2, -1, -2];
      const shift = shifts[rand(0, 3)];
      const words = ["CAT", "DOG", "BAT", "PEN", "RUN"];
      const w = words[rand(0, 4)];
      const coded = w.split('').map(c => String.fromCharCode(c.charCodeAt(0) + shift)).join('');
      const words2 = ["CAR", "POT", "SIT", "MAN"];
      const w2 = words2[rand(0, 3)];
      const ans = w2.split('').map(c => String.fromCharCode(c.charCodeAt(0) + shift)).join('');
      qText = `If '${w}' is coded as '${coded}', how is '${w2}' coded in that language?`;
      correctAnswer = `${ans}`;
      options = [`${ans}`, `${w2.split('').map(c => String.fromCharCode(c.charCodeAt(0) - shift)).join('')}`, `${ans}A`, `Z${ans}`].sort(() => 0.5 - Math.random());
      hint = `Find the alphabetical shift between the letters.`;
      stepDesc = `Each letter is shifted by ${shift > 0 ? '+' : ''}${shift}. Applying this to ${w2} gives ${ans}.`;
      visualParams = { type: 'coding', variables: { word: w, coded: coded, target: w2, shift } };
    }
    else if (topicId === 'average') {
      const a = rand(10, 30);
      const b = rand(10, 30);
      const c = rand(10, 30);
      const ans = Math.round((a + b + c) / 3);
      qText = `Find the approximate average of ${a}, ${b}, and ${c}.`;
      correctAnswer = `${ans}`;
      options = [`${ans}`, `${ans + 2}`, `${ans - 2}`, `${ans + 5}`].sort(() => 0.5 - Math.random());
      hint = `Sum them up and divide by 3.`;
      stepDesc = `Sum = ${a + b + c}. Average = (${a + b + c}) / 3 = ${ans}.`;
      visualParams = { type: 'average', variables: { items: [a, b, c], average: ans } };
    }
    else if (topicId === 'geometry-3d') {
      const shapes = ['cube', 'cylinder', 'sphere', 'cone'];
      const shape = shapes[rand(0, 3)];
      const r = rand(2, 7);
      const h = rand(5, 10);
      let ans = 0;
      
      if (shape === 'cube') {
        ans = Math.pow(r, 3);
        qText = `Find the volume of a cube with side ${r}cm.`;
        hint = `Volume = a³`;
        stepDesc = `Volume = ${r} × ${r} × ${r} = ${ans} cm³.`;
      } else if (shape === 'cylinder') {
        ans = Math.round(Math.PI * Math.pow(r, 2) * h);
        qText = `Find the approximate volume of a cylinder with radius ${r}cm and height ${h}cm. (Use π≈3.14)`;
        hint = `Volume = πr²h`;
        stepDesc = `Volume = 3.14 × ${r}² × ${h} = ${ans} cm³.`;
      } else if (shape === 'sphere') {
        ans = Math.round((4/3) * Math.PI * Math.pow(r, 3));
        qText = `Find the approximate volume of a sphere with radius ${r}cm. (Use π≈3.14)`;
        hint = `Volume = (4/3)πr³`;
        stepDesc = `Volume = (4/3) × 3.14 × ${r}³ = ${ans} cm³.`;
      } else {
        ans = Math.round((1/3) * Math.PI * Math.pow(r, 2) * h);
        qText = `Find the approximate volume of a cone with radius ${r}cm and height ${h}cm. (Use π≈3.14)`;
        hint = `Volume = (1/3)πr²h`;
        stepDesc = `Volume = (1/3) × 3.14 × ${r}² × ${h} = ${ans} cm³.`;
      }
      
      correctAnswer = `${ans}`;
      options = [`${ans}`, `${ans + 15}`, `${ans - 12}`, `${Math.round(ans * 1.5)}`].sort(() => 0.5 - Math.random());
      visualParams = { type: 'geometry-3d', variables: { shape, radius: r, height: h, dim1: r, dim2: h } };
    }
    else if (topicId === 'boats-streams') {
      const bSpeed = rand(10, 25); // boat speed in still water
      const sSpeed = rand(2, 8);   // stream speed
      
      if (qType === 1) {
        const d = rand(2, 5) * 10; // distance
        const ans = d / (bSpeed + sSpeed);
        qText = `A boat has a speed of ${bSpeed} km/h in still water. The stream flows at ${sSpeed} km/h. How many hours will it take to travel ${d} km downstream?`;
        hint = `Downstream Speed = Boat Speed + Stream Speed.`;
        stepDesc = `Downstream speed = ${bSpeed} + ${sSpeed} = ${bSpeed + sSpeed} km/h. Time = ${d} / ${bSpeed + sSpeed} = ${ans} hours.`;
        correctAnswer = `${ans}`;
        options = [`${ans}`, `${ans + 1}`, `${ans + 2}`, `${Math.max(1, ans - 1)}`].sort(() => 0.5 - Math.random());
        visualParams = { type: 'boats', variables: { bSpeed, sSpeed, distance: d, mode: 'downstream' } };
      } else {
        const d = rand(2, 5) * 5; // distance
        const ans = d / (bSpeed - sSpeed);
        qText = `A boat travels at ${bSpeed} km/h in still water. Against a stream of ${sSpeed} km/h, how long to travel ${d} km upstream?`;
        hint = `Upstream Speed = Boat Speed - Stream Speed.`;
        stepDesc = `Upstream speed = ${bSpeed} - ${sSpeed} = ${bSpeed - sSpeed} km/h. Time = ${d} / ${bSpeed - sSpeed} = ${ans} hours.`;
        correctAnswer = `${ans}`;
        options = [`${ans}`, `${ans + 1.5}`, `${ans + 2}`, `${Math.max(0.5, ans - 0.5)}`].sort(() => 0.5 - Math.random());
        visualParams = { type: 'boats', variables: { bSpeed, sSpeed, distance: d, mode: 'upstream' } };
      }
    }
    else if (topicId === 'pipes-cisterns') {
      const p1 = rand(4, 12);
      const p2 = rand(6, 15);
      
      if (qType === 1) {
        const ans = Math.round((p1 * p2) / (p1 + p2) * 10) / 10;
        qText = `Pipe A can fill a tank in ${p1} hours. Pipe B can fill it in ${p2} hours. How long will it take if both are opened together?`;
        hint = `Time together = (A * B) / (A + B)`;
        stepDesc = `Using the formula: (${p1} × ${p2}) / (${p1} + ${p2}) = ${ans} hours.`;
        correctAnswer = `${ans}`;
        options = [`${ans}`, `${ans + 2.1}`, `${Math.max(1, ans - 1.5)}`, `${ans + 0.8}`].sort(() => 0.5 - Math.random());
        visualParams = { type: 'pipes', variables: { pipeA: p1, pipeB: p2, mode: 'both-fill' } };
      } else {
        const outlet = rand(15, 30);
        const ans = Math.round(1 / ((1/p1) - (1/outlet)) * 10) / 10;
        qText = `Pipe A fills a tank in ${p1} hours. An outlet pipe empties it in ${outlet} hours. If both open, how long to fill?`;
        hint = `Net work = 1/A - 1/B`;
        stepDesc = `Net hourly rate = 1/${p1} - 1/${outlet}. Total time = ${ans} hours.`;
        correctAnswer = `${ans}`;
        options = [`${ans}`, `${ans + 3.2}`, `${ans + 1.5}`, `${Math.max(1, ans - 2.5)}`].sort(() => 0.5 - Math.random());
        visualParams = { type: 'pipes', variables: { pipeA: p1, pipeB: outlet, mode: 'fill-empty' } };
      }
    }
    else if (topicId === 'number-system') {
      const start = rand(1, 5) * 10;
      const end = start + rand(3, 8) * 10;
      const ans = ((end - start) / 2) * (start + end); // simplified AP sum approximation for evens/odds
      qText = `Find the sum of all natural numbers from 1 to ${end}.`;
      const actualAns = (end * (end + 1)) / 2;
      hint = `Sum of first N natural numbers = N(N+1)/2.`;
      stepDesc = `N = ${end}. Sum = (${end} × ${end+1}) / 2 = ${actualAns}.`;
      correctAnswer = `${actualAns}`;
      options = [`${actualAns}`, `${actualAns + end}`, `${actualAns - 50}`, `${actualAns * 2}`].sort(() => 0.5 - Math.random());
      visualParams = { type: 'number-line', variables: { n: end, sum: actualAns } };
    }
    else if (topicId === 'blood-relations') {
      const p1 = ['A', 'P', 'X'][rand(0, 2)];
      const p2 = ['B', 'Q', 'Y'][rand(0, 2)];
      const p3 = ['C', 'R', 'Z'][rand(0, 2)];
      const relation = ['father', 'brother', 'uncle'][rand(0, 2)];
      qText = `${p1} is the ${relation} of ${p2}. ${p2} is the sister of ${p3}. How is ${p1} related to ${p3}?`;
      correctAnswer = relation;
      options = [relation, 'Mother', 'Cousin', 'Grandfather'].sort(() => 0.5 - Math.random());
      hint = `Trace the family tree from ${p2} to ${p3}.`;
      stepDesc = `Since ${p2} and ${p3} are siblings, ${p1}'s relationship to ${p3} is the same as to ${p2}.`;
      visualParams = { type: 'blood-relations', variables: { node1: p1, node2: p2, node3: p3, rel: relation } };
    }
    else if (topicId === 'direction-sense') {
      const dist1 = rand(3, 8);
      const dist2 = rand(4, 10);
      qText = `A man walks ${dist1}km North, turns right and walks ${dist2}km. What is his shortest distance from the starting point?`;
      const ans = Math.round(Math.sqrt(dist1*dist1 + dist2*dist2) * 10) / 10;
      correctAnswer = `${ans}`;
      options = [`${ans}`, `${ans + 2}`, `${Math.max(1, ans - 1)}`, `${ans + 1.5}`].sort(() => 0.5 - Math.random());
      hint = `Use the Pythagorean theorem: a² + b² = c²`;
      stepDesc = `Distance = √(${dist1}² + ${dist2}²) = √(${dist1*dist1 + dist2*dist2}) = ${ans}km.`;
      visualParams = { type: 'direction-sense', variables: { dir: 'North', turn: 'Right', d1: dist1, d2: dist2 } };
    }
    else if (topicId === 'seating-arrangement') {
      const groups = [
        ['A', 'B', 'C', 'D'],
        ['P', 'Q', 'R', 'S'],
        ['W', 'X', 'Y', 'Z']
      ];
      const g = groups[rand(0, 2)];
      qText = `${g[0]}, ${g[1]}, ${g[2]}, and ${g[3]} are sitting in a circle facing the center. ${g[0]} is opposite to ${g[2]}, and ${g[1]} is to the right of ${g[0]}. Who is opposite to ${g[1]}?`;
      correctAnswer = g[3];
      options = [g[0], g[1], g[2], g[3]];
      hint = `Draw a circle and place ${g[0]} and ${g[2]} first.`;
      stepDesc = `Place ${g[0]} and ${g[2]} opposite. ${g[1]} is right of ${g[0]}, leaving ${g[3]} to be opposite of ${g[1]}.`;
      visualParams = { type: 'seating-arrangement', variables: { shape: 'Circle', people: 4, rightOfA: g[1] } };
    }
    else if (topicId === 'syllogism') {
      const g1 = ['Cats', 'Dogs', 'Pens', 'Tables', 'Phones', 'Birds'];
      const g2 = ['Cars', 'Cups', 'Trees', 'Boxes', 'Houses', 'Stars'];
      const group1 = g1[rand(0, g1.length - 1)];
      const group2 = g2[rand(0, g2.length - 1)];
      const color = ['red', 'blue', 'green', 'black'][rand(0, 3)];
      qText = `Statements: All ${group1} are ${group2}. Some ${group2} are ${color}. Conclusion: Some ${group1} are ${color}. Does this logically follow?`;
      correctAnswer = `No`;
      options = [`Yes`, `No`, `Maybe`, `Cannot be determined`];
      hint = `Draw a Venn diagram.`;
      stepDesc = `The set of ${group1} is inside ${group2}, but the '${color}' items might only intersect the outer ${group2} circle. Therefore, it doesn't necessarily follow.`;
      visualParams = { type: 'syllogism', variables: { g1: group1, g2: group2, stmt: 'All' } };
    }
    else if (topicId === 'clock-problems') {
      const hr = rand(2, 10);
      const min = rand(1, 11) * 5;
      qText = `What is the angle between the hour and minute hands of a clock at ${hr}:${min < 10 ? '0'+min : min}?`;
      const angle = Math.abs(30 * hr - 5.5 * min);
      const ans = Math.min(angle, 360 - angle);
      correctAnswer = `${ans}°`;
      options = [`${ans}°`, `${ans + 10}°`, `${Math.max(0, ans - 15)}°`, `${ans + 22.5}°`].sort(() => 0.5 - Math.random());
      hint = `Angle = |30H - 5.5M|`;
      stepDesc = `Angle = |30(${hr}) - 5.5(${min})| = ${angle}. The inner angle is ${ans}°.`;
      visualParams = { type: 'clock-problems', variables: { hour: hr, minute: min, angle: ans } };
    }
    else if (topicId === 'cube-dice') {
      const targetFace = rand(1, 6);
      qText = `If a standard dice is rolled, what is the number opposite to ${targetFace}?`;
      correctAnswer = `${7 - targetFace}`;
      options = [`${7 - targetFace}`, `${targetFace === 1 ? 2 : 1}`, `${targetFace === 6 ? 5 : 6}`, `${targetFace === 3 ? 4 : 3}`].sort(() => 0.5 - Math.random());
      hint = `In a standard dice, opposite faces sum to 7.`;
      stepDesc = `Since it's a standard dice, 7 - ${targetFace} = ${7 - targetFace}.`;
      visualParams = { type: 'cube-dice', variables: { face: targetFace, oppSum: 7 } };
    }
    else if (topicId === 'probability') {
      const sum = rand(4, 10);
      let favorable = 0;
      for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= 6; j++) {
          if (i + j === sum) favorable++;
        }
      }
      qText = `Two fair dice are rolled. What is the probability of getting a sum of ${sum}?`;
      correctAnswer = `${favorable}/36`;
      options = [`${favorable}/36`, `${favorable+1}/36`, `${Math.max(1, favorable-1)}/36`, `${favorable+2}/36`].sort(() => 0.5 - Math.random());
      hint = `Find how many combinations add up to ${sum}, then divide by 36.`;
      stepDesc = `There are ${favorable} pairs that sum to ${sum}. Total outcomes = 36. Probability = ${favorable}/36.`;
      visualParams = { type: 'probability', variables: { sumTarget: sum, total: 36, fav: favorable } };
    }
    else if (topicId === 'simplification') {
      const a = rand(10, 50);
      const b = rand(2, 10);
      const c = rand(2, 10);
      const ans = a + b * c;
      qText = `Simplify: ${a} + ${b} × ${c}`;
      correctAnswer = `${ans}`;
      options = [`${ans}`, `${(a + b) * c}`, `${ans + 10}`, `${ans - 5}`].sort(() => 0.5 - Math.random());
      hint = `Remember BODMAS! Multiply before adding.`;
      stepDesc = `${b} × ${c} = ${b * c}. Then ${a} + ${b * c} = ${ans}.`;
      visualParams = { type: 'simplification', variables: { a, b, c, op1: 'add', op2: 'mul' } };
    }
    // Fallback for other topics to generate basic math logic so it's never empty or broken
    else {
      const x = rand(2, 20);
      const y = rand(2, 20);
      const ans = qType === 1 ? x * y : x + y;
      qText = qType === 1 ? `Standard Logical Question: Find the product of ${x} and ${y}.` : `Standard Logical Question: Find the sum of ${x} and ${y}.`;
      correctAnswer = `${ans}`;
      options = [`${ans}`, `${ans + 2}`, `${ans - 1}`, `${ans + 10}`].sort(() => 0.5 - Math.random());
      hint = qType === 1 ? `Multiply them.` : `Add them.`;
      stepDesc = qType === 1 ? `${x} × ${y} = ${ans}.` : `${x} + ${y} = ${ans}.`;
      visualParams = { type: topicId, variables: { x, y, op: qType === 1 ? 'mul' : 'add' } };
    }

    const correctIdx = options.indexOf(correctAnswer).toString();

    questions.push({
      id: `${topicId}-q${i}-${Date.now()}`,
      type: 'text',
      questionText: { en: qText, ta: qText, hi: qText },
      options: { en: options, ta: options, hi: options },
      correctAnswer: correctIdx, // Storing the INDEX as the correctAnswer to match the app's logic
      hint: { en: hint, ta: hint, hi: hint },
      solvingSteps: [
        {
          title: { en: 'Solution Step', ta: 'தீர்வு', hi: 'समाधान' },
          desc: { en: stepDesc, ta: stepDesc, hi: stepDesc }
        }
      ],
      visualParams
    });
  }

  return questions;
};
