import mysql from 'mysql2/promise'
import { db_credential } from './db_credential.js';

export default async function handler(req, res) {

  const dbconnection = await mysql.createConnection(db_credential);

  try {
    
    dbconnection.connect();
    console.log('DB connected');
    // const query = `SELECT * FROM amis WHERE USERID1 = ${req.query.IDENTIFIANT} OR USERID2 = ${req.query.IDENTIFIANT}`;
    const query = `SELECT * FROM amis WHERE USERID1 = ${req.query.IDENTIFIANT} OR USERID2 = ${req.query.IDENTIFIANT}`;
    const values = [];
    const [data] = await dbconnection.query(query, values);
    dbconnection.end();
    // res.status(200).json( data );
    
    const user1 = fetch(`http://localhost:3000/api/getUser?IDENTIFIANT=${data[0].USERID1}`)
    const user2 = fetch(`http://localhost:3000/api/getUser?IDENTIFIANT=${data[0].USERID2}`)
    const [user1Data, user2Data] = await Promise.all([user1, user2])
    const [user1Json, user2Json] = await Promise.all([user1Data.json(), user2Data.json()])
    const user1IDENTIFIANT = user1Json.results[0].IDENTIFIANT
    const user2IDENTIFIANT = user2Json.results[0].IDENTIFIANT

    data[0].USERID_TXT1 = user1IDENTIFIANT
    data[0].USERID_TXT2 = user2IDENTIFIANT
    

    res.status(200).json({ results: data });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}

// Result :
// {
//   "results":[
//      {
//         "FRIENDID":1,
//         "USERID1":1,
//         "USERID2":2,
//         "CONFIRMED":0,
//         "USERID_TXT1":"admin",
//         "USERID_TXT2":"admin2"
//      }
//   ]
// }