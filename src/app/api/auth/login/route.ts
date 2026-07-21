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

    // Special hardcoded admin seed check
    if (email === 'amrinjameer@gmail.com' && password === 'amrin@05') {
      let adminUser = await User.findOne({ email: 'amrinjameer@gmail.com' });
      if (!adminUser) {
        const hashed = await bcrypt.hash('amrin@05', 10);
        adminUser = await User.create({
          email: 'amrinjameer@gmail.com',
          password: hashed,
          displayName: 'Admin Amrin',
          role: 'admin'
        });
        await GameState.create({ userId: adminUser._id });
      } else if (adminUser.role !== 'admin') {
        adminUser.role = 'admin';
        await adminUser.save();
      }
      await createSession(adminUser._id.toString(), adminUser.role, adminUser.email);
      return NextResponse.json({ message: 'Admin logged in', user: { id: adminUser._id, email: adminUser.email, role: adminUser.role } }, { status: 200 });
    }

    // Normal user login
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    await createSession(user._id.toString(), user.role, user.email);

    return NextResponse.json({ message: 'Logged in successfully', user: { id: user._id, email: user.email, role: user.role } }, { status: 200 });
  } catch (error: any) {
    console.error('Login Error:', error);
    return NextResponse.json({ error: error.message, stack: error.stack }, { status: 500 });
  }
}
