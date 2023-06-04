import mysql from 'mysql2/promise';
import multer from 'multer';
import path from 'path';
import { db_credential } from './db_credential.js';

const getHighestEventId = async () => {
  const dbconnection = await mysql.createConnection(db_credential);

  const getHighestEventIdQuery = `
    SELECT MAX(POSTID) AS highestEventId
    FROM post
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
        const fileName = `post${highestEventId + 1}_${Date.now()}${fileExtension}`;
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
    await upload.single('file')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      const { date, content, lieu, heure, option, userid } = req.body;
      const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
      const file = req.file;
      let fileName = '';
      if (file) {
        fileName = file.filename;
      }
      if (option === 'public') {
        var status = 1;
        } else {
            var status = 0;
        }

      const insertEventQuery = `
        INSERT INTO post (DATE, TEXTE, LIEU, HEURE, PUBLIC, USERID, MEDIA )
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      const [insertEventResult] = await dbconnection.query(insertEventQuery, [formattedDate, content, lieu, heure, status, userid, fileName]);
      const eventId = insertEventResult.insertId;

      await dbconnection.end();

      console.log('Event created successfully');
      console.log('File name:', fileName);

      res.status(200).json({ message: 'Event created successfully', files: fileName });
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: error.message });
  }
}
