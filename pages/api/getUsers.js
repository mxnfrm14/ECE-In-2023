import mysql from 'mysql2/promise'
import { db_credential } from './db_credential.js';

export default async function handler(req, res) {

  const dbconnection = await mysql.createConnection({
    host: '192.168.1.254',
    database: 'ecein',
    user: 'root'
  });

  try {
    
    dbconnection.connect();
    console.log('DB connected');
    const query = 'SELECT * FROM utilisateur';
    const values = [];
    const [data] = await dbconnection.query(query, values);
    dbconnection.end();
    res.status(200).json({ results: data });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}