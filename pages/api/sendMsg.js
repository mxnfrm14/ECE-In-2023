import mysql from 'mysql2/promise';
//import multer from 'multer';
import path from 'path';
import { db_credential } from './db_credential.js';

//https://www.npmjs.com/package/mysql2

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection(db_credential);

  try {
    await dbconnection.connect();
    console.log('DB connected');
    
    await (req, res, async (err) => {
        if (err) {
          return res.status(400).json({ message: err.message });
        }
  
        const { idamitie, nummsg, monId, texte} = req.body; //recuperer champs du msg à partir de la requete http

        const insertEventQuery = `
        INSERT INTO message (FRIENDID, NUMEROMSG, USERID, TEXTE)
        VALUES (?, ?, ?, ?)
        `;
        const [insertEventResult] = await dbconnection.query(insertEventQuery, [idamitie, nummsg, monId, texte]); //rajouter champs du msg ds la BDD
        const msgId = insertEventResult.insertId; //rajouter l'ID du msg

        const insertMediaQuery = `
        INSERT INTO message (MESSAGEID)
        VALUES (?)
        `;
    
        await dbconnection.query(insertMediaQuery, [msgId]);
        
        await dbconnection.end();

        console.log('Message envoyé');


        res.status(200).json({ message: 'Message envoyé !!'});
    });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: error.message });
    }
    
}

