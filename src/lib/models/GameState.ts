import mongoose from 'mongoose';

const GameStateSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  xp: { type: Number, default: 0 },
  coins: { type: Number, default: 0 },
  streak: { type: Number, default: 1 },
  unlockedTopics: {
    type: [String],
    default: ['number-system', 'train-problems'],
  },
  completedQuizzes: {
    type: Map,
    of: Number,
    default: {},
  },
  prepMode: { type: String, default: 'general' },
  achievements: {
    type: [
      {
        id: String,
        title: String,
        desc: String,
        icon: String,
        unlockedAt: String,
      }
    ],
    default: [],
  },
  stats: {
    solvedCount: { type: Number, default: 0 },
    correctCount: { type: Number, default: 0 },
    totalTimeSpent: { type: Number, default: 0 },
    speedHistory: { type: [Number], default: [] },
    accuracyHistory: { type: [Number], default: [] },
    weakTopics: { type: [String], default: [] },
    strongTopics: { type: [String], default: [] },
  }
}, { timestamps: true });

export default mongoose.models.GameState || mongoose.model('GameState', GameStateSchema);
