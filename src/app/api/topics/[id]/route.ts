import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Topic from '@/lib/models/Topic';

export const dynamic = 'force-dynamic';

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const params = await context.params;
    await dbConnect();
    const topic = await Topic.findOne({ id: params.id }).exec();
    
    if (!topic) {
      return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
    }

    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    console.error('Topic GET Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
