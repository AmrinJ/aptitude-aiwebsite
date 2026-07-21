import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/lib/models/User';
import { getSession } from '@/lib/auth';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await dbConnect();
    const user = await User.findById(session.userId).select('-password');
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await request.json();
    await dbConnect();

    const updateData: any = {};
    if (body.displayName) {
      updateData.displayName = body.displayName;
    }
    
    if (body.password) {
      updateData.password = await bcrypt.hash(body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      session.userId, 
      { $set: updateData }, 
      { new: true }
    ).select('-password');

    return NextResponse.json({ user: updatedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
