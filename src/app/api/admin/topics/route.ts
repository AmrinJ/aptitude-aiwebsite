import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Topic from '@/lib/models/Topic';
import { getSession } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();
    const newTopic = await Topic.create(body);

    return NextResponse.json({ topic: newTopic }, { status: 201 });
  } catch (error) {
    console.error('Topic POST Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();
    
    if (!body.id) {
      return NextResponse.json({ error: 'Missing topic id' }, { status: 400 });
    }

    const updatedTopic = await Topic.findOneAndUpdate(
      { id: body.id }, 
      { $set: body }, 
      { new: true }
    );

    if (!updatedTopic) {
      return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
    }

    return NextResponse.json({ topic: updatedTopic }, { status: 200 });
  } catch (error) {
    console.error('Topic PUT Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getSession();
    if (!session || session.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing topic id' }, { status: 400 });
    }

    const deleted = await Topic.findOneAndDelete({ id });
    if (!deleted) {
      return NextResponse.json({ error: 'Topic not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Topic DELETE Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
