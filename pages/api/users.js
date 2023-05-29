import mysql from 'mysql2/promise'

export default async function handler(req, res) {

  const dbconnection = await mysql.createConnection({
    host: '192.168.1.254',
    port: '3356',
    database: 'sandbox',
    user: 'ene',
    password: 'root'
  });

  try {
    
    dbconnection.connect();
    console.log('DB connected');
    const query = 'SELECT * FROM Users';
    const values = [];
    const [data] = await dbconnection.query(query, values);
    dbconnection.end();
    res.status(200).json({ results: data });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

    // res.status(200).json({ message: 'Hello from API!' });
  }