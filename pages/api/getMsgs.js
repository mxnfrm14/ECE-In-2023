import mysql from 'mysql2/promise'
import { db_credential } from './db_credential.js';

export default async function handler(req, res) {

  const dbconnection = await mysql.createConnection(db_credential);

  try {
    var moi = req.query.IDENTIFIANT; //recuperer l'id passé en parametre de la requet http
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
    WHERE (amis.USERID1 = ${moi} OR amis.USERID2 = ${moi}) ORDER BY message.FRIENDID, message.NUMEROMSG ;
    `; //on obtient les informations des messages envoyés et toutes les infos sur l'utilisateur qui l'envoie
    const values = [];
    const [data] = await dbconnection.query(query, values);
    dbconnection.end();
    res.status(200).json({ results: data });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

} 