// import { createConnection } from 'mysql2/promise';
// import { db_credential } from './db_credential';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { username, password } = req.body.credentials;

//     try {
//       const dbConnection = await createConnection(db_credential);
//       console.log('DB connected');

//       const query = 'SELECT IDENTIFIANT, PASSWORD FROM `utilisateur` WHERE IDENTIFIANT = ? AND password = ?;';
//       const values = [username, password];

//       const [data] = await dbConnection.query(query, values);

//       await dbConnection.end();

//       // If user exists, return user data
//       if (data.length > 0) {
//         const user = {
//           id: data[0].IDENTIFIANT,
//           name: data[0].NAME,
//           email: data[0].EMAIL
//         };
//         res.status(200).json(user);
//       } else {
//         // Return null if user does not exist or credentials are invalid
//         res.status(401).json({ message: 'Invalid credentials' });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

import { createConnection } from 'mysql2/promise';
import { db_credential } from './db_credential';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body.credentials;

    try {
      const dbConnection = await createConnection(db_credential);
      console.log('DB connected');

      const query = 'SELECT IDENTIFIANT, PASSWORD FROM `utilisateur` WHERE IDENTIFIANT = ? AND password = ?;';
      const values = [username, password];

      const [data] = await dbConnection.query(query, values);

      await dbConnection.end();

      // If user exists, return user data
      if (data.length > 0) {
        const user = {
          id: data[0].IDENTIFIANT,
          name: data[0].NAME,
          email: data[0].EMAIL,
          is_success: true,
        };
        res.status(200).json(user);
      } else {
        // Return null if user does not exist or credentials are invalid
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}