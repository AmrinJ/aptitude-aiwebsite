import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/db';
import User from '@/lib/models/User';
import GameState from '@/lib/models/GameState';
import { createSession } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user (all new signups are students)
    const defaultDisplayName = email.split('@')[0];
    const user = await User.create({
      email,
      password: hashedPassword,
      displayName: defaultDisplayName,
      role: 'student'
    });

    // Create initial GameState
    await GameState.create({ userId: user._id });

    // Create session cookie
    await createSession(user._id.toString(), user.role, user.email);

    return NextResponse.json({ message: 'User created successfully', user: { id: user._id, email: user.email, role: user.role } }, { status: 201 });
  } catch (error: any) {
    console.error('Registration Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
