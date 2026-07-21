import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/lib/models/User';
import GameState from '@/lib/models/GameState';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    await dbConnect();
    
    // Find all student users
    const students = await User.find({ role: 'student' }).select('-password');
    const studentIds = students.map(s => s._id);

    // Find their game states
    const states = await GameState.find({ userId: { $in: studentIds } });

    // Combine data
    const combinedData = students.map(student => {
      const state = states.find(s => s.userId.toString() === student._id.toString());
      return {
        id: student._id,
        email: student.email,
        createdAt: student.createdAt,
        xp: state?.xp || 0,
        coins: state?.coins || 0,
        unlockedTopicsCount: state?.unlockedTopics?.length || 0,
        completedQuizzesCount: state?.completedQuizzes ? Object.keys(state.completedQuizzes).length : 0,
        weakTopics: state?.stats?.weakTopics || [],
        strongTopics: state?.stats?.strongTopics || [],
      };
    });

    return NextResponse.json({ students: combinedData }, { status: 200 });
  } catch (error) {
    console.error('Admin Students GET Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
