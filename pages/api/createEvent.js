import mysql from 'mysql2/promise';
import { db_credential } from './db_credential.js';

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection(db_credential);

  try {
    dbconnection.connect();
    console.log('DB connected');

    // Extract the data from the request body
    const { date, title } = req.body;
    const files = req.files;

    // Insert the event details into the database
    const insertEventQuery = `
      INSERT INTO evenementpublic (DATE, TITRE)
      VALUES (?, ?)
    `;
    const [insertEventResult] = await dbconnection.query(insertEventQuery, [date, title]);

    const eventId = insertEventResult.insertId;

    // Insert the event media into the database
    const insertMediaQuery = `
      INSERT INTO eventmedia (EVENTID, MEDIA)
      VALUES (?, ?)
    `;

    for (let i = 0; i < files.length; i++) {
      await dbconnection.query(insertMediaQuery, [eventId, files[i].path]);
    }

    dbconnection.end();

    res.status(200).json({ message: 'Event created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
