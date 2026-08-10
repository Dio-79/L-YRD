import db from '../db';

export default async function handler(req, res) {
  try {
    const { rows } = await db.query('SELECT * FROM customers');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Could not find account:', error);
    res.status(500).json({ error: 'Error fetching account' });
  }
}