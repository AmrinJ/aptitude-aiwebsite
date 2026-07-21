import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import GameState from '@/lib/models/GameState';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    let state = await GameState.findOne({ userId: session.userId });

    if (!state) {
      state = await GameState.create({ userId: session.userId });
    }

    return NextResponse.json({ state }, { status: 200 });
  } catch (error) {
    console.error('GameState GET Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    await dbConnect();

    // Use findOneAndUpdate to apply updates
    const updatedState = await GameState.findOneAndUpdate(
      { userId: session.userId },
      { $set: body },
      { new: true, upsert: true }
    );

    return NextResponse.json({ state: updatedState }, { status: 200 });
  } catch (error) {
    console.error('GameState POST Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
