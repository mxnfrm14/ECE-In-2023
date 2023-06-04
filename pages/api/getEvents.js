import mysql from 'mysql2/promise';
import { db_credential } from './db_credential.js';

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection(db_credential);

  try {
    dbconnection.connect();
    console.log('DB connected');
    const query = `
      SELECT evenementpublic.*, eventmedia.*
      FROM evenementpublic
      JOIN eventmedia ON eventmedia.EVENTID = evenementpublic.PUBLICEVENTID
    `;
    const [data] = await dbconnection.query(query);
    dbconnection.end();

    const reorderedData = {};

    data.forEach((item) => {
      const eventId = item.EVENTID;
      if (reorderedData[eventId]) {
        reorderedData[eventId].MEDIA.push(item.MEDIA);
      } else {
        reorderedData[eventId] = {
          ...item,
          MEDIA: [item.MEDIA],
        };
      }
    });

  const finalData = Object.values(reorderedData);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  finalData.forEach((event) => {
    event.DATE = formatDate(event.DATE);
  });

      
    res.status(200).json({results: finalData});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
