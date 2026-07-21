import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'student'],
    default: 'student',
  },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
