import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Topic from '@/lib/models/Topic';

export async function GET(req: Request) {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const includeQuestions = url.searchParams.get('includeQuestions') === 'true';

    // Exclude the heavy arrays for a lighter list fetch by default
    const query = Topic.find({});
    if (!includeQuestions) {
      query.select('-chapters -questions');
    } else {
      query.select('-chapters'); // still exclude chapters to save some weight
    }
    
    const topics = await query.exec();
    return NextResponse.json({ topics }, { status: 200 });
  } catch (error) {
    console.error('Topics GET Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
