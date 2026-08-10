import db from '../db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    const { rows } = await db.query(
      'SELECT * FROM customers WHERE email = $1',
      [email]
    );

    const user = rows[0];

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Plain-text comparison (not recommended)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    return res.status(200).json({
      success: true,
      user: {
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Login failed:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}