import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Topic from '@/lib/models/Topic';
import { TOPICS } from '@/data/topics';
import { getSession } from '@/lib/auth';

export async function POST() {
  try {
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    
    // Clear existing to avoid duplicates during migration
    await Topic.deleteMany({});

    // Insert all
    await Topic.insertMany(TOPICS);

    return NextResponse.json({ message: 'Migration successful', count: TOPICS.length }, { status: 200 });
  } catch (error) {
    console.error('Migration error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
