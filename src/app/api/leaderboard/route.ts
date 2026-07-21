import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import GameState from '@/lib/models/GameState';
import User from '@/lib/models/User';

export async function GET() {
  try {
    await dbConnect();
    
    // Find all GameStates sorted by XP descending, limit to top 50
    const topStates = await GameState.find({})
      .sort({ xp: -1 })
      .limit(50)
      .populate({
        path: 'userId',
        model: User,
        select: 'displayName role'
      })
      .exec();

    const leaderboardRaw = topStates.map((state) => {
      // populate replaces userId ObjectId with the User document if it exists
      const userDoc = state.userId as any;
      return {
        id: state._id,
        displayName: userDoc?.displayName || 'Anonymous Student',
        role: userDoc?.role || 'student',
        xp: state.xp,
        badgesCount: state.achievements?.length || 0,
      };
    });

    const leaderboard = leaderboardRaw
      .filter(entry => entry.role !== 'admin')
      .map((entry, index) => ({
        ...entry,
        rank: index + 1
      }));

    return NextResponse.json({ leaderboard }, { status: 200 });
  } catch (error) {
    console.error('Leaderboard GET Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
