import mysql from 'mysql2/promise'
import { db_credential } from './db_credential.js';

export default async function handler(req, res) {

  const dbconnection = await mysql.createConnection(db_credential);

  try {
    
    dbconnection.connect();
    console.log('DB connected');
    const query = `
    SELECT message.*, utilisateur.*
    FROM message 
    JOIN amis 
      ON message.FRIENDID = amis.FRIENDID 
    JOIN utilisateur 
      ON (utilisateur.USERID = amis.USERID1 OR utilisateur.USERID = amis.USERID2) 
      AND utilisateur.USERID = message.USERID 
    WHERE (amis.USERID1 = 3 OR amis.USERID2 = 3);
    `; //on obtient les informations des messages envoyés et toutes les infos sur l'utilisateur qui l'envoie
    const values = [];
    const [data] = await dbconnection.query(query, values);
    dbconnection.end();
    res.status(200).json({ results: data });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

} 