import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // ask the query if there is an account that matches this and return if yes
    const result = await db.query(
     `SELECT email, password FROM customers
      WHERE email = $1
      AND password = $2 `,
      [email, password]
    );

    // create user variable that holds email and password
    const user = result.rows[0] ?? null;

    return NextResponse.json({
      success: !!user,
      user,
    });
  } catch (error) {
    console.error(error);
// only runs if it doesn work
    return NextResponse.json(
      { success: false, message: 'Login failed' }
    );
  }
}