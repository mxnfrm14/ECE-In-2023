import mysql from 'mysql2/promise';
import multer from 'multer';
import path from 'path';
import { db_credential } from './db_credential.js';

const getHighestEventId = async () => {
  const dbconnection = await mysql.createConnection(db_credential);

  const getHighestEventIdQuery = `
    SELECT MAX(PUBLICEVENTID) AS highestEventId
    FROM evenementpublic
  `;

  const [results] = await dbconnection.query(getHighestEventIdQuery);
  const highestEventId = results[0].highestEventId || 0;

  await dbconnection.end();

  return highestEventId;
};

const storage = multer.diskStorage({
  destination: 'public/',
  filename: function (req, file, cb) {
    getHighestEventId()
      .then((highestEventId) => {
        const fileExtension = path.extname(file.originalname);
        const fileName = `event${highestEventId + 1}_${Date.now()}${fileExtension}`;
        cb(null, fileName);
      })
      .catch((err) => {
        console.error('Error:', err);
        cb(err);
      });
  }
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection(db_credential);

  try {
    await dbconnection.connect();
    console.log('DB connected');

    // Multer middleware to handle file uploads
    await upload.array('files')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      // Extract the data from the request body
      const { date, title, lieu, heure } = req.body;
      const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
      const files = req.files;

      // Insert the event details into the database
      const insertEventQuery = `
        INSERT INTO evenementpublic (DATE, TITRE, LIEU, HEURE)
        VALUES (?, ?, ?, ?)
      `;
      const [insertEventResult] = await dbconnection.query(insertEventQuery, [formattedDate, title, lieu, heure]);
      const eventId = insertEventResult.insertId;

      // Insert the event media into the database and generate file names
      const insertMediaQuery = `
        INSERT INTO eventmedia (EVENTID, MEDIA)
        VALUES (?, ?)
      `;
      const fileNames = [];

      for (let i = 0; i < files.length; i++) {
        const filePath = files[i].path;
        const fileName = files[i].filename;
        await dbconnection.query(insertMediaQuery, [eventId, fileName]);
        fileNames.push(fileName);
      }

      await dbconnection.end();

      console.log('Event created successfully');
      console.log('File names:', fileNames);

      // Send the response after event creation and file upload
      res.status(200).json({ message: 'Event created successfully', files: fileNames });
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: error.message });
  }
}
