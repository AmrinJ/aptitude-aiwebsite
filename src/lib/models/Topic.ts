import mongoose from 'mongoose';

const LocalizedStringSchema = new mongoose.Schema({
  en: { type: String, required: true },
  ta: { type: String },
  hi: { type: String }
}, { _id: false });

const QuestionSchema = new mongoose.Schema({
  id: { type: String, required: true },
  type: { type: String, enum: ['text', 'drag-drop', 'sequence', 'clickable', 'simulation', 'three-d'], default: 'text' },
  questionText: LocalizedStringSchema,
  options: {
    en: [String],
    ta: [String],
    hi: [String]
  },
  correctAnswer: { type: String, required: true },
  hint: LocalizedStringSchema,
  solvingSteps: [{
    title: LocalizedStringSchema,
    desc: LocalizedStringSchema,
    formula: String
  }],
  visualParams: { type: mongoose.Schema.Types.Mixed }
}, { _id: false });

const ChapterSchema = new mongoose.Schema({
  chapterIndex: { type: Number, required: true },
  id: { type: String, required: true },
  title: LocalizedStringSchema,
  subtitle: LocalizedStringSchema,
  what: LocalizedStringSchema,
  howItWorks: LocalizedStringSchema,
  commonMistakes: LocalizedStringSchema,
  tricks: LocalizedStringSchema,
  visualType: { type: String, default: 'none' },
  inDepthTheory: { type: String },
  questions: [QuestionSchema]
}, { _id: false });

const TopicSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  iconName: { type: String, required: true },
  subject: { type: String, enum: ['quant', 'logical'], required: true },
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  estTime: { type: String, required: true },
  prerequisites: { type: String },
  simulationType: { type: String, default: 'none' },
  chapters: [ChapterSchema],
  questions: [QuestionSchema]
}, { timestamps: true });

export default mongoose.models.Topic || mongoose.model('Topic', TopicSchema);
