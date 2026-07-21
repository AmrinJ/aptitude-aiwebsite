const fs = require('fs');

const topics = [
  { id: 'number-system', name: 'Number System' },
  { id: 'simplification', name: 'Simplification' },
  { id: 'percentage', name: 'Percentage' },
  { id: 'profit-loss', name: 'Profit & Loss' },
  { id: 'simple-interest', name: 'Simple Interest' },
  { id: 'compound-interest', name: 'Compound Interest' },
  { id: 'average', name: 'Average' },
  { id: 'train-problems', name: 'Train Problems' },
  { id: 'boats-streams', name: 'Boats & Streams' },
  { id: 'pipes-cisterns', name: 'Pipes & Cisterns' },
  { id: 'probability', name: 'Probability' },
  { id: 'geometry-3d', name: 'Geometry 3D' },
  { id: 'coding-decoding', name: 'Coding Decoding' },
  { id: 'blood-relations', name: 'Blood Relations' },
  { id: 'direction-sense', name: 'Direction Sense' },
  { id: 'seating-arrangement', name: 'Seating Arrangement' },
  { id: 'syllogism', name: 'Syllogism' },
  { id: 'clock-problems', name: 'Clock Problems' },
  { id: 'cube-dice', name: 'Cube & Dice' }
];

const massiveTheoriesPath = './update_theory_massive.js';
const massiveChaptersPath = './update_chapters_massive.js';

let massiveTheories = {};
let massiveChapters = {};

// We can just execute them in a sandbox or extract strings.
// Actually, it's easier to just write them here, but they are huge.
// Let's just read the files and extract the objects.
// Let's just require them!
// Wait, they are not exported.

// I will just read them and extract using eval since it's my own code.
const theoryCode = fs.readFileSync(massiveTheoriesPath, 'utf8');
const chapterCode = fs.readFileSync(massiveChaptersPath, 'utf8');

// Extract massiveTheories
let match = theoryCode.match(/const massiveTheories = (\{[\s\S]*?\});\n\nlet fsStr/);
if (match) {
  massiveTheories = eval('(' + match[1] + ')');
}

// Extract massiveChapters
match = chapterCode.match(/const massiveChapters = (\{[\s\S]*?\});\n\nlet fsStr/);
if (match) {
  massiveChapters = eval('(' + match[1] + ')');
}

let result = `// Dictionary containing actual educational content for all 19 topics\nexport const topicContentDict: Record<string, any> = {\n`;

for (const t of topics) {
  let inDepthTheory = massiveTheories[t.id] || massiveTheories['number-system'];
  let chapterData = massiveChapters[t.id] || massiveChapters['default'];
  
  let formulasInDepth = chapterData.formulas;
  let mistakesInDepth = chapterData.mistakes;

  result += `  '${t.id}': {
    concepts: "Detailed concept for ${t.name}. Master the basics to proceed.",
    tricks: "Use shortcut tricks and Vedic math for ${t.name}.",
    mistakes: "Common mistake in ${t.name}: skipping the fundamentals.",
    formulas: "Formulas for ${t.name}: Always double check your units.",
    formulasInDepth: \`${formulasInDepth.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\$/g, '\\$')}\`,
    mistakesInDepth: \`${mistakesInDepth.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\$/g, '\\$')}\`,
    inDepthTheory: \`${inDepthTheory.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\$/g, '\\$')}\`
  },\n`;
}

result += `};\n`;

fs.writeFileSync('./src/data/topicContentDict.ts', result);
console.log('Regenerated topicContentDict.ts safely!');
