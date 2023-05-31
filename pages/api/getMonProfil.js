import mysql from 'mysql2/promise';
import { db_credential } from './db_credential.js';

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection(db_credential);

  try {
    dbconnection.connect();
    console.log('DB connected');
    const query = `
      SELECT *
      FROM utilisateur `;
    const [data] = await dbconnection.query(query);
    dbconnection.end();

    console.log(postsWithAuthor);
    res.status(200).json({ results: postsWithAuthor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
