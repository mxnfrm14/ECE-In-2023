// db.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '192.168.1.254:3356',
  user: 'ene',
  password: 'Er25042003.',
  database: 'sandbox',
});

const getUsers = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Users', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = { getUsers };
