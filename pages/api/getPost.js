import mysql from 'mysql2/promise';
import { db_credential } from './db_credential.js';

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection(db_credential);

  try {
    dbconnection.connect();
    console.log('DB connected');
    const query = `
      SELECT * FROM post WHERE POSTID = ${req.query.post};
    `;
    const [data] = await dbconnection.query(query);
    dbconnection.end();

    const postsWithAuthor = data.map((post) => {
      const author = {
        USERID: post.USERID,
      };
      return {
        ...post,
        author,
      };
    });

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return date.toLocaleDateString('fr-FR', options);
    };

    postsWithAuthor.forEach((post) => {
      post.DATE = formatDate(post.DATE);
    });

    

    console.log(postsWithAuthor);
    res.status(200).json({ results: postsWithAuthor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
